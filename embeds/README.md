# Hugo Module: Privacy-Friendly Embeds
@TODO Whatever these specific classes were?

Various shortcodes to turn URLs into embed widgets.
- Generic website card
- Bandcamp
- itch.io
- Steam
- SoundCloud
- Spotify
- YouTube

However, rather than simply plugging the URL into an iframe or script source, each shortcode fetches data from the platform's API to recreate the third-party widget in plain HTML.

- This sometimes impacts initial build time if the third-party APIs are slow to respond. @TODO cache tips
- Generic embed uses an API limited to 50 free calls per day.
- These shortcodes use Tailwind.css classes. If your site is not using Tailwind, the HTML will not be styled correctly out of the box.

## Setup
1. If using the itch.io shortcode, you'll need [an itch API key](https://itch.io/api-keys). Put it a separate *config/_default/params.toml* file, like this:
    ```toml
    [api]
    itch = "{abcd1234}"
    ```
    Set your *gitignore* to exclude this file.

Media embed iframes have IDs based on their anchorized name or URL (for YouTube). Avoid embedding the same URL multiple times on one page.

## Design rationale
This doesn't have the same level of escaping for things like titles as the SEO module; we'll assume the third-party sites have done that for us. Similarly i18n values are not overly processed on the assumption that you are not insane.

SVG icons don't point to their titles with `aria-label` as there may be multiple widgets with the same icon on a single page, thus creating duplicate IDs.

## @TODO
- https://bsky.link/ ?
- clean this tf up
- sr text for yt is the title twice - change button to "play video" or somethin

## License
- Bandcamp, itch.io, Soundcloud, Steam: [Wikimedia Commons](https://commons.wikimedia.org/wiki/Commons:Threshold_of_originality) (CC0 1.0)
