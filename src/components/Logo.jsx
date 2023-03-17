import { Link } from 'react-router-dom'

export function Logo(props) {
  return (
    <Link to='/'>
      <img alt='Netflix Logo' className='w-24' src='/netflix-logo.svg' {...props} />
    </Link>
  )
}
