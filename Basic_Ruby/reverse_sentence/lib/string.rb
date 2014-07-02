class String
  def reverse_sentence
    scan(/[\w]+/).reverse.join(' ')
  end
end