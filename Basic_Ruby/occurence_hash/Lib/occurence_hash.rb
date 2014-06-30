class Occurence_Hash
	def occurence in_string
      hash=Hash.new(0) 
      for i in (0 ... in_string.length)do
        hash[in_string[i]]=hash[in_string[i]]+1
      end

      for i in ('a'..'z')do
        yield(i,hash[i])
      end
    end
end