import React, {Component} from 'react';

const renderTierRow = function(tier, index) {
    return (
  <tr key={index}>
    <td>{tier.name}</td>
    <td>{tier.goal}</td>
    <td>{tier.revShare}</td>
    <td>{tier.potentialEarnings}</td>
  </tr>
  )
}

const renderLeaderboardRow = function(position, index) {
    return (
  <tr key={index}>
      <td>{index+1}</td>
      <td>{position.npn}</td>
      <td>{position.policies}</td>
  </tr>
  )
}


export {renderTierRow, renderLeaderboardRow};
