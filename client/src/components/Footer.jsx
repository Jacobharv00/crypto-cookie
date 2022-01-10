import cookie from '../../images/cookie1.png'

const Footer = () => {
  return (
    <div className='w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer'>
      <div className='w-full flex sm:flex-row flex-col justify-between items-center my-4'>
        <div className='flex flex-[0.5] justify-center items-center'>
          <img src={ cookie } alt='logo' className='w-[3vw] bg-cyan-300 rounded-full p-1' />
          <h3 className='text-3xl pl-2 mt-4 text-gradient'>Crypto Cookie</h3>
        </div>
        <div className='flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full'>
          <p className='text-gradient text-base text-center mx-2 cursor-pointer'>
            Market
          </p>
          <p className='text-gradient text-base text-center mx-2 cursor-pointer'>
            Exchange
          </p>
          <p className='text-gradient text-base text-center mx-2 cursor-pointer'>
            Tutorials
          </p>
          <p className='text-gradient text-base text-center mx-2 cursor-pointer'>
            Wallets
          </p>
        </div>
      </div>
      <div className='flex justify-center items-center flex-col mt-5'>
        <p className='text-gradient text-sm text-center'>
          Come Join Us
        </p>
        <p className='text-gradient text-sm text-center'>
          cryptocookie@gmail.com
        </p>
      </div>
      <div className='sm:w-[90%] w-full h-[0.25px] bg-cyan-700 mt-5' />
      <div className='sm:w-[90%] w-full flex justify-between items-center mt-3'>
        <p className='text-gradient text-sm text-center'>
          @cryptocookie2022
        </p>
        <p className='text-gradient text-sm text-center'>
          All rights reserved
        </p>
      </div>
    </div>
  )
}

export default Footer
