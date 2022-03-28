// Write your JS code here
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

const LogoutButton = props => {
  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  )
}
export default withRouter(LogoutButton)
