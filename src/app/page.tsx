import React from 'react'

export default function page() {
  return (
                  <div id="home" className="h-[1132px] w-[1440px] text-[#FFFFFF] bg-[#252B42] -top-[590px] -left-[720px]   ">
       <div id="container" className=" w-[1046px] h-[1028px] absolute top-[104px] left-[197px] py-10 gap-10 ">
          <div id="main-content" className=" flex flex-col gap-10 place-items-center text-center py-10" >
    <h5 className="text-[#23A6F0] font-bold text-base tracking-[0.1px] w-[77px] h-6">Welcome</h5>
    <h1 className="font-bold text-[58px] leading-[58px] w-[542px] h-[160px] ">Selling on the internet like a pro</h1>
    <h4 className="font-normal text-xl leading-[30px] tracking-[0.2px] w-[536px] h-[50px] ">We know how large objects will act, but things on a small scale just do not act that way.</h4>
      <div className='w-[365px] h-[52px] flex gap-[10px] '>
      <button className='bg-[#23A6F0] py-4 px-10 rounded-[5px] font-bold text-sm leading-[22px] tracking-[0.2px] w-[193px] h-[52px] '>Get Quote Now</button>
      <button className='  text-[#23A6F0] border border-[#23A6F0] py-[15px] rounded-[5px] font-bold text-sm leading-[22px] tracking-[0.2px] w-[162px] h-[52px] '>Learn More</button>
      </div>
    </div>

    <div className='w-[1046px] h-[292px] flex gap-[30px] py-10 '>
            <div className='w-[328px] h-[292px] flex flex-col gap-5 bg-[#FFFFFF] py-[35px] px-10  '>
              <div className='bg-[#FFDCD1] h-[76px] w-[70px] flex rounded-[10px] py-5 px-[19px] gap-[10px]  '></div>
                  <h3 className='font-bold text-base tracking-[0.1px] text-[#252B42] '>training Courses</h3>
                  <div className='w-[50px] h-[2px] bg-[#E74040] '></div>
                  <p className='font-normal text-sm tracking-[0.2px] text-[#737373] '>The gradual accumulation of information about atomic and small-scale behaviour...</p>

            </div>

            <div className='w-[328px] h-[292px] flex flex-col gap-5 bg-[#FFFFFF] py-[35px] px-10  '>
            <div className='bg-[#B9EAA8] h-[76px] w-[70px] flex rounded-[10px] py-5 px-[19px] gap-[10px]  '></div>
            <h3 className='font-bold text-base tracking-[0.1px] text-[#252B42] '>2,769 online courses</h3>
            <div className='w-[50px] h-[2px] bg-[#E74040] '></div>
            <p className='font-normal text-sm tracking-[0.2px] text-[#737373] '>The gradual accumulation of information about atomic and small-scale behaviour...</p>
            </div>

            <div className='w-[328px] h-[292px] flex flex-col gap-5 bg-[#23A6F0] py-[35px] px-10 text-[#FFFFFF] '>
            <div className='bg-[#FFFFFF] h-[76px] w-[70px] flex rounded-[10px] py-5 px-[19px] gap-[10px]  '></div>
            <h3 className='font-bold text-base tracking-[0.1px] '>training Courses</h3>
            <div className='w-[50px] h-[2px] bg-[#FFFFFF] '></div>
            <p className='font-normal text-sm tracking-[0.2px] '>The gradual accumulation of information about atomic and small-scale behaviour...</p>
            </div>

        </div>

        </div>

      </div>
  )
}
