// =========================================================================
// Ambient Type Declarations for Supabase Deno Edge Functions in IDE
// =========================================================================

declare global {
  namespace Deno {
    export interface Env {
      get(key: string): string | undefined;
      set(key: string, value: string): void;
      toObject(): Record<string, string>;
    }
    export const env: Env;
    export function serve(
      handler: (req: Request) => Promise<Response> | Response,
      options?: any
    ): void;
  }
}

declare module "https://deno.land/std@0.168.0/http/server.ts" {
  export function serve(
    handler: (req: Request) => Promise<Response> | Response,
    options?: any
  ): void;
}

declare module "https://*" {
  const content: any;
  export default content;
  export const serve: any;
}

declare module "npm:nodemailer@^6.9.10" {
  const nodemailer: any;
  export default nodemailer;
}

declare module "npm:*" {
  const content: any;
  export default content;
}

export {};
