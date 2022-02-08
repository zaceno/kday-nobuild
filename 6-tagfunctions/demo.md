The same example app, this time using another microframework: hyperapp.
Using hyperapp as an example because there is already a tag-function library existing for it: @hyperapp/html

Takeaways:

- tag-functions are plain code: Works easily with typescript
- views with tag functions are still pretty readable
- tag functions are easy to implement for vdom libraries that don't have it already

Problem

- We want typechecking and intellisense in our editor
- ...but typescript won't run in a browser.

Solution

- We can use JSDoc-syntax for type annotations!
