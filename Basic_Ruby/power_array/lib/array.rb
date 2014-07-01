class Array
  def power(exponent)
    for i in (0...length) do
      self[i] = self[i] ** exponent
    end 
  end
end
