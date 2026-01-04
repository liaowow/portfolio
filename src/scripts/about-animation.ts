import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initAboutAnimation(): void {
  gsap.registerPlugin(ScrollTrigger);

  const sentences = gsap.utils.toArray('.about-sentence');
  if (sentences.length === 0) return;

  // Create a timeline for sequential sentence reveals
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: '#about',
      start: 'top center',
      toggleActions: 'play none none none'
    }
  });

  sentences.forEach((sentence: any, index: number) => {
    // Animate sentence appearance
    timeline.to(sentence, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, index * 0.3);
  });
}