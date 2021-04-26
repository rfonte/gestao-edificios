import { GestaoEdificiosPage } from './app.po';

describe('gestao-edificios App', function() {
  let page: GestaoEdificiosPage;

  beforeEach(() => {
    page = new GestaoEdificiosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
