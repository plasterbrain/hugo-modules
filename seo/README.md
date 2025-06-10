# Hugo Modules: SEO
Adds partials for SEO, favicons, and Open Graph support.

## Features
- Open Graph/social media tags
- Generate Open Graph images from a template
- JSON-LD structured data (just breadcrumbs implemented for now)
- Favicons!!!
- *robots.txt* and *ai.txt*
- AI-blocking tags
- Sitemap

## Installation
1. **Import** this module by adding an entry to your site's config file(s):
    ```toml
    [modules]
    [[module.imports]]
    path = "github.com/plasterbrain/hugo-modules/seo"
    ```
1. **Add** your favicon files to a folder under *assets*. By default, this folder is called *favicon*. Set `site.Params.Seo.FaviconPath` in *hugo.toml* if you're using a different folder name.
    - Default: Square (usually 32x32) *favicon.ico*
    - Another format:
      - Square *favicon.svg* OR
      - Square *favicon-{size}x{size}.png* files (ex. 16x16, 32x32)
    - iOS: 180x180 *apple-touch-icon.png*
    - PWA manifest:
      - 192x192 *android-chrome-192x192.png*
      - 512x512 *android-chrome-512x512.png*
1. **Configure** your site to use module features in *hugo.toml*.
    - If your site has pagination, set `paginate` to true.
    - Add `"webappmanifest"` and `"ai"` to `outputs.home` in your config:
      ```toml
      [outputs]
      home = ["HTML", "RSS", "webappmanifest", "ai"]
      ```
1. **Update** your templates with the necessary markup:
    - *baseof.html*:
      Add this in your site's `<head>`:
      ```golang
      {{- partialCached "module-seo/seo-site.html" . "default" -}}
		  {{- partial "module-seo/seo-page.html" . -}}
      ```

## Known issues
- Hugo sometimes caches the custom OG images. If you're editing *get-ogCover.html*, you'll have to clear the generated resources folder to see changes on existing pages.
