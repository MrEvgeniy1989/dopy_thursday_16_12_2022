import React, {useState} from 'react';

type TasksType = {
    id: number
    title: string
}

type CustomType = TasksType & {
    isDone: boolean
}

export const LocalStorage = () => {
    const [showTasks, setShowTasks] = useState<CustomType[]>([])

    const tasks: CustomType[] = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
    ]

    const saveTodolistHandler = () => {
        const StateString = JSON.stringify(tasks)
        localStorage.setItem('taskKey', StateString)
    }

    const showFromTodolistHandler = () => {
        const StateString = localStorage.getItem('taskKey')
        if (StateString !== null) setShowTasks(JSON.parse(StateString))
    }

    const removeLocalStorage = () => {
        localStorage.removeItem('taskKey')
        // localStorage.clear()
        setShowTasks([])
    }

    return (
        <div>
            <h1>LocalStorage</h1>
            <button onClick={saveTodolistHandler}>SaveTodo</button>
            <button onClick={showFromTodolistHandler}>ShowFromTodo</button>
            <button onClick={removeLocalStorage}>RemoveLocalStorage</button>

            {
                showTasks.length > 0
                    ? <ul>
                        {showTasks.map(t =>
                            <li key={t.id}>
                                <input type="checkbox" checked={t.isDone}/>
                                <span>{t.title}</span>
                            </li>
                        )
                        }
                    </ul>
                    : <div>Empty</div>
            }

        </div>
    );
};