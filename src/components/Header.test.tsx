import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import { Header } from './Header';

describe('Header Component', () => {
  it('should render the language switcher and handle changes', () => {
    const setLanguageMock = vi.fn();
    
    render(
      <Header 
        apiKey={null} 
        useMock={true} 
        isConfigOpen={false} 
        setIsConfigOpen={vi.fn()} 
        language="English" 
        setLanguage={setLanguageMock} 
      />
    );

    const select = screen.getByLabelText('Select Language');
    expect(select).toBeInTheDocument();
    
    // Simulate user selecting Spanish
    fireEvent.change(select, { target: { value: 'Spanish' } });
    expect(setLanguageMock).toHaveBeenCalledWith('Spanish');
  });

  it('should correctly toggle the config open state', () => {
    const setIsConfigOpenMock = vi.fn();
    
    render(
      <Header 
        apiKey={null} 
        useMock={true} 
        isConfigOpen={false} 
        setIsConfigOpen={setIsConfigOpenMock} 
        language="English" 
        setLanguage={vi.fn()} 
      />
    );

    const toggleButton = screen.getByTitle('Locker Room Settings');
    fireEvent.click(toggleButton);
    
    expect(setIsConfigOpenMock).toHaveBeenCalledWith(true);
  });
});
