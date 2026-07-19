import { describe, it, expect } from 'vitest';
import { getEffectiveApiKey, shouldOpenConfig, getInitialMockState } from './config';

describe('Configuration Utilities', () => {
  describe('getEffectiveApiKey', () => {
    it('should prioritize localStorage key over environment variable', () => {
      expect(getEffectiveApiKey('env-key', 'local-key')).toBe('local-key');
    });

    it('should use environment variable if localStorage is missing', () => {
      expect(getEffectiveApiKey('env-key', null)).toBe('env-key');
      expect(getEffectiveApiKey('env-key', '')).toBe('env-key');
    });

    it('should return empty string if both are missing', () => {
      expect(getEffectiveApiKey(undefined, null)).toBe('');
    });
  });

  describe('shouldOpenConfig', () => {
    it('should return true if both keys are missing', () => {
      expect(shouldOpenConfig(undefined, null)).toBe(true);
      expect(shouldOpenConfig('', '')).toBe(true);
    });

    it('should return false if either key exists', () => {
      expect(shouldOpenConfig('env', null)).toBe(false);
      expect(shouldOpenConfig(undefined, 'local')).toBe(false);
      expect(shouldOpenConfig('env', 'local')).toBe(false);
    });
  });

  describe('getInitialMockState', () => {
    it('should prioritize saved mock preference if it exists', () => {
      expect(getInitialMockState('env', null, 'true')).toBe(true);
      expect(getInitialMockState(undefined, 'local', 'false')).toBe(false);
    });

    it('should fallback to missing API key if no saved preference', () => {
      expect(getInitialMockState(undefined, null, null)).toBe(true); // No keys = mock mode true
      expect(getInitialMockState('env', null, null)).toBe(false); // Env key exists = mock mode false
    });
  });
});
