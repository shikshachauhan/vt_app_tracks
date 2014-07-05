require_relative 'incorrect_case_exception.rb'
require_relative 'empty_string_exception.rb'

class Name

  def check_validity(first_name, last_name)
    raise EmptyStringException.new if(first_name.empty?|| last_name.empty?)
    raise IncorrectCaseException.new if(first_name[0] != first_name[0].upcase)
  end

  def initialize(first_name, last_name)
    begin
      check_validity(first_name, last_name)
      @first_name = first_name
      @last_name = last_name
    rescue IncorrectCaseException
      puts "Invalid input : \n\tFirst character of First Name must be capital"
    rescue EmptyStringException => detail
      puts "Can't initialize : \n\tBoth your First Name and last name must be provided"
    end
  end

end