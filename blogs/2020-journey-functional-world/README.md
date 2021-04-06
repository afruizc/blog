# My Journey through the functional world

Despite being in a world-wide pandemic, this time at home
has been great for personal growth. I learned a bit of woodworking, painting
and cooking. I also learned about functional programming, and I wanted to
share some of my thoughts.

### A primer:  Functions and immutability

Before jumping in, the following two videos really helped me get in
the _functional groove_.

- [FP in 40 minutes](https://www.youtube.com/watch?v=0if71HOyVjY).
- [FP design patterns](https://www.youtube.com/watch?v=E8I19uA-wGY).

There are two components at the core of FP: _functions_
and _immutability_.

Mathematicians have been using functions for at least a century. A function is a
transformation, a mapping, from an input to an output set. In programming, a function
is a self contained algorithm that takes some inputs and produces some outputs.

Immutability, on the other hand, is a property of data structures. An immutable
data structure is one where modifications create new copies of the data, instead of
modifying the existing one. Working with functional code always leads to using immutable
data structures. Lists, maps, and tuples are generally append-only.

Now that we have a grasp on these two concepts, let's start.

### Haskell

In my day job I write Python. Bruised and scarred, I wanted to stay away from dynamic
languages. I narrowed down my choices to Haskell and Elm. I
was in search of a general programming language, so I chose Haskell.

Haskell is a pure functional language. In this context, purity means the output of a function
only depends on its arguments. Let's see an example.

```javascript
function rand1() {
   return Math.random();
}
```

`rand1` is not pure. It has _side effects_. Given the same inputs (none),
it generates a different output every time.
 
If instead we wrote:

```javascript
function rand2(seed) {
   let x = Math.sin(seed) * 10000;
   return [x - Math.floor(x), seed+1];
}
```

The output of `rand2` depends solely on `seed`. `rand2`
is a pure function. Check
[this](https://stackoverflow.com/questions/22268851/what-is-a-pure-function)
or [this](https://en.wikipedia.org/wiki/Pure_function) If
you want to learn more about purity.

Reading and writing from/to IO, running a web server
or opening a port are all impure operations. How does Haskell deal with this? Haskelers
use [monads](https://stackoverflow.com/a/194207).
Monads are a framework where impure operations are described
and later executed by the runtime. In this way, there is a clear
separation between pure and impure code.

[These lectures from CS192 in Penn State](https://www.cis.upenn.edu/~cis194/spring13/)
were an invaluable resource. They helped me learn about currying, partial application,
and composition. I understood, at a basic level, what a Functor, a Monad, and a Monoid were.
While working through [H-99: Ninety-Nine Haskell Problems](https://wiki.haskell.org/H-99:_Ninety-Nine_Haskell_Problems)
I eventually hit a snag. Used to the imperative world, I was taken aback by the "ceremony"
involved in getting a random number. Haskell was nice but reaching productivity would
be a massive undertaking. It was time to move on.

And I was eager for more.

### Elm

Elm was the next natural choice. It's a simpler, more concise language. I particularly
like Elm's obsession with good design. In many aspects, Elm feels right.

My very first app was
[Conway's game of life](https://github.com/green-john/elmjuegodelavida).
It helped me learn the [Elm architecture](https://guide.elm-lang.org/architecture/) and how to
deal with state efficiently.

My second project was a file viewer with VIM keys. I called it
[linesurfer](https://github.com/afruizc/linesurfer).
I spend several weeks on this project and realized text editors
are hard to write. In the process, I was getting more and more comfortable
with Elm. The more I coded, the more I saw the connection
to Haskell. Just like Haskell, Elm is pure. To solve the purity
issue, it uses [Commands and Subscriptions](https://guide.elm-lang.org/effects/).

While looking at more complex things to do with Elm,
I always ended in Javascript land. And boy, do I not like
Javascript. I'm a backend engineer, and Elm could not help me there.
In addition, there's a risky disconnect between Elm's maintainers and the
community. So I continued my search.

### F#

Ha ha!

I used to be a die hard anti-microsoft kid. I haven’t
interacted with any of their products for the past 5 years. However,
one day, after finding [Scott Wlaschin's excellent website](https://fsharpforfunandprofit.com/),
I was intrigued enough to take F# for a spin.

The ergonomics of the language coupled with its ability to *easily* interface with C# make
it an optimal choice. Unlike Elm or Haskell, F# isn't a pure  language. You are allowed,
though discouraged, to mix pure and impure code in your applications.

Applications in F# should take advantage of the
`.NET` ecosystem. `.NET` is huge, and I have no interest
in dipping my toes in those waters just yet.

So I moved on. And I found something.

### Elixir

At first, I was put off by Elixir's dynamic typing. In
my experience, types make everything better. Despite this, I still gave the 
language a try. What finally pushed me over the edge 
was [this video](https://www.youtube.com/watch?v=MZvmYaFkNJI&t=573s). In it, one of the 
creators of Phoenix, Elixir's main web framework, demonstrates how to create a
twitter clone in less than 10 minutes with zero javascript. My mind was blow.

In addition to being a functional language, Elixir runs on top of the Erlang VM.
This makes Elixir's concurrency story perfectly suited for the complex
applications of today. Between Processes, Agents, GenServers, and Supervisors, programs
in Elixir can create the wildest and most performant architectures for all kinds of applications.

As I said before, writing Python for a living has tarnished my view of dynamic languages
and yet here I was again, about to dive deep into Elixir. For now, I have convinced myself
it will not be as bad, mostly due to two reasons:

- Using [Dyalizer](https://erlang.org/doc/man/dialyzer.html), Elixir's guards, switches and Typespecs,
a disciplined team can write bug free, maintainable code.
  
- Hot-swapping is one of Erlang's main value propositions. Adding a compilation step
(i.e. types) would make this near-impossible [[1]].
  
That said, there are currently efforts to bring types to the OTP. See for example [Gleam](https://github.com/gleam-lang/gleam).

To this day, I am still writing Elixir and I'm still loving it. I love the community and 
all the people involved. I can't wait to see projects like [NX](https://github.com/elixir-nx/nx)
bring elixir to a new level.

[1]: https://elixirforum.com/t/how-hard-would-it-be-to-have-a-strong-typing-system-in-elixir/27192/13

### Closing words

I still have a long way to go, and many of my opinions here might likely change. That said,
I am excited for the future. The world of functional programming is huge, sometimes thorny,
but at the end, it pays off. I encourage you to not only dip your toes, but to jump in and
get drenched.
