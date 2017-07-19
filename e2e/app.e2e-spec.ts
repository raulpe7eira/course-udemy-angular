import { PrjBasicAppPage } from './app.po';

describe('PrjBasicApp App', () => {
  let page: PrjBasicAppPage;

  beforeEach(() => {
    page = new PrjBasicAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
