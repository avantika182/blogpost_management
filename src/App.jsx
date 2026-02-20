import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import Analytics from "./pages/Analytics";
import PostDetails from "./pages/PostDetails";
import AuthGuard from "./auth/AuthGuard";
import Favorites from "./pages/Favorites";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />

        <Route
          path="/register"
          element={
            <AuthGuard required={false}>
              <Register />
            </AuthGuard>
          }
        />

        <Route
          path="/login"
          element={
            <AuthGuard required={false}>
              <Login />
            </AuthGuard>
          }
        />

        <Route
          path="/dashboard"
          element={
            <AuthGuard>
              <Dashboard />
            </AuthGuard>
          }
        />

        <Route
          path="/create-post"
          element={
            <AuthGuard>
              <CreatePost />
            </AuthGuard>
          }
        />

        <Route
          path="/post-detail/:id"
          element={
            <AuthGuard>
              <PostDetails />
            </AuthGuard>
          }
        />

        <Route
          path="/analytics"
          element={
            <AuthGuard>
              <Analytics />
            </AuthGuard>
          }
        />
        <Route
          path="/favorites"
          element={
            <AuthGuard>
              <Favorites/>
            </AuthGuard>
          }
          />

        <Route
          path="/edit-post/:id"
          element={
            <AuthGuard>
              <EditPost />
            </AuthGuard>
          }
        />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
