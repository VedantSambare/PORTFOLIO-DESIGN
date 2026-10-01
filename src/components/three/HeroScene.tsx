import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface HeroSceneProps {
  isDarkMode?: boolean;
}

export const HeroScene: React.FC<HeroSceneProps> = ({ isDarkMode = true }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Check WebGL availability
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      setHasWebGL(false);
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 7;

    const maxDPR = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(maxDPR);
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0); // Transparent canvas
    container.appendChild(renderer.domElement);

    // Group for all rotating elements
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Planetary / Data Orb Core
    const coreGeometry = new THREE.IcosahedronGeometry(1.6, 4);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: isDarkMode ? 0x141419 : 0xe2e2e8,
      roughness: 0.25,
      metalness: 0.85,
      wireframe: false,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    mainGroup.add(coreMesh);

    // 2. Wireframe Accent Lattice Shell
    const wireGeometry = new THREE.IcosahedronGeometry(1.62, 2);
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0xe25822, // Warm cinematic orange accent
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireMesh = new THREE.Mesh(wireGeometry, wireMaterial);
    mainGroup.add(wireMesh);

    // 3. Glowing Orbital Ring
    const ringGeometry = new THREE.TorusGeometry(2.5, 0.025, 16, 120);
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0xe25822,
      emissive: 0xe25822,
      emissiveIntensity: 0.8,
      roughness: 0.3,
      metalness: 0.7,
    });
    const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
    ringMesh.rotation.x = Math.PI / 2.6;
    ringMesh.rotation.y = Math.PI / 6;
    mainGroup.add(ringMesh);

    // Secondary Delicate Gold Orbit
    const ring2Geometry = new THREE.TorusGeometry(2.9, 0.015, 16, 100);
    const ring2Material = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      emissive: 0xd4af37,
      emissiveIntensity: 0.4,
      roughness: 0.4,
    });
    const ring2Mesh = new THREE.Mesh(ring2Geometry, ring2Material);
    ring2Mesh.rotation.x = -Math.PI / 3;
    ring2Mesh.rotation.z = Math.PI / 4;
    mainGroup.add(ring2Mesh);

    // 4. Ambient Data Particle Cloud (Starfield / Nodes)
    const particleCount = window.innerWidth < 768 ? 200 : 550;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorOrange = new THREE.Color(0xe25822);
    const colorAmber = new THREE.Color(0xf59e0b);
    const colorWhite = new THREE.Color(0xf4f4f6);

    for (let i = 0; i < particleCount; i++) {
      const radius = 3.5 + Math.random() * 5.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const mixedColor = Math.random() > 0.6 ? colorOrange : (Math.random() > 0.4 ? colorAmber : colorWhite);
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particlePoints = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particlePoints);

    // 5. Lighting Setup (Key, Fill, Rim)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffeedd, 1.8);
    keyLight.position.set(4, 5, 5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xe25822, 2.8);
    rimLight.position.set(-5, -3, -4);
    scene.add(rimLight);

    const goldFillLight = new THREE.PointLight(0xd4af37, 1.2, 10);
    goldFillLight.position.set(2, -3, 3);
    scene.add(goldFillLight);

    // Mouse Interaction Tracking
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetX = (event.clientX / innerWidth - 0.5) * 2;
      targetY = (event.clientY / innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Smooth lerp for mouse parallax
        currentX += (targetX - currentX) * 0.05;
        currentY += (targetY - currentY) * 0.05;

        // Group Rotations
        mainGroup.rotation.y = elapsedTime * 0.15 + currentX * 0.4;
        mainGroup.rotation.x = Math.sin(elapsedTime * 0.1) * 0.1 + currentY * 0.3;

        // Wireframe counter-rotation
        wireMesh.rotation.y = -elapsedTime * 0.2;
        wireMesh.rotation.z = elapsedTime * 0.08;

        // Rings individual motion
        ringMesh.rotation.z = elapsedTime * 0.25;
        ring2Mesh.rotation.y = elapsedTime * 0.18;

        // Particle field slow drift
        particlePoints.rotation.y = elapsedTime * 0.03 + currentX * 0.1;
        particlePoints.rotation.x = currentY * 0.1;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Clean Up Function
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      // WebGL resource disposal
      [coreGeometry, wireGeometry, ringGeometry, ring2Geometry, particleGeometry].forEach((geom) =>
        geom.dispose()
      );
      [coreMaterial, wireMaterial, ringMaterial, ring2Material, particleMaterial].forEach((mat) =>
        mat.dispose()
      );

      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isDarkMode]);

  if (!hasWebGL) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#18181F] to-[#09090B] rounded-3xl border border-white/10">
        <div className="w-48 h-48 rounded-full border border-[#E25822]/40 animate-pulse flex items-center justify-center">
          <div className="w-32 h-32 rounded-full bg-[#E25822]/10 blur-xl" />
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
      aria-hidden="true"
    />
  );
};
