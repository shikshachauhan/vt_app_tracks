class String
  def highlight_word(word)
    search_pattern = /(#{ word })/i
    "#{ gsub(search_pattern, '(\1)') }\nTotal Occurences found: #{ scan(search_pattern).length }\n "
  end
end
