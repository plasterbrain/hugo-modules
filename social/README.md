# Cool Hugo Modules: Social Links
Adds `rel` links, basic IndieWeb integration, and privacy-friendly share links generator.

## Features
- Privacy-friendly share links for Facebook, Hacker News, Mastodon (using Toot on kytta.dev), Reddit, Tumblr, and Twitter, which you can use to set up social share buttons
  - WebShare API share button
- Basic IndieWeb/Webmentions integration
- `rel="me"` tags for verification on Mastodon, IndieAuth login, etc.
- Webfinger template to [use your domain as a Mastodon alias](https://guide.toot.as/guide/use-your-own-domain/#5-static-files). IDK if it works tho!!!

## Installation
1. **Import** this module by adding an entry to your site's config file(s):
    ```toml
    [modules]
    [[module.imports]]
    path = "github.com/plasterbrain/hugo-modules/social"
    ```
1. **Configure** your site to use module features:
    - See *hugo.toml* for a list of module settings you may want to edit in your site or theme. At a bare minimum, you should probably set up some profiles:
      ```toml
      [params.social.profiles]
      email = "cool@example.com"
      facebook = "https://facebook.com/coolguy"
      ```
1. Take a look at the partials included and stick the ones you like into your site code.

### Connecting to `activitypub` on Netlify (untested)
If you're hosting on Netlify, you can make your website a fediverse account in and of itself, using Bridgy Fed.

1. Add the redirects in *exampleSite/netlify.toml* to your site Netlify config.
1. Set `site.Params.Social.Bridgy.UseFed` to `true` in your site config.
1. Add some profile info to your site with [microformats2 h-card](https://fed.brid.gy/docs#profile) markup.

## Read more
- https://guide.toot.as/guide/use-your-own-domain/#5-static-files
- https://indiewebify.me/
- https://mxb.dev/blog/using-webmentions-on-static-sites/

## License
Icons:
- Facebook, Tumblr: [CoreUI Free Icons](https://github.com/coreui/coreui-icons#brand-icons) (CC0 1.0)
- Reddit: [Font Awesome](https://github.com/FortAwesome/Font-Awesome/#license) (CC BY 4.0)
- Linux (Tux): [IcoMoon Free](https://github.com/Keyamoon/IcoMoon-Free/blob/master/License.txt) (CC BY 4.0 😑)
- Hacker News/Y Combinator: [SVG Porn](https://github.com/gilbarbara/logos/blob/master/LICENSE.txt) (CC0 1.0)
- Twitter: [Twitter Open Source](https://github.com/twitter/opensource-website/blob/main/LICENSE) (Apache)
