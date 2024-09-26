import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [listTodo, setListTodo] = useState([]);

    const fetchTodo = async () => {
        try {
            const res = await axios.get('http://localhost:3001/todos', {
                // Use credentials to fix CORS issue on IDX
                withCredentials: true
            });
            setListTodo(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchTodo();
    }, []);

    return (
        <div className="mx-[20%]">
            <ul role="list" class="divide-y divide-gray-100">
                {listTodo.map((todo) => (
                    <li key={todo.id} className="py-[10px]">
                        <div class="relative flex gap-x-3">
                            <div class="flex h-6 items-center">
                                <input
                                    id={todo.id}
                                    type="checkbox"
                                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    defaultChecked={todo.completed}
                                />
                            </div>
                            <div class="text-sm leading-6">
                                <label
                                    for={todo.id}
                                    class="font-bold text-gray-900"
                                >
                                    {todo.title}
                                </label>
                                <p class="text-gray-500">{todo.description}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
