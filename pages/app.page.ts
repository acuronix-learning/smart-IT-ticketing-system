import { Page, Locator } from '@playwright/test';

// Locators discovered and verified on the live app by Acuronix.
export class AppPage {
  readonly resume_builder_link: Locator;
  readonly import_button: Locator;
  readonly workshops_link: Locator;

  constructor(page: Page) {
    this.resume_builder_link = page.getByRole("link", { name: "Resume Builder", exact: true });
    this.import_button = page.getByRole("button", { name: "Import", exact: true });
    this.workshops_link = page.getByRole("link", { name: "Workshops", exact: true });
  }
}
