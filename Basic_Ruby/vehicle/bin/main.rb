require_relative '../lib/bike.rb'

bike_object = Bike.new("Honda", 100000, "M. k. Tiwari")
puts bike_object
bike_object.price = 60000
puts bike_object