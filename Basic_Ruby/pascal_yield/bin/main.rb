require_relative "../lib/pascal_triangle.rb"

Pascal_Triangle.new.pascal(6) do |arr| 
	arr.each {|val|print "#{val} "}
	puts()
end