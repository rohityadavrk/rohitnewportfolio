import { useRef, useState } from "react";

export default function MagnifyText({
  text,
  radius = 70,
  maxScale = 1.85,
}: {
  text: string;
  radius?: number;
  maxScale?: number;
}) {
  const chars = Array.from(text);
  const charRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [pointerX, setPointerX] = useState<number | null>(null);

  const scaleFor = (i: number) => {
    const el = charRefs.current[i];
    if (pointerX === null || !el) return 1;
    const rect = el.getBoundingClientRect();
    const center = rect.left + rect.width / 2;
    const dist = Math.abs(pointerX - center);
    const t = Math.max(0, 1 - dist / radius);
    const eased = t * t * (3 - 2 * t);
    return 1 + (maxScale - 1) * eased;
  };

  return (
    <span
      className="align-baseline"
      onMouseMove={(e) => setPointerX(e.clientX)}
      onMouseLeave={() => setPointerX(null)}
    >
      {chars.map((ch, i) =>
        ch === " " ? (
          <span
            key={i}
            ref={(el) => {
              charRefs.current[i] = el;
            }}
          >
            {" "}
          </span>
        ) : (
          <span
            key={i}
            ref={(el) => {
              charRefs.current[i] = el;
            }}
            className="inline-block origin-bottom transition-[font-size] duration-100 ease-out"
            style={{ fontSize: `${scaleFor(i)}em` }}
          >
            {ch}
          </span>
        ),
      )}
    </span>
  );
}
