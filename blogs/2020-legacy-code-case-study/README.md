# Legacy Code: A case study

_Beginner programmers study code. Senior programmers study people._

I met Rick online. He runs an online subscription-based business and was
desperately looking for a programmer. After a couple of phone calls
we decided we liked each other enough, and got straight to work. I was
introduced to the system and the domain, and we decided on my first
task: changing a date.

### Running Locally

Before anything, I needed to run the code. Even though the system was already
deployed in production, running it locally turned out to be a challenge.

The code was written in python 2.7 and a `requirements.txt` was included. My
computer, however, refused to play with the dependencies. After many hours of
frustration I gave up and decided to use docker. It was obvious that the
application had not been set up for some time. I finally had a running instance 
and all was good. I changed values, created entities
and deleted them. I felt uneasy though. I knew a database was being used,
but I had not set one up yet. Looking into the code I had my first mini-heart
attack of many to come: we were using the production database.

I refused to proceed with this setup and informed Rick of the situation.
He understood what was at stake, and took my advice. I changed the code and
used `docker-compose` to spin up local databases.

Things were looking good; Everything worked in my machine, and I was ready
to deploy.

### Deploying changes

When I asked the old developer how he deployed, he said: “just scp the code
and restart the server”. Thanks pal.

I can’t lie to you, I was shitting my pants a bit. I had always used
automated or semi-automated deploy systems. My experience deploying
was “push to master” or “press this button”. Regardless, I was determined.

Just as before, and prior to doing anything, I let Rick know of what was going on.
I explained to him what deployment was, how it impacted development and how the old developer
did it. I also suggested a new method for which he had no objections.
I spent an additional day figuring out this setup.

### Changing the date

Even though all of these were crucial updates, they added zero functionality
to the application and 4 days had passed. The first week was almost over,
and my original task was still not done.

It took me 3 hours to finish off my original task. The final diff was 3 lines
long and Rick was happy. However, I knew that the future was bleak.
When a 3-line change takes a week, you realize you are dealing with
legacy code.

### The future

As Rick had always been informed of what was going on, there was never
tension or bad surprises. In addition, he was aware of technical debt and
how software needs to be maintained.

I also learned something important: _taking the initiative and being transparent
fosters trust and avoids future conflict_.

After multiple iterations, Rick and I got into a good working rhythm. Occasionally,
my changes would break the system, undetected by my testing. I would learn
exactly what caused the problem from him and would incorporate those steps
in my manual testing.

There was a lot of opportunity for the code to be improved. At the same time,
Rick’s business needed to move forward with new features. Refactoring the
code was a colossal task.

Rick and I eventually stopped working together, but I’m very grateful for
all our interactions.



