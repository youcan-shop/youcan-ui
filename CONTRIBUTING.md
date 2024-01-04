# Contributing to YouCan UI

Thank you for your interest in contributing to YouCan UI! We appreciate your time and effort.

## About this repository

This repository is a monorepo, it hosts both the YouCan UI package and the @youcan/eslint-config package.

We use:

- [Node](https://nodejs.org/en): `^20.9.0`.
- [pnpm](https://pnpm.io): `^8.10.0`.

---

> ⚠️ Disclaimer
>
> @youcan/eslint-config will seen be in its own separate repository.

---

## Structure

This repository is structured as follows:

```bash
packages
└── core
    ├── eslint-all
    ├── eslint-basic
    ├── eslint-plugin-youcan
    ├── eslint-typescript
    ├── eslint-vue
    ├── icons
    ├── visuals
    └── vue3
        └── src
            ├── _dev
            └── assets
            └── components
            └── utils
```

## How to Contribute

We welcome contributions from everyone. To get started, follow these steps:

### Fork the repository

> [!NOTE]
> If you are a member of YouCan UI's core team then you can skip this step and clone the repo directly

Click on the "Fork" button at the top right corner of this page. This will create a copy of the repository in your GitHub account.

### Clone the repository

```bash
git clone https://github.com/<your-username>/youcan-ui
```

### Navigate to project directory

```bash
cd youcan-ui
```

### Build project

```bash
pnpm run build
```

### Run project

```bash
pnpm run dev
```

### Create a branch

```bash
git checkout -b your-branch-name
```

### Make your changes

Make the necessary changes to the codebase.

### Test your changes

Ensure that your changes work as expected and do not introduce any new issues.

### Commit your changes

```bash
git commit -m "Your descriptive commit message"
```

### Push your changes

```bash
git push origin your-branch-name
```

### Create a pull request

Open a pull request on the original repository. Provide a clear title and description for your pull request.

### Wait for review

Your contribution will be reviewed, and any necessary feedback will be provided.

## Code Style

Please follow our coding style guide when making changes to the code. Consistent coding styles make the codebase more maintainable.

## Requests for new components

If you have a request for a new component, please open an issue on GitHub. We'll be happy to help you out.

## Reporting Issues

If you encounter any issues or have suggestions for improvements, please open an issue on the GitHub repository.

---

Thank you for contributing to YouCan UI! 🙌
