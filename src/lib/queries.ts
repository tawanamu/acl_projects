// src/lib/queries.ts
export const allProjectsQuery = `*[_type == "project"] | order(publishedAt desc){
  _id,
  title,
  "slug": slug.current,
  category,
  description,
  publishedAt,
  client,
  location,
  featured,
  heroImage,
  images,
  highlights[]
}`
