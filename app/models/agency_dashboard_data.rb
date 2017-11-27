module AgencyDashboardData
  def self.for_user(user)
    {npn: user.npn_number,
     name: 'Sally Jones',
     leaderBoardRank: 27,
     contestTier: 2,
     contestTierGoal: 200,
     percentProgress: 23,
     brmName: 'Henry Ford',
     brmEmail: 'henry@ford.car',
     brmPhone: '555-555-1212',
     policies: {policiesSoldLifetime: 173,
                currentContestPolicies: 123,
                rewardRevenueLifetime: '150.00',
                currentContestRevenue: '100.00'},
     policiesByMonth: {january: 0,
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
                       december: 0}}
  end

  def self.for_contest(contest)
    {name: 'Last Quarter Attack',
     startDate: '10/1/17',
     endDate: '12/31/17',
     tiers: [{name: '1',
              goal: 100,
              revShare: 5,
              potentialEarnings: 250}],
     leaderboard: [{npn: 70132951,
                    policies: 123}]}
  end

  def self.for_announcements(announcement)
    { generalNews: announcement.general_news }
  end

  def self.for_lifetime_leaderboard(lifetime_leaderboard_c)
    lifetime_leaderboard_c.build_array([:npn, :policies])
  end

  def self.for_book_of_business(npn, sale_record_c)
    keys = [:HICN, :memberName, :carrier, :product, :effectiveDate, :CMSPlanYear, :status]
    sale_record_c.get_hashes_for_npn(npn, keys)
  end

  # todo: start with at test for this
  def self.for_downlines(agency)
    [{name: agency.name,
      totalPoliciesSold: Mygs::agency_total_policies(agency),
      topAgents: [{name: 'Jez',
                   percentOfPolicies: 75}]}]

  end
end
