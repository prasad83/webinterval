webinterval
===========

Browser optimize CPU intensive operations on inactive pages.
Refer: https://developer.chrome.com/blog/timer-throttling-in-chrome-88

Timer based functionality need to be devised using WebWoker.

Issue
=====

setInterval function was used in Emitter (source) page which broadcasting
message to Listener (target) pages. User was active on these Listener pages.

setInterval was configured to trigger every 1 second.

When the User was active on other Listener page (or) other than Emitter page
Trigger worked well upto 5 min (300 sec) and gradually slowed down. This 
potentially impacted Listener pages.

Steps to Reproduce
==================
* Step 1: Open issue/emitter.html in a tab.
* Step 2: Open issue/listener.html in other tab (stay here for more than 5 min)
* Step 3: You will observe timer on listener degradges after 5 min.

Solution
========

setWebInterval function devised using WebWorker worked as expected even
when the Emitter page goes out-of-focus for a long-time.

Steps to Review
===============
* Step 1: Open solution/emitter.html in a tab.
* Step 2: Open solution/listener.html in other tab (stay here for more than 5 min)
* Step 3: You will observe timer on listener continues well for long time.


Usage
=====

```
<script src="lib/web_interval.js"></script>
```

```
var worker = setWebInterval( function() { /* ... */ }, 1*1000 );
```

```
clearWebInterval(worker);
```
