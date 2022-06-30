import React from 'react';
import TodoItems from './TodoItems';

const TodoList = () => {
    return (
        <div className='flex flex-col gap-5 mt-10'>
            <TodoItems />
            <TodoItems />
            <TodoItems />
        </div>
    );
};

export default TodoList;