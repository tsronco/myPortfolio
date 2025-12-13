import { Link } from "react-router-dom"

export const NotFound = () => {
    return <main className="w-full min-h-screen bg-[#1d3041] text-white font-sans font-semibold pt-4">

    <h1 className="text-center mb-[25px] text-[30px] font-normal uppercase">Error 404. The page does not exist</h1>

    <p className="block my-[25px] mx-auto max-w-[776px] text-center text-[#bcecf2] font-sans text-[16px] font-normal leading-[24px]">Sorry! The page you are looking for can not be found. Perhaps the page you requested was moved or deleted. It is also possible that you made a small typo when entering the address. Go to the main page.
    </p>
    
    <div className="relative w-full my-[10px] mx-auto min-h-[410px] max-w-[440px]">

      <img className="w-full" src="https://github.com/BlackStar1991/Pictures-for-sharing-/blob/master/404/bigBoom/cloud_warmcasino.png?raw=true" alt="cloud_warmcasino.png" />

      <div className="animate-el1move absolute opacity-100 w-[84px] h-[106px] z-[2] bg-[url('https://github.com/BlackStar1991/Pictures-for-sharing-/blob/master/404/bigBoom/404-1.png?raw=true')] bg-no-repeat bg-center"></div>

      <div className="animate-el2move absolute opacity-100 w-[184px] h-[106px] z-[2] bg-[url('https://github.com/BlackStar1991/Pictures-for-sharing-/blob/master/404/bigBoom/404-2.png?raw=true')] bg-no-repeat bg-center"></div>

      <div className="animate-el3move absolute opacity-100 w-[284px] h-[106px] z-[2] bg-[url('https://github.com/BlackStar1991/Pictures-for-sharing-/blob/master/404/bigBoom/404-3.png?raw=true')] bg-no-repeat bg-center"></div>

      <Link to="/" className="block w-[260px] h-[64px] mt-2 mx-auto rounded-[30px] bg-[#f95801] text-white text-center text-[24px] font-bold leading-[64px] no-underline uppercase shadow-[0_5px_0_#9c1007,_inset_0_0_18px_rgba(253,60,0,0.75)] hover:bg-[#ff7400] focus:bg-[#ff7400]">
        go home
      </Link>
    </div>
  </main>
}