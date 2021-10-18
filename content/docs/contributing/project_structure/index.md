---
title: "Project Structure"
description: "Contribute to our communtiy by improving our documentation."
lead: "Contribute to our communtiy by improving our documentation."
date: 2021-10-10T00:00:00+00:00
lastmod: 2021-10-10T00:00:00+00:00
draft: false
images: ["blog_card.jpeg"]
menu:
  docs:
    parent: "contributing"
weight: 420
toc: true
---

{{< read_coc_alert >}}
{{< contributing_alert >}}

| Directory                                                                                     | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| [`./content/`](https://github.com/matrix-python/matrix-python.github.io/tree/master/content/) | The base directory for all content except the "[Home](https://matrix-python.github.io/)" page |


## The Documentation (Docs)

| Variable                                                                                                                        | Description                            |
| ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| [`./content/docs/`](https://github.com/matrix-python/matrix-python.github.io/tree/master/content/docs)                          | The base directory for the docs        |
| [`./content/docs/contributing`](https://github.com/matrix-python/matrix-python.github.io/tree/master/content/docs/contributing) | The "Contributing" section of the docs |
| [`./content/docs/prologue`](https://github.com/matrix-python/matrix-python.github.io/tree/master/content/docs/prologue)         | The "Prologue"section of the docs      |
| [`./content/docs/tutorial`](https://github.com/matrix-python/matrix-python.github.io/tree/master/content/docs/tutorial)         | The "Tutorial" section of the docs     |
| [`./content/docs/help`](https://github.com/matrix-python/matrix-python.github.io/tree/master/content/docs/help)                 | The "Help" section of the docs         |

{{< alert icon="⚠" text="Remember to add every image you used to the images in the document header as described in the <a href=\"#images\">Images section</a>." />}}

## The Contributors

| Directory                                                                                                              | Description                            |
| ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| [`./content/contributors/`](https://github.com/matrix-python/matrix-python.github.io/tree/master/content/contributors) | The base directory of the contributors |

A Contributor page is the personal pages every contributor has, when they 
want to write a blog entry. The contributor page is needed in the 
config section of the blog entry to show the reader more about the person 
who wrote the blog entry.

{{< img src="blog_card.jpeg" alt="blog card example" caption="<center><em>Example: Blog Card from the \"Home\" page</em></center>" class="border-0"  >}}

The above example shows an entry, which featured multiple contributors.
To add the contributors to the blog entry the `contributors` variable us used.
In this case it was:
`contributors: ["Michael Sasser", "BrenBarn", "ilex", "James Belchamber"]`

If you click on one of the contributors, marked with a red underline, you will
see the contributor page of this user. For example 
[Michael's](https://matrix-python.github.io/contributors/michael-sasser/)
contributor page is located in [`./content/contributors/michael-sasser/`](https://github.com/matrix-python/matrix-python.github.io/tree/master/content/contributors/michael-sasser/).
It contains an file `_index.md` and a file `michael_sasser_ava.svg`:

- `_index.md` is the file, which contains all text and references the image
  used.
- `michael_sasser_ava.svg` is the image used in the contributor page.
  Please remember our 
  [image conventions]({{< ref "shortcodes" >}}#image-conventions).
  The filename convention in those images is `my_user_ava.extention`.

You can create a template, which you can use for your contributor page by 
running this command: 

`$ npm run create contributors/my-username/_index.md`

{{< alert icon="⚠" text="Remember to add every image you used to the images in the document header as described in the <a href=\"#images\">Images section</a>." />}}

## The Blog

| Directory                                                                                              | Description                    |
| ------------------------------------------------------------------------------------------------------ | ------------------------------ |
| [`./content/blog/`](https://github.com/matrix-python/matrix-python.github.io/tree/master/content/blog) | The base directory of the blog |


{{< alert icon="⚠" text="Remember to add every image you used to the images in the document header as described in the <a href=\"#images\">Images section</a>." />}}


## The About Page

| Directory                                                                                                                 | Description    |
| ------------------------------------------------------------------------------------------------------------------------- | -------------- |
| [`./content/about/index.md`](https://github.com/matrix-python/matrix-python.github.io/tree/master/content/about/index.md) | The about page |

The about page is special because it is a single site. It only contains
a `index.md` which fully represents the about page.

{{< alert icon="⚠" text="Remember to add every image you used to the images in the document header as described in the <a href=\"#images\">Images section</a>." />}}

## The Privacy-Policy

| Directory                                                                                                                                 | Description                                |
| --------------------------------------------------------------------------------------------------------------------------                | ------------------------------------------ |
| [`./content/privacy-policy/`](https://github.com/matrix-python/matrix-python.github.io/tree/master/content/privacy-policy)                | The base directory of the GDPR and imprint |
| [`./content/privacy-policy/gdpr`](https://github.com/matrix-python/matrix-python.github.io/tree/master/content/privacy-policy/gdpr)       | Contains the GDPR                          |
| [`./content/privacy-policy/imprint`](https://github.com/matrix-python/matrix-python.github.io/tree/master/content/privacy-policy/imprint) | Contains the imprint                       |

{{< alert icon="⚠" text="Do not use any images in the privacy-policy or imprint." />}}

This directory contains out privacy-policy (GDPR; the 
[General Data Protection Regulation](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation) 
([(EU) 2016/679](https://eur-lex.europa.eu/eli/reg/2016/679/oj))
is a regulation in European law on data protection and privacy in the EU.)
and our imprint.


<!--vim: set ft=pandoc :-->

