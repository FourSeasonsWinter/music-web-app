<script>
  import { enhance } from '$app/forms'
  import { goto } from '$app/navigation'
  import SearchBar from '$lib/components/SearchBar.svelte'
  import { signOutUser, user } from '$lib/firebase.svelte'

  const { data } = $props()
  const { token, artistData } = data

  let searchResults = $state.raw()

  async function onSearch(data) {
    searchResults = data
  }

  $inspect(searchResults)
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

<div style="margin: 2rem 0;">spotify access token: {token}</div>

<SearchBar {onSearch} />

<section style="display: flex;">
  {#if searchResults}
    <ol style="list-style: none;">
      <b>tracks</b>
      {#each searchResults.tracks.items as track (track.id)}
        <li>
          <div>{track.name}</div>
          <img
            src={track.album.images[2].url}
            alt=""
          />
        </li>
      {/each}
    </ol>

    <ol style="list-style: none;">
      <b>artists</b>
      {#each searchResults.artists.items as artist (artist.id)}
        <li>
          <div>{artist.name}</div>
          <img
            src={artist.images[2].url}
            alt=""
          />
        </li>
      {/each}
    </ol>

    <ol style="list-style: none;">
      <b>albums</b>
      {#each searchResults.albums.items as album (album.id)}
        <li>
          <div>{album.name}</div>
          <img
            src={album.images[2].url}
            alt=""
          />
        </li>
      {/each}
    </ol>
  {/if}
</section>
