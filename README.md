COMP 3123 –Test – 1 (6%)
Lecture Time: 05:00 PM to 07:00 PM
Developer Note:
When working on your questions, please create separate folder for your work. This way you won’t be
putting all your code in the same file, which can pollute the global namespace. In short, it will prevent you
from overwriting your own work and causing your code to compile incorrectly.
Organize your folder structure in this way.
Lab Test Reference
You may use the Javascript ES6 and node.js online documentation
https://developer.mozilla.org/en-US/docs/Web/JavaScript
https://nodejs.org/en/docs/
Lab Test Submission
Create a git repo name studentid_comp3123_test1 on GitHub
Please submit the ZIP of the test project and GitHub report link at the end of the lab
Also, provide screenshots if each output
Question 1: ES6 Features
● Create a script with a function named lowerCaseWords that takes a mixed array as input.
The function will do the following.
o return a promise that is resolved or rejected
o filter the non-strings and lower case the remaining words
● Input
● Output
Question 2: Promises
● Given the script file callbacks.js, write a script that does the following:
o Create a method resolvedPromise that is similar to delayedSuccess and resolves a
message after a timeout of 500ms.
o Create a method rejectedPromise that is similar to delayedException and rejects an
error message after a timeout of 500ms.
o Call both promises separately and handle the resolved and reject results and then output
to the console
callbacks.js
 Output
Question 3: File Module
● Create a script that will do the following:
1. Remove Log files
o remove all the files from the Logs directory, if exists
o output the file names to delet
o remove the Logs directory
2. Create Log files
o create a Logs directory, if it does not exist
o change the current process to the new Logs directory
o create 10 log files and write some text into the file
o output the files names to console
o Hint: use the fs module and path module, and the process current working directory to
build directory path. It is acceptable, to have a remove.js script and separate add.js
script.
