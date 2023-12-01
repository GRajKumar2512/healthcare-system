import { Route, Routes } from "react-router-dom";
import Register from "./_auth/pages/Register";
import Login from "./_auth/pages/Login";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import { Appointments, Home, Records, Settings, Messages } from "./_root/pages";
import PatientForm from "./_root/patient/PatientForm";
import axios from "axios";
import PatientPage from "./_root/patient/PatientPage";
import NursePage from "./_root/nurse/NursePage";
import WrapperLayout from "./_root/WrapperLayout";

function App() {
  axios.defaults.baseURL = "http://localhost:4000";
  axios.defaults.withCredentials = true;

  return (
    <>
      <Routes>
        {/* auth routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-up" element={<Register />} />
          <Route path="/sign-in" element={<Login />} />
        </Route>

        {/* home routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/records" element={<Records />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/records/new" element={<PatientForm />} />
        </Route>

        {/* User Routes */}
        <Route element={<WrapperLayout />}>
          <Route path="/patient" element={<PatientPage />} />
          <Route path="/nurse" element={<NursePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
