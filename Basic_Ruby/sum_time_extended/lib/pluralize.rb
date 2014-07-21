class Pluralize
  def self.word(str, count)
    (count == 1) ? str : str + 's'
  end
end
