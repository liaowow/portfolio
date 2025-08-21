import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initAboutAnimation(): void {
  gsap.registerPlugin(ScrollTrigger);

  const sentences = gsap.utils.toArray('.about-sentence');
  if (sentences.length === 0) return;

  // Create a timeline for sequential sentence and keyword reveals
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: '#about',
      start: 'top center',
      toggleActions: 'play none none none'
    }
  });

  sentences.forEach((sentence: any, index: number) => {
    const keywords = sentence.querySelectorAll('.keyword');
    
    // Animate sentence appearance
    timeline.to(sentence, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, index * 1.2);

    // Animate keywords within the sentence sequentially
    keywords.forEach((keyword: any, keywordIndex: number) => {
      timeline.to(keyword, {
        opacity: 1,
        scale: 1.08,
        duration: 0.6,
        ease: 'back.out(1.7)'
      }, index * 1.2 + 0.4 + keywordIndex * 0.2);
    });
  });
}