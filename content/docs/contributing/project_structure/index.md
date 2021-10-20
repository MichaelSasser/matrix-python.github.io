---
title: "Project Structure"
description: "The project structure describes the function of a document"
lead: "The project structure describes the function of a document"
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


## The Documentation

| Directory                                                                                                                             | Description                               |
| -------------------------------------------------------------------------------------------------------------------------------       | --------------------------------------    |
| [`./content/docs/`](https://github.com/matrix-python/matrix-python.github.io/tree/master/content/docs)                                | The base directory for the docs           |
| [`./content/docs/prologue`](https://github.com/matrix-python/matrix-python.github.io/tree/master/content/docs/prologue)               | The "Prologue"section of the docs         |
| [`./content/docs/tutorial`](https://github.com/matrix-python/matrix-python.github.io/tree/master/content/docs/tutorial)               | The "Tutorial" section of the docs        |
| [`./content/docs/code_of_conduct`](https://github.com/matrix-python/matrix-python.github.io/tree/master/content/docs/code_of_conduct) | The "Code of Conduct" section of the docs |
| [`./content/docs/contributing`](https://github.com/matrix-python/matrix-python.github.io/tree/master/content/docs/contributing)       | The "Contributing" section of the docs    |
| [`./content/docs/help`](https://github.com/matrix-python/matrix-python.github.io/tree/master/content/docs/help)                       | The "Help" section of the docs            |

{{< variable_structure "Documentation" "title" "description" "lead" "date" "lastmod" "draft" "images" "menu" "weight" "toc" >}}

For an documentation page the menu structure is:
```text
menu:
  docs:
    parent: "<the parent>"  # e.g. "prologue", "tutorial", "contributing", ...
```

By convention, `<the parent>` is the directory name of the last
directory in the directory path the file is created in, if the path was not 
inside a [page-bundle](https://gohugo.io/content-management/page-bundles/).
This is because of our directory structuring convention. 
If this doesn't work, the directory structure is wrong and must be corrected.
Either in the directory structure or in the `config/_default/menus.toml`.

To follow our convention we go on with weights.
The `weight` sets the order, the docs are shown to the user.
You find our order (`weight`) convention in `config/_default/menus.toml`
For example the Tutorial has the `weight = 20` in the 
`config/_default/menus.toml`, so the weight of the tutorial starts with `2` 
(ignore the `0` in `20`, we are only interested in the `2`). Then the first entry will get the `weight = 200`. The one after that will get `weight = 210`, then 
`weight = 220` and so on.

## The Contributors

| Directory                                                                                                              | Description                            |
| ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| [`./content/contributors/`](https://github.com/matrix-python/matrix-python.github.io/tree/master/content/contributors) | The base directory of the contributors |

A Contributor page is the personal page every contributor has.
The table of contributors is generated from that page.
Make sure to create your page, when you contribute to the website.

In addition, the contributor page is needed in the 
header of the blog entry to show the reader more about the person 
who wrote the blog entry.

{{< img src="blog_card.jpeg" alt="blog card example" caption="<center><em>Example: Blog Card from the \"Home\" page</em></center>" class="border-0"  >}}

The above example shows an entry, which featured multiple contributors.
To add the contributors to the blog entry the `contributors` variable is used.
In this case, it was:
`contributors: ["Michael Sasser", "BrenBarn", "ilex", "James Belchamber"]`

If you click on one of the contributors, marked with a red underline, you will
see the contributor page of this user. For example,
[Michael's](https://matrix-python.github.io/contributors/michael-sasser/)
contributor page is located in 
[`./content/contributors/michael-sasser/`](https://github.com/matrix-python/matrix-python.github.io/tree/master/content/contributors/michael-sasser/).
It contains a file `_index.md` and a file `michael_sasser_ava.svg`:

- `_index.md` is the file, which contains all text and references the image
  used.
- `michael_sasser_ava.svg` is the image used in the contributor page.
  Please remember our 
  [image conventions]({{< ref "shortcodes" >}}#image-conventions).
  The filename convention in those images is `my_user_ava.extention`.

You can create a template, which you can use for your contributor page by 
running this command: 

`$ npm run create contributors/my-username/_index.md`


{{< variable_structure "Contributor" "title" "description" "date" "lastmod" "draft" "images" "matrix_identifier" "matrix_username" "matrix_moderator" "website_contributor" "github_username" >}}

The `title` in this case would be your nickname on Matrix.

## The Blog

| Directory                                                                                              | Description                    |
| ------------------------------------------------------------------------------------------------------ | ------------------------------ |
| [`./content/blog/`](https://github.com/matrix-python/matrix-python.github.io/tree/master/content/blog) | The base directory of the blog |


{{< variable_structure "Blog" "title" "description" "lead" "date" "lastmod" "draft" "weight" "images" "contributors" >}}

Notice, the `weight` in blog posts is always `50`.


## The About Page

| Directory                                                                                                                 | Description    |
| ------------------------------------------------------------------------------------------------------------------------- | -------------- |
| [`./content/about/index.md`](https://github.com/matrix-python/matrix-python.github.io/tree/master/content/about/index.md) | The about page |

The about page is special because it is a single site. It only contains
a `index.md` which fully represents the about page.

{{< variable_structure "About" "title" "description" "lead" "date" "lastmod" "draft" "images" "menu" "toc" >}}

For an About page the menu structure is:
```text
menu:
  about:
```
In this case `about:` does not get any value.

## The Privacy-Policy

| Directory                                                                                                                                 | Description                                |
| --------------------------------------------------------------------------------------------------------------------------                | ------------------------------------------ |
| [`./content/privacy-policy/`](https://github.com/matrix-python/matrix-python.github.io/tree/master/content/privacy-policy)                | The base directory of the GDPR and imprint |
| [`./content/privacy-policy/gdpr`](https://github.com/matrix-python/matrix-python.github.io/tree/master/content/privacy-policy/gdpr)       | Contains the GDPR                          |
| [`./content/privacy-policy/imprint`](https://github.com/matrix-python/matrix-python.github.io/tree/master/content/privacy-policy/imprint) | Contains the imprint                       |

{{< info >}}
Do not use any images in the privacy-policy or imprint.
{{< /info >}}


This directory contains out privacy-policy (GDPR; the 
[General Data Protection Regulation](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation) 
([(EU) 2016/679](https://eur-lex.europa.eu/eli/reg/2016/679/oj))
is a regulation in European law on data protection and privacy in the EU.)
and our imprint.


<!--vim: set ft=pandoc :-->

