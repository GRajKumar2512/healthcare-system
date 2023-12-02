import { Route, Routes } from "react-router-dom";
import Register from "./_auth/pages/Register";
import Login from "./_auth/pages/Login";
import AuthLayout from "./_auth/AuthLayout";
import axios from "axios";
import PatientPage from "./_root/patient/PatientPage";
import NursePage from "./_root/nurse/NursePage";
import WrapperLayout from "./_root/WrapperLayout";
import AdminWrapper from "./admin/AdminWrapper";
import ActionPatient from "./admin/ActionPatient";
import ViewPatient from "./admin/ViewPatient";
import ManagePatient from "./admin/ManagePatient";
import ManageNurse from "./admin/ManageNurse";
import ViewNurse from "./admin/ViewNurse";
import AssignPatient from "./admin/AssignPatient";
import Home from "./Home";
import AdminDashboard from "./admin/AdminDashboard";

function App() {
  axios.defaults.baseURL = "http://localhost:4000";
  axios.defaults.withCredentials = true;

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* auth routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-up" element={<Register />} />
          <Route path="/sign-in" element={<Login />} />
        </Route>

        <Route element={<AdminWrapper />}>
          {/* patient routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/register-patient" element={<ActionPatient />} />
          <Route path="/admin/update-patient/:id" element={<ActionPatient />} />
          <Route path="/admin/view-patient" element={<ViewPatient />} />
          <Route path="/admin/manage-patient" element={<ManagePatient />} />
          {/* nurse pages */}
          <Route path="/admin/manage-nurse" element={<ManageNurse />} />
          <Route path="/admin/view-nurse" element={<ViewNurse />} />
          <Route path="/admin/assign-patient" element={<AssignPatient />} />
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
