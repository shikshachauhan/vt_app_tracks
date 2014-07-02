class Array
  def group_by_length
    temporary_hash = Hash.new { |hash, key| hash[key] = [] }
    each do |val|
      temporary_hash[val.to_s.length] << val
    end
    temporary_hash
  end
end