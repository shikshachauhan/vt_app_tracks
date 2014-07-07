class Interest

  RATE = 0.1
  attr_reader :principal, :time

  def initialize
    instance_variables = yield
    @principal = instance_variables['principal']
    @time = instance_variables['time']
  end

  def amount_simply
    principal + principal * RATE * time
  end

  def amount_compoundedly
    principal * ((1 + RATE) ** time)
  end

  def simple_compound_difference
    amount_compoundedly - amount_simply
  end

end