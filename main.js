var strings = [
  'Sustainable Tourism Information',
  'Eco-friendly Accommodations',
  'Eco-conscious Attractions',
  'Green Dining Options'
]

function convertStringsToUppercase(strings) {
  return strings.map((string) => string.toUpperCase());
}

const uppercaseStrings = convertStringsToUppercase(strings);

const typed = new Typed('.typed', {
  strings: uppercaseStrings,  
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1500,
  startDelay: 1000,
  loop: true
});