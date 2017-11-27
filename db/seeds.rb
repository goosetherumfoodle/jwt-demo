# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.build! name: 'Jane Agent', email: 'agent@example.com', npn: 34343, level: '4', password: 'password'
User.build! name: "Trusty Jim's Insurance", email: 'agency@example.com', npn: 28753, level: '7', password: 'password'
