import React from 'react'

function Footer() {
    const date = new Date()
  return (
    <div className='container text-center'>
      <p>Copyright &copy; {date.getFullYear()} @Surender | All Rights Reserved</p>
    </div>
  )
}

export default Footer
