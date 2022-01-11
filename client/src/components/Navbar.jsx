import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import cookie1 from '../../images/cookie1.png'
import { useState } from 'react'

const NavbarItem = ( { title, classProps } ) => {
  return (
    <li className={ `mx-4 cursor-pointer text-gradient ${classProps}` }>
      { title }
    </li>
  )
}

const Navbar = () => {
  const [ toggleMenu, setToggleMenu ] = useState( false )

  return (
    <nav className='w-full flex md:justify-center justify-between items-center p-4'>
      <div className='md:flex-[0.5] flex-initial justify-center items center'>
        <img
          src={ cookie1 }
          alt='logo'
          className='w-[4vw] cursor-pointer bg-[#8A4285] rounded-full p-1'
        />
        <h1 className='text-4xl text-gradient'>Crypto Cookie</h1>
      </div>
      <ul className='text-black text-2xl md:flex hidden list-none flex-row justify-between items-center flex-initial'>
        { [ 'Market', 'Exchange', 'Tutorials', 'Wallets' ].map( ( item, index ) => (
          <NavbarItem key={ item + index } title={ item } />
        ) ) }
      </ul>
      <div className='flex relative'>
        { toggleMenu
          ? <AiOutlineClose fontSize={ 28 } className='text-white md:hidden cursor-pointer' onClick={ () => setToggleMenu( false ) } />
          : <HiMenuAlt4 fontSize={ 28 } className='text-white md:hidden cursor-pointer' onClick={ () => setToggleMenu( true ) } />
        }
        { toggleMenu && (
          <ul
            className='z-10 fixed top-0 -right-2
          p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md purple-glassmorphism text-rose-200 animate-slide-in'
          >
            <li className='text-xl w-full my-2'>
              <AiOutlineClose onClick={ () => setToggleMenu( false ) } />
            </li>
            { [ 'Market', 'Exchange', 'Tutorials', 'Wallets' ].map( ( item, index ) => (
              <NavbarItem
                key={ item + index }
                title={ item }
                classProps='my-2 text-lg'
              />
            ) ) }
          </ul>
        ) }
      </div>
    </nav>
  )
}

export default Navbar
