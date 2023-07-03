import { useContext, useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router';
import AppContext from '../../AppContext';

function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { setEmail: contextSetEmail } = useContext(AppContext);

  const navigate = useNavigate();

  const handleSignIn = () => {
    if (!email || !password) {
      window.alert('Please provide email and password');
      return;
    }
    contextSetEmail(email);
    navigate('/');
  };

  return (
    <div className="page page-signin">
      <div className="page-card">
        <h3>University of Ottawa</h3>
        <div className="mb-4">
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="password"
            placeholder="password"
          />
        </div>

        <button type="button" className="sign-btn" onClick={handleSignIn}>
          Sign in
        </button>
      </div>
    </div>
  );
}

export default SignIn;
