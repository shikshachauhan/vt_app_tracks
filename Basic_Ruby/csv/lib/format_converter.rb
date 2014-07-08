require 'csv'
require_relative 'employee.rb'
require_relative 'pluralize.rb'

class FormatConverter

  BASE_PATH = '../data'
  def store_details(input_file)
    @employee_datails = Hash.new { |hash, key| hash[key] = Array.new }
    CSV.foreach(File.join(BASE_PATH, input_file), { headers: true } ) do |row|
      employee = Employee.new(row[0], row[1].strip, row[2].strip)
      @employee_datails[employee.designation.downcase.to_sym].push(employee)
    end
  end

  def write(output_file)
    File.open(File.join(BASE_PATH, output_file), 'w') do |file|
      @employee_datails.each do |key, array|
        file.puts
        file.puts Pluralize.new.pluralize(key.capitalize.to_s, array.length)
        file.puts array
      end
    end
  end
end
