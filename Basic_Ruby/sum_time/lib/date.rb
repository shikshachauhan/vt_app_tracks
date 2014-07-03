class Date

  def normalize val
    val = val.to_s
    if(val.length == 1)
      val = '0' + val
    end
    val
  end

  def to_string(hour, minute, second, date)
    hour = normalize(hour)
    minute = normalize(minute)
    second = normalize(second)

    date << "#{hour}:#{minute}:#{second}"
  end

  def add_date(date1, date2)

    return 'invalid date' if /^(\d\d?):(\d\d):(\d\d)$/ !~ date1
    hour1 = $1.to_i
    minute1 = $2.to_i
    second1 = $3.to_i

    return 'invalid date' if /^(\d\d?):(\d\d):(\d\d)$/ !~ date2
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

    date = ""

    if hour > 24
      hour -= 24
      date << '1 day & '
    end

    to_string(hour, minute, second, date)

  end

end