import { ApplicationRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootstrapApp } from './main';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

describe('bootstrapApp', () => {
  it('should call bootstrapApplication with AppComponent and appConfig', async () => {
    const appRefMock = {} as ApplicationRef;
    const bootstrapSpy = spyOn(
      platformBrowserDynamic(),
      'bootstrapModule'
    ).and.returnValue(Promise.resolve(appRefMock));

    await bootstrapApp();

    expect(bootstrapSpy).toHaveBeenCalledWith(AppComponent, appConfig);
  });

  it('should log and propagate errors from bootstrap', async () => {
    const error = new Error('bootstrap failed');
    spyOn(platformBrowserDynamic(), 'bootstrapModule').and.returnValue(Promise.reject(error));
    const consoleSpy = spyOn(console, 'error');

    await expectAsync(bootstrapApp()).toBeRejectedWith(error);
    expect(consoleSpy).toHaveBeenCalledWith(error);
  });
});
