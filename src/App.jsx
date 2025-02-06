import './App.css'
import { useState } from 'react'

function App() {
  const [text, setText] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [tasks, setTasks] = useState([])

  const handleAddTask = () => {
    if (text.trim() !== "") {
      setTasks([...tasks, text])
      setText("") // Clear input after adding
    }
  }

  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index)
    setTasks(newTasks)
  }

  // New function to filter tasks based on search term
  const filteredTasks = tasks.filter(task => 
    task.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="todo-container">
      <h1>TO DO LIST</h1>
      
      {/* Add Task Input */}
      <div className="input-container">
        <input
          type="text"
          name="task"
          placeholder='Add a task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      {/* Search Input */}
      <div className="search-container">
        <input
          type="text"
          placeholder='Search tasks'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      {/* Task List */}
      {filteredTasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        filteredTasks.map((task, index) => (
          <div className='task' key={index}>
            <p>{task}</p>
            <button onClick={() => handleRemoveTask(index)}>Remove</button>
          </div>
        ))
      )}
    </div>
  )
}

export default App