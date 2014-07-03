class Interest

  Rate = 0.1
  attr_accessor :principal, :time

  def simple_interest
    principal + principal * Rate * time
  end

  def compound_interest
    principal * ((1 + Rate) ** time) 
  end

  def simple_compound_difference
    compound_interest - simple_interest
  end
  
end