require_relative 'incorrect_case_exception.rb'
require_relative 'empty_string_exception.rb'

class Name

  def check_validity(first_name, last_name)
    raise EmptyString, 'First Name is not provided', caller if(first_name.nil? || first_name.empty?)
    raise EmptyString, 'Last Name is not provided', caller if(last_name.empty? || last_name.nil?)
    raise IncorrectCase, 'First letter of first name not capital', caller if(first_name[0] != first_name[0].upcase)
  end

  def initialize(first_name, last_name)
    begin
      check_validity(first_name, last_name)
      @first_name = first_name
      @last_name = last_name
    end
  end

end
