require_relative "../lib/pascal_triangle.rb"

PascalTriangle.new.pascal(6) do |arr| 
  arr.each { |val| print "#{val} " }
  puts
end