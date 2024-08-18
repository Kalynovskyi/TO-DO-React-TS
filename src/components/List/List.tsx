import ListItem from "./ListItem";

const List = (props: ListProps) => {

    return (
        <ul className="space-y-5 w-2/4">
            {props.tasks.map((task: Task) => (
                <ListItem task={task} key={task.key} chainedProps={props}></ListItem>
            ))}
        </ul>
    );
};

export default List;
