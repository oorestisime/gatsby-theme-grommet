---
path: /markdown
title: "Markdown features of this blog"
date: 2018-12-06
tags: ["Markdown","Grommet", "Theme"]
photo: ./img/sunset.jpg

---

Besides the usual markdown feature this theme makes use of prismjs for source code
examples

```js
//Themes are still experimental
module.exports = {
  __experimentalThemes: [
    { resolve: "gatsby-theme-tutorial", options: { root: __dirname } },
  ],
}
```

and gatsby-remark-rehype-images for turning markdown images into gatsby-image components both in single form:

<rehype-image src="./img/fiji.jpg"></rehype-image>

or in grid:

<grid>
<rehype-image src="./img/fiji.jpg"></rehype-image>
<rehype-image src="./img/sunset.jpg"></rehype-image>
</grid>
