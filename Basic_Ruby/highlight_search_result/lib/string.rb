class String

  def highlight_word(word)
    word_regex = /(#{word})/i
    high_lighted_text = gsub(word_regex, '(\1)')
    word_count = scan(word_regex).length
    "#{high_lighted_text}\nTotal Occurences found: #{word_count}\n "
  end

end