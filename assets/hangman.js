var wordlist = [
"Afghanistan"
,"Akrotiri"
,"Albania"
,"Algeria"
,"American Samoa"
,"Andorra"
,"Angola"
,"Anguilla"
,"Antarctica"
,"Antigua and Barbuda"
,"Argentina"
,"Armenia"
,"Aruba"
,"Ashmore and Cartier Islands"
,"Australia"
,"Austria"
,"Azerbaijan"
,"Bahamas"
,"Bahrain"
,"Bangladesh"
,"Barbados"
,"Bassas da India"
,"Belarus"
,"Belgium"
,"Belize"
,"Benin"
,"Bermuda"
,"Bhutan"
,"Bolivia"
,"Bosnia and Herzegovina"
,"Botswana"
,"Bouvet Island"
,"Brazil"
,"British Indian Ocean Territory"
,"British Virgin Islands"
,"Brunei"
,"Bulgaria"
,"Burkina Faso"
,"Burma"
,"Burundi"
,"Cambodia"
,"Cameroon"
,"Canada"
,"Cape Verde"
,"Cayman Islands"
,"Central African Republic"
,"Chad"
,"Chile"
,"China"
,"Christmas Island"
,"Clipperton Island"
,"Cocos Islands"
,"Colombia"
,"Comoros"
,"Congo"
,"Cook Islands"
,"Coral Sea Islands"
,"Costa Rica"
,"Cote d'Ivoire"
,"Croatia"
,"Cuba"
,"Cyprus"
,"Czech Republic"
,"Denmark"
,"Dhekelia"
,"Djibouti"
,"Dominica"
,"Dominican Republic"
,"Ecuador"
,"Egypt"
,"El Salvador"
,"Equatorial Guinea"
,"Eritrea"
,"Estonia"
,"Ethiopia"
,"Europa Island"
,"Falkland Islands (Islas Malvinas)"
,"Faroe Islands"
,"Fiji"
,"Finland"
,"France"
,"French Guiana"
,"French Polynesia"
,"French Southern and Antarctic Lands"
,"Gabon"
,"Gambia"
,"Gaza Strip"
,"Georgia"
,"Germany"
,"Ghana"
,"Gibraltar"
,"Glorioso Islands"
,"Greece"
,"Greenland"
,"Grenada"
,"Guadeloupe"
,"Guam"
,"Guatemala"
,"Guernsey"
,"Guinea"
,"Guinea Bissau"
,"Guyana"
,"Haiti"
,"Heard Island and McDonald Islands"
,"Holy See"
,"Honduras"
,"Hong Kong"
,"Hungary"
,"Iceland"
,"India"
,"Indonesia"
,"Iran"
,"Iraq"
,"Ireland"
,"Isle of Man"
,"Israel"
,"Italy"
,"Jamaica"
,"Jan Mayen"
,"Japan"
,"Jersey"
,"Jordan"
,"Juan de Nova Island"
,"Kazakhstan"
,"Kenya"
,"Kiribati"
,"North Korea"
,"South Korea"
,"Kuwait"
,"Kyrgyzstan"
,"Laos"
,"Latvia"
,"Lebanon"
,"Lesotho"
,"Liberia"
,"Libya"
,"Liechtenstein"
,"Lithuania"
,"Luxembourg"
,"Macau"
,"Macedonia"
,"Madagascar"
,"Malawi"
,"Malaysia"
,"Maldives"
,"Mali"
,"Malta"
,"Marshall Islands"
,"Martinique"
,"Mauritania"
,"Mauritius"
,"Mayotte"
,"Mexico"
,"Federated States of Micronesia"
,"Moldova"
,"Monaco"
,"Mongolia"
,"Montserrat"
,"Morocco"
,"Mozambique"
,"Namibia"
,"Nauru"
,"Navassa Island"
,"Nepal"
,"Netherlands"
,"Netherlands Antilles"
,"New Caledonia"
,"New Zealand"
,"Nicaragua"
,"Niger"
,"Nigeria"
,"Niue"
,"Norfolk Island"
,"Northern Mariana Islands"
,"Norway"
,"Oman"
,"Pakistan"
,"Palau"
,"Panama"
,"Papua New Guinea"
,"Paracel Islands"
,"Paraguay"
,"Peru"
,"Philippines"
,"Pitcairn Islands"
,"Poland"
,"Portugal"
,"Puerto Rico"
,"Qatar"
,"Reunion"
,"Romania"
,"Russia"
,"Rwanda"
,"Saint Helena"
,"Saint Kitts and Nevis"
,"Saint Lucia"
,"Saint Pierre and Miquelon"
,"Saint Vincent and the Grenadines"
,"Samoa"
,"San Marino"
,"Sao Tome and Principe"
,"Saudi Arabia"
,"Senegal"
,"Serbia and Montenegro"
,"Seychelles"
,"Sierra Leone"
,"Singapore"
,"Slovakia"
,"Slovenia"
,"Solomon Islands"
,"Somalia"
,"South Africa"
,"South Georgia and the South Sandwich Islands"
,"Spain"
,"Spratly Islands"
,"Sri Lanka"
,"Sudan"
,"Suriname"
,"Svalbard"
,"Swaziland"
,"Sweden"
,"Switzerland"
,"Syria"
,"Taiwan"
,"Tajikistan"
,"Tanzania"
,"Thailand"
,"Togo"
,"Tokelau"
,"Tonga"
,"Trinidad and Tobago"
,"Tromelin Island"
,"Tunisia"
,"Turkey"
,"Turkmenistan"
,"Turks and Caicos Islands"
,"Tuvalu"
,"Uganda"
,"Ukraine"
,"United Arab Emirates"
,"United Kingdom"
,"United States"
,"Uruguay"
,"Uzbekistan"
,"Vanuatu"
,"Venezuela"
,"Vietnam"
,"Virgin Islands"
,"Wake Island"
,"Wallis and Futuna"
,"West Bank"
,"Western Sahara"
,"Yemen"
,"Zambia"
,"Zimbabwe"
]


