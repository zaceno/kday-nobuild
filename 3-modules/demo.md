Our example broken in to modules. This time we added versions of different modules.

Takeaway:

- skypack dependency version: use `@x.y.z` suffix
- own-module-imports start with './', '../' or '/' and end with '.js'

Problem:

- Won't it make my app slow to import a ton of modules?
- Dependency/version management won't scale.

Solution:

- Many modules: serve with HTTP/2!
- You could have a `deps.js` module...
- ... better yet: importmaps!
