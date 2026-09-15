"use client";

import Link from "next/link";
import { useRef, type MouseEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import styles from "./Button.module.scss";

type ButtonVariant = "primary" | "secondary" | "text";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
  "data-cursor"?: string;
};

export function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  onClick,
  className,
  "data-cursor": dataCursor
}: ButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const classNames = [styles.button, styles[variant], className].filter(Boolean).join(" ");
  const content = (
    <>
      <span>{children}</span>
      <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2.25} />
    </>
  );

  const onMove = (event: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.18}px, ${y * 0.22}px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) {
      return;
    }
    el.style.transform = "";
  };

  if (href) {
    return (
      <Link
        ref={ref as React.RefObject<HTMLAnchorElement>}
        className={classNames}
        href={href}
        data-cursor={dataCursor}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      className={classNames}
      type={type}
      data-cursor={dataCursor}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {content}
    </button>
  );
}
