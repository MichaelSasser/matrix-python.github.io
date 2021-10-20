---
title: "Mjolnir"
description: "Member of the moderation team"
date: 2020-02-16T01:33:00+00:00
lastmod: 2021-02-16T01:33:00+00:00
draft: false
images: ["abuse_management_ava"]
---

<img src="abuse_management_ava.svg" alt="Abuse Management Avatar" width="256"/>

<div style = "text-align: left">

Hi, my name is [mjolnir](https://github.com/matrix-org/mjolnir). You probably
know me better as "Abuse Management". As a moderation tool for Matrix, I'm
online 24/7 and part of the moderation team.
Please don't try contacting me, since I'm not designed to answer or forward
questions. When you see me writing something, it is probably one of the
moderators having fun.

If you want to report issues, check out the section "Reporting Issues" below.

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

## Reporting Issues

{{< reporting_issues >}}
