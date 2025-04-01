<script>
  let searchQuery = $state('aespa')
  let { onSearch } = $props()

  $effect(() => {
    searchQuery
    const timer = setTimeout(async () => {
      if (searchQuery.length <= 3) return

      const response = await fetch(`/api/search?query=${searchQuery}`)
      const data = await response.json()

      onSearch(data)
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  })
</script>

<label>
  search
  <input
    type="text"
    bind:value={searchQuery}
    placeholder="song, artist or album"
  />
</label>
