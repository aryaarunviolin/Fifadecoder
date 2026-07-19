import { describe, it, expect } from 'vitest';
import { parseGeminiError } from './gemini';

describe('Gemini API Service', () => {
  describe('parseGeminiError', () => {
    it('should correctly identify Invalid API Key errors (401)', () => {
      const mockError = { status: 401, message: 'API key not valid' };
      const parsed = parseGeminiError(mockError);
      expect(parsed.status).toBe(401);
      expect(parsed.message).toContain('Invalid API Key');
    });

    it('should correctly identify Permission Denied errors (403)', () => {
      const mockError = new Error('Permission denied for this resource');
      const parsed = parseGeminiError(mockError);
      expect(parsed.status).toBe(403);
      expect(parsed.message).toContain('Permission Denied');
    });

    it('should correctly identify Quota Exceeded errors (429)', () => {
      // Passing it as status inside an error object
      const err = new Error('Quota exceeded');
      (err as any).status = 429;
      const parsed = parseGeminiError(err);
      expect(parsed.status).toBe(429);
      expect(parsed.message).toContain('Quota Exceeded');
    });

    it('should correctly identify Model Not Found errors (404)', () => {
      const mockError = { message: 'models/gemini-2.5-flash not found' };
      const parsed = parseGeminiError(mockError);
      expect(parsed.status).toBe(404);
      expect(parsed.message).toContain('Model Not Found');
    });
    
    it('should correctly identify Network failures', () => {
      const mockError = new Error('Failed to fetch');
      const parsed = parseGeminiError(mockError);
      expect(parsed.status).toBe('Network');
      expect(parsed.message).toContain('Network Failure');
    });

    it('should NOT leak raw API keys in the error body', () => {
      // Simulate an error that might contain the API key in the raw response
      const mockError = { 
        status: 400, 
        message: 'Bad Request', 
        response: { 
          url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSySecretKey' 
        } 
      };
      const parsed = parseGeminiError(mockError);
      // Wait, currently parseGeminiError just stringifies the response. We should test that it sanitizes it.
      // Since we haven't implemented sanitization yet, let's write the test and then we will update the service.
      expect(parsed.body).not.toContain('AIzaSySecretKey');
      expect(parsed.body).toContain('REDACTED_API_KEY');
    });
  });
});
