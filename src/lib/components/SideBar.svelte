<script>

</script>

<ul class="side-bar">
  {#snippet item(icon, text)}
    <li class="item">
      <img src="{icon}" alt="">
      <span>{text}</span>
    </li>
  {/snippet}

  {@render item('/pin.svg', 'Pins')}
  {@render item('/playlist.svg', 'Playlists')}
  {@render item('/heart.svg', 'Liked songs')}
  {@render item('/save.svg', 'Saves')}
  {@render item('/artist.svg', 'Artists')}
  {@render item('/album.svg', 'Albums')}
  {@render item('/folder.svg', 'Folders')}
  {@render item('/podcast.svg', 'Podcasts')}
  {@render item('/audiobook.svg', 'Audiobooks')}
</ul>

<style>
  .side-bar {
    list-style: none;
    min-width: 14vw;
  }

  .item {
    padding: .2rem;
    margin-left: .6rem;
    font-size: 14px;
    color: #898989;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    border-radius: 10px;
    cursor: pointer;
    transition: all .1s linear;
  }

  .item:hover {
    background-color: #111;
    filter: brightness(2);
  }
</style>
