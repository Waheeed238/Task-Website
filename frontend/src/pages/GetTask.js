import { useEffect, useState } from 'react';
import './GetTask.css'
import axios from 'axios';

const GetTask = () => {
    const [ tasks, setTasks ] = useState([])

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get('http://localhost:8000/tasks')
                setTasks(response.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchTasks();
    }, [])
    return(
            <section id="getTask">
                <h1>All Tasks</h1>
                {tasks.map(task => (
                    <div class="task-card">
                        <h2>{task.name}</h2>
                        <p>Description: {task.description}</p>
                        <p>Date: {new Date(task.date).toLocaleDateString()}</p>
                        <button className="delete-btn">Delete</button>
                        <button className="update-btn">Update</button>
                    </div>
                ))}
            </section>
    )
    
}
export default GetTask;