<script>
  import { enhance } from '$app/forms'
  import { goto } from '$app/navigation'
  import { signOutUser, user } from '$lib/firebase.svelte'
</script>

<h1>Welcome to SvelteKit</h1>
<p>authenticated: {user.current != undefined}</p>

{#if user.current}
  <p>Hello {user.current.displayName}</p>
  <button
    onclick={async () => {
      await signOutUser()
    }}>sign out</button
  >
{:else}
  <button onclick={() => goto('/login')}> to sign in </button>
{/if}

<button onclick={() => goto('/protected')}> to protected </button>
