---
title: "Overview"
description: "The documentation about the moderation bot mjölnir"
lead: "The documentation about the moderation bot mjölnir"
date: 2021-10-8T20:17:00+00:00
lastmod: 2021-10-8T20:17:00+00:00
draft: false
images: []
menu:
  internal:
    parent: "mjolnir"
weight: 200
toc: true
---

## What mjolnir does

To be more transparent about how we use the bot, we decided to make public,
how we use the bot.

The bot has currently two "protections" enabled:

1. Bad-Word Blacklist
2. Basic Flood Protection

In addition, we use the bot manually to globally moderate the rooms. That means
if we add or remove a user or server to/from the "code of conduct" blacklist,
the user/server gets banned/unbanned from all existing and future rooms.

#### Bad-Word Blacklist

When an event occurs (e.g. someone writes a
message), and the user who created the event is in that room for less
then 40 minutes, the bot checks `content.body` for keywords
which are on the bad-word blacklist. If the bot finds a match (regex),
it will ban the user for spam, but only in the room the user was creating
that event. Likewise, it redacts ("deletes") the event `m.room.message`
with an event `m.room.redaction` without adding the user to our "code of
conduct" blacklist.

[Michael]({{< ref "/contributors/michael-sasser" >}}) then reviews the
redacted messages manually and unbans the user, in case it was a
false-positive ban or instruct the bot to add the user to "code of conduct"
blacklist. When the time is above 40 minute mark, the bot "trusts" the user
and ignores that users `content.body`.

Currently, the following words are on the bad-word blacklist:

**Sorry for that in advance!!**

- geeksforgeeks
- https://t.me/
- https://discord.gg/
- nigger
- hitler
- sexo
- faggot
- fag
- homo
- nigga
- penis
- blowjob
- vagina
- cunt
- cock
- coon
- anus

#### Basic Flood Protection

When a user posts ≥ 10 `m.room.message` events
(messages not lines) in 60 seconds they'll be banned for spam with the
same conditions as described above.

## The moderation tool

"mjolnir" is a moderation tool for Matrix. Visit
[the project page](https://github.com/matrix-org/mjolnir) for more
information.
