interface Task {
    key: number,
    title: string,
    description: string,
    time: Date
}

interface ListProps {
    tasks: Array<Task>;
    onRemoveItem: Function;
}

interface listItemProps {
    task: Task, 
    chainedProps: ListProps
};
