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
    return 'invalid input' if(time1.nil? || time2.nil?)
    time3 = time1 + time2.sec + time2.min * 60 + time2.hour * 60 * 60
    time3.days = time3.day != time1.day
    time3
  end
end
