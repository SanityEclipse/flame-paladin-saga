import { FlamePaladinSagaPage } from './app.po';

describe('flame-paladin-saga App', function() {
  let page: FlamePaladinSagaPage;

  beforeEach(() => {
    page = new FlamePaladinSagaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
