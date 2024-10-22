## Issue: https://github.com/nativewind/nativewind/issues/1009

## Repro steps
- `bun install`
- `bun build:dev`, this should tell you to add the eas project id in the app.config.ts file, instead of `XXXXX`.
- `bun build:prod`

The last one should fail with the error in the issue.
