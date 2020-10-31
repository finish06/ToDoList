import React, {Fragment, useState} from "react";

const EditTodo = ( {todo} ) => {
    const [description, setDescription] = useState(todo.description)

    // function to edit description
    const updateDescription = async(e) => {
        e.preventDefault();
        try {
            const body = {description};
            const response = await fetch(`${process.env.REACT_APP_SERVER_HOSTNAME}/todos/${todo.todo_id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })

            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <Fragment>
           <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${todo.todo_id}`}>
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                </svg>
            </button>

            <div className="modal" id={`id${todo.todo_id}`}>
            <div className="modal-dialog">
                <div className="modal-content">

                <div className="modal-header">
                    <h4 className="modal-title">Edit Todo</h4>
                    <button type="button" className="close" data-dismiss="modal" onClick={() => setDescription(todo.description)}>&times;</button>
                </div>

                <div className="modal-body">
                    <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}></input> 
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-success" data-dismiss="modal" onClick={e => updateDescription(e)}>Save</button>
                    <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => setDescription(todo.description)}>Close</button>
                </div>

                </div>
            </div>
            </div>
        </Fragment>
    )
}

export default EditTodo;