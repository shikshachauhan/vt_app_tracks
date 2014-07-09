require 'time'

class SumTime

  TIME_PATTERN = /^(\d\d?):(\d\d):(\d\d)$/
  def add_time(time1, time2)

    begin
      TIME_PATTERN =~ time1
      time1 = Time.parse("#{$1.to_i}:#{$2.to_i}:#{$3.to_i}")

      TIME_PATTERN =~ time2
      time2 = Time.parse("#{$1.to_i}:#{$2.to_i}:#{$3.to_i}")

      time = time1 + time2.sec + time2.min * 60 + time2.hour * 60 * 60

      (time.hour < time1.hour || time.hour < time2.hour) ? time.strftime("1 day & %T") : time.strftime("%T")

    rescue ArgumentError
      'invalid time'
    end
  end
end
