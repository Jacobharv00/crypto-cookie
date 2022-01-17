import { BsShieldLockFill } from 'react-icons/bs'
import { RiExchangeFill } from 'react-icons/ri'
import { RiTimerFlashFill } from 'react-icons/ri'

const ServiceCard = ( { color, title, icon, subtitle } ) => (
  <div className='flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer border-2 border-[#311F33] hover:shadow-2xl'>
    <div className={ `w-10 h-10 rounded-full flex justify-center items-center ${color}` }>
      { icon }
    </div>
    <div className='ml-5 flex flex-col flex-1'>
      <h3 className='mt-2 text-gradient text-lg'>{ title }</h3>
      <p className='mt-2 text-[#C7E5E3] font-bold text-sm md:w-9/12'>{ subtitle }</p>
    </div>
  </div>
)

const Services = () => {
  return (
    <div className='flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services'>
      <div className='flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4'>
        <div className='flex-1 flex flex-col justify-start items-start'>
          <h1 className='text-gradient text-3xl sm:text-5xl py-2'>Services that
            <br />
            make a difference
          </h1>
        </div>
        <div className='flex-1 flex flex-col justify-start items-center'>
          <ServiceCard
            color='bg-[#4E80A6]'
            title='Security Guaranteed'
            icon={ <BsShieldLockFill fontSize={ 21 } className='text-white' /> }
            subtitle='We guarantee your security when using Crypto Cookie. We always maintain privacy and the quality of our products daily.'
          />
          <ServiceCard
            color='bg-[#B15980]'
            title='Best exchange rates'
            icon={ <RiExchangeFill fontSize={ 25 } className='text-white' /> }
            subtitle='Crypto Cookie has the lowest exchange rates in the biz. If not email us and we will get you there.'
          />
          <ServiceCard
            color='bg-[#E15514]'
            title='Fastest transactions'
            icon={ <RiTimerFlashFill fontSize={ 25 } className='text-white' /> }
            subtitle='No one has time for slow transactions! Trade with Crypto Cookie for the fastest transaction speeds around.'
          />
        </div>
      </div>
    </div>
  )
}

export default Services
