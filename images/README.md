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
1. Ensure you have a class called `.sr-reader-only`! This hides accessible icon labels from screen readers *without* removing them from browser Reader View.

## Known issues
- get-placeholder gave some DNE error using placeholder.Content that went away after server restart
- icon.html uses `.sr-reader-only` which is a wrapper for Tailwind `.sr-only` that doesn't get picked up by browser reader view.
