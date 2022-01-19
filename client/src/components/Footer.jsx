import cookie from '../../images/cookie1.png'

const Footer = () => {
  return (
    <div className='w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer'>
      <div className='w-full flex sm:flex-row flex-col justify-between items-center my-4'>
        <div className='flex flex-[0.5] justify-center items-center'>
          <img src={ cookie } alt='logo' className='w-[3vw] bg-[#8A4285] rounded-full p-1 hover:bg-cyan-300 hover:animate-spin' />
          <h3 className='text-3xl pl-2 mt-4 text-gradient hover:animate-pulse'>Crypto Cookie</h3>
        </div>
        <div className='flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full'>
          <a href='https://www.google.com/finance/quote/ETH-USD?sa=X&ved=2ahUKEwjUgpSUwLn1AhULP30KHT-PCcwQ-fUHegQIKRAS&window=6M' target='_blank' className='text-gradient text-base text-center mx-2 cursor-pointer hover:text-xl transition-all'>
            Market
          </a>
          <a href='https://fx-rate.net/ETH/USD/' target='_blank' className='text-gradient text-base text-center mx-2 cursor-pointer hover:text-xl transition-all'>
            Exchange
          </a>
          <a href='https://ethereum.org/en/developers/tutorials/' target='_blank' className='text-gradient text-base text-center mx-2 cursor-pointer hover:text-xl transition-all'>
            Tutorials
          </a>
          <a href='https://metamask.io/' target='_blank' className='text-gradient text-base text-center mx-2 cursor-pointer hover:text-xl transition-all'>
            Wallets
          </a>
        </div>
      </div>
      <div className='flex justify-center items-center flex-col mt-5'>
        <p className='text-gradient text-sm text-center font-bold'>
          Come Join Us
        </p>
        <a href='mailto:cryptocookie@gmail.com' className='text-gradient text-sm text-center font-bold hover:text-xl transition-all'>
          cryptocookie@gmail.com
        </a>
      </div>
      <div className='sm:w-[90%] w-full h-[0.25px] bg-cyan-700 mt-5' />
      <div className='sm:w-[90%] w-full flex justify-between items-center mt-3'>
        <p className='text-gradient text-sm text-center font-bold'>
          @cryptocookie2022
        </p>
        <p className='text-gradient text-sm text-center font-bold'>
          All rights reserved
        </p>
      </div>
    </div>
  )
}

export default Footer
