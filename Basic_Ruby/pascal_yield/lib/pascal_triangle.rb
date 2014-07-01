class PascalTriangle
  def pascal(size)
    arr = [1]
    for i in (0..size)
      yield arr
      arr_new=Array.new(i + 2)
      arr_new[0]=1
      for j in(1..i)
        arr_new[j] = arr[j - 1] + arr[j]
      end
      arr_new[i + 1] = 1
      arr = arr_new
    end
  end
end