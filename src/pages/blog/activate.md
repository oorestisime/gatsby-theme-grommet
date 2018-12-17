---
path: /activate-features
title: "Activate extra features"
date: 2018-12-06
tags: ["Gatsby","Grommet", "Theme", "Github", "Instagram"]

---

Some of the features of this theme can be conditionally activated by filling in
the necessary information in the `src/data.js` file and the `.env` file or netlify
variables for the sensitive information. For the moment the features are
google analytics, github repositories presentations, instragram latest feed.

# Google Analytics

Activate this feature by filing the `src/data.js` file and adding the following
configuration:

```
analytics: {
  gaId: undefined,
  domain: undefined,
}
```

where the domain is your website domain, and gaId is your google analytics ID

# Instagram

Activating the Instagram features means integrating a row of the latest 8 pictures
of your instagram feed on top of the footer. The plugin offers two ways to be
configurated, one with a username accessing only the last 12 photos and the other one with the graph API. [More information](https://www.npmjs.com/package/gatsby-source-instagram).

To activate the basic configuration you need to include the following in your
`src/data.js` file

```
instagram: {
  username: '===',
},
```

For the graph API you need to add specify the `IG_ACCESS_TOKEN` env variable and
add the following in the `src/data.js` file:

```
instagram: {
  username: '---',
  instagram_id: '---',
},
```

# Github

Activating the github plugin gives you access to your github account and repositories. You can use graphql to query the corresponding github API. The theme
provides you with the necessary abstraction to present repositories. To activate
the plugin you need to add the `GITHUB` env variable which corresponds to a github
access token.
