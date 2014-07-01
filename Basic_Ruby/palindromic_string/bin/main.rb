require_relative "../lib/string.rb"

input = gets.chomp
while !(input =~ /^q$/i)  do
  if input.palindrome? then
    puts "#{input} is a Palindrome"
  else
    puts "#{input} is not a Palindrome"
  end
  input = gets.chomp
end