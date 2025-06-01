---
title: {{ replace .Name "-" " " | title }}
date: '{{ time.Now.Format "2006-01-02" }}'

#--- INDIEWEB
#-------------------------------------------------------------
#shortlink:  # Shortened link. Used by Bridgy Publish and nothing else
#webmention:
  #enabled: true # Show/receive webmentions on this page.
  #posse: # https://indieweb.org/u-syndication
    #twitter:
  #bridgy:
    #publish: [bluesky, flickr, github, mastodon]
    #omitLink: false                              # true, false, "maybe"
    #ignoreFormatting: false
    #content:
      #bluesky:
      #flickr:
      #github:
      #mastodon:
  #location: [0,0] # Latitude, longitude
  #replyTo:
    #name:
    #author:
    #url:
    #kind: reply   # reply, like, or repost
  #tagged:
    #- name:
    #  url:

#--- SOCIAL MEDIA
#-------------------------------------------------------------
#tumblr:
# tags: "onceler,nsfw"   # Tags to add when user shares via Tumblr
---
