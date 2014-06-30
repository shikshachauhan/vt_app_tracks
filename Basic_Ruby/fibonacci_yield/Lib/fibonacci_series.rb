def fibonacci_series(max)
  var1 = 0
  var2 = 1
  yield var1
  yield var2
  var3 = var1 + var2
  while var3 < max
    yield var3
    var1= var2
    var2= var3
    var3= var1 + var2
  end
end 

