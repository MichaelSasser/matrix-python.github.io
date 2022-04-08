---
title: "{{ replace .Name "-" " " | title }}"
description: ""
lead: ""
date: {{ .Date }}
lastmod: {{ .Date }}
draft: true
weight: 50
contributors: []
categories: []
tags: []
images: ["{{ .Name | urlize }}.jpg"]
header_image: ""
floating_image: ""
floating_image_width: 40
floating_image_position: "right"
floating_image_caption: ""
---
