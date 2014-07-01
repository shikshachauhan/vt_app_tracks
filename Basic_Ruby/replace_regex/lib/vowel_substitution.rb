class Vowel_Substitution
	def vowel_by_star text
		text.gsub(/[aeiou]/i,'*')
	end
end
