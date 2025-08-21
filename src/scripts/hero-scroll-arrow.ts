import { gsap } from 'gsap';

export function initHeroScrollArrow(): gsap.core.Timeline {
  const arrow = document.getElementById('hero-scroll-arrow');
  if (!arrow) return gsap.timeline();

  // Add cursor pointer style
  arrow.style.cursor = 'pointer';

  // Add click functionality to scroll to About section
  arrow.addEventListener('click', () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  });

  // Create timeline for the arrow animations
  const arrowTimeline = gsap.timeline();

  // Arrow appears with a gentle fade-in and bounce
  arrowTimeline
    .to(arrow, {
      opacity: 1,
      y: -10,
      duration: 0.6,
      ease: 'back.out(1.7)'
    })
    // Start the continuous pulsing animation
    .to(arrow, {
      y: '+=6',
      duration: 1,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1
    });

  return arrowTimeline;
}