export default () => {
  const LoggedInUser = {
    id : 0,
    npn: 12345,
    firstName: 'jane',
    lastName: 'agent',
    leaderBoardRank: 5,
    production: {policiesSoldLifetime: 380, currentContestPolicies: 75, earnedRevLifetime: 45000, currentContestRev: 10000},
    contestTier: 0,
    brmName: 'jane agent',
    brmEmail: 'jagent@example.com',
    brmPhone: 1231231234,
    currentContestPolicies: 75,

  };

  return LoggedInUser;
}
