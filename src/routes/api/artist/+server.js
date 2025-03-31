import { json } from "@sveltejs/kit"
import { getSpotifyToken } from "$lib/spotify.svelte"

export async function GET() {
  const token = await getSpotifyToken()

  const result = await fetch('https://api.spotify.com/v1/artists/6YVMFz59CuY7ngCxTxjpxE?si=lqMF_Y2QTDmujixKhvqrtQ', {
    headers: {
      "Authorization": "Bearer " + token
    }
  })

  const data = await result.json()
  return json(data)
}