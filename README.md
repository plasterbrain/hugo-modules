# plasterbrain's Cool Hugo Modules v0.2.0
![Hugo](https://img.shields.io/badge/Hugo-ff4088?style=flat&logo=hugo&logoColor=ffffff)

Modules are like Hugo's version of plug-ins. They can be used to add theme-agnostic functionality like SEO markup to your Hugo site.

- Colors (for WCAG contrast)
- Third-party embeds
- Responsive images & SVG icons
- RSS feed
- Social sharing links/buttons
- SEO/Open Graph

> These mods are for my own site(s) and not guaranteed to be a turnkey solution. I am only updating them as needed for personal use, but feel free to use my spaghetti mess as a starting point. Only US English (`en`) i18n is provided.

## Installation
Make sure you're using Hugo 0.141.0 or later.

Ideally you also want [Tailwind](https://tailwindcss.com/). Except for some inline styling on the embeds, most of the visual presentation comes from Tailwind classes. If you are using something else, the HTML for many shortcodes will not be styled correctly out of the box.

Partials are namespaced (under "module-whatever") for disambiguation. (Note output format templates and shortcodes are not namespaced.)

1. [**Install Go**](https://go.dev/doc/install) version 1.20 or later.
1. **Initialize a module** for your site or theme using this command in your site or theme folder:
    ```
    hugo mod init github.com/{YOU}/{YOUR SITE REPOSITORY}
    ```

    Note the GitHub URL is just an identifier. It doesn't have to point to a live repository (though it probably should at some point). The *go.mod* in your site directory should look something like this:

    ```
    module github.com/{YOU}/{YOUR SITE REPOSITORY}

    go {VERSION}
    ```
1. **Import the modules** by editing your site config, like this.
    ```toml
    # config/_default/module.toml

    [[imports]]
      path = "github.com/plasterbrain/hugo-modules/embeds"
    ```

> Individual modules may have additional setup instructions, so take a look at each *README*.

### Ignoring imports
Some of the modules use others as dependencies. If you are loading all the Cool Hugo Modules on your site, you can set `ignoreImports = true`.

```toml
# config/_default/module.toml

[[imports]]
	path = "github.com/plasterbrain/hugo-modules/embeds"
	ignoreImports = true
[[imports]]
	path = "github.com/plasterbrain/hugo-modules/feed"
	ignoreImports = true
[[imports]]
	path = "github.com/plasterbrain/hugo-modules/images"
	ignoreImports = true
[[imports]]
	path = "github.com/plasterbrain/hugo-modules/internals"
	ignoreImports = true
[[imports]]
	path = "github.com/plasterbrain/hugo-modules/seo"
	ignoreImports = true
[[imports]]
	path = "github.com/plasterbrain/hugo-modules/social"
	ignoreImports = true
```

@TODO Mounting instructions -- these look for assets under *double* "assets," i.e., an asset folder mounted/structured so that "assets" is part of the slug on your production site. (So in your project it might be "assets/assets/images/logos/reddit.svg.")

### Using local versions
If you clone this repository to use a local copy of the mods in development, you can use a Go workspace (as of Hugo 0.109.0) to point to the local versions!

Here's how to do it for your whole site project, though it would also work for a theme (probably).

1. **Make your site a Go mod** if you haven't already.
1. **Create *go.work*** in that same directory. It should look something like this:
    ```
    go {VERSION}

    use .
    use ../hugo-modules/embeds
    use ../hugo-modules/feed
    use ../hugo-modules/images
    use ../hugo-modules/internals
    use ../hugo-modules/seo
    use ../hugo-modules/social
    ```
1. **Change those file paths** to point to where the modules are on your computer. The example above goes up one directory, assuming your project is structured like this:
    - {YOUR SITE}
      - *go.work*
    - hugo-modules
      - embeds
      - feed
      - etc.
1. [**Use your new workspace file**](https://gohugo.io/configuration/module/#workspace) either with an environment variable or by editing *config/development/module.toml*:
    ```toml
    workspace = "go.work"
    ```

## Known issues
- Not yet updated for Hugo's new template lookup system (starting in 0.146.0). IDK when the old version will be removed.

## License
These modules are provided in the hopes they will be useful as-is; I can't promise any support or regular maintenance.

MIT, be nice to me, no fascists (edit november 2024: I SAID NO FASCISTS!!!!)

## Other Hugo mods on the net!!!
- https://hugo-mods.github.io/#mods
- https://hugomods.com/
