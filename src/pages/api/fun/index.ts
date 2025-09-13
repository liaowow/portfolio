// API endpoint for Fun items
import type { APIRoute } from 'astro';
import { getFunItems, getFunItemsByCategory } from '../../../lib/services/cloudinary';

export const GET: APIRoute = async ({ url }) => {
  try {
    const category = url.searchParams.get('category');
    
    let items;
    if (category) {
      items = await getFunItemsByCategory(category);
    } else {
      items = await getFunItems();
    }
    
    return new Response(JSON.stringify({
      items,
      total: items.length,
      hasMore: false
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'max-age=300' // Cache for 5 minutes
      }
    });
  } catch (error) {
    console.error('Error fetching Fun items:', error);
    
    return new Response(JSON.stringify({
      error: 'Failed to fetch Fun items',
      message: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};