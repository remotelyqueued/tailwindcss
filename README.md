# tailwindcss

### initial setup

```
npm install -D tailwindcss
npx tailwindcss init
```

```
- tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

```
src/input.css

@tailwind base;
@tailwind components;
@tailwind utilities;

```

```
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

```
src/index.html

  <link href="/dist/output.css" rel="stylesheet">
```