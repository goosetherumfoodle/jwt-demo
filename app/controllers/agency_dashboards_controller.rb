class AgencyDashboardsController < ApplicationController
  before_action :authenticate_user
  def show
    agency = current_user
    render json: {user: AgencyDashboardData::for_user(agency),
                  contest: AgencyDashboardData::for_contest(AgencyContest.current),
                  announcements: AgencyDashboardData::for_announcements(Announcement),
                  lifetimeLeaderboard: AgencyDashboardData::for_lifetime_leaderboard(LifetimeLeaderboard),
                  bookOfBusiness: AgencyDashboardData::for_book_of_business(agency.npn, SaleRecord),
                  downlines: AgencyDashboardData::for_downlines(agency)}
  end
end
