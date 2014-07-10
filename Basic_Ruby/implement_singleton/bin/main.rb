require_relative '../lib/single_instance.rb'

puts SingleInstance.new.object_id
puts SingleInstance.new.object_id
puts SingleInstance.new.object_id
