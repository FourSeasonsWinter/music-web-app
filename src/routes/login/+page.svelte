<script>
  import { enhance } from '$app/forms'
  import { goto } from '$app/navigation'
  import { signInWithGoogle } from '$lib/firebase.svelte'
</script>

<h1>sign in page</h1>

<button
  onclick={async () => {
    await signInWithGoogle()
    goto('/')
  }}>sign in with google</button
>
