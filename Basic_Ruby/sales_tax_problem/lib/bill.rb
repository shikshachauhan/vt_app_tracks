require_relative 'product.rb'

class Bill

  def generate_bill
    create_bill
    calculate_bill
    print_bill
  end

  def create_bill
    @commodity_details = []
    i = -1

    begin
      i += 1
      @commodity_details.push(Product.new)
      #take input
      print 'Name of the product: '
      @commodity_details[i].name = gets.chomp
      print 'Imported?: '
      @commodity_details[i].imported = gets.chomp
      print 'Exempted from sales tax? '
      @commodity_details[i].exempted = gets.chomp
      print 'Price: '
      @commodity_details[i].price = gets.chomp
      print 'Do you want to add more items to your list(y/n): '
    end while(gets.chomp == 'y')
  end

  def calculate_bill
    @sales_tax = 0
    @total = 0

    @commodity_details.each do |product|
      if(product.imported == "yes" && product.exempted == "yes")
        rate = 0.05
      elsif(product.imported == "yes" && product.exempted == 'no')
        rate = 0.15
      elsif(product.imported == 'no' && product.exempted == 'yes')
        rate = 0
      else
        rate = 0.1
      end
      @sales_tax += product.price.to_i * rate
      @total += product.price.to_i
    end
    @total_bill = @sales_tax + @total
  end

  def print_bill
    puts '***********Your Bill***********'
    @commodity_details.each { |product| puts "#{ product.name }__________$#{ product.price }" }
    puts '*******************************'
    puts "Total __________$#{ @total }"
    puts "sales tax __________$#{ @sales_tax }"
    puts "Amount to be paid is $#{ @total_bill.round }"
  end

end