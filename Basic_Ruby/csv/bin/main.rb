require_relative '../lib/format_converter.rb'

employee_file = FormatConverter.new
employee_file.store_details("employee_details.csv")
employee_file.write("output.txt")