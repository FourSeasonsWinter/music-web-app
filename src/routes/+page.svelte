<script>
  import { enhance } from '$app/forms'
  import { goto } from '$app/navigation'
  import SearchBar from '$lib/components/SearchBar.svelte'
  import SearchResults from '$lib/components/SearchResults.svelte'
  import SideBar from '$lib/components/SideBar.svelte'
  import TopBar from '$lib/components/TopBar.svelte'
  import { signOutUser, user } from '$lib/firebase.svelte'

  const { data } = $props()
  const { token, artistData } = data

  let searchResults = $state.raw()

  $inspect(searchResults)
</script>

<TopBar onSearch={(data) => searchResults = data} />

<main>
  <SideBar />
  <SearchResults {searchResults} />
</main>

<style>
  main {
    display: flex;
    gap: 0.5rem;
    margin: 0 .5rem;
  }
</style>