import { getSpotifyToken } from '$lib/spotify.svelte.js'

export async function load(event) {
  const token = await getSpotifyToken(event)

  const artistResponse = await event.fetch('/api/artist', { method: 'GET' })
  const artistData = await artistResponse.json()

  const searchResponse = await event.fetch('/api/search', { method: 'GET' })
  const searchData = await searchResponse.json()

  return {
    token,
    artistData,
    searchData
  }
}
