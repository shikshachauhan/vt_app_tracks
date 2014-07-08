require_relative 'product.rb'

class Bill

  def initialize
    @cart = []
  end
  def generate_bill
    build_bill
    calculate_bill
    print_bill
  end

  def build_bill
    begin
      product = Product.new
      #take input
      print 'Name of the product: '
      product.name = gets.chomp
      print 'Imported?: (1/0)'
      product.imported = gets.chomp.to_i
      print 'Exempted from sales tax?: (1/0) '
      product.exempted = gets.chomp.to_i
      print 'Price: '
      product.price = gets.chomp.to_i
      @cart.push(product)

      print 'Do you want to add more items to your list(y/n): '
    end while(gets.chomp == 'y')
  end

  def calculate_bill
    @sales_tax = 0
    @import_duty = 0
    @total = 0

    @cart.each do |product|  
      @sales_tax += product.sales_tax
      @import_duty += product.import_duty
      @total += product.price
    end
    @total_bill = @sales_tax + @import_duty + @total
  end

  def print_bill
    puts "\n***********Your Bill***********"
    puts "product, price, sales-tax, import-duty"
    @cart.each do |product|
      puts "#{ product.name }, $#{ product.price }, $#{ product.sales_tax }, $#{ product.import_duty }"
    end
    puts "\n*******************************"
    puts "Total __________$#{ @total }"
    puts "sales tax __________$#{ @sales_tax }"
    puts "import duty __________$#{ @import_duty }"
    puts "\n***********Your Bill***********"
    puts "Amount to be paid is $#{ @total_bill.round }"
    puts 'Thankyou for shopping with us :)'
  end

end
