import React from "react";
import Card from "./Card";

const Statistics = ({ statisticItems }) => (
  <div className="hole-stat">
    <div className="logo-part">
      <h1>
        The world's biggest healthcare <br />
        platform
      </h1>
      <p>
        We work from 6 offices all over the world, bringing Docplanner Group to
        life in almost 20 countries.
      </p>
      <img id="image-static" src="https://media.licdn.com/dms/image/C4E0BAQFOWnbru99f5w/company-logo_200_200/0?e=2159024400&amp;v=beta&amp;t=EceoeatN3ZdtLKlQdk-5b9mznHFILuVm2EExIss1FTA" ></img>
    </div>
    <div className="stat-box">
      {statisticItems.map((el, i) => (
        <Card key={i} image={el.image} title={el.title} parag={el.parag} />
      ))}
    </div>
  </div>
);
export default Statistics;