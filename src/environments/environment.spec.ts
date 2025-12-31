import { environment } from './environment';
import { environment as environmentProd } from './environment.prod';

describe('environment files', () => {
  it('should set production false by default', () => {
    expect(environment.production).toBeFalse();
  });

  it('should set production true for prod build', () => {
    expect(environmentProd.production).toBeTrue();
  });
});
