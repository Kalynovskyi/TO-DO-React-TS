interface CardProps {
    children: React.ReactNode;
    className?: string;
}

const Card = (props: CardProps) => {

    const className = props.className ? props.className : 'bg-white';

    return(
        <div className={`rounded-3xl p-5 ${className}`}>{props.children}</div>
    )
}

export default Card;