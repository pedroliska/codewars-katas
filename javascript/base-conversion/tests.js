var Alphabet = {
  BINARY:        '01',
  OCTAL:         '01234567',
  DECIMAL:       '0123456789',
  HEXA_DECIMAL:  '0123456789abcdef',
  ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz',
  ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};
var Test = {
  assertEquals: function(comp1, comp2, errorMessage) {
    expect(comp1).toEqual(comp2);
  }
};

describe('example tests', function() {
  var bin = Alphabet.BINARY, oct = Alphabet.OCTAL, dec = Alphabet.DECIMAL, hex = Alphabet.HEXA_DECIMAL,
      allow = Alphabet.ALPHA_LOWER, alup = Alphabet.ALPHA_UPPER, alpha = Alphabet.ALPHA, alnum = Alphabet.ALPHA_NUMERIC;
  
  it('should convert between numeral systems', function() {
    Test.assertEquals(convert("15", dec, bin), '1111', '"15" dec -> bin');
    Test.assertEquals(convert("15", dec, oct), '17', '"15" dec -> oct');
    Test.assertEquals(convert("1010", bin, dec), '10', '"1010" bin -> dec');
    Test.assertEquals(convert("1010", bin, hex), 'a', '"1010" bin -> hex');
  });
  
  it('should convert between other bases', function() {
    Test.assertEquals(convert("0", dec, alpha), 'a', '"0" dec -> alpha');
    Test.assertEquals(convert("27", dec, allow), 'bb', '"27" dec -> alpha_lower');
    Test.assertEquals(convert("hello", allow, hex), '320048', '"hello" alpha_lower -> hex')
    Test.assertEquals(convert("SAME", alup, alup), 'SAME', '"SAME" alpha_upper -> alpha_upper');
  });
});