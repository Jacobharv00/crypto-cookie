import { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext'
import { shortenAddress } from '../utils/shortenAddress'
import useFetch from '../hooks/useFetch'

const TransactionCard = ( { addressTo, addressFrom, timestamp, message, keyword, amount, url } ) => {
  const gifUrl = useFetch( { keyword } )

  return (
    <div className='bg-[#171019] m-4 flex flex-1 2xl:min-w[450px] 2xl:max-w[500px]
      2sm:min-w[270px] 2sm:max-w[300px] flex-col p-3 rounded-3xl border-2 border-[#311F33] hover:shadow-2xl'>
      <div className='flex flex-col items-center w-full mt-3'>
        <div className='w-full mb-6 p-2'>
          <a href={ `https://ropsten.etherscan.io/address/${addressFrom}` }
            target='_blank'
            rel='noopener noreferrer'
          >
            <p className='text-gradient text-base'>
              From: { shortenAddress( addressFrom ) }
            </p>
          </a>
          <a href={ `https://ropsten.etherscan.io/address/${addressTo}` }
            target='_blank'
            rel='noopener noreferrer'
          >
            <p className='text-gradient text-base'>
              To: { shortenAddress( addressTo ) }
            </p>
          </a>
          <p className='text-gradient text-base'>
            Amount: { amount } ETH
          </p>
          { message && (
            <>
              <br />
              <p className='text-gradient text-base'>
                Message: { message }
              </p>
            </>
          ) }
        </div>
        <img
          src={ gifUrl || url }
          alt='gif'
          className='w-full h-64 2xl:h-96 rounded-medium shadow-lg object-cover rounded-3xl'
        />
        <div className='bg-[#311F33] p-3 px-4 w-max rounded-3xl -mt-5 shadow-2xl'>
          <p className='text-gradient font-bold'>
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
          <h3 className='text-gradient text-4xl uppercase text-center my-2'>
            Latest Transactions
          </h3>
        ) : (
          <h3 className='text-gradient text-4xl uppercase text-center my-2'>
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

