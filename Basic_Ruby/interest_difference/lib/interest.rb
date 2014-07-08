class Interest

  RATE = 0.1
  attr_reader :principal, :time

  def initialize
    details = yield
    @principal = details[:principal]
    @time = details[:time]
  end

  def simple_interest
    principal * RATE * time
  end

  def simple_amount
    principal + simple_interest
  end

  def compound_amount
    principal * ((1 + RATE) ** time)
  end

  def simple_compound_difference
    compound_amount - simple_amount
  end

end