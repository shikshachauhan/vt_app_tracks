require_relative '../lib/pluralize.rb'
require 'time'

class SumTime
  TIME_PATTERN = /^(\d\d?):(\d\d):(\d\d)$/
  def add_time(*time)
    temp = total_time = Time.parse('0:0:0')
    begin
      time.each_with_index do |t, index|
        TIME_PATTERN =~ t
        time[index] = Time.parse("#{ $1 }:#{ $2 }:#{ $3 }")
        total_time += time[index].sec + time[index].min * 60 + time[index].hour * 60 * 60
      end
      days = (total_time.to_i - temp.to_i) / (24 * 60 * 60)
      
      (days > 0) ? total_time.strftime("#{ days } #{ Pluralize.new.pluralize('day', days) } & %T") : total_time.strftime("%T")

    rescue ArgumentError
      'invalid time'
    end
  end
end
