import React, { Fragment, useEffect, useState} from "react";
import moment from 'moment'
import EditTodo from "./EditTodo";

const ListTodos = () => {

    const [todos, setTodos] = useState([])

    // Delete function
    const deleteTodo = async(id) => {
        try {
            // const todo = todos.filter(todo => todo.todo_id === id);
            // const body = todos.active_flag;
            const response = await fetch(`${process.env.REACT_APP_SERVER_HOSTNAME}/todos/${id}`, {
                method: "DELETE"
            });
            // Return only remaining active todos without querying the database
            setTodos(todos.filter(todo => todo.todo_id !== id))
        } catch (err) {
            console.error(err.message);
        }
    }

    const getTodos = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_HOSTNAME}/todos`);
            const jsonData = await response.json();
            jsonData.map(data => data.created_date = moment(Date.parse(data.created_date)).format('MM/DD/YYYY'));
            setTodos(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <Fragment>
            {" "}
            <table className="table mt-5 text-center">
                <thead>
                <tr>
                    <th>Created</th>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                    {/*                    
                    <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                    </tr>
                    */}
                    {todos.map(todo => (
                        <tr key={todo.todo_id}>
                            <td>{todo.created_date}</td>
                            <td>{todo.description}</td>
                            <td>
                                <EditTodo todo={todo}/>
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    )
};

export default ListTodos;