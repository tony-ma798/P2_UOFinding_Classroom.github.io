import { useNavigate } from 'react-router';
import userImg from '../../assets/user.png';
import moreImg from '../../assets/more.png';

import './Navbar.css';
import { useContext } from 'react';
import AppContext from '../../AppContext';

function Navbar() {
  const navigate = useNavigate();
  const { email, setSiderOpen } = useContext(AppContext);

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-brand">
          <img
            src={moreImg}
            alt=""
            className="nav-more"
            onClick={() => setSiderOpen(true)}
          />
        </div>
      </div>
      <div className="nav-option">
        <span className="nav-text">
          <ul className="nav-nav">
            {email ? (
              <li className="nav-item">
                <div className="nav-link active">{email}</div>
              </li>
            ) : (
              <li className="nav-item">
                <div
                  className="nav-link active"
                  onClick={() => navigate('/sign-in')}
                >
                  Sign in
                </div>
              </li>
            )}
          </ul>
          <img src={userImg} width="64" height="64" alt="" />
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
