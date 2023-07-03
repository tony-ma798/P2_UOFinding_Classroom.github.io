import { useNavigate } from 'react-router';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

import './style.css';

const mockCoursesData = [
  {
    code: 'SEG3125',
    title: 'Course SEG3125',
    descrition: `Course DetailsCourse DetailsCourse DetailsCourse DetailsCourse Details Course DetailsCourse DetailsCourse DetailsCourse DetailsCourse Details`,
  },
  {
    code: 'CEG3185',
    title: 'Course CEG3185',
    descrition: `Course DetailsCourse DetailsCourse DetailsCourse DetailsCourse Details Course DetailsCourse DetailsCourse DetailsCourse DetailsCourse Details`,
  },
  {
    code: 'CSI3140',
    title: 'Course CSI3140',
    descrition: `Course DetailsCourse DetailsCourse DetailsCourse DetailsCourse Details Course DetailsCourse DetailsCourse DetailsCourse DetailsCourse Details`,
  },
];

function MyCourses() {
  const navigate = useNavigate();

  const handleClick = (item) => {
    navigate('/classroom', { state: { code: item.code } });
  };

  return (
    <div className="page page-mycourses">
      <h3>My Courses:</h3>
      <div>
        <Accordion>
          {mockCoursesData.map((item, index) => {
            return (
              <Accordion.Item eventKey={String(index)} key={index}>
                <Accordion.Header>{item.title}</Accordion.Header>
                <Accordion.Body>
                  <p>{item.description}</p>
                  <Button variant="primary" onClick={() => handleClick(item)}>
                    View classroom
                  </Button>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}

export default MyCourses;
