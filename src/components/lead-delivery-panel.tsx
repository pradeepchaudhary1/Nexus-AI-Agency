import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { RefreshCw } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { getLeadDeliveryStatus, retryLeadDeliveries } from "@/lib/leads.functions";

/** Admin view of leads whose Make.com delivery has not succeeded yet, with a manual retry. */
export function LeadDeliveryPanel() {
  const qc = useQueryClient();
  const load = useServerFn(getLeadDeliveryStatus);
  const retry = useServerFn(retryLeadDeliveries);
  const pending = useQuery({ queryKey: ["lead-deliveries"], queryFn: () => load() });
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState("");

  const onRetry = async () => {
    setBusy(true); setMsg("");
    try {
      const r = await retry();
      setMsg(`Retried ${r.attempted}; delivered ${r.sent}.`);
    } catch { setMsg("Retry failed. Please try again."); }
    setBusy(false);
    qc.invalidateQueries({ queryKey: ["lead-deliveries"] });
  };

  const rows = pending.data ?? [];
  return (
    <div className="glass-panel mt-10 p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div><p className="eyebrow">Lead delivery</p><h2 className="mt-1 font-display text-xl font-semibold">Leads not yet delivered to Make.com</h2></div>
        <Button variant="outline" onClick={onRetry} disabled={busy || rows.length === 0}><RefreshCw className={busy ? "animate-spin" : ""} /> Retry delivery</Button>
      </div>
      {msg && <p role="status" className="mt-3 text-sm text-primary">{msg}</p>}
      {pending.isLoading ? <p className="mt-4 text-sm text-muted-foreground">Loading…</p> : rows.length === 0 ? (
        <p className="mt-4 text-sm text-muted-foreground">All captured leads have been delivered.</p>
      ) : (
        <ul className="mt-4 space-y-2 text-sm">{rows.map((r) => (
          <li key={r.id} className="rounded-md border border-border p-3">
            <span className="font-medium">{r.name}</span> · {r.source} · {r.webhook_status} · {r.webhook_attempts} attempt(s)
            {r.webhook_last_error && <p className="mt-1 text-xs text-muted-foreground">{r.webhook_last_error}</p>}
          </li>
        ))}</ul>
      )}
    </div>
  );
}
