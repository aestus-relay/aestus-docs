# Aestus Relay Documentation

Reference documentation for the Aestus MEV-Boost relay.

## Development

```bash
npm install
npm start
```

This starts a local development server at `http://localhost:3000/docs/`.

## Build

```bash
npm run build
```

The static site is generated in the `build/` directory.

## Docker

The project includes a `Dockerfile` for serving the static content via Nginx.

```bash
docker build -t aestus-docs .
docker run -p 8080:80 aestus-docs
```
