class Employee
  attr_accessor :name, :emp_id, :designation
  def initialize(name, emp_id, designation)
    @name, @emp_id, @designation = name, emp_id, designation
  end
  def to_s
    "#{ name }(EmpId:#{ emp_id })"
  end
end
