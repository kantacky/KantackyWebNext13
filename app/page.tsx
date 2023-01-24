import HomePage from './HomePage'

async function getInstagramPosts() {
  try {
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${process.env.INSTAGRAM_API_ACCESS_TOKEN}`,
    )
    const posts = await res.json()
    return posts['data'].slice(0, 6)
  } catch {
    return []
  }
}

export default async function Page() {
  const instagramPosts = await getInstagramPosts()

  return <HomePage instagramPosts={instagramPosts} />
}
