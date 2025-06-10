# Cool Hugo Modules: Images
Adds partials and functions for responsive, accessible, performant image loading.

## Features
- Browser lazy loading
- Automatic WebP, PNG/JPG fallback
- Low-quality image placeholders (LQIP) using native Hugo functions
- WCAG-safe color for text overlays (using the Colors module)
- `prefers-reduced-motion` alternative for gifs

It is designed for providing alternative formats (i.e., to save bandwidth by using WebP if the browser can handle it) rather than many responsive sizes of the same image.

## Installation
1. **Import** this module by adding an entry to your site's config file(s):
    ```toml
    [modules]
    [[module.imports]]
    path = "github.com/plasterbrain/hugo-modules/images"
    ```

## Known issues
- `get-placeholder` gave some DNE error using `placeholder.Content` that went away after server restart
