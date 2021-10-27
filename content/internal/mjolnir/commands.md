---
title: "Commands"
description: "The documentation about the moderation bot mjölnir"
lead: "The documentation about the moderation bot mjölnir"
date: 2021-10-8T20:17:00+00:00
lastmod: 2021-10-8T20:17:00+00:00
draft: false
images: []
menu:
  internal:
    parent: "mjolnir"
weight: 210
toc: true
---

{{< danger >}}
Keep in mind, some of the commands listed below can do a massive amount of
damage with just a single command!<br />
Do not run any command, if you don't know, what it does. Make sure to read
this documentation thoroughly before using the bot.
{{< /danger >}}

## Typical Commands

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

## List Shortcodes

| List Shortcode | Description                            |
| -------------- | -------------------------------------- |
| `coc`          | Describes the Code of Conduct ban list |

## Reasons

Reasons, which will automatically redact the users messages:

- `spam`
- `advertising`
- `advertisement`
- `ad`

### Globbing

{{< danger headline="Globbing Warning" >}}
Globbing means dangerous business. Be aware of the effects this might have
beforehand!<br />
Keep in mind, that this not only effects users, which are currently a part of
the community. It will effect users, who will join the community
in the future too.
{{< /danger >}}

Globbing describes an ellipsis, or wildcard placeholder, which enables a
feature of Mjölnir to moderate every user who fits that pattern.

For example, you want to ban every user whos user ID starts with `spammer`
and is registered on the `matrix.org` homeserver:

```text
mjolnir ban coc @spam*:matrix.org spam --force`
```

Now, every user who fits that pattern will be banned. For example
`@spam123:matrix.org`, `@spamabc:matrix.org` or `@spam:matrix.org`.
The `--force` argument is needed to tell Mjölnir, that you really know, what
you are about to do.

## All Commands

{{< info >}}
Some of the following commands cannot be used with this instance of Mjölnir
because it does not use a homeserver administrator account anymore.
{{< /info >}}

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
