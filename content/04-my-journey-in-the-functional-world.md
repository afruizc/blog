---
title: My journey through the functional world
date: 2020-05-25
slug: journey-functional-world
---

This quarantine has been a great opportunity to educate myself.
Once shit hit the fan, I decided it was time.

I chose functional programming because I am fascinated by the
idea getting a grip on the state of your programs. Before I
dive in, the following two videos really helped me get in
the _functional groove_.

- https://www.youtube.com/watch?v=0if71HOyVjY
- https://www.youtube.com/watch?v=E8I19uA-wGY


## Basic concepts

There are two basic components of functional programming:
functions and immutability.

### Functions

In the book [Principia Mathematica], the authors prove that 
`1 + 1 = 2` on page 378 as it's illustrated in the following
picture.

![example](/blog/img/michener-card.gif)

It took the authors 378 pages of complex abstractions to
prove something as seemingly simple as `1 + 1 = 2`. It makes
me think about my manager saying: _“it’s just a new character,
how hard can it be”_.

One of the fundamental constructs used to get to this proof
was the function. The fact that the function was so well suited
for Russel & Other[TODO: other] is indicative of it's potential
as a unit used to organize complex structures.

Simply put, a function is a transformation. It's a way of turning
inputs into outputs. We've all seen functions before.
Some languages are strict when it comes to their definition
of functions. 

### Immutability

State is inevitable. So our best hope is to make it more
manageable. One way is to ensure all state that flows
through our code is immutable. In practice
this means all of your lists, dicts/maps and tuples will
be immutable. 

Operations like append and delete always create a new copy
of the original data structure.

With these restrictions in mind, functional programming
languages optimize their usage of data structures to
account for their immutability.

## The journey

My journey started about a year ago in the universe of LISP.
I installed racket, went through some tutorials and got a
basic sense for what it was to program in a purely functional
language. I got distracted with life and eventually stopped.

Far forward to March, and I am looking once again at all
my options.

### Haskell

In my day job I write python. Bruised and scarred from the
lack of types I wanted to stay away from dynamic languages.
After some research, I narrowed down my choices to Haskell
and Elm. At the end I chose Haskell. I could go into reasons
why, but I don't think these reasons matter. What matters is
picking something and following through.

Haskell is what is known as a pure functional language.
It means that the output of any function only depends
on its arguments. This design choice is hugely influential
as it dictates how many things are done in Haskell.

The following way to generate a random number is not pure:

```javascript
function rand() {
    return Math.random();
}
```

If instead we did something like

```javascript
function rand(seed) {
    let x = Math.sin(seed) * 10000;
    return [x - Math.floor(x), seed+1];
}
```

then we have a pure function.

Similarly, reading/writing from/to IO, running a web server
or interacting with the OS in any other way are
inherently impure operations. 

