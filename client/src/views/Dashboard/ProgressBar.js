import React, {Component} from 'react';
import { Progress } from 'reactstrap';
import classnames from 'classnames';


const ProgressBar = (props) => {
  return (
    <div>
      <div> Progress To Next Tier </div>
      <div className= "text-center">{props.userData.percentProgress}%</div>
      <Progress  value={props.userData.percentProgress} />
    </div>
  );
};

export default ProgressBar;
