Here we are with a well structured React app running directly in the browser.

Takeaway:

- Use as many modules as you like thanks to HTTP/2.
- Importmaps is browser-native dependency management
- Importmaps allow path aliasing to avoid relative-path hell
- Importmaps are not mature :(
- Importmaps require shim for Safari/Firefox

Problem:

React is cool in lots of ways! Made by very smart people. Yet...

- React is a large (~25kB) import that does way more than we need.
- React is opaque and magical. How do hooks work? Who knows 🤷‍♂️
- React makes you do everything the react-way
- More study of react & ecosystem, less study of native browser APIs

Solution

- Replace react with a microframework / microlibrary
