import { user } from "$lib/firebase.svelte";
import { redirect } from "@sveltejs/kit";

export function load() {
  if (!user.current)
    redirect(302, '/login')
}