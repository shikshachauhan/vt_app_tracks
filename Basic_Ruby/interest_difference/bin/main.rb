require_relative '../lib/interest.rb'

principal = gets.chomp.to_i
time = gets.chomp.to_i

interest = Interest.new { [principal, time] }

puts interest.simple_compound_difference