import Form from 'react-bootstrap/Form';
import './style.css';
import { useState } from 'react';
import HelpModal from '../../components/HelpModal';
import bakground from '../../assets/find-a-classroom.jpeg';
import { useNavigate } from 'react-router';

function Find() {
  const [show, setShow] = useState(false);
  const [code, setCode] = useState();
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!code) {
      return setShow(true);
    }
    navigate('/classroom', { state: { code } });
  };

  return (
    <div className="page-find">
      <div className="find-left">
        <Form>
          <Form.Group className="mb-4">
            <Form.Label>Search by code:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ex: SEG3125"
              onChange={(e) => {
                setCode(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Label>Other Search</Form.Label>

          <Form.Group className="mb-4">
            <Form.Label>Select Faculty:</Form.Label>
            <Form.Select>
              <option>Open this select menu</option>
              <option value="Faculty-A">Faculty-A</option>
              <option value="Faculty-B">Faculty-B</option>
              <option value="Faculty-C">Faculty-C</option>
              <option value="Faculty-D">Faculty-D</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Select Program:</Form.Label>
            <Form.Select>
              <option>Open this select menu</option>
              <option value="Program-A">Program-A</option>
              <option value="Program-B">Program-B</option>
              <option value="Program-C">Program-C</option>
              <option value="Program-D">Program-D</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Select Major:</Form.Label>
            <Form.Select>
              <option>Open this select menu</option>
              <option value="Major-A">Major-A</option>
              <option value="Major-B">Major-B</option>
              <option value="Major-C">Major-C</option>
              <option value="Major-D">Major-D</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Select Course:</Form.Label>
            <Form.Select>
              <option>Open this select menu</option>
              <option value=" Course-A"> Course-A</option>
              <option value=" Course-B"> Course-B</option>
              <option value=" Course-C"> Course-C</option>
              <option value=" Course-D"> Course-D</option>
            </Form.Select>
          </Form.Group>
        </Form>
        <button className="page-btn" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="find-right">
        <img src={bakground} alt="" className="find-right-bg" />
      </div>

      <HelpModal
        show={show}
        handleClose={() => setShow(false)}
        text="Please provide class code"
      />
    </div>
  );
}

export default Find;
