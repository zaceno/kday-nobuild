A very simple React App, using no build system. Obviously can't work.

Problem:

- browsers can't find modules e.g.`"react"` (even though module syntax is browser native)
- JSX syntax does not work in a browser.

Solution:

- Make the script tag type="module"
- Import from proper URLs
- Change the JSX syntax to something the browser understands
