import React, {ChangeEvent, useState} from 'react';
import './App.css';
import axios from "axios";

function App() {

  const [email, setEmail] = useState<string | undefined>(undefined);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
  const handleClick = () => axios.post("http://localhost:8080/v1/whiz", null,{headers: {'Access-Control-Allow-Origin': '*'}, params: {email: email}})
      .then((res) => console.log(res))
      .catch((err) => console.log(err))

  return (
    <div className="App">
      <header className="App-header">
        <input
            type="text"
            className="form-control"
            placeholder="Add to the waitlist"
            onChange={(e) => handleChange(e)}
        />
        <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={handleClick}
        >
          Add
        </button>
      </header>
    </div>
  );
}

export default App;
