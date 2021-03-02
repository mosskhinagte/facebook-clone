import React from 'react';
import { FaVideo, FaPhone, FaRegWindowClose } from "react-icons/fa";


const ChatBox = (props) => {
    const closeChat = () => {
        props.closeChat();
    }


    return (
        <>
            {props.state ? (
                <div className="chatBox">
                    <div className="chat__header">
                        <div className="chat__first">
                            <div className="chat__header-img">
                                <img src={props.current.image ? props.current.image : ""} alt="moss" />
                            </div>

                            <div className="chat__header-name">
                                {props.current.name ? props.current.name : ""}
                            </div>
                        </div>

                        <div className="chat__second">
                            <FaVideo className="chat__header-icons" />
                            <FaPhone className="chat__header-icons" />
                            <FaRegWindowClose className="chat__header-icons"
                                onClick={closeChat} />
                        </div>
                    </div>

                    <div className="chat__body">
                        <div className="chat_left">
                            <p className="msg">This is how you people are doing an every single day</p>
                        </div>

                        <div className="chat_right">
                            <p className="msg">This is how you</p>
                        </div>

                        <div className="chat_left">
                            <p className="msg">This is how you people are doing an every single day</p>
                        </div>

                        <div className="chat_right">
                            <p className="msg">This is how you people are doing an every single day</p>
                        </div>
                    </div>

                    <div className="chat__footer">
                        <input type="text" className="chat__input" placeholder="enter your information"></input>

                    </div>
                </div>
            ) : (
                    ""
                )}

        </>
    )
}

export default ChatBox;