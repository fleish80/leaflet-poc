import {TranslatePipe} from './translate.pipe';

describe('TranslatePipe', () => {

  let mockTranslateService;
  let pipe;

  beforeEach(() => {
    mockTranslateService = {
      getTranslation: (key) => 'value'
    };
    pipe = new TranslatePipe(mockTranslateService);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should spy on get translate service', () => {
    spyOn(mockTranslateService, 'getTranslation');
    pipe.transform('key');
    expect(mockTranslateService.getTranslation).toHaveBeenCalledWith('key');
  });
});
