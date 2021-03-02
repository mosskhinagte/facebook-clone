import React from 'react';
import './App.css';
import ChatBar from './components/ChatBar';
import ChatBox from './components/ChatBox';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import Sidebar from './components/SideBar';

function App() {
  const [state, setState] = React.useState(false);
  const [current, setCurrent] = React.useState({});

  const openChat = (user) => {
    setState(true);
    setCurrent(user);
  };


  const closeChat = () => {
    setState(false);
  };





  return (
    <div className="App">
      <Navbar />
      <div className="facebook">

        <Sidebar />

        <Posts />

        <ChatBar openChat={openChat} />

        <ChatBox state={state} current={current} closeChat={closeChat} />
      </div>
    </div>
  );
}

export default App;
