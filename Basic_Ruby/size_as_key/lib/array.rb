class Array
  def with_key_as_size
    size_key_hash = Hash.new { |hash, key| hash[key] = [] }
    self.each do |val|
      size_key_hash[val.to_s.length] << val
    end
    size_key_hash
  end
end
 