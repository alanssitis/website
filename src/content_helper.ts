import { getCollection } from "astro:content";
const isProd = import.meta.env.PROD;

export async function getBlogs() {
  return (await getCollection("blog")).filter(
    (post) => !isProd || !(post.data.draft ?? false),
  );
}
