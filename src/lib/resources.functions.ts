import { createServerFn } from "@tanstack/react-start";
import { queryOptions } from "@tanstack/react-query";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/types";

export type PublicResource = {
  id: string;
  title: string;
  description: string | null;
  category: string;
  visibility: string;
  tags: string[];
  mime_type: string | null;
  file_name: string | null;
  external_url: string | null;
  client_name: string | null;
  industry: string | null;
  problem: string | null;
  solution: string | null;
  outcome: string | null;
  completion_date: string | null;
  created_at: string;
  download_url: string | null;
};

export const listPublicResources = createServerFn({ method: "GET" }).handler(async (): Promise<{ items: PublicResource[]; error: string | null }> => {
  const url = process.env["SUPABASE_URL"];
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"];
  if (!url || !key) return { items: [], error: "Resources are unavailable right now." };
  const supabase = createClient<Database>(url, key, { auth: { storage: undefined, persistSession: false, autoRefreshToken: false } });
  const { data, error } = await supabase
    .from("resources")
    .select("id,title,description,category,visibility,tags,bucket,file_path,file_name,mime_type,external_url,client_name,industry,problem,solution,outcome,completion_date,created_at")
    .order("created_at", { ascending: false })
    .limit(200);
  if (error) {
    console.error("listPublicResources failed", error);
    return { items: [], error: "Resources are unavailable right now." };
  }
  const items = await Promise.all((data ?? []).map(async ({ bucket, file_path, ...row }) => {
    let download_url: string | null = null;
    if (row.visibility === "public" && bucket === "public-resources" && file_path) {
      const signed = await supabase.storage.from(bucket).createSignedUrl(file_path, 60 * 60 * 6);
      download_url = signed.data?.signedUrl ?? null;
    }
    return { ...row, download_url };
  }));
  return { items, error: null };
});

export const resourcesQuery = queryOptions({
  queryKey: ["public-resources"],
  queryFn: () => listPublicResources(),
  staleTime: 60_000,
});
