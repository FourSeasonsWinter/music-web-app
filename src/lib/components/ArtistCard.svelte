<script>
  import { fade } from 'svelte/transition'

  const { name, imageUrl, delay = 0 } = $props()
</script>

<li in:fade={{ delay: delay }}>
  <img src={imageUrl} alt="" />
  <span>{name}</span>
</li>

<style>
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.9rem;
    cursor: pointer;
  }

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 150px;
    text-align: center;
  }
</style>
