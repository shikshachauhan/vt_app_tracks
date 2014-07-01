class Array
  def power(x)
    array=[1, 2, 3, 4, 5]
    for i in (1...array.length) do
      array[i]=array[i]**x
    end 
    array
  end
end
