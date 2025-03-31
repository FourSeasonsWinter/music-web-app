<script>
  import { enhance } from '$app/forms'
  import { goto } from '$app/navigation'
  import { signOutUser, user } from '$lib/firebase.svelte'

  const { data } = $props()
  const { token, artistData, searchData } = data
</script>

<h1>Welcome to SvelteKit</h1>
<p>authenticated: {user.current != undefined}</p>

{#if user.current}
  <p>Hello {user.current.displayName}</p>
  <button
    onclick={async () => {
      await signOutUser()
    }}>sign out</button
  >
{:else}
  <button onclick={() => goto('/login')}> to sign in </button>
{/if}

<div>spotify access token: {token}</div>

<div>artist name: {artistData.name}</div>
<img
  src={artistData.images[1].url}
  alt="artist profile"
/>

<div>track name: {searchData.tracks.items[1].name}</div>
<img src={searchData.tracks.items[1].album.images[1].url} alt="">
