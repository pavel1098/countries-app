users = [{
	id: 'as23',
	nick: 'Octopus',
	firstName: 'John',
	LastName: 'Dou'
}, {
	id: 'as25',
	nick: 'Star',
	firstName: 'Andy',
	LastName: 'Lee'
}, {
	id: 'as77',
	nick: 'Wally',
	firstName: 'Liza',
	LastName: 'Corty'}]


const transformArr = (array) => {
const obj = {};
array.forEach((elem) => {
   for (prop in elem) {
     obj[elem.id] = {...elem}
   }
 })
 return obj
}
console.log(transformArr(users));
