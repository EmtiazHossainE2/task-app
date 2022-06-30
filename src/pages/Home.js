import React from 'react';
import AddForm from '../components/AddFrom';
import Layout from '../components/Layout';
import Page from '../components/Page';
import TodoList from '../components/TodoList';

const Home = () => {
    return (
        <Page>
            <Layout>
                <AddForm/>
                <TodoList/>
            </Layout>
        </Page>
    );
};

export default Home;