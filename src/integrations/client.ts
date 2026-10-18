import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

// Bracket notation use kiya hai taaki TypeScript TS4111 error na de
const SUPABASE_URL =
  (typeof import.meta !== "undefined" && import.meta.env && import.meta.env['VITE_SUPABASE_URL']) ||
  (typeof process !== "undefined" && process.env && (process.env['VITE_SUPABASE_URL'] || process.env['SUPABASE_URL'])) ||
  "";

const SUPABASE_PUBLISHABLE_KEY =
  (typeof import.meta !== "undefined" && import.meta.env && import.meta.env['VITE_SUPABASE_PUBLISHABLE_KEY']) ||
  (typeof process !== "undefined" && process.env && (process.env['VITE_SUPABASE_PUBLISHABLE_KEY'] || process.env['SUPABASE_PUBLISHABLE_KEY'])) ||
  "";

if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
  console.warn(
    "[Supabase] Environment variables missing. Please check VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY in .env."
  );
}

export const supabase = createClient<Database>(
  SUPABASE_URL || "https://placeholder-project.supabase.co",
  SUPABASE_PUBLISHABLE_KEY || "placeholder-anon-key",
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
  }
);