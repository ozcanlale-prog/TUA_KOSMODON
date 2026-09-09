'use client';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Radio, ShieldAlert, Cpu, Activity, Terminal, Globe, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../components/Providers';

export default function TuaLivePage() {
  const { t, lang } = useLanguage();
  const mountRef = useRef(null);
  const [telemetryLogs, setTelemetryLogs] = useState([
    "[03:40:12] TUA-MERKEZ: AnK-1 Yer İstasyonu telemetri kilitlenmesi başarılı.",
    "[03:40:18] ORBIT: WGS84 Geoid referans modeli yükleniyor...",
    "[03:40:24] SHADER: GLSL fragment programı donanım ivmelendiricisine bağlandı."
  ]);

  // ISS Anlık Konum State'i
  const [issPosition, setIssPosition] = useState({ latitude: '39.9334', longitude: '32.8597', velocity: '27,600' });

  // Arka planda ISS konumunu güncelleyen API entegrasyonu
  useEffect(() => {
    const fetchISSLocation = async () => {
      try {
        const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
        const data = await response.json();
        if (data && data.latitude && data.longitude) {
          setIssPosition({
            latitude: data.latitude.toFixed(4),
            longitude: data.longitude.toFixed(4),
            velocity: Math.round(data.velocity).toLocaleString()
          });
        }
      } catch (error) {
        try {
          const res = await fetch('http://api.open-notify.org/iss-now.json');
          const d = await res.json();
          if (d && d.iss_position) {
            setIssPosition(prev => ({
              ...prev,
              latitude: parseFloat(d.iss_position.latitude).toFixed(4),
              longitude: parseFloat(d.iss_position.longitude).toFixed(4),
            }));
          }
        } catch (err) {
          console.error("ISS Telemetri veri akışı güncellenemedi", err);
        }
      }
    };

    fetchISSLocation();
    const issInterval = setInterval(fetchISSLocation, 4000);
    return () => clearInterval(issInterval);
  }, []);

  // Dile göre dinamik telemetri logları akışı
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().toTimeString().split(' ')[0];
      const actionsTr = [
        "Optik spektral tarama verisi tampona yazıldı.",
        "Ankara-Gölbaşı yer istasyonu sinyal seviyesi: -68 dBm.",
        "Atmosferik saçılma katsayısı nominal sınırlarda.",
        "ISS telemetri pakedi doğrulandı (CRC: OK)."
      ];
      const actionsEn = [
        "Optical spectral scan data written to buffer.",
        "Ankara-Gölbaşı ground station signal level: -68 dBm.",
        "Atmospheric scattering coefficient within nominal limits.",
        "ISS telemetry packet verified (CRC: OK)."
      ];
      const actions = lang === 'en' ? actionsEn : actionsTr;
      const randomAction = actions[Math.floor(Math.random() * actions.length)];
      setTelemetryLogs(prev => [`[${now}] ${randomAction}`, ...prev.slice(0, 5)]);
    }, 4000);

    return () => clearInterval(interval);
  }, [lang]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    container.innerHTML = '';

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 2.4;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const sunDirection = new THREE.Vector3(5, 2, 3).normalize();

    const sunLight = new THREE.DirectionalLight(0xffffff, 1.9);
    sunLight.position.copy(sunDirection);
    scene.add(sunLight);

    const ambientLight = new THREE.AmbientLight(0x222222);
    scene.add(ambientLight);

    const textureLoader = new THREE.TextureLoader();

    function loadSharpTexture(url) {
      const texture = textureLoader.load(url);
      texture.generateMipmaps = true;
      texture.minFilter = THREE.LinearMipmapLinearFilter;
      texture.magFilter = THREE.LinearFilter;
      if (renderer.capabilities.getMaxAnisotropy) {
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
      }
      return texture;
    }

    const dayTexture = loadSharpTexture('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg');
    const nightTexture = loadSharpTexture('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_lights_2048.png');
    const cloudTexture = loadSharpTexture('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png');

    const earthMaterial = new THREE.ShaderMaterial({
      uniforms: {
        dayTexture: { value: dayTexture },
        nightTexture: { value: nightTexture },
        sunDirection: { value: sunDirection }
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        void main() {
          vUv = uv;
          vNormal = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D dayTexture;
        uniform sampler2D nightTexture;
        uniform vec3 sunDirection;
        varying vec2 vUv;
        varying vec3 vNormal;

        void main() {
          float intensity = dot(vNormal, sunDirection);
          vec4 dayColor = texture2D(dayTexture, vUv);
          vec4 nightColor = texture2D(nightTexture, vUv) * 2.0; 
          float dayMix = smoothstep(-0.15, 0.15, intensity);
          vec4 finalColor = mix(nightColor * (1.0 - dayMix), dayColor, dayMix);
          gl_FragColor = finalColor;
        }
      `
    });

    const geometry = new THREE.SphereGeometry(1.3, 128, 128);
    const planet = new THREE.Mesh(geometry, earthMaterial);
    
    const tiltZ = 0.41;
    const tiltX = 0.1;

    planet.rotation.z = tiltZ; 
    planet.rotation.x = tiltX;
    planet.rotation.y = 2.8; 
    scene.add(planet);

    const cloudGeometry = new THREE.SphereGeometry(1.32, 128, 128);
    const cloudMaterial = new THREE.MeshStandardMaterial({
      map: cloudTexture,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending
    });
    const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
    clouds.rotation.z = tiltZ;
    clouds.rotation.x = tiltX;
    clouds.rotation.y = 2.8;
    scene.add(clouds);

    planet.position.set(0.4, -0.5, 0);
    clouds.position.set(0.4, -0.5, 0);

    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let rotationVelocity = 0;    
    const damping = 0.95;      

    const handleStart = (clientX) => {
      isDragging = true;
      previousMousePosition = { x: clientX, y: 0 };
      rotationVelocity = 0; 
    };

    const handleMove = (clientX) => {
      if (!isDragging) return;
      const deltaX = clientX - previousMousePosition.x;
      rotationVelocity = deltaX * 0.004;

      planet.rotateY(rotationVelocity);
      clouds.rotateY(rotationVelocity * 1.05); 

      previousMousePosition = { x: clientX, y: 0 };
    };

    const handleEnd = () => {
      isDragging = false;
    };

    const onMouseDown = (e) => handleStart(e.clientX);
    const onMouseMove = (e) => handleMove(e.clientX);
    const onMouseUp = () => handleEnd();

    const onTouchStart = (e) => {
      if (e.touches.length === 1) handleStart(e.touches[0].clientX);
    };
    const onTouchMove = (e) => {
      if (e.touches.length === 1) handleMove(e.touches[0].clientX);
    };
    const onTouchEnd = () => handleEnd();

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    container.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    let animationFrameId;
    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      
      if (isDragging) {
        // Kullanıcı sürüklüyor
      } else if (Math.abs(rotationVelocity) > 0.0001) {
        planet.rotateY(rotationVelocity);
        clouds.rotateY(rotationVelocity * 1.05);
        rotationVelocity *= damping; 
      } else {
        planet.rotateY(0.0004);
        clouds.rotateY(0.00045);
      }

      renderer.render(scene, camera);
    }
    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 font-mono overflow-x-hidden w-full">
      
      {/* Üst Başlık ve Canlı Durum Paneli */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 bg-slate-900/50 p-6 rounded-3xl border border-slate-800 backdrop-blur-xl">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/40 text-red-400 text-xs font-semibold mb-3">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>{lang === 'en' ? "System Online • 24/7 Uninterrupted Telemetry" : "Sistem Çevrim içi • 7/24 Kesintisiz Telemetri"}</span>
          </div>
          <h1 className="text-3xl font-black text-white tracking-wide">{lang === 'en' ? "TUA LIVE" : "TUA CANLI"}</h1>
          <p className="text-slate-400 text-xs mt-1">
            {lang === 'en' ? "International Space Station live video feed and 3D interactive orbit simulation." : "Uluslararası Uzay İstasyonu canlı video akışı ve 3D interaktif yörünge simülasyonu."}
          </p>
        </div>
      </div>

      {/* Ana Canlı Akış / Görüntüleme Ekranı */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Sol 2 Sütun: Ana 3D Dünya Oynatıcısı ve Alt Kartlar */}
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl relative">
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-white text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              {lang === 'en' ? "TUA GÖKTÜRK: National Observation Satellite Live" : "TUA GÖKTÜRK: Millî Gözlem Uydusu Canlı"}
            </div>

            <div className="aspect-video w-full bg-black relative flex items-center justify-center overflow-hidden touch-none">
              {/* Three.js 3D Dünya Konteyner Alanı */}
              <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing"></div>
            </div>
          </div>

          {/* Alt Bilgi Kartları */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80">
              <Activity className="w-5 h-5 text-blue-400 mb-2" />
              <h3 className="text-xs font-bold text-white mb-1">{lang === 'en' ? "Orbital Velocity" : "Yörünge Hızı"}</h3>
              <p className="text-[11px] text-slate-400 font-mono">{issPosition.velocity} km/s</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80">
              <ShieldAlert className="w-5 h-5 text-emerald-400 mb-2" />
              <h3 className="text-xs font-bold text-white mb-1">{lang === 'en' ? "Radiation Level" : "Radyasyon Seviyesi"}</h3>
              <p className="text-[11px] text-slate-400 font-mono">{lang === 'en' ? "Nominal / Safe Zone" : "Nominal / Güvenli Bölge"}</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80">
              <Cpu className="w-5 h-5 text-purple-400 mb-2" />
              <h3 className="text-xs font-bold text-white mb-1">{lang === 'en' ? "Telemetry Latency" : "Telemetri Gecikmesi"}</h3>
              <p className="text-[11px] text-slate-400 font-mono">14 ms ({lang === 'en' ? "Ankara Ground Station" : "Ankara Yer İstasyonu"})</p>
            </div>
          </div>
        </div>

        {/* Sağ Sütun: Profesyonel Komuta & Telemetri Paneli */}
        <div className="space-y-6">
          
          {/* Yörünge Durum Paneli */}
          <div className="bg-slate-900/40 p-6 rounded-3xl border border-slate-800/80 backdrop-blur-xl">
            <h2 className="text-xs font-bold tracking-widest uppercase text-blue-400 mb-5 flex items-center gap-2">
               <Globe className="w-4 h-4 text-blue-400" /> {lang === 'en' ? "Ground Station Data Link" : "Yer İstasyonu Veri Bağlantısı"}
            </h2>
            
            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center p-3 rounded-xl bg-black/40 border border-slate-800/80">
                <span className="text-slate-400">{lang === 'en' ? "Active Station:" : "Aktif İstasyon:"}</span>
                <span className="text-emerald-400 font-bold">ANKARA-01 ({lang === 'en' ? "Main" : "Ana"})</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl bg-black/40 border border-slate-800/80">
                <span className="text-slate-400">{lang === 'en' ? "ISS Latitude:" : "ISS Enlem:"}</span>
                <span className="text-white font-bold">{issPosition.latitude}° N</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl bg-black/40 border border-slate-800/80">
                <span className="text-slate-400">{lang === 'en' ? "ISS Longitude:" : "ISS Boylam:"}</span>
                <span className="text-white font-bold">{issPosition.longitude}° E</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl bg-black/40 border border-slate-800/80">
                <span className="text-slate-400">{lang === 'en' ? "Spectral Band:" : "Spektral Bant:"}</span>
                <span className="text-cyan-400">RGB / {lang === 'en' ? "Near Infrared" : "Yakın Kızılötesi"}</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl bg-black/40 border border-slate-800/80">
                <span className="text-slate-400">{lang === 'en' ? "Protocol Security:" : "Protokol Güvenliği:"}</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> AES-256 {lang === 'en' ? "Encrypted" : "Şifreli"}
                </span>
              </div>
            </div>
          </div>

          {/* Anlık Canlı Terminal / Log Paneli */}
          <div className="bg-slate-950 p-6 rounded-3xl border border-slate-800 shadow-xl">
            <h2 className="text-xs font-bold tracking-widest uppercase text-purple-400 mb-4 flex items-center gap-2">
               <Terminal className="w-4 h-4" /> {lang === 'en' ? "Telemetry Command Stream" : "Telemetri Komuta Akışı"}
            </h2>
            <div className="space-y-2 font-mono text-[10px] text-slate-300 bg-black/60 p-4 rounded-2xl border border-slate-900 max-h-56 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {telemetryLogs.map((log, index) => (
                <div key={index} className="leading-relaxed border-b border-slate-900/50 pb-1.5 last:border-0">
                  <span className="text-blue-400">&gt;</span> {log}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}