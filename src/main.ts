import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

export function bootstrapApp(): Promise<unknown> {
  return bootstrapApplication(AppComponent, appConfig).catch((err) => {
    console.error(err);
    throw err;
  });
}

bootstrapApp();
