export default {
    user: {
        npn: 0,
        name: '',
        leaderBoardRank: 0,
        contestTier: 0,
        contestTierGoal: 0,
        percentProgress: 0,
        brmName: '',
        brmEmail: '',
        brmPhone: '',
        policies: {
            policiesSoldLifetime: 0,
            currentContestPolicies: 0,
            earnedRevLifetime: '',
            currentContestRev: '',
        },
        revByMonth: {
            january: 0,
            february: 0,
            march: 0,
            april: 0,
            may: 0,
            june: 0,
            july: 0,
            august: 0,
            september: 0,
            october: 0,
            november: 0,
            december: 0
        }
    },
    contest: {
        name: '',
        startDate: '',
        endDate: '',
        tiers: [
            {
                name: '',
                goal: 0,
                revShare: 0,
                potentialEarnings: 0
            }
        ],
        leaderboard: [
            {
                npn: 0,
                policies: 0
            }
        ]
    },
    announcements: {
        generalNews: ''
    },
    lifetimeLeaderboard: [{
        npn: 0,
        policies: 0
    }],
    bookOfBusiness: [{
        HICN: '',
        memberName: '',
        carrier: '',
        product: '',
        effectiveDate: '',
        cmsPlanYear: '',
        status: ''
    }],
    downlines: [{
        name: '',
        totalEarnings: 0,
        topAgents: [
            {
                name: '',
                percentOfEarnings: 0
            }
        ]
    }
    ]
};
