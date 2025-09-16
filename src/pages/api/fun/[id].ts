// API endpoint for individual Fun item
import type { APIRoute } from 'astro';
import { getFunItemById } from '../../../lib/services/cloudinary';

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  try {
    const { id } = params;
    
    if (!id) {
      return new Response(JSON.stringify({
        error: 'Missing Fun item ID'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
    
    const item = await getFunItemById(id);
    
    if (!item) {
      return new Response(JSON.stringify({
        error: 'Fun item not found',
        message: `No Fun item found with ID: ${id}`
      }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
    
    return new Response(JSON.stringify(item), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'max-age=600' // Cache for 10 minutes
      }
    });
  } catch (error) {
    console.error('Error fetching Fun item:', error);
    
    return new Response(JSON.stringify({
      error: 'Failed to fetch Fun item',
      message: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};