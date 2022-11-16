import { useState } from 'react';
import './App.css';
import Data from "./Data.json";
import Display from "./Display"

function App() {
  const [score, setScore] = useState([]);
  let Marks = []
  const handleChanger = (value, index) => {
    Marks = score
    Marks[index] = value
    setScore([...Marks]);
  }
  return (
    <>
    
      <div className='container bg-info py-4 my-4' style={{ width: 500 }}>
        <center>
          {Data.map((question, index) => {
            return (
              <Display question={question} index={index} handleChanger={handleChanger} />
            )
          })}
        </center>
      </div>
      <center><button type="button" class="btn btn-outline-primary btn-lg m-2" onClick={() => alert(score.reduce((a, b) => a + b, 0) + "/6")}>Submit Quiz</button></center>
    </>
  );
}

export default App;
