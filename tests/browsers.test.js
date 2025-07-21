import { expect, test } from '@playwright/test';

test('Test browsers', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.pause();
});

test('correct title', async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await expect(page).toHaveTitle(/Vite ReactJS — Starter/);
});

test('has heading', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await expect(page.getByRole("heading", {
    name:"Vite ReactTS — Starter",
  })).toBeVisible();
});