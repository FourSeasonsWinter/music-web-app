<script>
  import { fade } from "svelte/transition"
  import Loading from "./Loading.svelte"

  let { onSearch } = $props()
  let searchQuery = $state('')

  let loading = $state(false)

  $effect(() => {
    searchQuery
    const timer = setTimeout(async () => {
      if (searchQuery.length <= 1) return

      loading = true

      const response = await fetch(`/api/search?query=${searchQuery}`)
      const data = await response.json()

      loading = false

      onSearch(data)
    }, 700)

    return () => {
      clearTimeout(timer)
    }
  })
</script>

<label>
  <img src="/search.svg" alt="" />
  <input
    type="text"
    bind:value={searchQuery}
    placeholder="Search"
    autocomplete="off"
  />
  {#if loading}
    <p transition:fade={{duration: 80}}><Loading --size="40px" /></p>
  {/if}
</label>

<style>
  input {
    background-color: transparent;
    color: white;
    border: 2px solid transparent;
    border-radius: 14px;
    outline: none;
    width: 18rem;
    padding: 1rem 0;
    padding-left: 3.4rem;
    transition: border 0.2s ease-out;
    font-size: 14px;
  }

  input:hover,
  input:focus {
    border: 2px solid #292929;
  }

  label {
    position: relative;
  }

  img {
    position: absolute;
    left: 0.6rem;
    top: 0.4rem;
    cursor: pointer;
  }

  p {
    position: absolute;
    right: -56px;
    top: 50%;
    translate: 0 -50%;
  }
</style>
