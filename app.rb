require_relative 'Person'

bob = Person.new "Bob !", 15

jon = Person.new "Dwadi" , 12

#puts "Hello".chars.any? "a"
bob.greet
jon.greet
jon.rename "Jon"

if jon.older? bob
    puts "#{jon.name} is the older one"
else
    puts "#{bob.name} is the older one"
end
#puts bob.name
#bob.name = input
jon.greet
bob.introduce
