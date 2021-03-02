import React, { useState } from "react";

const SideBar = () => {
    const [state, setState] = useState([
        { id: 1, image: '/images/p1.jpg', name: 'Flutter Development' },
        { id: 2, image: '/images/p2.jpg', name: 'PHP Development' },
        { id: 3, image: '/images/p3.jpg', name: 'ReactNative Development' },
        { id: 4, image: '/images/p4.jpg', name: 'Node Development' },
        { id: 5, image: '/images/p5.jpg', name: 'Vue js Development' },
        { id: 6, image: '/images/p6.jpg', name: 'Moss js Development' },



    ]);
    return (
        <div className="sidebar">
            {state.map((info) => (
                <div className="sidebar__list" key={info.id}>
                    <div className="sidebar__list-img">
                        <img src={info.image} alt="mossimage" />

                    </div>

                    <div className="sidebar__list-name">{info.name}</div>
                </div>

            ))}

        </div>
    )
}

export default SideBar;