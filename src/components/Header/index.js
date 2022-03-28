// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div>
    <ul className="home-list-container">
      <Link to="/">
        <li className="link">Home</li>
      </Link>
      <Link to="/about">
        <li className="link">About</li>
      </Link>
    </ul>
  </div>
)
export default Header
