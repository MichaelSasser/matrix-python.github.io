---
title: "Markdown Header"
description: "Every Markdown file contains a header section in the YAML format to 
configure parts of the page or website"
lead: "Every Markdown file contains a header section in the YAML format to 
configure parts of the page or website"
date: 2021-10-10T00:00:00+00:00
lastmod: 2021-10-10T00:00:00+00:00
draft: false
images: []
menu:
  docs:
    parent: "contributing"
weight: 430
toc: true
---

{{< read_coc_alert >}}
{{< contributing_alert >}}

## Variables and Params

The variables in this header section differ, depending on the type of page you
are editing. Here is a list of all of them:

| Variable              | Type          | Description                                                         |
| --------------------- | ------------- | ------------------------------------------------------------------- |
| `title`               | `str`         | The title of the page                                               |
| `description`         | `str`         | A page description                                                  |
| `date`                | `datetime`    | The date and time page was created                                  |
| `lastmod`             | `datetime`    | The date and time page was modified                                 |
| `draft`               | `bool`        | `flase` shows the page, `true` hides the page, as it does not exist |
| `images`              | `list of str` | Images, which will be converted and moved to the static directory   |
| `matrix_identifier`   | `str`         | The matrix user identifier e.g. `"@michael:michaelsasser.org"`      |
| `matrix_username`     | `str`         | The matrix nickname e.g. `"Michael Sasser"`                         |
| `matrix_moderator`    | `bool`        | `true`, when the user is a moderator; `false`, when not             |
| `website_contributor` | `bool`        | `true`, when the user is a website contributor; `false`, when not   |
| `github_username`     | `str`         | The GitHub username of that user e.g. `"MichaelSasser"`             |

<!-- TODO: Add others needed as minimum requirement and describe them  -->

You will find a more complete list and how to use them inside the site in the
[Hugo docs →](https://gohugo.io/variables/)

Here is an example, how a header might look like:

```text
---
title: "The title"
description: "A description of what this site is about"
date: 2021-10-10T00:00:00+00:00
lastmod: 2021-10-10T00:00:00+00:00
draft: false
images: []
---

Here starts the content of the page.
```

## Types of Variables

| Type       | Example                     | Description                                                      |
| ---------- | --------------------------- | ---------------------------------------------------------------- |
| `str`      | `"Hello World!"`            | A string                                                         |
| `bool`     | `true` or `false`           | A boolean, can only be `ture` or `false`                         |
| `datetime` | `2021-07-08T12:34:56+00:00` | A string, which represents the date and time (See section below) |

## The Datetime format

The date and time can be used with and without timezone offset means:

- Example with timezone offset: `2021-07-08T12:34:56+01:02`
- Example without timezone offset: `2021-07-08T12:34:56`
 
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


<!--vim: set ft=pandoc :-->

