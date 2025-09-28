import type { FunItem, MediaAsset } from '../lib/types/fun-item';

export async function initNetflixLayout(): Promise<void> {
  // Fetch Fun items from API
  let funItems: FunItem[] = [];
  try {
    const response = await fetch('/api/fun');
    const data = await response.json();
    funItems = data.items || [];
  } catch (error) {
    console.error('Failed to fetch Fun items:', error);
    funItems = [];
  }

  if (funItems.length === 0) {
    console.warn('No Fun items found');
    return;
  }

  // Sort items by date (newest first) to get hero item
  const sortedItems = [...funItems].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const heroItem = sortedItems[0];
  const otherItems = sortedItems.slice(1);

  // Group items by category
  const categorizedItems = {
    food: otherItems.filter(item => item.category === 'food'),
    art: otherItems.filter(item => item.category === 'art'),
    nature: otherItems.filter(item => item.category === 'nature'),
    entertainment: otherItems.filter(item => item.category === 'entertainment')
  };

  // Populate hero section
  populateHeroSection(heroItem);

  // Populate category rows
  populateCategoryRows(categorizedItems);

  // Initialize masonry modal functionality
  initMasonryModal();
}

function populateHeroSection(heroItem: FunItem): void {
  const heroContainer = document.querySelector('.hero-banner');
  const heroImage = document.querySelector('.hero-background') as HTMLElement;
  const heroTitle = document.querySelector('[data-hero-title]');
  const heroLocation = document.querySelector('[data-hero-location]');
  const heroDate = document.querySelector('[data-hero-date]');
  const heroRatings = document.querySelector('[data-hero-ratings]');
  const seeMoreBtn = document.querySelector('[data-see-more-btn]') as HTMLElement;

  if (!heroContainer || !heroImage) return;

  // Set hero background image
  if (heroItem.coverImage) {
    heroImage.style.backgroundImage = `url(${heroItem.coverImage.src})`;
  }

  // Populate hero content
  if (heroTitle) heroTitle.textContent = heroItem.title;
  if (heroLocation) heroLocation.textContent = heroItem.location;
  if (heroDate) {
    const date = new Date(heroItem.date);
    heroDate.textContent = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  // Create ratings display
  if (heroRatings) {
    const avgRating = (heroItem.annieRating + heroItem.allanRating) / 2;
    heroRatings.innerHTML = `
      <div class="flex items-center gap-4 text-sm">
        <div class="flex items-center gap-2">
          <span class="text-yellow-400">★</span>
          <span>${avgRating.toFixed(1)}/5</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-pink-400">A:</span>
          <span>${heroItem.annieRating}/5</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-blue-400">A:</span>
          <span>${heroItem.allanRating}/5</span>
        </div>
      </div>
    `;
  }

  // Set up "See More" button click handler
  if (seeMoreBtn) {
    seeMoreBtn.addEventListener('click', () => {
      openMasonryModal(heroItem);
    });
  }
}

function populateCategoryRows(categorizedItems: Record<string, FunItem[]>): void {
  Object.entries(categorizedItems).forEach(([category, items]) => {
    if (items.length === 0) return;

    const categoryRow = document.querySelector(`[data-category-row="${category}"]`);
    if (!categoryRow) return;

    const categoryGrid = categoryRow.querySelector('.category-grid');
    if (!categoryGrid) return;

    // Clear existing content
    categoryGrid.innerHTML = '';

    // Show all items and enable horizontal scroll
    const displayItems = items;

    // Enable scroll behavior
    (categoryGrid as HTMLElement).style.overflowX = 'auto';
    (categoryGrid as HTMLElement).style.scrollBehavior = 'smooth';

    // Create poster cards for displayed items
    displayItems.forEach(item => {
      const card = document.createElement('div');
      card.className = 'poster-card';
      card.setAttribute('data-fun-item-id', item.id);
      // Force consistent width
      card.style.width = '280px';
      card.style.minWidth = '280px';
      card.style.maxWidth = '280px';
      card.style.flex = '0 0 280px';

      const imageUrl = item.coverImage?.src || '';
      const placeholderIcon = getCategoryIcon(category);

      card.innerHTML = `
        <div class="poster-image">
          ${imageUrl
            ? `<img src="${imageUrl}" alt="${item.title}" loading="lazy" />`
            : `<div class="poster-placeholder">
                 <div class="placeholder-icon">${placeholderIcon}</div>
               </div>`
          }
          <div class="poster-overlay">
            <h3 class="poster-title">${item.title}</h3>
            <p class="poster-location">${item.location} &middot; ${new Date(item.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</p>
            <div class="poster-rating">
              <span class="rating-star">★</span>
              <span>${((item.annieRating + item.allanRating) / 2).toFixed(1)}</span>
            </div>
            <button class="poster-see-more" data-item-id="${item.id}">View Gallery</button>
          </div>
        </div>
      `;

      // Add click handler to "See More" button
      const seeMoreBtn = card.querySelector('.poster-see-more');
      if (seeMoreBtn) {
        seeMoreBtn.addEventListener('click', (e) => {
          e.stopPropagation(); // Prevent event bubbling
          openMasonryModal(item);
        });
      }

      categoryGrid.appendChild(card);
    });
  });
}

function getCategoryIcon(category: string): string {
  const icons = {
    food: '🍕',
    art: '🎨',
    nature: '🌲',
    entertainment: '🎭'
  };
  return icons[category as keyof typeof icons] || '📍';
}


function initMasonryModal(): void {
  const modal = document.getElementById('masonry-modal');
  if (!modal) {
    console.error('Modal not found');
    return;
  }

  // Use event delegation for close button since it might not exist yet
  modal.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;

    // Check if clicked element is the close button or its child
    if (target.closest('.masonry-close')) {
      e.stopPropagation();
      closeMasonryModal();
      return;
    }

    // Check if clicked on backdrop (modal itself)
    if (target === modal) {
      closeMasonryModal();
    }
  });

  // Close on escape key
  const escapeHandler = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeMasonryModal();
    }
  };
  document.addEventListener('keydown', escapeHandler);

  // Store handler for cleanup
  (modal as any)._escapeHandler = escapeHandler;
}

