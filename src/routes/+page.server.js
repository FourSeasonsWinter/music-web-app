import { getSpotifyToken } from '$lib/spotify.svelte.js'

export async function load(event) {
  const token = await getSpotifyToken(event)

  return {
    token
  }
}
