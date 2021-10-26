import "./style.css";

const IndividualChatComponent = () =>{
    return (
        <div className = "main-container">
            <div className = "home-header">
                <div className = "nav-tabs">
                    <div className = "direct-tab">
                        
                    </div>
                    <div className = "group-tab">

                    </div>
                </div>
                <div className = "profile-button-container">
                    <button className = "profile-button"><img src="../assets/default.jpg"></img></button>
                </div>
            </div>

            <div className = "chat-previews-container">

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