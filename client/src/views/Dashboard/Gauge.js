import React, {Component} from 'react';
import ReactSpeedometer from "react-d3-speedometer";
import PropTypes from 'prop-types';

const Gauge = (props)=> {
    return (
        <ReactSpeedometer
            width={420}
            height={250}
            ringWidth={150}
            needleColor="black"
            startColor="red"
            textColor="black"
            endColor="green"
            value={props.userData.policies.currentContestPolicies}
            maxValue={props.userData.contestTierGoal} />
    );
}

Gauge.propTypes = {
    userData: PropTypes.shape({
        contestTierGoal: PropTypes.number,
        policies: PropTypes.shape({
            currentContestPolicies: PropTypes.number,
      })
    })
}
export default Gauge;
