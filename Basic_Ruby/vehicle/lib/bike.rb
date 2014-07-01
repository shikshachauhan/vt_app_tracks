class Bike < Vehicle
  def initialize(name, price, dealer)
    super(name, price)
    @dealer = dealer
  end

  def dealer
    @dealer
  end

  def dealer=(dealer)
    @dealer = dealer
  end
end
