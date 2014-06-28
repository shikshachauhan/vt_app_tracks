class Vehicle
  def initialize(name,price)
    @name=name
    @price=price
  end

  def name
    @name
  end

  def price
    @price
  end

  def price=(price)
    @price=price
  end
end

class Bike < Vehicle
  def initialize(name,price,dealer)
    super(name,price)
    @dealer=dealer
  end

  def dealer
    @dealer
  end

  def dealer=(dealer)
    @dealer=dealer
  end
end

bike_obj=Bike.new("Honda",100000,"M. k. Tiwari")
puts "The details of bike are : Bike-name=#{bike_obj.name} Price=#{bike_obj.price} Dealer=#{bike_obj.dealer}"
bike_obj.price=60000
puts "The details of bike now are : Bike-name=#{bike_obj.name} Price=#{bike_obj.price} Dealer=#{bike_obj.dealer}"
