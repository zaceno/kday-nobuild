Our example app using hyperapp, tag-functions and type-safety with jsdoc syntax.

Takeaway

- JSDoc syntax is clunky
- JSDoc does not support all features of typescript (notably: function overloading)
- Intellisense / TSC understands JSDoc syntax
- We get type-safety as we code, and our code still runs in browsers.

Problem

- Testing ?

Solution

- Honestly havent' looked at it so much.
- Running & reporting in browser works fine too (was done in ages past)
- Running tests in a real browser means you don't need "fake" browser environments like Jest has
