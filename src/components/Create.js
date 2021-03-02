import React from 'react';
import { FaRegGrinAlt, FaRegImage, FaVideo } from 'react-icons/fa';

const Create = () => {
    return (
        <div className="create">
            <div className="create__first">
                <div className="create__first-img">
                    <span>
                        <img src="/images/p1.jpg" alt="user" />
                    </span>
                </div>

                <div className="create__first-input">
                    <input type="text" className="create__first-inputs"
                    placeholder="What's on your mind, Ruth?" />
                </div>
            </div>
            <div className="create__second">
                <span className="create__second-icon">
                    <FaVideo className="redColor"/><span className="text">Live Video</span>
                </span>

                <span className="create__second-icon">
                    <FaRegImage className="greenColor"/><span className="text">Photo/Video</span>
                </span>

                <span className="create__second-icon">
                    <FaRegGrinAlt className="orangeColor"/><span className="text">Feeling/Activity</span>
                </span>

                
            </div>
        </div>
    )
}
export default Create;