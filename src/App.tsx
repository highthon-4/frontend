import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import AppRouter from "./router";
import "./styles/globalFont.css";
import "./styles/reset.css";

import { useForm, FormProvider } from "react-hook-form";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

function App() {
  const methods = useForm();

  return (
    <QueryClientProvider client={queryClient}>
      <FormProvider {...methods}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </FormProvider>
    </QueryClientProvider>
  );
}

export default App;
