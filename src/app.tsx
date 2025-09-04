import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { type ParentComponent, Suspense } from "solid-js";
import { Toaster } from "@/components/ui/toast";
import "./app.css";
import {
  ColorModeProvider,
  ColorModeScript,
  cookieStorageManagerSSR,
} from "@kobalte/core";
import { isServer } from "solid-js/web";
import { getCookie } from "vinxi/http";

function getServerCookies() {
  "use server";
  const colorMode = getCookie("kb-color-mode");
  return colorMode ? `kb-color-mode=${colorMode}` : "";
}

const RootLayout: ParentComponent = (props) => {
  const storageManager = cookieStorageManagerSSR(
    isServer ? getServerCookies() : document.cookie,
  );

  return (
    <>
      <ColorModeScript storageType={storageManager.type} />
      <ColorModeProvider storageManager={storageManager}>
        <Suspense>{props.children}</Suspense>
      </ColorModeProvider>
      <Toaster />
    </>
  );
};

export default function App() {
  return (
    <Router root={RootLayout}>
      <FileRoutes />
    </Router>
  );
}
