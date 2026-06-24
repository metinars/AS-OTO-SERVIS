export const ServiceIcon = ({ type }) => {
  const common = {
    width: 110,
    height: 110,
    viewBox: '0 0 110 110',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
  };

  const stroke = '#0f2537';
  const accent = '#f5b301';

  const icons = {
    kaporta: (
      <svg {...common}>
        <circle cx="55" cy="55" r="52" fill="#F4F6F8" />
        <path d="M25 62h60l-6-17H31l-6 17Z" stroke={stroke} strokeWidth="4" />
        <path d="M35 45l7-12h26l7 12" stroke={stroke} strokeWidth="4" />
        <circle cx="38" cy="66" r="5" fill={stroke} />
        <circle cx="72" cy="66" r="5" fill={stroke} />
        <path
          d="M77 74c8-6 11-14 10-25"
          stroke={accent}
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    ),

    pdr: (
      <svg {...common}>
        <circle cx="55" cy="55" r="52" fill="#F4F6F8" />
        <path
          d="M30 70c12-18 35-18 50 0"
          stroke={stroke}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M34 68h42"
          stroke={stroke}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M67 30L41 72"
          stroke={stroke}
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M67 30l10 8"
          stroke={accent}
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M43 55c8 5 17 5 27 0"
          stroke={accent}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),

    boya: (
      <svg {...common}>
        <circle cx="55" cy="55" r="52" fill="#F4F6F8" />
        <path d="M47 26h22l-3 22H50l-3-22Z" stroke={stroke} strokeWidth="4" />
        <path d="M50 48h18v16H50V48Z" stroke={stroke} strokeWidth="4" />
        <path
          d="M50 58H30v14h22"
          stroke={stroke}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M68 52c9 0 15 4 17 11"
          stroke={stroke}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M73 39h12M75 50h14M74 61h10"
          stroke={accent}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M52 30h12"
          stroke={accent}
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    ),

    sigorta: (
      <svg {...common}>
        <circle cx="55" cy="55" r="52" fill="#F4F6F8" />
        <path
          d="M55 23l31 12v21c0 21-14 31-31 38-17-7-31-17-31-38V35l31-12Z"
          stroke={stroke}
          strokeWidth="4"
        />
        <path
          d="M40 56l10 10 22-24"
          stroke={accent}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),

    lokal: (
      <svg {...common}>
        <circle cx="55" cy="55" r="52" fill="#F4F6F8" />
        <path d="M30 33h45l10 12v33H30V33Z" stroke={stroke} strokeWidth="4" />
        <path d="M75 33v45" stroke={stroke} strokeWidth="4" />
        <path
          d="M36 70h29"
          stroke={accent}
          strokeWidth="4"
          strokeDasharray="6 5"
          strokeLinecap="round"
        />
        <path
          d="M36 40h25"
          stroke={stroke}
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    ),

    dolu: (
      <svg {...common}>
        <circle cx="55" cy="55" r="52" fill="#F4F6F8" />
        <path
          d="M34 55c-8 0-13-6-13-13 0-7 6-13 14-13 3-9 12-15 23-15 14 0 25 10 25 23 7 2 12 8 12 16 0 10-8 17-18 17H34Z"
          stroke={stroke}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M38 78l-4 8M54 78l-4 8M70 78l-4 8"
          stroke={accent}
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="46" cy="68" r="3" fill={accent} />
        <circle cx="62" cy="68" r="3" fill={accent} />
      </svg>
    ),
  };

  return icons[type] || null;
};
