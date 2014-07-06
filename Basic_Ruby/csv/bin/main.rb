require_relative '../lib/format_converter.rb'

employee_file = FormatConverter.new
employee_file.read("../data/employee_details.csv")
employee_file.write("../data/output.txt")