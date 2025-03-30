# Hugo Modules: SEO
- Open Graph/social media tags
- JSON-LD Schema
- Favicons
- Robot tags, *robots.txt, ai.txt*
- Sitemap

## Install
1. **Import** this module by adding an entry to your site's config file(s):
    ```toml
    [modules]
    [[module.imports]]
    path = "github.com/plasterbrain/hugo-modules/seo"
    ```
1. **Add** your favicon files to a folder under *assets*. By default this folder is called *favicon*. Set `site.Params.Seo.FaviconPath` in *hugo.toml* if you're using a different folder name.
    - Default: Square (usually 32x32) *favicon.ico*
    - Another format:
      - Square *favicon.svg* OR
      - Square *favicon-{size}x{size}.png* files (ex. 16x16, 32x32)
    - iOS: 180x180 *apple-touch-icon.png*
    - PWA manifest:
      - 192x192 *android-chrome-192x192.png*
      - 512x512 *android-chrome-512x512.png*
1. **Configure** your site to use module features in *hugo.toml*.
    - Add `"webappmanifest"` and `"ai"` to `outputs.home` in your config:
      ```toml
      [outputs]
      home = ["HTML", "RSS", "webappmanifest", "ai"]
      ```
1. **Update** your templates with the necessary markup:
    - *baseof.html*:
      Add this in your site's `<head>`:
      ```golang
      {{- /* Block: Title */ -}}
      {{- block "title" . -}}
        {{- partial "functions/set-title.html" . -}}
      {{- end -}}

      {{- /* Block: Description */ -}}
      {{- block "description" . -}}
        {{- partial "functions/set-description.html" . -}}
      {{- end -}}

      {{- /* Block: Cover */ -}}
      {{- block "cover" . -}}
        {{- partial "functions/set-ogCover.html" . -}}
      {{- end -}}

      {{- /* Block: Canonical */ -}}
      {{- block "canonical" . -}}
        {{- partial "functions/set-canonical.html" . -}}
      {{- end -}}

      {{- /* Block: Robots */ -}}
      {{- block "robots" . -}}
        {{- partial "functions/set-robots.html" . -}}
      {{- end -}}

      {{- /* Block: Schema - Delete if you don't want to use JSON-LD */ -}}
      {{- block "schema" . -}}
        {{- partial "functions/set-schema.html" . -}}
      {{- end -}}

      {{- partialCached "seo-site.html" . "default" -}}
      {{- partial "seo-page.html" . -}}
      ```
    - *404.html*:
      Our 404 page shouldn't have a robots directive or canonical tag.
      ```golang
      {{- define "robots" }}{{- "" -}}{{- end }}
      {{- define "canonical" }}{{- "" -}}{{- end }}
      ```

## @SPICY
- Potentially more tags:
  - https://pwa.nuxtjs.org/meta/
  - https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html
- site.Params.Pages.About for article:author
- article:publisher
- `site.Params.Author` vs `site.Author` -- also multiple authors?
- User-agent: archive.org_bot
- Include sensible default titles/desc for archive pages
- Potential bot-blocking fun:
  - https://paste.melanie.lol/no-ai--next.config.js
  - https://www.jeremiak.com/blog/block-bots-netlify-edge-functions/

## Notes
- OG:URL is used as JSON-LD "series root" for paginated archives.
- JSON-LD templates assume your search page uses `q` as the search term query parameter (ex. "coolfoods.com/search?q=hotdogs")
- Does not support multiple sitemaps
- Assumes OG title does not include site title
- Does not support titles/canonical for paginated *posts,* only sections/lists
- Custom OG images will increase your build time.

## Known issues
- Giving some error where $title is template.html
- Hugo sometimes caches the custom OG images, so if you're editing *get-ogCover.html*, you'll have to clear the generated resources folder to see changes on existing pages.

## See also
- [Evil Martians favicon guide](https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs)
- https://search.google.com/test/rich-results
- https://www.standards-schmandards.com/2004/title-text-separators/
- https://developer.yoast.com/#browse-technical-specifications
- https://technicalseo.com/tools/
- https://firt.dev/notes/pwa/
- https://firt.dev/notes/pwa-ios/
