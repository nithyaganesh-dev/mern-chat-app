import React from 'react'
import assets from "../assets/assets.js";

const ChatContainer = ({selectedUser, setSelectedUser}) => {
    return selectedUser ? (
        <section className="h-full overflow-scroll relative backdrop-blur-lg">
            <header className="flex items-center gap-3 py-3 mx-4 border-b border-stone-500">
                <img src={assets.profile_martin} alt="Avatar" className="w-8 rounded-full"/>
                <p className="flex-1 text-lg text-white
                flex items-center gap-2">Martin Johnson<span className='w-2 h-2 rounded-full bg-green-500'></span></p>
                <img onClick={() => setSelectedUser(null)} src={assets.arrow_icon} alt="Arrow" className="md:hidden max-w-7"/>
                <img src={assets.help_icon} alt="Help" className="max-md:hidden max-w-5"/>
            </header>
        </section>
    ) : (
        <section className="flex flex-col items-center justify-center gap-2
        tex-gray-500 bg-white/10 max-md:hidden">
            <img src={assets.logo_icon} alt="Logo" className="max-w-16"/>
            <p className="text-lg font-medium text-white">Chat anytime, anywhere</p>
        </section>
    )
}
export default ChatContainer
