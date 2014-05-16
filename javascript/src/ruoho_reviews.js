////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// A Context-Free grammar for Generative Music Criticism by iroro 
// V0.1 2009.11.06 (Processing, unreleased)
// V0.2 2013.01.15 (Javascript)
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

reviewGrammar = { 

"<start>": "<artist-phrase>. | <artist-phrase>. <interjection>",

///////  
"<artist-phrase>": " <artist-descriptive-phrase> | <music-recording-phrase> | <artist-action-phrase>",
		
///////  
"<artist-action-phrase>": "\
		The ascendant <ferocity-syn> of <artist> is on display again, showing off <structure-description>, \
		<while-syn> <adverb-time-terminal> <gerund-song-phrase> | \
		\
		The songwriting <ferocity-syn> <exhibited-syn> by <artist> raises the biggest \
		goosebumps, showing off <structure-description>, dwarfing the <structure-description> of many better known artists | \
		\
		Few artists are this <adept-syn> at wringing so much <ferocity-syn> from their laptops, yet the <time-adjective> <music-recording-noun> by \
		<artist> <adverb-terminal> blends <structure-description> and <structure-description> | \
		\
		<artist> and <static-artist> take on the <label> crew for another <music-recording-noun>, demonstrating <structure-description> and a \
		<creative-syn> <ferocity-syn> that <verb-phrase-singular>",

///////  
"<artist-descriptive-phrase>": "\
		\
		The <creative-syn> <ferocity-syn> <exhibited-syn> by <artist> <artist-description-phrase> | \
		\
		The <creative-syn> <ferocity-syn> <exhibited-syn> by <artist> <join-phrase> <genre> with \
		<structure-description>, <evocative-adjective> of <epoch> music from <city> | \
		\
		The <creative-syn> <ferocity-syn> <exhibited-syn> by <artist> <join-phrase> <structure-description> \
		with <structure-description> <evocative-adjective> of <epoch> sounds| \
		\
		The <creative-syn> <ferocity-syn> <exhibited-syn> by <artist> tenuously welds a growing amalgam of \
		contradictions and genre experiments with a veneer of <ferocity-syn>, <ferocity-syn> and Fonzie cool",

///////  		
"<music-recording-phrase>": "\
		\
		The <time-adjective> <music-recording-noun> by <artist> <song-description-phrase>. \
		It <singular-subject-song-verb> <adverb-terminal>, <adverb-time-terminal> <gerund-song-phrase> | \
		\
		The <time-adjective> <music-recording-noun> by <artist> <reverbs-with-phrase> <a-structure-description>. \
		It <song-description-phrase>, yet its essence <song-description-phrase> | \
		\
		The <time-adjective> <music-recording-noun> by <artist> <reverbs-with-phrase> <a-structure-description>. \
		It <song-description-phrase>, yet its essence is <evocative-adjective> of <epoch> music enjoyed in <city> | \
		\
		The <time-adjective> <music-recording-noun> by <artist> taps into a delicate, \
		<genre-adjective> corner of the musical universe, <while-syn> <adverb-time-terminal> <gerund-song-phrase>",		

///////  		
"<artist>": 	"`getHotttArtists_Cached()`",
// "<artist>": 	"`getHotttArtists()`",

"<static-artist>": 	"Madonna | Prince | Bono | Salif Keita | Baaba Maal | Femi Kuti ",

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

"<adept-syn>": "adept | skilled | masterful | deft | dexterous | brilliant ",

"<exhibited-syn>": "exhibited | displayed | manifested | shown | demonstrated | expressed ",

"<while-syn>": "while | whilst | albeit | despite  | all the while ",

"<creative-syn>":	"sonic | tasteful acoustic | creative | musical | novel musical | fresh melodic | stirring acoustic | visionary sonic | \
					trendy musical | stylish sonic | refined | magnificent musical",

"<ferocity-syn>": 	"ferocity | courage | charisma | cowardice | nerve | \
					stoutheartedness | endowment | dauntlessness | savagery | genius | \
					furiousness | violence |  wildness | severeness | \
					simplicity | accessibility | straightforwardness | comprehensibility | \
					unpretentiousness | naturalness | clarity | spareness | austerity | \
					effortlessness | affectation | pretentiousness | posturing | \
					mulishness | recalcitrance | schtick ",

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

"<interjection>": 	"This is a crucial release! | Most excellent! |  Utterly astounding! | Somewhat mind-blowing! | \
					Jaw-dropping! | Breathtaking! | This is gripping sh*t! | Frankly intoxicating! | \
					Rousing material! | Electrifying! | Most-definitely heady!! | A modern masterpiece of composition! | \
					Miss out at your peril! | Seriously? | Wow! | They mean it, maaaan",

"<music-recording-noun>":	"12” wax | MP3 | home-made cassette | CD | album | 4-track cartridge | \
							betamax| laserdisc | DVD-R | EP | ogg-vorbis download | maxi-single | Bandcamp release | \
							ambisonic release | limited edition | remastered EP | white-label | unofficial release | \
							back-to-mine compilation | Soundcloud (teaser clip) | promo | youtube video | 7” vinyl | box set | \
							Mixcloud set | Myspace track | unplugged session | live webcast | music video",

"<time-adjective>":	"latest | most recent | newest | current | currently charting | recently dropped | forthcoming",

"<genre-adjective>": 	"quotidian | commonplace | slippery | fragmented | punctured | wispy | atmospheric | \
						smudged | obscure  | delicate | exquisite | silky and sweet | unsteady | fractured | \
						mangled | indifferent | shattered | otherworldly | disenchanted | sadder and wiser | \
						sophisticated",
						
"<gerund-song-phrase>": 	"marrying <genre> from the <epoch> period with <structure-description> | \
							meandering around a plucked melody that <verb-phrase-singular> |	\
							sounding like <static-artist> in a skank off, after inhaling a canister of nitrous oxide | \
							blurring the boundaries between <structure-description> and <structure-description> | \
							eschewing the familiar palimpsest of credible <genre> <genre-noun> | \
							injecting hints of <genre> patterns into <genre> | \
							letting in shards of light painted through snippets of <genre>, re-painted in sparkling, sumptuous colours | \
							propelling ethereal glitching rhythms across plains of elaborately fashioned electroacoustic static | \
							wielding Detroit shuffles à la Theo Parrish | \
							brushing its rhythms with a cool sleight of hand that is still utterly breathtaking | \
							eschewing the usual formulaic pitfalls | \
							spinning a collection of understated string and piano elegies | \
							veering off on solo tangents of enchanted ambient abstraction | \
							functioning through the frosted lens of physical Finnish stoicism | \
							revolving about achingly well-formed shuffle patterns | \
							whining and squealing like a farmyard animal in the pangs of labour | \
							ricocheting gunshots off grimy bassline warps | \
							employing classically staggered harmonic progressions | \
							riding rock hard subbass depth charges | \
							creating atmospheric pressure drops sharp enough to give lesser experienced divers the bends | \
							skittering back to post-Autechre beat deconstructions | \
							exhibiting tearjerking, suckerpunching, piano-meets-strings melancholy | \
							dripping with endless reverb and delay manipulation | \
							trawling the depths of vinyl's pockmarked grooves | \
							collapsing beneath the dead-eyed twinkle of the disco ball | \
							exhibiting an intensely overbearing darkness, covered by a fuzzy thicket of layered drones",

"<genre-noun>": "landscapes | ephemera | futurism | classicism | sensibilities",

"<all-genre>": "Future Samba | Fonk Arabic | Digital Zulu | 2-step garage  | 8-bit | A-cappella  | \
 	Acid Jazz | Acid Rock | Afrobeat  | Nigerian Apala  | Arabesque | Avant-garde jazz  | Avant-garde metal  | \
 	Avant-punk | Bachata  | Baião  | Baile Funk  | Baisha xiyue  | Bajourou  | Bakou  | Bal-musette  | Balakadri  | \
	Balinese Gamelan  | Ballet  | Bamboo band  | Bambuco  | Baroque  | Miami bass | Booty bass | Batucada  | \
 	Beatboxing  | Bebop  | Beiguan  | Bel canto  | Bhangra  | Bhangragga | Bhangramuffin | Big Beat | \
 	Bluegrass  | Blues  |  Bitpop  | Bocet | Bohemian Dub  | Boi  | Bolero  | Bomba | \
 	Bombay pop | Bongo  |  Bossa nova |  Breakbeat  | Breakcore  |  Britfunk |  Britpop | Broken beat  | \
 	Bubblegum pop  |  Bikutsi |  Bulerias | Bunraku  |  Calentanos | Calypso  |  Canto popular  | \
 	Cantopop  | Capoeira | Carceleras | Carnatic music | Cello rock | Cha-cha-cha | Chamber music | Champeta  | \
 	Chemical breaks | Chicago house | Chicken scratch | Chillout | Chimurenga | Classical | Clicks 'n' Cuts |  \
	Compas meringue | Cothoza mfana | Country | Cowpunk | Crunk  | Cueca | Cumbia  |  	Cybergrind | Dancehall | \
 	Darkcore  | Darkwave | Death metal | Delta blues | Deep house | Detroit techno | Dhamar  | Digital hardcore |  \
	Disco | Diva house | Djambadon | Dodompa  | Dongjing  | Doo wop | Doom metal | Downtempo | Drone  | Drum and bass | \
	Dub | Dub Techno | Dubtronica | Dubstep | E-Grind | Easy listening | Electro | Electroclash | Electropop | Muzak | \
 	Emo | Eurodance | Europop | Experimental noise | Fandango  | Filk | Fjatpangarri | Flamenco  | \
 	Folk | Folktronica | Forró  | Free jazz | Freestyle | Fuji | Funk | Funky house | G-funk | Gaikyoku | \
 	Gamelan  | Gangsta rap  | Gavotte | Gharnati | Ghettotech |  Glam punk | Glitch | Gnawa | \
 	Goa | Gospel | Gothic | Gregorian chant | Grime  | Grunge | Guajira | Gwo ka  | Gyu ke | Habanera  | \
	Haiducesti | Hungarian-Transylvanian wedding songs (Hajnali) | Happy hardcore | Hard house | Heavy metal | Hi-NRG | \
 	Highlife | Hiplife | Hip hop | Hip pop | Hindustani classical music | Honky tonk | Horror punk | \
 	House | Hula | Humppa | Hunguhungu | Hyphy | Illbient | Indietronica | Indie rock | Industrial  | IDM  | \
 	Iscathamiya | Isolationist | Italo Disco | J-Pop  | Jaipongan  | Jamana kura | Jarana | Jawaiian | \
 	Jazz | Jesus music | Jitterbug | Jive | Joropo | Jota | Juju | Jumpstyle | Jungle | Junkanoo | \
 	Jtek | Kamba pop | Karaoke | Kargyraa | Katajjaq  | Balinese monkeychant (Kecak) | \
 	Hungarian Gypsy dance songs (Khelimaski djili) | Komagaku | Kpanlogo | Krautrock |  Kulning (Swedish folk songs) | \
 	Kveding (Traditional Norwegian songs) | Kwaito | Kwassa kwassa | Kwela | Laremuna wadauman | Latin jazz  | \
 	Letkajenkka | Lhamo (Tibetan opera) | Lovers rock | Luhya omutibo | \
	Luk grung (Popular Thai music from the early 20th century) | Lullaby | Maglaal (tuuli) | \
 	Makossa | Makossa-soukous | Mambo | Manding swing | Mangulina | Manikay | Marabi | Mariachi | \
 	Marimba | Marrabenta | Maskanda  | Math rock | Mbalax |	Mbaqanga (Township Jive) | Mbumba | Mejorana | Memphis blues | \
 	Mento | Merengue | Milongas | Mineras | Minimal techno | Mirolóyia | Modinha | \
 	Motown | Musique concrete | Mutuashi | Muwashshah | Muzak  | Narodna muzika (Serbian Folk Music) | \
 	Neo-Psychedelia | Neo Soul (Nu Soul) | Neue Volksmusik | New Age | New Jack Swing  | \
 	New Orleans blues | New Orleans jazz | New York House (i.e. US Garage) | Nintendocore | Noise music  | Nordic folk music | \
 	Nortec (Electronic style from Tijuana) | Nu breaks | Oldies | Olonkho (Yakut epic songs) | Opera  |  \
	Orovela (Eastern Georgian work songs) | Ozwodna | P-Funk | Paisley Underground  | \
 	Palm wine sound  | Panchai baja (Nepalese wedding music) | Panchavadyam (Temple music from Kerala) |  Parisian soukous | \
 	Parranda (Afro-Venezuelan form) | Pennywhistle jive | Peroveta anedia | Phleng luk tung | Piedmont blues | \
 	Pisiq (Greenlandic folk song) | Pixiefunk  | Pleng phua cheewit (Thai protest rock) | Poco-poco  | Polka |  \
	Pop rai |  Pornocore | Porro (Colombian big band) | Post-grunge | Post-industrial | Post-Traumatic-Stress-Core | \
 	Power electronics | Progressive house | Protopunk | Psychedelic trance (Psy-trance) | Psychobilly | Psychosomatic trance | \
 	Psych-pop | Punk funk | Punk rock | Qawwali (Sufi religious music) | Raggamuffin (Ragga) | Ragga-soca | \
 	Ragga-zouk | Ragtime | Rai  | Rap | Rave | Reggae | Reggaeton | Rekilaulu (Finnish sleigh songs) | \
 	Rhapsody | Rhythm & Blues | Rímur (Icelandic heroic epic songs) | Ring Bang (Barbadian Soca) | Riot grrrl | \
 	Rock | Rock opera | Rockabilly | Rocksteady | Rodeo music | Rokon fada | Rondeaux | Roots reggae | Rumba |  \
	Yambu (Cuban Rumba) | Guaguanco (Cuban Rumba) | Salsa  | Samba  | Sato kagura | Saya (Bolivia) | Serialism | Shango | \
 	Shoegaze | Showtunes | Siguiriyas | Ska | Ska punk | Skacore (Third wave of Ska) | Skate punk | Skronk |  \
	Kihoalu (Hawaian Slack-key guitar) | Smooth jazz | Soca | Soft rock | Soukous | Soul jazz | Southern Gospel | \
 	Southern rock | Space age pop | Space rock | Speedcore | Speed garage | Spirituals | Stoner metal | Stoner rock | \
 	Surf rock | Swamp blues | Swing | Sygyt (Tuvan Throat Singing)  | Synthpop | Tango  | Tech House | Techno | Teen pop |  \
	Texas blues | Thillana (South India) | Thrashcore | Thrash metal | 	Tientos | Tinga | Trance | Tribal house | \
 	Trikitixa (Basque Accordion music) | Trip-hop | Tumba | Turntablism | Two tone | UK garage | \
 	Vaudeville | Verbunkos (Hungarian folk music) | Verismo | Vocal house | Waila (Chicken Scratch)  | \
 	Waltz | Wassoulou | Western swing | Xhosa | Zarzuela (Spanish operetta) | Zeibekiko (Greek Dance 9/8 Rytmus) | \
 	Ziglibithy | Zolo (Hyper Bitchy rhythms) | Zouglou | Zouk  |  Zydeco",


"<genre>": "Future Samba | Fonk Arabic | Digital Zulu | 2-step garage  | 8-bit | A-cappella  | \
 	Acid Jazz | Acid Rock | Afrobeat  | Nigerian Apala  | Arabesque | Avant-garde jazz  | Avant-garde metal  | \
 	Avant-punk | Bachata  | Baile Funk | Balinese Gamelan  | Ballet  | Bambuco  | Baroque  | Miami bass | Booty bass | Batucada  | \
 	Beatboxing  | Bebop  | Bhangra  | Bhangragga | Bhangramuffin | Big Beat | \
 	Bluegrass  | Blues  |  Bitpop  | Bocet | Bohemian Dub  | Boi  | Bolero  | Bomba | \
 	Bombay pop | Bongo  |  Bossa nova |  Breakbeat  | Breakcore  |  Britfunk |  Britpop | Broken beat  | \
 	Bubblegum pop  |  Bikutsi  | Calypso  |  Canto popular  | \
 	Cantopop  | Capoeira  | Carnatic music | Cello rock | Cha-cha-cha | Chamber music | \
 	Chemical breaks | Chicago house | Chicken scratch | Chillout | Chimurenga | Classical | Clicks 'n' Cuts |  \
	Compas meringue  | Country | Cowpunk | Crunk  | Cumbia  |  	Cybergrind | Dancehall | \
 	Darkcore  | Darkwave | Death metal | Delta blues | Deep house | Detroit techno  | Digital hardcore |  \
	Disco | Diva house | Doo wop | Doom metal | Downtempo | Drone  | Drum and bass | \
	Dub | Dub Techno | Dubtronica | Dubstep | E-Grind | Easy listening | Electro | Electroclash | Electropop | Muzak | \
 	Emo | Eurodance | Europop | Experimental noise | Fandango  | Flamenco  | \
 	Folk | Folktronica | Forró  | Free jazz | Freestyle | Fuji | Funk | Funky house | G-funk | Gaikyoku | \
 	Gamelan  | Gangsta rap  | Gavotte | Gharnati | Ghettotech |  Glam punk | Glitch | Gnawa | \
 	Goa | Gospel | Gothic | Gregorian chant | Grime  | Grunge | Habanera  | \
	| Hungarian-Transylvanian wedding songs (Hajnali) | Happy hardcore | Hard house | Heavy metal | Hi-NRG | \
 	Highlife | Hiplife | Hip hop | Hip pop | Hindustani classical music | Honky tonk | Horror punk | \
 	House | Hula | Hyphy | Illbient | Indietronica | Indie rock | Industrial  | IDM  | \
 	| Italo Disco | J-Pop  | Jazz | Jesus music | Jitterbug | Jive | Nigerian Juju | Jumpstyle | Jungle | Kamba pop | Karaoke | Balinese monkeychant (Kecak) | \
 	Hungarian Gypsy dance songs (Khelimaski djili) | Krautrock |  Kulning (Swedish folk songs) | \
 	Kveding (Traditional Norwegian songs) | Kwaito | Kwassa kwassa | Latin jazz | Lhamo (Tibetan opera) | Lovers rock | Luhya omutibo | \
	Luk grung (Popular Thai music from the early 20th century) | Lullaby | Makossa | Makossa-soukous | Mambo | Mariachi | \
 	Marimba  | Math rock | Mbalax |	Mbaqanga (Township Jive) | Memphis blues | \
 	Mento | Merengue | Mineras | Minimal techno  | Modinha | Motown | Musique concrete | Muzak  | Narodna muzika (Serbian Folk Music) | \
 	Neo-Psychedelia | Neo Soul (Nu Soul) | Neue Volksmusik | New Age | New Jack Swing  | \
 	New Orleans blues | New Orleans jazz | New York House (i.e. US Garage) | Nintendocore | Noise music  | Nordic folk music | \
 	Nortec (Electronic style from Tijuana) | Nu breaks | Oldies | Olonkho (Yakut epic songs) | Opera  |  \
	Orovela (Eastern Georgian work songs) | P-Funk | Paisley Underground  | \
 	Palm wine sound  | Panchai baja (Nepalese wedding music) | Panchavadyam (Temple music from Kerala) |  Parisian soukous | \
 	Parranda (Afro-Venezuelan form) | Pennywhistle jive | Peroveta anedia | Phleng luk tung | Piedmont blues | \
 	Pisiq (Greenlandic folk song) | Pixiefunk  | Pleng phua cheewit (Thai protest rock) | Poco-poco  | Polka |  \
	Pop rai |  Pornocore | Porro (Colombian big band) | Post-grunge | Post-industrial | Post-Traumatic-Stress-Core | \
 	Power electronics | Progressive house | Protopunk | Psychedelic trance (Psy-trance) | Psychobilly | Psychosomatic trance | \
 	Psych-pop | Punk funk | Punk rock | Qawwali (Sufi religious music) | Raggamuffin (Ragga) | Ragga-soca | \
 	Ragga-zouk | Ragtime | Rai  | Rap | Rave | Reggae | Reggaeton | Rekilaulu (Finnish rhyming sleigh songs) | \
 	Rhapsody | Rhythm & Blues | Rímur (Icelandic heroic epic songs) | Ring Bang (Barbadian Soca) | Riot grrrl | \
 	Rock | Rock opera | Rockabilly | Rocksteady | Rodeo music | Rokon fada | Rondeaux | Roots reggae | Rumba |  \
	Yambu (Cuban Rumba) | Guaguanco (Cuban Rumba) | Salsa  | Samba | Saya (Bolivia) | Serialism | Shango | \
 	Shoegaze | Showtunes | Siguiriyas | Ska | Ska punk | Skacore (Third wave of Ska) | Skate punk | Skronk |  \
	Kihoalu (Hawaian Slack-key guitar) | Smooth jazz | Soca | Soft rock | Soukous | Soul jazz | Southern Gospel | \
 	Southern rock | Space age pop | Space rock | Speedcore | Speed garage | Spirituals | Stoner metal | Stoner rock | \
 	Surf rock | Swamp blues | Swing | Sygyt (Tuvan Throat Singing)  | Synthpop | Tango  | Tech House | Techno | Teen pop |  \
	Texas blues | Thillana (South India) | Thrashcore | Thrash metal | 	Tientos | Tinga | Trance | Tribal house | \
 	Trikitixa (Basque Accordion music) | Trip-hop | Tumba | Turntablism | Two tone | UK garage | \
 	Vaudeville | Verbunkos (Hungarian folk music) | Verismo | Vocal house | Waila (Chicken Scratch)  | \
 	Waltz | Wassoulou | Western swing | Xhosa | Zarzuela (Spanish operetta) | Zeibekiko (Greek Dance 9/8 Rytmus) | \
 	Ziglibithy | Zolo (Hyper Bitchy rhythms) | Zouglou | Zouk  |  Zydeco",

"<a-structure-description>": 	"a pure, transcendental rave feeling | \
								a bubbly pop appreciation | \
								a mindblowing dubscape of effects | \
								a persistent undulating pulse of bass | \
								a cacophany of autistic rhythms | \
								a fragrant, effortless warmth | \
								a deluge of piano flecked gems | \
								a veneer of melancholy |  \
								a growing amalgam of contradictions |  \
								a blistering feast of distortion | \
								a feast of noise-rock virtuosity | \
								a veritable haberdashery of exquisitely vintage musical textures | \
								a Flying Lotus-style bass reduction |  \
								a dense, effulgent piece of faux-romantic orchestral syrup | \
								an indisposable slice of <genre> delectability | \
								a dark, haunted melancholy | \
								an eerily impeccable falsetto | \
								an alchemical blend of post-rave <genre> electronics",

"<structure-description>": "alien analogue tones |  \
							avant-garde chamber instrumentation | \
							assorted disembodied voices | \
							bass frequencies turned to jellied slush | \
							blistering breakbeats gatecrashing your earlobes | \
							beautifully tempered zones of twilight ambient  | \
							breakneck tempos | \
							acid house effusions turned hardcore breakbeat | \
							cinematic string samples of the Caretaker variety |  \
							cassette tape overdubs | \
							dense analogue experiments | \
							digitally dissected orchestral figures | \
							devastatingly heavy <genre> mutations | \
							dexterous skanking movements | \
							distorted crescendos | \
							dark careening tones from bright, queasy synthesizers | \
							drifting electronica | \
							dense thickets of digitally applied crackle | \
							dramatic percussive interjections | \
							drum machines left to run for days through myriad pattern permutations | \
							deep, rustic darkness |  \
							exothermal synthlines | \
							electronic squiggles | \
							expertly manipulated rhythm alchemy  | \
							early handmade experiments | \
							endlessly arpeggiated chords | \
							enunciated consonants | \
							European technical execution | \
							fat skronked basslines under <genre-adjective>, minimal percussion | \
							febrile rhythm mechanics | \
							flickering syncopations | \
							flanged beats, delayed bleeps | \
							foggy northern European landscapes |  \
							flickering electronic rhythm sections | \
							floppy fringe harmonies | \
							gloriously wild natural timbres | \
							grim, crust-laden darkness | \
							glacially paced gothic stoner rock | \
							hazy washes of reverbed harps | \
							hazy synthetic electronical embellishments |  \
							hi-scoring aquakrunk madness | \
							head-pressurised technohouse vibes	| \
							hyper-prismic agitated synthlines | \
							hummable melodies |\
							heavy rolling dancehall grinders |  \
							haunted-house analogue tactics |  \
							hazily buoyant, ethereal female vocals | \
							intricately funked syncopations edging on the territory of Autechre or Alva Noto | \
							inimitably raw, psychedelic wow-and-flutter beats | \
							layered embers of sound | \
							layered spaciousness | \
							lysergic trumpet lines panned to infinity  |  \
							modern amorphous psychedelia |	 \
							magnificently evocative, mercilessly deep, tweaked out, post-rave ecstasy | \
							majestic cloud-like structures of droning synth tones | \
							massively modulated vocal treatments |\
							narcotic keys |  \
							overheated arcade game melodies | \
							oblique hi-end processing | \
							orchestral level pomp & bombast |  \
							post-pop slacker tendencies | \
							psychedelic rhythm manipulation |  \
							pure Balearic house bliss | \
							rootsy one-drop dub keys |  \
							rising, haunting strings | \
							reverberant, quivering sustains | \
							rousing mini-orchestral swells | \
							rippling xylophonics | \
							spherical bell tones | \
							sticky, wriggly electro influences | \
							soft, smoky sax lines | \
							slinking garage syncopations | \
							supple subbass push | \
							sumptuous Chicago reductions | \
							sea-sick rhythms | \
							symphonic droning | \
							stringently reduced techno |  \
							sinister Euro-porno soundtracks | \
							spectrally sifted electronics | \
							spacious Balearic keys |  \
							seriously dextrous rhythm section arrangements | \
							soporific ambiences | \
							slurred articulations |  \
							synaesthetic ecstasy |  \
							shuffling, '60s West Coast sounds | \
							spleen-crushing bass | \
							steely, speaker-destroying dub techno | \
							shuddering, breakbeat-fueled <genre> | \
							tortured saxophone emissions | \
							textural guitar-scapes | \
							the synth drones of Klaus Schulze | \
							the wind-chilled electronics of Thomas Köner | \
							the chugging machinations steeped in the traditions of Scandinavian machine music | \
							utterly sick digital spasms | \
							unfathomably complex textures | \
							uncharacteristically spry tempos | \
							unfathomably deep, utterly sick, dubwise textures | \
							vintage radio essences infected with malaria from a pre-digital era | \
							wonderfully shambolic tendencies | \
							wispily resonant distortion | \
							wicked ragga-bashment flava |  \
							waves of static",

"<artist-description-phrase>": 	"<adverb> defies categorisation | \
								demonstrates an innate grasp of the sublime qualities of <genre>  | \
								makes for an uncommonly good performance that <verb-phrase-singular> | \
								compliments credible <genre> <genre-noun> with a mighty doublepack of deadly bass variations that <verb-phrase-singular> | \
								<adverb> elevates <genre> sophistication with <genre-adjective> <genre> <genre-noun> | \
								<writhes-syn> <adverb> with overdriven intensity and deeply sinister undercurrents | \
								tries to solve an inherently under-constrained musical problem with <structure-description> and <structure-description>|\
								tries to make sense out of a 3D sonic world using <structure-description> that are <adverb> two-dimensional | \
								<adverb> hoists up the profile of screeched-out abstract vocals and mournful, desolate lyrics",

"<writhes-syn>":	"writhes | squirms | wriggles | thrashes | merges | flails | tosses and turns",

"<join-phrase>": 	"marries | fuses | blends | marries | merges | mixes | unifies | intermingles | melds | joins",

"<evocative-adjective>":	"evocative | suggestive | reminiscent | \
							<adverb-terminal> evocative | <adverb-terminal> suggestive | <adverb-terminal> reminiscent",
						
"<city>": 	"Berlin | London | Paris | Oslo | Moscow | Dublin | Vienna | Budapest | Prague | Istanbul | Athens | Lisbon | \
			New York | Memphis | Los Angeles | Miami | Austin | San Francisco | Montréal | Vancouver | Seattle | Rio | \
			Buenos Aires | Montevideo | Tokyo | Seoul | Ulan Bator | Manila | Bangkok | Kuala Lumpur | Jakarta | Kabul | \
			Jerusalem | Dakar | Cairo | Kingston | Lagos  | Addis Ababa | Abidjan | Kinshasa | Casablanca | Accra | \
			Dar es Salaam | Bamako | Ouagadougou | Mogadishu | Cotonou | Harare",
			
"<label>": 			"Kompakt | Hyperdub | Tongut  | Soul Jazz | Strictly Rhythm | Defected | \
					  Studio 1 | Nonesuch | Mille-Plateaux  | Force Inc. | Bpitch Control | \
					  Shitkatapult | Warp | The Leaf | Kranky | Thoughtless Music | Unfoundsound",

"<epoch>": 			"British Invasion era | New Wave era | Motown era | Stax/Volt era | \
					MTV era | futurist  | modernist  | postmodernist  | nouveau-realist  |  \
					expressionist  | post-atonal  | atonal  | neo-surrealist  |  \
					twelve-tone serialist | subversive | avant-gardist",
					

<!--"<adverb>":			"`getSynonyms(<adverb-terminal>, "r");` | <adverb-terminal", -->
"<adverb>":				"<adverb-terminal> | <adverb-terminal>",

"<adverb-terminal>":	"brilliantly | astutely | adeptly | robustly | amazingly | carefully | \
						inadequately | abstractly | absurdly | accidentally  | brightly | breathtakingly",

"<adverb-time-terminal>":	"occasionally | sporadically | infrequently | periodically | \
							irregularly | intermittently | frequently | repeatedly | recurrently",

"<song-description-phrase>":	"<adverb> defies categorisation | \
								slides out a <genre-adjective> groove of immense proportions | \
								\
								chugs a long like a malfunctioning mechanical beast | \
								\
								is an asymmetric, geniusly constructed dancefloor killer | \
								\
								is one of the richest spacial dub constructions ever heard | \
								\
								is a frenzied crescendo of panning stabs and a washed out, chugging backbone that doesn't let up | \
								\
								is a sweet-like-tropical blend of <genre>, <genre> and dubstep | \
								\
								is an 20 minute odyssey into stoner heaven | \
								\
								is as foul-smelling as an oily anal leakage | \
								\
								is pieced together from a plethora of unidentified samples, field recordings and found sounds | \
								\
								is a retro reconstruction of <genre> style balladry that teeters on the edge of <genre> pastiche | \
								\
								has critics and fans alike, queuing up to drape compliments over it's shiny chassis | \
								\
								is a deep & dark tech-house number, whose B-side dub remix, takes it even deeper, adding loads of effect throws, percussion solos and dramatic breakdowns | \
								\
								is a deep & dark blues-house number from the <epoch> era. It's ragingly infectious vocals are laced with moody blues guitar riffs, layers upon layers of percussion, hypnotizing filtered  stabs and the obligatory driving bass line | \
								\
								is an incredible, <adverb> mesmerising sound that will tempt, allure, petrify and utterly mind-f**k you in equal measure | \
								\
								is an uneasy listening experience, <adverb> catapulting the listener with irrepressible spirited contrasts | \
								\
								suddenly explodes into an unrelenting, glistening wall of discordance, sounding like a thousand church organs screeching out | \
								\
								has all the claustrophobia of the nastier end of <genre>, though within the unearthly racket, still maintains an uplifting optimism | \
								\
								contains passages of deep melodic beauty. This is unquestionably a journey that is <adverb> rooted in atonal explorations | \
								\
								is a schizophrenic composition, <adverb> and without warning cutting between sparse, low-end tension and thumping organ clusters | \
								\
								is a <sexy-syn> little stomper, that just keeps on building and building <while-syn> <gerund-song-phrase> | \
								\
								is one of those <epoch> EPs showcasing how versatile <genre> can get | \
								\
								is high grade bass music so intense you can blow-dry your hair right in front of the bass bins | \
								\
								does not initially seem to be doing anything special, but the subtlety and intensity eventually worms its way into your heart",

"<reverbs-with-phrase>":	"reverberates with | feels like | strikes one with | resonates with | \
							echoes with | gently throbs with | softly palpitates, with | \
							<adverb-terminal> <singular-subject-song-verb> with",

"<verb-phrase-singular>":	"floats in & out of your <consciousness-syn> with a wool-lined ease | \
							sits deeply in <adverb-terminal> smoky atmospherics | \
							is nestled in <a-structure-description> | \
							drowns out the sound of jaws hitting the <floor-syn>",

"<verb-phrase-plural>":  	"<plural-subject-song-verb> with <structure-description> and <structure-description> | \
							float in & out of your <consciousness-syn> with a wool-lined ease | \
							sit deep in <adverb-terminal> smoky atmospherics | \
							simply drown out the sound of jaws hitting the <floor-syn>", 

"<consciousness-syn>": "consciousness | mental grasp | awareness | attention | cognizance | loaf | mind | perception ",

"<floor-syn>": "floor | pavement | concrete | ground",

"<sexy-syn>": "sexy | groovy | alluring | sultry | slinky | provocative | tantalizing | nubile | bootylicious | erotic |\
				titillating | racy | naughty | X-rated | pornographic | crude | lewd | raunchy | steamy | horny | slick | red-hot",

"<plural-subject-song-verb>":  "rock | shine | shimmer | chug | drone | sparkle | unnerve | tremble | surprise | startle | sparkle | scintillate",

"<singular-subject-song-verb>": "rocks | shines | shimmers | chugs | drones | sparkles | unnerves | \
								trembles | surprises | startles | sparkles | scintillates"

};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

