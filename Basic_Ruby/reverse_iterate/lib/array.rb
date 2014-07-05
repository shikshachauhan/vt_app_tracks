class Array
  def reverse_iterate
    yield reverse.join(' ')
  end
end