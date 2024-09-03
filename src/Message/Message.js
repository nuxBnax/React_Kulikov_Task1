function Message({ name, group, message }) {

    return (
        <div className="block">
            <h2 className="name">Меня зовут {name}</h2>
            <h3 className="group">Я учусь в группе № {group}</h3>
            <h4 className="message">Наша группа говорит: {message}</h4>
        </div>
    );
}

export default Message;