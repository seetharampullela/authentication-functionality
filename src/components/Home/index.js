import './index.css'
import Header from '../Header/index'
import LogoutButton from '../LogoutButton'

const Home = () => (
  <div className="home-container">
    <Header />
    <h1 className="home-heading">Home Route</h1>
    <LogoutButton />
  </div>
)

export default Home
