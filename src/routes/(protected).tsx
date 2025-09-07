import {
  createAsync,
  query,
  type RouteDefinition,
  redirect,
} from "@solidjs/router";
import type { ParentComponent } from "solid-js";
import { getRequestEvent } from "solid-js/web";
import { auth } from "@/lib/auth";

const checkSession = query(async () => {
  "use server";
  const event = getRequestEvent();
  if (!event) throw redirect("/");
  const session = await auth.api.getSession({
    headers: event?.request.headers,
  });
  if (!session) throw redirect("/");
  return session;
}, "checkSession");

export const route = {
  preload() {
    return checkSession();
  },
} satisfies RouteDefinition;

const ProtectedLayout: ParentComponent = (props) => {
  createAsync(() => checkSession(), { deferStream: true });

  return <>{props.children}</>;
};

export default ProtectedLayout;
