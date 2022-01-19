import { useContext } from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import { SiEthereum } from 'react-icons/si'
import { BsInfoCircle } from 'react-icons/bs'
import { Loader } from '.'
import { TransactionContext } from '../context/TransactionContext'
import { shortenAddress } from '../utils/shortenAddress'

const commonStyles = 'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-[#C7E5E3] text-sm font-bold'

const Input = ( { placeholder, name, type, value, handleChange } ) => (
  <input
    placeholder={ placeholder }
    type={ type }
    step='0.0001'
    value={ value }
    onChange={ ( e ) => handleChange( e, name ) }
    className='my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-small white-glassmorphism'
  />
)

const Welcome = () => {
  const { connectWallet, currentAccount, formData, sendTransaction, handleChange, isLoading } = useContext( TransactionContext )


  const handleSubmit = ( e ) => {
    e.preventDefault()

    const { addressTo, amount, keyword, message } = formData

    if ( !addressTo || !amount || !keyword || !message ) return

    sendTransaction()
  }

  return (
    <div className='flex w-full justify-center items-center'>
      <div className='flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4'>
        <div className='flex flex-1 justify-start flex-col mf:mr-10'>
          <h1 className='text-3xl sm:text-5xl text-white text-gradient py-1'>
            Send Crypto <br /> anywhere in the world
          </h1>
          <p className='text-left mt-5 text-white text-gradient font-light md:w-9/12 w-11/12 text-base'>
            Buy and sell cryptocurrencies on Crypto Cookie.
          </p>
          { !currentAccount && (
            <button
              type='button'
              onClick={ connectWallet }
              className='flex flex-row justify-center items-center my-5 bg-[#311F33] p-3 rounded-full cursor-pointer hover:bg-rose-200'
            >
              <AiFillPlayCircle className='text-rose-700 mr-2' />
              <p className='text-rose-700 text-base font-semibold'>Connect Wallet</p>
            </button>
          ) }
          <div className='grid sm:grid-cols-3 grid-cols-2 w-full mt-10 text-gradient'>
            <div className={ `rounded-tl-2xl ${commonStyles}` }>
              Ethereum
            </div>
            <div className={ commonStyles }>Blockchain</div>
            <div className={ `rounded-tr-2xl ${commonStyles} ` }>
              Web 3.0
            </div>
            <div className={ `rounded-bl-2xl ${commonStyles}` }>
              Reliability
            </div>
            <div className={ commonStyles }>Security</div>
            <div className={ `rounded-br-2xl ${commonStyles}` }>
              Low Fees
            </div>
          </div>
        </div>
        <div className='flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10'>
          <div className='p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism border-1 border-[#C7E5E3] hover:animate-pulse'>
            <div className='flex justify-between flex-col w-full h-full'>
              <div className='flex justify-between items-start'>
                <div className='w-10 h-10 rounded-full border-2 border-[#C7E5E3] flex justify-center items-center'>
                  <SiEthereum fontSize={ 21 } color='#8A4285' />
                </div>
                <BsInfoCircle fontSize={ 17 } color='#C7E5E3' />
              </div>
              <div>
                <p className='text-gradient text-sm'>
                  { shortenAddress( currentAccount ) }
                </p>
                <p className='text-gradient font-semibold text-lg mt-1'>
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div className='p-5 sm:w-96 w-full flex flex-col justify-start items-center purple-glassmorphism border-1 border-[#C7E5E3]'>
            <Input
              placeholder='Address To'
              name='addressTo'
              type='text'
              handleChange={ handleChange } />
            <Input
              placeholder='Amount (ETH)'
              name='amount'
              type='number'
              handleChange={ handleChange } />
            <Input
              placeholder='Keyword (GIF)'
              name='keyword'
              type='text'
              handleChange={ handleChange } />
            <Input
              placeholder='Enter Message'
              name='message'
              type='text'
              handleChange={ handleChange } />
            <div className='h-[1px] w-full bg-rose-700 my-2' />
            { isLoading ? <Loader /> :
              <button
                type='button'
                onClick={ handleSubmit }
                className='text-rose-700 font-bold w-full mt-2 border-[1px] p-2 border-[#311F33] rounded-full cursor-pointer hover:bg-rose-200'
              > Send Now
              </button>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
