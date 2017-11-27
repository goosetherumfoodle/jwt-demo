import React from 'react';
import ReactSpeedometer from "react-d3-speedometer";
import PropTypes from 'prop-types';


const Gauge = (props) => {
    return (
        <ReactSpeedometer
            width={190}
            height={130}
            needleColor="white"
            startColor="red"
            textColor="white"
            endColor="green"
            value={props.userData.policies.currentContestPolicies}
            maxValue={props.userData.contestTierGoal} />
    );
};

Gauge.propTypes = {
    userData: PropTypes.shape({
        contestTierGoal: PropTypes.number,
        policies: PropTypes.shape({
            currentContestPolicies: PropTypes.number,
        })
    })
};

export default Gauge;
