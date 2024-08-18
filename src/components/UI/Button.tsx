interface ButtonProps {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: any;
}

const Button = (props: ButtonProps) => {
    return (
        <button
            className="p-4 text-white bg-emerald-900 hover:opacity-85 transition-all rounded-2xl"
            onClick={props.onClick}
            type={props.type}
        >
            {props.children}
        </button>
    );
};

export default Button;
