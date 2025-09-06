import { A, useNavigate } from "@solidjs/router";
import { Show } from "solid-js";
import { Button } from "@/components/ui/button";
import { showToast } from "@/components/ui/toast";
import { authClient } from "@/lib/auth-client";

export default function Home() {
  const session = authClient.useSession();
  const navigate = useNavigate();

  return (
    <main class="flex h-dvh w-dvw items-center justify-center gap-4">
      <Button as={A} href="/login">
        Login
      </Button>
      <Button as={A} href="/signup">
        Sign up
      </Button>
      <Show when={!!session().data}>
        <Button
          onClick={async () => {
            const result = await authClient.signOut();
            if (result.error) {
              showToast({
                title: "Log out failed",
                description: result.error.message,
                variant: "error",
              });
            } else {
              navigate("/login");
            }
          }}
        >
          Log out
        </Button>
      </Show>
    </main>
  );
}
