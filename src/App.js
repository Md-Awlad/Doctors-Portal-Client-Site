import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Header from "./shared/header";
import About from "./pages/home/about";
import Login from "./pages/home/login/login";
import Footer from "./shared/footer";
import Appointment from "./pages/appointment/appointment";
import Signup from "./pages/home/login/signUp";
import RequireAuth from "./pages/home/login/requireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/dashboard/dashboard";
import MyAppointment from "./pages/dashboard/myAppointment";
import MyReview from "./pages/dashboard/myReview";
import AllUsers from "./pages/dashboard/users";
import MyHistory from "./pages/dashboard/history";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointment />} />
          <Route path="review" element={<MyReview />} />
          <Route path="history" element={<MyHistory />} />
          <Route path="users" element={<AllUsers />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
