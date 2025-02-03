"use client";

import { useRef, useEffect } from "react";
import styles from "./page.module.css";

export default function TextClip() {
  const container = useRef(null);
  const stickyMask = useRef(null);

  const initialMaskSize = 0.8;
  const targetMaskSize = 180;
  const easing = 0.35;
  let easedScrollProgress = 0;

  useEffect(() => {
    if (stickyMask.current) {
      stickyMask.current.style.webkitMaskSize = initialMaskSize * 150 + "%";
    }
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (!stickyMask.current || !container.current) return;

    const scrollProgress = getScrollProgress();
    const maskSizeProgress = targetMaskSize * scrollProgress;

    const initialPosition = 60;
    const targetPosition = 60;
    const positionProgress = initialPosition + (targetPosition - initialPosition) * scrollProgress;

    stickyMask.current.style.webkitMaskSize = (initialMaskSize + maskSizeProgress) * 100 + "%";
    stickyMask.current.style.webkitMaskPosition = `${positionProgress}% center`;

    requestAnimationFrame(animate);
  };

  const getScrollProgress = () => {
    const scrollProgress =
      stickyMask.current.offsetTop /
      (container.current.getBoundingClientRect().height -
        window.innerHeight);
    const delta = scrollProgress - easedScrollProgress;
    easedScrollProgress += delta * easing;
    return easedScrollProgress;
  };

  return (
    <div className="relative">
      <div ref={container} className="h-[200vh] bg-black">
        <div
          ref={stickyMask}
          className={`${styles.stickyMask} flex overflow-hidden sticky top-0 h-screen items-center justify-center bg-white`}
        >
          <video autoPlay playsInline muted loop className="h-full w-full object-cover">
            <source src="/assets/video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
