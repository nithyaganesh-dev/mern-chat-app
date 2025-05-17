import assets, {userDummyData} from "../assets/assets.js";
import {useNavigate} from "react-router-dom";

const Sidebar = ({selectedUser, setSelectedUser}) => {
    const navigate = useNavigate()

    return (
        <div className={`bg-[#8185B2]/10 h-full p-5 rounded-r-xl overflow-y-scroll text-white
        ${selectedUser ? 'max-md:hidden': ''}`}>
            <header className="pb-5">
                <section className="flex justify-between items-center">
                    <img src={assets.logo} alt="logo" className="max-w-40"/>
                    <div className="relative py-2 group">
                        <img src={assets.menu_icon} alt="menu" className="max-h-5"/>
                        <div className="absolute top-full right-0 w-32 z-20 bg-[#282142]
                        rounded-md  p-5 border border-gray-600 text-gray-100 hidden group-hover:block">
                            <p onClick={() => navigate('/profile')} className="cursor-pointer text-sm">Edit Profile</p>
                            <hr className="my-2 border-top border-gray-500"/>
                            <p className="cursor-pointer text-sm">Logout</p>
                        </div>
                    </div>
                </section>
                <section className="bg-[#282142] rounded-full flex justify-center items-center
                gap-2 py-3 px-4 mt-5">
                    <img src={assets.search_icon} alt="Search" className="w-3" />
                    <input className="bg-transparent border-none outline-none text-white
                    text-xs placeholder-[#c8c8c8] flex-1" type="text" placeholder="Search User"/>
                </section>
            </header>

            <main className="flex flex-col ">
                {userDummyData.map((user, index) => (
                    <div onClick={() => setSelectedUser(user)}
                        key={index} className={`relative flex items-center gap-2 p-2 pl-4 
                        rounded cursor-pointer max-sm:text-sm 
                    ${selectedUser?._id === user._id && 'bg-[#282142]/50'}`}>
                        <img src={user?.profilePic || assets.avatar_icon} alt="Avatar"
                        className="w-[35px] aspect-[1/1] rounded-full"/>
                        <div className='flex flex-col leading-5'>
                            <p>{user.fullName}</p>
                            {
                                index < 3
                                    ? <span className='text-green-400 text-xs'>Online</span>
                                    : <span className='text-neutral-400 text-xs'>Offline</span>
                            }
                        </div>
                        {
                            index > 2 && <p className='absolute top-4 right-4
                            text-xs h-5 w-5 flex justify-center items-center rounded-full
                            bg-violet-500/50'>{index}</p>
                        }
                    </div>
                ))}
            </main>
        </div>
    )
}
export default Sidebar
