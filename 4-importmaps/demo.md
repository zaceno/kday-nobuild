Here we are with a well structured React app running directly in the browser.

Takeaway:

- Use as many modules as you like.
- Importmaps is browser-native dependency management
- Importmaps allow path aliasing to avoid relative-path hell
- Importmaps are not mature :(
- Importmaps require shim for Safari/Firefox

Problem

- React is a large import. 24k or so
- React is opaque and magical. How do hooks work? Who knows 🤷‍♂️
- React makes you do everything the react-way
- More study of react & ecosystem, less study of native browser APIs

Solution

- Replace react with a microframework / microlibrary
