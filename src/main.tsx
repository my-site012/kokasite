import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App'
import './index.css'

// Global ErrorBoundary to catch React render crashes
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{
          minHeight: '100vh', display: 'flex', alignItems: 'center',
          justifyContent: 'center', background: '#fff', padding: '20px',
          fontFamily: 'monospace'
        }}>
          <div style={{ maxWidth: 600, textAlign: 'center' }}>
            <h1 style={{ color: '#e91e63', marginBottom: 16 }}>Koka Site — Loading Error</h1>
            <p style={{ color: '#666', marginBottom: 12 }}>
              {this.state.error.message}
            </p>
            <pre style={{
              background: '#f5f5f5', padding: 16, borderRadius: 8,
              fontSize: 12, textAlign: 'left', overflowX: 'auto',
              color: '#333', whiteSpace: 'pre-wrap'
            }}>
              {this.state.error.stack}
            </pre>
            <button
              onClick={() => window.location.reload()}
              style={{
                marginTop: 20, padding: '10px 24px',
                background: '#e91e63', color: '#fff',
                border: 'none', borderRadius: 8, cursor: 'pointer', fontSize: 14
              }}
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
)