labelYearGrammar = { 

"<start>": "<label>, <year>",
			
"<label>": 			"Kompakt | Hyperdub | Tongut  | Soul Jazz | Strictly Rhythm | Defected | \
					 Studio 1 | Nonesuch | Mille-Plateaux  | Force Inc. | Bpitch Control | \
					 Silent Season | Zero G Sounds | 12k | Hefty Records | Echocord | \
					 Smallfish | Modern Love | Modelisme Records | Styrax Leaves | echospace [detroit] | \
					 Fatsouls Records | Native State Records | Leena Music | Kesh Recordings | \
					 Ghost Sounds | ~scape | Karloff | Cadenza | Background Records | Epsilonlab | \
					 Dispensation Records | Skor Records | Noir Music | Renaissance Infinity Recordings | \
					 Nau | Compost Records | Argon | Dub Police | Not On Label | Adjunct Digital | \
					 Headinghome Recordings | Archipel | Trapez | Orac Recordings | Deep Night Essentials | \
					 Poker Flat Recordings | Spectral Sound | Morris / Audio | Logistic Records | \
					 Revolver Recordings | Thug Records | Component Records | Skunk Records | \
					 Bugged Out! Recordings | High On Rhythm Records | AM:PM | Southern Fried Records |\
					 Twisted America Records | Hand On The Plow | Moonshine Music | Trax Records | \
					 Shitkatapult | Warp | The Leaf | Kranky | Thoughtless Music | Unfoundsound",
					  
"<year>": 			"1984 | 1997 | 1999 | 2001 | 2003| 2008 | 2009 | 2011 | \
					2013 | 2014 |2014 | 2014 | 2013 | 2014 | 2013 | 2014 | 2014 | \
					2013 | 2014 | 2015 | 2015 | 2014"
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
