def fizzbuzz(n)
  ret_val = []
  n.times do |i| 
    num = i + 1
    word = 'Fizz' if num % 3 == 0
    word = "#{word}Buzz" if num % 5 == 0
    ret_val.push(word || num)
  end
  ret_val
end

puts fizzbuzz 16