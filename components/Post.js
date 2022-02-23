import Link from 'next/link'

export default function Post({ post }) {
  return (
    <div>
      <h2 className="font-dosis text-2xl mt-4">{post.frontmatter.title}</h2>
      <h3 className='post-date mt-2'>Posted on {post.frontmatter.date}</h3>
      <p className='mt-1'>{post.frontmatter.excerpt}</p>

      <Link href={`/blog/${post.slug}`}>
        <a className='btn'>Read More</a>
      </Link>
    </div>
  )
}
