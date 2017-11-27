source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '~> 5.1.4'
gem 'pg', '~> 0.18'
gem 'puma', '~> 3.7'
# Use ActiveModel has_secure_password
gem 'bcrypt'

# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
gem 'rack-cors'

# using a fork right now for this issue: https://github.com/nsarno/knock/pull/192
gem 'knock', git: 'https://github.com/mhluska/knock', ref: '1e2f1b7ed02c'

group :development, :test do
  gem 'pry-byebug'
  gem "rspec-rails"
end

group :test do
  gem 'json-schema'
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'guard-rspec', require: false
end
