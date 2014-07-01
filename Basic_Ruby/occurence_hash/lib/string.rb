class String
  def count_occurence
    occurence_count = Hash.new(0)

    each_char do |val|
      occurence_count[val] += 1
    end
    occurence_count
  end
end
