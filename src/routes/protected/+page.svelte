<script>
  import { user } from "$lib/firebase.svelte";

  const { displayName, email } = user.current
</script>

<h1>logged in as {displayName}</h1>
<p>{email}</p>