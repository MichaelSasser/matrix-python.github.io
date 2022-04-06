---
title: "Examples"
description: "The documentation about the moderation bot mjölnir"
lead: "The documentation about the moderation bot mjölnir"
date: 2021-10-8T20:17:00+00:00
lastmod: 2021-10-8T20:17:00+00:00
draft: false
images: []
menu:
  internal:
    parent: "mjolnir"
weight: 220
toc: true
---

{{< danger >}} Keep in mind, some commands shown below can do a massive amount
of damage with just a single command!<br /> Do not run any command, if you
don't know what it does. Make sure to read this documentation thoroughly before
using the bot. {{< /danger >}}

## Ban a user

To ban a user, use the following command.

```text
mjolnir ban <list shortcode> <user> <glob> [reason]
```

### Example

```text
mjolnir ban coc @user:example.tld spam
```

1. Add the user to the Code of Conduct ban list
   {{< identifier "#python-coc:matrix.org" >}}, which
   is a public room.<br /> For more information, see [List Shortcodes
   →]({{< relref "commands" >}}#list-shortcodes)
2. Ban the user with the user identifier `@user:example.tld` in all community
   rooms and Spaces, if the user is in that room or Space. Use `spam` as reason
   which gets displayed to the banned user
3. Because of that specific `reason` (`spam`), redact the latest events the
   user created.<br /> For more information, see [Reason
   →]({{< relref "commands" >}}#reason)

## Redact Events (Delete Messages)

To redact the user created events, use the following command.

```text
mjolnir redact <user ID> [room alias/ID] [limit]
```

### Example: Redact "Everything"

{{< note headline="This might redact everything a user wrote" >}} 1000 events
are often more than a user ever produced. Always use a limit, if you want to
avoid wiping the whole history of that user.<br /><br /> If the user just
joined and spammed, this is what you want. {{< /note >}}

```text
mjolnir redact @user:example.tld

or

mjolnir redact <event permalink>
```

1. Redact up to 1000 (default, per room) events in all rooms and Spaces of the
   community.

### Example: Redact "Everything", but in a single room

```text
mjolnir redact @user:example.tld #roomname:domain.tld
```

1. Redact up to 1000 (default) events in the room `#roomname:domain.tld`.

### Example: Redact 10 events in a single room

```text
mjolnir redact @user:example.tld #roomname:domain.tld 10
```

1. Redact up to 10 events in the room `#roomname:domain.tld`.

### Example: Redact a specific event

```text
mjolnir redact $OcnOnyz7jOk_AyZFuKc_650UPsdJfLmYqr9CZNv835w
```

1. Redact that specific event.

## Kick a user

To kick a user, use the following command.

```text
mjolnir kick <user ID> [room alias/ID] [reason]
```

### Example: Kick from all rooms

```text
mjolnir kick @user:example.tld spam
```

1. Kick the user with the user identifier `@user:example.tld` in all community
   rooms and Spaces, if the user is in that room or Space. Use `spam` as reason
   which gets displayed to the kicked user
2. Because of that specific `reason` (`spam`), redact the latest events the
   user created.<br /> For more information, see [Reason
   →]({{< relref "commands" >}}#reason)

### Example: Kick from a single room

```text
mjolnir kick @user:example.tld #room@element.tld foo
```

1. Kick the user with the user identifier `@user:example.tld` from
   `#room@element.tld`, if the user is in that room or Space. Use `foo` as
   reason, which will be displayed to the user.

{{< todo >}}

<!-- TODO: unban, protections -->
