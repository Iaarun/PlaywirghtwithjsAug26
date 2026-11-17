import { test, expect } from '@playwright/test';



test.describe('Add to cart test', () => {
  test('test', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');
    await expect(page.getByRole('link', { name: 'Tricentis Demo Web Shop' })).toBeVisible();

    await page.locator('div').nth(5).click();
    await page.getByRole('button', { name: 'Add to cart' }).nth(1).click();
    await page.getByRole('link', { name: 'Shopping cart (2)' }).click();
    await expect(page.locator('body')).toContainText('1590.00');

    await page.getByRole('link', { name: 'Books' }).click();
    await expect(page.locator('h1')).toContainText('Books');
    await page.screenshot({ path: 'books1.png', fullPage: true });

    const subscribeBtn = page.locator('#newsletter-subscribe-button');
    if (await subscribeBtn.isVisible()) {
      await subscribeBtn.scrollIntoViewIfNeeded();
      await subscribeBtn.screenshot({ path: 'subscribeButton.png' });
    }
  });
});