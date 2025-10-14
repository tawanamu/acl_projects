// src/lib/sanity.ts
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// ✅ Directly hardcode for simplicity (works both server and client)
export const client = createClient({
  projectId: 'w9e3e7x1',       // ✅ fixed ID
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})

const builder = imageUrlBuilder(client)
export const urlFor = (source: any) => builder.image(source)
