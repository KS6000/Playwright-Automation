# Playwright Automation Framework

[![Playwright Tests](https://github.com/KS6000/Playwright-Automation/actions/workflows/playwright.yml/badge.svg)](https://github.com/KS6000/Playwright-Automation/actions/workflows/playwright.yml)

## 📌 Overview
End-to-end UI automation framework built using Playwright with JavaScript.

Covers key user flows including authentication, product navigation, search, cart, and logout.

---

## 🛠️ Tech Stack
- Playwright
- JavaScript (Node.js)
- Page Object Model (POM)

---

## ✅ Test Coverage
- TC001: Homepage validation
- TC002: Login navigation
- TC003: Valid login
- TC004: Invalid login
- TC005: Logout
- TC006: Navigate to products page
- TC007: Search product
- TC008: Add product to cart

---

## 🚀 Run Tests

Install: npm install


Run all: npx playwright test

Run single test: npx playwright test tests/TC007_SearchProduct.spec.js --headed


---

## ⚙️ Features
- Cross-browser testing (Chromium, Firefox, WebKit)
- Page Object Model for maintainability
- Stable selectors (getByRole, getByText, getByPlaceholder)
- Parallel execution support

---

## 📁 Structure
tests/
pages/
utils/
playwright.config.js