var dt = new Date();
startTime = dt.getTime();


var maxlives = 10;

var item = wordlist[Math.floor(Math.random() * wordlist.length)]
item = item.toLowerCase();

$('#wordField').html(item);

// alert(item);

$('#lives').text(maxlives);

$('#wordField').html(function (i, html) {
    return html.replace(/(\S)/g, '<div>$1</div>');
});

$('#wordField').html(function (i, html) {
    return html.replace(/(\s)/g, '<div class="blankspace found">$1</div>');
});

// noselect
$('#wordField div').addClass('noselect');

function updateLetter(x)
{
	if (item.indexOf(x) == -1) {
		var livesLeft = $('#lives').text();
		if (livesLeft == 0){
			alert("End Game");
		}else {
			$('#lives').text(livesLeft - 1);
		}
	}else {
		// find letter in string
		var indices = [];
	    for(var i=0; i<item.length;i++) {
	        if (item[i] === x) {
	        	indices.push(i+1);
	        }
	    }

		jQuery.each(indices, function(index, position) {
		// do something with `item` (or `this` is also `item` if you like)
			console.log(index + " - " + position);
			//item.charAt(position).css('color', 'red');
		});

		var div;
		$('div').each(function(){
		  if($(this).html() == x){
		    div = $(this);
		    div.css('color', 'red');
		    div.addClass('found');
		  }
		});



		var dt2 = new Date();

		if ($('.found').length == item.length) {
			var endTime = dt2.getTime();
			console.log("You Won!");
			console.log('endTime: ' + endTime);
			console.log((endTime - startTime)/1000);

			alert("You Won!\n\nGame finished in " + (endTime - startTime)/1000 + " seconds");
		}

	}
}