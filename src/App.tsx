import AppProvider from "./components/Providers";
import AppRoutes from "./components/Routes";

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
