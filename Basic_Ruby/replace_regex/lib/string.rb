class String
  Vowel_pattern = /[aeiou]/i
  def vowel_by_star
    gsub(Vowel_pattern, '*')
  end
end