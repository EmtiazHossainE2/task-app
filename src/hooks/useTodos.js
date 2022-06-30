
import { useQuery } from 'react-query';
import { BASE_API } from '../config';

const useTodos = () => {
    const { data: todos, isLoading, error, refetch } = useQuery(('todos'), () =>
        fetch(`${BASE_API}/todos`)
            .then(res => res.json())
    )
    return {todos, isLoading, error, refetch}
}

export default useTodos ;