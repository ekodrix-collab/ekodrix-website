"use client";

import React, { useRef, useMemo, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, PerspectiveCamera, Html } from "@react-three/drei";
import * as THREE from "three";

// High-fidelity Tech Stack with Verified SkillIcons IDs
// SkillIcons is the most reliable for the "WAW" factor and "OG" colors
const techStack = [
  { name: "Next.js", id: "nextjs", color: "#ffffff" },
  { name: "React", id: "react", color: "#61DAFB" },
  { name: "TypeScript", id: "ts", color: "#3178C6" },
  { name: "Node.js", id: "nodejs", color: "#339933" },
  { name: "Python", id: "py", color: "#3776AB" },
  { name: "Java", id: "java", color: "#ED8B00" }, // This is the classic coffee cup logo
  { name: "Go", id: "go", color: "#00ADD8" },
  { name: "Docker", id: "docker", color: "#2496ED" },
  { name: "K8s", id: "kubernetes", color: "#326CE5" },
  { name: "AWS", id: "aws", color: "#FF9900" }, // Official AWS
  { name: "Azure", id: "azure", color: "#0078D4" }, // Official Azure
  { name: "OpenAI", id: "openai", color: "#412991" }, // Verified SkillIcons ID
  { name: "TensorFlow", id: "tensorflow", color: "#FF6F00" },
  { name: "PyTorch", id: "pytorch", color: "#EE4C2C" },
  { name: "Postgres", id: "postgres", color: "#4169E1" },
  { name: "Redis", id: "redis", color: "#DC382D" },
  { name: "Tailwind", id: "tailwind", color: "#06B6D4" },
  { name: "Vercel", id: "vercel", color: "#ffffff" },
  { name: "Framer", id: "framer", color: "#0055FF" },
  { name: "Spring", id: "spring", color: "#6DB33F" }
];

function TechNode({ tech, position }: { tech: typeof techStack[0], position: THREE.Vector3 }) {
  const [hovered, setHovered] = useState(false);
  
  // Use a single, verified CDN source for 100% consistency
  // SkillIcons provides the vibrant, high-end "OG" look by default
  const iconUrl = `https://skillicons.dev/icons?i=${tech.id}`;

  return (
    <Html 
      position={position} 
      center 
      distanceFactor={15}
      className="pointer-events-auto"
      zIndexRange={[100, 0]}
    >
      <div 
        onMouseEnter={() => setHovered(true)} 
        onMouseLeave={() => setHovered(false)}
        className="flex flex-col items-center justify-center cursor-pointer select-none"
        style={{
          transform: `scale(${hovered ? 1.35 : 1}) translateZ(0)`,
          transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
          willChange: 'transform'
        }}
      >
        <div className="relative group">
           {/* Enhanced Atmospheric Glow (Vibrant Colors by default) */}
           <div 
             className={`absolute -inset-10 rounded-full transition-all duration-1000 blur-2xl pointer-events-none ${hovered ? 'opacity-50 scale-125' : 'opacity-15 scale-100'}`}
             style={{ background: tech.color }}
           />
           
           {/* Premium Glassmorphism Container */}
           <div className={`relative w-16 h-16 md:w-20 md:h-20 rounded-[32px] bg-white/[0.08] border border-white/10 flex items-center justify-center p-4 transition-all duration-500 shadow-2xl backdrop-blur-2xl overflow-hidden ${hovered ? 'border-white/40 bg-white/[0.15] -translate-y-3' : ''}`}>
              <img 
                src={iconUrl} 
                alt={tech.name}
                className="w-full h-full object-contain pointer-events-none transition-all duration-500 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                loading="eager"
              />
           </div>
        </div>

        {/* Cinematic Label */}
        <div 
          className={`mt-4 px-5 py-2 rounded-full text-[10px] font-display font-black tracking-[0.3em] uppercase transition-all duration-500 border border-white/10 shadow-2xl ${hovered ? 'bg-white text-black border-white translate-y-2' : 'bg-black/60 text-white/50 backdrop-blur-md'}`}
        >
          {tech.name}
        </div>
      </div>
    </Html>
  );
}

function TechEcosystem() {
  const groupRef = useRef<THREE.Group>(null);
  const orbitalRef = useRef<THREE.Group>(null);
  
  const nodes = useMemo(() => {
    const list = [];
    const count = techStack.length;
    const radius = 10;
    
    for (let i = 0; i < count; i++) {
        const phi = Math.acos(-1 + (2 * i) / count);
        const theta = Math.sqrt(count * Math.PI) * phi;
        
        const pos = new THREE.Vector3(
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta),
          radius * Math.cos(phi)
        );
        
        list.push(<TechNode key={techStack[i].id} tech={techStack[i]} position={pos} />);
    }
    return list;
  }, []);

  useFrame((state) => {
    if (groupRef.current && orbitalRef.current) {
        const time = state.clock.getElapsedTime();
        
        // Steady cinematic orbit (Liquid Smooth)
        orbitalRef.current.rotation.y = time * 0.08;
        orbitalRef.current.rotation.x = time * 0.03;
        
        // Fluid Mouse Perspective Interaction
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, state.mouse.x * 0.12, 0.05);
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -state.mouse.y * 0.12, 0.05);
        
        // Rhythmic Cosmos Breathing
        const s = 1 + Math.sin(time * 0.5) * 0.02;
        groupRef.current.scale.set(s, s, s);
    }
  });

  return (
    <group ref={groupRef}>
      <group ref={orbitalRef}>
        {nodes}
      </group>
    </group>
  );
}

export function TechSphere3D() {
  return (
    <div className="h-[750px] w-full relative bg-[#010101] rounded-[48px] overflow-hidden group border border-white/5 select-none touch-none shadow-2xl">
      {/* Background Atmosphere & High-End Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(16,185,129,0.02)_0%,transparent_25%,transparent_75%,rgba(16,185,129,0.02)_100%)] opacity-30 pointer-events-none animate-spin-slow" />
      
      <Canvas 
        dpr={1} 
        gl={{ 
          antialias: true, 
          alpha: true, 
          powerPreference: "high-performance",
          stencil: false
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 25]} fov={38} />
        <color attach="background" args={["#010101"]} />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 20, 10]} intensity={3} color="#10b981" />
        <spotLight position={[0, 0, 30]} intensity={1} angle={0.5} />

        <Suspense fallback={null}>
          <TechEcosystem />
          <Stars radius={100} depth={50} count={3000} factor={5} saturation={0} fade speed={1.5} />
        </Suspense>

        <fog attach="fog" args={["#010101", 10, 50]} />
      </Canvas>

      {/* Cinematic Frame Decoration */}
      <div className="absolute inset-0 pointer-events-none rounded-[48px] border-[1px] border-white/10 shadow-[inset_0_0_200px_rgba(0,0,0,0.95)]" />
      
      {/* Interactive Legend */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-1000 flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-ekodrix-green animate-pulse shadow-[0_0_10px_#10b981]" />
        <span className="text-[10px] text-white/50 font-display tracking-[0.6em] uppercase">Cinematic Multi-Stack</span>
      </div>
    </div>
  );
}
