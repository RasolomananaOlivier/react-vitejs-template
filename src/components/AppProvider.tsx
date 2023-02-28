import { ThemeProvider } from "@mui/material";
import React, { PropsWithChildren, useState } from "react";
import { Provider } from "react-redux";

import { theme } from "@/data/theme";
import { store } from "@/redux/store";

interface IAppProviderProps {}

const AppProvider = ({ children }: PropsWithChildren<IAppProviderProps>) => {
  return (
    <div style={{ margin: 0 }}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Provider>
    </div>
  );
};

export default AppProvider;
