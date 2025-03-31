import { json } from "@sveltejs/kit"
import { getSpotifyToken } from "$lib/spotify.svelte"

export async function GET() {
  const token = await getSpotifyToken()
  const url = 'https://api.spotify.com/v1/search?q=remaster%2520artist%3AAespa&type=track&limit=5&offset=1'
  const header = {
    "Authorization": "Bearer " + token
  }

  try {
    const response = await fetch(url, { headers: header })
    const data = await response.json()
    return json(data) 
  } catch(error) {
    console.error(error)
    return json({ message: 'error fetching search'}, { status: 500 })
  }
}