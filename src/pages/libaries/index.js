import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.css';
import { useState } from 'react';

const mockLibariesData = [
  {
    name: 'Libary AAA',
    address: 'Address AAA',
  },
  {
    name: 'Libary BBB',
    address: 'Address BBB',
  },
  {
    name: 'Libary CCC',
    address: 'Address CCC',
  },
  {
    name: 'Libary DDD',
    address: 'Address DDD',
  },
  {
    name: 'Libary EEE',
    address: 'Address EEE',
  },
];

function Libaries() {
  const [data, setData] = useState(mockLibariesData);
  const [keyword, setKeyword] = useState('');

  const handleSearch = () => {
    setData(
      mockLibariesData.filter((item) => {
        const name = String(item.name).toLowerCase();
        return name.includes(keyword.toLowerCase());
      }),
    );
  };

  const handleClear = () => {
    setData(mockLibariesData);
    setKeyword('');
  };
  return (
    <div className="page page-libaries">
      <h3>All Libraries:</h3>

      <InputGroup>
        <Form.Control
          placeholder="Please enter the keywords to search"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          size="lg"
        />
        <Button variant="primary" onClick={handleSearch}>
          Search
        </Button>
        <Button variant="outline-secondary" onClick={handleClear}>
          Clear
        </Button>
      </InputGroup>

      <div className="libaries">
        <ListGroup>
          {data.map((item) => {
            return (
              <ListGroup.Item key={item.name}>
                <h4>{item.name}</h4>
                <p>Address: {item.address} </p>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </div>
    </div>
  );
}

export default Libaries;
