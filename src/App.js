import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './View/HomePage';
import Mission from './View/Mission/Mission';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AssignmentMain from './View/Assignment/AssignmentMain';
import AssignmentPrivate from './View/Assignment/AssignmenPrivate';
import AssignJob from './View/AssignJob/AssignJob';
import LogWork from './View/LogWork/LogWork';
import WorkEvaluating from './View/WorkEvaluating/WorkEvaluating';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}>
          <Route path='/mission' element={<Mission />} />
          <Route path='/assignment' element={<AssignmentMain />} />
          <Route path='/assignmentprivate' element={<AssignmentPrivate />} />
          <Route path='/assignjob' element={<AssignJob />} />
          <Route path='/logwork' element={<LogWork />} />
          <Route path='/workevaluating' element={<WorkEvaluating />} />
        </Route>
      </Routes>
    </div>

  );
}

export default App;
