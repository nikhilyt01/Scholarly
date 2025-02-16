interface ImportMetaEnv {
    readonly VITE_BACKEND_URL:string;
    readonly VITE_FRONT_URL:string;
    
}
interface ImportMeta{
    readonly env: ImportMetaEnv
}

