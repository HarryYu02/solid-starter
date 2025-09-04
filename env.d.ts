interface ImportMetaEnv {
  readonly VITE_FOO: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare namespace NodeJS {
  interface ProcessEnv {
    readonly DATABASE_URL: string;
  }
}
