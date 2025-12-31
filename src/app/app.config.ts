import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { routes } from './app.routes';

export const routerProvider = provideRouter(routes);
export const httpClientProvider = provideHttpClient(withInterceptorsFromDi());

export const appConfig: ApplicationConfig = {
  providers: [routerProvider, httpClientProvider],
};
