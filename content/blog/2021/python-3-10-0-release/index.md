---
title: "Python 3.10.0 Release 🐍"
description: ""
lead:
  "Today, the final version of CPython 3.10.0 has been released. New, long
  awaited and controversial features enter the Python programming language."
date: 2021-10-04T08:28:31+02:00
lastmod: 2021-10-04T08:28:31+02:00
draft: false
weight: 50
contributors: ["Michael Sasser"]
categories: ["python"]
tags: ["python", "release"]
images: ["python.svg"]
header_image: "python.svg"
---

We have just celebrated the 30th birthday of CPython, which was released on
February 20, 1991, in version 0.9.0[^first-release]. Now a new event is coming
up. The release of Python 3.10.0.

Some new and interesting features, like the replacement of `typing.Union` with
the overload operator `|` and _Explicit Type Aliases_ are introduced into the
programming language. And then there is _Structural Pattern Matching_.

## Structural Pattern Matching

Even before that, controversial features, such as
[PEP 484 -- Type Hints](https://www.python.org/dev/peps/pep-0484/), were added
to Python. Some programmers are still not happy _Type Hints_. A part of them
come to terms with it, others, including myself, appreciate the feature. But
now a new feature comes along. _Structural Pattern Matching_ -- a "not that
pythonic" version of `if`/`else`, Guido never wanted to add to the Python
programming language, or like `C` programmers would call it: "The Python
version of the `switch`/`case` statement".

### Example

```python
def http_error(status):
  match status:
    case 400:
      return "Bad request"
    case 404:
      return "Not found"
    case 418:
      return "I'm a teapot"
```

However, leaving aside _The Zen of Python_[^zen-of-python] the feature could
still be useful. Unfortunately, I have a hard time with that. The words of Tim
Peters are more than a few tips and rules for me. I associate with them more an
attitude to life (and some well-thought-out programming rules).

It remains to be seen whether the feature will catch on. I assume that it will
behave like _Type Hints_ and it will first take a while until it catches on.
However, for developers who have not been programming for quite so long, this
should be much faster.

## Release highlights[^release-highlights]

### New syntax features:

- [PEP 634](https://www.python.org/dev/peps/pep-0634/) -- Structural Pattern
  Matching: Specification
- [PEP 635](https://www.python.org/dev/peps/pep-0635/) -- Structural Pattern
  Matching: Motivation and Rationale
- [PEP 636](https://www.python.org/dev/peps/pep-0636/) -- Structural Pattern
  Matching: Tutorial
- [bpo-12782](https://bugs.python.org/issue12782) -- Parenthesized context
  managers are now officially allowed.

### New features in the standard library:

- [PEP 618](https://www.python.org/dev/peps/pep-0618/) -- Add Optional
  Length-Checking To zip.

### Interpreter improvements:

- [PEP 626](https://www.python.org/dev/peps/pep-0626/) -- Precise line numbers
  for debugging and other tools.

### New typing features:

- [PEP 604](https://www.python.org/dev/peps/pep-0604/) -- Allow writing union
  types as X | Y
- [PEP 613](https://www.python.org/dev/peps/pep-0613/) -- Explicit Type Aliases
- [PEP 612](https://www.python.org/dev/peps/pep-0612/) -- Parameter
  Specification Variables

### Important deprecations, removals or restrictions:

- [PEP 644](https://www.python.org/dev/peps/pep-0644/) -- Require OpenSSL 1.1.1
  or newer
- [PEP 632](https://www.python.org/dev/peps/pep-0632/) -- Deprecate distutils
  module.
- [PEP 623](https://www.python.org/dev/peps/pep-0623/) -- Deprecate and prepare
  for the removal of the wstr member in PyUnicodeObject.
- [PEP 624](https://www.python.org/dev/peps/pep-0624/) -- Remove Py_UNICODE
  encoder APIs
- [PEP 597](https://www.python.org/dev/peps/pep-0597/) -- Add optional
  EncodingWarning

A full list can be found in the Python documentation:
[What’s New In Python 3.10](https://docs.python.org/3/whatsnew/3.10.html)

[^first-release]:
    [A Brief Timeline of Python](https://python-history.blogspot.com/2009/01/brief-timeline-of-python.html)
    by Guido van Rossum

[^zen-of-python]:
    [PEP 20 _The Zen of Python_](https://www.python.org/dev/peps/pep-0020/), by
    Tim Peters

[^release-highlights]:
    [What’s New In Python 3.10](https://docs.python.org/3/whatsnew/3.10.html)
