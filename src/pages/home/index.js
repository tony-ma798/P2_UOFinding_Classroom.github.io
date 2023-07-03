import { useNavigate } from 'react-router';
import './style.css';

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/find-a-classroom');
  };

  return (
    <div className="page page-home">
      <h1>University of Ottawa</h1>
      <button className="page-home-btn" onClick={handleClick}>
        Find a classroom
      </button>
    </div>
  );
}

export default Home;
