import { ThemeProvider } from "@mui/material";
import React, { PropsWithChildren, useState } from "react";

import { Provider } from "react-redux";

export const NavigationStateOnMobileContext = React.createContext({
  show: true,
  setShow: () => {},
});

interface IAppProviderProps {}

const AppProvider = ({ children }: PropsWithChildren<IAppProviderProps>) => {
  const [showNavigationOnMobile, setShowNavigationOnMobile] = useState(true);

  return (
    <div style={{ margin: 0 }}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Provider>
    </div>
  );
};

export default AppProvider;
