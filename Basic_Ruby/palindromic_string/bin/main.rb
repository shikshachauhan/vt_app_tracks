require_relative "../lib/string.rb"

input = gets.chomp
while (/[q]/i.match(input) == nil)  do
  if(input.palindrome?) then
    puts "#{input} is a Palindrome"
  else
    puts "#{input} is not a Palindrome"
  end
  input = gets.chomp
end