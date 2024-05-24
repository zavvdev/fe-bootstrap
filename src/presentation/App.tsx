import "~/presentation/styles/css/index.css";

export function App() {
  const name: string = "world";

  return (
    <>
      <h1>hello, {name}</h1>
      <p>env: {import.meta.env.VITE_SERVER_API_ENDPOINT}</p>
    </>
  );
}
