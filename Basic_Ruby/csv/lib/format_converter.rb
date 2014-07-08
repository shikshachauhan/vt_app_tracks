require 'csv'
require_relative 'employee.rb'

class FormatConverter

  BASE_PATH = '../data'
  def store_details(input_file)
    @employee_datails = Hash.new { |hash, key| hash[key] = Array.new }
    CSV.foreach(File.join(BASE_PATH, input_file), { headers: true } ) do |row|
      employee = Employee.new
      employee.name = row[0]
      employee.emp_id = row[1].strip
      employee.designation = row[2].strip
      @employee_datails[employee.designation.downcase.to_sym].push(employee)
    end
  end

  def write(output_file)
    File.open(File.join(BASE_PATH, output_file), 'w') do |file|
      @employee_datails.each do |key, array|
        file.puts
        file.print "#{ key.capitalize }"
        (array.length > 1) ? file.puts('s') : (file.puts)
        file.puts array
      end
    end
  end
end