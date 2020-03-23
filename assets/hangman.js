var wordlist = [
				"United States of America",
				"United Kingdom",
				"Canada",
				"North Corea",
				"Serbia",
				"Croatia",
				"Italia",
				"Spain",
				"Bulgaria",
				"North Macedonia",
				"Bosnia and Hercegovina",
				"Netherland",
				"France",
				"Germany",
				"Austria",
				"Monte Negro",
				"Greece",
				"Romania",
				"Poland",
				"Turkey",
				"Sweeden",
				"Denmark"
				]
var item = wordlist[Math.floor(Math.random() * wordlist.length)]

$('#wordField').text(item);

console.log("word is " + item);
var countWords = item.split(" ");
console.log(countWords.length + " word/s");

$.each( countWords, function( key, value ) {
  console.log( key + " - " + value );

  // count letters in each word
  var letters = value.length;
  console.log(letters + " letters");
});