//react
import { Routes, Route } from "react-router-dom";

//toast
import { ToastContainer } from "react-toastify";

//theme
import Theme from "./files/theme";
import "react-toastify/dist/ReactToastify.css";

//mui
import { ThemeProvider, CssBaseline } from "@mui/material";
import { SWRConfig } from "swr";
import { swrFetcher } from "./api";
import NoRouteMatch from "./pages/NoRouteMatch";
// import Main from "./pages/Main";
// import PrivateRoute from "./pages/PrivateRoute";
import Dashboard from "./pages/Dashboard/Dashboard";

export default function WithTheme() {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        fetcher: swrFetcher,
        revalidateFirstPage: false,
        onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
          if (retryCount >= 10) {
            return;
          }

          return setTimeout(() => revalidate({ retryCount }), 15000);
        },
      }}
    >
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<NoRouteMatch />} />
        </Routes>
        <ToastContainer position="top-right" autoClose={5000} theme="dark" />
      </ThemeProvider>
    </SWRConfig>
  );
}
