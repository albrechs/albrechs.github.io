var farm = document.querySelector('.farm');
var Barnyard = [];

var iceCube = {
  name: 'Ice Cube',
  sayings: [
    'Bye felicia',
    'Today was a good day',
    'Cant learn shit talking to no stupid ass bitches',
    'Just let clowns do what clowns do and watch the show',
    'Create your own path, hone your talent, be ready to show your talent, and dont doubt yourself',
    'Humpty Dumpty sat on the wall with a joint, drinking some eight-ball',
    'You cant pussyfoot around. When youre talking to lions, you cant meow like a pussycat',
    'I think the worst thing you can do about a situation is nothing',
    'Dont worry about being a star, worry about doing good work, and all that will come to you',
    'If you born in the mud, you gonna be dirty, and people dont understand that',
    'Doing it your own way, not having to go exactly by the book to be successful',
    'Theres nothing wrong with starting off in a box, but you got to have a plan to come out that box',
    'Get a grip, Oreo, and be true to the game',
    'Rap is just somebody getting something off his chest. Thats all it is'
  ],
  image: '/images/ice-cube.png',
  talk: function() {
    var rand = Math.floor(Math.random() * (this.sayings.length))
    console.log(rand)
    alert(this.name + ' says: ' + this.sayings[rand])
  }
}

function FarmAnimal(name, species) {
  this.name = name
  this.species = species
};
FarmAnimal.prototype.image = new String()

function Livestock(name, species, sound, disp, smell) {
  FarmAnimal.call(this, name, species, sound)
  this.disposition = disp
  this.smell = smell
};
Livestock.prototype = Object.create(FarmAnimal.prototype);

function Bull(name, species, disp, smell) {
  Livestock.call(this, name, species, disp, smell)
};
Bull.prototype = Object.create(Livestock.prototype);
Bull.prototype.sound = 'snort'
Bull.prototype.image = '/images/longhorn.png'

function Cow(name, species, disp, smell) {
  Livestock.call(this, name, species, disp, smell)
};
Cow.prototype = Object.create(Livestock.prototype);
Cow.prototype.sound = 'mooooooooooooo'
Cow.prototype.image = '/images/cow.png'

function Pig(name, species, disp, smell) {
  Livestock.call(this, name, species, disp, smell)
};
Pig.prototype = Object.create(Livestock.prototype);
Pig.prototype.sound = 'Oink!, Oink!'
Pig.prototype.image = '/images/pig.png'

function WildBoar(name, species, disp, smell) {
  Livestock.call(this, name, species, disp, smell)
};
WildBoar.prototype = Object.create(Livestock.prototype);
WildBoar.prototype.sound = '(angry noises)'
WildBoar.prototype.image = '/images/boar.png'

function Bird(name, species, sound, wingspan) {
  FarmAnimal.call(this, name, species, sound)
  this.wingspan = wingspan
};
Bird.prototype = Object.create(FarmAnimal.prototype);

function Duck(name, species, wingspan) {
  Bird.call(this, name, species, wingspan)
};
Duck.prototype = Object.create(Bird.prototype);
Duck.prototype.sound = 'Quack! Quack!'
Duck.prototype.image = '/images/duck.png'

function Chicken(name, species, wingspan) {
  Bird.call(this, name, species, wingspan)
};
Chicken.prototype = Object.create(Bird.prototype);
Chicken.prototype.sound = 'Cluck! Cluck!'
Chicken.prototype.image = '/images/chicken.png'

FarmAnimal.prototype.talk = function() {
  this.run()
  alert(this.name + ' the ' + this.species + ' says ' + this.sound)
};

FarmAnimal.prototype.run = function() {
  var animalElement = document.getElementById(this.name)
  var bottom = Math.floor(Math.random() * 50);
  animalElement.style.bottom = bottom + '%';
  var left = Math.floor(Math.random() * 90)
  animalElement.style.left = left + '%';
}

var bull = new Bull('Heff', 'longhorn', 'happy', 'pretty rough');
var pig = new Pig('Wilbur', 'swine', 'happy', 'bearable');
var boar = new WildBoar('Rex', 'boar', 'angry', 'Terrible');
var duck = new Duck('Waddles', 'rubber ducky', '36 inches');
var chicken = new Chicken('Princess Lay-a', 'hen', '18 inches');
var cow = new Cow('Bessie', 'dairy cow', 'content', 'definitely been worse')

Barnyard.push(bull, pig, boar, duck, chicken, cow, iceCube);
console.log(Barnyard);

Barnyard.forEach(function(animal) {
  var animalElement = document.createElement('div')
  animalElement.id = animal.name
  animalElement.style.backgroundImage = 'url(' + animal.image + ')'
  var bottom = Math.floor(Math.random() * 50);
  animalElement.style.bottom = bottom + '%';
  var left = Math.floor(Math.random() * 90)
  animalElement.style.left = left + '%';
  animalElement.classList.add('animal')
  animalElement.onclick = function() {
   animal.talk();
  }
  farm.appendChild(animalElement)
})