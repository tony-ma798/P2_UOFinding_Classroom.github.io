import { useContext, useState } from 'react';
import AppContext from '../../AppContext';
import moreImg from '../../assets/more.png';
import './Siderbar.css';
import { useNavigate } from 'react-router';
import HelpModal from '../HelpModal';

const classrooomHelpText =
  'If you cannot find your classroom, please check with your professor, orask your Faculty。';

const helpText = (
  <p>
    If you need help in school, you can contact the school student center or
    security。
    <br />
    Number: +1 999 999 9999 <br />
    <br />
    Email: studentservice@uottawa.ca <br />
  </p>
);

function Siderbar() {
  const { siderOpen, setSiderOpen, setEmail } = useContext(AppContext);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [text, setText] = useState();

  const handleToggle = () => {
    setSiderOpen(!siderOpen);
  };

  const handleSignOut = () => {
    setEmail('');
    setSiderOpen(false);
  };

  const handleNavigate = (route) => {
    navigate(route);
    setSiderOpen(false);
  };

  const handleClassRoomHelpClick = () => {
    setText(classrooomHelpText);
    setShow(true);
  };

  const handleHelpClick = () => {
    setText(helpText);
    setShow(true);
  };

  const handleMaskClick = () => {
    setSiderOpen(false);
  };

  if (!siderOpen) return null;
  return (
    <div className="siderbar">
      <div className="siderbar-main">
        <div className="siderbar-more" onClick={handleToggle}>
          <img src={moreImg} alt="" className="navbar-more" width={80} />
        </div>

        <div className="siderbar-menu">
          <div
            className="siderbar-menu-item"
            onClick={() => handleNavigate('/')}
          >
            Home
          </div>
          <div
            className="siderbar-menu-item"
            onClick={() => handleNavigate('/my-courses')}
          >
            My Courses
          </div>
          <div
            className="siderbar-menu-item"
            onClick={() => handleNavigate('/libaries')}
          >
            Libraries
          </div>

          {/*<div
            className="siderbar-menu-item"
            onClick={handleClassRoomHelpClick}
          >
            Classroom Help
  </div>*/}
          <div className="siderbar-menu-item" onClick={handleHelpClick}>
            Help
          </div>
          <div className="siderbar-menu-item" onClick={handleSignOut}>
            Sign Out
          </div>
        </div>
      </div>
      <div className="siderbar-mask" onClick={handleMaskClick}></div>

      <HelpModal show={show} handleClose={() => setShow(false)} text={text} />
    </div>
  );
}

export default Siderbar;
