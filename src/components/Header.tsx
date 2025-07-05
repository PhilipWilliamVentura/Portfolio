import React, {useState} from 'react'

const Header = () => {

  const [nav, setNav] = useState(false)

  return (
    <header>
        <nav className='flex justify text-4xl'>
            Portfolio
        </nav>
    </header>
  )
}

export default Header
