import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <h1 className='text-5xl' >404 | page not Found</h1>
        <Link to="/" className='bg-black text-white'  > click here to Go to home page</Link>
    </div>
  )
}

export default NotFound