require_relative "../lib/vowel_substitution.rb"

text=gets.chomp
text=Vowel_Substitution.new.vowel_by_star text
puts text