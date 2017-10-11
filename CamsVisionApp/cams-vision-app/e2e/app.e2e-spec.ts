import { CamsVisionAppPage } from './app.po';

describe('cams-vision-app App', () => {
  let page: CamsVisionAppPage;

  beforeEach(() => {
    page = new CamsVisionAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
