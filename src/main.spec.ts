import * as platformBrowser from '@angular/platform-browser';
import { bootstrapApp } from './main';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

describe('bootstrapApp', () => {
  it('should call bootstrapApplication with AppComponent and appConfig', async () => {
    const bootstrapSpy = spyOn(
      platformBrowser,
      'bootstrapApplication'
    ).and.returnValue(Promise.resolve(true as unknown));

    await bootstrapApp();

    expect(bootstrapSpy).toHaveBeenCalledWith(AppComponent, appConfig);
  });

  it('should log and propagate errors from bootstrap', async () => {
    const error = new Error('bootstrap failed');
    spyOn(platformBrowser, 'bootstrapApplication').and.returnValue(
      Promise.reject(error)
    );
    const consoleSpy = spyOn(console, 'error');

    await expectAsync(bootstrapApp()).toBeRejectedWith(error);
    expect(consoleSpy).toHaveBeenCalledWith(error);
  });
});
