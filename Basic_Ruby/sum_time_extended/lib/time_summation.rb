class TimeSummation
  attr_reader :days, :hour, :minute, :second
  TIME_PATTERN = /^(\d\d?):(\d\d):(\d\d)$/

  def initialize(time_string = '')
    if(TIME_PATTERN =~ time_string)
      @hour, @minute, @second = $1.to_i, $2.to_i, $3.to_i
    end
    @days = 0
  end

  def valid?
    @hour < 24 && @hour > -1 && @minute > -1 && @minute < 60 && @second > -1 && @second < 60
  end

  def normalize_time
    if(@second > 59)
      factor = @second / 60
      @second -= 60 * factor
      @minute += factor
    end

    if(@minute > 59)
      factor = @minute / 60
      @minute -= 60 * factor
      @hour += factor
    end

    if(@hour > 23)
      factor = @hour / 24
      @hour -= 24 * factor 
      @days = factor
    end
  end 

  def add_time(*time)
    @second, @minute, @hour = 0, 0, 0
    time.each do |t|
      @second += t.second
      @minute += t.minute
      @hour += t.hour
    end
      normalize_time
  end
end
