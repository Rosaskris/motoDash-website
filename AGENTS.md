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

- Keep the public site in the single index route and use existing UI controls; the product needs an informational page, not account or shop flows.
- Keep confirmed numeric requirements and license/capability flags in src/lib/moto-dash.ts with adjacent tests so product conditions remain consistent.
- Keep third-party platform brand colors as named tokens in src/styles.css and expose them through Button variants, so platform palettes stay exact without hardcoding hex values in components.
- Keep real app screenshots as CDN asset pointers in the index page and section boundary styling in global CSS, so uploaded screens stay unchanged and every section remains visibly distinct.
