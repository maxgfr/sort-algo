/*
var array_normal = [
  'N', 'N', 'N',
  'N', 'N', 'N',
  'N', 'N', 'N',
  'N'
]
var array_sponso = [
  'S', 'S', 'S',
  'S', 'S', 'S',
  'S', 'S'
]
*/
/*
var array_normal = [
  'N', 'N', 'N',
  'N', 'N', 'N',
  'N', 'N'
]
var array_sponso = [
  'S', 'S', 'S',
  'S', 'S'
]
*/
/*
var array_normal = [
  'N', 'N', 'N',
  'N', 'N', 'N',
  'N', 'N', 'N',
  'N', 'N', 'N',
  'N',
]
var array_sponso = [
  'S', 'S', 'S',
  'S'
]
*/
/*
var array_normal = [
  'N', 'N', 'N',
]
var array_sponso = [
  'S', 'S', 'S',
  'S', 'S', 'S',
  'S', 'S', 'S', 'S'
]
*/
var array_normal = [
  'N', 'N', 'N',
  'N', 'N', 'N',
  'N', 'N', 'N',
  'N', 'N', 'N',
  'N', 'N', 'N',
]
var array_sponso = [
  'S', 'S', 'S'
]
var array_faible = array_fort = new_arr = [];
var length_1 = array_normal.length;
var length_2 = array_sponso.length;
var all_length = length_1 + length_2;
var j = reste = frq = k = l = 0;
if(length_1 - length_2 > 0) {
  frq = parseInt(length_1 / length_2) + 1
  reste = length_1 % length_2;
  array_faible = array_sponso
  array_fort = array_normal
} else {
  frq = parseInt(length_2 / length_1) + 1
  array_faible = array_normal
  array_fort = array_sponso
  reste = length_2 % length_1;
}
console.log('frequence : '+frq);
console.log('reste : '+reste)
for(var i=0; i<reste; i++){
  new_arr.push(array_fort[l]);
  l++;
}
for(var i=0; i<all_length-reste; i++) {
  if(i == 0 || i % frq == 0) {
    new_arr.push(array_faible[k]);
    k++;
  } else {
    new_arr.push(array_fort[l]);
    l++;
  }
}
new_arr = new_arr.reverse();
console.log('length result : '+ new_arr.length);
console.log(new_arr)
