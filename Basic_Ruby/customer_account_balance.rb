class Customer
   
    @@account_num=1

    def initialize(name)
      @name=name
      @account_no=@@account_num
      @@account_num=@@account_num+1
      @balance=1000
    end

    def deposite(amount)
      @balance+=amount
    end

    def withdrawal(amount)
      @balance-=amount
    end
end
