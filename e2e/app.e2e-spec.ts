import { JackResPage } from './app.po';

describe('jack-res App', function() {
  let page: JackResPage;

  beforeEach(() => {
    page = new JackResPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
