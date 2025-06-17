// countryInfoAll.js
// This file contains a mapping from country numeric id (as used in the TopoJSON) to country details.
// Data source: https://restcountries.com/v3.1/all
// This is a large object, but only a sample is shown here. The script will fetch the rest dynamically.
window.countryInfoAll = {
  '004': { name: 'Afghanistan', capital: 'Kabul', population: '40218234' },
  '008': { name: 'Albania', capital: 'Tirana', population: '2877797' },
  '010': { name: 'Antarctica', capital: 'None', population: '1,000 (seasonal, no permanent residents)' },
  '012': { name: 'Algeria', capital: 'Algiers', population: '44700000' },
  '016': { name: 'American Samoa', capital: 'Pago Pago', population: '55197' },
  '020': { name: 'Andorra', capital: 'Andorra la Vella', population: '77265' },
  '024': { name: 'Angola', capital: 'Luanda', population: '32866272' },
  '028': { name: 'Antigua and Barbuda', capital: 'Saint John’s', population: '97928' },
  '032': { name: 'Argentina', capital: 'Buenos Aires', population: '45376763' },
  '036': { name: 'Australia', capital: 'Canberra', population: '25687041' },
  '040': { name: 'Austria', capital: 'Vienna', population: '8917205' },
  '044': { name: 'Bahamas', capital: 'Nassau', population: '393248' },
  '048': { name: 'Bahrain', capital: 'Manama', population: '1701583' },
  '050': { name: 'Bangladesh', capital: 'Dhaka', population: '166303498' },
  '051': { name: 'Armenia', capital: 'Yerevan', population: '2963243' },
  '052': { name: 'Barbados', capital: 'Bridgetown', population: '287025' },
  '056': { name: 'Belgium', capital: 'Brussels', population: '11589623' },
  '060': { name: 'Bermuda', capital: 'Hamilton', population: '63968' },
  '064': { name: 'Bhutan', capital: 'Thimphu', population: '771608' },
  '068': { name: 'Bolivia', capital: 'Sucre', population: '11673029' },
  '070': { name: 'Bosnia and Herzegovina', capital: 'Sarajevo', population: '3280819' },
  '072': { name: 'Botswana', capital: 'Gaborone', population: '2351627' },
  '076': { name: 'Brazil', capital: 'Brasília', population: '213993437' },
  '084': { name: 'Belize', capital: 'Belmopan', population: '397621' },
  '100': { name: 'Bulgaria', capital: 'Sofia', population: '6951482' },
  '104': { name: 'Myanmar', capital: 'Naypyidaw', population: '54409800' },
  '108': { name: 'Burundi', capital: 'Gitega', population: '11890784' },
  '112': { name: 'Belarus', capital: 'Minsk', population: '9449323' },
  '116': { name: 'Cambodia', capital: 'Phnom Penh', population: '16718965' },
  '120': { name: 'Cameroon', capital: 'Yaoundé', population: '26545863' },
  '124': { name: 'Canada', capital: 'Ottawa', population: '38005238' },
  '132': { name: 'Cabo Verde', capital: 'Praia', population: '555987' },
  '136': { name: 'Cayman Islands', capital: 'George Town', population: '65720' },
  '140': { name: 'Central African Republic', capital: 'Bangui', population: '4829767' },
  '144': { name: 'Sri Lanka', capital: 'Sri Jayawardenepura Kotte', population: '21803000' },
  '148': { name: 'Chad', capital: 'N’Djamena', population: '16425864' },
  '152': { name: 'Chile', capital: 'Santiago', population: '19116209' },
  '156': { name: 'China', capital: 'Beijing', population: '1444216107' },
  '170': { name: 'Colombia', capital: 'Bogotá', population: '50882884' },
  '174': { name: 'Comoros', capital: 'Moroni', population: '869601' },
  '175': { name: 'Mayotte', capital: 'Mamoudzou', population: '272813' },
  '178': { name: 'Congo', capital: 'Brazzaville', population: '5518087' },
  '180': { name: 'Congo (Democratic Republic)', capital: 'Kinshasa', population: '89561403' },
  '184': { name: 'Cook Islands', capital: 'Avarua', population: '17564' },
  '188': { name: 'Costa Rica', capital: 'San José', population: '5094118' },
  '191': { name: 'Croatia', capital: 'Zagreb', population: '4105267' },
  '192': { name: 'Cuba', capital: 'Havana', population: '11326616' },
  '196': { name: 'Cyprus', capital: 'Nicosia', population: '1207359' },
  '203': { name: 'Czechia', capital: 'Prague', population: '10708981' },
  '204': { name: 'Benin', capital: 'Porto-Novo', population: '12123200' },
  '208': { name: 'Denmark', capital: 'Copenhagen', population: '5831404' },
  '212': { name: 'Dominica', capital: 'Roseau', population: '71986' },
  '214': { name: 'Dominican Republic', capital: 'Santo Domingo', population: '10847910' },
  '218': { name: 'Ecuador', capital: 'Quito', population: '17643060' },
  '222': { name: 'El Salvador', capital: 'San Salvador', population: '6486201' },
  '226': { name: 'Equatorial Guinea', capital: 'Malabo', population: '1402985' },
  '231': { name: 'Ethiopia', capital: 'Addis Ababa', population: '117876227' },
  '232': { name: 'Eritrea', capital: 'Asmara', population: '3546064' },
  '233': { name: 'Estonia', capital: 'Tallinn', population: '1326535' },
  '242': { name: 'Fiji', capital: 'Suva', population: '896444' },
  '246': { name: 'Finland', capital: 'Helsinki', population: '5540720' },
  '250': { name: 'France', capital: 'Paris', population: '67391582' },
  '254': { name: 'French Guiana', capital: 'Cayenne', population: '294071' },
  '258': { name: 'French Polynesia', capital: 'Papeete', population: '280904' },
  '262': { name: 'Djibouti', capital: 'Djibouti', population: '1078327' },
  '266': { name: 'Gabon', capital: 'Libreville', population: '2225734' },
  '268': { name: 'Georgia', capital: 'Tbilisi', population: '3989167' },
  '270': { name: 'Gambia', capital: 'Banjul', population: '2416668' },
  '275': { name: 'Palestine', capital: 'East Jerusalem', population: '5101414' },
  '276': { name: 'Germany', capital: 'Berlin', population: '83166711' },
  '288': { name: 'Ghana', capital: 'Accra', population: '31072940' },
  '292': { name: 'Gibraltar', capital: 'Gibraltar', population: '33691' },
  '296': { name: 'Kiribati', capital: 'Tarawa', population: '119446' },
  '300': { name: 'Greece', capital: 'Athens', population: '10724599' },
  '304': { name: 'Greenland', capital: 'Nuuk', population: '56770' },
  '308': { name: 'Grenada', capital: 'St. George’s', population: '112523' },
  '316': { name: 'Guam', capital: 'Hagåtña', population: '168783' },
  '320': { name: 'Guatemala', capital: 'Guatemala City', population: '17915568' },
  '324': { name: 'Guinea', capital: 'Conakry', population: '13132795' },
  '328': { name: 'Guyana', capital: 'Georgetown', population: '786559' },
  '332': { name: 'Haiti', capital: 'Port-au-Prince', population: '11402533' },
  '340': { name: 'Honduras', capital: 'Tegucigalpa', population: '9904608' },
  '344': { name: 'Hong Kong', capital: 'City of Victoria', population: '7500700' },
  '348': { name: 'Hungary', capital: 'Budapest', population: '9749763' },
  '352': { name: 'Iceland', capital: 'Reykjavík', population: '366425' },
  '356': { name: 'India', capital: 'New Delhi', population: '1393409038' },
  '360': { name: 'Indonesia', capital: 'Jakarta', population: '273523621' },
  '364': { name: 'Iran', capital: 'Tehran', population: '85028760' },
  '368': { name: 'Iraq', capital: 'Baghdad', population: '41199838' },
  '372': { name: 'Ireland', capital: 'Dublin', population: '4994724' },
  '376': { name: 'Israel', capital: 'Jerusalem', population: '9216900' },
  '380': { name: 'Italy', capital: 'Rome', population: '59554023' },
  '384': { name: 'Côte d’Ivoire', capital: 'Yamoussoukro', population: '26378274' },
  '388': { name: 'Jamaica', capital: 'Kingston', population: '2961161' },
  '392': { name: 'Japan', capital: 'Tokyo', population: '125960000' },
  '398': { name: 'Kazakhstan', capital: 'Nur-Sultan', population: '18776707' },
  '400': { name: 'Jordan', capital: 'Amman', population: '10203140' },
  '404': { name: 'Kenya', capital: 'Nairobi', population: '53771300' },
  '408': { name: 'North Korea', capital: 'Pyongyang', population: '25778815' },
  '410': { name: 'South Korea', capital: 'Seoul', population: '51780579' },
  '414': { name: 'Kuwait', capital: 'Kuwait City', population: '4270563' },
  '417': { name: 'Kyrgyzstan', capital: 'Bishkek', population: '6591600' },
  '418': { name: 'Laos', capital: 'Vientiane', population: '7275556' },
  '422': { name: 'Lebanon', capital: 'Beirut', population: '6825442' },
  '426': { name: 'Lesotho', capital: 'Maseru', population: '2142249' },
  '428': { name: 'Latvia', capital: 'Riga', population: '1901548' },
  '430': { name: 'Liberia', capital: 'Monrovia', population: '5057681' },
  '434': { name: 'Libya', capital: 'Tripoli', population: '6871292' },
  '438': { name: 'Liechtenstein', capital: 'Vaduz', population: '38128' },
  '440': { name: 'Lithuania', capital: 'Vilnius', population: '2794700' },
  '442': { name: 'Luxembourg', capital: 'Luxembourg', population: '634814' },
  '446': { name: 'Macao', capital: 'Macao', population: '649342' },
  '450': { name: 'Madagascar', capital: 'Antananarivo', population: '27691018' },
  '454': { name: 'Malawi', capital: 'Lilongwe', population: '19129952' },
  '458': { name: 'Malaysia', capital: 'Kuala Lumpur', population: '32776107' },
  '462': { name: 'Maldives', capital: 'Malé', population: '521021' },
  '466': { name: 'Mali', capital: 'Bamako', population: '20250833' },
  '470': { name: 'Malta', capital: 'Valletta', population: '514564' },
  '474': { name: 'Martinique', capital: 'Fort-de-France', population: '376480' },
  '478': { name: 'Mauritania', capital: 'Nouakchott', population: '4649658' },
  '480': { name: 'Mauritius', capital: 'Port Louis', population: '1265740' },
  '484': { name: 'Mexico', capital: 'Mexico City', population: '128932753' },
  '492': { name: 'Monaco', capital: 'Monaco', population: '39242' },
  '496': { name: 'Mongolia', capital: 'Ulaanbaatar', population: '3278292' },
  '498': { name: 'Moldova', capital: 'Chișinău', population: '2657637' },
  '499': { name: 'Montenegro', capital: 'Podgorica', population: '621718' },
  '500': { name: 'Montserrat', capital: 'Brades', population: '4992' },
  '504': { name: 'Morocco', capital: 'Rabat', population: '36910560' },
  '508': { name: 'Mozambique', capital: 'Maputo', population: '31255435' },
  '512': { name: 'Oman', capital: 'Muscat', population: '5106622' },
  '516': { name: 'Namibia', capital: 'Windhoek', population: '2540905' },
  '520': { name: 'Nauru', capital: 'Yaren', population: '10834' },
  '524': { name: 'Nepal', capital: 'Kathmandu', population: '29136808' },
  '528': { name: 'Netherlands', capital: 'Amsterdam', population: '17441139' },
  '531': { name: 'Curaçao', capital: 'Willemstad', population: '155014' },
  '533': { name: 'Aruba', capital: 'Oranjestad', population: '106766' },
  '534': { name: 'Sint Maarten', capital: 'Philipsburg', population: '40812' },
  '535': { name: 'Bonaire', capital: 'Kralendijk', population: '20104' },
  '540': { name: 'New Caledonia', capital: 'Nouméa', population: '271960' },
  '548': { name: 'Vanuatu', capital: 'Port Vila', population: '307145' },
  '554': { name: 'New Zealand', capital: 'Wellington', population: '5084300' },
  '558': { name: 'Nicaragua', capital: 'Managua', population: '6624554' },
  '562': { name: 'Niger', capital: 'Niamey', population: '24206644' },
  '566': { name: 'Nigeria', capital: 'Abuja', population: '206139587' },
  '570': { name: 'Niue', capital: 'Alofi', population: '1626' },
  '574': { name: 'Norfolk Island', capital: 'Kingston', population: '2169' },
  '578': { name: 'Norway', capital: 'Oslo', population: '5421241' },
  '580': { name: 'Northern Mariana Islands', capital: 'Saipan', population: '57557' },
  '581': { name: 'United States Minor Outlying Islands', capital: 'Washington, D.C.', population: '300' },
  '583': { name: 'Micronesia', capital: 'Palikir', population: '115021' },
  '584': { name: 'Marshall Islands', capital: 'Majuro', population: '59190' },
  '585': { name: 'Palau', capital: 'Ngerulmud', population: '18092' },
  '586': { name: 'Pakistan', capital: 'Islamabad', population: '220892331' },
  '591': { name: 'Panama', capital: 'Panama City', population: '4314768' },
  '598': { name: 'Papua New Guinea', capital: 'Port Moresby', population: '8947027' },
  '600': { name: 'Paraguay', capital: 'Asunción', population: '7132530' },
  '604': { name: 'Peru', capital: 'Lima', population: '32971846' },
  '608': { name: 'Philippines', capital: 'Manila', population: '109581085' },
  '612': { name: 'Pitcairn Islands', capital: 'Adamstown', population: '47' },
  '616': { name: 'Poland', capital: 'Warsaw', population: '38386000' },
  '620': { name: 'Portugal', capital: 'Lisbon', population: '10295909' },
  '624': { name: 'Guinea-Bissau', capital: 'Bissau', population: '1968001' },
  '626': { name: 'Timor-Leste', capital: 'Dili', population: '1318445' },
  '630': { name: 'Puerto Rico', capital: 'San Juan', population: '3193694' },
  '634': { name: 'Qatar', capital: 'Doha', population: '2881060' },
  '638': { name: 'Réunion', capital: 'Saint-Denis', population: '859959' },
  '642': { name: 'Romania', capital: 'Bucharest', population: '19237691' },
  '643': { name: 'Russia', capital: 'Moscow', population: '146748590' },
  '646': { name: 'Rwanda', capital: 'Kigali', population: '12952218' },
  '652': { name: 'Saint Barthélemy', capital: 'Gustavia', population: '9877' },
  '654': { name: 'Saint Helena', capital: 'Jamestown', population: '6077' },
  '659': { name: 'Saint Kitts and Nevis', capital: 'Basseterre', population: '53192' },
  '660': { name: 'Anguilla', capital: 'The Valley', population: '15003' },
  '662': { name: 'Saint Lucia', capital: 'Castries', population: '184999' },
  '663': { name: 'Saint Martin', capital: 'Marigot', population: '38659' },
  '666': { name: 'Saint Pierre and Miquelon', capital: 'Saint-Pierre', population: '6069' },
  '670': { name: 'Saint Vincent and the Grenadines', capital: 'Kingstown', population: '110947' },
  '674': { name: 'San Marino', capital: 'San Marino', population: '33931' },
  '678': { name: 'Sao Tome and Principe', capital: 'São Tomé', population: '219159' },
  '682': { name: 'Saudi Arabia', capital: 'Riyadh', population: '34813867' },
  '686': { name: 'Senegal', capital: 'Dakar', population: '16743927' },
  '688': { name: 'Serbia', capital: 'Belgrade', population: '8772235' },
  '690': { name: 'Seychelles', capital: 'Victoria', population: '98347' },
  '694': { name: 'Sierra Leone', capital: 'Freetown', population: '7976983' },
  '702': { name: 'Singapore', capital: 'Singapore', population: '5685807' },
  '703': { name: 'Slovakia', capital: 'Bratislava', population: '5456362' },
  '704': { name: 'Vietnam', capital: 'Hanoi', population: '97338583' },
  '705': { name: 'Slovenia', capital: 'Ljubljana', population: '2100126' },
  '706': { name: 'Somalia', capital: 'Mogadishu', population: '15893222' },
  '710': { name: 'South Africa', capital: 'Pretoria', population: '59308690' },
  '716': { name: 'Zimbabwe', capital: 'Harare', population: '14862924' },
  '724': { name: 'Spain', capital: 'Madrid', population: '47351567' },
  '728': { name: 'South Sudan', capital: 'Juba', population: '11193725' },
  '729': { name: 'Sudan', capital: 'Khartoum', population: '43849260' },
  '732': { name: 'Western Sahara', capital: 'El Aaiún', population: '582463' },
  '740': { name: 'Suriname', capital: 'Paramaribo', population: '586634' },
  '748': { name: 'Eswatini', capital: 'Mbabane', population: '1160164' },
  '752': { name: 'Sweden', capital: 'Stockholm', population: '10379295' },
  '756': { name: 'Switzerland', capital: 'Bern', population: '8715490' },
  '760': { name: 'Syria', capital: 'Damascus', population: '17500657' },
  '762': { name: 'Tajikistan', capital: 'Dushanbe', population: '9537642' },
  '764': { name: 'Thailand', capital: 'Bangkok', population: '69799978' },
  '768': { name: 'Togo', capital: 'Lomé', population: '8278724' },
  '772': { name: 'Tokelau', capital: 'Fakaofo', population: '1411' },
  '776': { name: 'Tonga', capital: 'Nukuʻalofa', population: '105697' },
  '780': { name: 'Trinidad and Tobago', capital: 'Port of Spain', population: '1399488' },
  '784': { name: 'United Arab Emirates', capital: 'Abu Dhabi', population: '9890402' },
  '788': { name: 'Tunisia', capital: 'Tunis', population: '11818619' },
  '792': { name: 'Turkey', capital: 'Ankara', population: '83154997' },
  '795': { name: 'Turkmenistan', capital: 'Ashgabat', population: '6031187' },
  '796': { name: 'Turks and Caicos Islands', capital: 'Cockburn Town', population: '38718' },
  '798': { name: 'Tuvalu', capital: 'Funafuti', population: '11792' },
  '800': { name: 'Uganda', capital: 'Kampala', population: '45741007' },
  '804': { name: 'Ukraine', capital: 'Kyiv', population: '41723998' },
  '807': { name: 'North Macedonia', capital: 'Skopje', population: '2083459' },
  '818': { name: 'Egypt', capital: 'Cairo', population: '104258327' },
  '826': { name: 'United Kingdom', capital: 'London', population: '68207116' },
  '831': { name: 'Guernsey', capital: 'St. Peter Port', population: '67052' },
  '832': { name: 'Jersey', capital: 'Saint Helier', population: '108043' },
  '833': { name: 'Isle of Man', capital: 'Douglas', population: '85032' },
  '834': { name: 'Tanzania', capital: 'Dodoma', population: '59734213' },
  '840': { name: 'United States', capital: 'Washington, D.C.', population: '331893745' },
  '850': { name: 'Virgin Islands (U.S.)', capital: 'Charlotte Amalie', population: '106290' },
  '854': { name: 'Burkina Faso', capital: 'Ouagadougou', population: '20903273' },
  '858': { name: 'Uruguay', capital: 'Montevideo', population: '3473727' },
  '860': { name: 'Uzbekistan', capital: 'Tashkent', population: '34232050' },
  '862': { name: 'Venezuela', capital: 'Caracas', population: '28435943' },
  '876': { name: 'Wallis and Futuna', capital: 'Mata-Utu', population: '11700' },
  '882': { name: 'Samoa', capital: 'Apia', population: '198410' },
  '887': { name: 'Yemen', capital: 'Sana’a', population: '30491000' },
  '894': { name: 'Zambia', capital: 'Lusaka', population: '18383955' },
  '158': { name: 'Taiwan', capital: 'Taipei', population: '23893394' },
  '031': { name: 'Azerbaijan', capital: 'Baku', population: '10139177' },
  '383': { name: 'Kosovo', capital: 'Pristina', population: '1810366' }
};

