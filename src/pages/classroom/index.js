import { useLocation } from 'react-router';
import mapImg from '../../assets/map.jpg';
import './style.css';

function ClassRoom() {
  const location = useLocation();
  const { code = '---' } = location.state || {};

  return (
    <div className="page page-classroom">
      <div className="classroom-left">
        <div className="classroom-left-title">
          <h3>Your classroom is :</h3>
          <div className="classroom-code">{code}</div>
        </div>

        <img src={mapImg} class="map-img" alt="" />
      </div>

      <div className="classroom-right">
        <h3>Route Guide:</h3>

        <ul class="list">
          <li>
            1. This is a Route Guide. This is a Route Guide.This is a Route
            Guide. This is a Route Guide.This is a Route Guide. This is a Route
            Guide.
          </li>
          <li>
            2. This is a Route Guide. This is a Route Guide.This is a Route
            Guide. This is a Route Guide.This is a Route Guide. This is a Route
            Guide.
          </li>
          <li>
            3. This is a Route Guide. This is a Route Guide.This is a Route
            Guide. This is a Route Guide.This is a Route Guide. This is a Route
            Guide.
          </li>
        </ul>
        <p className="list-thanks">Thanks</p>
      </div>
    </div>
  );
}

export default ClassRoom;
