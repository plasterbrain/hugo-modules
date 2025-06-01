# Hugo Module: Embeds
Various shortcodes to turn URLs into embed widgets.
- Generic website card
- Bandcamp
- itch\.io
- Steam
- SoundCloud
- Spotify
- YouTube

However, rather than simply plugging the URL into an iframe or script source, each shortcode fetches data from the platform's API to recreate the third-party widget in plain, privacy-respectin' HTML.

Generic embeds use the Microlink API, which is limited to 50 free calls per day.

It also includes a widget for showing license info.

## Install
Follow general module install instructions.

If using the itch\.io shortcode, you'll need [an itch API key](https://itch.io/api-keys). Put it a separate *config/_default/params.toml* file, like this:

```toml
[api]
itch = "{abcd1234}"
```

Set your *gitignore* to exclude this file.

Notes that using embeds can impact build time if third-party or APIs are slow to respond.