# Hugo Modules: SEO
Easily set up favicons, robots tags, Open Graph, rich results, sitemaps, and more with the SEO module!

- JSON-LD Schema
- Favicons
- Open Graph tags
- Robot tags, *robots.txt, ai.txt*

## Quick start

1. **Import** this module by adding an entry to your site's config file(s):
    ```toml
    [modules]
    [[module.imports]]
    path = "github.com/plasterbrain/hugo-modules/seo"
    ```
1. **Add** your favicon files to *assets/favicon*:
    - Default: Square (usually 32x32) *favicon.ico*
    - Another format:
      - Square *favicon.svg* OR
      - Square *favicon-{size}x{size}.png* files (ex. 16x16, 32x32)
    - iOS: 180x180 *apple-touch-icon.png*
    - PWA manifest:
      - 192x192 *android-chrome-192x192.png*
      - 512x512 *android-chrome-512x512.png*
1. **Configure** your site to use module features:
    - See *hugo.toml* @TODO link for a list of module settings you may want to edit in your site or theme.
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
        {{- partial "functions/set-cover.html" . -}}
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

Read on to learn about some of the module's quirks and features.

## Feature notes
### Article OG tags
- @TODO there's an archetype in there I think
- OGCover

Twitter title/description inherit values from OG, because lol twitter

### Favicon files
The *favicon/* folder can have any name/path. Just set `site.Params.Seo.FaviconPath` to match the relative path under *assets*.

We use the *assets* directory and not *static* in this module so that Hugo can dynamically generate tags for an arbitrary number of icons/sizes. The module assumes the files in this folder follow the naming conventions of [RealFaviconGenerator](https://realfavicongenerator.net/faq).

Note that *favicon.ico, browserconfig.xml,* and [Apple Touch icons](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html) do not need explicit tags to be discovered so long as they are properly named, so the module supports storing them in *static* or your *assets* favicon folder as you see fit.

### Locked content
Pages with `.Params.Paywall` set to `true` are marked as *paywalled* in the JSON-LD schema. It's assumed that any obfuscated/restricted content on the page has the class `"locked"`. @TODO google link

### Partial structure
Function partials (ex. *set-cover.html*) set `$.Scratch` values and handle default fallbacks. The page head partial (ex. *seo-page.html*) then grabs these values, then escapes, truncates, and formats them in tags.

For handling custom logic specific to certain page kinds/layouts, it's best to override the function partials (and/or the blocks we defined above in *baseof.html*) rather than the unwieldy *seo-page.html*.

### Template performance
If you peek into *seo-page.html,* will see a lengthy pipe chain on a lot of the meta tag values, mostly to escape quotes and the like for use in HTML attributes. Content generally fails gracefully if required asset files etc. don't exist.

These features keep the templates pretty safe and generalized, but may incur small performance costs when building/testing locally. Adjust them for your needs! (Ex. if you know exactly what favicons you're going to have and where they are, you can greatly simplify seo-favicons.html.)

### @TODO
- https://pwa.nuxtjs.org/meta/ https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html
- MULTIPLE SITEMAPS HELP
- site.Params.Pages.About for article:author
- article:publisher
- Set `site.Params.Author` (not `site.Author`) if your site has one author.
- `site.Params.Search.Page` @TODO
- Note the JSON-LD file assumes your search page uses `q` as the search term query parameter (ex. "coolfoods.com/search?q=hotdogs").
- User-agent: archive.org_bot
- Canonical + i18n = ??
- Scripts to ping shit https://www.google.com/ping?sitemap=
- Whatever that bing thing was

## See also
- [Evil Martians favicon guide](https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs)
- https://search.google.com/test/rich-results
- https://www.standards-schmandards.com/2004/title-text-separators/
- https://developer.yoast.com/#browse-technical-specifications
- https://technicalseo.com/tools/
- https://firt.dev/notes/pwa/
- https://firt.dev/notes/pwa-ios/
