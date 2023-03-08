import { ThemeProvider } from "@mui/material";
import React, { PropsWithChildren, useState } from "react";
import { Provider } from "react-redux";

import { theme } from "@/data/theme";
import { store } from "@/redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

interface IAppProviderProps {}

const clientQuery = new QueryClient({
  defaultOptions: {
    queries: {
      networkMode: "offlineFirst",
    },
    mutations: {
      networkMode: "offlineFirst",
    },
  },
});

const AppProvider = ({ children }: PropsWithChildren<IAppProviderProps>) => {
  return (
    <QueryClientProvider client={clientQuery}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Provider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default AppProvider;
