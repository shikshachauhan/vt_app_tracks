def palindrome?(string)
  string==string.reverse
end

while true do
  input=gets
  input=input.chomp
  if(input=="q"||input=="Q")
    break
  end
  if(palindrome?(input)) then
    puts "#{input} is a Palindrome"
  else
    puts "#{input} is not a Palindrome"
  end
end
