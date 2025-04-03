<script>
  import { goto } from '$app/navigation'
  import SearchBar from './SearchBar.svelte'
  import { user, signInWithGoogle, signOutUser } from '$lib/firebase.svelte';

  const { onSearch } = $props()

  let selected = $state(1)
</script>

<div class="top-bar">
  <div class="nav-button my-library">
    <img src="/library.svg" alt="" />
    <span>My Library</span>
  </div>

  <button
    class="nav-button {selected === 1 ? 'active' : ''}"
    onclick={() => {
      selected = 1
      goto('/')
    }}
  >
    <img src="/home.svg" alt="" />
    <span>Home</span>
  </button>

  <button
    class="nav-button {selected === 2 ? 'active' : ''}"
    onclick={() => {
      selected = 2
    }}
  >
    <img src="/discover.svg" alt="" />
    <span>Discover</span>
  </button>

  <SearchBar {onSearch} />

  <div class="right-side">
    <button><img src="/news.svg" alt="news"></button>
    <button><img src="/friends.svg" alt="friends"></button>
    <button><img src="/settings.svg" alt="settings"></button>

    {#if user.current === undefined}
      <button onclick={signInWithGoogle}><img src="/user.svg" alt="profile"></button>
    {:else}
      <button onclick={signOutUser}><img class="profile-image" src="{user.current.photoURL}" alt="profile"></button>
    {/if}
  </div>
</div>

<style>
  img,
  span {
    background-color: transparent;
  }

  .top-bar {
    padding: 0.5rem;
    display: flex;
    gap: 0.5rem;
  }

  .nav-button {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.4rem 0;
    width: 14rem;
    padding-left: 0.8rem;
    font-size: 14px;
    color: #898989;
    cursor: pointer;
    background: transparent;
    border: none;
    border-radius: 14px;
    transition: all 0.2s linear;
  }

  .nav-button:hover {
    filter: brightness(2);
  }

  .active {
    background-color: #111;
    color: white;
  }

  .my-library {
    width: 14vw;
    border-radius: 14px;
  }

  .my-library:hover {
    background-color: #111;
  }

  .right-side {
    display: flex;
    align-items: center;
    gap: .7rem;
    margin-left: auto;
  }

  .right-side button {
    background-color: transparent;
    border: none;
  }

  .right-side img {
    cursor: pointer;
    transition: filter .2s linear;
  }

  .right-side img:hover {
    filter: brightness(2);
  }

  .profile-image {
    width: 38px;
    border-radius: 50%;
  }
</style>
