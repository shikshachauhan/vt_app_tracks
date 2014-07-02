class String
  def vowel_by_star
    gsub(/[aeiou]/i, '*')
  end
end