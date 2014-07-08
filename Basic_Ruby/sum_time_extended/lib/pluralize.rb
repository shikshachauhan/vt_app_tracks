class Pluralize
  def pluralize(string, count)
    (count > 1) ? string + 's' : string
  end
end
