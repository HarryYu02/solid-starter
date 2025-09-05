import GalleryVerticalEnd from "lucide-solid/icons/gallery-vertical-end";
import { type Component, type ComponentProps, splitProps } from "solid-js";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TextField, TextFieldInput, TextFieldLabel } from "./ui/text-field";

export const LoginForm: Component<ComponentProps<"div">> = (props) => {
  const [, rest] = splitProps(props, ["class"]);
  return (
    <div class={cn("flex flex-col gap-6", props.class)} {...rest}>
      <form>
        <div class="flex flex-col gap-6">
          <div class="flex flex-col items-center gap-2">
            <a href="/" class="flex flex-col items-center gap-2 font-medium">
              <div class="flex size-8 items-center justify-center rounded-md">
                <GalleryVerticalEnd class="size-6" />
              </div>
              <span class="sr-only">Acme Inc.</span>
            </a>
            <h1 class="font-bold text-xl">Welcome to Acme Inc.</h1>
            <div class="text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="/signup" class="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </div>
          <div class="flex flex-col gap-6">
            <div class="grid gap-3">
              <TextField class="grid w-full max-w-sm items-center gap-1.5">
                <TextFieldLabel for="email">Email</TextFieldLabel>
                <TextFieldInput
                  type="email"
                  name="email"
                  id="email"
                  placeholder="m@example.com"
                  required
                />
              </TextField>
            </div>
            <div class="grid gap-3">
              <TextField class="grid w-full max-w-sm items-center gap-1.5">
                <TextFieldLabel for="password">Password</TextFieldLabel>
                <TextFieldInput
                  type="password"
                  name="password"
                  id="password"
                  placeholder="********"
                  required
                />
              </TextField>
            </div>
            <Button type="submit" class="w-full">
              Login
            </Button>
          </div>
        </div>
      </form>
      <div class="text-balance text-center text-muted-foreground text-xs *:[a]:underline *:[a]:underline-offset-4 *:[a]:hover:text-primary">
        By clicking continue, you agree to our <a href="/">Terms of Service</a>{" "}
        and <a href="/">Privacy Policy</a>.
      </div>
    </div>
  );
};
