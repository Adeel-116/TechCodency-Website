import React from 'react';

export default function Cube() {
  return (
    <div className="relative ml-4 bg-amber-300" style={{ perspective: '200px' }}>
      {/* Cube Container */}
      <div
        className="relative w-[clamp(2.5rem,5vw,3rem)]  h-[clamp(2.5rem,5vw,3rem)] bg-red-400"
        style={{
          transformStyle: 'preserve-3d',
          animation: 'cubeRotate 6s infinite linear',
        }}
      >
        {/* Front Face */}
        <div
          className="absolute w-full h-full border opacity-90"
          style={{
            background: 'linear-gradient(to bottom right, var(--color-primary), var(--color-primary-support))',
            borderColor: 'var(--color-primary-support)',
            transform: 'rotateY(0deg) translateZ(calc(clamp(2.5rem,5vw,3rem) / 2))',
          }}
        />

        {/* Back Face */}
        <div
          className="absolute w-full h-full border opacity-90"
          style={{
            background: 'linear-gradient(to bottom right, var(--color-secondary), var(--color-secondary-support))',
            borderColor: 'var(--color-secondary-support)',
            transform: 'rotateY(180deg) translateZ(calc(clamp(2.5rem,5vw,3rem) / 2))',
          }}
        />

        {/* Right Face */}
        <div
          className="absolute w-full h-full border opacity-90"
          style={{
            background: 'linear-gradient(to bottom right, var(--color-primary), var(--color-secondary))',
            borderColor: 'var(--color-secondary)',
            transform: 'rotateY(90deg) translateZ(calc(clamp(2.5rem,5vw,3rem) / 2))',
          }}
        />

        {/* Left Face */}
        <div
          className="absolute w-full h-full border opacity-90"
          style={{
            background: 'linear-gradient(to bottom right, var(--color-secondary), var(--color-primary))',
            borderColor: 'var(--color-primary)',
            transform: 'rotateY(-90deg) translateZ(calc(clamp(2.5rem,5vw,3rem) / 2))',
          }}
        />

        {/* Top Face */}
        <div
          className="absolute w-full h-full border opacity-90"
          style={{
            background: 'linear-gradient(to bottom right, var(--color-primary), var(--color-primary-support))',
            borderColor: 'var(--color-primary-support)',
            transform: 'rotateX(90deg) translateZ(calc(clamp(2.5rem,5vw,3rem) / 2))',
          }}
        />

        {/* Bottom Face */}
        <div
          className="absolute w-full h-full border opacity-90"
          style={{
            background: 'linear-gradient(to bottom right, var(--color-secondary), var(--color-secondary-support))',
            borderColor: 'var(--color-secondary-support)',
            transform: 'rotateX(-90deg) translateZ(calc(clamp(2.5rem,5vw,3rem) / 2))',
          }}
        />
      </div>

      {/* Custom CSS for smooth 3D rotation */}
      <style jsx>{`
        @keyframes cubeRotate {
          0% {
            transform: rotateX(0deg) rotateY(0deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg);
          }
        }
      `}</style>
    </div>
  );
}
