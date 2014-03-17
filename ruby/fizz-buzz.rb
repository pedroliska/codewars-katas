def fizzbuzz(n)
  (1..n).map do |i|
    word = 'Fizz' if i % 3 == 0
    word = "#{word}Buzz" if i % 5 == 0
    word || i
  end
end

puts fizzbuzz 16