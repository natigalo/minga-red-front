import logom from "/assets/images/logoFooter.svg"
import asideimg from "/assets/images/asideWelcome.png"
import { Link as Anchor } from "react-router-dom";

export default function SignIn() {
    return (
        <main className="flex md:relative  items-center w-full ">

            <img src={asideimg} alt="" className="w-[50vw] hidden md:flex  object-top object-cover" />

            <div className="flex flex-col md:w-[50vw] w-full pt-[15%] pb-[10%] md:pb-[%] items-center md:pt-[5%] lg:pt-[0%] xl:pt-[0%]">
                <img src={logom} alt="logo" />
                <p className="font-semibold text-[32px]">Welcome <span className="text-[#4338CA]">back</span>!</p>
                <p className="font-semibold text-[12px] w-[50%] h-[28px] text-center">Discover manga, manhua and manhwa, track your progress, have fun, read manga.</p>
                <form className="flex flex-col w-full items-center mt-[59px]">
                    <input type="email" placeholder="Email" className="border-2 border-gray-400 w-[50%] h-[48px] rounded-[10px] font-roboto font-medium text-[12px] ps-[14px]" />
                    <input type="password" placeholder="Password" className="mt-[32px] border-2 border-gray-400 w-[50%] h-[48px] rounded-[10px] font-roboto font-medium text-[12px] ps-[14px]" />
                    <input type="button" value="Sign In" className="mt-[13px] w-[50%] h-[48px] bg-[#4338CA] rounded-[10px] font-roboto font-bold text-[14px] text-white" />
                    <input type="button" value="Sign in with Google" className="mt-[16px] font-roboto font-medium text-[14px] w-[50%] h-[48px] text-gray-400 border-2 border-gray-400 rounded-[10px]" />
                </form>
                <p className="mt-[16px] font-roboto font-medium text-[14px]">  you don't have an account yet?{" "} <Anchor className="text-[#4338CA]" to={'/'}>Register</Anchor></p>
                <p className="mt-[17px] font-roboto font-medium text-[14px]">Go back to{" "}<Anchor className="text-[#4338CA] hover:cursor-pointer" to={'/'} >  home page </Anchor></p>
            </div>
        </main>


    )
}