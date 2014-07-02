require 'prime'

class Prime
  def find_primes(num)
    primes = []

    1.step(num, 2) do |var|
        if Prime.prime?(var)
          primes << var
        end
    end
    
    primes
  end
end