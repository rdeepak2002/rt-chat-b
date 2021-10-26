import "./style.css";

const ChatComponent = () =>{
    return (
        <div className = "main-container">
            <div className = "chat-container">
                <div className = "chat-header">
                    <p className = "chat-title">Chat X</p>
                </div>
                <div className = "chat-messages-container">
                    <MessageComponent username = "Person A" message = "hello"/>
                    <MessageComponent username = "Person B" message = "hi"/>
                </div>
                <div className = "input-container">
                    <form className = "input-form">
                        <input className = "message-input" placeholder = "Type a message..."></input>
                    </form>
                    <button className = "send-button">{">>"}</button>
                </div>
            </div>
        </div>
    );
}

const MessageComponent = (props) =>{
    return (
        <div className = "message-container">
            <p className = "username">{props.username}</p>
            <p className = "message">{props.message}</p>
        </div>
    );
}

export default ChatComponent;