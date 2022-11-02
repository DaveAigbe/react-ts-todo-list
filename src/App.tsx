import {ChangeEvent, FC, useState} from 'react'
import './App.css'
import {ITask} from "./interfaces";
import Task from "./components/Task";
import CompleteCount from "./components/CompleteCount";

/*
* 1. Handle event inputs with the 'name' attribute instead of creating separate functions
* */


const App: FC = () => {
    const [task, setTask] = useState<string>('');
    const [deadline, setDeadline] = useState<number>(0);
    const [taskList, setTaskList] = useState<ITask[] | []>([]);
    const [count, setCount] = useState<number>(0);

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => { // 1.
        if (e.target.name === 'task') {
            setTask(e.target.value)
        } else {
            setDeadline(Number(e.target.value))
        }
    }

    const handleAddTask = (): void => {
        const newTask: ITask = {
            taskName: task,
            days: deadline,
        }

        const updatedTaskList: ITask[] = [newTask, ...taskList]
        setTaskList(updatedTaskList)

        setTask('')
        setDeadline(0)
    }

    const handleRemoveTask = (todo: string): void => {
        if (todo) {
            const deleteTask = taskList.find((task) => task.taskName === todo)
            const updatedTaskList: ITask[] = taskList.filter((task) => task !== deleteTask)

            setTaskList(updatedTaskList)
        }
    }

    const handleCompleteTask = (todo: string): void => {
        handleRemoveTask(todo)
        setCount((prevCount) => prevCount + 1)
    }

    return (
        <div className="App">
            <CompleteCount count={count}/>
            <div className="toDoForm">
                <div className={'toDoInputs'}>
                    <input name={'task'} type="text" placeholder={'Task...'} value={task} onChange={handleChange}/>
                    <input name={'deadline'} type="number" placeholder={'Deadline (Days)...'} value={deadline}
                           onChange={handleChange}
                           min={0}
                    />
                </div>
                <button onClick={handleAddTask}>Add Task</button>
            </div>
            <div className="toDoList">
                {taskList.length > 0 ?
                    (
                        taskList.map((task: ITask, key: number) => {
                            return (
                                <Task task={task}
                                      handleRemoveTask={handleRemoveTask}
                                      handleCompleteTask={handleCompleteTask}
                                      key={key}
                                />
                            )
                        })
                    )
                    :
                    (
                        <h2>No tasks...</h2>
                    )
                }
            </div>
        </div>
    )
}

export default App