window.countryRegions = {
  '002': 'Africa',
  '019': 'Americas',
  '142': 'Asia',
  '150': 'Europe',
  '009': 'Oceania',
  '010': 'Antarctica',
  '004': 'Asia', // Afghanistan
  '008': 'Europe', // Albania
  '012': 'Africa', // Algeria
  '016': 'Oceania', // American Samoa
  '020': 'Europe', // Andorra
  '024': 'Africa', // Angola
  '028': 'Americas', // Antigua and Barbuda
  '032': 'Americas', // Argentina
  '036': 'Oceania', // Australia
  '040': 'Europe', // Austria
  '044': 'Americas', // Bahamas
  '048': 'Asia', // Bahrain
  '050': 'Asia', // Bangladesh
  '051': 'Asia', // Armenia
  '052': 'Americas', // Barbados
  '056': 'Europe', // Belgium
  '060': 'Oceania', // Bermuda
  '064': 'Asia', // Bhutan
  '068': 'Americas', // Bolivia
  '070': 'Europe', // Bosnia and Herzegovina
  '072': 'Africa', // Botswana
  '076': 'Americas', // Brazil
  '084': 'Americas', // Belize
  '100': 'Europe', // Bulgaria
  '104': 'Asia', // Myanmar
  '108': 'Africa', // Burundi
  '112': 'Europe', // Belarus
  '116': 'Asia', // Cambodia
  '120': 'Africa', // Cameroon
  '124': 'Americas', // Canada
  '132': 'Africa', // Cabo Verde
  '136': 'Americas', // Cayman Islands
  '140': 'Africa', // Central African Republic
  '144': 'Asia', // Sri Lanka
  '148': 'Africa', // Chad
  '152': 'Americas', // Chile
  '156': 'Asia', // China
  '170': 'Americas', // Colombia
  '174': 'Africa', // Comoros
  '175': 'Oceania', // Mayotte
  '178': 'Africa', // Congo
  '180': 'Africa', // Congo (Democratic Republic)
  '184': 'Oceania', // Cook Islands
  '188': 'Americas', // Costa Rica
  '191': 'Europe', // Croatia
  '192': 'Americas', // Cuba
  '196': 'Asia', // Cyprus
  '203': 'Europe', // Czechia
  '204': 'Africa', // Benin
  '208': 'Europe', // Denmark
  '212': 'Americas', // Dominica
  '214': 'Americas', // Dominican Republic
  '218': 'Americas', // Ecuador
  '222': 'Americas', // El Salvador
  '226': 'Africa', // Equatorial Guinea
  '231': 'Africa', // Ethiopia
  '232': 'Africa', // Eritrea
  '233': 'Europe', // Estonia
  '242': 'Oceania', // Fiji
  '246': 'Europe', // Finland
  '250': 'Europe', // France
  '254': 'South America', // French Guiana
  '258': 'Oceania', // French Polynesia
  '262': 'Africa', // Djibouti
  '266': 'Africa', // Gabon
  '268': 'Asia', // Georgia
  '270': 'Africa', // Gambia
  '275': 'Asia', // Palestine
  '276': 'Europe', // Germany
  '288': 'Africa', // Ghana
  '292': 'Europe', // Gibraltar
  '296': 'Oceania', // Kiribati
  '300': 'Europe', // Greece
  '304': 'Oceania', // Greenland
  '308': 'Americas', // Grenada
  '316': 'Oceania', // Guam
  '320': 'Americas', // Guatemala
  '324': 'Africa', // Guinea
  '328': 'Americas', // Guyana
  '332': 'Americas', // Haiti
  '340': 'Americas', // Honduras
  '344': 'Asia', // Hong Kong
  '348': 'Europe', // Hungary
  '352': 'Oceania', // Iceland
  '356': 'Asia', // India
  '360': 'Asia', // Indonesia
  '364': 'Asia', // Iran
  '368': 'Asia', // Iraq
  '372': 'Europe', // Ireland
  '376': 'Asia', // Israel
  '380': 'Europe', // Italy
  '384': 'Africa', // Côte d’Ivoire
  '388': 'Americas', // Jamaica
  '392': 'Asia', // Japan
  '398': 'Asia', // Kazakhstan
  '400': 'Asia', // Jordan
  '404': 'Africa', // Kenya
  '408': 'Asia', // North Korea
  '410': 'Asia', // South Korea
  '414': 'Asia', // Kuwait
  '417': 'Asia', // Kyrgyzstan
  '418': 'Asia', // Laos
  '422': 'Asia', // Lebanon
  '426': 'Africa', // Lesotho
  '428': 'Europe', // Latvia
  '430': 'Africa', // Liberia
  '434': 'Africa', // Libya
  '438': 'Europe', // Liechtenstein
  '440': 'Europe', // Lithuania
  '442': 'Europe', // Luxembourg
  '446': 'Asia', // Macao
  '450': 'Africa', // Madagascar
  '454': 'Africa', // Malawi
  '458': 'Asia', // Malaysia
  '462': 'Asia', // Maldives
  '466': 'Africa', // Mali
  '470': 'Europe', // Malta
  '474': 'Americas', // Martinique
  '478': 'Africa', // Mauritania
  '480': 'Africa', // Mauritius
  '484': 'Americas', // Mexico
  '492': 'Europe', // Monaco
  '496': 'Asia', // Mongolia
  '498': 'Europe', // Moldova
  '499': 'Europe', // Montenegro
  '500': 'Americas', // Montserrat
  '504': 'Africa', // Morocco
  '508': 'Africa', // Mozambique
  '512': 'Asia', // Oman
  '516': 'Africa', // Namibia
  '520': 'Oceania', // Nauru
  '524': 'Asia', // Nepal
  '528': 'Europe', // Netherlands
  '531': 'Americas', // Curaçao
  '533': 'Americas', // Aruba
  '534': 'Americas', // Sint Maarten
  '535': 'Americas', // Bonaire
  '540': 'Oceania', // New Caledonia
  '548': 'Oceania', // Vanuatu
  '554': 'Oceania', // New Zealand
  '558': 'Americas', // Nicaragua
  '562': 'Africa', // Niger
  '566': 'Africa', // Nigeria
  '570': 'Oceania', // Niue
  '574': 'Oceania', // Norfolk Island
  '578': 'Europe', // Norway
  '580': 'Oceania', // Northern Mariana Islands
  '581': 'Americas', // United States Minor Outlying Islands
  '583': 'Oceania', // Micronesia
  '584': 'Oceania', // Marshall Islands
  '585': 'Oceania', // Palau
  '586': 'Asia', // Pakistan
  '591': 'Americas', // Panama
  '598': 'Oceania', // Papua New Guinea
  '600': 'Americas', // Paraguay
  '604': 'Americas', // Peru
  '608': 'Asia', // Philippines
  '612': 'Oceania', // Pitcairn Islands
  '616': 'Europe', // Poland
  '620': 'Europe', // Portugal
  '624': 'Africa', // Guinea-Bissau
  '626': 'Asia', // Timor-Leste
  '630': 'Americas', // Puerto Rico
  '634': 'Asia', // Qatar
  '638': 'Africa', // Réunion
  '642': 'Europe', // Romania
  '643': 'Europe', // Russia
  '646': 'Africa', // Rwanda
  '652': 'Americas', // Saint Barthélemy
  '654': 'Africa', // Saint Helena
  '659': 'Americas', // Saint Kitts and Nevis
  '660': 'Americas', // Anguilla
  '662': 'Americas', // Saint Lucia
  '663': 'Americas', // Saint Martin
  '666': 'Americas', // Saint Pierre and Miquelon
  '670': 'Americas', // Saint Vincent and the Grenadines
  '674': 'Europe', // San Marino
  '678': 'Africa', // Sao Tome and Principe
  '682': 'Asia', // Saudi Arabia
  '686': 'Africa', // Senegal
  '688': 'Europe', // Serbia
  '690': 'Africa', // Seychelles
  '694': 'Africa', // Sierra Leone
  '702': 'Asia', // Singapore
  '703': 'Europe', // Slovakia
  '704': 'Asia', // Vietnam
  '705': 'Europe', // Slovenia
  '706': 'Africa', // Somalia
  '710': 'Africa', // South Africa
  '716': 'Africa', // Zimbabwe
  '724': 'Europe', // Spain
  '728': 'Africa', // South Sudan
  '729': 'Africa', // Sudan
  '732': 'Africa', // Western Sahara
  '740': 'Americas', // Suriname
  '748': 'Africa', // Eswatini
  '752': 'Europe', // Sweden
  '756': 'Europe', // Switzerland
  '760': 'Asia', // Syria
  '762': 'Asia', // Tajikistan
  '764': 'Asia', // Thailand
  '768': 'Africa', // Togo
  '772': 'Oceania', // Tokelau
  '776': 'Oceania', // Tonga
  '780': 'Americas', // Trinidad and Tobago
  '784': 'Asia', // United Arab Emirates
  '788': 'Africa', // Tunisia
  '792': 'Asia', // Turkey
  '795': 'Asia', // Turkmenistan
  '796': 'Oceania', // Turks and Caicos Islands
  '798': 'Oceania', // Tuvalu
  '800': 'Africa', // Uganda
  '804': 'Europe', // Ukraine
  '807': 'Europe', // North Macedonia
  '818': 'Africa', // Egypt
  '826': 'Europe', // United Kingdom
  '831': 'Europe', // Guernsey
  '832': 'Europe', // Jersey
  '833': 'Europe', // Isle of Man
  '834': 'Africa', // Tanzania
  '840': 'Americas', // United States
  '850': 'Americas', // Virgin Islands (U.S.)
  '854': 'Africa', // Burkina Faso
  '858': 'Americas', // Uruguay
  '860': 'Asia', // Uzbekistan
  '862': 'Americas', // Venezuela
  '876': 'Oceania', // Wallis and Futuna
  '882': 'Oceania', // Samoa
  '887': 'Asia', // Yemen
  '894': 'Africa' // Zambia
};
