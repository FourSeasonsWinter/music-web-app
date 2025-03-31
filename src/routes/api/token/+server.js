import { json } from '@sveltejs/kit'
import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } from '$env/static/private'

export async function POST() {
  const url = 'https://accounts.spotify.com/api/token'
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
  }
  const body = new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: SPOTIFY_CLIENT_ID,
    client_secret: SPOTIFY_CLIENT_SECRET,
  })

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: body,
    })

    if (!response.ok)
      throw new Error('failed to fetch the spotify token')

    const data = await response.json()
    return json(data)
  } catch (error) {
    console.error(error)
  }
}
