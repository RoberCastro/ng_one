import { CliAngularOnePage } from './app.po';

describe('cli-angular-one App', () => {
  let page: CliAngularOnePage;

  beforeEach(() => {
    page = new CliAngularOnePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
