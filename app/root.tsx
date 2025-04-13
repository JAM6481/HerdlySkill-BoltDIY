// Error boundary
    function ErrorBoundary({ error }) {
      return (
        <div style={{ color: 'red' }}>
          <h3>Oops! An unexpected error occurred.</h3>
          <pre>{error?.message}</pre>
        </div>
      );
    }

    export default function App() {
      return (
        <ErrorBoundary>
          {/* ... your app content ... */}
        </ErrorBoundary>
      );
    }
