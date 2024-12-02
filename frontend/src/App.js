import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/basic/Homepage/Homepage';
import DashboardMain from './components/Dashboard/Main/DashboardMain'; // Corrected typo
import StudentRegister from './components/StudentRegister/StudentRegisterPage/StudentRegister';
import AddTeacher from './components/Dashboard/AddTeacher/AddTeacher';
import AddSubject from './components/Dashboard/AddSubject/AddSubject';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<DashboardMain />} />
        <Route path="/register" element={<StudentRegister />} />
        <Route path="/addTeacher" element={<AddTeacher />} />
        <Route path="/addSubject" element={<AddSubject />} />
      </Routes>
    </Router>
  );
}

export default App;
