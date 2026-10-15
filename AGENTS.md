<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep public marketing pages as separate TanStack routes sharing one site shell, because each destination needs its own URL and metadata.
- Route every public inquiry through one validated server function into the protected lead submissions table, because no visitor should read captured leads.
- Keep header and footer branding in the shared Brand component and derive the favicon from the same logo image, so branding stays consistent across pages.
- Lead forms save to the database first, then deliver to Make.com from a durable pending/failed status with admin retry, keyed by a client idempotency key, so outages never lose leads and retries never duplicate them.
