import React from "react";

export default function Cube() {
  return (
    <div
      className="relative ml-4"
      style={{ perspective: "600px" }} // depth for 3D
    >
      {/* Cube Container */}
      <div
        className="relative w-[clamp(2.5rem,5vw,3.2rem)] h-[clamp(2.5rem,5vw,3.2rem)]"
        style={{
          transformStyle: "preserve-3d",
          animation: "cubeRotate 6s infinite linear",
        }}
      >
        {/* Front Face */}
        <div
          className="absolute w-full h-full"
          style={{
            background:
              "linear-gradient(to bottom right, var(--color-primary-orange), var(--color-primary-orange-support))",
            transform:
              "rotateY(0deg) translateZ(calc(clamp(2.5rem,5vw,3.2rem) / 2))",
          }}
        />

        {/* Back Face */}
        <div
          className="absolute w-full h-full"
          style={{
            background:
              "linear-gradient(to bottom right, var(--color-primary-orange), var(--color-primary-orange-support))",
            transform:
              "rotateY(180deg) translateZ(calc(clamp(2.5rem,5vw,3.2rem) / 2))",
          }}
        />

        {/* Right Face */}
        <div
          className="absolute w-full h-full"
          style={{
            background:
              "linear-gradient(to bottom right, var(--color-primary-orange), var(--color-primary-orange-support))",
            transform:
              "rotateY(90deg) translateZ(calc(clamp(2.5rem,5vw,3.2rem) / 2))",
          }}
        />

        {/* Left Face */}
        <div
          className="absolute w-full h-full"
          style={{
            background:
              "linear-gradient(to bottom right, var(--color-primary-orange), var(--color-primary-orange-support))",
            transform:
              "rotateY(-90deg) translateZ(calc(clamp(2.5rem,5vw,3.2rem) / 2))",
          }}
        />

        {/* Top Face */}
        <div
          className="absolute w-full h-full"
          style={{
            background:
              "linear-gradient(to bottom right, var(--color-primary-orange), var(--color-primary-orange-support))",
            transform:
              "rotateX(90deg) translateZ(calc(clamp(2.5rem,5vw,3.2rem) / 2))",
          }}
        />

        {/* Bottom Face */}
        <div
          className="absolute w-full h-full"
          style={{
            background:
              "linear-gradient(to bottom right, var(--color-primary-orange), var(--color-primary-orange-support))",
            transform:
              "rotateX(-90deg) translateZ(calc(clamp(2.5rem,5vw,3.2rem) / 2))",
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
