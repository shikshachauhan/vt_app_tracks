class Array
	def array_hash
		hash = Hash.new
		for val in self
			l = val.to_s.length
			if(hash.has_key? ( l ))
				hash[l] << val 
			else
				hash[l] = Array.new << val 
			end
		end
		memo_type = Hash.new { |hash, key| hash[key] = [] }
		hash.inject(memo_type) do |memo,(key,value)|
			if(key.odd?)
					memo["odd"]<<value
			else
					memo["even"]<<value
			end
			memo
	    end
	end
end