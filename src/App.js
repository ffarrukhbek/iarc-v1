import {BrowserRouter, Route, Routes} from "react-router-dom";
// import Test from "./pages/Test";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import NoPage from "./pages/NoPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import SmartwaterPage from "./pages/SmartwaterPage";
import WellPage from "./pages/WellPage";
import PumpPage from "./pages/PumpPage";
import CommentPage from "./pages/CommentPage";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route element={<MainLayout />}>
                  <Route index element={<MainPage />} />
                  <Route path="smartwater" element={<SmartwaterPage />} />
                  <Route path="well" element={<WellPage />} />
                  <Route path="pump" element={<PumpPage />} />
                  <Route path="comment" element={<CommentPage />} />
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
