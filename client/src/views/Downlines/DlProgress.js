import React, {Component} from 'react';
import { Progress } from 'reactstrap';
import classnames from 'classnames';


const ProgressBar = (props) => {
  return (
    <div>
      <div>{props.info.name}</div>
      <div className= "text-center">{props.info.percentOfEarnings}%</div>
      <Progress  value={props.info.percentOfEarnings} />
    </div>
  );
};

export default ProgressBar;
