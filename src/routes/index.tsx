import { A } from "@solidjs/router";

export default function Home() {
  return (
    <main class="flex h-dvh w-dvw items-center justify-center gap-4">
      <A href="/login">Login</A>
      <A href="/signup">Sign up</A>
    </main>
  );
}
