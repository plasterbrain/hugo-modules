# Hugo Modules: Images
Adds partials and functions for responsive and performant image loading.

## Features
- Lazy loading with Lozad.js
- Automatic WebP and/or PNG fallback
- Low-quality image placeholders with native Hugo functions
- Function to get appropriate color for text overlay (using the Colors module)

This module does not use extensive automatic srcset formatting bc I hate that shit

## Quick start
1. **Import** this module by adding an entry to your site's config file(s):
    ```toml
    [modules]
    [[module.imports]]
    path = "github.com/plasterbrain/hugo-modules/images"
    ```
1. **Update** your templates to add the meta tag partials.
  - *baseof.html*
    ```golang
    {{- partialCached "social-site.html" . "default" -}}
    {{- partial "social-page.html" . -}}
    ```

## TODO
- Move SVG thing over here
- fix instructions

{{- $sources = cond (eq $filetype "avif") (slice $image) (slice) -}}
{{- $newImage := $image.Process (print "resize " $width "x" $height) -}}
{{- range (slice "webp" "png") -}}
  {{- $ext := . -}}
  {{- $newImage = $newImage.Process $ext -}}

## Read more
- [Hugo forums discussion on possible LQIP approaches](https://discourse.gohugo.io/t/low-quality-image-placeholder-lqip-pipes/20259)
