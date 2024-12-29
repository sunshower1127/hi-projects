import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useMemo } from "react";
import Products from "./components/Products";

function App() {
  return (
    <QueryClientProvider client={useMemo(() => new QueryClient(), [])}>
      <Products />
    </QueryClientProvider>
  );
}

export default App;
