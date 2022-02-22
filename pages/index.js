import fs from 'fs';
import path from 'path';
import Head from 'next/head'
import matter from 'gray-matter';
import Post from '../components/Post';


export default function Home({ posts }) {
  return (
    <div className="container mt-8">
      <Head>
        <title>Actual. Expected.</title>
      </Head>

      <div className="posts">
        {posts.map((post, index) => {
          <Post key={index} post={post} />
        })};
      </div>
    </div>
  )
}

export async function getStaticProps() {
  // get files from posts directory
  const files = fs.readdirSync(path.join('posts'));

  // get slug and front matter 
  const posts = files.map((filename) => {
    // create slug
    const slug = filename.replace('.md', '')

    // get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
       'utf-8'
      );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter
    }
  });

  return {
    props: {
      posts: posts
    }
  }
}