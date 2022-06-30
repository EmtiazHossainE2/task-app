import React from 'react';
import Layout from '../components/Layout';
import Page from '../components/Page';
import TodoList from '../components/TodoList';

const Todos = () => {
    return (
        <Page>
            <Layout>
                <h2 className='text-center py-5 text-2xl font-bold'>All Task</h2>
                <TodoList />
            </Layout>
        </Page>
    );
};

export default Todos;