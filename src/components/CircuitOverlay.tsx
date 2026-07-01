"use client";

export default function CircuitOverlay() {
  return (
    <svg
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      width="100%"
      height="100%"
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 1,
        opacity: 0.55,
        filter: "drop-shadow(0 0 4px rgba(0,220,255,0.8))",
      }}
    >
      <style>{`
        @keyframes circuitDraw {
          from { stroke-dashoffset: 2000; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes circuitPulse {
          0%, 100% { opacity: 0.6; }
          50%       { opacity: 1; }
        }
        .circuit-line {
          stroke: rgba(0,220,255,0.35);
          stroke-width: 1;
          fill: none;
          stroke-dasharray: 2000;
          stroke-dashoffset: 2000;
          animation: circuitDraw 3.5s ease forwards, circuitPulse 4s ease-in-out 3.5s infinite;
        }
        .circuit-node {
          fill: rgba(0,220,255,0.5);
          animation: circuitPulse 4s ease-in-out infinite;
        }
      `}</style>

      {/* Path 1 — top-left horizontal run branching down */}
      <path className="circuit-line" d="M 0 80 H 240 V 180 H 420 V 80 H 620" />

      {/* Path 2 — mid-left branch going right and down */}
      <path className="circuit-line" d="M 80 0 V 180 H 340 V 300 H 560 V 220 H 780" />

      {/* Path 3 — lower horizontal run with upward branch */}
      <path className="circuit-line" d="M 0 420 H 200 V 320 H 460 V 420 H 700 V 300 H 900" />

      {/* Path 4 — right-side vertical with branches */}
      <path className="circuit-line" d="M 900 0 V 140 H 1050 V 260 H 900 V 380 H 1200" />

      {/* Path 5 — diagonal-step lower right */}
      <path className="circuit-line" d="M 600 600 V 500 H 760 V 400 H 960 V 500 H 1200" />

      {/* Path 6 — upper right cross trace */}
      <path className="circuit-line" d="M 700 0 V 60 H 860 V 160 H 1100 V 80 H 1200" />

      {/* Nodes at key intersections */}
      <circle className="circuit-node" cx="240" cy="80"  r="3" />
      <circle className="circuit-node" cx="240" cy="180" r="3" />
      <circle className="circuit-node" cx="420" cy="180" r="3" />
      <circle className="circuit-node" cx="420" cy="80"  r="3" />
      <circle className="circuit-node" cx="80"  cy="180" r="3" />
      <circle className="circuit-node" cx="340" cy="180" r="3" />
      <circle className="circuit-node" cx="340" cy="300" r="3" />
      <circle className="circuit-node" cx="560" cy="300" r="3" />
      <circle className="circuit-node" cx="560" cy="220" r="3" />
      <circle className="circuit-node" cx="200" cy="420" r="3" />
      <circle className="circuit-node" cx="200" cy="320" r="3" />
      <circle className="circuit-node" cx="460" cy="320" r="3" />
      <circle className="circuit-node" cx="460" cy="420" r="3" />
      <circle className="circuit-node" cx="700" cy="420" r="3" />
      <circle className="circuit-node" cx="700" cy="300" r="3" />
      <circle className="circuit-node" cx="900" cy="140" r="3" />
      <circle className="circuit-node" cx="1050" cy="140" r="3" />
      <circle className="circuit-node" cx="1050" cy="260" r="3" />
      <circle className="circuit-node" cx="900" cy="260" r="3" />
      <circle className="circuit-node" cx="900" cy="380" r="3" />
      <circle className="circuit-node" cx="760" cy="500" r="3" />
      <circle className="circuit-node" cx="760" cy="400" r="3" />
      <circle className="circuit-node" cx="960" cy="400" r="3" />
      <circle className="circuit-node" cx="960" cy="500" r="3" />
      <circle className="circuit-node" cx="700" cy="60"  r="3" />
      <circle className="circuit-node" cx="860" cy="60"  r="3" />
      <circle className="circuit-node" cx="860" cy="160" r="3" />
      <circle className="circuit-node" cx="1100" cy="160" r="3" />
      <circle className="circuit-node" cx="1100" cy="80"  r="3" />
    </svg>
  );
}
