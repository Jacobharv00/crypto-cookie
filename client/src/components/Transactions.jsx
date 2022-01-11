import { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext'
// import dummyData from '../utils/dummyData'
import { shortenAddress } from '../utils/shortenAddress'
import useFetch from '../hooks/useFetch'

const TransactionCard = ( { addressTo, addressFrom, timestamp, message, keyword, amount, url } ) => {
  const gifUrl = useFetch( { keyword } )

  return (
    <div className='bg-[#181918] m-4 flex flex-1 2xl:min-w[450px] 2xl:max-w[500px]
      2sm:min-w[270px] 2sm:max-w[300px] flex-col p-3 rounded-md hover:shadow-2xl'>
      <div className='flex flex-col items-center w-full mt-3'>
        <div className='w-full mb-6 p-2'>
          <a href={ `https://ropsten.etherscan.io/address/${addressFrom}` }
            target='_blank'
            rel='noopener noreferrer'
          >
            <p className='text-white text-base'>
              From: { shortenAddress( addressFrom ) }
            </p>
          </a>
          <a href={ `https://ropsten.etherscan.io/address/${addressTo}` }
            target='_blank'
            rel='noopener noreferrer'
          >
            <p className='text-white text-base'>
              To: { shortenAddress( addressTo ) }
            </p>
          </a>
          <p className='text-white text-base'>
            Amount: { amount } ETH
          </p>
          { message && (
            <>
              <br />
              <p className='text-white text-base'>
                Message: { message }
              </p>
            </>
          ) }
        </div>
        <img
          src={ gifUrl || url }
          alt='gif'
          className='w-full h-64 2xl:h-96 rounded-medium shadow-lg object-cover'
        />
        <div className='bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl'>
          <p className='text-[#37c7da] font-bold'>
            { timestamp }
          </p>
        </div>
      </div>
    </div>
  )
}

const Transactions = () => {
  const { transactions, currentAccount } = useContext( TransactionContext )

  return (
    <div className='flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions'>
      <div className='flex flex-col md:p-12 py-12 px-4'>
        { currentAccount ? (
          <h3 className='text-gradient text-3xl text-center my-2'>
            Latest Transactions
          </h3>
        ) : (
          <h3 className='text-gradient text-3xl text-center my-2'>
            Connect your account to see the latest changes
          </h3>
        ) }
        <div className='flex flex-wrap justify-center items-center mt-10'>
          { transactions.map( ( transaction, index ) => (
            <TransactionCard key={ index } { ...transaction } />
          ) ) }
        </div>
      </div>
    </div>
  )
}

export default Transactions

// Account 1 => 0x6029846db21155ac9410e34470987deE9217A3Ea
// Account 2 => 0x3Ac3aa752b7D012eF97a2C820AA327f98388553e
// Account 3 => 0xf5B0775e10887df02674e0625aF651f8365532Dc