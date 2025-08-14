import { gsap } from 'gsap';

export function initHeroAnimation(): void {
  const timeline = gsap.timeline();
  
  // Split text into individual characters for typewriter effect
  function splitText(selector: string): void {
    const element = document.querySelector(selector);
    if (!element) return;
    
    const text = element.textContent ?? '';
    element.innerHTML = text
      .split('')
      .map((char: string) => `<span class="char" style="opacity: 0;">${char === ' ' ? '&nbsp;' : char}</span>`)
      .join('');
  }
  
  // Prepare text elements
  splitText('[data-reveal="business"] span:not(.font-bold)');
  splitText('[data-reveal="code"] span:not(.font-bold)');
  splitText('[data-reveal="design"] span:not(.font-bold)');
  
  // Creative animation sequence
  timeline
    // Annie appears
    .to('[data-reveal="annie"]', {
      opacity: 1,
      duration: 0.5,
    })
    
    // Show B, C, D lines first
    .to('[data-reveal="business"]', {
      opacity: 1,
      duration: 0.01
    }, '-=0.2')
    .to('[data-reveal="code"]', {
      opacity: 1,
      duration: 0.01
    }, '-=0.2')
    .to('[data-reveal="design"]', {
      opacity: 1,
      duration: 0.01
    }, '-=0.2')
    
    // B, C, D letters slide in from left with elastic effect
    .to('[data-reveal="business"] .font-bold', {
      opacity: 1,
      x: 0,
      rotation: 360,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)'
    }, '-=0.2')
    .to('[data-reveal="code"] .font-bold', {
      opacity: 1,
      x: 0,
      rotation: 360,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)'
    }, '-=0.3')
    .to('[data-reveal="design"] .font-bold', {
      opacity: 1,
      x: 0,
      rotation: 360,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)'
    }, '-=0.3')
    
    // Typewriter effect for the rest of each word
    .to('[data-reveal="business"] .char', {
      opacity: 1,
      duration: 0.3,
      stagger: 0.03,
      ease: 'none'
    }, '-=0.2')
    .to('[data-reveal="code"] .char', {
      opacity: 1,
      duration: 0.3,
      stagger: 0.03,
      ease: 'none'
    }, '-=0.1')
    .to('[data-reveal="design"] .char', {
      opacity: 1,
      duration: 0.3,
      stagger: 0.03,
      ease: 'none'
    }, '-=0.1')
    
    // Subtitle fades in
    .to('[data-reveal="subtitle"]', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '+=0.2');
}