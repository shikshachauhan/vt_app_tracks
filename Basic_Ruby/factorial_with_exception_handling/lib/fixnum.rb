class Fixnum
  def find_factorial
    return 1 if self == 0
    begin
      raise '-ve integer error' if self < 0
      factorial = (1..self).inject(:*)

      rescue RuntimeError
      puts "The program can't find factorials for negative Numbers"
    end
  end
end