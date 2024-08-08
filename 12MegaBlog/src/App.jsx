import "./App.css";
import "./index.css";
import { Footer, Header } from "./Components";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { authService } from "./appwrite/auth";
import { login, logOut } from "./store/authslice";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(
            login({
              userData,
            })
          );
        } else {
          dispatch(logOut());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return !loading ? (
    <div
      className="min-h-screen flex
   flex-wrap content-between bg-gray-400"
    >
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}
export default App;
