require_relative 'time'

class TimeSum

  TIME_PATTERN = /^(\d|([0-1]\d)|(2[0-3]))(:(\d|([0-5]\d))){2}$/

  def self.valid?(time_str)
    TIME_PATTERN =~ time_str
  end

  def self.display(time, day)
    day ? time.strftime("1 day & %T") : time.strftime("%T")
  end

  def self.validate_and_display(time_str1, time_str2)
    if(valid?(time_str1) && valid?(time_str2))
      time1 = Time.parse(time_str1)
      time2 = Time.parse(time_str2)
      time = time1.add(time2)
      display(time, time.day != time1.day)
    else
      'invalid input'
    end
  end

end