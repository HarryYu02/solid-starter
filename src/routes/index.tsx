import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { showToast } from "@/components/ui/toast";

export default function Home() {
  return (
    <main class="flex h-dvh w-dvw items-center justify-center gap-4">
      <ModeToggle />
      <Button
        onClick={() => {
          showToast({ title: "Press" });
          console.info("press");
        }}
      >
        Press me
      </Button>
      <Button
        onClick={() => {
          console.info("press");
        }}
      >
        Press me
      </Button>
    </main>
  );
}
