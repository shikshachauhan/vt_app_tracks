class Fixnum
  def find_factorial
    return 1 if self == 0
    factorial = (1..self).inject(:*)
  end
end