import React, { useState } from 'react';
import { Send, MessageSquare } from 'lucide-react';
import { ChatMessage } from '../services/gemini';

interface ChatInterfaceProps {
  chatHistory: ChatMessage[];
  suggestedQuestions: string[];
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({
  chatHistory,
  suggestedQuestions,
  onSendMessage,
  isLoading
}) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    onSendMessage(input);
    setInput('');
  };

  const handleChipClick = (question: string) => {
    if (isLoading) return;
    onSendMessage(question);
  };

  return (
    <div className="glass-panel chat-section" style={{ marginTop: '1rem' }}>
      <h4>
        <MessageSquare size={18} className="logo-icon" />
        Ask the Ref Copilot
      </h4>

      {/* Suggested Follow-up Chip Buttons */}
      {suggestedQuestions && suggestedQuestions.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-secondary)' }}>
            Suggested Questions:
          </span>
          <div className="suggested-chips">
            {suggestedQuestions.map((q, idx) => (
              <button
                key={idx}
                type="button"
                className="chip-btn"
                onClick={() => handleChipClick(q)}
                disabled={isLoading}
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Chat History Messages Container */}
      <div className="chat-history">
        {chatHistory.length === 0 ? (
          <div style={{ textAlign: 'center', color: 'var(--color-text-secondary)', fontSize: '0.8rem', padding: '1rem 0' }}>
            No chat history. Ask why this ruling was made or how the rules apply.
          </div>
        ) : (
          chatHistory.map((msg, idx) => (
            <div key={idx} className={`chat-bubble ${msg.role}`}>
              {msg.content}
            </div>
          ))
        )}
        {isLoading && (
          <div className="chat-bubble model" style={{ opacity: 0.7 }}>
            Typing...
          </div>
        )}
      </div>

      {/* Chat Send Row */}
      <form onSubmit={handleSubmit} className="chat-input-row">
        <input
          type="text"
          placeholder="Ask a follow-up question (e.g. 'What is double jeopardy?')..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isLoading}
        />
        <button type="submit" className="btn-send" disabled={isLoading || !input.trim()}>
          <Send size={16} />
        </button>
      </form>
    </div>
  );
};
