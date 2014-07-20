require 'time'

class Time
  PATTERN = /^(\d|([0-1]\d)|(2[0-3]))(:(\d|([0-5]\d))){2}$/
  attr_accessor :days

  def to_s
    @days ? strftime('1 day & %T') : strftime('%T')
  end
  def self.valid?(time_str)
    PATTERN =~ time_str
  end
  def self.try_convert(time_str)
    parse(time_str) if valid?(time_str)
  end
  def self.sum(time_str1, time_str2)
    time1 = try_convert(time_str1)
    time2 = try_convert(time_str2)
    if(time1 && time2)
      time3 = time1 + time2.sec + time2.min * 60 + time2.hour * 60 * 60
      time3.days = time3.day != time1.day
      time3
    else
      'invalid input'
    end
  end
end
