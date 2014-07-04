class PascalTriangle
  def pascal(size)
    arr = [1]

    (size+1).times do |i|
      yield arr
      arr_new = Array.new(i + 2)
      arr_new[0] = 1 

      1.upto(i) do |j|
        arr_new[j] = arr[j - 1] + arr[j]
      end

      arr_new[i + 1] = 1
      arr = arr_new
    end

  end
end