import { useEffect, useState, createContext } from 'react'
import { ethers } from 'ethers'
import { contractABI, contractAddress } from '../utils/constants'

export const TransactionContext = createContext()

const { ethereum } = window


const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider( ethereum )
  const signer = provider.getSigner()
  const transactionContract = new ethers.Contract( contractAddress, contractABI, signer )

  return transactionContract
}

export const TransactionProvider = ( { children } ) => {
  // State
  const [ currentAccount, setCurrentAccount ] = useState( '' )
  const [ formData, setFormData ] = useState( {
    addressTo: '',
    amount: '',
    keyword: '',
    message: ''
  } )
  const [ isLoading, setIsLoading ] = useState( false )
  const [ transactionCount, setTransactionCount ] = useState( localStorage.getItem( 'transactionCount' ) )
  const [ transactions, setTransactions ] = useState( [] )

  const handleChange = ( e, name ) => {
    setFormData( ( prevState ) => ( { ...prevState, [ name ]: e.target.value } ) )
  }

  const getAllTransactions = async () => {
    try {
      if ( !ethereum ) return alert( 'Please install metamask' )
      const transactionsContract = getEthereumContract()
      const availableTransactions = await transactionsContract.getAllTransactions()

      const structuredTransactions = availableTransactions.map( transaction => ( {
        addressTo: transaction.receiver,
        addressFrom: transaction.sender,
        timestamp: new Date( transaction.timestamp.toNumber() * 1000 ).toLocaleString(),
        message: transaction.message,
        keyword: transaction.keyword,
        amount: parseInt( transaction.amount._hex ) / ( 10 ** 18 )
      } ) )

      setTransactions( structuredTransactions )
    } catch ( error ) {
      console.log( error )
    }
  }

  const checkIfWalletIsConnected = async () => {
    try {
      if ( !ethereum ) return alert( 'Please Install MetaMask' )
      const accounts = await ethereum.request( { method: 'eth_accounts' } )

      if ( accounts.length ) {
        setCurrentAccount( accounts[ 0 ] )
        getAllTransactions()
      } else {
        console.log( 'No Accounts Found!' )
      }

    } catch ( error ) {
      console.log( error )
    }
  }

  const checkIfTransactionsExist = async () => {
    try {
      if ( ethereum ) {
        const transactionContract = getEthereumContract()
        const transactionCount = await transactionContract.getTransactionCount()
        window.localStorage.setItem( "transactionCount", transactionCount )
      }
    } catch ( error ) {
      console.log( error )
      throw new Error( 'No ethereum object.' )
    }
  }

  const connectWallet = async () => {
    try {
      if ( !ethereum ) return alert( 'Please Install MetaMask' )
      const accounts = await ethereum.request( { method: 'eth_requestAccounts' } )

      setCurrentAccount( accounts[ 0 ] )
    } catch ( error ) {
      console.log( error )
      throw new Error( 'No ethereum object.' )
    }
  }

  const sendTransaction = async () => {
    try {
      if ( ethereum ) {
        const { addressTo, amount, keyword, message } = formData
        const transactionContract = getEthereumContract()
        const parsedAmount = ethers.utils.parseEther( amount )

        await ethereum.request( {
          method: "eth_sendTransaction",
          params: [ {
            from: currentAccount,
            to: addressTo,
            gas: "0x5208",
            value: parsedAmount._hex,
          } ],
        } )

        const transactionHash = await transactionContract.addToBlockchain( addressTo, parsedAmount, message, keyword )

        setIsLoading( true )
        console.log( `Loading - ${transactionHash.hash}` )
        await transactionHash.wait()
        console.log( `Success - ${transactionHash.hash}` )
        setIsLoading( false )

        const transactionCount = await transactionContract.getTransactionCount()

        setTransactionCount( transactionCount.toNumber() )
        window.reload()
      } else {
        console.log( "No ethereum object" )
      }
    } catch ( error ) {
      console.log( error )

      throw new Error( "No ethereum object" )
    }
  }

  useEffect( () => {
    checkIfWalletIsConnected()
    checkIfTransactionsExist()
  }, [ transactionCount ] )

  return (
    <TransactionContext.Provider
      value={ {
        transactionCount,
        connectWallet,
        currentAccount,
        sendTransaction,
        handleChange,
        formData,
        transactions,
        isLoading
      } }
    >
      { children }
    </TransactionContext.Provider>
  )
}
