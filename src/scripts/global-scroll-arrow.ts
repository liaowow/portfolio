import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initGlobalScrollArrow(): void {
  gsap.registerPlugin(ScrollTrigger);

  const arrow = document.getElementById('global-scroll-arrow');
  if (!arrow) return;

  // Add pulsing animation to the arrow
  gsap.to(arrow, {
    y: '+=6',
    duration: 1,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1
  });

  // Show arrow after hero animation completes (approximately 3 seconds)
  gsap.delayedCall(3, () => {
    arrow.style.opacity = '1';
  });

  // Hide arrow when About section completes
  ScrollTrigger.create({
    trigger: '#about',
    start: 'top top',
    end: 'bottom top',
    onUpdate: (self: any) => {
      // Hide arrow when about section is nearly complete (90% scrolled)
      if (self.progress > 0.9) {
        arrow.style.opacity = '0';
      } else if (self.progress < 0.1) {
        // Show arrow when not in about section (if hero is done)
        arrow.style.opacity = '1';
      }
    }
  });
}