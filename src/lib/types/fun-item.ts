// Modern type definitions for Fun items with Cloudinary integration

export interface FunItem {
  id: string;
  category: 'food' | 'art' | 'nature' | 'entertainment';
  title: string;
  location: string;
  date: string; // ISO string from Cloudinary
  annieRating: number; // 1-5
  allanRating: number; // 1-5
  media: MediaAsset[];
  coverImage?: MediaAsset; // The main image/video for this item
}

export interface MediaAsset {
  id: string; // Cloudinary public_id
  type: 'image' | 'video';
  src: string; // Cloudinary secure_url
  alt: string;
  caption?: string;
  isCover: boolean;
  cloudinaryData?: CloudinaryResource; // Full Cloudinary response data
}

export interface CloudinaryResource {
  public_id: string;
  version: number;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: 'image' | 'video';
  created_at: string;
  bytes: number;
  type: string;
  etag: string;
  placeholder: boolean;
  url: string;
  secure_url: string;
  folder: string;
  access_mode: string;
  metadata?: CloudinaryMetadata;
}

export interface CloudinaryMetadata {
  category?: string;
  title?: string;
  location?: string;
  date?: string;
  annie_rating?: string;
  allan_rating?: string;
  id?: string;
  is_cover?: string;
}

// API Response types
export interface FunItemResponse {
  items: FunItem[];
  total: number;
  hasMore: boolean;
}

export interface ApiError {
  error: string;
  message?: string;
  status: number;
}