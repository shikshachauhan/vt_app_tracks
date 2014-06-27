def fibonacci_series
puts "The fibonacci series is"
puts "0"
puts "1"
yield
end 

var_1=0
var_2=1

fibonacci_series {
  while var_1+var_2<1000 do
    var_curr=var_1+var_2
    puts "#{var_curr}"
    var_1=var_2
    var_2=var_curr
  end
}

