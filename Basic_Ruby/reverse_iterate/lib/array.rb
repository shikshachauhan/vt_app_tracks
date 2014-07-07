class Array
  def reverse_iterate
    index = self.length - 1
    while(index > -1)
      yield self[index]
      index -= 1
    end
  end
end