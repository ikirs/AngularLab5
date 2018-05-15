import { AngularLabPage } from './app.po';

describe('angular-lab App', function() {
  let page: AngularLabPage;

  beforeEach(() => {
    page = new AngularLabPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
