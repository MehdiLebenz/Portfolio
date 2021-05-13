---
slug: "my-first-post"
date: "2019-05-04"
title: "My first blog post"
---
Simple React SSR app using Deno
Deno is a new runtime for JavaScript and TypeScript outside of the web browser. It based on the V8 JavaScript Engine, written in Rust and was created by Ryan Dahl, the original founder of Node.js.
Deno Standard Modules :
These modules are tagged in accordance with Deno releases. So, for example, the v0.3.0 tag is guaranteed to work with deno v0.3.0. You can link to v0.3.0 using the URL https://deno.land/std@v0.3.0/. Not specifying a tag will link to the master branch.
It is strongly recommended that you link to tagged releases to avoid unintended updates.
Don't link to / import any module whose path:
Has a name or parent with an underscore prefix: _foo.ts, _util/bar.ts.
Is that of a test module or test data: test.ts, foo_test.ts, testdata/bar.txt.

No stability is guaranteed for these files.
Go to https://deno.land/std/.
Installation :
Deno Installation 👍
Let's Start 😁 :
Did You finish the installation ? Ok let's go then :
You can now run make use of the deno command ! use deno help to explore the commands , we have to use it to run our React SSR app later on.
Before that let's explore our project structure !
We are going to create 3 files :
application.tsx will be our React component
Server.tsx will contain all of our simple server code
utils.ts : will hold all of our dependencies
utils File :
https://dev.jspm.io/react@16.13.1
https://deno.land/x/opine@0.4.0/mod.ts
https://deno.land/x/opine@0.4.0/src/types.ts
Here we are importing React and React DOM Server from JSPM, but you could equally use any CDN that provides React as an ES Module. Check out the Deno website for CDN alternatives.
We also import the Opine its a part of ExpressJS that you can use with deno
Our React Component :
First we import React like any simple React app
First we import React like any simple React app
Lastly we create a small component named App which uses Reacthooks to create 2 buttons ✌.
Our Server :
Links :
`import React from "https://dev.jspm.io/react@16.13.1";\nimport ReactDOM from "https://dev.jspm.io/react-dom@16.13.1";
\nconst App = ${App};\nReactDOM.hydrate(React.createElement(App), document.body);`;
Let's Run the application :
if you have any problem try to check your deno version and upgrade it
deno upgrade
Results :
Now just have fun dicovering Deno + React
Github : https://github.com/MehdiLebenz/React-SSR-with-Deno