---
title: "Contribute to the Website"
description: "Contribute to our communtiy by improving our documentation."
lead: "Contribute to our communtiy by improving our documentation."
date: 2021-10-10T00:00:00+00:00
lastmod: 2021-10-10T00:00:00+00:00
draft: false
images: []
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

### Directory structure

TODO: Describe all of the directories

#### The documentation

You will find our documentation in
[`./content/docs/`](https://github.com/matrix-python/matrix-python.github.io/tree/master/content/docs).

TODO


<!--vim: set ft=pandoc :-->

