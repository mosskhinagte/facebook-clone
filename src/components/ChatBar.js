import React from 'react';

const ChatBar = (props) => {
    const [state, setState] = React.useState([
        { id: 1, image: '/images/p1.jpg', name: 'Katherine' },
        { id: 2, image: '/images/p2.jpg', name: 'Monika' },
        { id: 3, image: '/images/p3.jpg', name: 'Alisha' },
        { id: 4, image: '/images/p4.jpg', name: 'Niharika' },
        { id: 5, image: '/images/p5.jpg', name: 'Priyanka' },
        { id: 6, image: '/images/p6.jpg', name: 'Ketrina William' },
        { id: 7, image: '/images/p7.jpg', name: 'Niki' },
        { id: 8, image: '/images/p8.jpg', name: 'Linkedin' },
        { id: 9, image: '/images/p9.jpg', name: 'Mark' },
        { id: 10, image: '/images/p10.jpg', name: 'Jack Ma' },


    ]);


    const openChat = (user) => {
        props.openChat(user);
    };
    return (
        <div className="chatBar">
            {state.map((user) => (
                <div
                    className="chatBar__list"
                    key={user.id}
                    onClick={() => openChat(user)}
                >
                    <div className="chatBar__list-img">
                        <img src={user.image} alt="user" />
                        <span className="status"></span>
                    </div>
                    <div className="chatBar__list-name">{user.name}</div>
                </div>
            ))}
        </div>
    );
};

export default ChatBar;