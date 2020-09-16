const client = require("contentful").createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function getAllBlogs() {
  const entries = await client.getEntries({
    content_type: "post",
    order: "-fields.date",
  });
  if (entries.items) {
    return entries.items;
  }
  console.log(`Error getting Entries for ${contentType.name}.`);
}

export async function getBlogBySlug(slug) {
  const entries = await client.getEntries({
    content_type: "post",
    limit: 1,
    "fields.slug[in]": slug,
  });
  if (entries.items) {
    return entries.items[0];
  }
  console.log(`Error getting Entries for ${contentType.name}.`);
}

export async function getMoreBlogs(slug) {
  const entries = await client.getEntries({
    content_type: "post",
    limit: 3,
    order: "-fields.date",
    "fields.slug[nin]": slug,
  });

  if (entries.items) {
    return entries.items;
  }
  console.log(`Error getting Entries for ${contentType.name}.`);
}

function parseBlogSlug({ fields }) {
  return {
    slug: fields.slug,
  };
}

function parseBlogSlugEntries(entries, cb = parseBlogSlug) {
  return entries?.items?.map(cb);
}

export async function getAllBlogsWithSlug() {
  const entries = await client.getEntries({
    content_type: "post",
    select: "fields.slug",
  });
  return parseBlogSlugEntries(entries, (post) => post.fields);
}
