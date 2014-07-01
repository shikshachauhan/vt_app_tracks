class Array

	def group_by_size
    size_array_pair = Hash.new { |hash, key| hash[key] = [] }
    each do |val|
      size_array_pair[val.to_s.length] << val
    end
    size_array_pair
  end

  def odd_even_segregation

		group_by_size.inject(Hash.new { |hash, key| hash[key] = [] } ) do |memo, (key, value)|
		  key.odd? ? memo["odd"] << value : memo["even"] << value
			memo
		end

	end

end
