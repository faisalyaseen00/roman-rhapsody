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

- Keep verified restaurant content centralized in `src/data/content.ts` so all pages and languages stay accurate.
- Keep WebGL scene components under `src/components/three` and load them lazily so content pages remain fast and maintainable.
- Treat all generated photography as replaceable editorial concept imagery, never as official restaurant photography.
