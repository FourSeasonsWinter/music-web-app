<script>
  let searchQuery = $state('')
  let { onSearch } = $props()

  $effect(() => {
    searchQuery
    const timer = setTimeout(async () => {
      if (searchQuery.length <= 1) return

      const response = await fetch(`/api/search?query=${searchQuery}`)
      const data = await response.json()

      onSearch(data)
    }, 800)

    return () => {
      clearTimeout(timer)
    }
  })
</script>

<label>
  <img src="/search.svg" alt="">
  <input
    type="text"
    bind:value={searchQuery}
    placeholder="Search"
    autocomplete="off"
  />
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
    transition: border .2s ease-out;
    font-size: 14px;
  }

  input:hover, input:focus {
    border: 2px solid #292929;
  }

  label {
    position: relative;
  }

  img {
    position: absolute;
    left: .6rem;
    top: .4rem;
    cursor: pointer;
  }
</style>