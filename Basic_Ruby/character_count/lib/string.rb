class String
  def count_character
    temp_hash = Hash.new { |hash, key| hash[key] = 0 }
    each_char do |char|
      case char
      when ('A'..'Z')
        temp_hash['upper_case'] += 1
      when ('a'..'z')
        temp_hash['lower_case'] += 1
      when ('0'..'9')
        temp_hash['digit'] += 1
      else
        temp_hash['special_hash'] += 1
      end
    end
    temp_hash
  end
end