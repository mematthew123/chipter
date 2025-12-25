'use client';

export default function ScrollingBanner() {
  const announcements = [
    "DORITOS BLAZE SCORES 8.4 — TECTONIC CRUNCH CERTIFIED",
    "KETTLE BRAND JALAPEÑO HITS 7.8 ON THE CHIPTER SCALE",
    "NEW REVIEW: CAPE COD SEA SALT — 6.9 — ALMOST SEISMIC",
    "SUBMIT YOUR CHIP FOR REVIEW",
    "ZAPP'S VOODOO REACHES 9.1 — EPICENTER ELITE",
    "PAQUI GHOST PEPPER — YOUR TONGUE WILL FILE A COMPLAINT",
  ];

  // Duplicate for seamless loop
  const duplicatedAnnouncements = [...announcements, ...announcements];

  return (
    <div className="relative h-12 bg-almost-black text-chip-yellow overflow-hidden">
      <div className="absolute flex animate-scroll-left">
        {duplicatedAnnouncements.map((text, index) => (
          <span
            key={index}
            className="font-mono font-bold uppercase tracking-wider text-sm whitespace-nowrap px-8 flex items-center h-12"
          >
            {text}
            <span className="mx-8 text-chip-yellow/50">•</span>
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
      `}</style>
    </div>
  );
}