require_relative '../lib/time_summation.rb'

time1 = TimeSummation.new('2:23:07')
time2 = TimeSummation.new('3:53:45')

if(time1.valid? && time2.valid?)
  sum_time = TimeSummation.new
  sum_time.add_time(time1, time2)

  if(sum_time.days == 0)
    print("%02d:%02d:%02d" %[sum_time.hour, sum_time.minute, sum_time.second])
  else
    print("#{sum_time.days} day & %02d:%02d:%02d" %[sum_time.hour, sum_time.minute, sum_time.second])
  end

else
  puts 'invalid time'
end