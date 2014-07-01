class Customer
   
    @@account_num = 1

    def initialize(name, balance = 1000)
      @name = name
      @account_no = @@account_num
      @@account_num = @@account_num + 1
      @balance = balance
    end

    def deposite(amount)
      @balance += amount
    end

    def withdrawal(amount)
      if amount <= @balance
        @balance -= amount
      end
      @balance
    end
end