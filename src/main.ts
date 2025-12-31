import { ApplicationConfig } from '@angular/core';
import { bootstrapApplication as bootstrapApplicationOriginal } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

export type BootstrapFn = (
  component: typeof AppComponent,
  config?: ApplicationConfig
) => Promise<unknown>;

// Allow overriding in tests without touching the frozen module namespace
export let bootstrapApplicationRef: BootstrapFn = bootstrapApplicationOriginal;

export function setBootstrapApplicationRef(fn: BootstrapFn): void {
  bootstrapApplicationRef = fn;
}

export function resetBootstrapApplicationRef(): void {
  bootstrapApplicationRef = bootstrapApplicationOriginal;
}

export function bootstrapApp(): Promise<unknown> {
  return bootstrapApplicationRef(AppComponent, appConfig).catch((err) => {
    console.error(err);
    throw err;
  });
}

bootstrapApp();
