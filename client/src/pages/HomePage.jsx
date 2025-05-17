import React from 'react'
import Sidebar from "../components/Sidebar.jsx";
import ChatContainer from "../components/ChatContainer.jsx";
import RightSidebar from "../components/RightSidebar.jsx";

const HomePage = () => {
    return (
        <div className='border w-full h-screen sm:p-[15%] sm:py-[5%]'>
            <div>
                <Sidebar/>
                <ChatContainer/>
                <RightSidebar/>
            </div>
        </div>
    )
}
export default HomePage
