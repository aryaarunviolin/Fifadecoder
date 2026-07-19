export function getEffectiveApiKey(envKey: string | undefined, localKey: string | null): string {
  return localKey || envKey || '';
}

export function shouldOpenConfig(envKey: string | undefined, localKey: string | null): boolean {
  return !localKey && !envKey;
}

export function getInitialMockState(envKey: string | undefined, localKey: string | null, savedMock: string | null): boolean {
  if (savedMock !== null) {
    return savedMock === 'true';
  }
  return !getEffectiveApiKey(envKey, localKey);
}
