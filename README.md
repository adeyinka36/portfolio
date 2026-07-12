# Portfolio (Next.js)

This project has been migrated from a static Express app to a Next.js App Router project.

## Routes

- `/` - home
- `/about` - about and skills
- `/projects` - complete projects list
- `/proj2` - featured projects

## Development

```sh
npm install
npm run dev
```

App runs on `http://localhost:3001`.

## Production

```sh
npm run build
npm run start
```

## Notes

- Static assets are served from `public/`.
- Legacy Express files (`App.js`, `routes/`, and old HTML files) can be removed after you confirm the new Next.js app is working as expected.

