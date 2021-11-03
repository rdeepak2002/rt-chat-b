import "./style.css";
import {useEffect, useState} from "react";

import io from "socket.io-client";

const ChatComponent = () =>{
    const [messages, setMessages] = useState([]);

    const [chatMessage, setChatMessage] = useState("");

    const [socket, setSocket] = useState(null);

    useEffect(() => {
        // create socket connection to server
        const newSocket = io("http://localhost:8080/");
        setSocket(newSocket);

        // listen for message_sent 
        newSocket.on("message_sent",(data) => {
            console.log("received message", data);

            // add new message to array
            messages.push(data);
            setMessages([...messages]);
        });

        return () => newSocket.close();

    }, [setSocket]);
    return (
        <div className = "main-container">
            <div className = "chat-container">
                <div className = "chat-header">
                    <p className = "chat-title">Chat X</p>
                </div>
                <div className = "chat-messages-container">
                    {
                        messages.map((message, index) => {
                            return(
                                <MessageComponent key={index} username={message.username} message={message.message}/>
                            );
                        })
                    }
                </div>
                <div className = "input-container">
                    <form className="input-form" onSubmit={(e) => {
                        e.preventDefault();

                        // data to send to everyone
                        const data = {
                            username: socket.id,
                            message: chatMessage,
                        };
                        setChatMessage("");
                        // send message to socket server
                        socket.emit("message_sent", data);
                    }}>
                    <input className = "message-input" placeholder={"Type a new message..."} value = {chatMessage} onChange={(e)=>{
                        setChatMessage(e.target.value);
                    }}/>
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