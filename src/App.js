import React from 'react';
import Navbar from './component/Navbar/Navbar';
import TodoList from './component/TodoList/TodoList'; // Import the new component
// ...existing code...

function App() {
  return (
    <div className="App">
      <Navbar />
      <TodoList /> {/* Add the new component */}
      {/* Other components */}
    </div>
  );
}

export default App;
