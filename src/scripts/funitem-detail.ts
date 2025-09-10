// Sample FunItem data structure matching the plan
export interface FunItem {
  id: string;
  category: "food" | "art" | "nature" | "entertainment";
  title: string;
  location: string;
  date: string;
  annieRating: number; // 1-5
  allanRating: number; // 1-5
  annieComment: string;
  allanComment: string;
  sharedComment?: string;
  media: MediaItem[];
  thumbnail?: string;
}

export interface MediaItem {
  id: string;
  type: "image" | "video";
  src: string; // Cloudinary URL
  alt: string;
  caption?: string;
  timestamp?: string;
}

// Sample FunItem data (will be replaced with real Cloudinary data)
export const sampleFunItems: FunItem[] = [
  {
    id: "pizza-night-downtown",
    category: "food",
    title: "Pizza Night",
    location: "Downtown",
    date: "2024-06-15",
    annieRating: 5,
    allanRating: 4,
    annieComment: "The margherita was absolutely perfect! Love how the basil was so fresh and the crust had that perfect char.",
    allanComment: "Great atmosphere and solid pizza. The pepperoni was a bit greasy for my taste but overall really enjoyed it.",
    sharedComment: "Perfect date night spot - we'll definitely be coming back here!",
    media: [
      { id: "pizza-1", type: "image", src: "/images/placeholder-food.jpg", alt: "Margherita Pizza" },
      { id: "pizza-2", type: "image", src: "/images/placeholder-food.jpg", alt: "Restaurant Interior" },
      { id: "pizza-3", type: "image", src: "/images/placeholder-food.jpg", alt: "Us enjoying dinner" }
    ]
  },
  {
    id: "ramen-adventure-chinatown",
    category: "food", 
    title: "Ramen Adventure",
    location: "Chinatown",
    date: "2024-07-02",
    annieRating: 4,
    allanRating: 5,
    annieComment: "The broth was incredibly rich and flavorful. Maybe a bit too salty for me but Allan loved it!",
    allanComment: "This is what I call perfect ramen! The chashu was melt-in-your-mouth tender and the noodles had great texture.",
    media: [
      { id: "ramen-1", type: "image", src: "/images/placeholder-food.jpg", alt: "Tonkotsu Ramen Bowl" },
      { id: "ramen-2", type: "image", src: "/images/placeholder-food.jpg", alt: "Restaurant Exterior" }
    ]
  },
  {
    id: "museum-visit-moma",
    category: "art",
    title: "Museum Visit", 
    location: "MOMA",
    date: "2024-06-28",
    annieRating: 5,
    allanRating: 3,
    annieComment: "The contemporary exhibits were absolutely stunning! Spent hours just soaking in all the creativity.",
    allanComment: "Some interesting pieces but I prefer more traditional art. The Picasso section was cool though.",
    sharedComment: "Great way to spend a rainy afternoon together, even if we have different art tastes!",
    media: [
      { id: "moma-1", type: "image", src: "/images/placeholder-art.jpg", alt: "Museum Exterior" },
      { id: "moma-2", type: "image", src: "/images/placeholder-art.jpg", alt: "Famous Painting" },
      { id: "moma-3", type: "image", src: "/images/placeholder-art.jpg", alt: "Us in the gallery" }
    ]
  }
];

export function openFunItemDetail(funItemId: string): void {
  const funItem = sampleFunItems.find(item => item.id === funItemId);
  if (!funItem) return;
  
  const modal = document.getElementById('funitem-detail-modal');
  if (!modal) return;

  // Populate basic info
  updateElement(`[data-funitem-icon="funitem-detail-modal"]`, getIconForCategory(funItem.category));
  updateElement(`[data-funitem-title="funitem-detail-modal"]`, funItem.title);
  updateElement(`[data-funitem-location="funitem-detail-modal"]`, funItem.location);
  updateElement(`[data-funitem-date="funitem-detail-modal"]`, formatDate(funItem.date));
  updateElement(`[data-funitem-category="funitem-detail-modal"]`, funItem.category);

  // Populate ratings
  updateStars(`[data-annie-stars="funitem-detail-modal"]`, funItem.annieRating);
  updateElement(`[data-annie-rating="funitem-detail-modal"]`, `${funItem.annieRating}/5`);
  updateElement(`[data-annie-comment="funitem-detail-modal"]`, funItem.annieComment);
  
  updateStars(`[data-allan-stars="funitem-detail-modal"]`, funItem.allanRating);
  updateElement(`[data-allan-rating="funitem-detail-modal"]`, `${funItem.allanRating}/5`);
  updateElement(`[data-allan-comment="funitem-detail-modal"]`, funItem.allanComment);

  // Handle shared comment
  const sharedContainer = document.querySelector(`[data-shared-comment-container="funitem-detail-modal"]`) as HTMLElement;
  const sharedComment = document.querySelector(`[data-shared-comment="funitem-detail-modal"]`);
  if (funItem.sharedComment && sharedContainer && sharedComment) {
    sharedComment.textContent = funItem.sharedComment;
    sharedContainer.style.display = 'block';
  } else if (sharedContainer) {
    sharedContainer.style.display = 'none';
  }

  // Populate media carousel
  populateMediaCarousel(funItem.media);

  // Show modal
  modal.classList.remove('hidden');
}

function updateElement(selector: string, content: string): void {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = content;
  }
}

function updateStars(selector: string, rating: number): void {
  const container = document.querySelector(selector);
  if (!container) return;
  
  container.innerHTML = '';
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement('svg');
    star.className = 'w-4 h-4';
    star.setAttribute('fill', i <= rating ? 'currentColor' : 'none');
    star.setAttribute('stroke', 'currentColor');
    star.setAttribute('viewBox', '0 0 24 24');
    
    const path = document.createElement('path');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');
    path.setAttribute('stroke-width', '2');
    path.setAttribute('d', 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z');
    
    star.appendChild(path);
    container.appendChild(star);
  }
}

function populateMediaCarousel(media: MediaItem[]): void {
  const container = document.querySelector('[data-funitem-media="funitem-detail-modal"]');
  if (!container) return;

  const carousel = document.createElement('div');
  carousel.className = 'media-carousel';
  
  media.forEach(item => {
    const mediaElement = document.createElement('div');
    mediaElement.className = 'media-item';
    
    if (item.type === 'image') {
      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.alt;
      img.loading = 'lazy';
      mediaElement.appendChild(img);
    } else {
      const video = document.createElement('video');
      video.src = item.src;
      video.controls = true;
      video.preload = 'metadata';
      mediaElement.appendChild(video);
    }
    
    // Add click handler for full-screen view (Level 3)
    mediaElement.addEventListener('click', () => {
      openMediaModal(item);
    });
    
    carousel.appendChild(mediaElement);
  });

  container.innerHTML = '';
  container.appendChild(carousel);
}

function openMediaModal(media: MediaItem): void {
  // TODO: Implement Level 3 - Full Media Modal
  console.log('Opening media modal for:', media.alt);
}

function getIconForCategory(category: string): string {
  const icons = {
    food: '🍕',
    art: '🎨', 
    nature: '🌲',
    entertainment: '🎭'
  };
  return icons[category as keyof typeof icons] || '📍';
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

export function closeFunItemDetail(): void {
  const modal = document.getElementById('funitem-detail-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

export function initFunItemDetail(): void {
  // Handle close button clicks
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.hasAttribute('data-close-funitem') || target.closest('[data-close-funitem]')) {
      closeFunItemDetail();
    }
  });

  // Handle escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeFunItemDetail();
    }
  });
}