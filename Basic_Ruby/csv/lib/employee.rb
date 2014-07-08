class Employee
  attr_accessor :name, :emp_id, :designation
  def to_s
    "#{name}(EmpId:#{emp_id})"
  end
end