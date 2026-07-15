# VIII

A tiny, fast, production-ready HTTP CLI.

[![npm version](https://img.shields.io/npm/v/viii-cli.svg)](https://www.npmjs.com/package/viii-cli)
[![npm downloads](https://img.shields.io/npm/dm/viii-cli.svg)](https://www.npmjs.com/package/viii-cli)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

VIII is a tiny, fast, production-ready HTTP CLI inspired by curl and HTTPie, but with a much simpler experience. It is designed for developers who want to interact with APIs quickly without the verbosity of traditional tools.

---

### Why VIII

*   **Ultra-fast execution** with zero cold start.
*   **Intelligent defaults** that save dozens of keystrokes.
*   **Persistent base URL** management for rapid API testing.
*   **Zero-config** philosophy — it just works out of the box.

---

### Features

*   Automatic Content-Type detection
*   Base URL management
*   Relative URL support
*   Absolute URL support
*   Custom headers
*   Zero configuration
*   Lightweight and fast

---

### Installation

```bash
npm install -g viii-cli
```

---

### Quick Start

```bash
# Set a base URL once
viii base https://api.example.com

# Request the configured base URL
viii get /

# Send a GET request to https://api.example.com/users
viii get /users

# Send POST JSON (auto-detects application/json)
viii post /users '{"name": "Sree"}'

# Send PUT text (auto-detects text/plain)
viii put /status "active"

# Use an absolute URL (bypasses base URL)
viii get https://google.com

# Send custom headers
viii get /profile X-Custom-Header=Value
```

---

### Automatic Intelligence

You never need to manually think about "Content-Type". VIII analyzes your payload and injects the correct headers automatically.

*   **JSON** automatically becomes `application/json`:
    `viii post /data '{"id": 1}'`
*   **Plain text** automatically becomes `text/plain`:
    `viii put /log "system ready"`

---

### Base URL Management

Once a base URL is saved, you can use relative paths everywhere. VIII remembers your target environment so you can focus on the endpoints.

```bash
# Set the base URL
viii base https://api.staging.com

# View current base URL
viii base
```

---

### Examples

**GET Request**
```bash
viii get /posts
```

**POST JSON**
```bash
viii post /posts '{"title": "New Post", "body": "Content"}'
```

**PUT Text**
```bash
viii put /posts/1 "Updated content"
```

**DELETE Request**
```bash
viii delete /posts/1
```

**Authorization Header**
```bash
viii get /admin Authorization="Bearer token123"
```

**Localhost Development**
```bash
viii get localhost:3000/status
```

**External Website**
```bash
viii get https://api.github.com
```

---

### Commands

| Command | Description |
| :--- | :--- |
| `base` | Set or view the persistent base URL |
| `get` | Send an HTTP GET request |
| `post` | Send an HTTP POST request |
| `put` | Send an HTTP PUT request |
| `patch` | Send an HTTP PATCH request |
| `delete` | Send an HTTP DELETE request |

---

### License

MIT License © Sree Gopal Saha
