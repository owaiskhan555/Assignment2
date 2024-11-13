import Link from "next/link";

export default function Navbar() {
  return (
    <div className="h-[91px] w-[1322px] absolute left-[59px]  text-[#FFFFFF] ">
    <div className='h-[91px] w-[1322px] '>
      <div className='w-[815px] h-[58px] absolute top-[16px] left-[364px] '>
        <div className='w-[189px] h-[52px] flex absolute top-[3px] left-[626px] gap-[45px] '>
            <div className='w-[41px] h-[22px]'>
              <div className='w-[41px] h-[22px] absolute top-[17px]'>
                <button className='font-bold text-sm leading-[22px] tracking-[0.2px] text-right '>Login</button>
                </div>      
               </div>
                <div className="w-[214px] h-[52px] ">
                <button className="bg-[#23A6F0] rounded-[5px] py-5 px-5 font-bold text-sm leading-[22px] tracking-[0.2px]">JOIN US</button>
                </div>
               </div>
        <ul className="w-[275px] h-6 flex absolute top-[17px] gap-[21px] text-center ">
            <li><Link href='/' className="font-bold text-sm leading-6 tracking-[0.1px] ">Home</Link></li>
            <li><Link href='/' className="font-bold text-sm leading-6 tracking-[0.1px] ">Product</Link></li>
            <li><Link href='/' className="font-bold text-sm leading-6 tracking-[0.1px] ">Pricing</Link></li>
            <li><Link href='/' className="font-bold text-sm leading-6 tracking-[0.1px] ">Contact</Link></li>

        </ul>
              </div>


      
      <div className='h-[13.71px] w-6 absolute top-[39px]'>
        <div className='h-[58px] w-[187px] absolute left-[136px]'>
        <h3 className='font-bold text-2xl tracking-[0.1px] '>BranName</h3>
        </div>
      </div>
    </div>
  </div>
  )
}
