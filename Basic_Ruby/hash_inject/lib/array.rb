class Array

  def group_by_length
    temporary_hash = Hash.new { |hash, key| hash[key] = [] }
    each do |val|
      temporary_hash[val.to_s.length] << val
    end
    temporary_hash
  end

  def odd_even_segregation

    group_by_length.inject(Hash.new { |hash, key| hash[key] = [] } ) do |memo, (key, value)|
      key.odd? ? memo["odd"] << value : memo["even"] << value
      memo
    end

  end

end