class Product
  attr_accessor :name, :imported, :exempted, :price
  # attr_reader :sales_tax, :import_duty

    def sales_tax
      exempted == 0 ? price * 0.1 : 0
    end

    def import_duty
      imported == 1 ? price * 0.05 : 0
    end
end
