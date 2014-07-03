class String
  def vowel_by_star
    vowel_pattern = /[aeiou]/i
    gsub(vowel_pattern, '*')
  end
end