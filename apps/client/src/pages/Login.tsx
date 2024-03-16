export default function(){
    return (
        <>
        <form action="" className="w-screen h-screen bg-black flex flex-col justify-center items-center p-6">
            <label htmlFor="email" className="text-xl text-white m-2">Username</label>
            <input type="text" className="w-full p-2 rounded-xl"/>
            <label htmlFor="password" className="text-white text-xl m-2 text-left">Passsword</label>
            <input type="password" className="w-full p-2 rounded-xl"/>
            <button type="submit" className="text-white text-xl m-2 bg-red-400 w-full p-2 rounded-lg mx-10">Login</button>
        </form>
        </>
    )
}