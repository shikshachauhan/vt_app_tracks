require_relative '../lib/interest.rb'

interest_details = Hash.new
interest_details['principal'] = gets.chomp.to_i
interest_details['time'] = gets.chomp.to_i

interest = Interest.new { interest_details }

puts interest.simple_compound_difference