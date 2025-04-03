import { json } from "@sveltejs/kit"
import { getSpotifyToken } from "$lib/spotify.svelte"

export async function GET({ url }) {
  const query = url.searchParams.get('query')
  const encodedQuery = encodeURIComponent(query)

  const token = await getSpotifyToken()
  const apiUrl = `https://api.spotify.com/v1/search?q=${encodedQuery}&type=track%2Cartist%2Calbum&limit=5&offset=0`
  const header = {
    "Authorization": "Bearer " + token
  }

  try {
    const response = await fetch(apiUrl, { headers: header })
    const data = await response.json()

    return json(data) 
  } catch(error) {
    console.error('api error', error)
    return json({ message: 'error fetching search'}, { status: 500 })
  }
}