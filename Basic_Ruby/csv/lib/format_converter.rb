require 'csv'

class FormatConverter

  def read(path)
    @arr_developer = []
    @arr_designer = []
    @arr_tester = []
    CSV.foreach(path, { headers: true } ) do |row|
      @arr_developer.push("#{row[0]}(EmpId:#{row[1]})") if (row[2] == " Developer")
      @arr_designer.push("#{row[0]}(EmpId:#{row[1]})") if (row[2] == " Designer")
      @arr_tester.push("#{row[0]}(EmpId:#{row[1]})") if (row[2] == " Tester")
    end
  end

  def write(path)
    File.open(path, "w+") do |file|
      file.puts 'Designers'
      file.puts @arr_designer
      file.puts "\nDevelopers"
      file.puts @arr_developer
      file.puts "\nTester"
      file.puts @arr_tester
    end
  end
end