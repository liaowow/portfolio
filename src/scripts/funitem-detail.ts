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
  },
  {
    id: "greenwich-polo-match",
    category: "entertainment",
    title: "Greenwich Polo Match",
    location: "Greenwich, Connecticut",
    date: "2025-08-31",
    annieRating: 5,
    allanRating: 4,
    annieComment: "My first polo experience!",
    allanComment: "A good Labor Day deal, although the match itself doesn't seem as exciting as, say, a football game.",
    media: [
      { 
        id: "polo-1", 
        type: "image", 
        src: "https://res.cloudinary.com/ddkxh6joe/image/upload/f_auto,q_auto/Fun2025/08/C9CFBC03-4FD9-45A0-A566-B6109ADC4E0A_1_102_a_yu65ii.jpg", 
        alt: "Greenwich Polo Match", 
        caption: "Annie's first polo experience" 
      }
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
  
  media.forEach((item, index) => {
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
      openMediaModal(item, media, index);
    });
    
    carousel.appendChild(mediaElement);
  });

  container.innerHTML = '';
  container.appendChild(carousel);
}

let currentMediaArray: MediaItem[] = [];
let currentMediaIndex = 0;

function createMediaModal(): void {
  const modal = document.createElement('div');
  modal.id = 'media-modal';
  modal.className = 'fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 hidden';
  
  modal.innerHTML = `
    <!-- Close Button -->
    <button class="fixed top-4 right-4 text-white hover:bg-white hover:bg-opacity-20 z-60 bg-black bg-opacity-50 rounded-full p-2 transition-all duration-200" id="media-modal-close">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>

    <!-- Navigation Arrow - Previous -->
    <button class="fixed left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white hover:bg-opacity-20 z-60 bg-black bg-opacity-50 rounded-full p-3 transition-all duration-200" id="media-modal-prev">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
      </svg>
    </button>

    <!-- Navigation Arrow - Next -->
    <button class="fixed right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white hover:bg-opacity-20 z-60 bg-black bg-opacity-50 rounded-full p-3 transition-all duration-200" id="media-modal-next">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </button>
    
    <div class="relative max-w-7xl max-h-full p-4 w-full">
      <!-- Media Content -->
      <div class="flex justify-center items-center h-[90vh]" id="media-modal-content">
        <!-- Content will be populated dynamically -->
      </div>
      
      <!-- Media Info -->
      <div class="text-white text-center mt-4">
        <h3 class="text-lg font-medium" id="media-modal-caption"></h3>
        <p class="text-sm text-gray-300 mt-1" id="media-modal-meta"></p>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  setupMediaModalEventListeners();
}

function setupMediaModalEventListeners(): void {
  const modal = document.getElementById('media-modal');
  const closeBtn = document.getElementById('media-modal-close');
  const prevBtn = document.getElementById('media-modal-prev');
  const nextBtn = document.getElementById('media-modal-next');
  
  // Close button
  closeBtn?.addEventListener('click', closeMediaModal);
  
  // Navigation buttons
  prevBtn?.addEventListener('click', () => navigateMedia(-1));
  nextBtn?.addEventListener('click', () => navigateMedia(1));
  
  // Click outside to close
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeMediaModal();
    }
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!modal?.classList.contains('hidden')) {
      switch (e.key) {
        case 'Escape':
          closeMediaModal();
          break;
        case 'ArrowLeft':
          navigateMedia(-1);
          break;
        case 'ArrowRight':
          navigateMedia(1);
          break;
      }
    }
  });
}

function populateMediaModal(media: MediaItem, allMedia: MediaItem[], index: number): void {
  currentMediaArray = allMedia;
  currentMediaIndex = index;
  
  const content = document.getElementById('media-modal-content');
  const caption = document.getElementById('media-modal-caption');
  const meta = document.getElementById('media-modal-meta');
  const prevBtn = document.getElementById('media-modal-prev');
  const nextBtn = document.getElementById('media-modal-next');
  
  if (!content) return;
  
  // Clear previous content
  content.innerHTML = '';
  
  // Create media element
  if (media.type === 'image') {
    const img = document.createElement('img');
    img.src = media.src;
    img.alt = media.alt;
    img.className = 'max-w-full max-h-full object-contain rounded-lg shadow-2xl';
    content.appendChild(img);
  } else {
    const video = document.createElement('video');
    video.src = media.src;
    video.controls = true;
    video.className = 'max-w-full max-h-full rounded-lg shadow-2xl';
    content.appendChild(video);
  }
  
  // Update caption and metadata
  if (caption) caption.textContent = media.alt;
  if (meta) meta.textContent = `${index + 1} of ${allMedia.length}${media.caption ? ' • ' + media.caption : ''}`;
  
  // Show/hide navigation buttons
  if (prevBtn) prevBtn.style.display = allMedia.length > 1 ? 'block' : 'none';
  if (nextBtn) nextBtn.style.display = allMedia.length > 1 ? 'block' : 'none';
}

function navigateMedia(direction: number): void {
  const newIndex = currentMediaIndex + direction;
  
  if (newIndex >= 0 && newIndex < currentMediaArray.length) {
    currentMediaIndex = newIndex;
    populateMediaModal(currentMediaArray[currentMediaIndex], currentMediaArray, currentMediaIndex);
  }
}

function closeMediaModal(): void {
  const modal = document.getElementById('media-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

function openMediaModal(media: MediaItem, allMedia: MediaItem[], currentIndex: number): void {
  // Find or create the media modal
  let modal = document.getElementById('media-modal');
  if (!modal) {
    createMediaModal();
    modal = document.getElementById('media-modal');
  }
  
  if (modal) {
    populateMediaModal(media, allMedia, currentIndex);
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
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