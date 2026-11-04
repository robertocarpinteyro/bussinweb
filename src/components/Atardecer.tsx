// Ilustración del hero: atardecer sobre el Popocatépetl y la iglesia de Cholula.
export default function Atardecer() {
  return (
    <svg
      viewBox="0 0 1440 820"
      preserveAspectRatio="xMidYMax slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="cielo" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1a0a2c" />
          <stop offset="0.35" stopColor="#5a1a6e" />
          <stop offset="0.62" stopColor="#d23a7a" />
          <stop offset="0.82" stopColor="#ff8a4d" />
          <stop offset="1" stopColor="#ffc06b" />
        </linearGradient>
        <linearGradient id="sol" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffe08a" />
          <stop offset="1" stopColor="#ff5a6e" />
        </linearGradient>
        <linearGradient id="volcan" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7a2a7a" />
          <stop offset="1" stopColor="#3a1252" />
        </linearGradient>
        <clipPath id="solClip">
          <circle cx="980" cy="470" r="190" />
        </clipPath>
      </defs>

      <rect width="1440" height="820" fill="url(#cielo)" />

      {/* Sol con franjas, estilo retro */}
      <g clipPath="url(#solClip)">
        <rect x="780" y="270" width="400" height="400" fill="url(#sol)" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect
            key={i}
            x="780"
            y={500 + i * 26}
            width="400"
            height={6 + i * 3}
            fill="#d23a7a"
          />
        ))}
      </g>

      {/* Popocatépetl e Iztaccíhuatl */}
      <path
        d="M560 640 L860 430 Q880 418 900 430 L1020 500 L1110 470 L1300 560 L1440 600 L1440 700 L560 700 Z"
        fill="url(#volcan)"
      />
      <path d="M842 443 L880 418 Q890 412 900 420 L928 446 Q900 438 884 452 Q866 440 842 443 Z" fill="#ffd9e6" opacity="0.85" />
      <path d="M1090 478 L1110 470 L1150 488 Q1124 486 1110 494 Q1100 484 1090 478 Z" fill="#ffd9e6" opacity="0.6" />

      {/* Pirámide de Cholula con su iglesia */}
      <g fill="#24093a" transform="translate(470 6)">
        <path d="M120 700 Q200 610 330 598 Q460 610 540 700 Z" />
        <rect x="280" y="548" width="100" height="56" />
        <rect x="270" y="520" width="22" height="84" />
        <rect x="368" y="520" width="22" height="84" />
        <path d="M270 520 L281 498 L292 520 Z" />
        <path d="M368 520 L379 498 L390 520 Z" />
        <path d="M306 548 Q330 518 354 548 Z" />
        <rect x="328" y="508" width="4" height="16" />
        <rect x="322" y="513" width="16" height="4" />
      </g>

      {/* Ciudad y suelo */}
      <path
        d="M0 700 L0 676 L60 676 L60 660 L110 660 L110 684 L560 684 L560 664 L600 664 L600 650 L640 650 L640 672 L760 672 L760 656 L820 656 L820 680 L1440 680 L1440 820 L0 820 Z"
        fill="#1a0a2c"
      />

      {/* Palmeras */}
      <g fill="#14061f">
        <path d="M1230 820 Q1222 700 1250 590 L1258 592 Q1236 700 1244 820 Z" />
        <path d="M1254 590 Q1200 570 1150 600 Q1205 585 1252 598 Z" />
        <path d="M1254 590 Q1220 540 1170 540 Q1220 560 1250 598 Z" />
        <path d="M1254 590 Q1280 535 1330 530 Q1290 560 1258 598 Z" />
        <path d="M1254 590 Q1320 580 1360 620 Q1310 600 1258 598 Z" />
        <path d="M1254 590 Q1250 545 1270 515 Q1262 555 1258 596 Z" />

        <path d="M1352 820 Q1348 740 1366 668 L1373 670 Q1358 740 1364 820 Z" />
        <path d="M1370 668 Q1330 654 1296 676 Q1334 664 1368 676 Z" />
        <path d="M1370 668 Q1400 630 1438 632 Q1404 652 1372 676 Z" />
        <path d="M1370 668 Q1346 632 1312 628 Q1350 646 1368 676 Z" />
        <path d="M1370 668 Q1420 662 1440 690 Q1404 676 1372 676 Z" />
      </g>
    </svg>
  );
}
