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
		puts hash
	end
end