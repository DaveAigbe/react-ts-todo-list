import React, {FC} from 'react';
import {ITask} from "../interfaces";

interface Props {
    task: ITask,
    handleRemoveTask: (todo: string) => void,
    handleCompleteTask: (todo: string) => void
}

const MyComponent: FC<Props> = ({task, handleRemoveTask, handleCompleteTask}) => {
    return (
        <div className={'task'}>
            <h2>Task: {task.taskName}</h2>
            <h2>Deadline: {task.days ? `${task.days} Days` : 'Today'}</h2>
            <div className="task_buttons">
                <button onClick={() => handleRemoveTask(task.taskName)} className={'exit'}>✕</button>
                <button onClick={() => handleCompleteTask(task.taskName)} className={'complete'}>✓</button>
            </div>
        </div>
    );
};

export default MyComponent;
