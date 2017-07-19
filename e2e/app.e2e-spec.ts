import { PrjCourceAppPage } from './app.po';

describe('prj-cource-app App', () => {
  let page: PrjCourceAppPage;

  beforeEach(() => {
    page = new PrjCourceAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
