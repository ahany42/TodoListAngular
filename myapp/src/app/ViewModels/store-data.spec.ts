import { StoreData } from './store-data';

describe('StoreData', () => {
  it('should create an instance', () => {
    expect(new StoreData("test","test",[])).toBeTruthy();
  });
});
