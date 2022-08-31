//npm i react-router-dom@6
import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom' 
import Todos from './components/Todos';
import Todo from './components/Todo'
import Edit from './components/EditTodo'
import './App.css';

function App() {
  return (
    <div className="App">
     <h2>ToDo List</h2>
     <Router>
      <Routes>
        <Route path='/' element={<Todos />}/>
        <Route path='/:id' element={<Todo />} />
        <Route path='/:id/edit' element={<Edit />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
