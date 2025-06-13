/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_PROJECTS_API_URL: string;
  readonly VITE_CONTACT_POST_DATA_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
