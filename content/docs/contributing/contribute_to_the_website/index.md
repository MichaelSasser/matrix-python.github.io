---
title: "Contribute to the Website"
description: "Contribute to our communtiy by improving our documentation."
lead: "Contribute to our communtiy by improving our documentation."
date: 2021-10-10T00:00:00+00:00
lastmod: 2021-10-10T00:00:00+00:00
draft: false
images: ["blog_card.jpeg"]
menu:
  docs:
    parent: "contributing"
weight: 210
toc: true
---

{{< alert icon="⚠" text="Make sure to read the <a href=\"/docs/contributing/coc/\">Code of Conduct</a> first." />}}

## I found a bug or there is room for improvements

Please let us know, if you found an issue with our website. You can do this
by handing in a _Bug report_. <br />
If you have any suggestions, we would appreciate a _Feature Request_.

Hand in a [Bug Report or Feature Request →](https://github.com/matrix-python/matrix-python.github.io/issues/new/choose)
 
## I have a question

Please check the
[discussions](https://github.com/matrix-python/matrix-python.github.io/discussions)
if your question was already answered before.
When you don't find the right answer, feel free to create a new one or ask on
Matrix in our Meta room 
[`#python-meta:matrix.org`](https://matrix.to/#/#python-meta:matrix.org).

## Contribute to the Website

{{< alert icon="⚠" >}}
<b>
  Every text or image you use must have been created or written by yourself!<br />
  <br />
  By creating a Pull Request, you agree that the image or text may be used 
  without any restriction for community projects under the direction of the 
  moderation team at any time.<br />
  <br />
  Non-compliance may have legal consequences and can lead to immediate 
  exclusion from the community.
</b>
{{< /alert >}}

You will find the code of this website on GitHub:

{{< alert icon="GitHub" text="<a href=\"https://github.com/matrix-python/matrix-python.github.io\">https://github.com/matrix-python/matrix-python.github.io</a>" />}}

### About the Website

The repository has two branches with infinite lifetime:

- The 
  [master](https://github.com/matrix-python/matrix-python.github.io/tree/master) 
  branch -- the website reflects the current state of the master branch. 
  When it gets changed a GitHub Action automatically builds and commits that
  change to the `gh-pages` branch.
- The 
  [gh-pages](https://github.com/matrix-python/matrix-python.github.io/tree/gh-pages)
  branch -- The root of the website used by GitHub Pages. You cannot push to 
  this branch.
  
When you are working with the repo make sure to follow the
[GitHub flow](https://guides.github.com/introduction/flow/) 
and the
[Conventional Commits Specification](https://www.conventionalcommits.org/en/v1.0.0/).

It is built with [Hugo](https://gohugo.io/) and based on the lovely template
[Doks](https://getdoks.org/), by
[Henk "h-enk" Verlinde](https://github.com/h-enk). 
You will find many useful information you may need in the
[documentation](https://getdoks.org/docs/prologue/introduction/), 
[code](https://github.com/h-enk/doks)
or
[discussions](https://github.com/h-enk/doks/discussions)
of the `Doks` template.

### The Full Workflow

{{< alert icon="⚠" >}}
<b>
  Every text or image you use must have been created or written by yourself!<br />
  <br />
  By creating a Pull Request, you agree that the image or text may be used 
  without any restriction for community projects under the direction of the 
  moderation team at any time.<br />
  <br />
  Non-compliance may have legal consequences and can lead to immediate 
  exclusion from the community.
</b>
{{< /alert >}}

{{< alert icon="⚠" text="Before you start make sure you hand in any <a href=\"https://github.com/MichaelSasser/matrixctl/issues/new/choose\">issue</a> Describe, what you like to change/add, so others are informed, what you are about to change and why you want to change anything." />}}

1.  Make sure you have Node.js and NPM installed.
2.  Create a fork of of this repository.
3.  Clone the fork (as `origin`) to your local machine.
4.  Add this repository as a remote named `upstream`.
5.  Create a new branch from the
    [master](https://github.com/matrix-python/matrix-python.github.io/tree/master)
    branch. Let's say your issue was issue `#42` and you want to create a 
    feature.
    Your branch name would be `feature/#42-my-feature`.
6.  Install the required tools with `npm install` serve the website on your 
    machine `npm run start -gc`.
7.  Open the URL `[http://localhost:1313](http://localhost:1313)` in your 
    web browser. You should now see the website.
8.  Implement feature (or bugfix) you described in your issue. The website in
    your browser will update as soon as you save the file you are editing.
10. Commit and publish your branch to your fork (`origin`).
11. Create a `Pull Request` from the branch, which contains your changes to
    this repository's `master` branch. 
12. Once the pull request is reviewed and merged you can pull the changes from
   ``upstream`` (this repository) to your local repository and start
    over again from step 5. **Don't forget to create an issue first.**

### Images

{{< alert icon="⚠" >}}
<b>
  Every text or image you use must have been created or written by yourself!<br />
  <br />
  By creating a Pull Request, you agree that the image or text may be used 
  without any restriction for community projects under the direction of the 
  moderation team at any time.<br />
  <br />
  Non-compliance may have legal consequences and can lead to immediate 
  exclusion from the community.
</b>
{{< /alert >}}

<!-- TODO -->

It is possible to use the formats `jpeg`, `png`, `tiff`, `bmp`, `gif` and
`svg`. Images are lazyloaded, blurred up, and responsive. They need to be 
place in a [page bundle](https://gohugo.io/content-management/page-bundles/), 
for example, like 
[this site](https://github.com/matrix-python/matrix-python.github.io/blob/master/content/docs/contributing/contribute_to_the_website):

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


#### Image Conventions

Our convention is to use a `svg` image whenever possible.
If this is not possible you use a `png` image, if your image contains
an alpha channel. If not use an `jpeg` image or an `gif`, if your image
only references a low number of colors.

### Links and references

<!-- TODO -->

### Markdown header Section

Every Markdown file contains a header section in the `YAML` format to 
configure parts of the page. For example:

```markdown
---
title: "The title"
description: "A description of what this site is about"
date: 2021-10-10T00:00:00+00:00
lastmod: 2021-10-10T00:00:00+00:00
draft: false
images: []
---
```

We are using the 

#### Variables and Params

The variables in this header section differ, depending on the type of page you
are editing. Here is a list of all of them:

| Variable      | Type          | Description                                                         |
| ------------- | ------------- | ------------------------------------------------------------------- |
| `title`       | `str`         | The title of the page                                               |
| `description` | `str`         | A page description                                                  |
| `date`        | `datetime`    | The date and time page was created                                  |
| `lastmod`     | `datetime`    | The date and time page was modified                                 |
| `draft`       | `bool`        | `flase` shows the page, `true` hides the page, as it does not exist |
| `images`      | `list of str` | Images, which will be converted and moved to the static directory   |

<!-- TODO: Add others needed as minimum requirement and describe them  -->

You will find a more complete list and how to use them inside the site in the
[Hugo docs →](https://gohugo.io/variables/)

#### Types of Variables

| Type       | Example                     | Description                                                      |
| ---------- | --------------------------- | ---------------------------------------------------------------- |
| `str`      | `"Hello World!"`            | A string                                                         |
| `bool`     | `true` or `false`           | A boolean, can only be `ture` or `false`                         |
| `datetime` | `2021-07-08T12:34:56+00:00` | A string, which represents the date and time (See section below) |

##### The Datetime format

The date and time can be used with and without timezone offset means:

- Example with timezone offset: `2021-07-08T12:34:56+01:02`
- Exmaple without timezone offset: `2021-07-08T12:34:56`
 
| Value      | Optional  | Description                                           |
| ---------- | --------- | ----------------------------------------------------- |
| `2021`     | No        | Year                                                  |
| `07`       | No        | Month                                                 |
| `08`       | No        | Day of the month                                      |
| (`T`)      |           |                                                       |
| `12`       | No        | Hour                                                  |
| `34`       | No        | Minute                                                |
| `56`       | No        | Second                                                |
| `+` or `-` | Yes       | `+` for a positive or `-` a negative timezone offset  |
| `01`       | Yes       | Timezone offset in hours                              |
| `02`       | Yes       | Timezone offset in minutes                            |

### Directory Structure

| Directory                                                                                     | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| [`./content/`](https://github.com/matrix-python/matrix-python.github.io/tree/master/content/) | The base directory for all content except the "[Home](https://matrix-python.github.io/)" page |


#### The Documentation (Docs)

| Variable                                                                                                                        | Description                            |
| ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| [`./content/docs/`](https://github.com/matrix-python/matrix-python.github.io/tree/master/content/docs)                          | The base directory for the docs        |
| [`./content/docs/contributing`](https://github.com/matrix-python/matrix-python.github.io/tree/master/content/docs/contributing) | The "Contributing" section of the docs |
| [`./content/docs/prologue`](https://github.com/matrix-python/matrix-python.github.io/tree/master/content/docs/prologue)         | The "Prologue"section of the docs      |
| [`./content/docs/tutorial`](https://github.com/matrix-python/matrix-python.github.io/tree/master/content/docs/tutorial)         | The "Tutorial" section of the docs     |
| [`./content/docs/help`](https://github.com/matrix-python/matrix-python.github.io/tree/master/content/docs/help)                 | The "Help" section of the docs         |

{{< alert icon="⚠" text="Remember to add every image you used to the images in the document header as described in the <a href=\"#images\">Images section</a>." />}}

#### The Contributors

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
  [image conventions]({{< ref "contribute_to_the_website" >}}#image-conventions).
  The filename convention in those images is `my_user_ava.extention`.

You can create a template, which you can use for your contributor page by 
running this command: 

`$ npm run create contributors/my-username/_index.md`

{{< alert icon="⚠" text="Remember to add every image you used to the images in the document header as described in the <a href=\"#images\">Images section</a>." />}}

#### The Blog

| Directory                                                                                              | Description                    |
| ------------------------------------------------------------------------------------------------------ | ------------------------------ |
| [`./content/blog/`](https://github.com/matrix-python/matrix-python.github.io/tree/master/content/blog) | The base directory of the blog |


{{< alert icon="⚠" text="Remember to add every image you used to the images in the document header as described in the <a href=\"#images\">Images section</a>." />}}


#### The About Page

| Directory                                                                                                                 | Description    |
| ------------------------------------------------------------------------------------------------------------------------- | -------------- |
| [`./content/about/index.md`](https://github.com/matrix-python/matrix-python.github.io/tree/master/content/about/index.md) | The about page |

The about page is special because it is a single site. It only contains
a `index.md` which fully represents the about page.

{{< alert icon="⚠" text="Remember to add every image you used to the images in the document header as described in the <a href=\"#images\">Images section</a>." />}}

#### The Privacy-Policy

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

