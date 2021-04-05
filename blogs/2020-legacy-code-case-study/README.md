# People and Legacy Code: A case study

_Beginner programmers study code. Senior programmers study people._

I met Rick online. He's the owner of a business that runs a subscription-based
online platform. After a couple of phone calls that were
challenged by a 9-hour time difference, we decided we liked each other enough
and got straight to work. I was introduced to the system and the domain, and we
decided on my first task: changing a date.

### Step 0: running the code

The system was already deployed in production, so running it should be a walk
in the park--or so I thought.

The code was written in python 2.7 and a `requirements.txt` was included. My
computer being a mac, however, refused to play with the dependencies. With the
day almost over, I gave up and decided to use docker. It was obvious that the
application hadn’t been set up for some time. After one more day, I finally
had a running instance.

With the software running, I went to town. I changed values, created entities
and deleted them. After some time, I felt uneasy though. A database
was being used, but I hand't set it up. After digging into the code I had my
first mini-heart attack of many to come: the code used production databases.

### Step 0.5: Running locally

Before proceeding, the system had to run with local databases. I changed the code
to load different configurations based on an environment variable and used
`docker-compose` to spin up the databases.

Things were looking good; Everything worked in my machine, and I was pleased.
All this fidgeting around had taken another full day. After some manual and
automated testing, I was satisfied and fairly confident my solution would work.

### Step 0.7: Deploying changes

With working code, I was ready to deploy.

When I asked the old developer how he deployed, he said: “just scp the code
and restart the server”. Thanks pal. I can’t lie to you: when I heard that,
I was shitting my pants a little bit. All the companies that I’d worked at
before had automated or semi-automated deploy systems. My experience deploying
was “push to master” or “press this button”. So, as any decent guy would
do--although I must admit I was feeling a little bit defeated--I ditched
`scp` for version control. I `ssh`ed into the server, `git pull`ed the
code and restarted all python processes. I went to the site and got a 500,
Server Error. My second mini-heart attack.

Unbeknownst to me, the server was not started directly, but through a bash
script that would call the python entrypoint inside an infinite loop. This
was done so that if the python process died, it would be restarted right away.
I used this method, and all was good. My changes had been deployed successfully
and production was not broken. I celebrated with my shake-the-booty dance
(one of the luxuries of working from home).

Even though all of these were crucial updates, they added zero functionality
to the application. The first week was up and I hadn’t started with my task.
I explained to Rick that these were much needed updates--without them, the
system would crumble. To my own surprise, Rick was welcoming and, at times,
even happy that I chose to straighten things out before moving forward.

I learned something very important: taking the initiative and being transparent
fosters trust. I could also proceed to change the date!

### Step 1: Changing the date

At its core, the platform would perform searches for different items on the
internet, and once found, would email them to customers at a certain date.
My task was to change the date in which some of these emails were being sent.
It’s worth mentioning that neither the description of the platform or the
task came in this form.

It took me 1 additional hour to finish off this task. The diff was 3 lines
long and Rick was happy. I wasn’t though. I knew that the future was bleak.
When a 3-line change takes a week, you realize you are dealing with legacy code.

### Step 2, 3, …. N: Making changes

After multiple iterations, Rick and I got into a good rhythm. Occasionally,
my changes would break the system, undetected by my testing. I would learn
exactly what caused the problem from him and would incorporate those steps
in my manual testing.

There was a lot of opportunity for the code to be improved. At the same time,
Rick’s business needed to move forward with new features. Refactoring the
code was a colossal task.

Rick and I eventually stopped working together, but I’m very grateful for
all our interactions.



