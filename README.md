# Infinite Redirect Loop in Next.js

This repository demonstrates a common error in Next.js applications: an infinite redirect loop.  The error occurs when using `router.push` to navigate to the current route, creating a cycle that never resolves.

## Problem

The `bug.js` file contains a component that uses the `useRouter` hook to programmatically navigate to the current route using `router.push('./');`. This will create an infinite redirect loop.