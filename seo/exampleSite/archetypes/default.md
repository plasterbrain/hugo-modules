---
title: {{ replace .Name "-" " " | title }}
date: '{{ time.Now.Format "2006-01-02" }}'

#--- METADATA
#-------------------------------------------------------------
#summary:         # Excerpt for archives
#description:     # Search engine excerpt
#searchKeywords:  # Search engine keywords, string separated by spaces
#OGTitle:         # Social media title
#OGDescription:   # Social media excerpt
#OGCover:         # Social media image
  #image:
  #alt:
  #credit:         # Credit for this image (ex. "My buddy Eric")
  #license:        # License info URL or Creative Commons SPDX ID (ex. CC BY-NC)

#--- ACCESS MANAGEMENT
#-------------------------------------------------------------
#paywall: false   # Whether this post is locked behind a paywall.
#noindex: false
#nofollow: false
#canonical:  # Canonical URL
#aliases:
# - "old/relative/url/"

#sitemap: # https://www.sitemaps.org/protocol.html
#  changeFreq: yearly
#  disable: false      # Hide from Sitemap; noindex does this by default
#  priority: -1    # -1 tells Hugo to omit this field (default)
---
