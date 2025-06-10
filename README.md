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
[See HugoMods instructions on how to set up your site to use Hugo mods](https://hugomods.com/blog/2023/03/how-to-use-hugo-modules/).

Partials are namespaced (under "module-whatever") for disambiguation. (Note output format templates and shortcodes are not namespaced.)

Except for some inline styling on the embeds, most of the visual presentation comes from Tailwind classes. If your site is not using [Tailwind](https://tailwindcss.com/), the HTML will not be styled correctly out of the box.

Individual modules have additional instructions for setup/configuration, so take a look at each *README*!

## Known issues
- Not yet updated for Hugo's new template lookup system (starting in 0.146.0). IDK when the old version will be removed.

## License
These modules are provided in the hopes they will be useful as-is; I can't promise any support or regular maintenance.

MIT, be nice to me, no fascists (edit november 2024: I SAID NO FASCISTS!!!!)

## Other Hugo mods on the net!!!
- https://hugo-mods.github.io/#mods
- https://hugomods.com/
