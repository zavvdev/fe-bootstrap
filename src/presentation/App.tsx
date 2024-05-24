import { Suspense } from "react";
import "~/presentation/styles/css/index.css";
import { ErrorBoundary } from "~/presentation/ErrorBoundary";

export function App() {
  const name: string = "world";

  return (
    <ErrorBoundary>
      <Suspense fallback={<div />}>
        <h1>hello, {name}</h1>
        <p>env: {import.meta.env.VITE_SERVER_API_ENDPOINT}</p>
      </Suspense>
    </ErrorBoundary>
  );
}
