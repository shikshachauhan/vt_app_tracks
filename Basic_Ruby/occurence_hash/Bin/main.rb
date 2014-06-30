require_relative "../Lib/occurence_hash.rb"
check_occur=Occurence_Hash.new
check_occur.occurence(gets.chomp){|i,hash_i|puts "The no. of occurences of #{i} is #{hash_i}"}