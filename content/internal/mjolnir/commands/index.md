---
title: "Commands"
description: "The documentation about the moderation bot Mjölnir"
lead: "The documentation about the moderation bot Mjölnir"
date: 2021-10-8T20:17:00+00:00
lastmod: 2021-10-8T20:17:00+00:00
draft: false
images: ["element_reason.jpeg"]
menu:
  internal:
    parent: "mjolnir"
weight: 210
toc: true
---

{{< danger >}} Keep in mind, some of the commands listed below can do a massive
amount of damage with just a single command!<br /> Do not run any command, if
you don't know what it does. Make sure to read this documentation thoroughly
before using the bot. {{< /danger >}}

## Mjölnir Commands

To run a Mjölnir command, make sure you are in the Mjölnir command and control
room.

{{< note headline="Access to the Command and Control Room" >}} If you don't
have access to the room Mjölnir command and control room, please contact
[Michael]({{< ref "michael-sasser" >}}). {{< /note >}}

Every command starts with a `prefix` Mjölnir accepts, see
[Prefixes →](#prefixes)<br /> Followed by the `command`, see
[Command Reference →](#command-reference)<br /> The arguments after that depend
on the command which was used.

| Argument Placeholder     | Description                                                                 |
| ------------------------ | --------------------------------------------------------------------------- |
| `<list shortcode>`       | See [List Shortcode →](#list-shortcode)                                     |
| `<user>`                 | (Short for `<user ID>`)                                                     |
| `<room>`                 | The room identidier of the room e.g. `#room:domain.tld`                     |
| `<server>`               | The homeserver e.g. `domain.tld`                                            |
| `<glob>`                 | See [Globbing →](#globbing)                                                 |
| `[reason]`               | See [Reason →](#reason)                                                     |
| `<user ID>`              | The user identifier of the user e.g. `@user:domain.tld`                     |
| `[room alias/ID]`        | The room alias e.g. `RoomName` or identifier e.g. `#room:domain.tld`        |
| `[limit]`                | A limit as `integer` to limit the number of actions                         |
| `<event permalink>`      | A permalink to an event e.g. `$ECDPZSedVRUbAxsy0V-pHK5JIwGrO-XZsIo3m5zX-rI` |
| `<alias localpart>`      | For example `roomname` of `#roomname:domain.tld`                            |
| `<shortcode>`            | (Short for `<list shortcode>`)                                              |
| `<protection>`           | See [Protections →](#protections)                                           |
| `<target room alias/ID>` | The room identifier of the target room e.g. `#room:domain.tld`              |
| `[message]`              | A message as string                                                         |
| `<power level>`          | See [Power Level →](#power-level)                                           |

### Command Reference

These are the typical commands we use on a day-to-day basis. The prefix, that
is used in this documentation is `mjolnir`.

| Command                                                | Description                                                                                                                      |
| ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| `mjolnir status`                                       | Print status information                                                                                                         |
| `mjolnir ban <list shortcode> <user> <glob> [reason]`  | Adds an entity to the ban list                                                                                                   |
| `mjolnir unban <list shortcode> <user> <glob> [apply]` | Removes an entity from the ban list. If apply is 'true', the users matching the glob will actually be unbanned                   |
| `mjolnir redact <user ID> [room alias/ID] [limit]`     | Redacts messages by the sender in the target room (or all rooms), up to a maximum number of events in the backlog (default 1000) |
| `mjolnir redact <event permalink>`                     | Redacts a message by permalink                                                                                                   |
| `mjolnir kick <user ID> [room alias/ID] [reason]`      | Kicks a user in a particular room or all protected rooms                                                                         |
| `mjolnir rules`                                        | Lists the rules currently in use by Mjolnir                                                                                      |
| `mjolnir help`                                         | This menu                                                                                                                        |

For more commands, use the command `mjolnir help` or see
[All Commands →](#all-commands)

### Prefixes

Every command starts with a prefix Mjölnir accepts.

- `!mjolnir` (default)
- `mjolnir`
- `bot`

{{< note headline="Adding/Removing Prefixes" >}} Prefixes can only be added or
removed during the deployment of Mjölnir. If you want to change the list of
reasons, please contact [Michael]({{< ref "michael-sasser" >}}). {{< /note >}}

### List Shortcodes

A _list shortcode_ describes a short name for a room, which contains rules
about banned users, rooms or servers. Even though most rooms like this are
publicly readable only some users have the permissions to send some events to
those rooms.<br /> This means, by default, all users joining the room are
muted.

The list shortcodes we use, are in the following table. The permissions column
describes, the power level Mjölnir has in that room.

| List Shortcode | Power Level | Description                               |
| -------------- | ----------- | ----------------------------------------- |
| `coc`          | `100`       | Shortcut for the Code of Conduct ban list |

Mjölnir can subscribe to lists or create new ones. When a user/room/server gets
added to a list, all subscribing instances of Mjölnir, immediately ban that
user, blacklist the room for local users (if Mjölnir is a homeserver
administrator and is configured that way) or sets room ACLs for the server.

Those actions are taken for every room a Mjolnir protects. When a user is not
in a room, Mjölnir will not ban the user right away. When a user joins a room
or, depending on the configuration, is invited to a room Mjölnir protects, it
checks, if a (ban) rule for that user exists. If the rule exists, Mjölnir takes
actions.

For more information about the power level, see [Power Level →](#power-level)

#### Room Reference

The table below describes which list shortcode describes which room.

| List Shortcode | Room                                                                |
| -------------- | ------------------------------------------------------------------- |
| `coc`          | {{< matrix identifier="#code-of-conduct-bans:michaelsasser.org" >}} |

### Reason

A `reason` is a messages e.g. for a user, explaining the reason, why the user
that gets banned. This represents the same as the `reason` field used during
kicking or banning.

{{< img src="element_reason.jpeg" alt="element reason" caption="<center><em>Element Client: Reason for banning a user</em></center>" class="border-0" >}}

For some _reasons_ Mjölnir can automatically redact (delete) the latest
messages of a user. Mjölnir currently redacts for the following reasons:

- `spam`
- `advertising`
- `advertisement`
- `ad`

Every other reason will not be redacted.

Reasons can only be added or removed during the deployment of Mjölnir. If you
want to change the list of reasons, please contact
[Michael]({{< ref "michael-sasser" >}}).

### Globbing

{{< danger headline="Globbing Warning" >}} Globbing means dangerous business.
Be aware of the effects this might have beforehand!<br /> Keep in mind, that
this not only affect users, which are currently a part of the community. It
will affect users, who will join the community in the future, too.
{{< /danger >}}

Globbing describes an ellipsis, or wildcard placeholder, which enables a
feature of Mjölnir to moderate every user who fits that pattern.

For example, you want to ban every user whose user ID starts with `spammer` and
is registered on the `matrix.org` homeserver:

```text
mjolnir ban coc @spam*:matrix.org spam --force`
```

Now, every user who fits that pattern will be banned. For example,
`@spam123:matrix.org`, `@spamabc:matrix.org` or `@spam:matrix.org`. The
`--force` argument is needed to tell Mjölnir that you really know, what you are
about to do.

### Protections

Mjölnir offers automatism to some extent, which means, it can perform curtain
tasks on its own. Those tasks are called `protections`. The available
protections are listed below with their current status.

| Protection                      | Status   |
| ------------------------------- | -------- |
| `FirstMessageIsImageProtection` | disabled |
| `BasicFloodingProtection`       | enabled  |
| `WordList`                      | enabled  |
| `MessageIsVoiceProtection`      | disabled |

{{< note headline="Protections" >}} None of the above listed protections are
publishing the ban to any ban lists. {{< /note >}}

Even though, protections can be enabled/disabled from the _Command and Control
Room_, settings cannot.

#### FirstMessageIsImageProtection

If the first thing a user does after joining is to post an image or video,
they'll be banned for spam

#### BasicFloodingProtection

When a user posts ≥ 10 `m.room.message` events (messages not lines) in 60
seconds they'll be banned for spam with the same conditions as described above.

#### WordList

When an event occurs (e.g. someone writes a message), and the user who created
the event is in that room for less then 40 minutes, the bot checks
`content.body` for keywords which are on the bad-word blacklist. If the bot
finds a match (regex), it will ban the user for spam, but only in the room the
user was creating that event. Likewise, it redacts ("deletes") the event
`m.room.message` with an event `m.room.redaction` without adding the user to
our "code of conduct" blacklist.

[Michael]({{< ref "/contributors/michael-sasser" >}}) then reviews the redacted
messages manually and unbans the user, in case it was a false-positive ban or
instruct the bot to add the user to "code of conduct" blacklist. When the time
is above 40 minute mark, the bot "trusts" the user and ignores that users
`content.body`.

Currently, the following words are on the bad-word blacklist:

**Sorry for that in advance!!**

- thegreatwhitebrotherhood
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

{{< note headline="Changing Settings" >}} Changing settings or modifying words
can only be done during the deployment of Mjölnir. If you want to change
anything, please contact [Michael]({{< ref "michael-sasser" >}}). {{< /note >}}

#### MessageIsVoiceProtection

Because voice messages cannot be disabled, the bot redacts every voice message
without any side effect for the user (no kicking or banning)

### Power Level

Power levels are used in the room permission system. Every new user starts with
a power level of `0` (default setting).

The table below shows the named power levels of a room, which uses the default
settings.

| Power Level | Name          | Description                                                    |
| ----------- | ------------- | -------------------------------------------------------------- |
| `100`       | Administrator |                                                                |
| `50`        | Moderator     |                                                                |
| `0`         | Default       | what every new user gets                                       |
| `-1`        | Muted         | The user cannot write messages, but can still send `reactions` |

### All Commands

{{< note >}} Some of the following commands cannot be used with this instance
of Mjölnir because it is no longer a homeserver administrator. {{< /note >}}

| Command                                                              | Description                                                                                                                      |
| -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `mjolnir`                                                            | Print status information                                                                                                         |
| `mjolnir status`                                                     | Print status information                                                                                                         |
| `mjolnir ban <list shortcode> <user\|room\|server> <glob> [reason]`  | Adds an entity to the ban list                                                                                                   |
| `mjolnir unban <list shortcode> <user\|room\|server> <glob> [apply]` | Removes an entity from the ban list. If apply is 'true', the users matching the glob will actually be unbanned                   |
| `mjolnir redact <user ID> [room alias/ID] [limit]`                   | Redacts messages by the sender in the target room (or all rooms), up to a maximum number of events in the backlog (default 1000) |
| `mjolnir redact <event permalink>`                                   | Redacts a message by permalink                                                                                                   |
| `mjolnir kick <user ID> [room alias/ID] [reason]`                    | Kicks a user in a particular room or all protected rooms                                                                         |
| `mjolnir rules`                                                      | Lists the rules currently in use by Mjolnir                                                                                      |
| `mjolnir sync`                                                       | Force updates of all lists and re-apply rules                                                                                    |
| `mjolnir verify`                                                     | Ensures Mjolnir can moderate all your rooms                                                                                      |
| `mjolnir list create <shortcode> <alias localpart>`                  | Creates a new ban list with the given shortcode and alias                                                                        |
| `mjolnir watch <room alias/ID>`                                      | Watches a ban list                                                                                                               |
| `mjolnir unwatch <room alias/ID>`                                    | Unwatches a ban list                                                                                                             |
| `mjolnir import <room alias/ID> <list shortcode>`                    | Imports bans and ACLs into the given list                                                                                        |
| `mjolnir default <shortcode>`                                        | Sets the default list for commands                                                                                               |
| `mjolnir deactivate <user ID>`                                       | Deactivates a user ID                                                                                                            |
| `mjolnir protections`                                                | List all available protections                                                                                                   |
| `mjolnir enable <protection>`                                        | Enables a particular protection                                                                                                  |
| `mjolnir disable <protection>`                                       | Disables a particular protection                                                                                                 |
| `mjolnir rooms`                                                      | Lists all the protected rooms                                                                                                    |
| `mjolnir rooms add <room alias/ID>`                                  | Adds a protected room (may cause high server load)                                                                               |
| `mjolnir rooms remove <room alias/ID>`                               | Removes a protected room                                                                                                         |
| `mjolnir move <room alias> <room alias/ID>`                          | Moves a <room alias> to a new <room ID>                                                                                          |
| `mjolnir directory add <room alias/ID>`                              | Publishes a room in the server's room directory                                                                                  |
| `mjolnir directory remove <room alias/ID>`                           | Removes a room from the server's room directory                                                                                  |
| `mjolnir alias add <room alias> <target room alias/ID>`              | Adds <room alias> to <target room>                                                                                               |
| `mjolnir alias remove <room alias>`                                  | Deletes the room alias from whatever room it is attached to                                                                      |
| `mjolnir resolve <room alias>`                                       | Resolves a room alias to a room ID                                                                                               |
| `mjolnir shutdown room <room alias/ID> [message]`                    | Uses the bot's account to shut down a room, preventing access to the room on this server                                         |
| `mjolnir powerlevel <user ID> <power level> [room alias/ID]`         | Sets the power level of the user in the specified room (or all protected rooms)                                                  |
| `mjolnir help`                                                       | This menu                                                                                                                        |
