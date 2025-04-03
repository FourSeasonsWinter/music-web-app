<script>
  import AlbumCard from './AlbumCard.svelte'
  import ArtistCard from './ArtistCard.svelte'
  import SongCard from './SongCard.svelte'

  const { searchResults } = $props()

  const albumColors = ['#95E6D3', '#6F86FF', '#CE6E9A', '#FDD87D', '#DD138B']
</script>

<main>
  {#if searchResults != undefined}
    <section>
      <h2>Songs</h2>
      <ol>
        {#each searchResults.tracks.items as track (track.id)}
          <SongCard
            imageUrl={track.album.images[1].url}
            songName={track.name}
            artists={track.artists}
          />
        {/each}
      </ol>
    </section>

    <section>
      <h2>Artists</h2>
      <ol>
        {#each searchResults.artists.items.filter((a) => a.images.length > 0) as artist (artist.id)}
          <ArtistCard name={artist.name} imageUrl={artist.images[1].url} />
        {/each}
      </ol>
    </section>

    <section>
      <h2 class="albums-title">Albums</h2>
      <ol>
        {#each searchResults.albums.items as album, index (album.id)}
          <AlbumCard
            imageUrl={album.images[1].url}
            name={album.name}
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
