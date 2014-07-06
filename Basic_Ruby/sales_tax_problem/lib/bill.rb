class Bill

  def create_bill
    @commodity_details = Array.new
    i = -1

    begin
      i += 1
      @commodity_details.push(Array.new(4, 0))
      #take input
      print 'Name of the product: '
      @commodity_details[i][0] = gets.chomp
      print 'Imported?: '
      @commodity_details[i][1] = gets.chomp
      print 'Exempted from sales tax? '
      @commodity_details[i][2] = gets.chomp
      print 'Price: '
      @commodity_details[i][3] = gets.chomp
      print 'Do you want to add more items to your list(y/n): '
    end while(gets.chomp == 'y')
    calculate_bill
  end

  def calculate_bill
    @sales_tax = 0
    @total = 0

    @commodity_details.each do |arr|
      if(arr[1] == "yes" && arr[2] == "yes")
        rate = 0.05
      elsif(arr[1] == "yes" && arr[2] == 'no')
        rate = 0.15
      elsif(arr[1] == 'no' && arr[2] == 'yes')
        rate = 0
      else
        rate = 0.1
      end
      @sales_tax += arr[3].to_i * rate
      @total += arr[3].to_i
    end
    @total_bill = @sales_tax + @total
    print_bill
  end

  def print_bill
    puts '***********Your Bill***********'
    @commodity_details.each { |arr| puts "#{ arr[0] }__________$#{ arr[3] }" }
    puts '*******************************'
    puts "Total __________$#{ @total }"
    puts "sales tax __________$#{ @sales_tax }"
    puts "Amount to be paid is $#{ @total_bill.round }"
  end

end