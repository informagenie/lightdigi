type ServiceIconProps = {
  id: string;
  size?: number;
};

export function ServiceIcon({ id, size = 22 }: ServiceIconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    "aria-hidden": true as const,
    focusable: false as const
  };

  switch (id) {
    case "strategie":
      // Bar chart
      return (
        <svg {...common}>
          <path fill="currentColor" d="M4 20V10h3.2v10H4zm6.4 0V4h3.2v16h-3.2zM16.8 20v-7H20v7h-3.2z" />
        </svg>
      );
    case "communication":
      // Megaphone
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M21 6.5v11c0 .7-.7 1.1-1.3.8L14 15.6V18a2 2 0 0 1-2 2H9.8a2 2 0 0 1-1.9-1.4L7 15.6H5a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h2l5.7-2.7c.6-.3 1.3.1 1.3.8v2.9l5.7-2.7c.6-.3 1.3.1 1.3.8zM5 10v3.6h2.2V10H5zm4.2 8H12v-2.4H9.8l-.6 2.4zM14 8.4 7.2 11.6v.2L14 15V8.4zm2 1.1v4.8l3 1.4V8.1l-3 1.4z"
          />
        </svg>
      );
    case "web":
      // Desktop / monitor
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="M3 4h18a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-7v2h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3v-2H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm1 2v8h16V6H4z"
          />
        </svg>
      );
    case "creation":
      // Pen / brush tip
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            d="m14.1 3.1 6.8 6.8a1.5 1.5 0 0 1 0 2.1l-8.5 8.5a3 3 0 0 1-1.5.8l-5.3.9a1 1 0 0 1-1.15-1.15l.9-5.3a3 3 0 0 1 .8-1.5l8.5-8.5a1.5 1.5 0 0 1 2.15 0zm-1.4 2.55L5.35 13l-.55 3.2 3.2-.55 7.35-7.35-2.65-2.65zm3.75 1.5 1.4 1.4.95-.95-1.4-1.4-.95.95z"
          />
        </svg>
      );
    case "activation":
      // Lightning bolt
      return (
        <svg {...common}>
          <path fill="currentColor" d="M13 2 4.8 13.2h5.5L9.2 22 19.5 9.5h-5.8L13 2z" />
        </svg>
      );
    default:
      return null;
  }
}
