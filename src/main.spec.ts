import { ApplicationRef } from '@angular/core';
import {
  bootstrapApp,
  setBootstrapApplicationRef,
  resetBootstrapApplicationRef,
  BootstrapFn,
} from './main';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

describe('bootstrapApp', () => {
  afterEach(() => {
    resetBootstrapApplicationRef();
  });

  it('should call bootstrapApplication with AppComponent and appConfig', async () => {
    const appRefMock = {} as ApplicationRef;
    const bootstrapSpy = jasmine
      .createSpy<BootstrapFn>('bootstrapApplication')
      .and.returnValue(Promise.resolve(appRefMock));
    setBootstrapApplicationRef(bootstrapSpy);

    await bootstrapApp();

    expect(bootstrapSpy).toHaveBeenCalledWith(AppComponent, appConfig);
  });

  it('should log and propagate errors from bootstrap', async () => {
    const error = new Error('bootstrap failed');
    const bootstrapSpy = jasmine
      .createSpy<BootstrapFn>('bootstrapApplication')
      .and.returnValue(Promise.reject(error));
    setBootstrapApplicationRef(bootstrapSpy);
    const consoleSpy = spyOn(console, 'error');

    await expectAsync(bootstrapApp()).toBeRejectedWith(error);
    expect(consoleSpy).toHaveBeenCalledWith(error);
  });
});
