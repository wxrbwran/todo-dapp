import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { contractAddress } from '../../utils/consts';
import { ethers } from 'ethers';
import TaskContract from '../../artifacts/contracts/Task.sol/Task.json';
import './index.css';

const TaskAbi = TaskContract.abi;

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [acount, setAccount] = useState('');
  const [network, setNetwork] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit111 <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
