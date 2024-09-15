# Hugo Modules: Images
Adds partials and functions for responsive, accessible, performant image loading.

## Features
- Lazy loading with Lozad.js
- Automatic WebP and/or PNG fallback
- Low-quality image placeholders with native Hugo functions
- Get WCAG-safe color for text overlays (using the Colors module)

There's no exhaustive srcset formatting bc I don't like it

## Install
1. **Import** this module by adding an entry to your site's config file(s):
    ```toml
    [modules]
    [[module.imports]]
    path = "github.com/plasterbrain/hugo-modules/images"
    ```

## @TODO
- Motion-sensitive gifs wrapped in a picture with source, link to actual gif file.

## Read more
- [Hugo forums discussion on possible LQIP approaches](https://discourse.gohugo.io/t/low-quality-image-placeholder-lqip-pipes/20259)
- https://github.com/golang/go/issues/62421
