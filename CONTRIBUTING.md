# Contributing to Discover Uganda

## Getting Started

1. Fork the repository
2. Create a branch: `git checkout -b feature/your-feature-name`
3. Install dependencies: `pnpm install`
4. Make your changes
5. Run type checking: `pnpm typecheck`
6. Commit using conventional commits (see below)
7. Push and open a Pull Request

## Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add partner search functionality
fix: resolve card flip animation on mobile
docs: update API endpoint documentation
refactor: extract booking form component
chore: update dependencies
```

## Pull Request Process

1. Ensure type checking passes (`pnpm typecheck`)
2. Update documentation if needed
3. Link any related issues
4. Request review from a maintainer

## Code Style

- TypeScript with strict mode
- Follow existing patterns in the codebase
- Use named exports over default exports
- Components in PascalCase, utilities in camelCase
- Tailwind CSS for styling (no CSS modules or styled-components)
