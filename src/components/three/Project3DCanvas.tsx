import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Project3DCanvasProps {
  category: string;
  themeColor?: string;
}

export const Project3DCanvas: React.FC<Project3DCanvasProps> = ({ category, themeColor = '#E25822' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.z = 4.5;

    const maxDPR = Math.min(window.devicePixelRatio || 1, 1.5);
    renderer.setPixelRatio(maxDPR);
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const colorHex = parseInt(themeColor.replace('#', '0x'), 16);

    // Geometry based on category
    let mainMesh: THREE.Mesh;
    let wireMesh: THREE.Mesh;

    if (category.includes('AI') || category.includes('Data')) {
      // Neural Torus Node / Dodecahedron
      const geo = new THREE.DodecahedronGeometry(1.4, 0);
      const mat = new THREE.MeshStandardMaterial({
        color: 0x18181f,
        roughness: 0.2,
        metalness: 0.9,
      });
      mainMesh = new THREE.Mesh(geo, mat);

      const wireGeo = new THREE.IcosahedronGeometry(1.6, 1);
      const wireMat = new THREE.MeshBasicMaterial({
        color: colorHex,
        wireframe: true,
        transparent: true,
        opacity: 0.45,
      });
      wireMesh = new THREE.Mesh(wireGeo, wireMat);
      group.add(mainMesh, wireMesh);
    } else if (category.includes('3D')) {
      // Sculptural Torus Knot
      const geo = new THREE.TorusKnotGeometry(1.0, 0.3, 80, 16);
      const mat = new THREE.MeshStandardMaterial({
        color: 0x121216,
        roughness: 0.15,
        metalness: 0.95,
      });
      mainMesh = new THREE.Mesh(geo, mat);

      const wireGeo = new THREE.TorusKnotGeometry(1.02, 0.31, 40, 8);
      const wireMat = new THREE.MeshBasicMaterial({
        color: colorHex,
        wireframe: true,
        transparent: true,
        opacity: 0.4,
      });
      wireMesh = new THREE.Mesh(wireGeo, wireMat);
      group.add(mainMesh, wireMesh);
    } else {
      // Full Stack Octahedron Grid
      const geo = new THREE.OctahedronGeometry(1.4, 0);
      const mat = new THREE.MeshStandardMaterial({
        color: 0x141419,
        roughness: 0.3,
        metalness: 0.8,
      });
      mainMesh = new THREE.Mesh(geo, mat);

      const wireGeo = new THREE.OctahedronGeometry(1.45, 1);
      const wireMat = new THREE.MeshBasicMaterial({
        color: colorHex,
        wireframe: true,
        transparent: true,
        opacity: 0.4,
      });
      wireMesh = new THREE.Mesh(wireGeo, wireMat);
      group.add(mainMesh, wireMesh);
    }

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight1.position.set(3, 4, 3);
    scene.add(dirLight1);

    const accentLight = new THREE.PointLight(colorHex, 2.5, 8);
    accentLight.position.set(-3, -2, 2);
    scene.add(accentLight);

    let animationId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      if (!prefersReducedMotion) {
        const time = clock.getElapsedTime();
        group.rotation.x = time * 0.3;
        group.rotation.y = time * 0.4;
      }
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry?.dispose();
          if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
          else obj.material?.dispose();
        }
      });
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [category, themeColor]);

  return <div ref={containerRef} className="w-full h-full min-h-[220px]" />;
};
