import { HelmetProvider, Helmet } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "react-query";
import Routes from "./routes";

import Layout from "./components/layout/Layout";
import MovieProvider from "./context/MovieContext";

function App() {
  const client = new QueryClient();
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s - Snapmoviehub"></Helmet>

      <QueryClientProvider client={client}>
        <MovieProvider>
          <Layout>
            <Routes />
          </Layout>
        </MovieProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