function openMasonryModal(funItem: FunItem): void {
  const modal = document.getElementById('masonry-modal');
  const titleElement = document.querySelector('[data-masonry-title]');
  const contentElement = document.querySelector('[data-masonry-content]');

  if (!modal || !titleElement || !contentElement) return;

  // Set modal title
  titleElement.textContent = funItem.title;

  // Show modal
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  // Load media content
  loadMasonryContent(funItem, contentElement);
}

function closeMasonryModal(): void {
  const modal = document.getElementById('masonry-modal');
  if (!modal) return;

  modal.classList.add('hidden');
  document.body.style.overflow = '';

  // Clean up escape key listener
  if ((modal as any)._escapeHandler) {
    document.removeEventListener('keydown', (modal as any)._escapeHandler);
    delete (modal as any)._escapeHandler;
  }

  // Clean up any carousel keyboard handlers
  if ((modal as any)._carouselKeyHandler) {
    document.removeEventListener('keydown', (modal as any)._carouselKeyHandler);
    delete (modal as any)._carouselKeyHandler;
  }
}

async function loadMasonryContent(funItem: FunItem, container: Element): Promise<void> {
  // Show loading state
  container.innerHTML = `
    <div class="flex items-center justify-center h-96 text-white">
      <div class="text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
        <p>Loading memories...</p>
      </div>
    </div>
  `;

  try {
    // Fetch detailed item data with all media
    const response = await fetch(`/api/fun/${funItem.id}`);
    const detailedItem = await response.json();

    if (!detailedItem || !detailedItem.media || detailedItem.media.length === 0) {
      container.innerHTML = '<p class="text-white text-center">No media found for this experience.</p>';
      return;
    }

    // Import Swiper dynamically
    const { Swiper } = await import('swiper');
    const { Navigation, Pagination } = await import('swiper/modules');

    // Helper function to fix video URLs from Cloudinary
    function getVideoUrl(media: MediaAsset): string {
      if (media.type === 'video' && media.src.includes('cloudinary.com')) {
        // Convert image URL to video URL by changing the resource type
        return media.src
          .replace('/image/upload/', '/video/upload/')
          .replace('f_auto,w_800,c_limit/', 'f_auto,q_auto/')
          .replace(/\.(jpg|jpeg|png|webp)$/i, '.mp4');
      }
      return media.src;
    }

    // Create Swiper HTML
    const swiperHTML = `
      <div class="swiper-wrapper">
        ${detailedItem.media.map((media: MediaAsset) => {
          const videoUrl = getVideoUrl(media);

          return `
          <div class="swiper-slide">
            ${media.type === 'image' ? `
              <img src="${media.src}" alt="${media.alt || funItem.title}" loading="lazy" />
            ` : `
              <video controls preload="metadata" playsinline>
                <source src="${videoUrl}" type="video/mp4">
                Your browser does not support the video tag.
              </video>
            `}
            ${media.caption ? `
              <div class="carousel-caption">
                <div class="carousel-caption-text">${media.caption}</div>
              </div>
            ` : ''}
          </div>
        `;
        }).join('')}
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
    `;

    container.innerHTML = swiperHTML;

    // Initialize Swiper
    new Swiper(container as HTMLElement, {
      modules: [Navigation, Pagination],
      loop: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      keyboard: {
        enabled: true,
      },
      spaceBetween: 0,
      centeredSlides: true,
      slidesPerView: 1,
      allowTouchMove: true,
      on: {
        slideChange: function() {
          // Pause all videos when slide changes
          const videos = container.querySelectorAll('video');
          videos.forEach(video => {
            (video as HTMLVideoElement).pause();
          });
        }
      }
    });

    // Handle video loading and error events
    const videos = container.querySelectorAll('video');
    videos.forEach(video => {
      const videoElement = video as HTMLVideoElement;

      // Add click handler to ensure video can play
      videoElement.addEventListener('click', () => {
        if (videoElement.paused) {
          videoElement.play().catch(() => {
            // Silently handle play failures
          });
        } else {
          videoElement.pause();
        }
      });
    });

  } catch (error) {
    console.error('Failed to load media:', error);
    container.innerHTML = '<p class="text-white text-center">Failed to load media. Please try again.</p>';
  }
}


