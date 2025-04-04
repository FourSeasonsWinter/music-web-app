<script>
  import { fade } from 'svelte/transition'

  const { imageUrl, name, delay = 0 } = $props()
</script>

<li in:fade={{ delay: delay }}>
  <img src={imageUrl} alt="" />
  <span>{name}</span>
</li>

<style>
  li {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    width: 200px;
    position: relative;
    box-shadow: 0 -1px 1px black;
    cursor: pointer;
  }

  img {
    width: 200px;
    height: 200px;
    border-radius: 10px;
    position: relative;
  }

  li::before {
    content: '';
    position: absolute;
    z-index: -10;
    top: -9px;
    left: 50%;
    transform: translateX(-50%);
    width: 182px;
    height: 10px;
    background-color: var(--color, rgb(13, 75, 17));
    border-radius: 10px 10px 0 0;
    box-shadow: 0 -1px 1px black;
    filter: brightness(0.3);
  }

  li::after {
    content: '';
    position: absolute;
    z-index: -20;
    top: -14px;
    left: 50%;
    transform: translateX(-50%);
    width: 160px;
    height: 10px;
    background-color: var(--color, rgb(5, 49, 8));
    border-radius: 10px 10px 0 0;
    filter: brightness(0.3);
    opacity: 0.6;
  }
</style>
