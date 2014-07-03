require_relative '../lib/interest.rb'

principal = gets.chomp.to_i
time = gets.chomp.to_i

interest = Interest.new.tap do |a|
  a.principal = principal
  a.time = time
end

puts interest.simple_compound_difference