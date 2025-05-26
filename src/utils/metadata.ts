import { Metadata } from 'next';

/**
 * Generate metadata for pages that use the FrontLayout
 * 
 * @param title The page title
 * @param description Optional page description
 * @returns Metadata object compatible with Next.js App Router
 */
export function generatePageMetadata(
  title: string,
  description?: string
): Metadata {
  return {
    title: title || 'Joint Heirs Assembly Int\'l',
    description: description || 'Welcome to Joint Heirs Assembly International',
    // You can add more metadata properties here as needed
    // See: https://nextjs.org/docs/app/api-reference/functions/generate-metadata
  };
}