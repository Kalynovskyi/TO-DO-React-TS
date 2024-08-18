import Card from "../UI/Card";
import convertTime from "../../helperFunctions/convertTime";

const ListItem = (props: listItemProps) => {
    const date = props.task.time.toLocaleDateString();
    const time = convertTime(props.task.time.getHours().toString(), props.task.time.getMinutes().toString());
    
    const handleOnClick = () => {
        props.chainedProps.onRemoveItem(props.task.key);
    }

    return(
        <li className="w-full relative">
            <Card className="bg-slate-400">
                <h4 className="text-xl font-bold">{props.task.title}</h4>
                <p>{props.task.description}</p>
                <p className="text-xs font-thin">{date} {time}</p>
            </Card>

            <div onClick={handleOnClick} className="rounded-full bg-white absolute top-4 right-4 w-10 h-10 flex justify-center items-center cursor-pointer"> <span>X</span></div>
        </li>
    );
}

export default ListItem;