import PocketBase from 'pocketbase'
import { ref } from 'vue'
import type { TypedPocketBase, UsersResponse } from './pocketbase-types'

export const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE) as TypedPocketBase

export function logout () {
  pb.authStore.clear()
}

export async function loginWithGithub() {
  const authData = await pb
  .collection("users")
  .authWithOAuth2({provider: "github"});
  console.log("loginWithGithub authData", authData);
}
export async function loginWithGoogle() {
  const authData = await pb
  .collection("users")
  .authWithOAuth2({provider: "google"});
  console.log("loginWithGoogle authData", authData);
}

export const user = ref<UsersResponse | null>(null)
pb.authStore.onChange((token, model) => {
  user.value = model as UsersResponse
}, true)