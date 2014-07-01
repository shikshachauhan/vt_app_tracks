class Hash
	def count_occurence(string)
    occurence_count = Hash.new(0) 

    string.each_char do |val|
      occurence_count[val] += 1
    end
    occurence_count
  end
end
