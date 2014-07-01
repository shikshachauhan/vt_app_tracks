class VowelSubstitution
  def vowel_by_star(text)
    text.gsub(/[aeiou]/i, '*')
  end
end
