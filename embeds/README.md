# Hugo Module: Embeds
Adds shortcodes for privacy-friendly embed widgets.

Rather than simply plugging the URL into an iframe or script, most shortcodes fetch data from the platform's API and recreates the third-party widget in plain HTML.

## Features
- Generic website card (using Microlink)
- itch\.io and Steam widgets
- Tenor gifs (as accessible videos)
- YouTube (using lite-youtube-embed)
- Shortcode for showing (e.g., Creative Commons) license info

## Installation
1. **Import** this module by adding an entry to your site's config file(s):
    ```toml
    [modules]
    [[module.imports]]
    path = "github.com/plasterbrain/hugo-modules/embeds"
    ```
1. **Set** API keys in a separate file, e.g., *config/_default/params.toml*. If your site is not using folders for configuration, see Hugo's page on [setting up a configuration directory](https://gohugo.io/configuration/introduction/#configuration-directory). Then add keys to the file, like this:
    ```toml
    [embeds.api]
    itch = ""
    logodev = ""
    spotifyAccess = ""
    ```
    Add this file to your *.gitignore* so it doesn't get shared publically:
    ```
    config/**/params.toml
    ```
1. Other settings can be overridden as needed in *config/\*/hugo.toml*.

## Notes
- Generic embeds use the Microlink API, which is limited to 50 free calls per day.
- Using embeds can impact build time if third-party APIs are slow to respond.