require_relative "../Lib/string.rb"

input = gets.chomp
while (input != "q" and input != "Q")  do
  if(input.palindrome?) then
    puts "#{input} is a Palindrome"
  else
    puts "#{input} is not a Palindrome"
  end
  input = gets.chomp
end