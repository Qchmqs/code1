class Person
   attr_accessor :name, :age
   
   def initialize name, age
      @name = name
      raise "Age is not a number" unless age.kind_of? Numeric
      @age = age
   end

   def greet
      puts "Hello, I am #{@name}"
   end

   def introduce
      puts "I am #{@age} years old"
   end

   def rename name
      @name = name
   end

   def older? other
      return @age > other.age
   end
end
