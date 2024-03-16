# Hugo Modules: Socials
Adds functionality to easily create share buttons/links and enhance your site with some basic IndieWeb/fediverse technology.

## Features
- Generates share links for Facebook, Hacker News, Mastodon (using Toot on kytta.dev), Reddit, Tumblr, and Twitter, which you can use to set up social share buttons.
- Adds `rel="me"` tags for verification on Mastodon, IndieAuth login, etc.

## Quick start

1. **Import** this module by adding an entry to your site's config file(s):
    ```toml
    [modules]
    [[module.imports]]
    path = "github.com/plasterbrain/hugo-modules/social"
    ```
1. **Configure** your site to use module features:
    - See *hugo.toml* @TODO link for a list of module settings you may want to edit in your site or theme. At a bare minimum, you should probably set up some profiles:
      ```toml
      [params.social.profiles]
      email = "cool@example.com"
      facebook = "https://facebook.com/coolguy"
      ```
1. **Update** your templates to add the meta tag partials.
    - *baseof.html*
      ```golang
      {{- partialCached "social-site.html" . "default" -}}
      {{- partial "social-page.html" . -}}
      ```

### [Netlify] Connecting to activitypub
includes webfinger template to (@TODO untested nyoron) [use your domain as an alias for your Mastodon account](https://guide.toot.as/guide/use-your-own-domain/#5-static-files).

However, if you're hosting on Netlify, you can alternatively make your website a fediverse account in and of itself, using Bridgy Fed!

1. Add the redirects in *exampleSite/netlify.toml* to your site Netlify config.
1. Set `site.Params.Social.UseBridgyFed` to `true` in your site config.
1. Add some profile info to your site with [microformats2 h-card](https://fed.brid.gy/docs#profile) markup.
1. Call *partials/url-bridgyFed.html* somehwere in your singular post template inside `.h-entry` but not inside `.e-content`.

## Notes
Relies on some of the scratch variables set by the SEO module (with sensible fallbacks)

- Some templates (such as `partials/social-page.html`) use `.Params.noindex` (used by the SEO module) to determine if the page should be private and thus exclude syndication/sharing links.

## TODO
- PGP.txt
- https://github.com/PlaidWeb/webmention.js/ or https://www.swyx.io/clientside-webmentions
- https://brid.gy/about#silo-content
- https://www.webmention.app/docs#using-ifttt-to-trigger-checks

@IDEAs
- "like" link for syndicated twitter copy https://developer.twitter.com/en/docs/twitter-for-websites/web-intents/overview#like-a-tweet
- like/clap button

## Read more
- https://guide.toot.as/guide/use-your-own-domain/#5-static-files
- https://indiewebify.me/
