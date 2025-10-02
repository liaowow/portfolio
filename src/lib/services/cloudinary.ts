// Modern functional Cloudinary service for Fun items
import { v2 as cloudinary } from 'cloudinary';
import type { FunItem, MediaAsset, CloudinaryResource } from '../types/fun-item';

// Configuration function
export const configureCloudinary = () => {
  cloudinary.config({
    cloud_name: import.meta.env.CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_CLOUD_NAME,
    api_key: import.meta.env.CLOUDINARY_API_KEY || process.env.CLOUDINARY_API_KEY,
    api_secret: import.meta.env.CLOUDINARY_API_SECRET || process.env.CLOUDINARY_API_SECRET,
  });
};

// Get all Fun items (cover images only for physics grid)
export const getFunItems = async (): Promise<FunItem[]> => {
  configureCloudinary();

  const result = await cloudinary.search
    .expression('folder:Fun2025 AND metadata.is_cover:true')
    .with_field('metadata')
    .max_results(50)
    .execute();

  return transformToFunItems(result.resources || []);
};

// Get all Fun items with all media (for static site)
export const getAllFunItemsWithMedia = async (): Promise<FunItem[]> => {
  configureCloudinary();

  const result = await cloudinary.search
    .expression('folder:Fun2025')
    .with_field('metadata')
    .max_results(200)
    .execute();

  return transformToFunItems(result.resources || []);
};

// Get specific Fun item with all media
export const getFunItemById = async (id: string): Promise<FunItem | null> => {
  configureCloudinary();
  
  const result = await cloudinary.search
    .expression(`folder:Fun2025 AND metadata.fun_id:${id}`)
    .with_field('metadata')
    // .sort_by([['created_at', 'asc']])
    .max_results(20)
    .execute();
  
  if (result.resources.length === 0) {
    return null;
  }
  
  return transformToFunItem(result.resources);
};

// Get Fun items by category
export const getFunItemsByCategory = async (category: string): Promise<FunItem[]> => {
  configureCloudinary();
  
  const result = await cloudinary.search
    .expression(`folder:Fun2025 AND metadata.category:${category}`)
    .with_field('metadata')
    // .sort_by([['created_at', 'desc']])
    .execute();
  
  return transformToFunItems(result.resources);
};

// Get cover images only (for physics cards)
export const getCoverImages = async (): Promise<MediaAsset[]> => {
  configureCloudinary();
  
  const result = await cloudinary.search
    .expression('folder:Home/Fun2025 AND metadata.is_cover:true')
    .with_field('metadata')
    // .sort_by([['created_at', 'desc']])
    .execute();
  
  return result.resources.map(transformToMediaAsset);
};

// Transformation functions
const transformToFunItems = (resources: CloudinaryResource[]): FunItem[] => {
  // Group resources by fun item ID
  const itemMap = new Map<string, CloudinaryResource[]>();
  
  resources.forEach(resource => {
    const metadata = resource.metadata;
    const itemId = metadata?.fun_id; // Fixed: using fun_id instead of id
    
    if (itemId) {
      if (!itemMap.has(itemId)) {
        itemMap.set(itemId, []);
      }
      itemMap.get(itemId)!.push(resource);
    }
  });
  
  // Convert grouped resources to FunItems
  return Array.from(itemMap.entries()).map(([itemId, itemResources]) => {
    // Use the first resource for metadata (they should all be the same)
    const firstResource = itemResources[0];
    const metadata = firstResource.metadata!;
    
    const media = itemResources.map(transformToMediaAsset);
    const coverImage = media.find(m => m.isCover);
    
    return {
      id: itemId,
      category: metadata.category as 'food' | 'art' | 'nature' | 'entertainment',
      title: metadata.title || 'Untitled',
      location: metadata.location || '',
      date: metadata.date || '',
      annieRating: parseInt(metadata.annie_rating || '0'),
      allanRating: parseInt(metadata.allan_rating || '0'),
      media,
      coverImage
    };
  });
};

const transformToFunItem = (resources: CloudinaryResource[]): FunItem => {
  if (resources.length === 0) {
    throw new Error('No resources provided');
  }
  
  // Use the first resource for metadata
  const firstResource = resources[0];
  const metadata = firstResource.metadata!;
  
  const media = resources.map(transformToMediaAsset);
  const coverImage = media.find(m => m.isCover);
  
  return {
    id: metadata.fun_id || '',
    category: metadata.category as 'food' | 'art' | 'nature' | 'entertainment',
    title: metadata.title || 'Untitled',
    location: metadata.location || '',
    date: metadata.date || '',
    annieRating: parseInt(metadata.annie_rating || '0'),
    allanRating: parseInt(metadata.allan_rating || '0'),
    media,
    coverImage
  };
};

const transformToMediaAsset = (resource: CloudinaryResource): MediaAsset => {
  const metadata = resource.metadata;
  
  // Use optimized URL for images, especially HEIC format conversion
  const src = resource.resource_type === 'image' 
    ? getOptimizedUrl(resource.public_id, 'w_800,c_limit')
    : resource.secure_url;
  
  return {
    id: resource.public_id,
    type: resource.resource_type === 'video' ? 'video' : 'image',
    src: src,
    alt: metadata?.title || resource.public_id,
    caption: '', // Can be added later if needed
    isCover: metadata?.is_cover === 'true',
    cloudinaryData: resource
  };
};

// Helper function to get optimized URLs
export const getOptimizedUrl = (publicId: string, transformation?: string): string => {
  const cloudName = 'ddkxh6joe';
  // Start with just format conversion for HEIC files
  const baseTransform = 'f_auto';
  const finalTransform = transformation ? `${baseTransform},${transformation}` : baseTransform;
  
  return `https://res.cloudinary.com/${cloudName}/image/upload/${finalTransform}/${publicId}`;
};

// Helper function to get category icon
export const getCategoryIcon = (category: string): string => {
  const icons = {
    food: '🍕',
    art: '🎨',
    nature: '🌲',
    entertainment: '🎭'
  };
  return icons[category as keyof typeof icons] || '📍';
};

// Helper function to get category color
export const getCategoryColor = (category: string): string => {
  const colors = {
    food: 'rgba(239, 68, 68, 0.8)',
    art: 'rgba(168, 85, 247, 0.8)',
    nature: 'rgba(34, 197, 94, 0.8)',
    entertainment: 'rgba(59, 130, 246, 0.8)'
  };
  return colors[category as keyof typeof colors] || 'rgba(107, 114, 128, 0.8)';
};