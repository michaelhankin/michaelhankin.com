import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import { parseISO, compareDesc } from "date-fns";

const postsDirectory = join(process.cwd(), "posts");

export async function getPosts(
  fields = ["slug", "title", "date", "description", "content"],
  count = undefined
) {
  let postFileNames = fs.readdirSync(postsDirectory);
  if (count) {
    postFileNames = postFileNames.slice(0, count);
  }
  let posts = await Promise.all(
    postFileNames.map(async (postFileName) => {
      const slug = postFileName.slice(0, -3);
      return getPostBySlug(slug);
    })
  );
  posts.sort((a, b) => {
    return compareDesc(parseISO(a.date), parseISO(b.date));
  });
  posts = posts.map((postData) => {
    const post = {};
    if (fields.includes("slug")) {
      post.slug = postData.slug;
    }
    if (fields.includes("title")) {
      post.title = postData.title;
    }
    if (fields.includes("date")) {
      post.date = postData.date;
    }
    if (fields.includes("description")) {
      post.description = postData.description;
    }
    if (fields.includes("content")) {
      post.content = postData.content;
    }
    return post;
  });
  return posts;
}

export async function getPostBySlug(slug) {
  const fullPath = join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);
  const parsedContent = await remark().use(html).process(content);

  return { ...data, slug, content: parsedContent.toString() };
}
