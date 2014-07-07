require_relative 'negative_factorial_exception.rb'

class Fixnum
  def find_factorial
    return 1 if self == 0
    begin
      raise NegativeFactorialException.new if(self < 0)
      factorial = 1
      (1..self).each { |var| factorial *= var }
      factorial
      rescue NegativeFactorialException
      puts "The program can't find factorials for negative Numbers"
    end
  end
end