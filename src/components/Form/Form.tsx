import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

interface FormProps {
    onSubmitForm: (task: Task) => void;
}

const Form = (props: FormProps) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (title.length === 0 || description.length === 0) {
            alert("Please add title and description");

            return;
        }

        const newDate = new Date(Date.now());

        const task: Task = {
            key: Math.random(),
            title: title,
            description: description,
            time: newDate,
        };

        setTitle("");
        setDescription("");
        setIsFormVisible(false);

        props.onSubmitForm(task);
    };

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setDescription(event.target.value);
    };

    const handleFormVisibility = () => {
        isFormVisible ? setIsFormVisible(false) : setIsFormVisible(true);
        setTitle("");
        setDescription("");
    };

    return (
        <Card className="bg-orange-200 w-1/2">
            {!isFormVisible && (
                <Button type="Button" onClick={handleFormVisibility}>
                    Add task
                </Button>
            )}
            {isFormVisible && (
                <form
                    action=""
                    className="flex flex-col space-y-5"
                    onSubmit={handleSubmit}
                >
                    <label htmlFor="" className="w-full">
                        Title
                        <input
                            type="text"
                            value={title}
                            onChange={handleTitleChange}
                            className="block w-full rounded-lg p-1"
                        />
                    </label>
                    <label htmlFor="" className="w-full">
                        Description
                        <textarea
                            name=""
                            id=""
                            value={description}
                            onChange={handleDescriptionChange}
                            className="block w-full rounded-lg p-1"
                        ></textarea>
                    </label>
                    <span className="space-x-4">
                        <Button type="submit">Submit</Button>
                        <Button type="Button" onClick={handleFormVisibility}>
                            Cancel
                        </Button>
                    </span>
                </form>
            )}
        </Card>
    );
};

export default Form;
