let tokenData = $state()

async function storeToken(accessToken, expiresIn) {
  const expiresAt = Date.now() + expiresIn * 1000
  tokenData = { accessToken, expiresAt }
}

async function fetchNewToken(fetch) {
  const response = await fetch('/api/token', { method: 'POST' })
  const data = await response.json()

  storeToken(data.access_token, data.expires_in)

  return data.access_token
}

export async function getSpotifyToken(event) {
  if (!tokenData || Date.now() >= tokenData.expiresAt) {
    return await fetchNewToken(event.fetch)
  }

  return tokenData.accessToken
}
