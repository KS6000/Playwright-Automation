async function acceptCookies(page) {
  const consentButton = page.getByRole('button', { name: /consent|accept|agree/i });
  if (await consentButton.isVisible().catch(() => false)) {
    await consentButton.click();
  }
}

module.exports = { acceptCookies };