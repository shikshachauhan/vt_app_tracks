require 'prime'

class Fixnum
  def find_primes_upto(num)
    primes = []

    step(num, 2) { |var| primes << var if var.prime? }

    primes
  end
end