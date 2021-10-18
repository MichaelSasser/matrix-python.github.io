---
title: "Shortcodes"
description: "Shortcodes are functions, which can be used repeatably"
lead: "Shortcodes are functions, which can be used repeatably"
date: 2021-10-10T00:00:00+00:00
lastmod: 2021-10-10T00:00:00+00:00
draft: false
images: []
menu:
  docs:
    parent: "contributing"
weight: 440
toc: true
---

{{< read_coc_alert >}}
{{< contributing_alert >}}

## Images

It is possible to use the formats `jpeg`, `png`, `tiff`, `bmp`, `gif` and
`svg`. Images are lazyloaded, blurred up, and responsive. They need to be 
place in a [page bundle](https://gohugo.io/content-management/page-bundles/), 
for example, like 
[this site](https://github.com/matrix-python/matrix-python.github.io/blob/master/content/docs/contributing/shortcodes):

```bash
# tree of ./content/docs/contributing/
...
├── contributing/
│   ├── contribute_to_the_website/
│   │   ├── index.md
│   │   └── blog_card.jpeg
│   └── _index.md
└── _index.md
```

In the Markdown file you can than use them with a shortcode:

<!-- The "/*" and "*/" are only used to prevent them to be rendered.  -->
<!-- They are not actually part of the shortcode!!!  -->
- Use 
  `{{</* img-simple src="my_image.jpeg" alt="my image" class="border-0" */>}}`
  for images smaller than 300 px, if they don't need a figure and caption
- Use `{{</* img src="my_image.jpeg" alt="my image" class="border-0"  */>}}`
  for images larger than 300 px, if they don't need a figure and caption
- Use 
  `{{</* img src="my_image.jpeg" alt="my image" caption="<center><em>My Caption</em></center>" class="border-0"  */>}}`
  for image larger than 300 px, or if they need a figure and caption.

Remember to add every image you use to the `images` variable in the document 
header. <br />
For example: `images: ["foo.svg", "bar.jpeg"]`


### Image Conventions

Our convention is to use a `svg` image whenever possible.
If this is not possible you use a `png` image, if your image contains
an alpha channel. If not use an `jpeg` image or an `gif`, if your image
only references a low number of colors.
Other formats are only accepted if they are used for a special purpose.


## Links and Cross References

The `ref` and `relref` shortcodes can be used to create permalinks, to a 
document using a relative or absolute path.

<!-- The "/*" and "*/" are only used to prevent them to be rendered.  -->
<!-- They are not actually part of the shortcode!!!  -->

```html
{{</* ref "/blog/my-post.md" */>}}
{{</* relref "contributing" */>}}
```

You can use the shortcode in Markdown:

```markdown
[shortcodes]({{</* ref "shortcodes" */>}})
[Image Conventions]({{</* ref "shortcodes" */>}}#image-conventions)
```

or HTML:

```text
<a href="{{</* ref "shortcodes" */>}}"Shortcodes</a>
<a href="{{</* ref "shortcodes" */>}}#image-conventions">Image Conventions</a>
```

HTML links are normally only used in in HTML documents or nested shortcodes, 
like the following `alert` code, where you can't use Markdown.

```text
{{</* alert icon="⚠" */>}}
A link inside an alert: <a href="{{</* ref "workflow" */>}}">Workflow</a>.
{{</* /alert */>}}
```

Which will looks in the rendered form like the following `alert`.

{{< alert icon="⚠" >}}
A link inside an alert: <a href="{{< ref "workflow" >}}">Workflow</a>.
{{< /alert >}}

For more information check 
[Hugo -- Links and Cross References →](https://gohugo.io/content-management/cross-references/)


<!--vim: set ft=pandoc :-->

