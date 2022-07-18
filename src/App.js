import {BrowserRouter, Route, Routes} from "react-router-dom";
import Test from "./pages/Test";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import NoPage from "./pages/NoPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route element={<MainLayout />}>
                  <Route index element={<MainPage />} />
                  <Route path="test" element={<Test />} />
              </Route>
              <Route element={<AuthLayout />}>
                  <Route path="login" element={<LoginPage />} />
              </Route>
              <Route path="*" element={<NoPage />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
