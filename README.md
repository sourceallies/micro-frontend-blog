# Micro-Frontend Blog Example

This repo contains two Node projects.
"ui-commons" is a Vite project that serves the common assets to be shared across applications.
"account-management" is also a Vite project that uses React to pull in the common components.

To start these projects, run `npm run dev` in each directory.
The ui-commons project will be available at [http://localhost:5173/](http://localhost:5173/).
The "account-management" app is available at [http://localhost:5174/](http://localhost:5174/)