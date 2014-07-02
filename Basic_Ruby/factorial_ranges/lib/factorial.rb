class Factorial
  def find_factorial(num)
    return 1 if num == 0
    factorial = (1..num).inject(:*)
  end
end