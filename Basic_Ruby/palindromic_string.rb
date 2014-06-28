class String 
  def palindrome?(string)
    string==string.reverse
  end
end

input=gets
input=input.chomp

while (input!="q" and input!="Q")  do
  if(String.new.palindrome?(input)) then
    puts "#{input} is a Palindrome"
  else
    puts "#{input} is not a Palindrome"
  end
  input=gets
  input=input.chomp
end
