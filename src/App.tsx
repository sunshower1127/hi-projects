import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Todo from "./components/Todo";

function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Todo></Todo>
    </QueryClientProvider>
  );
}

export default App;
