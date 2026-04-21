# [Basics-001] - Semantics: Git Best Practices 🚀

## Overview
This document covers essential strategies for repository maintenance and security, focusing on `.gitignore` and environment variables.

## The Importance of `.gitignore`
The `.gitignore` file is crucial for keeping our repository clean and efficient.

* **Why we exclude `node_modules`:** We avoid uploading these files because they are unnecessary dependencies that each developer can download locally using `npm install`. This prevents exceeding storage limits and makes the cloning and update process much faster.

## 🔐 Environment Variables & Security
Security is a top priority. We must never commit `.env` files to version control.

* **Risk of Exposure:** Uploading `.env` files makes sensitive data like API keys, passwords, and tokens public. This creates a high security risk. Once leaked, these keys must be rotated (changed with the provider), which is a much more complex process than simply preventing the leak.

* **The `.env.example` Solution:** We provide this template so other developers know which variables to configure without exposing the actual private values.