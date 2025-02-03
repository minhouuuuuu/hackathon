"use client";

import { useState, useEffect } from 'react';

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const threshold = 100; // Minimum scroll amount before triggering direction change

    const updateScrollDirection = () => {
      const currentScroll = window.pageYOffset;

      if (Math.abs(currentScroll - lastScroll) < threshold) {
        return;
      }

      if (currentScroll > lastScroll && currentScroll > threshold) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", updateScrollDirection);

    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [lastScroll]);

  return scrollDirection;
}
