import "../styles/globals.css";
import type { AppProps } from "next/app";
import { theme } from "../theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect, useState } from "react";
import { getBiodata } from "../actions/auth";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  useEffect(() => {
    getBiodata();
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
