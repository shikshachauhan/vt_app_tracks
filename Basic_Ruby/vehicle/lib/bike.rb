require_relative 'vehicle.rb'
class Bike < Vehicle

  attr_accessor :dealer
  
  def initialize(name, price, dealer)
    super(name, price)
    @dealer = dealer
  end

  def to_s
    "\tName : #{name}\n\tPrice : #{price}\n\tDealer : #{dealer}\n  "
  end
  
end
