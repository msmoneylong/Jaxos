# JaxOS Help Center

This repository contains the public JaxOS Help Center: customer-facing help, guides, and answers for using JaxOS.

Public documentation lives in [`content/docs/`](content/docs/). Private backend, operational, and implementation documentation is excluded from this repository.

## Local development

```bash
pnpm install
pnpm dev
```

## Validation

```bash
pnpm fumadocs:typegen
pnpm typecheck
pnpm build
pnpm validate:docs
```

The canonical shared documentation skill is `jaxos-customer-documentation`. Private Fumadocs implementation references are maintained with that shared skill and are not stored in this repository.
