class Time
  def normalize val
    val = val.to_s
    if(val.length == 1)
      val = '0' + val
    end
    val
  end

  def to_string(hour, minute, second, time)
    hour = normalize(hour)
    minute = normalize(minute)
    second = normalize(second)

    time << "#{hour}:#{minute}:#{second}"
  end

  def add_time(time1, time2)

    return 'invalid time' if /^(\d\d?):(\d\d):(\d\d)$/ !~ time1
    hour1 = $1.to_i
    minute1 = $2.to_i
    second1 = $3.to_i

    return 'invalid time' if /^(\d\d?):(\d\d):(\d\d)$/ !~ time2
    hour2 = $1.to_i
    minute2 = $2.to_i
    second2 = $3.to_i

    second = second1 + second2
    minute = minute1 + minute2
    hour = hour1 + hour2

    if second > 60
      second -= 60
      minute += 1
    end

    if minute > 60
      minute -= 60
      hour += 1
    end

    time = ""

    if hour > 24
      hour -= 24
      time << '1 day & '
    end

    to_string(hour, minute, second, time)

  end

end