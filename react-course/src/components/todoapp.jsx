import React, { useReducer, useState } from "react";

function reducer(state, action) {

    switch (action.type) {

        case "ADD_TASK":

            return [
                ...state,
                {
                    id: Date.now(),
                    text: action.payload,
                    completed: false
                }
            ];

        case "DELETE_TASK":

            return state.filter((todo) => todo.id !== action.payload);

        case "TOGGLE_TASK":

            return state.map((todo) =>

                todo.id === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );

        default:
            return state;
    }
}

function TODO() {

    const [task, setTask] = useState("");

    const [todos, dispatch] = useReducer(reducer, []);

    function handleAddTask() {

        if (task.trim() === "") {
            return;
        }

        dispatch({
            type: "ADD_TASK",
            payload: task
        });

        setTask("");
    }

    const completedTasks = todos.filter(
        (todo) => todo.completed
    ).length;

    return (

        <div>

            <h1>TODO APP</h1>

            <input
                type="text"
                placeholder="Enter Task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />

            <button onClick={handleAddTask}>
                Add
            </button>

            <hr />

            {todos.map((todo, index) => (

                <div key={todo.id}>

                    <h3
                        style={{
                            textDecoration:
                                todo.completed
                                    ? "line-through"
                                    : "none"
                        }}
                    >
                        {index + 1}. {todo.text}
                    </h3>

                    <button
                        onClick={() =>
                            dispatch({
                                type: "TOGGLE_TASK",
                                payload: todo.id
                            })
                        }
                    >
                        {todo.completed ? "Completed ✅" : "Complete"}
                    </button>

                    <button
                        onClick={() =>
                            dispatch({
                                type: "DELETE_TASK",
                                payload: todo.id
                            })
                        }
                    >
                        Delete ❌
                    </button>

                    <hr />

                </div>
            ))}

            <h2>Total Tasks: {todos.length}</h2>

            <h2>Completed: {completedTasks}</h2>

        </div>
    );
}

export default TODO;