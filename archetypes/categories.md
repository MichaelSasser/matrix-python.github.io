---
title: "{{ replace .Name "-" " " | title }}"
description: ""
lead: ""
date: {{ .Date }}
lastmod: {{ .Date }}
contributors: []
draft: true
images: ["{{ .Name | urlize }}.jpg"]
---
