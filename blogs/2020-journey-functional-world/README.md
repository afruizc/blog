# My Journey through the functional world

Despite being lockdown and in a world wide pandemic, this time at home
has been great for personal growth. I made some woodworking, painting
and learned to cook a few new dishes. I also learned about functional
programming, and I wanted to share some of my thoughts.

Before jumping in, I recomment watching either of the following videos
in order to get in the _functional groove_.

- [FP in 40 minutes](https://www.youtube.com/watch?v=0if71HOyVjY).
- [FP design patterns](https://www.youtube.com/watch?v=E8I19uA-wGY).

### Functions and immutability

There are two components at the core of FP: _functions_
and _immutability_.

Mathematicians have been using functions for at least a century. In the book
[Principia Mathematica](https://en.wikipedia.org/wiki/Principia_Mathematica),
Whitehead and Russel provide the (in)famous
proof of `1 + 1 = 2`.

![mathproof](proof.png)

It took the authors 379 pages to build a solid foundation.
At the core of this foundation are functions.

A function is a transformation, a mapping, from an input to an output set.

Immutability, on the other hand, is a property of data structures. An immutable
data structure is one where modifications create new copies of the data, instead of
modifying the existing one.

As mentioned earlier, working with functional code always leads to using immutable
data structures. Lists, maps, and tuples are generally append-only.

### Once upon a time in LISP-land

My journey started several years back in the universe of LISP. I installed racket,
went through some tutorials and got a basic sense for what it was to
program in a functional language. I learned about the power and generality of lists
and recursion. As it turned out, I got distracted with life and
moved on to other things.

Fast forward to March 2020, the world is fucked, and, once again I am looking for something
fun to do. So I go back to FP.

### Haskell

In my day job I write Python. Bruised and scarred, I wanted to stay away from dynamic
languages. I narrowed down my choices to Haskell and Elm. I like writing frontend, but I
was in search of a general programming language, so I chose Haskell.

Haskell is a pure functional language. In this context, purity means the output of a function
only depends on its arguments. Let's see an example.

```javascript
function rand1() {
   return Math.random();
}
```

`rand1` is not pure. We say this function has side effects. Given the same inputs (none),
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
or opening a port are all impure operations. How does Haskell deal with this?

Haskelers use [monads](https://stackoverflow.com/a/194207).
Monads are a framework where impure operations are described
and later executed by the runtime. In this way, there is a clear
separation between pure and impure code.

While working through [H-99: Ninety-Nine Haskell Problems](https://wiki.haskell.org/H-99:_Ninety-Nine_Haskell_Problems)
I eventually hit a snag. Used to the imperative world,
I was taken aback by the "ceremony" involved
in getting a random number. Haskell was nice but reaching
productivity would be a massive undertaking. It
was time to move on.

[These lectures from CS192 in Penn State](https://www.cis.upenn.edu/~cis194/spring13/)
were an invaluable resource in helping me do so. Haskell had introduced me to
a new, exciting world. I'd learned about currying, partial
application, and composition. I understood, at a basic
level, what a Functor, a Monad, and a Monoid were.

And I was eager for more.

### Elm

Elm was the next natural choice. It's a simpler, more concise language. I particularly
like Elm's obsession with good design. In many aspects, Elm feels right.

My very first app was
[Conway's game of life](https://github.com/green-john/elmjuegodelavida).
It helped me learn the "Elm architecture" and how to deal with
state efficiently.

My second project was a file viewer with VIM keys. I called it
[linesurfer](https://github.com/afruizc/linesurfer).
I spend several weeks on this project and realized text editors
are hard to write. In the process, I was getting more and more comfortable
with Elm. The more I coded, the more I saw the connection
to Haskell. Just like Haskell, Elm is pure. To solve the purity
issue, it uses Commands and Subscriptions.

While looking at more complex things to do with Elm,
I always ended in Javascript land. And boy, do I not like
Javascript. That's half the reason I write backend for
a living. Frontend has always been a means to an end.
My true passion, where I thrive, is working behind
the scenes. Elm could not help me there. So I continued
my search.

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

Oh and something I found!

What finally pushed me over the edge to learn Elixir
was [this video](https://www.youtube.com/watch?v=MZvmYaFkNJI&t=573s) of
a short introduction to
[Phoenix LiveView](https://hexdocs.pm/phoenix_live_view/Phoenix.LiveView.html).

I signed up
for the [LiveView course by The Pragmatic Studio](https://pragmaticstudio.com/my_order/Y9DEB-QIT7A-6P8NZ).
It's free and it's a fantastic introduction. I then
did the free lectures on their [Elixir course](https://pragmaticstudio.com/courses/elixir).

The abstractions in Erlang/OTP are just great, and once you get used to
working with them, it's hard to go back.

Elixir is a functional non-pure programming language. It evolves the concept of an
object on OO to a process, what some people call an Actor. A process is essentially
a thread of execution with its own data. The abstraction of Processes turns out to
facilitate complex execution in multi-core multi-tenant environments. Using processes,
Elixir then builds many other really useful abstractions that come to form what is
known as an actor programming model. Through the use of Agents,  GenServers, and Supervisors,
programs that take advantage at  the highest level of the parallelism present in the system.

As I said before, writing python for a living has tarnished my view of dynamic languages
and yet here I was again, about to pick Elixir. I decided I should check my assumptions
and do more research. In this process, I learned something about design decisions that
went behind Erlang. One of Erlang's main value propositions was the ability to deal with
failures by hot-swapping code. That is, by replacing buggy in production without
interrupting the system.

-- Finish this
