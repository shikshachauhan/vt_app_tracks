require_relative '../lib/vehicle.rb'
require_relative '../lib/bike.rb'

bike_obj = Bike.new("Honda", 100000, "M. k. Tiwari")
puts "The details of bike are : Bike-name=#{bike_obj.name} Price=#{bike_obj.price} Dealer=#{bike_obj.dealer}"
bike_obj.price = 60000
puts "The details of bike now are : Bike-name=#{bike_obj.name} Price=#{bike_obj.price} Dealer=#{bike_obj.dealer}"