import "./style.css";
import defaultpfp from "../../assets/default.jpg";

const IndividualChatComponent = () =>{
    return (
        <div className = "main-container">
            <div className = "home-header">
                <div className = "nav-tabs">
                    <div className = "direct-tab">
                        <button className = "direct-button" active>Direct Messages</button>
                    </div>
                    <div className = "group-tab">
                        <button className = "group-button">Groups</button>
                    </div>
                </div>
                <div className = "profile-button-container">
                    <button className = "profile-button"><img id = "pfp" src={defaultpfp}></img></button>
                </div>
            </div>

            <div className = "chat-previews-container">
                <ChatPreviewComponent chatName = "Person A"></ChatPreviewComponent>
            </div>
        </div>
    );
}



const ChatPreviewComponent = (props) =>{
    return (
        <div className = "chat-preview-container">
            <p className = "chatName">{props.chatName}</p>
        </div>
    );
}

export default IndividualChatComponent;