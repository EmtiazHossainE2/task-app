import React from 'react';
import AddForm from '../components/AddFrom';
import Layout from '../components/Layout';
import Page from '../components/Page';
import TodoList from '../components/TodoList';
import Loading from '../components/Loading';
import useTodos from '../hooks/useTodos';

const Home = () => {
    const {todos, isLoading, refetch} = useTodos()

    if (isLoading) {
        return <Loading />
    }
    return (
        <Page>
            <Layout>
                <AddForm refetch={refetch}/>
                <TodoList todos={todos}/>
            </Layout>
        </Page>
    );
};

export default Home;