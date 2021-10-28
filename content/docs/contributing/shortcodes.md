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
mermaid: true
---

{{< read_coc_alert >}}
{{< contributing_alert >}}

to be able to use a shortcode, you must know, if it takes arguments and where
they come from.

Compared to a Python function, they can basically do the same thing. They can:

- use global variables from the page they are called from or anywhere else.
- take a predefined number of anonymous arguments
- take a predefined number of named arguments
- take a any number of anonymous arguments (`*args`)
- take a any number of named arguments (`**kwargs`)
- any combination of that.
- use no arguments at all

In addition they can be called or used in different configurations, depending
on how the function of the shortcode was implemented.

Some of the shortcodes came with Hugo, some with the template and others are
created by us.<br />
Our shortcodes are located as `HTML` files in `layouts/shortcodes/`.
The files have the same name as the shortcodes.

Because of all of that, this documentation is your best friend.
In addition if you find a shortcode used in a page on this website, you can
copy/paste and adjust it to your need.

## Images

`img` is defined in the
[Template](https://github.com/h-enk/doks/blob/master/layouts/shortcodes/img.html).<br />
`img-simple` is defined in the
[Template](https://github.com/h-enk/doks/blob/master/layouts/shortcodes/img-simple.html).

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

Then you can use it with the shortcode in the Markdown file:

<!-- The "/*" and "*/" are only used to prevent them to be rendered.  -->
<!-- They are not actually part of the shortcode!!!  -->

- Use
  `{{</* img-simple src="my_image.jpeg" alt="my image" class="border-0" */>}}`
  for images smaller than 300 px, if they don't need a figure and caption
- Use `{{</* img src="my_image.jpeg" alt="my image" class="border-0" */>}}`
  for images larger than 300 px, if they don't need a figure and caption
- Use
  `{{</* img src="my_image.jpeg" alt="my image" caption="<center><em>My Caption</em></center>" class="border-0" */>}}`
  for image larger than 300 px, or if they need a figure and caption.

Remember to add every image you use to the `images` variable in the document
header. <br />
For example: `images: ["foo.svg", "bar.jpeg"]`

### Image Conventions

Our convention is to use a `svg` image whenever possible.
If this is not possible, you use a `png` image, if your image contains
an alpha channel. If not use an `jpeg` image or an `gif`, if your image
only references a low number of colors.
Other formats are only accepted if they are used for a special purpose.

## Links and Cross References

`ref` is defined by
[Hugo](https://gohugo.io/functions/ref/).<br />
`relref` is defined by
[Hugo](https://gohugo.io/functions/relref/).

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

HTML links are normally only used in HTML documents or nested shortcodes,
like the following `warning`, where you can't use Markdown.

```text
{{</* warning */>}}
A link inside a warning: <a href="{{</* ref "workflow" */>}}">Workflow</a>.
{{</* /warning */>}}
```

{{< rendered >}}
{{< warning >}}
A link inside a warning: <a href="{{< ref "workflow" >}}">Workflow</a>.
{{< /warning >}}
{{< /rendered >}}

For more information, check
[Hugo -- Links and Cross References →](https://gohugo.io/content-management/cross-references/)

## Alerts

`warning` is defined in `layouts/shortcodes/warning.html`.
`danger` is defined in `layouts/shortcodes/danger.html`.
`note` is defined in `layouts/shortcodes/note.html`.

Let's start with the warning alert from the previous section.

```text
{{</* warning */>}}
A link inside a warning: <a href="{{</* ref "workflow" */>}}">Workflow</a>.
{{</* /warning */>}}
```

This kind of shortcode is called a nested shortcode. You can tell that it is
nested because it actually consists of two shortcodes with "something" in the
middle. It is just like HTML, where you have one tag (here shortcode), which
defines the beginning of a scope and one the end. Like in HTML the closing tag
uses the slash `/` before the designator to indicate an ending scope after this
point.

In the following, we use a simpler example.

```text
{{</* wrning text="A \"simple\" warning." /*/>}}
```

```text
{{</* warning */>}}
A "simple" warning.
{{</* /warning */>}}
```

Both of them render the same alert:

{{< rendered >}}
{{< warning text="A \"simple\" warning." />}}
{{< /rendered >}}

Besides the warning alert there are `danger` and `note`. They work exactly
like `warning` but render in different colors and different default headlines.

### Parameters

The alert shortcode has the following parameters

| Parameter  | Description                                               |
| ---------- | --------------------------------------------------------- |
| `headline` | Change the headline                                       |
| `text`     | The alert text                                            |
| `.inner`   | The same as `text` (used, when nested, instead of `text`) |

### Nested vs "Normal"

Tho determine, which one to use, we prepared a simple decision diagram:

{{< mermaid caption="Alert Shortcode Decision Diagram">}}
graph LR
A([Alert Shortcode])
A --> B{Contains <br /> Shortcode?}
B -->|No| C{Contains <br /> HTML?}
C -->|No| D{More then 80 <br /> characters?}

B -->|Yes| E([Nested])
C -->|Yes| E
D -->|Yes| E
D -->|No| F([Normal])
{{< /mermaid >}}

### Special Alerts

There are two special alerts, which are used in the contributing section of
the documentation.
Both of them take no parameters and cannot be nested.

#### Todo Alert

Defined in `layouts/shortcodes/todo.html`.

##### Example

```text
{{</* todo */>}}
```

{{< rendered >}}
{{< todo >}}
{{< /rendered >}}

#### Read the Code of Conduct Alert

Defined in `layouts/shortcodes/read_coc_alert.html`.

##### Example

```text
{{</* read_coc_alert */>}}
```

{{< rendered >}}
{{< read_coc_alert >}}
{{< /rendered >}}

#### Contributing Alert

Defined in `layouts/shortcodes/contributing_alert.html`.

##### Example

```text
{{</* contributing_alert */>}}
```

{{< rendered >}}
{{< contributing_alert >}}
{{< /rendered >}}

## Contributors and Moderators

The contributors/moderators shortcode renders a table of all
contributors/moderators from the data entered in the front matter of there
contributors page.
This is described in [Project Structure: The Contributors]({{< ref "project_structure">}}#the-contributors)

### Contributors

Defined in `layouts/shortcodes/contributors.html`.

#### Example

```text
{{</* contributors */>}}
```

{{< rendered >}}
{{< contributors >}}
{{< /rendered >}}

### Moderators

Defined in `layouts/shortcodes/moderators.html`.

#### Example

```text
{{</* moderators */>}}
```

{{< rendered >}}
{{< moderators >}}
{{< /rendered >}}

<!--
Because this can get quite long, a rendered version can be found in the
[About]({{< ref "about" >}}) page.
-->

## Matrix & Email

The Matrix and email shortcodes are render an representation of an matrix
identifier (user or room) and email address.<br />
They are used to have the option to change the representation globally for all
of them at the same time.

### Matrix

Defined in `layouts/shortcodes/matrix.html`.

#### Parameters

| Parameter    | Description                                  |
| ------------ | -------------------------------------------- |
| `identifier` | The public Matrix room/space/user identifier |

#### Example

```text
{{</* matrix identifier="@michael:michaelsasser.org" */>}}
```

{{< rendered >}}
{{< matrix identifier="@michael:michaelsasser.org" >}}
{{< /rendered >}}

### Email

Defined in `layouts/shortcodes/email.html`.

#### Parameters

| Parameter | Description       |
| --------- | ----------------- |
| `address` | The email address |

#### Example

```text
{{</* email address="Info@MichaelSasser.org" */>}}
```

{{< rendered >}}
{{< email address="Info@MichaelSasser.org" >}}
{{< /rendered >}}

Both can used inside a text.

## Reporting issues

Defined in `layouts/shortcodes/reporting_issues.html`.

This shortcode will render the "Reporting Issues" section of the Code of
Conduct, which is used in many places on this website.<br />
It does not take any parameters.

### Example

```text
{{</* reporting_issues */>}}
```

{{< rendered >}}
{{< reporting_issues >}}
{{< /rendered >}}

## Variable Structure

Defined in `layouts/shortcodes/variable_structure.html`.

The `variable_structure` is used in the
[Project Structure]({{< ref "project_structure" >}})
section. It renders a full description of the front matter of a page. It comes
with a heading line, some descriptions, a table of variables and there
descriptions, in addition how to use the datetime string (if needed) and some
generated example.

### Parameters

| Parameter | Description      |
| --------- | ---------------- |
| `1`       | The section name |
| `2..n`    | The variables    |

### Example

```text
{{</* variable_structure "Foo" "title" "description" */>}}
```

{{< rendered >}}
{{< variable_structure "Foo" "title" "description" >}}
{{< /rendered >}}

## Rendered

`rendered` produces a box around a rendered object with the word _Rendered_
on top. It is used only on this site to show rendered shortcodes in a box.

### Example

```text
{{</* rendered */>}}
Hello
{{</* /rendered */>}}
```

As you see, this shortcode can only be used as nested shortcode.

{{< rendered >}}
{{< rendered >}}
Hello
{{< /rendered >}}
{{< /rendered >}}

## Figure

Defined in `layouts/shortcodes/figure.html`.

`figure` is a nested shortcode which produces a figure.

### Parameters

| Parameter      | Description                          |
| -------------- | ------------------------------------ |
| `figure_class` | Add classes to the figure            |
| `caption`      | The caption                          |
| `.Inner`       | Whatever will be shown in the figure |

### Example

```text
{{</* figure caption="The caption line" */>}}
Hello World
{{</* /figure */>}}
```

{{< rendered >}}
{{< figure caption="The caption line" >}}
Hello World
{{< /figure >}}
{{< /rendered >}}

## Post

Defined in `layouts/shortcodes/post.html`.

Render a `card` of a blog post. This shortcode cannot be nested.
If it somehow finds multiple blog posts with the same title, it will render
only the oldest post.

### Parameters

| Parameter   | Description                                                            |
| ----------- | ---------------------------------------------------------------------- |
| `title`     | The title of the post to be shown                                      |
| `linked`    | Adds the link to the card to the post, if `linked` is not `false`      |
| `container` | Renders a `class="container"` around it, if `container` is not `false` |

{{< note headline="Note" >}}
In this shortcodes the <code>false</code> value is not a boolean value.
It is just a string. Everything else, even <code>nil</code>, will render them.
{{< /note >}}

### Example

```text
{{</* post title="Spaces Announcement 🎉" linked="false" container="false" */>}}
```

{{< rendered >}}
{{< post title="Spaces Announcement 🎉" linked="false" container="false" >}}
{{< /rendered >}}
