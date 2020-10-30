import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getParagraphText(): Promise<string> {
    const selector = 'mat-toolbar-row > span';

    return element(by.css(selector)).getText() as Promise<string>;
  }
}
