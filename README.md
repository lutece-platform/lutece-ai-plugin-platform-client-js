# Plugin Platform Client JS

`<lutece-chat>` — chat widget for the Lutece AI platform. SSE streaming, sanitized Markdown, source citations and feedback.

## Usage

Declarative (HTML) — primitive options are kebab-case attributes:

```html
<script type="module" src="./js/lutecechat/dist/lutece-chat-bundle.js"></script>
<lutece-chat bot-id="1" dark-mode fullscreen></lutece-chat>
```

Programmatic (factory) — same options as a config object:

```js
import { createLuteceChat } from './js/lutecechat/dist/lutece-chat-bundle.js';

const chat = createLuteceChat({ container: '#chat-host', botId: 1 });
chat.remove(); // full teardown (aborts fetch/stream, removes listeners)
```

## Options

| Option | Attribute | Type | Default | Description |
|--------|-----------|------|---------|-------------|
| `container` | — | string \| Element | — | Mount target; floating button if omitted (the element needs a defined height) |
| `botId` | `bot-id` | string \| number | — | Bot opened on connect; **reactive** (hot-swap without recreating) |
| `darkMode` | `dark-mode` | boolean | `false` | Start in dark mode; persisted per instance |
| `fullscreen` | `fullscreen` | boolean | `false` | Fullscreen layout |
| `closable` | `closable` | boolean | `true` | Floating panel closable (shows the button); `false` pins it open |
| `floating` | `floating` | boolean | auto | Force floating mode (implicit when no `container`) |
| `showBotList` | `show-bot-list` | boolean | `true` | Bot gallery |
| `showThemeToggle` | `show-theme-toggle` | boolean | `true` | Light/dark toggle |
| `storageKey` | `storage-key` | string | — | localStorage namespace (isolate persisted state across instances) |
| `endpoints` | _property_ | object | admin base | `{ origin?, base?, firstName? }` — REST base path (session/cookie auth); **reactive** (reassign to switch backend) |
| `sidebar` | _property_ | object | — | `{ open, lightLogo, darkLogo }` (set before mount) |
| `customCSS` | _property_ | string | — | Per-instance CSS injected after the base sheet; **reactive** |

## Display modes

Each mode is just a combination of the options above:

| Mode | Options |
|------|---------|
| Floating button (default) | `{}` |
| Fullscreen + button | `{ fullscreen: true }` |
| Permanent fullscreen | `{ fullscreen: true, closable: false }` |
| Embedded in the page | `{ container: '#id' }` |

## Events

`CustomEvent`, bubbling + composed:

| Event | Fired when | `detail` |
|-------|-----------|----------|
| `lutece-chat:message-sent` | the user sends a message | `{ botId, conversationUuid, text }` |
| `lutece-chat:response-complete` | the stream completes | `{ botId, conversationUuid }` |
| `lutece-chat:error` | an SSE/HTTP error occurs | `{ code, message }` |

Because they bubble and are `composed`, listen on the element itself or any ancestor (e.g. `document`):

```js
const chat = document.querySelector('lutece-chat');

chat.addEventListener('lutece-chat:response-complete', (e) => {
  console.log('answered in', e.detail.conversationUuid);
});

// works on an ancestor too (event crosses the shadow boundary and bubbles up)
document.addEventListener('lutece-chat:error', (e) => {
  showToast(`${e.detail.code}: ${e.detail.message}`);
});
```

## Full example

Embedded widget with object options, event wiring, and runtime mutation:

```html
<div id="chat-host" style="height: 600px"></div>

<script type="module">
  import { createLuteceChat } from './js/lutecechat/dist/lutece-chat-bundle.js';

  const chat = createLuteceChat({
    container: '#chat-host',
    botId: 1,
    darkMode: true,
    showBotList: true,                       // primitive options (also work as attributes)
    storageKey: 'support-widget',            // isolate persisted state from other instances
    endpoints: {                             // object option → set here (or via chat.endpoints later)
      base: 'rest/platform/agent/admin',     // REST base path (session/cookie auth)
      origin: 'https://ai.example.fr'   // optional; same-origin if omitted
    },
    sidebar: { open: false, lightLogo: '/logo.svg', darkLogo: '/logo-dark.svg' },
    customCSS: ':host { --chat-accent: #6f2dbd; }'
  });

  // React to the widget
  chat.addEventListener('lutece-chat:response-complete', (e) => {
    analytics.track('answer', { conversation: e.detail.conversationUuid });
  });
  chat.addEventListener('lutece-chat:error', (e) => console.warn(e.detail.code, e.detail.message));

  // Mutate at runtime (no recreation)
  chat.botId = 2;                            // hot-swap the bot
  chat.darkMode = false;                     // toggle theme
  chat.endpoints = { base: 'rest/platform/agent/api' }; // switch backend → API client rebuilt

  // Teardown when done (aborts the stream, removes listeners)
  // chat.remove();
</script>
```
