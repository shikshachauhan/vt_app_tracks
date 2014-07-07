require 'csv'

class FormatConverter

  BASE_PATH = "../data"
  def read(input_file)
    @employee_datails = Hash.new { |hash, key| hash[key] = Array.new }
    CSV.foreach("#{BASE_PATH}/#{input_file}", { headers: true } ) do |row|
      @employee_datails[row[2].strip].push("#{row[0]}(EmpId:#{row[1].strip})") 
    end
  end

  def write(output_file)
    File.open("#{BASE_PATH}/#{output_file}", "w+") do |file|
      @employee_datails.each do |key, array|
        file.puts
        key = key + 's' if(array.length > 1)
        file.puts "#{key}"
        file.puts array
      end
    end
  end
end