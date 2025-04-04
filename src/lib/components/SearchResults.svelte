<script>
  import { fly } from 'svelte/transition'
  import AlbumCard from './AlbumCard.svelte'
  import ArtistCard from './ArtistCard.svelte'
  import SongCard from './SongCard.svelte'

  const { searchResults } = $props()

  const albumColors = ['#95E6D3', '#6F86FF', '#CE6E9A', '#FDD87D', '#DD138B']
</script>

<main>
  {#if searchResults != undefined}
    <section in:fly={{ y: 20 }}>
      <h2>Songs</h2>
      <ol>
        {#each searchResults.tracks.items.filter((t) => t.album.images[1].height === t.album.images[1].width) as track, index (track.id)}
          <SongCard
            imageUrl={track.album.images[1].url}
            songName={track.name}
            artists={track.artists}
            delay={index * 100}
          />
        {/each}
      </ol>
    </section>

    <section in:fly={{ y: 20 }}>
      <h2>Artists</h2>
      <ol>
        {#each searchResults.artists.items.filter((a) => a.images.length) as artist, index (artist.id)}
          <ArtistCard
            name={artist.name}
            imageUrl={artist.images[1].url}
            delay={index * 100}
          />
        {/each}
      </ol>
    </section>

    <section in:fly={{ y: 20 }}>
      <h2 class="albums-title">Albums</h2>
      <ol>
        {#each searchResults.albums.items as album, index (album.id)}
          <AlbumCard
            imageUrl={album.images[1].url}
            name={album.name}
            delay={index * 100}
            --color={albumColors[index]}
          />
        {/each}
      </ol>
    </section>
  {:else}
    <div class="no-results">
      <img src="/search.svg" alt="" />
      <p>start searching<br />to get started</p>
    </div>
  {/if}
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    width: 100%;
    min-height: 80vh;
    border: 1px solid #222;
    border-radius: 10px;
    padding: 1rem;
    margin-bottom: 0.5rem;
  }

  h2 {
    margin-bottom: 1.6rem;
  }

  h2.albums-title {
    margin-bottom: 2.4rem;
  }

  ol {
    list-style: none;
    display: flex;
    gap: 0.8rem;
  }

  .no-results {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 20px;
    opacity: 0.6;
  }

  .no-results img {
    width: 88px;
  }
</style>
