import { PurchaseMiddleware } from './purchase.middleware';

describe('PurchaseMiddleware', () => {
  it('should be defined', () => {
    expect(new PurchaseMiddleware()).toBeDefined();
  });
});
