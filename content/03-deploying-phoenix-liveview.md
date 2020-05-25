---
title: Deploying Phoenix Liveview with HTTPS
date: 2020-05-25
slug: deploying-phoenix-liveview
---

This is the steps I took to deploy a [Phoenix] app[1] that uses
[LiveView] to achieve real time communication.

[Phoenix]: https://hexdocs.pm/phoenix/overview.html
[LiveView]: https://hexdocs.pm/phoenix_live_view/Phoenix.LiveView.html

**Note:** The app is running on at https://ruizandr.es/hateball.

### Deploying

1. Change `config/prod.exs` to add the `:path` option:

```elixir
config :hateball, HateballWeb.Endpoint,
  url: [host: "ruizandr.es", path: "/hateball", port: 80],
  cache_static_manifest: "priv/static/cache_manifest.json"
```

2. Go to `app.js`, and change the `LiveSocket` path:

```javascript
const wsUrl = process.env.NODE_ENV === "development" 
                            ? "/live" : "/hateball/live";
let liveSocket = new LiveSocket(wsUrl, Socket, {/*...*/});
```

3. Write your build script:

(ecto and other mix tasks are included here)

```bash
mix deps.get --only prod
mix compile
npm install --prefix ./assets
npm run deploy --prefix ./assets
mix phx.digest
```

4. Copy your code to the remote server:

```bash
rsync -av ./ mysrv:/opt/web/myapp \
    --exclude={'_build/','deps/','assets/node_modules/','priv/static/'}
```

5. (_server_) set `SECRET_KEY_BASE` and `DATABASE_URL` and run the build:

```bash
MIX_ENV=prod build.sh
```

6. (_server_) Run the web server: 

```bash
PORT=4001 MIX_ENV=prod mix phx.server
```

### Securing connections with [Caddy]

[Caddy]: https://caddyserver.com/

```
ruizandr.es

route /hateball/* {
    uri strip_prefix /hateball
    reverse_proxy localhost:4001
}
```

### References

- https://en.wikipedia.org/wiki/Cards_Against_Humanity
- https://hexdocs.pm/phoenix/deployment.html
- https://github.com/afruizc/hateball
