import './header.scss'

interface IProps {
  setRole: React.Dispatch<React.SetStateAction<'user' | 'manager'>>
  role: 'user' | 'manager'
}

const Header = ({ setRole, role }: IProps) => {
  return (
    <header className='header'>
      <div className='header__container'>
        <button
          className={`header__btn ${role === 'user' ? 'header__active' : ''}`}
          onClick={() => setRole('user')}
        >
          User
        </button>
        <button
          onClick={() => setRole('manager')}
          className={`header__btn ${
            role === 'manager' ? 'header__active' : ''
          }`}
        >
          Manager
        </button>
      </div>
    </header>
  )
}

export default Header
