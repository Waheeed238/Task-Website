import axios from "axios"
import './AddTask.css'
import { useState } from "react"

const AddTask = () => {
    const [ name, setName ] = useState('')
    const [ description, setDescription ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/addtasks', { name, description })
            .then(result => console.log(result.data))
            .catch(err => console.log(err))
    }

    return (
            <section id="createTask">
                <h1>Create Task</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="taskName">Task Name</label>
                    <input type="text" id="taskName" name="taskName" onChange={(e) => setName(e.target.value)}  required />

                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" onChange={(e) => setDescription(e.target.value)}  required></textarea>

                    <button type="submit" className="submit-btn">Add Task</button>
                </form>
            </section>
    )
}

export default AddTask