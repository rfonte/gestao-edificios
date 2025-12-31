import { appConfig, httpClientProvider, routerProvider } from './app.config';

describe('appConfig', () => {
  it('should expose providers with router and http client', () => {
    expect(appConfig.providers).toBeDefined();
    const providers = appConfig.providers ?? [];

    expect(providers).toContain(routerProvider);
    expect(providers).toContain(httpClientProvider);
    expect(providers.length).toBe(2);
  });
});
