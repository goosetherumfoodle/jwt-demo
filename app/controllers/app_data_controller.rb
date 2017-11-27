class AppDataController < ApplicationController

  def show
    render json: {
      appData: {
        user: {
        npn: 70132951,
          name: 'Sally Jones',
          leaderBoardRank: 27,
          contestTier: 2,
          contestTierGoal: 200,
          percentProgress: 23,
          brmName: 'Henry Ford',
          brmEmail: 'henry@ford.car',
          brmPhone: '555-555-1212',
          policies: {
            policiesSoldLifetime: 173,
            currentContestPolicies: 123,
            earnedRevLifetime: '150.00',
            currentContestRev: '100.00',
          },
          revByMonth: {
            january: 0,
            february: 0,
            march: 0,
            april: 0,
            may: 0,
            june: 0,
            july: 0,
            august: 25,
            september: 25,
            october: 100,
            november: 23,
            december: 0
          }
    },
     contest: {
      name: 'Last Quarter Attack',
      startDate: '10/1/17',
      endDate: '12/31/17',
      tiers: [
        {
          name: '1',
          goal: 100,
          revShare: 5,
          potentialEarnings: 250
        },
        {
          name: '2',
          goal: 200,
          revShare: 10,
          potentialEarnings: 350
        }
      ],
      leaderboard: [
        {
          npn: 45256,
          policies: 501
        },
        {
          npn: 87623,
          policies: 400
        },
        {
          npn: 11145,
          policies: 326
        },
        {
          npn: 55436,
          policies: 211
        },
        {
          npn: 88901,
          policies: 123
        }
      ]
    },
    announcements: {
      generalNews: 'Here is where there would be an announcement about the contests.'
                   },
    lifetimeLeaderboard: [
      {
        npn: 75647,
        policies: 1356
      },
      {
        npn: 49576,
        policies: 1190
      },
      {
        npn: 39276,
        policies: 988
      },
      {
        npn: 51111,
        policies: 801
      },
      {
        npn: 10983,
        policies: 767
      }
   ],
    bookOfBusiness: [{
        HICN: '550495851A',
        memberName: 'DARREL V ARCEO',
        carrier: 'MedStar',
        product: 'Medicare Assured Diamond',
        effectiveDate: '09/01/2017',
        cmsPlanYear: '1',
        status: 'active'
    }],
    downlines: [
      {
        name: 'Christopher Columbus',
        totalEarnings: 3000,
        topAgents: [
          {
            name: 'James Mcintyre',
            percentOfEarnings: 45
          },
          {
            name: 'Nina',
            percentOfEarnings: 18
          },
          {
            name: 'Pinta',
            percentOfEarnings: 14
          },
          {
            name: 'Santa Maria',
            percentOfEarnings: 9
          },
        ]
      },
      {
        name: 'Hernando De Soto',
        totalEarnings: 2500,
        topAgents: [
          {
            name: 'Lee Foss',
            percentOfEarnings: 75
          },
          {
            name: 'Jamie Jones',
            percentOfEarnings: 10
          },
          {
            name: 'Jim James',
            percentOfEarnings: 11
          },
          {
            name: 'Alice Mcconner',
            percentOfEarnings: 5
          },
        ]
      },
      {
        name: 'Juan Ponce de Leon',
        totalEarnings: 1800,
        topAgents: [
          {
            name: 'Michael Moore',
            percentOfEarnings: 30
          },
          {
            name: 'James Deen',
            percentOfEarnings: 33
          },
          {
            name: 'Mick Jagger',
            percentOfEarnings: 21
          },
          {
            name: 'Paul Lamp',
            percentOfEarnings: 14
          },
        ]
      },
      {
        name: 'Sir Francis Drake',
        totalEarnings: 1200,
        topAgents: [
          {
            name: 'Jack Knight',
            percentOfEarnings: 55
          },
          {
            name: 'Jackie Snow' ,
            percentOfEarnings: 23
          },
          {
            name: 'Rick Bickmore',
            percentOfEarnings: 15
          },
          {
            name: 'Nicole Smith',
            percentOfEarnings: 10
          },
        ]
      }
    ]
  }
}
  end
end
