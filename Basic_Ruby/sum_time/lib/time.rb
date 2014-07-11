require 'time'

class Time
  def add(time)
    sum = self + time.sec + time.min * 60 + time.hour * 60 * 60
  end
end
