import React from "react";
import { BrowserRouter as Router,
  Routes,
  Route,
 } from "react-router-dom"; 
import CreateTask from "./pages/Admin/CreateTask";
import Dashboard from "./pages/Admin/Dashboard";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import ManageTasks from "./pages/Admin/ManageTasks";
import ManageUsers from "./pages/Admin/ManageUsers";
import PrivateRoute from "./routes/PrivateRoute";


const App = () =>{
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signUp" element={<SignUp/>}/>

          {/* Admin Routes */}
          <Route element={< PrivateRoute allowedRoles={["admin"]}/>}>
            <Route path="/admin/dashboard" element={<Dashboard/>}></Route>
            <Route path="/admin/tasks" element={<ManageTasks/>}></Route>
            <Route path="/admin/create-task" element={<CreateTask/>}></Route>
            <Route path="/admin/users" element={<ManageUsers/>}></Route>
          </Route>
          {/*  User Routes */}
          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/user/dashboard" element={<UserDashboard />}></Route>
            <Route path="/user/my-tasks" element={<MyTasks />}></Route>
            <Route path="/user/task-details/:id" element={<ViewTaskDetails />}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}
export default App