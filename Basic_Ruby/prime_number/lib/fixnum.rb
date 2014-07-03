require 'prime'

class Fixnum
  def find_primes_upto(num)
    primes = []

    step(num, 2) do |var|
      primes << var if var.prime?
    end

    primes
  end
end