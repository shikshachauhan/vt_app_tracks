class Product
  attr_accessor :name, :imported, :exempted, :price
  attr_reader :sales_tax, :import_duty

    def set_sales_tax
      @sales_tax = (exempted == 0) ? price * 0.1 : 0
    end

    def set_import_duty
      @import_duty = (imported == 1) ? price * 0.05 : 0
    end
end
