Our same app, now with petit-dom instead of React

Takeaway

- There are libraries/frameworks out there that "do one thing well"
- ...that are _much_ smaller => better for performance
- ...that don't lock you in to an ecosystem.
- ...that let you DIY more and that's not so bad. Transferable skills.
- ...with code that is easy to understand/hack/fork

Problems:

- Having lots of modules, and lots of DIY means typechecking would help
- TTLs don't work well with typescript (not like JSX does anyway)

Solution:

- Use a different approach to declarative views, using functions
