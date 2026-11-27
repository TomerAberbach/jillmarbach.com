# jillmarbach.com

Jill Marbach's portfolio website and blog at https://jillmarbach.com, built with
Astro as a static site and deployed to Cloudflare Workers as static assets. Jill
edits the content through Sveltia CMS at `/admin`, which commits to `main`.

## Project structure

```
jillmarbach.com
├── public/
│   ├── admin/               # Sveltia CMS and its config
│   ├── files/               # Files uploaded through the CMS
│   ├── icons/               # Site and social media icons
│   ├── sw.js                # Removes the service worker of the old Gatsby site
│   ├── _redirects           # Redirects from old URLs, in Cloudflare `_redirects` syntax
│   └── _headers             # Cache headers for the fingerprinted `_astro` files
├── src/
│   ├── content/             # Content edited through the CMS
│   │   ├── posts/*/index.md # Posts, each in a directory with its images
│   │   ├── home.md          # The home page's introduction and featured posts
│   │   └── settings.json    # Name, contact details, and social media
│   ├── content.config.ts    # Content schemas
│   ├── pages/               # Astro pages and endpoints, one per route
│   ├── layouts/layout.astro # The document, head, header, and footer
│   ├── components/          # Astro components
│   ├── services/            # Content helpers and the rehype plugin
│   └── styles/global.css    # Tailwind theme and Markdown styles
├── editing.md               # Jill's guide to the CMS
└── wrangler.jsonc           # Serves `dist` on Cloudflare Workers
```

## Commands

- `pnpm dev` runs the development server.
- `pnpm run check` runs the type checker, linter, formatter, and tests. Run it
  before handing back work. CI also runs `pnpm build`.
- `pnpm vitest --run <file>` runs a test file.
- `pnpm preview` serves the production build the way Cloudflare does.
- `pnpm run deploy` deploys the production build. CI deploys every push to
  `main`.

After a schema or Markdown pipeline change, delete `.astro/data-store.json` and
`node_modules/.astro/data-store.json`, which cache processed content.

## Content

- The CMS commits to `main`, so fetch before starting work.
- Keep `public/admin/config.yml` and `src/content.config.ts` in sync. A test
  compares their field names and which fields are required.
- A bad edit must not break the build where the site can ignore it, because a
  failed build blocks every later edit from being published. A missing or
  corrupt image still breaks the build.
- The CMS writes image paths without a leading `./`.
- Post dates are plain dates. Store no time, which would shift the date by time
  zone.
- Feed GUIDs end in `/`, as they did on the old site. Keep them, or feed readers
  show every post as new.
- jj refuses to snapshot new files over 1 MB. Track one with
  `jj --config snapshot.max-new-file-size=5000000 status`.

## CMS sign-in

The `jillmarbach-cms-auth` worker signs editors in through a GitHub App
installed on this repository. It runs
[`sveltia-cms-auth`](https://github.com/sveltia/sveltia-cms-auth) at commit
`e62e76a`. Its `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` secrets are stored
in Cloudflare. To redeploy it, run this from a checkout of that repository:

```sh
wrangler deploy --name jillmarbach-cms-auth --var ALLOWED_DOMAINS:jillmarbach.com
```

The CMS version in `public/admin/index.html` is pinned with an integrity hash.
Update them together.
