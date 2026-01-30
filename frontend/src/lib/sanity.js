import { createClient } from '@sanity/client';
import { mockBlogPosts, mockSuccessStories, mockResources } from './mockData';

// Configuration
// In production, replace these with your actual Sanity project details
const config = {
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID, // e.g., 'your-project-id'
  dataset: process.env.REACT_APP_SANITY_DATASET || 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
};

// Only initialize client if projectId exists
const client = config.projectId ? createClient(config) : null;

// Helper to fetch data with fallback
export async function fetchContent(type) {
  if (!client) {
    console.warn(`Sanity client not configured. Returning mock data for type: ${type}`);
    return getMockData(type);
  }

  try {
    const query = `*[_type == "${type}"]`;
    const data = await client.fetch(query);
    return data.length > 0 ? data : getMockData(type);
  } catch (error) {
    console.error("Sanity fetch failed, using fallback:", error);
    return getMockData(type);
  }
}

function getMockData(type) {
  switch (type) {
    case 'blogPost':
      return mockBlogPosts;
    case 'successStory':
      return mockSuccessStories;
    case 'resource':
      return mockResources;
    default:
      return [];
  }
}

export default client;
