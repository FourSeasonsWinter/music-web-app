<script>
  import { fade } from 'svelte/transition'

  const { imageUrl, songName, artists, delay = 0 } = $props()

  let artistsString = artists[0].name
  if (artists.length > 1) {
    for (let i = 1; i < artists.length; ++i)
      artistsString += `, ${artists[i].name}`
  }
</script>

<li in:fade={{ delay: delay }}>
  <img src={imageUrl} alt="" />
  <span>{songName}</span>
  <span class="artist">{artistsString}</span>
</li>

<style>
  li {
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }

  img {
    width: 200px;
    height: 200px;
    border-radius: 10px;
    margin-bottom: 0.4rem;
  }

  span {
    width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .artist {
    opacity: 0.6;
    font-size: small;
    font-weight: 100;
    margin-top: 0.6rem;
  }
</style>
