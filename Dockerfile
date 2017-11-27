FROM ruby:2.4.2

RUN mkdir /railsapp
WORKDIR /railsapp
COPY Gemfile /railsapp/Gemfile
COPY Gemfile.lock /railsapp/Gemfile.lock
RUN bundle install
ADD . /railsapp
EXPOSE 3000
