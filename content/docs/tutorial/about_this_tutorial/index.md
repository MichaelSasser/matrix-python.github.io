---
title: "About this tutorial"
description:
  "A Tutorial on how to join the Matrix Network and get to know it's features."
lead:
  "A Tutorial on how to join the Matrix network and get to know it's features."
date: 2021-02-15T20:05:00+00:00
lastmod: 2021-02-15T20:05:00+00:00
draft: false
images: ["element-welcome.png"]
menu:
  docs:
    parent: "tutorial"
weight: 200
toc: true
---

This tutorial is written, foremost with the intention to get more users
interested in joining the Matrix network. Although Matrix is often compared to
legacy chat applications such as the
<abbr title="Internet Relay Chat">IRC</abbr> network, it is a modern, top of
the line communication network, and available for almost any device. It is not
just suitable to build a robust community, it can be used like any other
Messaging application to communicate with friends and family.

{{< todo >}}

## Installation

To be able to follow the tutorial make sure, to have either the <i>Element</i>
client installed on your device or use the web app. In this tutorial we will
use the Element web application hosted on [element.io](https://element.io), as
seen in the first tab below.

Please choose your operating system to install the application on your device,
or use the web app.

<!-- prettier-ignore-start -->

{{< tabs name="installation" >}} {{{< tab name="Web" >}} The Element web
application is the simplest way to get started, without the need to install
element on your device.

<div class="d-flex justify-content-center">
<a href="https://app.element.io/" class="btn btn-lg btn-outline-primary" tabindex="-1" role="button" aria-disabled="true" target="_blank" rel="element noopener">Launch Element Web</a>
</div>
{{< /tab >}}
{{{< tab name="Linux" >}}
Please use the package manager, provided by your distribution or the one of your choice or download and install the <i>Element Desktop</i> app.
<h5>Arch Linux</h5>
<pre>
<code class="language-bash">
pacman -Syu
pacman -S element-desktop
</code>
</pre>
<h5>Debian / Ubuntu</h5>
<pre>
<code class="language-bash">
sudo apt install -y wget apt-transport-https
sudo wget -O /usr/share/keyrings/element-io-archive-keyring.gpg https://packages.element.io/debian/element-io-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/element-io-archive-keyring.gpg] https://packages.element.io/debian/ default main" | sudo tee /etc/apt/sources.list.d/element-io.list
sudo apt update
sudo apt install element-desktop
</code>
</pre>
<h5>Fedora / Rocky Linux / CentOS</h5>
<pre>
<code class="language-bash">
sudo dnf install -y dnf-plugins-core distribution-gpg-keys
sudo dnf copr enable taw/element
sudo dnf install -y element --refresh
</code>
</pre>
<h5>Nix</h5>
<pre>
<code class="language-bash">
# On NixOS
nix-env -iA nixos.element-desktop
# On non-NixOS
nix-env -iA nixpkgs.element-desktop
# On NixOS (Wayland)
nix-env -iA nixos.element-desktop-wayland
# On non-NixOS (Wayland)
nix-env -iA nixpkgs.element-desktop-wayland
</code>
</pre>
{{< /tab >}}
{{< tab name="Windows" >}}
You can either use the package manager of your choice or download the <i>Element Desktop</i> installer from the download page.
<div class="d-flex justify-content-center">
<a href="https://element.io/get-started#download" class="btn btn-lg btn-outline-primary" tabindex="-1" role="button" aria-disabled="true" target="_blank" rel="element noopener">Download Page</a>
</div>
<h5>Chocolatey</h5>
<pre>
<code class="language-powershell">
choco install element-desktop
</code>
</pre>
<h5>Scoop</h5>
<pre>
<code class="language-powershell">
scoop bucket add extras
scoop install extras/element
</code>
</pre>
{{< /tab >}}}
{{< tab name="MacOS" >}}
You can either use Homebrew or download the <i>Element Desktop</i> as <i>Apple Disk Image</i> from the download page.
<div class="d-flex justify-content-center">
<a href="https://element.io/get-started#download" class="btn btn-lg btn-outline-primary" tabindex="-1" role="button" aria-disabled="true" target="_blank" rel="element noopener">Download Page</a>
</div>

<h5>Homebrew</h5>
<pre>
<code class="language-bash">
brew install --cask element
</code>
</pre>

{{< /tab >}}} {{< tab name="Android" >}} Please use the app store of your
choice to download and install the <i>Element Android</i> app on your Android
smartphone.

<div class="d-flex justify-content-center">
<div class="btn-group" role="group" aria-label="Basic example">
<a href="https://play.google.com/store/apps/details?id=im.vector.app" class="btn btn-lg btn-outline-primary" tabindex="-1" role="button" aria-disabled="true" target="_blank" rel="element noopener">Google Play</a>
<a href="https://f-droid.org/packages/im.vector.app/" class="btn btn-lg btn-outline-primary" tabindex="-1" role="button" aria-disabled="true" target="_blank" rel="element noopener">F-Droid</a>
</div>
</div>
{{< /tab >}}}
{{< tab name="iOS" >}}
Please use the <i>Apple&trade; App Store&trade;</i> to download and install the
<i>Element iOS&reg;</i> app on your Apple&trade; iPhone&trade;.
<div class="d-flex justify-content-center mb-4">
<a href="https://apps.apple.com/app/vector/id1083446067" class="btn btn-lg btn-outline-primary" tabindex="-1" role="button" aria-disabled="true" target="_blank" rel="element noopener">App Store</a>
</div>
<small class="text-muted">IOS is a trademark or registered trademark of Cisco in the U.S. and other countries and is used under license.</small>
{{< /tab >}}}
{{< /tabs >}}
<!-- prettier-ignore-end -->

## Launching the Application

When you clicked on the _Launch Element Web_ button, you are already done and
you should now see the same screen as shown in the image below.

If you installed Element on your device you will find a freshly installed
application called `Element` on your device. If you are a fan of virtual
terminals, you can run Element with `element-desktop`.

{{< img src="element-welcome.png" alt="Element welcome screen image" caption="<center><em>Element Web Client - Welcome Screen</em></center>" figure_class="border-0" >}}
