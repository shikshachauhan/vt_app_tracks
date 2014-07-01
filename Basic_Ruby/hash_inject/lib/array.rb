class Array

	def with_key_as_size
    size_key_hash = Hash.new { |hash, key| hash[key] = [] }
    
    self.each do |val|
      size_key_hash[val.to_s.length] << val
    end
    
    size_key_hash
  end

  def odd_even_segregation

		with_key_as_size.inject(Hash.new { |hash, key| hash[key] = [] } ) do |memo, (key, value)|
		  key.odd? ? memo["odd"] << value : memo["even"] << value
			memo
		end

	end

end
