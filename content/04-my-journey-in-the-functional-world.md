---
title: A journey in the functional world
date: 2020-05-31
slug: journey-functional-world
---

{{< figure src="/blog/img/functional-journey.png" title="" >}}

For the first in my life I made pasta
<a href="#pasta-footnote" id="pasta-footnote-ref">[1]</a>.
I also tried out functional programming. This document
relates my journey.

FP is a proven technique 
<a href="#proof-fp-footnote" id="proof-fp-footnote-ref">[2]</a>, 
in which functions are the unit of computation, and state
is immutable. 

### Functions

Mathematicians have been using functions
for at least a century. In the book
[Principia Mathematica](https://en.wikipedia.org/wiki/Principia_Mathematica),
Whitehead and Russel [provide the (in)famous 
proof of 1 + 1 = 2](https://blog.plover.com/math/PM.html).
Granted, most of their methods are obsolete today, but it
still took them 379 pages. One of the basic constructs for 
this proof was the function.

In mathematics, a function is relation that associates
one element of a set to *exactly* one element of another
set. A function is an expression
<a href="#decl-exp-footnote" id="decl-exp-footnote-ref">[3]</a>.

### Once upon a time in LISP-land

My journey started last year in the universe of LISP.
I installed racket, went through some tutorials and got a
basic sense for what it was to program in a functional
language. I got distracted with life and eventually put it on
pause.

Fast forward to March, and I am looking once again into the
functional abyss.

### Haskell

In my day job I write Python. Bruised and scarred, I wanted to
stay away from dynamic languages. Haskell has [arguably a
very good](https://softwareengineering.stackexchange.com/questions/279316/what-exactly-makes-the-haskell-type-system-so-revered-vs-say-java)
typesystem and I was eager to try. I was excited for 
this new, exciting world.

Haskell is what is known as a pure functional language.
Purity means the output of a function only depends on
its arguments. Let's see an example.

```javascript
function rand1() {
    return Math.random();
}
```

`rand1` is not pure. Given the same inputs
(none), it generates a different output every time.
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
you want to learn more about purity and side effects.

Reading and writing from/to IO, running a web server
or opening a port are all inherently impure operations.
How does Haskell deal with this?

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
were an invaluable Haskell resource. They helped me learn about
currying, partial application and composition. I understood, at
a basic level, what a Functor, a Monad and a Monoid were.  

### Elm

Elm was a natural next step. It's a simpler more
concise language. I particularly like Elm's obsession
with good design. In many aspects, Elm feels right.

My very first app was 
[Conway's game of life](https://github.com/afruizc/elmjuegodelavida).
It helped me learn the "Elm architecture" and how to deal with
state efficiently. 

My second project was a file viewer with VIM keys. I called it
[linesurfer](https://github.com/afruizc/linesurfer).
I spend several weeks on this project and realized text editors
are hard to write. In the process, I was getting more and more
comfortable.

Elm is a pure functional language. Unlike haskell, it uses
[Commands and Subscriptions](https://guide.elm-lang.org/effects/) to
solve the purity issue.

My next project was a simple [matching game](https://ruizandr.es/matching_game).
My girlfriend teaches English to 4. Once the Pandemic hit,
this app was part of our efforts to keep her kids "in school".

While looking at more complex things to do with Elm,
I always ended in Javascript land. And boy, do I not like
Javascript. That's half the reason I write backend for
a living. Frontend has always been a means to an end.
My true passion, where I thrive, is behind the scenes.
Elm could not help me there. So I continued my search.

### F#

Ha ha!

I used to be a die hard anti-microsoft kid. I haven’t
interacted with any of their products for the past 5 years. However,
one day, after finding Scott Wlaschin's [excellent website](https://fsharpforfunandprofit.com/)
and [videos](https://www.youtube.com/watch?v=0if71HOyVjY)
I was intrigued enough to take F# for a spin.

The ergonomics of the language and ability to *easily*
interface with C#, make it an optimal choice. Unlike Elm
or Haskell, F# isn't a pure language. You are allowed,
though discouraged from mixing pure and impure code in your
applications.

Applications in F# should take advantage of the 
`.NET` ecosystem. `.NET` is huge, and I have no interest
in dipping my toes in those waters just yet.

So I moved on. And I found something. 

### Elixir

Elixir is a functional, dynamic, non pure programming language
based on [Erlang and OTP](http://erlang.org/doc/). 
In Elixir, everything is a process. Elixir processes are
lightweight and isolated units of computation. Think
[Java threads](https://docs.oracle.com/javase/7/docs/api/java/lang/Thread.html)
or [Goroutines](https://tour.golang.org/concurrency/1). Processes
communicate by passing messages around. In practice, however, it's 
uncommon to work processes directly. Instead, programmers
interact with [Agents](https://hexdocs.pm/elixir/Agent.html),
[GenServers](https://hexdocs.pm/elixir/GenServer.html) and
[Supervisors](https://hexdocs.pm/elixir/Supervisor.html).

I first signed up for the
[Phoenix LiveView course by Pragmatic Studio](https://pragmaticstudio.com/courses/phoenix-liveview).
It is a fantastic introduction to [Phoenix](https://www.phoenixframework.org/)
[LiveView](https://hexdocs.pm/phoenix_live_view/Phoenix.LiveView.html) and, best of all,
it's free. When I finished all the lectures, I wanted more.
[Pragmatic Studio's Elixir course](https://pragmaticstudio.com/courses/elixir).
was next. When I finished, I had enough ammo to start my first project.

I wrote a [clone](https://github.com/afruizc/hateball)
of the popular game [cards against humanity](https://www.cardsagainsthumanity.com/).
I call it [hateball](https://theoffice.fandom.com/wiki/Hate_Ball).
Elixir and the OTP made it considerably easier
to deal with real time communication.

In exploring typed alternatives for Elixir I came across
[gleam](https://github.com/gleam-lang/gleam) and
[alpaca](https://github.com/alpaca-lang/alpaca). Sadly, these are
not production ready yet.

Today, I love using elixir, and I'm trying to use it more and more.

## Lessons Learned

- Giving up is okay as long as your goals are clear. Enjoy the
journey as much as the destination.

- When faced with a new subject, beware of Analysis Paralysis.
It's much easier to propose and plan
than to execute, so just choose something and stick with
it until you no longer need to.

- OO and FP are not mutually exclusive. [Rather, they
complement each other, and make you a better programmer](https://www.youtube.com/watch?v=Pg3UeB-5FdA).

### Footnotes

<div class="footer">
<p id="pasta-footnote">
1. For 100ml of water use 1 egg. Beat the egg. Mix.
<a href="#pasta-footnote-ref">&#8617;</a>
</p>
<p id="proof-fp-footnote">
    2. See <a href="https://www.whatsapp.com/join/?dept=infrastructure&id=a1K2K000007sfhTUAQ"
            _target="blank">this job posting</a> or <a href="https://serokell.io/blog/haskell-in-production-centralapp">this case study</a>.
    <a href="#proof-fp-footnote-ref">&#8617;</a>
</p>
<p id="decl-exp-footnote">
    3. see <a href="https://stackoverflow.com/questions/23277/what-is-the-difference-between-procedural-programming-and-functional-programming/13600858#13600858">this</a>
    for a discussions between statements and expressions. <a href="#decl-exp-footnote-ref">&#8617;</a>
</p>
</div>
