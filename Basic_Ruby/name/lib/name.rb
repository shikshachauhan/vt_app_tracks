require_relative 'incorrect_case_exception.rb'
require_relative 'empty_string_exception.rb'

class Name

  def check_validity!(first_name, last_name)
    raise EmptyString, 'First Name is not provided' if(blank?(first_name))
    raise EmptyString, 'Last Name is not provided' if(blank?(last_name))
    raise IncorrectCase, 'First letter of first name not capital' if(first_name[0] != first_name[0].upcase)
  end
  
  def blank?(field)
    field.nil? || field.empty?
  end

  def initialize(first_name, last_name)
    check_validity!(first_name, last_name)
    @first_name = first_name
    @last_name = last_name
  end

end
