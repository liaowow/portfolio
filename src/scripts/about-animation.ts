import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initAboutAnimation(): void {
  gsap.registerPlugin(ScrollTrigger);

  // Create pinned section for full viewport control
  const aboutContent = document.getElementById('about-content');
  const sentences = gsap.utils.toArray('.about-sentence');
  
  if (!aboutContent || sentences.length === 0) return;

  // Pin the about section and animate sentences based on scroll
  ScrollTrigger.create({
    trigger: '#about',
    start: 'top top',
    end: () => `+=${window.innerHeight * sentences.length}`,
    pin: true,
    scrub: 1,
    onUpdate: (self: any) => {
      const progress = self.progress;
      const currentSentenceIndex = Math.min(
        Math.floor(progress * sentences.length),
        sentences.length - 1
      );
      const sentenceProgress = (progress * sentences.length) - currentSentenceIndex;

      sentences.forEach((sentence: any, index: number) => {
        const keywords = sentence.querySelectorAll('.keyword');
        
        if (index < currentSentenceIndex) {
          // Previous sentences - fully revealed
          sentence.classList.add('sentence-revealed');
          keywords.forEach((keyword: any) => {
            keyword.classList.add('keyword-revealed', 'keyword-highlighted');
          });
        } else if (index === currentSentenceIndex) {
          // Current sentence - progressive reveal
          if (sentenceProgress > 0.1) {
            sentence.classList.add('sentence-revealed');
          }
          
          // Keywords reveal based on sentence progress
          keywords.forEach((keyword: any, keywordIndex: number) => {
            const keywordThreshold = 0.3 + (keywordIndex / keywords.length) * 0.5;
            
            if (sentenceProgress > keywordThreshold) {
              keyword.classList.add('keyword-revealed');
              
              if (sentenceProgress > keywordThreshold + 0.15) {
                keyword.classList.add('keyword-highlighted');
              }
            } else {
              keyword.classList.remove('keyword-revealed', 'keyword-highlighted');
            }
          });
        } else {
          // Future sentences - hidden
          sentence.classList.remove('sentence-revealed');
          keywords.forEach((keyword: any) => {
            keyword.classList.remove('keyword-revealed', 'keyword-highlighted');
          });
        }
      });
    }
  });
}