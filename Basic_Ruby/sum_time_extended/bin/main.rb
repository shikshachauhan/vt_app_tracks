require_relative '../lib/time_summation.rb'
require_relative '../lib/pluralize.rb'

time1 = TimeSummation.new('2:23:07')
time2 = TimeSummation.new('23:53:45')
time3 = TimeSummation.new('2:34:22')
time4 = TimeSummation.new('23:53:45')
time5 = TimeSummation.new('23:53:45')
time6 = TimeSummation.new('23:53:45')
time7 = TimeSummation.new('23:53:45')
time8 = TimeSummation.new('23:53:45')
time9 = TimeSummation.new('23:53:45')

if(time1.valid? && time2.valid? && time3.valid? && time4.valid? && time5.valid? && time6.valid? && time7.valid? && time8.valid? && time9.valid?)
  sum_time = TimeSummation.new
  sum_time.add_time(time1,time2,time4,time5,time6,time7,time8,time9,time3)

  if(sum_time.days == 0)
    print("%02d:%02d:%02d" %[sum_time.hour, sum_time.minute, sum_time.second])
  else
    print("#{sum_time.days} #{ Pluralize.new.pluralize('day', sum_time.days) } & %02d:%02d:%02d" %[sum_time.hour, sum_time.minute, sum_time.second])
  end

else
  puts 'invalid time'
end
