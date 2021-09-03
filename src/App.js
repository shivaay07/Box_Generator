
import './App.css';
import React, {useState} from 'react';
import DisplayBox from './components/DisplayBox';
import UserForm from './components/UserForm';

function App() {
  const [allboxes, setAllboxes] = useState([]);

  const createNewBox = (newBoxObj) => {
    setAllboxes([...allboxes, newBoxObj]);
  }

  return (
    <div className="App">
      <h1>Welcome to DutTech.org</h1>
      <h3>Box Generator Box</h3>
      {/* {JSON.stringify(allboxes)} */}
      <UserForm createNewBox={createNewBox}/>
      <DisplayBox allboxes={allboxes}/>
    </div>
  );
}

export default App;
