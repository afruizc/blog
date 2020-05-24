---
title: "Caddy hugo and digital ocean"
date: 2018-10-07
slug: "caddy-hugo-digitalocean"
---

This is a little writeup on how this blog works. It's powered by
[Hugo], [Caddy] and runs on [DigitalOcean].

[Hugo]: https://gohugo.io/
[Caddy]: https://caddyserver.com/
[DigitalOcean]: https://www.digitalocean.com/

### Choosing a droplet.
I decided to go with a fedora system, but you can pick at your own discretion.

After creating your system, make sure you follow
[the initial setup](https://www.digitalocean.com/community/tutorials/initial-setup-of-a-fedora-22-server).

### Setting up go
We need golang 1.13 or later installed. Download the binaries:

```bash
wget https://dl.google.com/go/go1.11.linux-amd64.tar.gz
tar -C /usr/local -xzf go1.11.linux-amd64.tar.gz
```

This should install golang into `/usr/local/go`. Then update your env variables:
`~/.bashrc`.

```bash
export GOPATH=/home/user/code/go
export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin
```

### Installing Caddy

After go has been installed, the next step is to set up Caddy. Go is
Caddy's primary language. Caddy excels at being super user friendly and
easy to configure.

First fetch the code:

```bash
go get github.com/mholt/caddy
```

### Caddy setup

My setup is simple: each subfolder in the directory where the caddyfile
lives corresponds to a site. Some of these sites are static, some
have a server behind them.

Here's my current Caddyfile.

```caddy
ruizandr.es

encode zstd gzip
file_server /matching_game/*
file_server /blog/*
file_server /*

route /hateball/* {
    uri strip_prefix /hateball
    reverse_proxy localhost:4001
}
```

One last but important detail. Caddy gets the ssl certificates by
querying your machine through the assigned dns name during the
setup process. What this means in practice is that your DNS must
already be pointing to your machine before being able to use
HTTPS.

### Hugo

Hugo can be a whole post in an out of itself. In short, hugo
helps you organize and publish documents. The simplicity
that Hugo achieve is it's main appeal.

A central idea to Hugo the fact that your directory structure
(i.e. your files and folders) mirrors the way in which things should
be published.

With this idea, then we just design general layouts and run our
content through said layouts in order to produce final
products.
