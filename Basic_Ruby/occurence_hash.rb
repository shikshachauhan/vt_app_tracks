in_string=gets
hash=Hash.new(0)
for i in (0 ... in_string.length)do
  hash[in_string[i]]=hash[in_string[i]]+1
end
puts "The Hash values stored are::"
for i in ('a'..'z')do
  puts "The no. od occurences of #{i} is #{hash[i]}"
end
