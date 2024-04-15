import { lazy, Suspense } from "react";
import Splashscreen from "./pages/Splashscreen";
// import Api from "./api";
// import { update } from "./store/User";
// import { store } from "./store";

const Routes = lazy(async () => {
  try {
    // const res = await Api.get("/users/data");
    // store.dispatch(update(res?.data));
  } catch (error) {
    window.location.reload();
  }

  return import("./Routes");
});

const App = () => {
  return (
    <Suspense fallback={<Splashscreen />}>
      <Routes />
    </Suspense>
  );
};

export default App;
