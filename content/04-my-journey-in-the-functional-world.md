---
title: My journey in the functional world
date: 2020-05-25
slug: journey-functional-world
draft: true
---

This quarantine has been a great opportunity to educate
myself. I've been learning about functional
programming, and I wanted to share my experiences.

I chose FP because I was excited by the prospect of
making application state more manageable. Before diving
in, I'd like to refer you to either of the following videos.
They helped me get in the _functional groove_.

- https://www.youtube.com/watch?v=0if71HOyVjY
- https://www.youtube.com/watch?v=E8I19uA-wGY


## Basic concepts

There are two core components of functional programming:
_functions_ and _immutability_.

### Functions

Mathematicians have been making heavy use of functions
for at least a century. 

In the book [Principia Mathematica](https://en.wikipedia.org/wiki/Principia_Mathematica),
Whitehead and Russel provide the (in)famous 
proof of `1 + 1 = 2`.  

![example](/blog/img/proof.png)

As you can see, it appears on page 379. It took the authors
379 pages to build a solid foundation for this
proof to rest on. At the core of this foundation lay
functions.

A function is a transformation. It's a way of turning
inputs into outputs. We've all seen functions before. However
not all functions are made equal. As we'll see later,
some functions *are* functions, some other look more 
like procedures [<span id="footnote-procedures-ref">[️1](#footnote-procedures)</span>].


### Immutability

State is inevitable. Our best hope is to make it more
manageable. One way is to ensure immutability. This means
all of your lists, dicts/maps and tuples will be append-only. 
All non-query operations return a new copy.

With these restrictions, functional languages make
optimizations to work with immutability.

## The journey

My journey started about a year ago in the universe of LISP.
I installed racket, went through some tutorials and got a
basic sense for what it was to program in a purely functional
language. I got distracted with life and eventually stopped.

Fast forward to March, and I am looking once again at all
my options.

### Haskell

In my day job I write python. Bruised and scarred from the
lack of types I wanted to stay away from dynamic languages.
After some research, I narrowed down my choices to Haskell
and Elm. At the end I chose Haskell.

Haskell is what is known as a pure functional language.
In Haskell, The output of any function only depends
on its arguments. Let's see an example to understand purity
better.

The following way to generate a random number is not pure:

```javascript
function rand() {
    return Math.random();
}
```

Given the same parameters (none), it generates
different numbers every time. If instead we wrote:

```javascript
function rand(seed) {
    let x = Math.sin(seed) * 10000;
    return [x - Math.floor(x), seed+1];
}
```

The results of `rand` only dependes on `seed`.
This is a pure function. If you want to learn more about
purity and side effects see
[here](https://stackoverflow.com/questions/22268851/what-is-a-pure-function)
or [here](https://en.wikipedia.org/wiki/Pure_function).

Purity has huge implications and imposes certain
restrictions in the way developers write code.
Reading/writing from/to IO, running a web server
or opening a port are all impure operations. 
How does Haskell deal with this?

Haskell uses an abstraction called [monads](https://stackoverflow.com/a/194207).
Monads help programmers describe their operations instead
of executing them directly. These instructions are
then given to the runtime where they are executed.

I started with
[H-99: Ninety-Nine Haskell Problems](https://wiki.haskell.org/H-99:_Ninety-Nine_Haskell_Problems)
and reading [LYAH](http://learnyouahaskell.com). I also 
went through some [lectures from CS192 in Penn State](https://www.cis.upenn.edu/~cis194/spring13/).

Used to the imperative world, I was confused by all
the "ceremony" that needed to happen for me to get
a random number. Haskell was nice but getting stuff
done in it was a bit involved. Even though I had
really enjoyed my time, it was time for me to look
somewhere else.

My short brush with Haskell had helped me start to internalize
some fundamental concepts. I'd learned about currying,
partial application and composition. I understood, at a basic
level, what a Functor, a Monad and a Monoid were.  

### Elm

Elm was a natural next choice. It struck me as a much
simpler yet elegantly designed language. I was
pleasantly surprised by the APIs in packages like
`elm/parser` and `elm/browser`. In many ways it felt like
Elm was a Haskell where the focus was frontend. And
in line with that focus, many of the details just felt
right. I grew enamoured by the day. 

My very first app was 
[Conway's game of life](https://github.com/afruizc/elmjuegodelavida).
It helped me learn the "Elm architecture" and how to deal with
state efficiently. The more Elm I wrote, the more I understood
how Haskell had inspired it in many ways.

Elm is pure just like Haskell. Instead of monads, however,
it uses Commands and Subscriptions to solve the purity problem.
Commands and Subscriptions are how computations are described
and given to the Elm Runtime.

My second project was a file viewer for the browser that used VIM
keys. I called it [linesurfer](https://github.com/afruizc/linesurfer).
I spend several weeks on this project and realized text editors
are hard to write. One thing that made me change my entire
design was the fact that tabs are one char, but when
displayed take 4 chars.

My next project was a simple [matching game](https://ruizandr.es/matching_game).
My girlfriend is a teacher. With everything going on,
She needed a way to remotely teach colors to her 4 year old kids.
We worked together and made a simple matching game for
animals and colors. Super fun experience working with her.

One thing I don't like about Elm is their "Do as I say, not as
I do" philosophy.

I still really like Elm, and while the fantasy lasted,
I was very happy. But one day I remembered. I was a backend
engineer. Frontend was just a means to a goal. My true
passion, where I am good at, is working behind the scenes.
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

## The Future

I have decided my next job will be an elixir Job. I believe
this language has the potential to be the next Ruby/Python,
as I think it’s gotten the abstractions right. I hope this
was any way useful to you and maybe I can save you some
time with my experiences. That said, there is nothing
more formative that getting your hands dirty and
exploring all your possibilities. 

## Lessons learned

- Explorations at the frontiers are more valuable as they
provide radical points of view.
- The functional paradigm is not at all that 
- You just need to sit down and do it.

<div class="footer">

<span id="footnote-procedures">1. A procedure in this sense refers to a series
of steps that don't return a value.
<a href="#footnote-procedures-ref" title="return to text">&#8617;</a></span> 

</div>

