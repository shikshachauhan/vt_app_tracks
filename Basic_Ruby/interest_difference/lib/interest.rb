class Interest

  RATE = 0.1
  attr_accessor :principal, :time

  def initialize
    instance_variables = yield
    @principal = instance_variables[0]
    @time = instance_variables[1]
  end

  def simple_amount
    principal + principal * RATE * time
  end

  def compound_amount
    principal * ((1 + RATE) ** time) 
  end

  def simple_compound_difference
    compound_amount - simple_amount
  end

end