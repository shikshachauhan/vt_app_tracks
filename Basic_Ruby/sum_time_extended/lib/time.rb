require 'time'
require_relative 'pluralize.rb'

class Time
  PATTERN = /^(\d|([0-1]\d)|(2[0-3]))(:(\d|([0-5]\d))){2}$/
  attr_accessor :days

  def to_s
    @days > 0 ? strftime("#{ @days } #{ Pluralize.word('day', @days) } & %T") : strftime('%T')
  end
  def self.valid?(time_str)
    PATTERN =~ time_str
  end
  def self.try_convert(time_str)
    parse(time_str) if valid?(time_str)
  end
  def self.sum(*time_str_array)
    time_array = time_str_array.map { |str| try_convert(str) }
    if(time_array.all?)
      sum = time_array.inject { |result, t| result + t.sec + t.min * 60 + t.hour * 60 * 60 }
      sum.days = (sum - parse('0:0:0')).to_i / (24 * 60 * 60)
      sum
    else
      'invalid input'
    end
  end
end