The way Haskell deal with these impurities is by using a
framework where all of these operations are first described
and then passed to the Haskell runtime to be executed. In this way,
Haskell achieves its purity. Learn more about purity and
side effects [here](https://en.wikipedia.org/wiki/Pure_function) or
[here](https://stackoverflow.com/questions/22268851/what-is-a-pure-function).

I started with
[H-99: Ninety-Nine Haskell Problems](https://wiki.haskell.org/H-99:_Ninety-Nine_Haskell_Problems)
and reading [LYAH](http://learnyouahaskell.com). I also 
went through some [lectures from CS192 in Penn State](https://www.cis.upenn.edu/~cis194/spring13/).

I started reconsidering my choices when I needed to generate some
random numbers in Haskell. Used to the imperative world, I was
confused by all the "ceremony" that needed to happen
for me to get a random number. I decided Haskell was nice
but getting to a point where I would be proficient would
be a big undertaking. Even though I had really enjoyed my
time, it was time for me to look somewhere else.

My short brush with Haskell had helped me start to internalize
some fundamental concepts. I'd learned about currying,
partial application and composition. I understood, at a basic
level, what a Functor, a Monad and a Monoid were.  

### Elm

As ELM was a runner up, it was a natural choice. Elm struck me
as a much simpler yet elegantly designed language. I was very
pleseantly surprised by `elm/parser` and `elm/browser`.
In many ways it felt like Elm was a Haskell optimized for
frontend applications. And by getting those details right, Elm
seemed like a fantasy to me. I became enamoured by the language. 

The APIs were concise. My very first app was 
[Conway's game of life](https://github.com/afruizc/elmjuegodelavida).
It helped me learn the "ELM architecture" and how to deal with
state efficiently. The more ELM I wrote, the more I understood
how Haskell had inspired it in many ways.

Through Commands and Subscriptions it manages to get a grip an all
impure computations and manages to keep all computations pure.
  
My second project was a file viewer for the browser that used VIM
keys. I called it [linesurfer](https://github.com/afruizc/linesurfer).
I spend several weeks on this project and realized text editors
are hard to write. One thing that made me change my entire
design was the fact that tabs are one char, but when
displayed take 4 chars.

My next project was a simple [matching game](https://ruizandr.es/matching_game).
My girlfriend is a teacher and she needed a way to teach colors to her 4 year
olds. We worked together and made a game where animals and
colors are paired. Super fun experience working with her.

After about 1 month of ELM, I started to see some things I
didn't particularly like. There's a very vocal minority in the Elm
community likes to complain about the way Evan (Elm's creator) does
things. The way I see it, this is some nice juicy drama, and as
such it needs people to take sides or at least have an opinion.
Here's my opinion. [NoRedInk](https://www.noredink.com/) is a
company where many of the Elm core team works. They pay Evan
and some other really smart people to maintain Elm, and as
a consecuence of this, Elm is optimized to be used in NoRedInk.
This makes is so that it the Elm communitiy the NoRedInk way
is normally the correct way. This is all good and fine because
Elm has been open about allowing developers to have workarounds.
Then came Elm 0.19, and took away the capabilities of interacting
with bare javascript. The problem was, the core team did not
have this restrictions and were still able to interop with javascript.
The Elm team told the world, “Do as we say, not as we do”, and the
world got pissed. 

As I said before, I didn’t particularly like this philosophy, but
as one can attest, most of our parents adhere to the same philosophy.
Who can really blame them (both our parents and the Elm team). I
hope that in the future, people work things out, Elm isn't forked,
and we all live happy and fruitful lives. 

My love for elm has never died down. When I evaluate technologies
for frontend, I'm always keeping Elm in the radar because it's so
nice to work with.

While the ELM fantasy lasted, I was very happy. But one day I remembered.
I was a backend engineer. Frontend was just a means to a goal,
but my true passion, where I am good at, is working behind the scenes.
Elm could not help me there. So I continued my search.

### F#

Hahaha!

When I read this I laugh at myself. I used to be a
die hard anti microsoft kid. I haven’t really interacted
with any Microsoft products (except their keyboards)
for a good 5 years. However, and thanks mostly to
Scott Wlaschin and his [website](https://fsharpforfunandprofit.com/)
I decided to try F sharp. I really liked the
simplicity of the language and the interop with C#.
C# along with Java have probably the most complete
library ecosystem out there, and having access
to that was invaluable. 

F#, unlike Elm and Haskell wasn’t pure, though, It was still
typed and functional. What set it apart was its succinctness
(type inference was glorious) and ergonomics. I wrote a game
of life again, and then I started writing some code to
integrate with REST APIs.

I didn’t really have a good reason to stop with F#.
Something discouraging was the fact that Microsoft would rather
invest in Visual Basic than in F#. I was okay with C# being
number 1, and if at any point Microsoft decides to focus
more on F#, I might give it a try once again.

### Elixir

I’ve got to admit, the only reason I landed in elixir was
because of this video: https://www.youtube.com/watch?v=MZvmYaFkNJI&t=573s.
It demos [Phoenix LiveView](https://hexdocs.pm/phoenix_live_view/Phoenix.LiveView.html),
a technology used to builds interactive web applications without the
need for Javascript.

Elixir introduced me to a new world of possibilities. I can’t
believe I didn’t know about Erlang and OTP. I had always
thought we programmers needed a language optimized for
multiprocessing units. And Erlang does exactly that. 

One thing I wasn’t too sure about was the dynamic nature
of the language. As I said before, writing python for
a living has tarnished my view of dynamic languages.
In exploring my assumptions deeper, I learned something
interesting. Erlang (which Elixir is based off of) is a
dynamic langauge. When
[Joe Armstrong](https://en.wikipedia.org/wiki/Joe_Armstrong_(programmer)) and
his team were faced with the choice between a dynamic and a compiled
language, he realized that one of the main reasons people would
use erlang would be for the flexibility dealing with
failures. This meant that the ability to hot swap code was
extremely important. If the code was to be typed, hotswapping
would be impossible, as a previous compile step would be
necessary, therefore Mr Armstrong decided Erlang needed
to be a dynamic language. 

And you know what, the more I work with Elixir, the more I like it
and understand the choices. Elixir is a functional non pure
programming language. It evolves the concept of an object
on oo to a process. A process is essentially a thread of
execution with it’s own information. Processes turn out to
be a wonderful abstraction as they map wonderfully to many
things that go on in multiparallel complex computing
environments. Using processes Elixir then builds many other
really useful abstractions that come to form what is known as
an actor programming model. Through the use of Agents,
GenServers and Supervisors, programs that take advantage at
the highest level of the parallelism present in the system.

# The Future

I have decided my next job will be an elixir Job. I believe
this language has the potential to be the next Ruby/Python,
as I think it’s gotten the abstractions right. I hope this
was any way useful to you and maybe I can save you some
time with my experiences. That said, there is nothing
more formative that getting your hands dirty and
exploring all your possibilities. 

# Lessons learned

- Explorations at the frontiers are more valuable as they
provide radical points of view.
- The functional paradigm is not at all that 

