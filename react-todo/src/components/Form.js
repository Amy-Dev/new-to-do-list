import React from "react";



const Form = ({setInputText}) => {
    // Here I can write javascript code and function
    // Hanler = gestionnaire  & "e" (event) = évènement
    /* Here we can use onClick or onChange */
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value)
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
    };
    return(
        <form>
            <input onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler}className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;