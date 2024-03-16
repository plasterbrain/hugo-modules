# Hugo Modules: Colors
Some color-conversion utilities, useful for e.g. getting WCAG-compliant contrast colors.

```golang
  {{- /* If you got a color from `.Colors`, convert it to string */ -}}
  {{- $color := delimit . "" -}}

  {{- $rgb := partialCached "functions/hexToRGB.html" $color -}}

  {{- $textColor := partialCached "functions/get-wcagBW.html" $rgb $color -}}
```
