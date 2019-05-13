$(document).ready(function(){

var atomicval = [
{	symbol:	"H",		element: "Hydrogen", 			group:	"1", 		period:	"1",	elementType: 'reactiveNonMetal', 						atomicNumber:	"1",	atomicweight:	"1.008", 				density:	"0.00008988", melt: "14.01", 		boil:	"20.28",	electronshell: 	"1",										url: "https://en.wikipedia.org/wiki/Hydrogen" },
{	symbol:	"He",		element: "Helium",				group:	"18", 	period:	"1",	elementType: 'nobleGas', 										atomicNumber:	"2",	atomicweight:	"4.002602", 		density:	"0.0001785", 	melt: "null", 		boil: "4.22", 	electronshell:	"2",											url: "https://en.wikipedia.org/wiki/Helium" },
{	symbol:	"Li",		element: "Lithium",				group:	"1", 		period:	"2",	elementType: 'alkaliMetal', 								atomicNumber:	"3",	atomicweight:	"6.94", 				density:	"0.534", 			melt: "453.69", 	boil:	"1560", 	electronshell:	"2,1",										url: "https://en.wikipedia.org/wiki/Lithium" },
{	symbol:	"Be",		element: "Beryllium",			group:	"2", 		period:	"2",	elementType: 'alkaliEarthMetal', 						atomicNumber:	"4",	atomicweight:	"9.0121831", 		density:	"1.85", 			melt: "1560", 		boil:	"2742", 	electronshell:	"2,2",										url: "https://en.wikipedia.org/wiki/Beryllium" },
{	symbol:	"B",		element: "Boron",					group:	"13", 	period:	"2",	elementType: 'metalloid', 									atomicNumber:	"5",	atomicweight:	"10.81", 				density:	"2.34", 			melt: "2349", 		boil:	"4200", 	electronshell:	"2,3",										url: "https://en.wikipedia.org/wiki/Boron" },
{	symbol:	"C",		element: "Carbon",				group:	"14", 	period:	"2",	elementType: 'reactiveNonMetal', 						atomicNumber:	"6",	atomicweight:	"12.011", 			density:	"2.267", 			melt: "3800", 		boil:	"4300", 	electronshell:	"2,4",										url: "https://en.wikipedia.org/wiki/Carbon" },
{	symbol:	"N",		element: "Nitrogen",			group:	"15", 	period:	"2",	elementType: 'reactiveNonMetal', 						atomicNumber:	"7",	atomicweight:	"14.007", 			density:	"0.0012506", 	melt: "63.15", 		boil:	"77.36", 	electronshell:	"2,5",										url: "https://en.wikipedia.org/wiki/Nitrogen" },
{	symbol:	"O",		element: "Oxygen",				group:	"16", 	period:	"2",	elementType: 'reactiveNonMetal', 						atomicNumber:	"8",	atomicweight:	"15.999", 			density:	"0.001429", 	melt: "54.36", 		boil:	"90.2", 	electronshell:	"2,6",										url: "https://en.wikipedia.org/wiki/Oxygen" },
{	symbol:	"F",		element: "Fluorine",			group:	"17", 	period:	"2",	elementType: 'reactiveNonMetal', 						atomicNumber:	"9",	atomicweight:	"18.998403163", density:	"0.001696", 	melt: "53.53", 		boil:	"85.03", 	electronshell:	"2,7",										url: "https://en.wikipedia.org/wiki/Fluorine" },
{	symbol:	"Ne",		element: "Neon",					group:	"18", 	period:	"2",	elementType: 'nobleGas', 										atomicNumber:	"10",	atomicweight:	"20.1797", 			density:	"0.0008999", 	melt: "24.56", 		boil:	"27.07", 	electronshell:	"2,8",										url: "https://en.wikipedia.org/wiki/Neon" },
{	symbol:	"Na",		element: "Sodium",				group:	"1", 		period:	"3",	elementType: 'alkaliMetal', 								atomicNumber:	"11",	atomicweight:	"22.98976928", 	density:	"0.971", 			melt: "370.87", 	boil:	"1156", 	electronshell:	"2,8,1",									url: "https://en.wikipedia.org/wiki/Sodium" },
{	symbol:	"Mg",		element: "Magnesium",			group:	"2", 		period:	"3",	elementType: 'alkaliEarthMetal', 						atomicNumber:	"12",	atomicweight:	"24.305", 			density:	"1.738", 			melt: "923", 			boil:	"1363", 	electronshell:	"2,8,2",									url: "https://en.wikipedia.org/wiki/Magnesium" },
{	symbol:	"Al",		element: "Aluminium",			group:	"13", 	period:	"3",	elementType: 'postTransitionMetal', 				atomicNumber:	"13",	atomicweight:	"26.9815385", 	density:	"2.698", 			melt: "933.47", 	boil:	"2792", 	electronshell:	"2,8,3",									url: "https://en.wikipedia.org/wiki/Aluminium" },
{	symbol:	"Si",		element: "Silicon",				group:	"14", 	period:	"3",	elementType: 'metalloid', 									atomicNumber:	"14",	atomicweight:	"28.085", 			density:	"2.3296", 		melt: "1687", 		boil:	"3538", 	electronshell:	"2,8,4",									url: "https://en.wikipedia.org/wiki/Silicon" },
{	symbol:	"P",		element: "Phosphorus",		group:	"15", 	period:	"3",	elementType: 'reactiveNonMetal', 						atomicNumber:	"15",	atomicweight:	"30.973761998", density:	"1.82", 			melt: "317.3", 		boil:	"550", 		electronshell:	"2,8,5",									url: "https://en.wikipedia.org/wiki/Phosphorus" },
{	symbol:	"S",		element: "Sulfur",				group:	"16", 	period:	"3",	elementType: 'reactiveNonMetal', 						atomicNumber:	"16",	atomicweight:	"32.06", 				density:	"2.067", 			melt: "388.36", 	boil:	"717.87", electronshell:	"2,8,6",									url: "https://en.wikipedia.org/wiki/Sulfur" },
{	symbol:	"Cl",		element: "Chlorine",			group:	"17", 	period:	"3",	elementType: 'reactiveNonMetal', 						atomicNumber:	"17",	atomicweight:	"35.45", 				density:	"0.003214", 	melt: "171.6", 		boil:	"239.11", electronshell:	"2,8,7",									url: "https://en.wikipedia.org/wiki/Chlorine" },
{	symbol:	"Ar",		element: "Argon",					group:	"18", 	period:	"3",	elementType: 'nobleGas', 										atomicNumber:	"18",	atomicweight:	"39.948", 			density:	"0.0017837", 	melt: "83.8", 		boil:	"87.3", 	electronshell:	"2,8,8",									url: "https://en.wikipedia.org/wiki/Argon" },
{	symbol:	"K",		element: "Potassium",			group:	"1", 		period:	"4",	elementType: 'alkaliMetal', 								atomicNumber:	"19",	atomicweight:	"39.0983", 			density:	"0.862", 			melt: "336.53", 	boil:	"1032", 	electronshell:	"2,8,8,1",								url: "https://en.wikipedia.org/wiki/Potassium" },
{	symbol:	"Ca",		element: "Calcium",				group:	"2", 		period:	"4",	elementType: 'alkaliEarthMetal', 						atomicNumber:	"20",	atomicweight:	"40.078", 			density:	"1.54", 			melt: "1115", 		boil:	"1757", 	electronshell:	"2,8,8,2",								url: "https://en.wikipedia.org/wiki/Calcium" },
{	symbol:	"Sc",		element: "Scandium",			group:	"3", 		period:	"4",	elementType: 'transitionMetal', 						atomicNumber:	"21",	atomicweight:	"44.955908", 		density:	"2.989", 			melt: "1814", 		boil:	"3109", 	electronshell:	"2,8,9,2",								url: "https://en.wikipedia.org/wiki/Scandium" },
{	symbol:	"Ti",		element: "Titanium",			group:	"4", 		period:	"4",	elementType: 'transitionMetal', 						atomicNumber:	"22",	atomicweight:	"47.867", 			density:	"4.54", 			melt: "1941", 		boil:	"3560", 	electronshell:	"2,8,10,2",								url: "https://en.wikipedia.org/wiki/Titanium" },
{	symbol:	"V",		element: "Vanadium",			group:	"5", 		period:	"4",	elementType: 'transitionMetal', 						atomicNumber:	"23",	atomicweight:	"50.9415", 			density:	"6.11", 			melt: "2183", 		boil:	"3680", 	electronshell:	"2,8,11,2",								url: "https://en.wikipedia.org/wiki/Vanadium" },
{	symbol:	"Cr",		element: "Chromium",			group:	"6", 		period:	"4",	elementType: 'transitionMetal', 						atomicNumber:	"24",	atomicweight:	"51.9961", 			density:	"7.15", 			melt: "2180", 		boil:	"2944", 	electronshell:	"2,8,13,1",								url: "https://en.wikipedia.org/wiki/Chromium" },
{	symbol:	"Mn",		element: "Manganese",			group:	"7", 		period:	"4",	elementType: 'transitionMetal', 						atomicNumber:	"25",	atomicweight:	"54.938044", 		density:	"7.44", 			melt: "1519", 		boil:	"2334", 	electronshell:	"2,8,13,2",								url: "https://en.wikipedia.org/wiki/Manganese" },
{	symbol:	"Fe",		element: "Iron",					group:	"8", 		period:	"4",	elementType: 'transitionMetal', 						atomicNumber:	"26",	atomicweight:	"55.845", 			density:	"7.874", 			melt: "1811", 		boil:	"3134", 	electronshell:	"2,8,14,2",								url: "https://en.wikipedia.org/wiki/Iron" },
{	symbol:	"Co",		element: "Cobalt",				group:	"9", 		period:	"4",	elementType: 'transitionMetal', 						atomicNumber:	"27",	atomicweight:	"58.933194", 		density:	"8.86", 			melt: "1768", 		boil:	"3200", 	electronshell:	"2,8,15,2",								url: "https://en.wikipedia.org/wiki/Cobalt" },
{	symbol:	"Ni",		element: "Nickel",				group:	"10", 	period:	"4",	elementType: 'transitionMetal', 						atomicNumber:	"28",	atomicweight:	"58.6934", 			density:	"8.912", 			melt: "1728", 		boil:	"3186", 	electronshell:	"2,8,16,2",								url: "https://en.wikipedia.org/wiki/Nickel" },
{	symbol:	"Cu",		element: "Copper",				group:	"11", 	period:	"4",	elementType: 'transitionMetal', 						atomicNumber:	"29",	atomicweight:	"63.546", 			density:	"8.96", 			melt: "1357.77", 	boil:	"2835", 	electronshell:	"2,8,18,1",								url: "https://en.wikipedia.org/wiki/Copper" },
{	symbol:	"Zn",		element: "Zinc",					group:	"12", 	period:	"4",	elementType: 'postTransitionMetal', 				atomicNumber:	"30",	atomicweight:	"65.38", 				density:	"7.134", 			melt: "692.88", 	boil:	"1180", 	electronshell:	"2,8,18,2",								url: "https://en.wikipedia.org/wiki/Zinc" },
{	symbol:	"Ga",		element: "Gallium",				group:	"13", 	period:	"4",	elementType: 'postTransitionMetal', 				atomicNumber:	"31",	atomicweight:	"69.723", 			density:	"5.907", 			melt: "302.9146", boil:	"2673", 	electronshell:	"2,8,18,3",								url: "https://en.wikipedia.org/wiki/Gallium" },
{	symbol:	"Ge",		element: "Germanium",			group:	"14", 	period:	"4",	elementType: 'metalloid', 									atomicNumber:	"32",	atomicweight:	"72.630", 			density:	"5.323", 			melt: "1211.4", 	boil:	"3106", 	electronshell:	"2,8,18,4",							url: "https://en.wikipedia.org/wiki/Germanium" },
{	symbol:	"As",		element: "Arsenic",				group:	"15", 	period:	"4",	elementType: 'metalloid', 									atomicNumber:	"33",	atomicweight:	"74.921595", 		density:	"5.776", 			melt: "1090", 		boil:	"887", 		electronshell:	"2,8,18,5",							url: "https://en.wikipedia.org/wiki/Arsenic" },
{	symbol:	"Se",		element: "Selenium",			group:	"16", 	period:	"4",	elementType: 'reactiveNonMetal', 						atomicNumber:	"34",	atomicweight:	"78.971", 			density:	"4.809", 			melt: "453", 			boil:	"958", 		electronshell:	"2,8,18,6",								url: "https://en.wikipedia.org/wiki/Selenium" },
{	symbol:	"Br",		element: "Bromine",				group:	"17", 	period:	"4",	elementType: 'reactiveNonMetal', 						atomicNumber:	"35",	atomicweight:	"79.904", 			density:	"3.122", 			melt: "265.8", 		boil:	"332", 		electronshell:	"2,8,18,7",								url: "https://en.wikipedia.org/wiki/Bromine" },
{	symbol:	"Kr",		element: "Krypton",				group:	"18", 	period:	"4",	elementType: 'nobleGas', 										atomicNumber:	"36",	atomicweight:	"83.798", 			density:	"0.003733", 	melt: "115.79", 	boil:	"119.93", electronshell:	"2,8,18,8",								url: "https://en.wikipedia.org/wiki/Krypton" },
{	symbol:	"Rb",		element: "Rubidium",			group:	"1", 		period:	"5",	elementType: 'alkaliMetal', 								atomicNumber:	"37",	atomicweight:	"85.4678", 			density:	"1.532", 			melt: "312.46", 	boil:	"961", 		electronshell:	"2,8,18,8,1",							url: "https://en.wikipedia.org/wiki/Rubidium" },
{	symbol:	"Sr",		element: "Strontium",			group:	"2", 		period:	"5",	elementType: 'alkaliEarthMetal', 						atomicNumber:	"38",	atomicweight:	"87.62", 				density:	"2.64", 			melt: "1050", 		boil:	"1655", 	electronshell:	"2,8,18,8,2",							url: "https://en.wikipedia.org/wiki/Strontium" },
{	symbol:	"Y",		element: "Yttrium",				group:	"3", 		period:	"5",	elementType: 'transitionMetal', 						atomicNumber:	"39",	atomicweight:	"88.90584", 		density:	"4.469", 			melt: "1799", 		boil:	"3609", 	electronshell:	"2,8,18,9,2",							url: "https://en.wikipedia.org/wiki/Yttrium" },
{	symbol:	"Zr",		element: "Zirconium",			group:	"4", 		period:	"5",	elementType: 'transitionMetal', 						atomicNumber:	"40",	atomicweight:	"91.224", 			density:	"6.506", 			melt: "2128", 		boil:	"4682", 	electronshell:	"2,8,18,10,2",						url: "https://en.wikipedia.org/wiki/Zirconium" },
{	symbol:	"Nb",		element: "Niobium",				group:	"5", 		period:	"5",	elementType: 'transitionMetal', 						atomicNumber:	"41",	atomicweight:	"92.90637", 		density:	"8.57", 			melt: "2750", 		boil:	"5017", 	electronshell:	"2,8,18,12,1",						url: "https://en.wikipedia.org/wiki/Niobium" },
{	symbol:	"Mo",		element: "Molybdenum",		group:	"6", 		period:	"5",	elementType: 'transitionMetal', 						atomicNumber:	"42",	atomicweight:	"95.95", 				density:	"10.22", 			melt: "2896", 		boil:	"4912", 	electronshell:	"2,8,18,13,1",						url: "https://en.wikipedia.org/wiki/Molybdenum" },
{	symbol:	"Tc",		element: "Technetium",		group:	"7", 		period:	"5",	elementType: 'transitionMetal', 						atomicNumber:	"43",	atomicweight:	"[98]", 				density:	"11.5", 			melt:	"2430", 		boil:	"45382", 	electronshell:	"2,8,18,13,2",							url: "https://en.wikipedia.org/wiki/Technetium" },
{	symbol:	"Ru",		element: "Ruthenium",			group:	"8", 		period:	"5",	elementType: 'transitionMetal', 						atomicNumber:	"44",	atomicweight:	"101.07", 			density:	"12.37", 			melt: "2607", 		boil:	"4423", 	electronshell:	"2,8,18,15,1",						url: "https://en.wikipedia.org/wiki/Ruthenium" },
{	symbol:	"Rh",		element: "Rhodium",				group:	"9", 		period:	"5",	elementType: 'transitionMetal', 						atomicNumber:	"45",	atomicweight:	"102.90550", 		density:	"12.41", 			melt: "2237", 		boil:	"3968", 	electronshell:	"2,8,18,16,1",						url: "https://en.wikipedia.org/wiki/Rhodium" },
{	symbol:	"Pd",		element: "Palladium",			group:	"10", 	period:	"5",	elementType: 'transitionMetal', 						atomicNumber:	"46",	atomicweight:	"106.42", 			density:	"12.02", 			melt: "1828.05", 	boil:	"3236", 	electronshell:	"2,8,18,18",							url: "https://en.wikipedia.org/wiki/Palladium" },
{	symbol:	"Ag",		element: "Silver",				group:	"11", 	period:	"5",	elementType: 'transitionMetal', 						atomicNumber:	"47",	atomicweight:	"107.8682", 		density:	"10.501",			melt: "1234.93", 	boil:	"2435", 	electronshell:	"2,8,18,18,1",						url: "https://en.wikipedia.org/wiki/Silver" },
{	symbol:	"Cd",		element: "Cadmium",				group:	"12", 	period:	"5",	elementType: 'postTransitionMetal', 				atomicNumber:	"48",	atomicweight:	"112.414", 			density:	"8.69", 			melt: "594.22", 	boil:	"1040", 	electronshell:	"2,8,18,18,2",						url: "https://en.wikipedia.org/wiki/Cadmium" },
{	symbol:	"In",		element: "Indium",				group:	"13", 	period:	"5",	elementType: 'postTransitionMetal', 				atomicNumber:	"49",	atomicweight:	"114.818", 			density:	"7.31", 			melt: "429.75", 	boil:	"2345", 	electronshell:	"2,8,18,18,3",						url: "https://en.wikipedia.org/wiki/Indium" },
{	symbol:	"Sn",		element: "Tin",						group:	"14", 	period:	"5",	elementType: 'postTransitionMetal', 				atomicNumber:	"50",	atomicweight:	"118.710", 			density:	"7.287", 			melt: "505.08", 	boil:	"2875", 	electronshell:	"2,8,18,18,4",						url: "https://en.wikipedia.org/wiki/Tin" },
{	symbol:	"Sb",		element: "Antimony",			group:	"15", 	period:	"5",	elementType: 'metalloid', 									atomicNumber:	"51",	atomicweight:	"121.760", 			density:	"6.685", 			melt: "903.78", 	boil:	"1860", 	electronshell:	"2,8,18,18,5",						url: "https://en.wikipedia.org/wiki/Antimony" },
{	symbol:	"Te",		element: "Tellurium",			group:	"16", 	period:	"5",	elementType: 'metalloid', 									atomicNumber:	"52",	atomicweight:	"127.60", 			density:	"6.232", 			melt: "722.66", 	boil:	"1261", 	electronshell:	"2,8,18,18,6",						url: "https://en.wikipedia.org/wiki/Tellurium" },
{	symbol:	"I",		element: "Iodine",				group:	"17", 	period:	"5",	elementType: 'reactiveNonMetal', 						atomicNumber:	"53",	atomicweight:	"126.90447", 		density:	"4.93", 			melt: "386.85", 	boil:	"457.4", 	electronshell:	"2,8,18,18,7",						url: "https://en.wikipedia.org/wiki/Iodine" },
{	symbol:	"Xe",		element: "Xenon",					group:	"18", 	period:	"5",	elementType: 'nobleGas', 										atomicNumber:	"54",	atomicweight:	"131.293", 			density:	"0.005887", 	melt: "161.4", 		boil:	"165.03", electronshell:	"2,8,18,18,8",						url: "https://en.wikipedia.org/wiki/Xenon" },
{	symbol:	"Cs",		element: "Caesium",				group:	"1", 		period:	"6",	elementType: 'alkaliMetal', 								atomicNumber:	"55",	atomicweight:	"132.90545196",	density:	"1.873", 			melt: "301.59", 	boil:	"944", 		electronshell:	"2,8,18,18,8,1",					url: "https://en.wikipedia.org/wiki/Caesium" },
{	symbol:	"Ba",		element: "Barium",				group:	"2", 		period:	"6",	elementType: 'alkaliEarthMetal', 						atomicNumber:	"56",	atomicweight:	"137.327", 			density:	"3.594", 			melt: "1000", 		boil:	"2170", 	electronshell:	"2,8,18,18,8,2",					url: "https://en.wikipedia.org/wiki/Barium" },
{	symbol:	"La",		element: "Lanthanum",			group:	"3", 		period:	"6",	elementType: 'lanthanide', 									atomicNumber:	"57",	atomicweight:	"138.90547", 		density:	"6.145", 			melt: "1193", 		boil:	"3737", 	electronshell:	"2,8,18,18,9,2",					url: "https://en.wikipedia.org/wiki/Lanthanum" },
{	symbol:	"Ce",		element: "Cerium",				group:	"null", period:	"6",	elementType: 'lanthanide', 									atomicNumber:	"58",	atomicweight:	"140.116", 			density:	"6.77", 			melt: "1068", 		boil:	"3716", 	electronshell:	"2,8,18,19,9,2",					url: "https://en.wikipedia.org/wiki/Cerium" },
{	symbol:	"Pr",		element: "Praseodymium",	group:	"null", period:	"6",	elementType: 'lanthanide', 									atomicNumber:	"59",	atomicweight:	"140.90766", 		density:	"6.773", 			melt: "1208", 		boil:	"3793", 	electronshell:	"2,8,18,21,8,2",					url: "https://en.wikipedia.org/wiki/Praseodymium" },
{	symbol:	"Nd",		element: "Neodymium",			group:	"null", period:	"6",	elementType: 'lanthanide', 									atomicNumber:	"60",	atomicweight:	"144.242", 			density:	"7.007", 			melt: "1297", 		boil:	"3347", 	electronshell:	"2,8,18,22,8,2",					url: "https://en.wikipedia.org/wiki/Neodymium" },
{	symbol:	"Pm",		element: "Promethium",		group:	"null", period:	"6",	elementType: 'lanthanide', 									atomicNumber:	"61",	atomicweight:	"[145]", 				density:	"7.26", 			melt: "1315", 		boil:	"3273", 	electronshell:	"2,8,18,23,8,2",					url: "https://en.wikipedia.org/wiki/Promethium" },
{	symbol:	"Sm",		element: "Samarium",			group:	"null", period:	"6",	elementType: 'lanthanide', 									atomicNumber:	"62",	atomicweight:	"150.36", 			density:	"7.52", 			melt: "1345", 		boil:	"2067", 	electronshell:	"2,8,18,24,8,2",					url: "https://en.wikipedia.org/wiki/Samarium" },
{	symbol:	"Eu",		element: "Europium",			group:	"null", period:	"6",	elementType: 'lanthanide', 									atomicNumber:	"63",	atomicweight:	"151.964", 			density:	"5.243", 			melt: "1099", 		boil:	"1802", 	electronshell:	"2,8,18,25,8,2",					url: "https://en.wikipedia.org/wiki/Europium" },
{	symbol:	"Gd",		element: "Gadolinium",		group:	"null", period:	"6",	elementType: 'lanthanide', 									atomicNumber:	"64",	atomicweight:	"157.25", 			density:	"7.895", 			melt: "1585", 		boil:	"3546", 	electronshell:	"2,8,18,25,9,2",					url: "https://en.wikipedia.org/wiki/Gadolinium" },
{	symbol:	"Tb",		element: "Terbium",				group:	"null", period:	"6",	elementType: 'lanthanide', 									atomicNumber:	"65",	atomicweight:	"158.92535", 		density:	"8.229", 			melt: "1629", 		boil:	"3503", 	electronshell:	"2,8,18,27,8,2",					url: "https://en.wikipedia.org/wiki/Terbium" },
{	symbol:	"Dy",		element: "Dysprosium",		group:	"null", period:	"6",	elementType: 'lanthanide', 									atomicNumber:	"66",	atomicweight:	"162.500", 			density:	"8.55", 			melt: "1680", 		boil:	"2840", 	electronshell:	"2,8,18,28,8,2",					url: "https://en.wikipedia.org/wiki/Dysprosium" },
{	symbol:	"Ho",		element: "Holmium",				group:	"null", period:	"6",	elementType: 'lanthanide', 									atomicNumber:	"67",	atomicweight:	"164.93033", 		density:	"8.795", 			melt: "1734", 		boil:	"2993", 	electronshell:	"2,8,18,29,8,2",					url: "https://en.wikipedia.org/wiki/Holmium" },
{	symbol:	"Er",		element: "Erbium",				group:	"null", period:	"6",	elementType: 'lanthanide', 									atomicNumber:	"68",	atomicweight:	"167.259", 			density:	"9.066", 			melt: "1802", 		boil:	"3141", 	electronshell:	"2,8,18,30,8,2",					url: "https://en.wikipedia.org/wiki/Erbium" },
{	symbol:	"Tm",		element: "Thulium",				group:	"null", period:	"6",	elementType: 'lanthanide', 									atomicNumber:	"69",	atomicweight:	"168.93422", 		density:	"9.321", 			melt: "1818", 		boil:	"2223", 	electronshell:	"2,8,18,31,8,2",					url: "https://en.wikipedia.org/wiki/Thulium" },
{	symbol:	"Yb",		element: "Ytterbium",			group:	"null", period:	"6",	elementType: 'lanthanide', 									atomicNumber:	"70",	atomicweight:	"173.045", 			density:	"6.965", 			melt: "1097", 		boil:	"1469", 	electronshell:	"2,8,18,32,8,2",					url: "https://en.wikipedia.org/wiki/Ytterbium" },
{	symbol:	"Lu",		element: "Lutetium",			group:	"null", period:	"6",	elementType: 'lanthanide', 									atomicNumber:	"71",	atomicweight:	"174.9668", 		density:	"9.84", 			melt: "1925", 		boil:	"3675", 	electronshell:	"2,8,18,32,9,2",					url: "https://en.wikipedia.org/wiki/Lutetium" },
{	symbol:	"Hf",		element: "Hafnium",				group:	"4", 		period:	"6",	elementType: 'transitionMetal', 						atomicNumber:	"72",	atomicweight:	"178.49", 			density:	"13.31", 			melt: "2506", 		boil:	"4876", 	electronshell:	"2,8,18,32,10,2",					url: "https://en.wikipedia.org/wiki/Hafnium" },
{	symbol:	"Ta",		element: "Tantalum",			group:	"5", 		period:	"6",	elementType: 'transitionMetal', 						atomicNumber:	"73",	atomicweight:	"180.94788", 		density:	"16.654", 		melt: "3290", 		boil:	"5731", 	electronshell:	"2,8,18,32,11,2",					url: "https://en.wikipedia.org/wiki/Tantalum" },
{	symbol:	"W",		element: "Tungsten",			group:	"6", 		period:	"6",	elementType: 'transitionMetal', 						atomicNumber:	"74",	atomicweight:	"183.84", 			density:	"19.25", 			melt: "3695", 		boil:	"5828", 	electronshell:	"2,8,18,32,12,2",					url: "https://en.wikipedia.org/wiki/Tungsten" },
{	symbol:	"Re",		element: "Rhenium",				group:	"7", 		period:	"6",	elementType: 'transitionMetal', 						atomicNumber:	"75",	atomicweight:	"186.207", 			density:	"21.02", 			melt: "3459", 		boil:	"5869", 	electronshell:	"2,8,18,32,13,2",					url: "https://en.wikipedia.org/wiki/Rhenium" },
{	symbol:	"Os",		element: "Osmium",				group:	"8", 		period:	"6",	elementType: 'transitionMetal', 						atomicNumber:	"76",	atomicweight:	"190.23", 			density:	"22.61", 			melt: "3306", 		boil:	"5285", 	electronshell:	"2,8,18,32,14,2",					url: "https://en.wikipedia.org/wiki/Osmium" },
{	symbol:	"Ir",		element: "Iridium",				group:	"9", 		period:	"6",	elementType: 'transitionMetal', 						atomicNumber:	"77",	atomicweight:	"192.217", 			density:	"22.56", 			melt: "2719", 		boil:	"4701", 	electronshell:	"2,8,18,32,15,2",					url: "https://en.wikipedia.org/wiki/Iridium" },
{	symbol:	"Pt",		element: "Platinum",			group:	"10", 	period:	"6",	elementType: 'transitionMetal', 						atomicNumber:	"78",	atomicweight:	"195.084", 			density:	"21.46", 			melt: "2041.4", 	boil:	"4098", 	electronshell:	"2,8,18,32,17,1",					url: "https://en.wikipedia.org/wiki/Platinum" },
{	symbol:	"Au",		element: "Gold",					group:	"11", 	period:	"6",	elementType: 'transitionMetal', 						atomicNumber:	"79",	atomicweight:	"196.966569", 	density:	"19.282", 		melt: "1337.33", 	boil:	"3129", 	electronshell:	"2,8,18,32,18,1",					url: "https://en.wikipedia.org/wiki/Gold" },
{	symbol:	"Hg",		element: "Mercury",				group:	"12", 	period:	"6",	elementType: 'postTransitionMetal', 				atomicNumber:	"80",	atomicweight:	"200.592", 			density:	"13.5336", 		melt: "234.43", 	boil:	"629.88", electronshell:	"2,8,18,32,18,2",					url: "https://en.wikipedia.org/wiki/Mercury" },
{	symbol:	"Tl",		element: "Thallium",			group:	"13", 	period:	"6",	elementType: 'postTransitionMetal', 				atomicNumber:	"81",	atomicweight:	"204.38", 			density:	"11.85", 			melt: "577", 			boil:	"1746", 	electronshell:	"2,8,18,32,18,3",					url: "https://en.wikipedia.org/wiki/Thallium" },
{	symbol:	"Pb",		element: "Lead",					group:	"14", 	period:	"6",	elementType: 'postTransitionMetal', 				atomicNumber:	"82",	atomicweight:	"207.2", 				density:	"11.342", 		melt: "600.61", 	boil:	"2022", 	electronshell:	"2,8,18,32,18,4",				url: "https://en.wikipedia.org/wiki/Lead" },
{	symbol:	"Bi",		element: "Bismuth",				group:	"15", 	period:	"6",	elementType: 'postTransitionMetal', 				atomicNumber:	"83",	atomicweight:	"208.98040", 		density:	"9.807", 			melt: "544.7", 		boil:	"1837", 	electronshell:	"2,8,18,32,18,5",				url: "https://en.wikipedia.org/wiki/Bismuth" },
{	symbol:	"Po",		element: "Polonium",			group:	"16", 	period:	"6",	elementType: 'postTransitionMetal', 				atomicNumber:	"84",	atomicweight:	"[209]", 				density:	"9.32", 			melt: "527", 			boil:	"1235", 	electronshell:	"2,8,18,32,18,6",					url: "https://en.wikipedia.org/wiki/Polonium" },
{	symbol:	"At",		element: "Astatine",			group:	"17", 	period:	"6",	elementType: 'metalloid', 									atomicNumber:	"85",	atomicweight:	"[210]", 				density:	"7", 					melt:	"575", 			boil:	"610" , 	electronshell:	"2,8,18,32,18,7",					url: "https://en.wikipedia.org/wiki/Astatine" },
{	symbol:	"Rn",		element: "Radon",					group:	"18", 	period:	"6",	elementType: 'nobleGas', 										atomicNumber:	"86",	atomicweight:	"[222]", 				density:	"0.00973", 		melt: "202", 			boil:	"211.3", 	electronshell:	"2,8,18,32,18,8",					url: "https://en.wikipedia.org/wiki/Radon" },
{	symbol:	"Fr",		element: "Francium",			group:	"1", 		period:	"7",	elementType: 'alkaliMetal', 								atomicNumber:	"87",	atomicweight:	"[223]", 				density:	"1.87", 			melt: "300", 			boil:	"950", 		electronshell:	"2,8,18,32,18,8,1",				url: "https://en.wikipedia.org/wiki/Francium" },
{	symbol:	"Ra",		element: "Radium",				group:	"2", 		period:	"7",	elementType: 'alkaliEarthMetal', 						atomicNumber:	"88",	atomicweight:	"[226]", 				density:	"5.5", 				melt: "973", 			boil:	"2010", 	electronshell:	"2,8,18,32,18,8,2",				url: "https://en.wikipedia.org/wiki/Radium" },
{	symbol:	"Ac",		element: "Actinium",			group:	"3", 		period:	"7",	elementType: 'actinide', 										atomicNumber:	"89",	atomicweight:	"[267]", 				density: 	"-23.2", 			melt:	"-2400", 		boil:	"-5800", 	electronshell:	"2,8,18,32,32,10,2",			url: "https://en.wikipedia.org/wiki/Rutherfordium" },
{	symbol:	"Th",		element: "Thorium",				group:	"null", period:	"7",	elementType: 'actinide', 										atomicNumber:	"90",	atomicweight:	"232.0377", 		density:	"11.72", 			melt: "2115", 		boil:	"5061", 	electronshell:	"2,8,18,32,18,10,2",			url: "https://en.wikipedia.org/wiki/Thorium" },
{	symbol:	"Pa",		element: "Protactinium",	group:	"null", period:	"7",	elementType: 'actinide', 										atomicNumber:	"91",	atomicweight:	"231.03588", 		density:	"15.37", 			melt: "1841", 		boil:	"4300", 	electronshell:	"2,8,18,32,20,9,2",				url: "https://en.wikipedia.org/wiki/Protactinium" },
{	symbol:	"U",		element: "Uranium",				group:	"null", period:	"7",	elementType: 'actinide', 										atomicNumber:	"92",	atomicweight:	"238.02891", 		density:	"18.95", 			melt: "1405.3", 	boil:	"4404", 	electronshell:	"2,8,18,32,21,9,2",				url: "https://en.wikipedia.org/wiki/Uranium" },
{	symbol:	"Np",		element: "Neptunium",			group:	"null", period:	"7",	elementType: 'actinide', 										atomicNumber:	"93",	atomicweight:	"[237]", 				density:	"20.45", 			melt: "917", 			boil:	"4273", 	electronshell:	"2,8,18,32,22,9,2",				url: "https://en.wikipedia.org/wiki/Neptunium" },
{	symbol:	"Pu",		element: "Plutonium",			group:	"null", period:	"7",	elementType: 'actinide', 										atomicNumber:	"94",	atomicweight:	"[244]", 				density:	"19.84", 			melt: "912.5", 		boil:	"3501", 	electronshell:	"2,8,18,32,24,8,2",				url: "https://en.wikipedia.org/wiki/Plutonium" },
{	symbol:	"Am",		element: "Americium",			group:	"null", period:	"7",	elementType: 'actinide', 										atomicNumber:	"95",	atomicweight:	"[243]", 				density:	"13.69", 			melt: "1449", 		boil:	"2880", 	electronshell:	"2,8,18,32,25,8,2",				url: "https://en.wikipedia.org/wiki/Americium" },
{	symbol:	"Cm",		element: "Curium",				group:	"null", period:	"7",	elementType: 'actinide', 										atomicNumber:	"96",	atomicweight:	"[247]", 				density:	"13.51", 			melt: "1613", 		boil:	"3383", 	electronshell:	"2,8,18,32,25,9,2",				url: "https://en.wikipedia.org/wiki/Curium" },
{	symbol:	"Bk",		element: "Berkelium",			group:	"null", period:	"7",	elementType: 'actinide', 										atomicNumber:	"97",	atomicweight:	"[247]", 				density:	"14.79", 			melt: "1259", 		boil:	"2900", 	electronshell:	"2,8,18,32,27,8,2",				url: "https://en.wikipedia.org/wiki/Berkelium" },
{	symbol:	"Cf",		element: "Californium",		group:	"null", period:	"7",	elementType: 'actinide', 										atomicNumber:	"98",	atomicweight:	"[251]", 				density:	"15.1", 			melt: "1173", 		boil:	"-1743", 	electronshell:	"2,8,18,32,28,8,2",				url: "https://en.wikipedia.org/wiki/Californium" },
{	symbol:	"Es",		element: "Einsteinium",		group:	"null", period:	"7",	elementType: 'actinide', 										atomicNumber:	"99",	atomicweight:	"[252]", 				density:	"8.84", 			melt: "1133", 		boil:	"-1269", 	electronshell:	"2,8,18,32,29,8,2",				url: "https://en.wikipedia.org/wiki/Einsteinium" },
{	symbol:	"Fm",		element: "Fermium",				group:	"null", period:	"7",	elementType: 'actinide', 										atomicNumber:	"100",	atomicweight:	"[257]", 				density: 	"-9.7", 			melt:	"-1125", 		boil:	"null", 	electronshell:	"2,8,18,32,30,8,2",				url: "https://en.wikipedia.org/wiki/Fermium" },
{	symbol:	"Md",		element: "Mendelevium",		group:	"null", period:	"7",	elementType: 'actinide', 										atomicNumber:	"101",	atomicweight:	"[258]", 				density: 	"-10.3", 			melt:	"-1100", 		boil:	"null", 	electronshell:	"2,8,18,32,31,8,2",				url: "https://en.wikipedia.org/wiki/Mendelevium" },
{	symbol:	"No",		element: "Nobelium",			group:	"null", period:	"7",	elementType: 'actinide', 										atomicNumber:	"102",	atomicweight:	"[259]", 				density: 	"-9.9", 			melt:	"-1100", 		boil:	"null", 	electronshell:	"2,8,18,32,32,8,2",				url: "https://en.wikipedia.org/wiki/Nobelium" },
{	symbol:	"Lr",		element: "Lawrencium",		group:	"null", period:	"7",	elementType: 'actinide', 										atomicNumber:	"103",	atomicweight:	"[266]", 				density: 	"-15.6", 			melt:	"-1900", 		boil:	"null", 	electronshell:	"2,8,18,32,32,8,3",				url: "https://en.wikipedia.org/wiki/Lawrencium" },
{	symbol:	"Rf",		element: "Rutherfordium",	group:	"4", 		period:	"7",	elementType: 'transitionMetal', 						atomicNumber:	"104",	atomicweight:	"[267]", 				density: 	"-23.2", 			melt:	"-2400", 		boil:	"-5800", 	electronshell:	"2,8,18,32,32,10,2",			url: "https://en.wikipedia.org/wiki/Rutherfordium" },
{	symbol:	"Db",		element: "Dubnium",				group:	"5", 		period:	"7",	elementType: 'transitionMetal', 						atomicNumber:	"105",	atomicweight:	"[268]", 				density: 	"-29.3", 			melt: "null", 		boil:	"null", 	electronshell:	"2,8,18,32,32,11,2",			url: "https://en.wikipedia.org/wiki/Dubnium" },
{	symbol:	"Sg",		element: "Seaborgium",		group:	"6", 		period:	"7",	elementType: 'transitionMetal', 						atomicNumber:	"106",	atomicweight:	"[269]", 				density: 	"-35", 				melt: "null", 		boil:	"null", 	electronshell:	"2,8,18,32,32,12,2",			url: "https://en.wikipedia.org/wiki/Seaborgium" },
{	symbol:	"Bh",		element: "Bohrium",				group:	"7", 		period:	"7",	elementType: 'transitionMetal', 						atomicNumber:	"107",	atomicweight:	"[270]", 				density: 	"-37.1", 			melt: "null", 		boil:	"null", 	electronshell:	"2,8,18,32,32,13,2",			url: "https://en.wikipedia.org/wiki/Bohrium" },
{	symbol:	"Hs",		element: "Hassium",				group:	"8", 		period:	"7",	elementType: 'transitionMetal', 						atomicNumber:	"108",	atomicweight:	"[277]", 				density: 	"-40.7", 			melt: "null", 		boil:	"null", 	electronshell:	"2,8,18,32,32,14,2",			url: "https://en.wikipedia.org/wiki/Hassium" },
{	symbol:	"Mt",		element: "Meitnerium",		group:	"9", 		period:	"7",	elementType: 'unknownChemicalProperties', 	atomicNumber:	"109",	atomicweight:	"[278]", 				density: 	"-37.4", 			melt: "null", 		boil:	"null", 	electronshell:	"2,8,18,32,32,15,2 (?)",	url: "https://en.wikipedia.org/wiki/Meitnerium" },
{	symbol:	"Ds",		element: "Darmstadtium",	group:	"10", 	period:	"7",	elementType: 'unknownChemicalProperties', 	atomicNumber:	"110",	atomicweight:	"[281]", 				density: 	"-34.8", 			melt: "null", 		boil:	"null", 	electronshell:	"2,8,18,32,32,16,2 (?)",	url: "https://en.wikipedia.org/wiki/Darmstadtium" },
{	symbol:	"Rg",		element: "Roentgenium",		group:	"11", 	period:	"7",	elementType: 'unknownChemicalProperties', 	atomicNumber:	"111",	atomicweight:	"[282]", 				density: 	"-28.7", 			melt: "null", 		boil:	"null", 	electronshell:	"2,8,18,32,32,17,2 (?)",	url: "https://en.wikipedia.org/wiki/Roentgenium" },
{	symbol:	"Cn",		element: "Copernicium",		group:	"12", 	period:	"7",	elementType: 'postTransitionMetal', 				atomicNumber:	"112",	atomicweight:	"[285]", 				density: 	"-23.7", 			melt: "null", 		boil:	"~357", 	electronshell:	"2,8,18,32,32,18,2 (?)",	url: "https://en.wikipedia.org/wiki/Copernicium" },
{	symbol:	"Nh",		element: "Nihonium",			group:	"13", 	period:	"7",	elementType: 'unknownChemicalProperties', 	atomicNumber:	"113",	atomicweight:	"[286]", 				density: 	"-16", 				melt:	"-700", 		boil:	"-1400", 	electronshell:	"2,8,18,32,32,18,3 (?)",	url: "https://en.wikipedia.org/wiki/Nihonium" },
{	symbol:	"Fl",		element: "Flerovium",			group:	"14", 	period:	"7",	elementType: 'unknownChemicalProperties', 	atomicNumber:	"114",	atomicweight:	"[289]", 				density: 	"-14", 				melt: "null",			boil:	"~210", 	electronshell:	"2,8,18,32,32,18,4 (?)",	url: "https://en.wikipedia.org/wiki/Flerovium" },
{	symbol:	"Mc",		element: "Moscovium",			group:	"15", 	period:	"7",	elementType: 'unknownChemicalProperties', 	atomicNumber:	"115",	atomicweight:	"[290]", 				density: 	"-13.5", 			melt:	"-700", 		boil:	"-1400", 	electronshell:	"2,8,18,32,32,18,5 (?)",	url: "https://en.wikipedia.org/wiki/Moscovium" },
{	symbol:	"Lv",		element: "Livermorium",		group:	"16", 	period:	"7",	elementType: 'unknownChemicalProperties', 	atomicNumber:	"116",	atomicweight:	"[293]", 				density: 	"-12.9", 			melt:	"-709", 		boil:	"-1085", 	electronshell:	"2,8,18,32,32,18,6 (?)",	url: "https://en.wikipedia.org/wiki/Livermorium" },
{	symbol:	"Ts",		element: "Tennessine",		group:	"17", 	period:	"7",	elementType: 'unknownChemicalProperties', 	atomicNumber:	"117",	atomicweight:	"[294]", 				density: 	"-7.2", 			melt:	"-723", 		boil:	"-883", 	electronshell:	"2,8,18,32,32,18,7 (?)",	url: "https://en.wikipedia.org/wiki/Tennessine" },
{	symbol:	"Og",		element: "Oganesson",			group:	"18", 	period:	"7",	elementType: 'unknownChemicalProperties', 	atomicNumber:	"118",	atomicweight:	"[294]", 				density: 	"-5",					melt: "null", 		boil:	"-350", 	electronshell:	"2,8,18,32,32,18,8 (?)",	url: "https://en.wikipedia.org/wiki/Oganesson" }
];

$('<div/>', {id: 'wrapper'}).prependTo('body').append($('<ul/>', {id: 'container'}));

$(function() {
	var windowWidth = $(window).width();
	// $(window).height();
	// console.log(windowWidth);
})

$.each(atomicval, function(key, value) {
// var result = (value.atomicweight);
	$("#container").append(

		$('<li>', {id: value.element, class: 'atomicElementTile ' + "group-" + value.group + " period-" + value.period + " " + value.elementType}).append(
			// "<h3 class='atomicName'>" + value.element + "</h3>" +
			"<span class='atomicNumber'>" + value.atomicNumber + "</span>" +
			"<h1>" + value.symbol + "</h1>"
			// + "<span class='atomicWeight'>" + value.atomicweight + "</span>"

		)
	)

	if ($(window).width() < 1200) {
		$('span.atomicWeight').remove();
		$('h3.atomicName').remove();
	}



});

$(".group-null").wrapAll('<div class="LanthanidesActinides"></div>');

$('<div/>', {id: 'controllerPanel'}).prependTo('#wrapper')

$('<div/>', {id: 'classificationsWrapper'}).prependTo('#controllerPanel')

$('<div/>', {id: 'metalBtn', class: 'btn'}).appendTo('#classificationsWrapper').text('Metal')
$('<div/>', {id: 'nonMetalBtn', class: 'btn'}).appendTo('#classificationsWrapper').text('Non-Metal')
$('<div/>', {id: 'clearFilter', class: 'btn'}).appendTo('#classificationsWrapper').text('Clear Filter')


$('#classificationsWrapper > .btn').on('click', function() {

	function classificationsFiltering() {
		$('li').css("opacity", "0.5")
		var atomicFilterSelected = $('li').filter( $( value )).css("opacity", "1")
	}

		if ($(this).is("#metalBtn")) {
			var value = '.transitionMetal, .lanthanide, .alkaliMetal, .alkaliEarthMetal, .actinide, .postTransitionMetal, .unknownChemicalProperties';
			classificationsFiltering()
		}
		else if ($(this).is("#nonMetalBtn")) {

			var value = '.metalloid, .reactiveNonMetal, .nobleGas';
			classificationsFiltering()
		}
		else {
			$('li').css("opacity", "1")
		}

});

$('<div/>', {id: 'blocksWrapper'}).prependTo('#controllerPanel')

$('<div/>', {id: 'blockS', class: 'btn'}).appendTo('#blocksWrapper').text('s block')
$('<div/>', {id: 'blockP', class: 'btn'}).appendTo('#blocksWrapper').text('p block')
$('<div/>', {id: 'blockD', class: 'btn'}).appendTo('#blocksWrapper').text('d block')
$('<div/>', {id: 'blockF', class: 'btn'}).appendTo('#blocksWrapper').text('f block')

$('#blocksWrapper > .btn').on('click', function() {



	function classificationsFiltering() {
		$('li').css("opacity", "0.5")
		var atomicFilterSelected = $('li').filter( $( value )).css("opacity", "1")
	}

		if ($(this).is("#blockS")) {
			var value = '.group-1, .group-2, #Helium';
			classificationsFiltering()
		}
		else if ($(this).is("#blockP")) {
			var value = '.group-13, .group-14, .group-15, .group-16, .group-17, .group-18:not("#Helium")';
			classificationsFiltering()
		}
		else if ($(this).is("#blockD")) {
			var value = '.group-3, .group-4, .group-5, .group-6, .group-7, .group-8, .group-9, .group-10, .group-11, .group-12';
			classificationsFiltering()
		}
		else if ($(this).is("#blockF")) {
			var value = '.group-null';
			classificationsFiltering()
		}
		else {
			$('li').css("opacity", "0.5")
		}

});

$(function() {
	$('<div/>', {id: 'groupWrapper'}).prependTo('#controllerPanel')
	for (i = 0; i < 18; i++) {
		$('<div/>', {id: 'group-' + [i + 1], class: 'btn'}).text([i + 1]).appendTo('#groupWrapper');
	}

	$('#groupWrapper > .btn').on('click', function() {
		  var retval = $(this).attr('id')
			retvalClass = '.' + retval
			$('li').css("opacity", "0.5")
			$('li').filter( $( retvalClass ).not("#Lanthanum, #Actinium")).css("opacity", "1")

	});
})

$(function() {
	$('<div/>', {id: 'periodWrapper'}).prependTo('#controllerPanel')
	for (i = 0; i < 7; i++) {
		$('<div/>', {id: 'period-' + [i + 1], class: 'btn'}).text([i + 1]).appendTo('#periodWrapper');
	}

	$('#periodWrapper > .btn').on('click', function() {
			var retval = $(this).attr('id')
			retvalClass = '.' + retval
			$('li').css("opacity", "0.5")
			$('li').filter( $( retvalClass )).css("opacity", "1")

	});
})

$(function() {
	$('<div/>', {id: 'propertiesWrapper'}).prependTo('#controllerPanel')

	$('<div/>', {id: 'nobleGas', class: 'btn'}).appendTo('#propertiesWrapper').text('noble Gas')
	$('<div/>', {id: 'reactiveNonMetal', class: 'btn'}).appendTo('#propertiesWrapper').text('reactive Non Metal')
	$('<div/>', {id: 'metalloid', class: 'btn'}).appendTo('#propertiesWrapper').text('metalloid')
	$('<div/>', {id: 'postTransitionMetal', class: 'btn'}).appendTo('#propertiesWrapper').text('post Transition Metal')
	$('<div/>', {id: 'transitionMetal', class: 'btn'}).appendTo('#propertiesWrapper').text('transition Metal')
	$('<div/>', {id: 'alkaliEarthMetal', class: 'btn'}).appendTo('#propertiesWrapper').text('alkali Earth Metal')
	$('<div/>', {id: 'alkaliMetal', class: 'btn'}).appendTo('#propertiesWrapper').text('alkali Metal')
	$('<div/>', {id: 'lanthanide', class: 'btn'}).appendTo('#propertiesWrapper').text('lanthanide')
	$('<div/>', {id: 'actinide', class: 'btn'}).appendTo('#propertiesWrapper').text('actinide')
	$('<div/>', {id: 'unknownChemicalProperties', class: 'btn'}).appendTo('#propertiesWrapper').text('unknown Chemical Properties')

	$('#propertiesWrapper > .btn').on('click', function() {

		var retval = $(this).attr('id')
		retvalClass = '.' + retval
		$('li').css("opacity", "0.5")
		$('li').filter( $( retvalClass )).css("opacity", "1")

	});
})

$('li.atomicElementTile').on('click', function atomic_description_popup_open() {

	var returnindex = $(this).index('li.atomicElementTile');

	if (0 === $( "#elementDescription" ).length) {
    $('<div/>', {id: 'elementDescription'}).prependTo('#container');
		$('li.atomicElementTile').css("filter", 'blur(.8px)');
	}
		$('<div/>', {class: 'popUpFlip'}).appendTo("#elementDescription")
		$('<div/>', {class: 'atomicDescTile'}).appendTo(".popUpFlip")
		$('<div/>', {class: 'atomicNumber'}).text(atomicval[returnindex].atomicNumber).appendTo(".atomicDescTile");
		$('<div/>', {class: 'element'}).text(atomicval[returnindex].element).appendTo(".atomicDescTile");
		$('<div/>', {class: 'symbol'}).text(atomicval[returnindex].symbol).appendTo(".atomicDescTile");

		var electrons = atomicval[returnindex].electronshell.split(',');
		var atomicDescWidth = $('div.atomicDescTile').width();

		var type = 1; //circle type - 1 whole, 0.5 half, 0.25 quarter
		var start = 0; //shift start from 0

		$.each(electrons, function(value, index){

			var shellWidth = ((value) * 40) + (atomicDescWidth + 40);
			var shellRadius = shellWidth / 2;
			var shellMargin = shellWidth - (shellWidth * 1.5);
			var shellValue = ('shell-' + (value + 1));
			// var shellValue = ('shell-' + 1);
			// var shellElectronChild = $('.shell-1 > .electron');

			// var $elFirst = $("'.shell-" + (value + 1) + " > .electron'");

			$('<div class="shell ' + shellValue  + ' electronShell-' + index + '"/> ' + '</div>').appendTo('.popUpFlip').css({
			// $('<div class="shell shell-' + (value + 1)  + ' electronShell-' + index + '"/> ' + '</div>').appendTo('.popUpFlip').css({
				// 'width' : shellWidth,
				// 'height' : shellWidth,
				// 'margin-left' : shellMargin,
				// 'margin-top' : shellMargin,
			})

			for (i = 0; i < index; i++) {
							$('<div/>', {class: 'electron'}).appendTo('.' + shellValue).css({
								// left: shellRadius,
								// top: shellRadius,
								'transform' :  'translateY(' + shellRadius + ')'
							});
					}

console.log(shellRadius);

	})

	$(function() {

		$('.shell').each(function(index){

			var shellElChild = $(this).children('.electron');
			var radiusFirst = '80px';

			// console.log(shellRadius)
		console.log($(this).width())

			var slice = 360 * type / ((type === 1) ?  shellElChild.length : shellElChild.length - 1);

					shellElChild.each(function(i) {
						var rotate = slice * i + start;
							$(this).css({
								'transform': 'rotate(' + rotate + 'deg)'
								// 'transform': 'rotate(' + rotate + 'deg) translate(' + radiusFirst + ')'
							});
					});

});

	})

			// for (i = 0; i < index; i++) {
			// 				$('<div/>', {class: 'electron'}).appendTo('.shell');
			// 		}

		// })

		// var g = $('.electronShell-2:lt(1)').find('.electron')
		// 	if (g.length === 4) {
		// 		$('.electron:lt(2)').remove();
		// 	}

			// First shell arrange the elements
	// 		var radiusFirst = '80px';
	// 		var radiusSecond = '100px';
	// 		var radiusThird = '120px';
	// 		var radiusFourth = '140px';
	//
	// 		var $elFirst = $('.shell-1 > .electron');
	// 		var $elSecond = $('.shell-2 > .electron');
	// 		var $elThird = $('.shell-3 > .electron');
	// 		var $elFourth = $('.shell-4 > .electron');
	// 		// var $elFirst = $(index > '.electron');
	//
	// var slice = 360 * type / ((type === 1) ?  $elFirst.length : $elFirst.length - 1);
	//
	// 		$elFirst.each(function(i) {
	// 			var disTop = $elFirst.css({left: radiusFirst, top: radiusFirst});
	// 			var rotate = slice * i + start;
	// 				$(this).css({
	// 					'transform': 'rotate(' + rotate + 'deg) translate(' + radiusFirst + ')'
	// 				});
	// 		});


		// var elL = atomicval[returnindex].electronshell;
		// console.log(electrons)


		// console.log(atomicval.electronshell)
	// 	$.each(elL, function(){
	// // for (i = 0; i < elL; i++) {
	// 	$('<div class="shell electronShell-' + '"/> ' + '</div>').appendTo('#container');
	// 	// $(function () {
	// 	// 	// console.log(index);
	// 	// 	// console.log(elL)
	// 	// 	// ii
	// 	// 	for (i = 0; i < i; i++) {
	// 	// 		// console.log(returnindex);
	// 	// 		// $('.electronShell-' + [index]).append('<div/>');
	// 	// 		$('.electronShell-'  + index).append('<div class="electron"/>');
	// 	// 	}
	// 	// })
	//

// console.log(electrons);
			// $.each(electrons, function(value, index){
			// 	// console.log(index);
			//
			// 	$('<div class="shell electronShell-' + index + '"/> ' + '</div>').appendTo('#container');
			//
			//
			//
			// 	for (i = 0; i < index; i++) {
			// 		console.log(index);
			// 		// $('.electronShell-' + [index]).append('<div/>');
			// 		$('.shell').append('<div/>');
			// 	}
			// 	// console.log($('.shell').find('div'));
			// 	// $.each('.shell', function(){
			// 	//
			// 	// })
			//
			// })

			// electrons.map(function(value, index){
			// 	console.log(value);
			// 	$.each(function() {
			// 		$('#container').append($('<div/>'))
			// 	})
			// })




// var main = [{
//   title:'Title 1',
//   tagsProject: ['tag1', 'tag2'],
//   content: 'Content1'
// },{
//   title:'Title 2',
//   tagsProject: ['tag5', 'tag6', 'tag1'],
//   content: 'Content2'
// },{
//   title:'Title 3',
//   tagsProject: ['tag4'],
//   content: 'Content3'
// }];
// var container = $('<div />', {class:'container'});
//
// $.each(main, function(i, e){
//   var cList = $('<ul class="tags"/>');
//
//   e.tagsProject.map(function(tag){
//     var link = $('<a/>').text(tag).prop('href', tag);
//     $('<li/>').append(link).appendTo(cList);
//   });
//
//   var item = $('<div />', {
//     class:'item',
//     html:'<div><h2>' + e.title + '</h2></div>' +
//     '<div class="content"><p>' + e.content + '</p></div></div>'
//   });
//
//   item.find('.content').append(cList);
//   container.append(item);
// });
//
// container.appendTo($('#container'));

			// $('.shell').each( function(){
			// 	console.log('n')
			// })

			// var n = $.length(index);

			// console.log(n);
			// for (i = 0; i<[index].length; i++) {
			// 	console.log('electron')
			// }


			// })

			// var g = $('<div/>', {class: 'electron'})
			// $('.shell').each(
			// 	function(){
			// 		console.log(value)
			// 	}
			// )
			// var shell = $('.shell')
			// shell.each( function(){
			// 	$(g.length(index)).appendTo('#container');
			// })
			// [index].forEach(function([index]) {
			// 	var g = document.createElement( $('div') * [index]);
			// 	g.setAttribute('id', [index]);
			// 	  document.body.appendChild(g);
			//
			// 	})


		// 	[value].forEach(function([index]) {
		//   var g = document.createElement('div');
		//   g.setAttribute('id', [index]);
		//   document.body.appendChild(g);
		// })

			// for (i=0; i<[value].length; i++) {
			// 	var g = document.createElement('div');
			//    g.setAttribute('class', 'electon-'[i]);
			//    document.body.appendChild(g);
			// }
			// $('<div/>', {class: 'electron-' + [value]}).appendTo('.atomicShell-' + [index])
				// $.each(electrons[index], function(){
				// 	console.log(electrons[index])
				// 	$('<div/>', {class: 'atomicElectron-' + [index]}).text(electrons[index]).appendTo('.atomicShell-' + index);
				// })
			// $('<div/>', {class: 'atomicShell-' + [index]}).text(electrons[index]).appendTo('#container');

		// })

		// var type = 1; //circle type - 1 whole, 0.5 half, 0.25 quarter
		// var start = 0; //shift start from 0
		// var $element = $('.electron');
		// // var atomicDescWidth = $('div.atomicDescTile').width();
		//
		// console.log('This is the Atomic Description Width ' + atomicDescWidth);
		// // I want to add 40px to each shell width
		//
		// var allShell = $('div.popUpFlip').find('.shell');
		// console.log(allShell.length);
		// $(allShell).each(function(index){
		// 	var shellElectron = $(this).children('.electron');
		// 	console.log(shellElectron);
		//
		// 	var slice = 360 * type / ((type === 1) ?  shellElectron.length : shellElectron.length - 1);
		//
		// 			shellElectron.each(function(i) {
		// 				var disTop = $(this).find('.electron').css({left: shellRadius, top: shellRadius});
		// 				var rotate = slice * i + start;
		// 					$(this).css({
		// 						'transform': 'rotate(' + rotate + 'deg) translate(' + shellRadius + ')'
		// 					});
		// 			});
		//
		//
		// 	// var shellRadius = $(this).width() / 2;
		// 	// console.log(shellRadius);
		// });


		// var shellWidth = $('.')

//
// 		var slice = 360 * type / ((type === 1) ?  $elSecond.length : $elSecond.length - 1);
//
// 		$elSecond.each(function(i) {
// 			var disTop = $elSecond.css({left: radiusSecond, top: radiusSecond});
// 			var rotate = slice * i + start;
// 				$(this).css({
// 					'transform': 'rotate(' + rotate + 'deg) translate(' + radiusSecond + ')'
// 				});
// 		});
//
// 		var slice = 360 * type / ((type === 1) ?  $elThird.length : $elThird.length - 1);
//
// 		$elThird.each(function(i) {
// 			var disTop = $elThird.css({left: radiusThird, top: radiusThird});
// 			var rotate = slice * i + start;
// 				$(this).css({
// 					'transform': 'rotate(' + rotate + 'deg) translate(' + radiusThird + ')'
// 				});
// 		});
//
// 		var slice = 360 * type / ((type === 1) ?  $elFourth.length : $elFourth.length - 1);
//
// 		$elFourth.each(function(i) {
// 			var disTop = $elFourth.css({left: radiusFourth, top: radiusFourth});
// 			var rotate = slice * i + start;
// 				$(this).css({
// 			    'transform': 'rotate(' + rotate + 'deg) translate(' + radiusFourth + ')'
// 				});
// 		});

				// });


		// electrons.split(',');
// 		for (var c in electrons) {
//     var newElement = document.createElement('div');
//     newElement.id = electrons[c]; newElement.className = "car";
//     newElement.innerHTML = electrons[c];
//     document.body.appendChild(newElement);
// }

		// console.log(electrons);

		//
		// // $('#symbolWrap'));
		// $('<div/>', {class: 'url'}).text('Learn more about ' + atomicval[retindex].element).appendTo("#elementDescription").wrapInner( $('<a/>', {target: '_blank'}).attr('href', atomicval[retindex].url,));


	// console.log(atomicval[retindex].element);

})






// GREP function - return values that meet a criteria

// var arr = [ 1, 9, 3, 8, 6, 1, 5, 9, 4, 7, 3, 8, 6, 9, 1 ];
// // $( "div" ).text( arr.join( ", " ) );
//
// arr = $.grep(arr, function( n, i ) {
//   return ( n !== 5 && i > 4 );
// });
//
// console.log(arr);
//
// // $( "p" ).text( arr.join( ", " ) );
// //
// arr = $.grep(arr, function( a ) {
//   return a !== 9;
// });
//
// console.log(arr);
//
// arr = $.grep(arr, function( n, i ) {
//   return n > 1;
// });
//
// console.log(arr);
//
// arr = $.grep(arr, function( n, i ) {
//   return n > 4;
// }, true);
//
// console.log(arr);


// $( "span" ).text( arr.join( ", " ) );





//
// var savedViews = [{
//     description: 'metallic',
//     id: 1
// }, {
//     description: 'nonMetallic',
//     id: 2
// },{
//     description: 'clearFilter',
//     id: 3
//
// }]
//
// var view = 'metallic';
// // var view = [];
// var delete_id = savedViews.filter(function (el) {
//     return el.description === view;
// })[0].id;
// console.log(delete_id)

// objArray = [ { foo: 1, bar: 2}, { foo: 3, bar: 4}, { foo: 5, bar: 6} ];

// $('div#metalBtn').click(function() {
//
// 	console.log('metal');
//
// });
// $(function() {
// 	var windowHeight = $(window).height();
// 	// $(window).height();
// 	console.log(windowHeight);
// })
//
// $(function() {
// 	var windowWidth = $(window).width();
// 	// $(window).height();
// 	console.log(windowWidth);
// })

// $.each(atomicval, function( key, value ) {
// 	$('<li />').appendTo('#container').attr('id', value.element).attr('class', 'chemicalElement' + ' group-' +value.group + ' period-' + value.period + ' ' + value.elementType);
//
// 	// var $this = '.chemicalElement';
// 	// $($this).each(function(){
// 	// 	console.log(value.element);
// 	// });
// 	// console.log(value.element);
// });

// $.each(atomicval, function(key) {
//
//     $.each(this, function() {
//
//         var li_tag = '<li class="alpha_li">' + this + '</li>';
//
//         $("#container").append(li_tag);
//     });
// });

// $(function() {
// 	var lengthOfArray = Object.keys(atomicval).length;
//
// 	console.log(lengthOfArray);
//
// 	for (i = 0; i < lengthOfArray; i++) {
//   // $('<div class="results" />').text(arrayVariable[i]).appendTo('body');
// 	// $(atomicElement).appendTo('#container');
// 	$('<li />').appendTo('#container').setAttribute('id', function(i, val) {
// 		return val
// 	}
//
//
// 	// atomicval.element);
// }
//
// 	// $(lengthOfArray.each(function(i){
// 	// 	console.log('hi');
// 	// }))
//
//
//
// })




		// var type = 1; //circle type - 1 whole, 0.5 half, 0.25 quarter
		// var start = 0; //shift start from 0
		// var $element = $('.electron');
		//
		// // First shell arrange the elements
		// var radiusFirst = '70px';
		// var $elFirst = $('.shell-1');
		//
		// var slice = 360 * type / ((type === 1) ?  $elFirst.length : $elFirst.length - 1);
		//
		// 		$elFirst.each(function(i) {
		// 			var disTop = $elFirst.css({top: radiusFirst});
		// 			var rotate = slice * i + start;
		// 				$(this).css({
		// 				    'transform': 'rotate(' + rotate + 'deg) translate(' + radiusFirst + ')'
		// 				});
		// 		});

		// // Second shell arrange the elements
		// var radiusSecond = '175px';
		// var $elSecond = $('.secondShell');
		// var slice = 360 * type / ((type === 1) ?  $elSecond.length : $elSecond.length - 1);
		//
		// 		$elSecond.each(function(i) {
		// 			var disTop = $elSecond.css({top: radiusSecond});
		// 			var rotate = slice * i + start;
		// 				$(this).css({
		// 						'transform': 'rotate(' + rotate + 'deg) translate(' + radiusSecond + ')'
		// 				});
		// 		});
		//
		// // Third shell arrange the elements
		// var radiusThird = '155px';
		// var $elThird = $('.thirdShell');
		// var slice = 360 * type / ((type === 1) ?  $elThird.length : $elThird.length - 1);
		//
		// 		$elThird.each(function(i) {
		// 			var disTop = $elThird.css({top: radiusThird});
		// 			var rotate = slice * i + start;
		// 				$(this).css({
		// 						'transform': 'rotate(' + rotate + 'deg) translate(' + radiusThird + ')'
		// 				});
		// 		});
		//
		// // Fourth shell arrange the elements
		// var radiusFourth = '135px';
		// var $elFourth = $('.fourthShell');
		// var slice = 360 * type / ((type === 1) ?  $elFourth.length : $elFourth.length - 1);
		//
		// 		$elFourth.each(function(i) {
		// 			var disTop = $elFourth.css({top: radiusFourth});
		// 			var rotate = slice * i + start;
		// 				$(this).css({
		// 						'transform': 'rotate(' + rotate + 'deg) translate(' + radiusFourth + ')'
		// 				});
		// 		});
		//
		// // Fifth shell arrange the elements
		// var radiusFifth = '115px';
		// var $elFifth = $('.fifthShell');
		// var slice = 360 * type / ((type === 1) ?  $elFifth.length : $elFifth.length - 1);
		//
		// 		$elFifth.each(function(i) {
		// 			var disTop = $elFifth.css({top: radiusFifth});
		// 			var rotate = slice * i + start;
		// 				$(this).css({
		// 						'transform': 'rotate(' + rotate + 'deg) translate(' + radiusFifth + ')'
		// 				});
		// 		});
		//
		// // Sixth shell arrange the elements
		//
		// var radiusSixth = '95px';
		// var $elSixth = $('.sixthShell');
		// var slice = 360 * type / ((type === 1) ?  $elSixth.length : $elSixth.length - 1);
		//
		// 		$elSixth.each(function(i) {
		// 			var disTop = $elSixth.css({top: radiusSixth});
		// 			var rotate = slice * i + start;
		// 				$(this).css({
		// 						'transform': 'rotate(' + rotate + 'deg) translate(' + radiusSixth + ')'
		// 				});
		// 		});
		//
		// // Seventh shell arrange the elements
		//
		// var radiusSeventh = '75px';
		// var $elSeventh = $('.seventhShell');
		// var slice = 360 * type / ((type === 1) ?  $elSeventh.length : $elSeventh.length - 1);
		//
		// 		$elSeventh.each(function(i) {
		// 			var disTop = $elSeventh.css({top: radiusSeventh});
		// 			var rotate = slice * i + start;
		// 				$(this).css({
		// 						'transform': 'rotate(' + rotate + 'deg) translate(' + radiusSeventh + ')'
		// 				});
		// 		});
//
//
//
// var $popUpWrapper = $('<div></div>').attr('id', 'popUpWrapper'),
// 		$alertBox = $('<div></div>').attr('id', 'alertBox'),
// 		$elementTitle = $('<h1></h1>').attr('id', 'elementTitle');
// 		// $electronsPerShell = $('<p></p>').attr('id', 'electronsPerShell');
// 		$electronsShell = $('<div></div>').attr('class', 'electronShell');
// //
// //
// // // This click function calls the values from the array
// //
// 		$('li').click(function(e) {
// 			// var $this = $(this);
// 			var domIndex = $('li').index(this);
// 			// var filterValOnClick = 'blur(1.5px)';
// 			$('li').css("filter", 'blur(1.5px)');
// 			$($popUpWrapper).appendTo( $('body') );
// 			$($alertBox).appendTo($popUpWrapper);
// 			$($elementTitle).appendTo($alertBox);
// 			// $($electronsPerShell).appendTo($alertBox).addClass('firstShell');
// 		// )};
//
// // Looping over the values within the array
//
// // Getting the names (keys) of the objects in the array - using the dom order as an index
//
// 			var elementVals = Object.keys(atomicval).map(function(e) {
//
// 			return atomicval[e]
//
// 			})
// 			// console.log(elementVals[domIndex]);
//
// 			// Getting the values from the object that was key named aboved
//
// 			// This is so that we can get the electron shell number
// 			// var electronshellstringlength = atomicval[domIndex].electronshell.split(',').length;
// 			var electronString = atomicval[domIndex].electronshell.split(',');
// 			var electronshellstringlength = atomicval[domIndex].electronshell.split(',').length;
// 			// console.log(electronshellstringlength);
//
// 			// var i;
// 			// for (i = 0; i < electronshellstringlength.length; i++) {
// 				console.log(electronshellstringlength);
// 				$( $electronsShell ).appendTo($alertBox);
// 			// };
//
// 			// $($electronsShell).appendTo($alertBox).addClass('firstShell');
//
// 			// Now generate the individual electrons to be added to the shells
//
//
// 			$($elementTitle).text(atomicval[domIndex].element);
//
//
// 			// $($electronsPerShell).text(electronString[0]);
// 			// $($electronsPerShell).text(atomicval[domIndex].electronsPerShell);
// 			// $alertBox.append('<h3>' + Object.values(elementVals[domIndex].id) + '</h3>').attr('class', 'atomicName');
// 			// $alertBox.html(Object.values(elementVals[domIndex].electronsPerShell));
//
// 					// console.log();
// 		// console.log(); // ['a', 'b', 'c']
//
// 		// function myFunction() {
// 		    // document.getElementById("alertBox").innerHTML = atomicval.val();
// 		// }
//
// 		e.stopPropagation();
//
// 		});
//
// //



// var $wrapper = $('div').attr('id, wrapper'),
// 		$popupDiv = $('div').attr('id', 'popup');
// console.log(wrapper);
// $(wrapper).append($("<div id='popup'></div>"));
// console.log(wrapper);


// $('li.atomicElementTile').on('click', function() {
//
// 	var retindex = $(this).index('li.atomicElementTile');
//
// 	if (0 === $( "#elementDescription" ).length) {
//     $('<div/>', {id: 'elementDescription'}).prependTo('#container')
//
// 	}
// 		// $('<div/>', {id: 'close'}).text('close').appendTo("#elementDescription");
// 		$('<div/>', {class: 'element'}).text(atomicval[retindex].element).appendTo("#elementDescription");
// 		$('<div/>', {class: 'symbol'}).text(atomicval[retindex].symbol).appendTo("#elementDescription").wrapAll( $('<div/>').attr('id', 'tableWrap')).wrap( $('<div/>').attr('id', 'symbolWrap'));
// 		$('<div/>', {class: 'element'}).text(atomicval[retindex].element).appendTo("#symbolWrap");
// 		$('<div/>', {class: 'atomicNumber'}).text(atomicval[retindex].atomicNumber).appendTo("#symbolWrap");
// 		$('<div/>', {class: 'atomicweight'}).text(atomicval[retindex].atomicweight).appendTo("#symbolWrap");
//
// 		$('<div/>', {class: 'group'}).text(atomicval[retindex].group).appendTo("#tableWrap").wrap( $('<div/>').attr('id', 'descriptionTable'));
//
// 		$('<div/>', {class: 'period'}).text(atomicval[retindex].period).appendTo("#descriptionTable");
// 		$('<div/>', {class: 'elementType'}).text(atomicval[retindex].elementType).appendTo("#descriptionTable");
// 		$('<div/>', {class: 'density'}).text(atomicval[retindex].density).appendTo("#descriptionTable");
// 		$('<div/>', {class: 'melt'}).text(atomicval[retindex].melt).appendTo("#descriptionTable");
// 		$('<div/>', {class: 'boil'}).text(atomicval[retindex].boil).appendTo("#descriptionTable");
// 		$('<div/>', {class: 'electronshell'}).text(atomicval[retindex].electronshell).appendTo("#descriptionTable");
//
// 		// $('#symbolWrap'));
// 		$('<div/>', {class: 'url'}).text('Learn more about ' + atomicval[retindex].element).appendTo("#elementDescription").wrapInner( $('<a/>', {target: '_blank'}).attr('href', atomicval[retindex].url,));
//
//
// 	// console.log(atomicval[retindex].element);
//
// })
// console.log(index);

// $('<div/>', {class: 'element'}).text(atomicval[retindex].element).appendTo("#symbolWrap");

// $('<div/>', {class: 'atomicweight'}).text(atomicval[retindex].atomicweight).appendTo("#symbolWrap");
//
// $('<div/>', {class: 'group'}).text(atomicval[retindex].group).appendTo("#tableWrap").wrap( $('<div/>').attr('id', 'descriptionTable'));
//
// $('<div/>', {class: 'period'}).text(atomicval[retindex].period).appendTo("#descriptionTable");
// $('<div/>', {class: 'elementType'}).text(atomicval[retindex].elementType).appendTo("#descriptionTable");
// $('<div/>', {class: 'density'}).text(atomicval[retindex].density).appendTo("#descriptionTable");
// $('<div/>', {class: 'melt'}).text(atomicval[retindex].melt).appendTo("#descriptionTable");
// $('<div/>', {class: 'boil'}).text(atomicval[retindex].boil).appendTo("#descriptionTable");
// $('<div/>', {class: 'electronshell'}).text(atomicval[retindex].electronshell).appendTo("#elementDescription");

	});
