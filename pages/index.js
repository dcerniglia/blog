import fs from 'fs';
import path from 'path';
import Head from 'next/head'

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div className="container mt-16">
      <Head>
        <title>Actual. Expected.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <p>Lorem incididunt laboris cillum eiusmod. Dolore laborum velit officia nisi nisi ea ea veniam deserunt voluptate voluptate quis. Et fugiat excepteur qui pariatur minim dolore nisi sit id ipsum incididunt excepteur ea. Et fugiat dolor quis ipsum minim in nulla occaecat nisi do ea. Esse dolore aliquip culpa reprehenderit non dolor ut cillum. Aliquip cillum laboris id sint eu elit commodo deserunt occaecat nisi in sunt commodo ut. Et quis veniam reprehenderit dolore in enim quis consequat dolor commodo anim est. Lorem ex deserunt nulla Lorem irure magna. Deserunt eiusmod exercitation consequat sit proident anim nulla dolor. Laboris tempor sint elit ullamco in qui pariatur ullamco sit ullamco.</p>
      </main>

      <footer className="">
      </footer>
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
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
  console.log(markdownWithMeta);
    return {
      slug
    }
  });


  return {
    props: {
      posts: ''
    }
  }
}
