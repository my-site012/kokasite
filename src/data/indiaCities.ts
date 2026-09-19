export interface CityEntry {
    name: string;
    slug: string;
    areas?: string[];
}

export interface StateEntry {
    name: string;
    slug: string;
    cities: CityEntry[];
}

export const indiaStates: StateEntry[] = [
    {
        "name": "Andhra Pradesh",
        "slug": "andhra-pradesh",
        "cities": [
            {
                "name": "Visakhapatnam",
                "slug": "visakhapatnam",
                "areas": [
                    "Rushikonda",
                    "MVP Colony",
                    "Gajuwaka",
                    "Madhurawada"
                ]
            },
            {
                "name": "Vijayawada",
                "slug": "vijayawada",
                "areas": [
                    "Benz Circle",
                    "Governorpet",
                    "MG Road",
                    "Patamata"
                ]
            },
            {
                "name": "Guntur",
                "slug": "guntur",
                "areas": [
                    "Brodipet",
                    "Arundelpet",
                    "Nagarampalem"
                ]
            },
            {
                "name": "Tirupati",
                "slug": "tirupati",
                "areas": [
                    "Tiruchanur",
                    "Alipiri",
                    "Renigunta"
                ]
            },
            {
                "name": "Kurnool",
                "slug": "kurnool",
                "areas": [
                    "NH44",
                    "Bellary Road"
                ]
            },
            {
                "name": "Nellore",
                "slug": "nellore",
                "areas": [
                    "Pogathota",
                    "Grand Trunk Road"
                ]
            },
            {
                "name": "Kadapa",
                "slug": "kadapa"
            },
            {
                "name": "Amaravati",
                "slug": "amaravati"
            },
            {
                "name": "Ongole",
                "slug": "ongole"
            },
            {
                "name": "Chittoor",
                "slug": "chittoor"
            },
            {
                "name": "Guntakal",
                "slug": "guntakal"
            },
            {
                "name": "Tadepalligudem",
                "slug": "tadepalligudem"
            },
            {
                "name": "Dharmavaram",
                "slug": "dharmavaram"
            },
            {
                "name": "Hindupur",
                "slug": "hindupur"
            },
            {
                "name": "Adoni",
                "slug": "adoni"
            },
            {
                "name": "Rajampet",
                "slug": "rajampet"
            },
            {
                "name": "Tirumala",
                "slug": "tirumala"
            },
            {
                "name": "Vizianagaram",
                "slug": "vizianagaram"
            },
            {
                "name": "Machilipatnam",
                "slug": "machilipatnam"
            },
            {
                "name": "Bhimavaram",
                "slug": "bhimavaram"
            },
            {
                "name": "Palakollu",
                "slug": "palakollu"
            },
            {
                "name": "Proddatur",
                "slug": "proddatur"
            },
            {
                "name": "Srikakulam",
                "slug": "srikakulam"
            },
            {
                "name": "Kakinada",
                "slug": "kakinada"
            },
            {
                "name": "Rajahmundry",
                "slug": "rajahmundry"
            },
            {
                "name": "Anantapur",
                "slug": "anantapur"
            },
            {
                "name": "Eluru",
                "slug": "eluru"
            },
            {
                "name": "Nandyal",
                "slug": "nandyal"
            },
            {
                "name": "Madanapalle",
                "slug": "madanapalle"
            },
            {
                "name": "Tenali",
                "slug": "tenali"
            },
            {
                "name": "Gudivada",
                "slug": "gudivada"
            },
            {
                "name": "Narasaraopet",
                "slug": "narasaraopet"
            },
            {
                "name": "Mangalagiri",
                "slug": "mangalagiri"
            },
            {
                "name": "Chilakaluripet",
                "slug": "chilakaluripet"
            },
            {
                "name": "Vuyyuru",
                "slug": "vuyyuru"
            },
            {
                "name": "Kuppam",
                "slug": "kuppam"
            },
            {
                "name": "Kumbum",
                "slug": "kumbum"
            },
            {
                "name": "Kadiri",
                "slug": "kadiri"
            },
            {
                "name": "East Godavari",
                "slug": "east-godavari"
            },
            {
                "name": "Krishna",
                "slug": "krishna"
            },
            {
                "name": "Nuzvid",
                "slug": "nuzvid"
            },
            {
                "name": "Prakasam",
                "slug": "prakasam"
            },
            {
                "name": "Sri Potti Sriramulu Nellore",
                "slug": "sri-potti-sriramulu-nellore"
            },
            {
                "name": "Tadepalligude",
                "slug": "tadepalligude"
            },
            {
                "name": "Tanuku",
                "slug": "tanuku"
            },
            {
                "name": "West Godavari",
                "slug": "west-godavari"
            },
            {
                "name": "YSR",
                "slug": "ysr"
            }
        ]
    },
    {
        "name": "Arunachal Pradesh",
        "slug": "arunachal-pradesh",
        "cities": [
            {
                "name": "Itanagar",
                "slug": "itanagar",
                "areas": [
                    "Naharlagun",
                    "Nirjuli"
                ]
            },
            {
                "name": "Tawang",
                "slug": "tawang",
                "areas": [
                    "Old Market"
                ]
            },
            {
                "name": "Pasighat",
                "slug": "pasighat"
            },
            {
                "name": "Lower Subansiri",
                "slug": "lower-subansiri"
            },
            {
                "name": "Ziro",
                "slug": "ziro"
            }
        ]
    },
    {
        "name": "Assam",
        "slug": "assam",
        "cities": [
            {
                "name": "Guwahati",
                "slug": "guwahati",
                "areas": [
                    "Dispur",
                    "Paltan Bazaar",
                    "Geetanagar",
                    "Bhangagarh"
                ]
            },
            {
                "name": "Dibrugarh",
                "slug": "dibrugarh",
                "areas": [
                    "AT Road",
                    "Lahoal"
                ]
            },
            {
                "name": "Jorhat",
                "slug": "jorhat",
                "areas": [
                    "Cinnamara",
                    "Salmara"
                ]
            },
            {
                "name": "Silchar",
                "slug": "silchar",
                "areas": [
                    "Meherpur",
                    "Tarapur"
                ]
            },
            {
                "name": "Rangia",
                "slug": "rangia"
            },
            {
                "name": "Nagaon",
                "slug": "nagaon"
            },
            {
                "name": "Bongaigaon",
                "slug": "bongaigaon"
            },
            {
                "name": "Tinsukia",
                "slug": "tinsukia"
            },
            {
                "name": "Tezpur",
                "slug": "tezpur"
            },
            {
                "name": "Digboi",
                "slug": "digboi"
            },
            {
                "name": "Sonari",
                "slug": "sonari"
            },
            {
                "name": "Baksa",
                "slug": "baksa"
            },
            {
                "name": "Barpeta",
                "slug": "barpeta"
            },
            {
                "name": "Biswanath",
                "slug": "biswanath"
            },
            {
                "name": "Cachar",
                "slug": "cachar"
            },
            {
                "name": "Charaideo",
                "slug": "charaideo"
            },
            {
                "name": "Chirang",
                "slug": "chirang"
            },
            {
                "name": "Darrang",
                "slug": "darrang"
            },
            {
                "name": "Dhemaji",
                "slug": "dhemaji"
            },
            {
                "name": "Dhubri",
                "slug": "dhubri"
            },
            {
                "name": "Dima Hasao North Cachar Hills",
                "slug": "dima-hasao-north-cachar-hills"
            },
            {
                "name": "Dispur",
                "slug": "dispur"
            },
            {
                "name": "Dubri",
                "slug": "dubri"
            },
            {
                "name": "Goalpara",
                "slug": "goalpara"
            },
            {
                "name": "Golaghat",
                "slug": "golaghat"
            },
            {
                "name": "Hailakandi",
                "slug": "hailakandi"
            },
            {
                "name": "Hojai",
                "slug": "hojai"
            },
            {
                "name": "Kamrup",
                "slug": "kamrup"
            },
            {
                "name": "Kamrup Metropolitan",
                "slug": "kamrup-metropolitan"
            },
            {
                "name": "Karbi Anglong",
                "slug": "karbi-anglong"
            },
            {
                "name": "Karimganj",
                "slug": "karimganj"
            },
            {
                "name": "Kokrajhar",
                "slug": "kokrajhar"
            },
            {
                "name": "Majuli",
                "slug": "majuli"
            },
            {
                "name": "Morigaon",
                "slug": "morigaon"
            },
            {
                "name": "Nalbari",
                "slug": "nalbari"
            },
            {
                "name": "Sivasagar",
                "slug": "sivasagar"
            },
            {
                "name": "Sonitpur",
                "slug": "sonitpur"
            },
            {
                "name": "South Salamara Mankachar",
                "slug": "south-salamara-mankachar"
            },
            {
                "name": "Udalguri",
                "slug": "udalguri"
            },
            {
                "name": "West Karbi Anglong",
                "slug": "west-karbi-anglong"
            }
        ]
    },
    {
        "name": "Bihar",
        "slug": "bihar",
        "cities": [
            {
                "name": "Patna",
                "slug": "patna",
                "areas": [
                    "Fraser Road",
                    "Boring Road",
                    "Bailey Road",
                    "Patliputra"
                ]
            },
            {
                "name": "Gaya",
                "slug": "gaya",
                "areas": [
                    "Station Road",
                    "Civil Lines"
                ]
            },
            {
                "name": "Muzaffarpur",
                "slug": "muzaffarpur",
                "areas": [
                    "Ramna",
                    "Juran Chapra"
                ]
            },
            {
                "name": "Bhagalpur",
                "slug": "bhagalpur",
                "areas": [
                    "Tilkamanjhi",
                    "Tatarpur"
                ]
            },
            {
                "name": "Purnia",
                "slug": "purnia"
            },
            {
                "name": "Darbhanga",
                "slug": "darbhanga"
            },
            {
                "name": "Bihar Sharif",
                "slug": "bihar-sharif"
            },
            {
                "name": "Arrah",
                "slug": "arrah"
            },
            {
                "name": "Nalanda",
                "slug": "nalanda"
            },
            {
                "name": "Bhojpur",
                "slug": "bhojpur"
            },
            {
                "name": "Begusarai",
                "slug": "begusarai"
            },
            {
                "name": "Katihar",
                "slug": "katihar"
            },
            {
                "name": "Munger",
                "slug": "munger"
            },
            {
                "name": "Chhapra",
                "slug": "chhapra"
            },
            {
                "name": "Bettiah",
                "slug": "bettiah"
            },
            {
                "name": "Saharsa",
                "slug": "saharsa"
            },
            {
                "name": "Sasaram",
                "slug": "sasaram"
            },
            {
                "name": "Hajipur",
                "slug": "hajipur"
            },
            {
                "name": "Vaishali",
                "slug": "vaishali"
            },
            {
                "name": "Rohtas",
                "slug": "rohtas"
            },
            {
                "name": "Siwan",
                "slug": "siwan"
            },
            {
                "name": "Motihari",
                "slug": "motihari"
            },
            {
                "name": "Nawada",
                "slug": "nawada"
            },
            {
                "name": "Bagaha",
                "slug": "bagaha"
            },
            {
                "name": "Buxar",
                "slug": "buxar"
            },
            {
                "name": "Kishanganj",
                "slug": "kishanganj"
            },
            {
                "name": "Sitamarhi",
                "slug": "sitamarhi"
            },
            {
                "name": "Jamalpur",
                "slug": "jamalpur"
            },
            {
                "name": "Jehanabad",
                "slug": "jehanabad"
            },
            {
                "name": "Aurangabad",
                "slug": "aurangabad"
            },
            {
                "name": "Araria",
                "slug": "araria"
            },
            {
                "name": "Arwal",
                "slug": "arwal"
            },
            {
                "name": "Bakhtiyarpur",
                "slug": "bakhtiyarpur"
            },
            {
                "name": "Banka",
                "slug": "banka"
            },
            {
                "name": "Bhabua",
                "slug": "bhabua"
            },
            {
                "name": "Bodh Gaya",
                "slug": "bodh-gaya"
            },
            {
                "name": "Gopalganj",
                "slug": "gopalganj"
            },
            {
                "name": "Hilsa",
                "slug": "hilsa"
            },
            {
                "name": "Jainagar",
                "slug": "jainagar"
            },
            {
                "name": "Jamui",
                "slug": "jamui"
            },
            {
                "name": "Kaimur",
                "slug": "kaimur"
            },
            {
                "name": "Khagaria",
                "slug": "khagaria"
            },
            {
                "name": "Khagaul",
                "slug": "khagaul"
            },
            {
                "name": "Lakhisarai",
                "slug": "lakhisarai"
            },
            {
                "name": "Madhepura",
                "slug": "madhepura"
            },
            {
                "name": "Madhubani",
                "slug": "madhubani"
            },
            {
                "name": "Pashchim Champaran",
                "slug": "pashchim-champaran"
            },
            {
                "name": "Purbi Champaran",
                "slug": "purbi-champaran"
            },
            {
                "name": "Rajgir",
                "slug": "rajgir"
            },
            {
                "name": "Samastipur",
                "slug": "samastipur"
            },
            {
                "name": "Saran",
                "slug": "saran"
            },
            {
                "name": "Sheikhpura",
                "slug": "sheikhpura"
            },
            {
                "name": "Sheohar",
                "slug": "sheohar"
            },
            {
                "name": "Supaul",
                "slug": "supaul"
            }
        ]
    },
    {
        "name": "Chhattisgarh",
        "slug": "chhattisgarh",
        "cities": [
            {
                "name": "Raipur",
                "slug": "raipur",
                "areas": [
                    "Shankar Nagar",
                    "Pandri",
                    "Telibandha"
                ]
            },
            {
                "name": "Bhilai",
                "slug": "bhilai",
                "areas": [
                    "Steel Plant",
                    "Sector 1",
                    "Sector 6"
                ]
            },
            {
                "name": "Bilaspur",
                "slug": "bilaspur",
                "areas": [
                    "Ganj",
                    "City Kotwali"
                ]
            },
            {
                "name": "Kumhari",
                "slug": "kumhari"
            },
            {
                "name": "Ratanpur",
                "slug": "ratanpur"
            },
            {
                "name": "Korba",
                "slug": "korba"
            },
            {
                "name": "Raigarh",
                "slug": "raigarh"
            },
            {
                "name": "Jagdalpur",
                "slug": "jagdalpur"
            },
            {
                "name": "Ambikapur",
                "slug": "ambikapur"
            },
            {
                "name": "Dhamtari",
                "slug": "dhamtari"
            },
            {
                "name": "Mahasamund",
                "slug": "mahasamund"
            },
            {
                "name": "Durg",
                "slug": "durg"
            },
            {
                "name": "Saraipali",
                "slug": "saraipali"
            },
            {
                "name": "Dhamtri",
                "slug": "dhamtri"
            },
            {
                "name": "Gaurela",
                "slug": "gaurela"
            },
            {
                "name": "Jagadalpur",
                "slug": "jagadalpur"
            },
            {
                "name": "Pendra",
                "slug": "pendra"
            },
            {
                "name": "Sarguja",
                "slug": "sarguja"
            }
        ]
    },
    {
        "name": "Goa",
        "slug": "goa",
        "cities": [
            {
                "name": "Panaji",
                "slug": "panaji",
                "areas": [
                    "Miramar",
                    "Dona Paula",
                    "Fontainhas"
                ]
            },
            {
                "name": "Calangute",
                "slug": "calangute",
                "areas": [
                    "Baga",
                    "Candolim",
                    "Sinquerim"
                ]
            },
            {
                "name": "Margao",
                "slug": "margao",
                "areas": [
                    "Monte Hill",
                    "Aquem"
                ]
            },
            {
                "name": "Vasco da Gama",
                "slug": "vasco-da-gama",
                "areas": [
                    "Baina",
                    "Headland Sada"
                ]
            },
            {
                "name": "Anjuna",
                "slug": "anjuna"
            },
            {
                "name": "Arambol",
                "slug": "arambol"
            },
            {
                "name": "Baga",
                "slug": "baga"
            },
            {
                "name": "Bardez",
                "slug": "bardez"
            },
            {
                "name": "Bicholim",
                "slug": "bicholim"
            },
            {
                "name": "Canacona",
                "slug": "canacona"
            },
            {
                "name": "Candolim",
                "slug": "candolim"
            },
            {
                "name": "Colva",
                "slug": "colva"
            },
            {
                "name": "Cuncolim",
                "slug": "cuncolim"
            },
            {
                "name": "Mapusa",
                "slug": "mapusa"
            },
            {
                "name": "Mormugao",
                "slug": "mormugao"
            },
            {
                "name": "Pernem",
                "slug": "pernem"
            },
            {
                "name": "Ponda",
                "slug": "ponda"
            },
            {
                "name": "Porvorim",
                "slug": "porvorim"
            },
            {
                "name": "Sanguem",
                "slug": "sanguem"
            },
            {
                "name": "Sattari",
                "slug": "sattari"
            },
            {
                "name": "Valpoi",
                "slug": "valpoi"
            }
        ]
    },
    {
        "name": "Gujarat",
        "slug": "gujarat",
        "cities": [
            {
                "name": "Ahmedabad",
                "slug": "ahmedabad",
                "areas": [
                    "CG Road",
                    "Navrangpura",
                    "SG Highway",
                    "Thaltej",
                    "Bopal"
                ]
            },
            {
                "name": "Surat",
                "slug": "surat",
                "areas": [
                    "Adajan",
                    "Vesu",
                    "Katargam",
                    "Athwa"
                ]
            },
            {
                "name": "Vadodara",
                "slug": "vadodara",
                "areas": [
                    "Karelibaug",
                    "Alkapuri",
                    "Sayajiganj"
                ]
            },
            {
                "name": "Rajkot",
                "slug": "rajkot",
                "areas": [
                    "Race Course",
                    "Kalawad Road",
                    "Gondal Road"
                ]
            },
            {
                "name": "Gandhinagar",
                "slug": "gandhinagar",
                "areas": [
                    "Sector 14",
                    "Sector 21"
                ]
            },
            {
                "name": "Bharuch",
                "slug": "bharuch"
            },
            {
                "name": "Bhuj",
                "slug": "bhuj"
            },
            {
                "name": "Jamnagar",
                "slug": "jamnagar"
            },
            {
                "name": "Navsari",
                "slug": "navsari"
            },
            {
                "name": "Palanpur",
                "slug": "palanpur"
            },
            {
                "name": "Vapi",
                "slug": "vapi"
            },
            {
                "name": "Bhavnagar",
                "slug": "bhavnagar"
            },
            {
                "name": "Junagadh",
                "slug": "junagadh"
            },
            {
                "name": "Gandhidham",
                "slug": "gandhidham"
            },
            {
                "name": "Anand",
                "slug": "anand"
            },
            {
                "name": "Morbi",
                "slug": "morbi"
            },
            {
                "name": "Nadiad",
                "slug": "nadiad"
            },
            {
                "name": "Surendranagar",
                "slug": "surendranagar"
            },
            {
                "name": "Mehsana",
                "slug": "mehsana"
            },
            {
                "name": "Porbandar",
                "slug": "porbandar"
            },
            {
                "name": "Valsad",
                "slug": "valsad"
            },
            {
                "name": "Gondal",
                "slug": "gondal"
            },
            {
                "name": "Godhra",
                "slug": "godhra"
            },
            {
                "name": "Patan",
                "slug": "patan"
            },
            {
                "name": "Kalol",
                "slug": "kalol"
            },
            {
                "name": "Dahod",
                "slug": "dahod"
            },
            {
                "name": "Botad",
                "slug": "botad"
            },
            {
                "name": "Amreli",
                "slug": "amreli"
            },
            {
                "name": "Deesa",
                "slug": "deesa"
            },
            {
                "name": "Jetpur",
                "slug": "jetpur"
            },
            {
                "name": "Chikhli",
                "slug": "chikhli"
            },
            {
                "name": "Bareja",
                "slug": "bareja"
            },
            {
                "name": "Sanand",
                "slug": "sanand"
            },
            {
                "name": "Bardoli",
                "slug": "bardoli"
            },
            {
                "name": "Kamrej",
                "slug": "kamrej"
            },
            {
                "name": "Kosamba",
                "slug": "kosamba"
            },
            {
                "name": "Rander",
                "slug": "rander"
            },
            {
                "name": "Mandvi",
                "slug": "mandvi"
            },
            {
                "name": "Dholka",
                "slug": "dholka"
            },
            {
                "name": "Kotharia",
                "slug": "kotharia"
            },
            {
                "name": "Veraval",
                "slug": "veraval"
            },
            {
                "name": "Katargam",
                "slug": "katargam"
            },
            {
                "name": "Udhana",
                "slug": "udhana"
            },
            {
                "name": "Varachha",
                "slug": "varachha"
            },
            {
                "name": "Nanpura",
                "slug": "nanpura"
            },
            {
                "name": "Halol",
                "slug": "halol"
            },
            {
                "name": "Kandla",
                "slug": "kandla"
            },
            {
                "name": "Una",
                "slug": "una"
            },
            {
                "name": "Kadi",
                "slug": "kadi"
            },
            {
                "name": "Aravalli",
                "slug": "aravalli"
            },
            {
                "name": "Banaskantha",
                "slug": "banaskantha"
            },
            {
                "name": "Chhota Udaipur",
                "slug": "chhota-udaipur"
            },
            {
                "name": "Dang",
                "slug": "dang"
            },
            {
                "name": "Devbhoomi Dwarka",
                "slug": "devbhoomi-dwarka"
            },
            {
                "name": "Gandhi Nagar",
                "slug": "gandhi-nagar"
            },
            {
                "name": "Gir Somnath",
                "slug": "gir-somnath"
            },
            {
                "name": "Gujrat",
                "slug": "gujrat"
            },
            {
                "name": "Junagarh",
                "slug": "junagarh"
            },
            {
                "name": "Kachchh",
                "slug": "kachchh"
            },
            {
                "name": "Kheda",
                "slug": "kheda"
            },
            {
                "name": "Kutch",
                "slug": "kutch"
            },
            {
                "name": "Mahisagar",
                "slug": "mahisagar"
            },
            {
                "name": "Narmada",
                "slug": "narmada"
            },
            {
                "name": "Panch Mahals",
                "slug": "panch-mahals"
            },
            {
                "name": "Rajpipla",
                "slug": "rajpipla"
            },
            {
                "name": "Sabarkantha",
                "slug": "sabarkantha"
            },
            {
                "name": "Tapi",
                "slug": "tapi"
            }
        ]
    },
    {
        "name": "Haryana",
        "slug": "haryana",
        "cities": [
            {
                "name": "Gurgaon",
                "slug": "gurgaon",
                "areas": [
                    "MG Road",
                    "DLF Phase 1",
                    "Sohna Road",
                    "Golf Course Road"
                ]
            },
            {
                "name": "Faridabad",
                "slug": "faridabad",
                "areas": [
                    "Sector 15",
                    "NIT",
                    "Ballabhgarh"
                ]
            },
            {
                "name": "Ambala",
                "slug": "ambala",
                "areas": [
                    "Ambala City",
                    "Ambala Cantt"
                ]
            },
            {
                "name": "Karnal",
                "slug": "karnal",
                "areas": [
                    "Sector 12",
                    "Model Town"
                ]
            },
            {
                "name": "Bahadurgarh",
                "slug": "bahadurgarh"
            },
            {
                "name": "Panchkula",
                "slug": "panchkula"
            },
            {
                "name": "Panipat",
                "slug": "panipat"
            },
            {
                "name": "Yamunanagar",
                "slug": "yamunanagar"
            },
            {
                "name": "Rohtak",
                "slug": "rohtak"
            },
            {
                "name": "Hisar",
                "slug": "hisar"
            },
            {
                "name": "Sonipat",
                "slug": "sonipat"
            },
            {
                "name": "Bhiwani",
                "slug": "bhiwani"
            },
            {
                "name": "Sirsa",
                "slug": "sirsa"
            },
            {
                "name": "Jhajjar",
                "slug": "jhajjar"
            },
            {
                "name": "Jind",
                "slug": "jind"
            },
            {
                "name": "Kurukshetra",
                "slug": "kurukshetra"
            },
            {
                "name": "Thanesar",
                "slug": "thanesar"
            },
            {
                "name": "Kaithal",
                "slug": "kaithal"
            },
            {
                "name": "Rewari",
                "slug": "rewari"
            },
            {
                "name": "Mahendragarh",
                "slug": "mahendragarh"
            },
            {
                "name": "Rawadi",
                "slug": "rawadi"
            },
            {
                "name": "Fatehabad",
                "slug": "fatehabad"
            },
            {
                "name": "Gohana",
                "slug": "gohana"
            },
            {
                "name": "Hansi",
                "slug": "hansi"
            },
            {
                "name": "Kurushetra",
                "slug": "kurushetra"
            },
            {
                "name": "Mewat",
                "slug": "mewat"
            },
            {
                "name": "Narnaul",
                "slug": "narnaul"
            },
            {
                "name": "Palwal",
                "slug": "palwal"
            },
            {
                "name": "Sohna",
                "slug": "sohna"
            }
        ]
    },
    {
        "name": "Himachal Pradesh",
        "slug": "himachal-pradesh",
        "cities": [
            {
                "name": "Shimla",
                "slug": "shimla",
                "areas": [
                    "Mall Road",
                    "Lakkar Bazaar",
                    "Khalini"
                ]
            },
            {
                "name": "Manali",
                "slug": "manali",
                "areas": [
                    "Old Manali",
                    "Mall Road",
                    "Vashisht"
                ]
            },
            {
                "name": "Dharamshala",
                "slug": "dharamshala",
                "areas": [
                    "McLeod Ganj",
                    "Bhagsu"
                ]
            },
            {
                "name": "Kullu",
                "slug": "kullu",
                "areas": [
                    "Akhara Bazaar",
                    "Dhalpur"
                ]
            },
            {
                "name": "Solan",
                "slug": "solan"
            },
            {
                "name": "Mandi",
                "slug": "mandi"
            },
            {
                "name": "Chamba",
                "slug": "chamba"
            },
            {
                "name": "Kangra",
                "slug": "kangra"
            },
            {
                "name": "Hamirpur",
                "slug": "hamirpur"
            },
            {
                "name": "Palampur",
                "slug": "palampur"
            },
            {
                "name": "Una",
                "slug": "una"
            },
            {
                "name": "Nalagarh",
                "slug": "nalagarh"
            },
            {
                "name": "Baddi",
                "slug": "baddi"
            },
            {
                "name": "Ghumarwin",
                "slug": "ghumarwin"
            },
            {
                "name": "Dalhousie",
                "slug": "dalhousie"
            },
            {
                "name": "Kinnaur",
                "slug": "kinnaur"
            },
            {
                "name": "Lahaul And Spiti",
                "slug": "lahaul-and-spiti"
            },
            {
                "name": "Mcleod Ganj",
                "slug": "mcleod-ganj"
            },
            {
                "name": "Nurpur",
                "slug": "nurpur"
            },
            {
                "name": "Sirmaur",
                "slug": "sirmaur"
            },
            {
                "name": "Sundernagar",
                "slug": "sundernagar"
            }
        ]
    },
    {
        "name": "Jharkhand",
        "slug": "jharkhand",
        "cities": [
            {
                "name": "Ranchi",
                "slug": "ranchi",
                "areas": [
                    "Harmu",
                    "Lalpur",
                    "Kanke Road"
                ]
            },
            {
                "name": "Jamshedpur",
                "slug": "jamshedpur",
                "areas": [
                    "Bistupur",
                    "Sakchi",
                    "Telco"
                ]
            },
            {
                "name": "Dhanbad",
                "slug": "dhanbad",
                "areas": [
                    "Hirapur",
                    "Bank More"
                ]
            },
            {
                "name": "Bokaro",
                "slug": "bokaro"
            },
            {
                "name": "Deoghar",
                "slug": "deoghar"
            },
            {
                "name": "Hazaribagh",
                "slug": "hazaribagh"
            },
            {
                "name": "Giridih",
                "slug": "giridih"
            },
            {
                "name": "Ramgarh",
                "slug": "ramgarh"
            }
        ]
    },
    {
        "name": "Karnataka",
        "slug": "karnataka",
        "cities": [
            {
                "name": "Bengaluru",
                "slug": "bengaluru",
                "areas": [
                    "Koramangala",
                    "Indiranagar",
                    "Whitefield",
                    "HSR Layout",
                    "Banaswadi",
                    "Jayanagar"
                ]
            },
            {
                "name": "Mysuru",
                "slug": "mysuru",
                "areas": [
                    "Chamrajpura",
                    "Vijayanagar",
                    "Nazarbad"
                ]
            },
            {
                "name": "Mangaluru",
                "slug": "mangaluru",
                "areas": [
                    "Hampankatta",
                    "Attavar",
                    "Bejai"
                ]
            },
            {
                "name": "Hubballi",
                "slug": "hubballi",
                "areas": [
                    "Keshwapur",
                    "Vidyanagar"
                ]
            },
            {
                "name": "Belagavi",
                "slug": "belagavi",
                "areas": [
                    "Camp",
                    "Tilakwadi"
                ]
            },
            {
                "name": "Bangalore",
                "slug": "bangalore"
            },
            {
                "name": "Belgaum",
                "slug": "belgaum"
            },
            {
                "name": "Mysore",
                "slug": "mysore"
            },
            {
                "name": "Raichur",
                "slug": "raichur"
            },
            {
                "name": "Dharwad",
                "slug": "dharwad"
            },
            {
                "name": "Kalaburagi",
                "slug": "kalaburagi"
            },
            {
                "name": "Mangalore",
                "slug": "mangalore"
            },
            {
                "name": "Davanagere",
                "slug": "davanagere"
            },
            {
                "name": "Bellary",
                "slug": "bellary"
            },
            {
                "name": "Bijapur",
                "slug": "bijapur"
            },
            {
                "name": "Shimoga",
                "slug": "shimoga"
            },
            {
                "name": "Tumkur",
                "slug": "tumkur"
            },
            {
                "name": "Bidar",
                "slug": "bidar"
            },
            {
                "name": "Hospet",
                "slug": "hospet"
            },
            {
                "name": "Gadag",
                "slug": "gadag"
            },
            {
                "name": "Kolar",
                "slug": "kolar"
            },
            {
                "name": "Hassan",
                "slug": "hassan"
            },
            {
                "name": "Bhadravati",
                "slug": "bhadravati"
            },
            {
                "name": "Chitradurga",
                "slug": "chitradurga"
            },
            {
                "name": "Udupi",
                "slug": "udupi"
            },
            {
                "name": "Mandya",
                "slug": "mandya"
            },
            {
                "name": "Chikmagalur",
                "slug": "chikmagalur"
            },
            {
                "name": "Koppal",
                "slug": "koppal"
            },
            {
                "name": "Bagalkot",
                "slug": "bagalkot"
            },
            {
                "name": "Ranebennur",
                "slug": "ranebennur"
            },
            {
                "name": "Haveri",
                "slug": "haveri"
            },
            {
                "name": "Bommasandra",
                "slug": "bommasandra"
            },
            {
                "name": "Vijayanagara",
                "slug": "vijayanagara"
            },
            {
                "name": "Arsikere",
                "slug": "arsikere"
            },
            {
                "name": "Sirsi",
                "slug": "sirsi"
            },
            {
                "name": "Manipal",
                "slug": "manipal"
            },
            {
                "name": "Vijayanagar",
                "slug": "vijayanagar"
            },
            {
                "name": "Banglore",
                "slug": "banglore"
            },
            {
                "name": "Badami",
                "slug": "badami"
            },
            {
                "name": "Bangalore Rural",
                "slug": "bangalore-rural"
            },
            {
                "name": "Chamarajanagar",
                "slug": "chamarajanagar"
            },
            {
                "name": "Chikkaballapura",
                "slug": "chikkaballapura"
            },
            {
                "name": "Dakshina Kannada",
                "slug": "dakshina-kannada"
            },
            {
                "name": "Davangere",
                "slug": "davangere"
            },
            {
                "name": "Devanahalli",
                "slug": "devanahalli"
            },
            {
                "name": "Devanhali",
                "slug": "devanhali"
            },
            {
                "name": "Electronic City",
                "slug": "electronic-city"
            },
            {
                "name": "Gulbarga",
                "slug": "gulbarga"
            },
            {
                "name": "Hampi",
                "slug": "hampi"
            },
            {
                "name": "HSR Layout",
                "slug": "hsr-layout"
            },
            {
                "name": "Hubli",
                "slug": "hubli"
            },
            {
                "name": "Jayanagar",
                "slug": "jayanagar"
            },
            {
                "name": "Karnatka",
                "slug": "karnatka"
            },
            {
                "name": "Karwar",
                "slug": "karwar"
            },
            {
                "name": "Kodagu",
                "slug": "kodagu"
            },
            {
                "name": "Koramangala",
                "slug": "koramangala"
            },
            {
                "name": "Kormangla",
                "slug": "kormangla"
            },
            {
                "name": "Madikeri",
                "slug": "madikeri"
            },
            {
                "name": "Mangluru",
                "slug": "mangluru"
            },
            {
                "name": "Marathahalli",
                "slug": "marathahalli"
            },
            {
                "name": "Neelmangla",
                "slug": "neelmangla"
            },
            {
                "name": "Nelamangala",
                "slug": "nelamangala"
            },
            {
                "name": "Ramanagara",
                "slug": "ramanagara"
            },
            {
                "name": "Uttara Kannada",
                "slug": "uttara-kannada"
            },
            {
                "name": "Vijayapura",
                "slug": "vijayapura"
            },
            {
                "name": "Whitefield",
                "slug": "whitefield"
            },
            {
                "name": "Yadgir",
                "slug": "yadgir"
            }
        ]
    },
    {
        "name": "Kerala",
        "slug": "kerala",
        "cities": [
            {
                "name": "Kochi",
                "slug": "kochi",
                "areas": [
                    "Ernakulam",
                    "Kakkanad",
                    "Edappally",
                    "Fort Kochi"
                ]
            },
            {
                "name": "Thiruvananthapuram",
                "slug": "thiruvananthapuram",
                "areas": [
                    "Kowdiar",
                    "Pattom",
                    "Vanchiyoor"
                ]
            },
            {
                "name": "Kozhikode",
                "slug": "kozhikode",
                "areas": [
                    "Calicut Beach",
                    "Mavoor Road"
                ]
            },
            {
                "name": "Thrissur",
                "slug": "thrissur",
                "areas": [
                    "Swaraj Round",
                    "Poothole"
                ]
            },
            {
                "name": "Kollam",
                "slug": "kollam",
                "areas": [
                    "Asramam",
                    "Chinnakada"
                ]
            },
            {
                "name": "Kannur",
                "slug": "kannur"
            },
            {
                "name": "Kottayam",
                "slug": "kottayam"
            },
            {
                "name": "Palakkad",
                "slug": "palakkad"
            },
            {
                "name": "Alappuzha",
                "slug": "alappuzha"
            },
            {
                "name": "Ernakulam",
                "slug": "ernakulam"
            },
            {
                "name": "Malappuram",
                "slug": "malappuram"
            },
            {
                "name": "Kasaragod",
                "slug": "kasaragod"
            },
            {
                "name": "Pathanamthitta",
                "slug": "pathanamthitta"
            },
            {
                "name": "Wayanad",
                "slug": "wayanad"
            },
            {
                "name": "Idukki",
                "slug": "idukki"
            },
            {
                "name": "Manjeri",
                "slug": "manjeri"
            },
            {
                "name": "Thalassery",
                "slug": "thalassery"
            },
            {
                "name": "Ponnani",
                "slug": "ponnani"
            },
            {
                "name": "Payyanur",
                "slug": "payyanur"
            },
            {
                "name": "Kodungallur",
                "slug": "kodungallur"
            },
            {
                "name": "Parappanangadi",
                "slug": "parappanangadi"
            },
            {
                "name": "Guruvayur",
                "slug": "guruvayur"
            },
            {
                "name": "Tanur",
                "slug": "tanur"
            },
            {
                "name": "Irinjalakuda",
                "slug": "irinjalakuda"
            },
            {
                "name": "Changanassery",
                "slug": "changanassery"
            },
            {
                "name": "Kunnamkulam",
                "slug": "kunnamkulam"
            },
            {
                "name": "Ottappalam",
                "slug": "ottappalam"
            },
            {
                "name": "Chalakudy",
                "slug": "chalakudy"
            },
            {
                "name": "Kottakkal",
                "slug": "kottakkal"
            },
            {
                "name": "Mananthavady",
                "slug": "mananthavady"
            },
            {
                "name": "Punalur",
                "slug": "punalur"
            },
            {
                "name": "Nilambur",
                "slug": "nilambur"
            },
            {
                "name": "Taliparamba",
                "slug": "taliparamba"
            },
            {
                "name": "Varkala",
                "slug": "varkala"
            },
            {
                "name": "Chavakkad",
                "slug": "chavakkad"
            },
            {
                "name": "Kothamangalam",
                "slug": "kothamangalam"
            },
            {
                "name": "Attingal",
                "slug": "attingal"
            },
            {
                "name": "Paravur",
                "slug": "paravur"
            },
            {
                "name": "Ramanattukara",
                "slug": "ramanattukara"
            },
            {
                "name": "Erattupetta",
                "slug": "erattupetta"
            },
            {
                "name": "Angamaly",
                "slug": "angamaly"
            },
            {
                "name": "Haripad",
                "slug": "haripad"
            },
            {
                "name": "Muvattupuzha",
                "slug": "muvattupuzha"
            },
            {
                "name": "Kottarakara",
                "slug": "kottarakara"
            },
            {
                "name": "Adoor",
                "slug": "adoor"
            },
            {
                "name": "Pattambi",
                "slug": "pattambi"
            },
            {
                "name": "Aluva",
                "slug": "aluva"
            },
            {
                "name": "Munnar",
                "slug": "munnar"
            }
        ]
    },
    {
        "name": "Madhya Pradesh",
        "slug": "madhya-pradesh",
        "cities": [
            {
                "name": "Bhopal",
                "slug": "bhopal",
                "areas": [
                    "MP Nagar",
                    "New Market",
                    "Arera Colony",
                    "Habibganj"
                ]
            },
            {
                "name": "Indore",
                "slug": "indore",
                "areas": [
                    "Vijay Nagar",
                    "Palasia",
                    "MG Road",
                    "Scheme 54"
                ]
            },
            {
                "name": "Jabalpur",
                "slug": "jabalpur",
                "areas": [
                    "Napier Town",
                    "Civil Lines",
                    "Adhartal"
                ]
            },
            {
                "name": "Gwalior",
                "slug": "gwalior",
                "areas": [
                    "Lashkar",
                    "Morar",
                    "Shivpuri Link Road"
                ]
            },
            {
                "name": "Ujjain",
                "slug": "ujjain",
                "areas": [
                    "Freeganj",
                    "Mahakal Area"
                ]
            },
            {
                "name": "Sagar",
                "slug": "sagar"
            },
            {
                "name": "Dewas",
                "slug": "dewas"
            },
            {
                "name": "Satna",
                "slug": "satna"
            },
            {
                "name": "Ratlam",
                "slug": "ratlam"
            },
            {
                "name": "Rewa",
                "slug": "rewa"
            },
            {
                "name": "Katni",
                "slug": "katni"
            },
            {
                "name": "Singrauli",
                "slug": "singrauli"
            },
            {
                "name": "Burhanpur",
                "slug": "burhanpur"
            },
            {
                "name": "Khandwa",
                "slug": "khandwa"
            },
            {
                "name": "Bhind",
                "slug": "bhind"
            },
            {
                "name": "Chhindwara",
                "slug": "chhindwara"
            },
            {
                "name": "Guna",
                "slug": "guna"
            },
            {
                "name": "Shivpuri",
                "slug": "shivpuri"
            },
            {
                "name": "Vidisha",
                "slug": "vidisha"
            },
            {
                "name": "Chhatarpur",
                "slug": "chhatarpur"
            },
            {
                "name": "Damoh",
                "slug": "damoh"
            },
            {
                "name": "Mandsaur",
                "slug": "mandsaur"
            },
            {
                "name": "Khargone",
                "slug": "khargone"
            },
            {
                "name": "Neemuch",
                "slug": "neemuch"
            },
            {
                "name": "Pithampur",
                "slug": "pithampur"
            },
            {
                "name": "Dhar",
                "slug": "dhar"
            },
            {
                "name": "Itarsi",
                "slug": "itarsi"
            },
            {
                "name": "Sehore",
                "slug": "sehore"
            },
            {
                "name": "Morena",
                "slug": "morena"
            },
            {
                "name": "Betul",
                "slug": "betul"
            },
            {
                "name": "Seoni",
                "slug": "seoni"
            },
            {
                "name": "Datia",
                "slug": "datia"
            },
            {
                "name": "Nagda",
                "slug": "nagda"
            },
            {
                "name": "Dindori",
                "slug": "dindori"
            },
            {
                "name": "Hoshangabad",
                "slug": "hoshangabad"
            },
            {
                "name": "Khajuraaho",
                "slug": "khajuraaho"
            },
            {
                "name": "Mandu",
                "slug": "mandu"
            },
            {
                "name": "Mhow",
                "slug": "mhow"
            },
            {
                "name": "Panchmadi",
                "slug": "panchmadi"
            },
            {
                "name": "Raisen",
                "slug": "raisen"
            }
        ]
    },
    {
        "name": "Maharashtra",
        "slug": "maharashtra",
        "cities": [
            {
                "name": "Mumbai",
                "slug": "mumbai",
                "areas": [
                    "Andheri",
                    "Bandra",
                    "Juhu",
                    "Powai",
                    "Lower Parel",
                    "Dadar"
                ]
            },
            {
                "name": "Pune",
                "slug": "pune",
                "areas": [
                    "Koregaon Park",
                    "Viman Nagar",
                    "Kothrud",
                    "Hinjewadi",
                    "Kalyani Nagar"
                ]
            },
            {
                "name": "Nagpur",
                "slug": "nagpur",
                "areas": [
                    "Dharampeth",
                    "Civil Lines",
                    "Sitabuldi"
                ]
            },
            {
                "name": "Nashik",
                "slug": "nashik",
                "areas": [
                    "College Road",
                    "Gangapur Road"
                ]
            },
            {
                "name": "Aurangabad",
                "slug": "aurangabad",
                "areas": [
                    "Cidco",
                    "Cantonment"
                ]
            },
            {
                "name": "Navi Mumbai",
                "slug": "navi-mumbai",
                "areas": [
                    "Vashi",
                    "Kharghar",
                    "Panvel"
                ]
            },
            {
                "name": "Thane",
                "slug": "thane",
                "areas": [
                    "Hiranandani Estate",
                    "Ghodbunder Road"
                ]
            },
            {
                "name": "Pimpri Chinchwad",
                "slug": "pimpri-chinchwad"
            },
            {
                "name": "Vasai Virar",
                "slug": "vasai-virar"
            },
            {
                "name": "Sambhaji Nagar",
                "slug": "sambhaji-nagar"
            },
            {
                "name": "Solapur",
                "slug": "solapur"
            },
            {
                "name": "Kolhapur",
                "slug": "kolhapur"
            },
            {
                "name": "Amravati",
                "slug": "amravati"
            },
            {
                "name": "Latur",
                "slug": "latur"
            },
            {
                "name": "Akola",
                "slug": "akola"
            },
            {
                "name": "Jalgaon",
                "slug": "jalgaon"
            },
            {
                "name": "Dhule",
                "slug": "dhule"
            },
            {
                "name": "Sangli",
                "slug": "sangli"
            },
            {
                "name": "Ahmednagar",
                "slug": "ahmednagar"
            },
            {
                "name": "Raigad",
                "slug": "raigad"
            },
            {
                "name": "Chandrapur",
                "slug": "chandrapur"
            },
            {
                "name": "Parbhani",
                "slug": "parbhani"
            },
            {
                "name": "Bhiwandi",
                "slug": "bhiwandi"
            },
            {
                "name": "Ulhasnagar",
                "slug": "ulhasnagar"
            },
            {
                "name": "Nanded",
                "slug": "nanded"
            },
            {
                "name": "Bhandup",
                "slug": "bhandup"
            },
            {
                "name": "Kalyan",
                "slug": "kalyan"
            },
            {
                "name": "Panvel",
                "slug": "panvel"
            },
            {
                "name": "Lonavala",
                "slug": "lonavala"
            },
            {
                "name": "Alandi",
                "slug": "alandi"
            },
            {
                "name": "Baramati",
                "slug": "baramati"
            },
            {
                "name": "Jalna",
                "slug": "jalna"
            },
            {
                "name": "Bhusawal",
                "slug": "bhusawal"
            },
            {
                "name": "Ratnagiri",
                "slug": "ratnagiri"
            },
            {
                "name": "Beed",
                "slug": "beed"
            },
            {
                "name": "Gondia",
                "slug": "gondia"
            },
            {
                "name": "Satara",
                "slug": "satara"
            },
            {
                "name": "Barshi",
                "slug": "barshi"
            },
            {
                "name": "Yavatmal",
                "slug": "yavatmal"
            },
            {
                "name": "Achalpur",
                "slug": "achalpur"
            },
            {
                "name": "Osmanabad",
                "slug": "osmanabad"
            },
            {
                "name": "Nandurbar",
                "slug": "nandurbar"
            },
            {
                "name": "Wardha",
                "slug": "wardha"
            },
            {
                "name": "Udgir",
                "slug": "udgir"
            },
            {
                "name": "Hinganghat",
                "slug": "hinganghat"
            },
            {
                "name": "Pirangut",
                "slug": "pirangut"
            },
            {
                "name": "Chakan",
                "slug": "chakan"
            },
            {
                "name": "Dehu Road",
                "slug": "dehu-road"
            },
            {
                "name": "Mira Bhayandar",
                "slug": "mira-bhayandar"
            },
            {
                "name": "Palghar",
                "slug": "palghar"
            },
            {
                "name": "Malegaon",
                "slug": "malegaon"
            },
            {
                "name": "Ichalkaranji",
                "slug": "ichalkaranji"
            },
            {
                "name": "Kharadi",
                "slug": "kharadi"
            },
            {
                "name": "Badlapur",
                "slug": "badlapur"
            },
            {
                "name": "Lasalgaon",
                "slug": "lasalgaon"
            },
            {
                "name": "Pen",
                "slug": "pen"
            },
            {
                "name": "Akot",
                "slug": "akot"
            },
            {
                "name": "Alibag",
                "slug": "alibag"
            },
            {
                "name": "Ambajogai",
                "slug": "ambajogai"
            },
            {
                "name": "Ambarnath",
                "slug": "ambarnath"
            },
            {
                "name": "Ambojogai",
                "slug": "ambojogai"
            },
            {
                "name": "Andheri",
                "slug": "andheri"
            },
            {
                "name": "Antop Hill",
                "slug": "antop-hill"
            },
            {
                "name": "Bandra",
                "slug": "bandra"
            },
            {
                "name": "Belapur",
                "slug": "belapur"
            },
            {
                "name": "Bhor",
                "slug": "bhor"
            },
            {
                "name": "Borivali",
                "slug": "borivali"
            },
            {
                "name": "Breach Candy",
                "slug": "breach-candy"
            },
            {
                "name": "Carter Road",
                "slug": "carter-road"
            },
            {
                "name": "Chembur",
                "slug": "chembur"
            },
            {
                "name": "Chiplun",
                "slug": "chiplun"
            },
            {
                "name": "Church Gate",
                "slug": "church-gate"
            },
            {
                "name": "Colaba",
                "slug": "colaba"
            },
            {
                "name": "Cuffe Parade",
                "slug": "cuffe-parade"
            },
            {
                "name": "Dharashiv",
                "slug": "dharashiv"
            },
            {
                "name": "Dombivali",
                "slug": "dombivali"
            },
            {
                "name": "Dombivli",
                "slug": "dombivli"
            },
            {
                "name": "Ghatkopar",
                "slug": "ghatkopar"
            },
            {
                "name": "Goregaon",
                "slug": "goregaon"
            },
            {
                "name": "Grant Road",
                "slug": "grant-road"
            },
            {
                "name": "Hinjewadi",
                "slug": "hinjewadi"
            },
            {
                "name": "Jejuri",
                "slug": "jejuri"
            },
            {
                "name": "Jogeshwari",
                "slug": "jogeshwari"
            },
            {
                "name": "Juhu",
                "slug": "juhu"
            },
            {
                "name": "Junnar",
                "slug": "junnar"
            },
            {
                "name": "Kamshet",
                "slug": "kamshet"
            },
            {
                "name": "Kandivali",
                "slug": "kandivali"
            },
            {
                "name": "Karad",
                "slug": "karad"
            },
            {
                "name": "Kemps Corner",
                "slug": "kemps-corner"
            },
            {
                "name": "Khandala",
                "slug": "khandala"
            },
            {
                "name": "Khar",
                "slug": "khar"
            },
            {
                "name": "Kopar Khairane",
                "slug": "kopar-khairane"
            },
            {
                "name": "Kurla",
                "slug": "kurla"
            },
            {
                "name": "Lavasa",
                "slug": "lavasa"
            },
            {
                "name": "Lokhandwala",
                "slug": "lokhandwala"
            },
            {
                "name": "Mahabaleshwar",
                "slug": "mahabaleshwar"
            },
            {
                "name": "Mahalaxmi",
                "slug": "mahalaxmi"
            },
            {
                "name": "Maharastra",
                "slug": "maharastra"
            },
            {
                "name": "Mahim",
                "slug": "mahim"
            },
            {
                "name": "Malabar Hill",
                "slug": "malabar-hill"
            },
            {
                "name": "Malad",
                "slug": "malad"
            },
            {
                "name": "Marine Lines",
                "slug": "marine-lines"
            },
            {
                "name": "Matheran",
                "slug": "matheran"
            },
            {
                "name": "Mira Road",
                "slug": "mira-road"
            },
            {
                "name": "Mulund",
                "slug": "mulund"
            },
            {
                "name": "Mumbai Central",
                "slug": "mumbai-central"
            },
            {
                "name": "Nariman Point",
                "slug": "nariman-point"
            },
            {
                "name": "Nerul",
                "slug": "nerul"
            },
            {
                "name": "Oshiwara",
                "slug": "oshiwara"
            },
            {
                "name": "Pali Hill",
                "slug": "pali-hill"
            },
            {
                "name": "Panchgani",
                "slug": "panchgani"
            },
            {
                "name": "Pandharpur",
                "slug": "pandharpur"
            },
            {
                "name": "Peddar Road",
                "slug": "peddar-road"
            },
            {
                "name": "Powai",
                "slug": "powai"
            },
            {
                "name": "Santacruz",
                "slug": "santacruz"
            },
            {
                "name": "Saswad",
                "slug": "saswad"
            },
            {
                "name": "Sion",
                "slug": "sion"
            },
            {
                "name": "Talegaon Dabhade",
                "slug": "talegaon-dabhade"
            },
            {
                "name": "Vajreshwari",
                "slug": "vajreshwari"
            },
            {
                "name": "Vasai",
                "slug": "vasai"
            },
            {
                "name": "Vashi",
                "slug": "vashi"
            },
            {
                "name": "Versova",
                "slug": "versova"
            },
            {
                "name": "Vile Parle",
                "slug": "vile-parle"
            },
            {
                "name": "Wadala",
                "slug": "wadala"
            },
            {
                "name": "Washim",
                "slug": "washim"
            }
        ]
    },
    {
        "name": "Manipur",
        "slug": "manipur",
        "cities": [
            {
                "name": "Imphal",
                "slug": "imphal",
                "areas": [
                    "Paona Bazaar",
                    "Khwairamband"
                ]
            },
            {
                "name": "Bishnupur",
                "slug": "bishnupur"
            },
            {
                "name": "Chandel",
                "slug": "chandel"
            },
            {
                "name": "Churachandpur",
                "slug": "churachandpur"
            },
            {
                "name": "Imphal East",
                "slug": "imphal-east"
            },
            {
                "name": "Imphal West",
                "slug": "imphal-west"
            },
            {
                "name": "Jiribam",
                "slug": "jiribam"
            },
            {
                "name": "Kakching",
                "slug": "kakching"
            },
            {
                "name": "Kamjong",
                "slug": "kamjong"
            },
            {
                "name": "Kangpokpi",
                "slug": "kangpokpi"
            },
            {
                "name": "Noney",
                "slug": "noney"
            },
            {
                "name": "Pherzawl",
                "slug": "pherzawl"
            },
            {
                "name": "Senapati",
                "slug": "senapati"
            },
            {
                "name": "Tamenglong",
                "slug": "tamenglong"
            },
            {
                "name": "Tengnoupal",
                "slug": "tengnoupal"
            },
            {
                "name": "Thoubal",
                "slug": "thoubal"
            },
            {
                "name": "Ukhrul",
                "slug": "ukhrul"
            }
        ]
    },
    {
        "name": "Meghalaya",
        "slug": "meghalaya",
        "cities": [
            {
                "name": "Shillong",
                "slug": "shillong",
                "areas": [
                    "Police Bazaar",
                    "Laitumkhrah",
                    "Mawkhar"
                ]
            },
            {
                "name": "Ampati South West Khasi Hills",
                "slug": "ampati-south-west-khasi-hills"
            },
            {
                "name": "Baghmara South West Garo Hills",
                "slug": "baghmara-south-west-garo-hills"
            },
            {
                "name": "East Garo Hills",
                "slug": "east-garo-hills"
            },
            {
                "name": "Jowai West Khasi Hills",
                "slug": "jowai-west-khasi-hills"
            },
            {
                "name": "Khliehriat East Khasi Hills",
                "slug": "khliehriat-east-khasi-hills"
            },
            {
                "name": "Mawkyrwat West Garo Hills",
                "slug": "mawkyrwat-west-garo-hills"
            },
            {
                "name": "Nongpoh South Garo Hills",
                "slug": "nongpoh-south-garo-hills"
            },
            {
                "name": "Nongstoin",
                "slug": "nongstoin"
            },
            {
                "name": "Resubelpara Ri Bhoi",
                "slug": "resubelpara-ri-bhoi"
            },
            {
                "name": "Shillong North Garo Hills",
                "slug": "shillong-north-garo-hills"
            },
            {
                "name": "Tura West Jaintia Hills",
                "slug": "tura-west-jaintia-hills"
            },
            {
                "name": "Williamnagar East Jaintia Hills",
                "slug": "williamnagar-east-jaintia-hills"
            }
        ]
    },
    {
        "name": "Mizoram",
        "slug": "mizoram",
        "cities": [
            {
                "name": "Aizawl",
                "slug": "aizawl",
                "areas": [
                    "Zarkawt",
                    "Bawngkawn"
                ]
            },
            {
                "name": "Aizwal",
                "slug": "aizwal"
            },
            {
                "name": "Champhai",
                "slug": "champhai"
            },
            {
                "name": "Kolasib",
                "slug": "kolasib"
            },
            {
                "name": "Lawngtlai",
                "slug": "lawngtlai"
            },
            {
                "name": "Lunglei",
                "slug": "lunglei"
            },
            {
                "name": "Mamit",
                "slug": "mamit"
            },
            {
                "name": "Saiha",
                "slug": "saiha"
            },
            {
                "name": "Serchhip",
                "slug": "serchhip"
            }
        ]
    },
    {
        "name": "Nagaland",
        "slug": "nagaland",
        "cities": [
            {
                "name": "Kohima",
                "slug": "kohima",
                "areas": [
                    "Bara Bazar",
                    "Naga Bazaar"
                ]
            },
            {
                "name": "Dimapur",
                "slug": "dimapur",
                "areas": [
                    "Naharbari",
                    "Super Market"
                ]
            },
            {
                "name": "Kiphire",
                "slug": "kiphire"
            },
            {
                "name": "Longleng",
                "slug": "longleng"
            },
            {
                "name": "Mokokchung",
                "slug": "mokokchung"
            },
            {
                "name": "Mon",
                "slug": "mon"
            },
            {
                "name": "Peren",
                "slug": "peren"
            },
            {
                "name": "Phek",
                "slug": "phek"
            },
            {
                "name": "Tuensang",
                "slug": "tuensang"
            },
            {
                "name": "Wokha",
                "slug": "wokha"
            },
            {
                "name": "Zunheboto",
                "slug": "zunheboto"
            }
        ]
    },
    {
        "name": "Odisha",
        "slug": "odisha",
        "cities": [
            {
                "name": "Bhubaneswar",
                "slug": "bhubaneswar",
                "areas": [
                    "Saheed Nagar",
                    "Jaydev Vihar",
                    "Patia"
                ]
            },
            {
                "name": "Cuttack",
                "slug": "cuttack",
                "areas": [
                    "Badambadi",
                    "Link Road"
                ]
            },
            {
                "name": "Rourkela",
                "slug": "rourkela",
                "areas": [
                    "Sector 1",
                    "Civil Township"
                ]
            },
            {
                "name": "Puri",
                "slug": "puri",
                "areas": [
                    "Grand Road",
                    "Marine Drive"
                ]
            },
            {
                "name": "Sambalpur",
                "slug": "sambalpur"
            },
            {
                "name": "Balangir",
                "slug": "balangir"
            },
            {
                "name": "Balasore",
                "slug": "balasore"
            },
            {
                "name": "Barbil",
                "slug": "barbil"
            },
            {
                "name": "Berhampur",
                "slug": "berhampur"
            },
            {
                "name": "Bhadrak",
                "slug": "bhadrak"
            },
            {
                "name": "Bhawanipatna",
                "slug": "bhawanipatna"
            },
            {
                "name": "Burla",
                "slug": "burla"
            },
            {
                "name": "Dhenkanal",
                "slug": "dhenkanal"
            },
            {
                "name": "Jeypore",
                "slug": "jeypore"
            },
            {
                "name": "Jharsuguda",
                "slug": "jharsuguda"
            },
            {
                "name": "Joda",
                "slug": "joda"
            },
            {
                "name": "Kalahandi",
                "slug": "kalahandi"
            },
            {
                "name": "Talcher",
                "slug": "talcher"
            },
            {
                "name": "Angul",
                "slug": "angul"
            },
            {
                "name": "Boudh",
                "slug": "boudh"
            },
            {
                "name": "Gajapati",
                "slug": "gajapati"
            },
            {
                "name": "Ganjam",
                "slug": "ganjam"
            },
            {
                "name": "Jagatsinghpur",
                "slug": "jagatsinghpur"
            },
            {
                "name": "Jajpur",
                "slug": "jajpur"
            },
            {
                "name": "Kandhamal",
                "slug": "kandhamal"
            },
            {
                "name": "Kendrapara",
                "slug": "kendrapara"
            },
            {
                "name": "Keonjhar",
                "slug": "keonjhar"
            },
            {
                "name": "Khurda",
                "slug": "khurda"
            },
            {
                "name": "Koraput",
                "slug": "koraput"
            },
            {
                "name": "Malkangiri",
                "slug": "malkangiri"
            },
            {
                "name": "Mayurbhanj",
                "slug": "mayurbhanj"
            },
            {
                "name": "Nabarangpur",
                "slug": "nabarangpur"
            },
            {
                "name": "Nayagarh",
                "slug": "nayagarh"
            },
            {
                "name": "Nuapada",
                "slug": "nuapada"
            },
            {
                "name": "Rayagada",
                "slug": "rayagada"
            },
            {
                "name": "Sonepur",
                "slug": "sonepur"
            },
            {
                "name": "Sundargarh",
                "slug": "sundargarh"
            }
        ]
    },
    {
        "name": "Punjab",
        "slug": "punjab",
        "cities": [
            {
                "name": "Ludhiana",
                "slug": "ludhiana",
                "areas": [
                    "Ferozepur Road",
                    "BRS Nagar",
                    "Sarabha Nagar"
                ]
            },
            {
                "name": "Amritsar",
                "slug": "amritsar",
                "areas": [
                    "Lawrence Road",
                    "Mall Road",
                    "Ranjit Avenue"
                ]
            },
            {
                "name": "Chandigarh",
                "slug": "chandigarh",
                "areas": [
                    "Sector 17",
                    "Sector 35",
                    "Sector 22"
                ]
            },
            {
                "name": "Jalandhar",
                "slug": "jalandhar",
                "areas": [
                    "Patel Chowk",
                    "Nakodar Road"
                ]
            },
            {
                "name": "Patiala",
                "slug": "patiala",
                "areas": [
                    "Rajbagh",
                    "Tripuri"
                ]
            },
            {
                "name": "Mohali",
                "slug": "mohali"
            },
            {
                "name": "Pathankot",
                "slug": "pathankot"
            },
            {
                "name": "Hoshiarpur",
                "slug": "hoshiarpur"
            },
            {
                "name": "Batala",
                "slug": "batala"
            },
            {
                "name": "Moga",
                "slug": "moga"
            },
            {
                "name": "Fazilka",
                "slug": "fazilka"
            },
            {
                "name": "Phagwara",
                "slug": "phagwara"
            },
            {
                "name": "Barnala",
                "slug": "barnala"
            },
            {
                "name": "Firozpur",
                "slug": "firozpur"
            },
            {
                "name": "Kapurthala",
                "slug": "kapurthala"
            },
            {
                "name": "Sangrur",
                "slug": "sangrur"
            },
            {
                "name": "Rupnagar",
                "slug": "rupnagar"
            },
            {
                "name": "Abohar",
                "slug": "abohar"
            },
            {
                "name": "Gurdaspur",
                "slug": "gurdaspur"
            },
            {
                "name": "Khanna",
                "slug": "khanna"
            },
            {
                "name": "Malerkotla",
                "slug": "malerkotla"
            },
            {
                "name": "Muktsar",
                "slug": "muktsar"
            },
            {
                "name": "Rajpura",
                "slug": "rajpura"
            },
            {
                "name": "Sunam",
                "slug": "sunam"
            },
            {
                "name": "Faridkot",
                "slug": "faridkot"
            },
            {
                "name": "Zirakpur",
                "slug": "zirakpur"
            },
            {
                "name": "Ludhiyana",
                "slug": "ludhiyana"
            },
            {
                "name": "Anandpur Sahib",
                "slug": "anandpur-sahib"
            },
            {
                "name": "Bathinda",
                "slug": "bathinda"
            },
            {
                "name": "Fatehgarh Sahib",
                "slug": "fatehgarh-sahib"
            },
            {
                "name": "Ferozpur",
                "slug": "ferozpur"
            },
            {
                "name": "Firozepur",
                "slug": "firozepur"
            },
            {
                "name": "Hosiyarpur",
                "slug": "hosiyarpur"
            },
            {
                "name": "Kotkapura",
                "slug": "kotkapura"
            },
            {
                "name": "Mansa",
                "slug": "mansa"
            },
            {
                "name": "Muktasar",
                "slug": "muktasar"
            },
            {
                "name": "Panjab",
                "slug": "panjab"
            },
            {
                "name": "Samana",
                "slug": "samana"
            },
            {
                "name": "SAS Nagar",
                "slug": "sas-nagar"
            },
            {
                "name": "SBS Nagar",
                "slug": "sbs-nagar"
            },
            {
                "name": "Tarn Taran",
                "slug": "tarn-taran"
            }
        ]
    },
    {
        "name": "Rajasthan",
        "slug": "rajasthan",
        "cities": [
            {
                "name": "Jaipur",
                "slug": "jaipur",
                "areas": [
                    "C-Scheme",
                    "Vaishali Nagar",
                    "Malviya Nagar",
                    "Tonk Road"
                ]
            },
            {
                "name": "Jodhpur",
                "slug": "jodhpur",
                "areas": [
                    "Ratanada",
                    "Shastri Nagar",
                    "Chopasni Housing Board"
                ]
            },
            {
                "name": "Udaipur",
                "slug": "udaipur",
                "areas": [
                    "Fatehpura",
                    "Aravali"
                ]
            },
            {
                "name": "Ajmer",
                "slug": "ajmer",
                "areas": [
                    "Pushkar Road",
                    "Vaishali Nagar"
                ]
            },
            {
                "name": "Kota",
                "slug": "kota",
                "areas": [
                    "Mahaveer Nagar",
                    "Vigyan Nagar"
                ]
            },
            {
                "name": "Bikaner",
                "slug": "bikaner"
            },
            {
                "name": "Jaisalmer",
                "slug": "jaisalmer"
            },
            {
                "name": "Alwar",
                "slug": "alwar"
            },
            {
                "name": "Pushkar",
                "slug": "pushkar"
            },
            {
                "name": "Chittorgarh",
                "slug": "chittorgarh"
            },
            {
                "name": "Bundi",
                "slug": "bundi"
            },
            {
                "name": "Sikar",
                "slug": "sikar"
            },
            {
                "name": "Bhilwara",
                "slug": "bhilwara"
            },
            {
                "name": "Sri Ganganagar",
                "slug": "sri-ganganagar"
            },
            {
                "name": "Bharatpur",
                "slug": "bharatpur"
            },
            {
                "name": "Sawai Madhopur",
                "slug": "sawai-madhopur"
            },
            {
                "name": "Nagaur",
                "slug": "nagaur"
            },
            {
                "name": "Dungarpur",
                "slug": "dungarpur"
            },
            {
                "name": "Jhunjhunu",
                "slug": "jhunjhunu"
            },
            {
                "name": "Hanumangarh",
                "slug": "hanumangarh"
            },
            {
                "name": "Nathdwara",
                "slug": "nathdwara"
            },
            {
                "name": "Banswara",
                "slug": "banswara"
            },
            {
                "name": "Jhalawar",
                "slug": "jhalawar"
            },
            {
                "name": "Beawar",
                "slug": "beawar"
            },
            {
                "name": "Pali",
                "slug": "pali"
            },
            {
                "name": "Hindaun",
                "slug": "hindaun"
            },
            {
                "name": "Barmer",
                "slug": "barmer"
            },
            {
                "name": "Nawalgarh",
                "slug": "nawalgarh"
            },
            {
                "name": "Bhiwadi",
                "slug": "bhiwadi"
            },
            {
                "name": "Makrana",
                "slug": "makrana"
            },
            {
                "name": "Dholpur",
                "slug": "dholpur"
            },
            {
                "name": "Baran",
                "slug": "baran"
            },
            {
                "name": "Churu",
                "slug": "churu"
            },
            {
                "name": "Vaishali Nagar",
                "slug": "vaishali-nagar"
            },
            {
                "name": "Kishangarh",
                "slug": "kishangarh"
            },
            {
                "name": "Tonk",
                "slug": "tonk"
            },
            {
                "name": "Sanganer",
                "slug": "sanganer"
            },
            {
                "name": "Sirohi",
                "slug": "sirohi"
            },
            {
                "name": "Mount Abu",
                "slug": "mount-abu"
            },
            {
                "name": "Balotra",
                "slug": "balotra"
            },
            {
                "name": "Gulabpura",
                "slug": "gulabpura"
            },
            {
                "name": "Kankroli",
                "slug": "kankroli"
            },
            {
                "name": "Amer",
                "slug": "amer"
            },
            {
                "name": "Bhadra",
                "slug": "bhadra"
            },
            {
                "name": "Dausa",
                "slug": "dausa"
            },
            {
                "name": "Didwana",
                "slug": "didwana"
            },
            {
                "name": "Ganganagar",
                "slug": "ganganagar"
            },
            {
                "name": "Gangapur",
                "slug": "gangapur"
            },
            {
                "name": "Jaipur Malviya Nagar",
                "slug": "jaipur-malviya-nagar"
            },
            {
                "name": "Jaipur Vaishali Nagar",
                "slug": "jaipur-vaishali-nagar"
            },
            {
                "name": "Jalore",
                "slug": "jalore"
            },
            {
                "name": "Kumbhalgarh",
                "slug": "kumbhalgarh"
            },
            {
                "name": "Ladnun",
                "slug": "ladnun"
            },
            {
                "name": "Laxmangarh",
                "slug": "laxmangarh"
            },
            {
                "name": "Merta",
                "slug": "merta"
            },
            {
                "name": "Neemrana",
                "slug": "neemrana"
            },
            {
                "name": "Niwai",
                "slug": "niwai"
            },
            {
                "name": "Nohar",
                "slug": "nohar"
            },
            {
                "name": "Pratapgarh",
                "slug": "pratapgarh"
            },
            {
                "name": "Ranakpur",
                "slug": "ranakpur"
            },
            {
                "name": "Rawatbhata",
                "slug": "rawatbhata"
            },
            {
                "name": "Shekhawati",
                "slug": "shekhawati"
            },
            {
                "name": "Sojat",
                "slug": "sojat"
            }
        ]
    },
    {
        "name": "Sikkim",
        "slug": "sikkim",
        "cities": [
            {
                "name": "Gangtok",
                "slug": "gangtok",
                "areas": [
                    "MG Marg",
                    "Deorali"
                ]
            },
            {
                "name": "Mangan",
                "slug": "mangan"
            },
            {
                "name": "Namchi",
                "slug": "namchi"
            },
            {
                "name": "East Sikkim",
                "slug": "east-sikkim"
            },
            {
                "name": "Gangtok North Sikkim",
                "slug": "gangtok-north-sikkim"
            },
            {
                "name": "Geyzing",
                "slug": "geyzing"
            },
            {
                "name": "Mangan South Sikkim",
                "slug": "mangan-south-sikkim"
            },
            {
                "name": "Namchi West Sikkim",
                "slug": "namchi-west-sikkim"
            }
        ]
    },
    {
        "name": "Tamil Nadu",
        "slug": "tamil-nadu",
        "cities": [
            {
                "name": "Chennai",
                "slug": "chennai",
                "areas": [
                    "T. Nagar",
                    "Anna Nagar",
                    "Adyar",
                    "Velachery",
                    "Nungambakkam"
                ]
            },
            {
                "name": "Coimbatore",
                "slug": "coimbatore",
                "areas": [
                    "RS Puram",
                    "Gandhipuram",
                    "Peelamedu"
                ]
            },
            {
                "name": "Madurai",
                "slug": "madurai",
                "areas": [
                    "Anna Nagar",
                    "Alwarpet",
                    "KK Nagar"
                ]
            },
            {
                "name": "Trichy",
                "slug": "trichy",
                "areas": [
                    "Thillai Nagar",
                    "KK Nagar"
                ]
            },
            {
                "name": "Salem",
                "slug": "salem",
                "areas": [
                    "Fairlands",
                    "Swarnapuri"
                ]
            },
            {
                "name": "Vellore",
                "slug": "vellore",
                "areas": [
                    "Officers Line",
                    "Gandhi Nagar"
                ]
            },
            {
                "name": "Tirunelveli",
                "slug": "tirunelveli",
                "areas": [
                    "Palayamkottai",
                    "Junction"
                ]
            },
            {
                "name": "Tiruppur",
                "slug": "tiruppur"
            },
            {
                "name": "Erode",
                "slug": "erode"
            },
            {
                "name": "Thanjavur",
                "slug": "thanjavur"
            },
            {
                "name": "Thoothukudi",
                "slug": "thoothukudi"
            },
            {
                "name": "Dindigul",
                "slug": "dindigul"
            },
            {
                "name": "Ooty",
                "slug": "ooty"
            },
            {
                "name": "Kodaikanal",
                "slug": "kodaikanal"
            },
            {
                "name": "Nagapattinam",
                "slug": "nagapattinam"
            },
            {
                "name": "Pollachi",
                "slug": "pollachi"
            },
            {
                "name": "Tiruchchirappalli",
                "slug": "tiruchchirappalli"
            },
            {
                "name": "Kanchipuram",
                "slug": "kanchipuram"
            },
            {
                "name": "Hosur",
                "slug": "hosur"
            },
            {
                "name": "Nagercoil",
                "slug": "nagercoil"
            },
            {
                "name": "Namakkal",
                "slug": "namakkal"
            },
            {
                "name": "Sivaganga",
                "slug": "sivaganga"
            },
            {
                "name": "Cuddalore",
                "slug": "cuddalore"
            },
            {
                "name": "Kumbakonam",
                "slug": "kumbakonam"
            },
            {
                "name": "Tiruvannamalai",
                "slug": "tiruvannamalai"
            },
            {
                "name": "Rajapalayam",
                "slug": "rajapalayam"
            },
            {
                "name": "Sivakasi",
                "slug": "sivakasi"
            },
            {
                "name": "Karur",
                "slug": "karur"
            },
            {
                "name": "Gudiyatham",
                "slug": "gudiyatham"
            },
            {
                "name": "Pudukkottai",
                "slug": "pudukkottai"
            },
            {
                "name": "Vaniyambadi",
                "slug": "vaniyambadi"
            },
            {
                "name": "Tirupathur",
                "slug": "tirupathur"
            },
            {
                "name": "Ambur",
                "slug": "ambur"
            },
            {
                "name": "Thirumangalam",
                "slug": "thirumangalam"
            },
            {
                "name": "Sriperumbudur",
                "slug": "sriperumbudur"
            },
            {
                "name": "Peravurani",
                "slug": "peravurani"
            },
            {
                "name": "Ariyalur",
                "slug": "ariyalur"
            },
            {
                "name": "Dharmapuri",
                "slug": "dharmapuri"
            },
            {
                "name": "Kancheepuram",
                "slug": "kancheepuram"
            },
            {
                "name": "Kanniyakumari",
                "slug": "kanniyakumari"
            },
            {
                "name": "Kanyakumari",
                "slug": "kanyakumari"
            },
            {
                "name": "Krishnagiri",
                "slug": "krishnagiri"
            },
            {
                "name": "Mahabalipuram",
                "slug": "mahabalipuram"
            },
            {
                "name": "Perambalur",
                "slug": "perambalur"
            },
            {
                "name": "Ramanathapuram",
                "slug": "ramanathapuram"
            },
            {
                "name": "Tamilnadu",
                "slug": "tamilnadu"
            },
            {
                "name": "The Nilgiris",
                "slug": "the-nilgiris"
            },
            {
                "name": "Theni",
                "slug": "theni"
            },
            {
                "name": "Thiruvallur",
                "slug": "thiruvallur"
            },
            {
                "name": "Thiruvarur",
                "slug": "thiruvarur"
            },
            {
                "name": "Thoothukkudi",
                "slug": "thoothukkudi"
            },
            {
                "name": "Tiruchengode",
                "slug": "tiruchengode"
            },
            {
                "name": "Tiruchirappalli",
                "slug": "tiruchirappalli"
            },
            {
                "name": "Viluppuram",
                "slug": "viluppuram"
            },
            {
                "name": "Virudhunagar",
                "slug": "virudhunagar"
            }
        ]
    },
    {
        "name": "Telangana",
        "slug": "telangana",
        "cities": [
            {
                "name": "Hyderabad",
                "slug": "hyderabad",
                "areas": [
                    "Banjara Hills",
                    "Jubilee Hills",
                    "Gachibowli",
                    "Madhapur",
                    "Begumpet"
                ]
            },
            {
                "name": "Warangal",
                "slug": "warangal",
                "areas": [
                    "Hanamkonda",
                    "Kazipet"
                ]
            },
            {
                "name": "Nizamabad",
                "slug": "nizamabad",
                "areas": [
                    "Subhash Chowk",
                    "Pochamma Maidan"
                ]
            },
            {
                "name": "Karimnagar",
                "slug": "karimnagar",
                "areas": [
                    "Manakondur Road",
                    "Vidyanagar"
                ]
            },
            {
                "name": "Secunderabad",
                "slug": "secunderabad"
            },
            {
                "name": "Khammam",
                "slug": "khammam"
            },
            {
                "name": "Adilabad",
                "slug": "adilabad"
            },
            {
                "name": "Nalgonda",
                "slug": "nalgonda"
            },
            {
                "name": "Suryapet",
                "slug": "suryapet"
            },
            {
                "name": "Ramagundam",
                "slug": "ramagundam"
            },
            {
                "name": "Jagtial",
                "slug": "jagtial"
            },
            {
                "name": "Mahbubnagar",
                "slug": "mahbubnagar"
            },
            {
                "name": "Miryalaguda",
                "slug": "miryalaguda"
            },
            {
                "name": "Siddipet",
                "slug": "siddipet"
            },
            {
                "name": "Madhapur",
                "slug": "madhapur"
            },
            {
                "name": "Kondapur",
                "slug": "kondapur"
            },
            {
                "name": "Khairatabad",
                "slug": "khairatabad"
            },
            {
                "name": "Patancheru",
                "slug": "patancheru"
            },
            {
                "name": "Kompally",
                "slug": "kompally"
            },
            {
                "name": "Kapra",
                "slug": "kapra"
            },
            {
                "name": "Ghatkesar",
                "slug": "ghatkesar"
            },
            {
                "name": "Shamshabad",
                "slug": "shamshabad"
            },
            {
                "name": "Mahaboobnagar",
                "slug": "mahaboobnagar"
            },
            {
                "name": "Medak",
                "slug": "medak"
            },
            {
                "name": "Rangareddy",
                "slug": "rangareddy"
            }
        ]
    },
    {
        "name": "Tripura",
        "slug": "tripura",
        "cities": [
            {
                "name": "Agartala",
                "slug": "agartala",
                "areas": [
                    "Battala",
                    "Krishnanagar"
                ]
            },
            {
                "name": "Dharmanagar",
                "slug": "dharmanagar"
            }
        ]
    },
    {
        "name": "Uttar Pradesh",
        "slug": "uttar-pradesh",
        "cities": [
            {
                "name": "Lucknow",
                "slug": "lucknow",
                "areas": [
                    "Hazratganj",
                    "Gomti Nagar",
                    "Aliganj",
                    "Indira Nagar"
                ]
            },
            {
                "name": "Noida",
                "slug": "noida",
                "areas": [
                    "Sector 18",
                    "Sector 62",
                    "Sector 137",
                    "Expressway"
                ]
            },
            {
                "name": "Agra",
                "slug": "agra",
                "areas": [
                    "Taj Ganj",
                    "Sadar Bazaar",
                    "Civil Lines"
                ]
            },
            {
                "name": "Varanasi",
                "slug": "varanasi",
                "areas": [
                    "Assi Ghat",
                    "Sigra",
                    "Lanka"
                ]
            },
            {
                "name": "Kanpur",
                "slug": "kanpur",
                "areas": [
                    "Civil Lines",
                    "Swaroop Nagar",
                    "Kidwai Nagar"
                ]
            },
            {
                "name": "Allahabad",
                "slug": "prayagraj",
                "areas": [
                    "Civil Lines",
                    "George Town"
                ]
            },
            {
                "name": "Meerut",
                "slug": "meerut",
                "areas": [
                    "Sadar",
                    "Shastri Nagar"
                ]
            },
            {
                "name": "Ghaziabad",
                "slug": "ghaziabad",
                "areas": [
                    "Indirapuram",
                    "Vaishali",
                    "Raj Nagar"
                ]
            },
            {
                "name": "Prayagraj",
                "slug": "prayagraj"
            },
            {
                "name": "Bareilly",
                "slug": "bareilly"
            },
            {
                "name": "Gorakhpur",
                "slug": "gorakhpur"
            },
            {
                "name": "Aligarh",
                "slug": "aligarh"
            },
            {
                "name": "Moradabad",
                "slug": "moradabad"
            },
            {
                "name": "Mathura",
                "slug": "mathura"
            },
            {
                "name": "Ayodhya",
                "slug": "ayodhya"
            },
            {
                "name": "Firozabad",
                "slug": "firozabad"
            },
            {
                "name": "Jhansi",
                "slug": "jhansi"
            },
            {
                "name": "Muzaffarnagar",
                "slug": "muzaffarnagar"
            },
            {
                "name": "Saharanpur",
                "slug": "saharanpur"
            },
            {
                "name": "Faizabad",
                "slug": "faizabad"
            },
            {
                "name": "Budaun",
                "slug": "budaun"
            },
            {
                "name": "Rampur",
                "slug": "rampur"
            },
            {
                "name": "Shahjahanpur",
                "slug": "shahjahanpur"
            },
            {
                "name": "Farrukhabad",
                "slug": "farrukhabad"
            },
            {
                "name": "Mau",
                "slug": "mau"
            },
            {
                "name": "Hapur",
                "slug": "hapur"
            },
            {
                "name": "Etawah",
                "slug": "etawah"
            },
            {
                "name": "Mirzapur",
                "slug": "mirzapur"
            },
            {
                "name": "Bulandshahr",
                "slug": "bulandshahr"
            },
            {
                "name": "Sambhal",
                "slug": "sambhal"
            },
            {
                "name": "Amroha",
                "slug": "amroha"
            },
            {
                "name": "Hardoi",
                "slug": "hardoi"
            },
            {
                "name": "Fatehpur",
                "slug": "fatehpur"
            },
            {
                "name": "Raebareli",
                "slug": "raebareli"
            },
            {
                "name": "Orai",
                "slug": "orai"
            },
            {
                "name": "Jalaun",
                "slug": "jalaun"
            },
            {
                "name": "Sitapur",
                "slug": "sitapur"
            },
            {
                "name": "Bahraich",
                "slug": "bahraich"
            },
            {
                "name": "Modinagar",
                "slug": "modinagar"
            },
            {
                "name": "Unnao",
                "slug": "unnao"
            },
            {
                "name": "Jaunpur",
                "slug": "jaunpur"
            },
            {
                "name": "Lakhimpur Kheri",
                "slug": "lakhimpur-kheri"
            },
            {
                "name": "Hathras",
                "slug": "hathras"
            },
            {
                "name": "Banda",
                "slug": "banda"
            },
            {
                "name": "Pilibhit",
                "slug": "pilibhit"
            },
            {
                "name": "Mughalsarai",
                "slug": "mughalsarai"
            },
            {
                "name": "Chandauli",
                "slug": "chandauli"
            },
            {
                "name": "Barabanki",
                "slug": "barabanki"
            },
            {
                "name": "Khurja",
                "slug": "khurja"
            },
            {
                "name": "Gonda",
                "slug": "gonda"
            },
            {
                "name": "Mainpuri",
                "slug": "mainpuri"
            },
            {
                "name": "Lalitpur",
                "slug": "lalitpur"
            },
            {
                "name": "Etah",
                "slug": "etah"
            },
            {
                "name": "Deoria",
                "slug": "deoria"
            },
            {
                "name": "Ujhani",
                "slug": "ujhani"
            },
            {
                "name": "Ghazipur",
                "slug": "ghazipur"
            },
            {
                "name": "Sultanpur",
                "slug": "sultanpur"
            },
            {
                "name": "Azamgarh",
                "slug": "azamgarh"
            },
            {
                "name": "Bijnor",
                "slug": "bijnor"
            },
            {
                "name": "Basti",
                "slug": "basti"
            },
            {
                "name": "Chandausi",
                "slug": "chandausi"
            },
            {
                "name": "Akbarpur",
                "slug": "akbarpur"
            },
            {
                "name": "Ambedkar Nagar",
                "slug": "ambedkar-nagar"
            },
            {
                "name": "Ballia",
                "slug": "ballia"
            },
            {
                "name": "Tanda",
                "slug": "tanda"
            },
            {
                "name": "Greater Noida",
                "slug": "greater-noida"
            },
            {
                "name": "Shikohabad",
                "slug": "shikohabad"
            },
            {
                "name": "Shamli",
                "slug": "shamli"
            },
            {
                "name": "Kasganj",
                "slug": "kasganj"
            },
            {
                "name": "Gomti Nagar",
                "slug": "gomtinagar"
            },
            {
                "name": "Alambagh",
                "slug": "alambagh"
            },
            {
                "name": "Telibagh",
                "slug": "telibagh"
            },
            {
                "name": "Mahanagar",
                "slug": "mahanagar"
            },
            {
                "name": "Indira Nagar",
                "slug": "indira-nagar"
            },
            {
                "name": "Munshipuliya",
                "slug": "munshipuliya"
            },
            {
                "name": "Vikas Nagar",
                "slug": "vikasnagar"
            },
            {
                "name": "Sonbhadra",
                "slug": "sonbhadra"
            },
            {
                "name": "Vrindavan",
                "slug": "vrindavan"
            },
            {
                "name": "Barailly",
                "slug": "barailly"
            },
            {
                "name": "Paryagraj",
                "slug": "paryagraj"
            },
            {
                "name": "Lalganj",
                "slug": "lalganj"
            },
            {
                "name": "Allahabad",
                "slug": "allahabad"
            },
            {
                "name": "Amethi",
                "slug": "amethi"
            },
            {
                "name": "Badaun",
                "slug": "badaun"
            },
            {
                "name": "Baghpat",
                "slug": "baghpat"
            },
            {
                "name": "Chitrakoot",
                "slug": "chitrakoot"
            },
            {
                "name": "Chitrakut",
                "slug": "chitrakut"
            },
            {
                "name": "Gokul",
                "slug": "gokul"
            },
            {
                "name": "Gomti Nagar",
                "slug": "gomti-nagar"
            },
            {
                "name": "Kheri",
                "slug": "kheri"
            },
            {
                "name": "Lakhimpur",
                "slug": "lakhimpur"
            },
            {
                "name": "Merut",
                "slug": "merut"
            },
            {
                "name": "Sahanjhapur",
                "slug": "sahanjhapur"
            },
            {
                "name": "Sarnath",
                "slug": "sarnath"
            }
        ]
    },
    {
        "name": "Uttarakhand",
        "slug": "uttarakhand",
        "cities": [
            {
                "name": "Dehradun",
                "slug": "dehradun",
                "areas": [
                    "Rajpur Road",
                    "Clement Town",
                    "Pacific Mall Area"
                ]
            },
            {
                "name": "Haridwar",
                "slug": "haridwar",
                "areas": [
                    "Har Ki Pauri",
                    "Jwalapur"
                ]
            },
            {
                "name": "Nainital",
                "slug": "nainital",
                "areas": [
                    "Mall Road",
                    "Mallital"
                ]
            },
            {
                "name": "Mussoorie",
                "slug": "mussoorie",
                "areas": [
                    "Mall Road",
                    "Landour"
                ]
            },
            {
                "name": "Rishikesh",
                "slug": "rishikesh"
            },
            {
                "name": "Roorkee",
                "slug": "roorkee"
            },
            {
                "name": "Rudrapur",
                "slug": "rudrapur"
            },
            {
                "name": "Kashipur",
                "slug": "kashipur"
            },
            {
                "name": "Kathgodam",
                "slug": "kathgodam"
            },
            {
                "name": "Mall Road",
                "slug": "mall-road"
            },
            {
                "name": "Kotdwar",
                "slug": "kotdwar"
            },
            {
                "name": "Mssoori",
                "slug": "mssoori"
            },
            {
                "name": "Uttarkashi",
                "slug": "uttarkashi"
            },
            {
                "name": "Haldwani",
                "slug": "haldwani"
            },
            {
                "name": "Almora",
                "slug": "almora"
            },
            {
                "name": "Pithoragarh",
                "slug": "pithoragarh"
            },
            {
                "name": "Rurki",
                "slug": "rurki"
            },
            {
                "name": "Tehri",
                "slug": "tehri"
            },
            {
                "name": "Tihri",
                "slug": "tihri"
            }
        ]
    },
    {
        "name": "West Bengal",
        "slug": "west-bengal",
        "cities": [
            {
                "name": "Kolkata",
                "slug": "kolkata",
                "areas": [
                    "Park Street",
                    "New Town",
                    "Salt Lake",
                    "Rajarhat",
                    "Gariahat"
                ]
            },
            {
                "name": "Howrah",
                "slug": "howrah",
                "areas": [
                    "Shibpur",
                    "Domjur"
                ]
            },
            {
                "name": "Durgapur",
                "slug": "durgapur",
                "areas": [
                    "Benachity",
                    "Bidhannagar"
                ]
            },
            {
                "name": "Asansol",
                "slug": "asansol",
                "areas": [
                    "Burnpur Road",
                    "GT Road"
                ]
            },
            {
                "name": "Siliguri",
                "slug": "siliguri",
                "areas": [
                    "Hill Cart Road",
                    "Sevoke Road"
                ]
            },
            {
                "name": "Bardhaman",
                "slug": "bardhaman"
            },
            {
                "name": "Kharagpur",
                "slug": "kharagpur"
            },
            {
                "name": "Malda",
                "slug": "malda"
            },
            {
                "name": "Haldia",
                "slug": "haldia"
            },
            {
                "name": "Darjeeling",
                "slug": "darjeeling"
            },
            {
                "name": "Jalpaiguri",
                "slug": "jalpaiguri"
            },
            {
                "name": "Murshidabad",
                "slug": "murshidabad"
            },
            {
                "name": "Barasat",
                "slug": "barasat"
            },
            {
                "name": "Barrackpore",
                "slug": "barrackpore"
            },
            {
                "name": "Hooghly",
                "slug": "hooghly"
            },
            {
                "name": "Krishnanagar",
                "slug": "krishnanagar"
            },
            {
                "name": "Medinipur",
                "slug": "medinipur"
            },
            {
                "name": "Baharampur",
                "slug": "baharampur"
            },
            {
                "name": "Habra",
                "slug": "habra"
            },
            {
                "name": "Shantipur",
                "slug": "shantipur"
            },
            {
                "name": "Dankuni",
                "slug": "dankuni"
            },
            {
                "name": "Dhulian",
                "slug": "dhulian"
            },
            {
                "name": "Ranaghat",
                "slug": "ranaghat"
            },
            {
                "name": "Raiganj",
                "slug": "raiganj"
            },
            {
                "name": "Garia",
                "slug": "garia"
            },
            {
                "name": "Rajarhat",
                "slug": "rajarhat"
            },
            {
                "name": "Khardaha",
                "slug": "khardaha"
            },
            {
                "name": "Baruipur",
                "slug": "baruipur"
            },
            {
                "name": "Dum Dum",
                "slug": "dum-dum"
            },
            {
                "name": "Budge Budge",
                "slug": "budge-budge"
            },
            {
                "name": "Bidhan Nagar",
                "slug": "bidhan-nagar"
            },
            {
                "name": "Balurghat",
                "slug": "balurghat"
            },
            {
                "name": "Basirhat",
                "slug": "basirhat"
            },
            {
                "name": "Bankura",
                "slug": "bankura"
            },
            {
                "name": "Chakdaha",
                "slug": "chakdaha"
            },
            {
                "name": "Purulia",
                "slug": "purulia"
            },
            {
                "name": "Jangipur",
                "slug": "jangipur"
            },
            {
                "name": "Bangaon",
                "slug": "bangaon"
            },
            {
                "name": "Cooch Behar",
                "slug": "cooch-behar"
            },
            {
                "name": "North 24 Parganas",
                "slug": "north-24-parganas"
            },
            {
                "name": "South 24 Parganas",
                "slug": "south-24-parganas"
            },
            {
                "name": "Baranagar",
                "slug": "baranagar"
            },
            {
                "name": "Bhatpara",
                "slug": "bhatpara"
            },
            {
                "name": "Halisahar",
                "slug": "halisahar"
            },
            {
                "name": "Kamarhati",
                "slug": "kamarhati"
            },
            {
                "name": "Kanchrapara",
                "slug": "kanchrapara"
            },
            {
                "name": "Uluberia",
                "slug": "uluberia"
            },
            {
                "name": "Baidyabati",
                "slug": "baidyabati"
            },
            {
                "name": "Bhadreswar",
                "slug": "bhadreswar"
            },
            {
                "name": "Bansberia",
                "slug": "bansberia"
            },
            {
                "name": "Champdani",
                "slug": "champdani"
            },
            {
                "name": "Uttarpara",
                "slug": "uttarpara"
            },
            {
                "name": "Titagarh",
                "slug": "titagarh"
            },
            {
                "name": "Digha",
                "slug": "digha"
            },
            {
                "name": "Alipurduar",
                "slug": "alipurduar"
            },
            {
                "name": "Bolpur",
                "slug": "bolpur"
            },
            {
                "name": "Dakshin Dinajpur",
                "slug": "dakshin-dinajpur"
            },
            {
                "name": "Haora",
                "slug": "haora"
            },
            {
                "name": "Hugli",
                "slug": "hugli"
            },
            {
                "name": "Kalimpong",
                "slug": "kalimpong"
            },
            {
                "name": "Koch Bihar",
                "slug": "koch-bihar"
            },
            {
                "name": "Maldah",
                "slug": "maldah"
            },
            {
                "name": "Nadia",
                "slug": "nadia"
            },
            {
                "name": "North Twenty Four Parganas",
                "slug": "north-twenty-four-parganas"
            },
            {
                "name": "Paschim Medinipur",
                "slug": "paschim-medinipur"
            },
            {
                "name": "Purba Medinipur",
                "slug": "purba-medinipur"
            },
            {
                "name": "Puruliya",
                "slug": "puruliya"
            },
            {
                "name": "Shantiniketan",
                "slug": "shantiniketan"
            },
            {
                "name": "South Twenty Four Parganas",
                "slug": "south-twenty-four-parganas"
            },
            {
                "name": "Uttar Dinajpur",
                "slug": "uttar-dinajpur"
            }
        ]
    },
    {
        "name": "Delhi NCR",
        "slug": "delhi-ncr",
        "cities": [
            {
                "name": "Delhi",
                "slug": "delhi",
                "areas": [
                    "Connaught Place",
                    "South Extension",
                    "Karol Bagh",
                    "Lajpat Nagar",
                    "Dwarka",
                    "Saket"
                ]
            },
            {
                "name": "New Delhi",
                "slug": "new-delhi",
                "areas": [
                    "Rajpath",
                    "Lodhi Road",
                    "Khan Market"
                ]
            },
            {
                "name": "Dwarka",
                "slug": "dwarka",
                "areas": [
                    "Sector 10",
                    "Sector 12",
                    "Sector 23"
                ]
            },
            {
                "name": "Rohini",
                "slug": "rohini",
                "areas": [
                    "Sector 7",
                    "Sector 9",
                    "Pitampura"
                ]
            },
            {
                "name": "Wazirabad",
                "slug": "wazirabad"
            },
            {
                "name": "Tis Hazari",
                "slug": "tis-hazari"
            },
            {
                "name": "Vasant Kunj",
                "slug": "vasant-kunj"
            },
            {
                "name": "Vasant Vihar",
                "slug": "vasant-vihar"
            },
            {
                "name": "Connaught Place",
                "slug": "connaught-place"
            },
            {
                "name": "Saket",
                "slug": "saket"
            },
            {
                "name": "Uttam Nagar",
                "slug": "uttam-nagar"
            },
            {
                "name": "Aerocity",
                "slug": "aerocity"
            },
            {
                "name": "Mahipalpur",
                "slug": "mahipalpur"
            },
            {
                "name": "Nehru Place",
                "slug": "nehru-place"
            },
            {
                "name": "Laxmi Nagar",
                "slug": "laxmi-nagar"
            },
            {
                "name": "Pitampura",
                "slug": "pitampura"
            },
            {
                "name": "Chattarpur",
                "slug": "chattarpur"
            },
            {
                "name": "Daryaganj",
                "slug": "daryaganj"
            },
            {
                "name": "Paharganj",
                "slug": "paharganj"
            },
            {
                "name": "Karol Bagh",
                "slug": "karol-bagh"
            },
            {
                "name": "Lajpat Nagar",
                "slug": "lajpat-nagar"
            },
            {
                "name": "Munirka",
                "slug": "munirka"
            },
            {
                "name": "Paschim Vihar",
                "slug": "paschim-vihar"
            },
            {
                "name": "Anand Lok",
                "slug": "anand-lok"
            },
            {
                "name": "Defence Colony",
                "slug": "defence-colony"
            },
            {
                "name": "Golf Links",
                "slug": "golf-links"
            },
            {
                "name": "Greater Kailash",
                "slug": "greater-kailash"
            },
            {
                "name": "Green Park",
                "slug": "green-park"
            },
            {
                "name": "Hauz Khas",
                "slug": "hauz-khas"
            },
            {
                "name": "Janakpuri",
                "slug": "janakpuri"
            },
            {
                "name": "Jor Bagh",
                "slug": "jor-bagh"
            },
            {
                "name": "Malviya Nagar",
                "slug": "malviya-nagar"
            },
            {
                "name": "Model Town",
                "slug": "model-town"
            },
            {
                "name": "Moti Bagh",
                "slug": "moti-bagh"
            },
            {
                "name": "Shahdara",
                "slug": "shahdara"
            },
            {
                "name": "Shalimar Bagh",
                "slug": "shalimar-bagh"
            },
            {
                "name": "Adarsh Nagar",
                "slug": "adarsh-nagar"
            },
            {
                "name": "Ashok Vihar",
                "slug": "ashok-vihar"
            },
            {
                "name": "Narela",
                "slug": "narela"
            },
            {
                "name": "Gulabi Bagh",
                "slug": "gulabi-bagh"
            },
            {
                "name": "Kamla Nagar",
                "slug": "kamla-nagar"
            },
            {
                "name": "Kashmiri Gate",
                "slug": "kashmiri-gate"
            },
            {
                "name": "Sadar Bazar",
                "slug": "sadar-bazar"
            },
            {
                "name": "Sarai Rohilla",
                "slug": "sarai-rohilla"
            },
            {
                "name": "Shakti Nagar",
                "slug": "shakti-nagar"
            },
            {
                "name": "Timarpur",
                "slug": "timarpur"
            },
            {
                "name": "Dilshad Garden",
                "slug": "dilshad-garden"
            },
            {
                "name": "Chandni Chowk",
                "slug": "chandni-chowk"
            },
            {
                "name": "Mori Gate",
                "slug": "mori-gate"
            },
            {
                "name": "Barakhamba Road",
                "slug": "barakhamba-road"
            },
            {
                "name": "Mayur Vihar",
                "slug": "mayur-vihar"
            },
            {
                "name": "Mehrauli",
                "slug": "mehrauli"
            },
            {
                "name": "Safdarjung Enclave",
                "slug": "safdarjung-enclave"
            },
            {
                "name": "Sangam Vihar",
                "slug": "sangam-vihar"
            },
            {
                "name": "South Extension",
                "slug": "south-extension"
            },
            {
                "name": "Keshav Puram",
                "slug": "keshav-puram"
            },
            {
                "name": "Shastri Nagar",
                "slug": "shastri-nagar"
            },
            {
                "name": "Azadpur",
                "slug": "azadpur"
            },
            {
                "name": "Mukherjee Nagar",
                "slug": "mukherjee-nagar"
            },
            {
                "name": "Majnu Ka Tilla",
                "slug": "majnu-ka-tilla"
            },
            {
                "name": "Shastri Park",
                "slug": "shastri-park"
            },
            {
                "name": "Bhikaji Cama Place",
                "slug": "bhikaji-cama-place"
            },
            {
                "name": "Chanakyapuri",
                "slug": "chanakyapuri"
            },
            {
                "name": "Gole Market",
                "slug": "gole-market"
            },
            {
                "name": "Rajendra Nagar",
                "slug": "rajendra-nagar"
            },
            {
                "name": "Patel Chowk",
                "slug": "patel-chowk"
            },
            {
                "name": "Rajiv Chowk",
                "slug": "rajiv-chowk"
            },
            {
                "name": "Pragati Maidan",
                "slug": "pragati-maidan"
            },
            {
                "name": "Rajendra Place",
                "slug": "rajendra-place"
            },
            {
                "name": "Akshardham",
                "slug": "akshardham"
            },
            {
                "name": "Patparganj",
                "slug": "patparganj"
            },
            {
                "name": "Nirman Vihar",
                "slug": "nirman-vihar"
            },
            {
                "name": "Preet Vihar",
                "slug": "preet-vihar"
            },
            {
                "name": "Anand Vihar",
                "slug": "anand-vihar"
            },
            {
                "name": "Kailash Colony",
                "slug": "kailash-colony"
            },
            {
                "name": "Maharani Bagh",
                "slug": "maharani-bagh"
            },
            {
                "name": "RK Puram",
                "slug": "rk-puram"
            },
            {
                "name": "Sarojini Nagar",
                "slug": "sarojini-nagar"
            },
            {
                "name": "Khan Market",
                "slug": "khan-market"
            },
            {
                "name": "Sarai Kale Khan",
                "slug": "sarai-kale-khan"
            },
            {
                "name": "Jangpura",
                "slug": "jangpura"
            },
            {
                "name": "Jasola",
                "slug": "jasola"
            },
            {
                "name": "New Friends Colony",
                "slug": "new-friends-colony"
            },
            {
                "name": "Govindpuri",
                "slug": "govindpuri"
            },
            {
                "name": "Okhla",
                "slug": "okhla"
            },
            {
                "name": "Sarita Vihar",
                "slug": "sarita-vihar"
            },
            {
                "name": "Tughlakabad",
                "slug": "tughlakabad"
            },
            {
                "name": "Badarpur",
                "slug": "badarpur"
            },
            {
                "name": "Dhaula Kuan",
                "slug": "dhaula-kuan"
            },
            {
                "name": "Ghitorni",
                "slug": "ghitorni"
            },
            {
                "name": "Naraina",
                "slug": "naraina"
            },
            {
                "name": "Palam",
                "slug": "palam"
            },
            {
                "name": "Kalkaji",
                "slug": "kalkaji"
            },
            {
                "name": "Ashok Nagar",
                "slug": "ashok-nagar"
            },
            {
                "name": "Ramesh Nagar",
                "slug": "ramesh-nagar"
            },
            {
                "name": "Subhash Nagar",
                "slug": "subhash-nagar"
            },
            {
                "name": "Nawada",
                "slug": "nawada"
            },
            {
                "name": "Kirti Nagar",
                "slug": "kirti-nagar"
            },
            {
                "name": "Mayapuri",
                "slug": "mayapuri"
            },
            {
                "name": "Moti Nagar",
                "slug": "moti-nagar"
            },
            {
                "name": "Patel Nagar",
                "slug": "patel-nagar"
            },
            {
                "name": "Punjabi Bagh",
                "slug": "punjabi-bagh"
            },
            {
                "name": "Rajouri Garden",
                "slug": "rajouri-garden"
            },
            {
                "name": "Tilak Nagar",
                "slug": "tilak-nagar"
            },
            {
                "name": "Vikaspuri",
                "slug": "vikaspuri"
            },
            {
                "name": "Hari Nagar",
                "slug": "hari-nagar"
            },
            {
                "name": "Yamuna Vihar",
                "slug": "yamuna-vihar"
            },
            {
                "name": "Vivek Vihar",
                "slug": "vivek-vihar"
            },
            {
                "name": "Najafgarh",
                "slug": "najafgarh"
            },
            {
                "name": "Dwarka Mor",
                "slug": "dwarka-mor"
            },
            {
                "name": "Qutub Minar",
                "slug": "qutub-minar"
            },
            {
                "name": "Panchsheel Vihar",
                "slug": "panchsheel-vihar"
            },
            {
                "name": "Ganesh Nagar",
                "slug": "ganesh-nagar"
            },
            {
                "name": "Bawana",
                "slug": "bawana"
            },
            {
                "name": "GB Road",
                "slug": "gb-road"
            },
            {
                "name": "Alipur",
                "slug": "alipur"
            },
            {
                "name": "Central Delhi",
                "slug": "central-delhi"
            },
            {
                "name": "Connaught Palace (CP)",
                "slug": "connaught-palace-cp"
            },
            {
                "name": "East Delhi",
                "slug": "east-delhi"
            },
            {
                "name": "Gaziabad",
                "slug": "gaziabad"
            },
            {
                "name": "Jankpuri",
                "slug": "jankpuri"
            },
            {
                "name": "Kapas Hera",
                "slug": "kapas-hera"
            },
            {
                "name": "Karolbagh",
                "slug": "karolbagh"
            },
            {
                "name": "Krishna Nagar",
                "slug": "krishna-nagar"
            },
            {
                "name": "North Delhi",
                "slug": "north-delhi"
            },
            {
                "name": "Old Delhi",
                "slug": "old-delhi"
            },
            {
                "name": "Rajokri",
                "slug": "rajokri"
            },
            {
                "name": "Sant Nagar",
                "slug": "sant-nagar"
            },
            {
                "name": "South Delhi",
                "slug": "south-delhi"
            },
            {
                "name": "Vikas Puri",
                "slug": "vikas-puri"
            },
            {
                "name": "West Delhi",
                "slug": "west-delhi"
            }
        ]
    },
    {
        "name": "Chandigarh",
        "slug": "chandigarh",
        "cities": [
            {
                "name": "Manimajra",
                "slug": "manimajra"
            }
        ]
    },
    {
        "name": "Dadra and Nagar Haveli",
        "slug": "dadra-nagar-haveli",
        "cities": [
            {
                "name": "Amli",
                "slug": "amli"
            },
            {
                "name": "Silvassa",
                "slug": "silvassa"
            },
            {
                "name": "Daman",
                "slug": "daman"
            }
        ]
    },
    {
        "name": "Jammu and Kashmir",
        "slug": "jammu-kashmir",
        "cities": [
            {
                "name": "Jammu",
                "slug": "jammu"
            },
            {
                "name": "Srinagar",
                "slug": "srinagar"
            },
            {
                "name": "Anantnag",
                "slug": "anantnag"
            },
            {
                "name": "Baramulla",
                "slug": "baramulla"
            },
            {
                "name": "Gulmarg",
                "slug": "gulmarg"
            },
            {
                "name": "Pahalgam",
                "slug": "pahalgam"
            },
            {
                "name": "Sonamarg",
                "slug": "sonamarg"
            },
            {
                "name": "Kashmir",
                "slug": "kashmir"
            },
            {
                "name": "Katra",
                "slug": "katra"
            },
            {
                "name": "Jammu And Kashmir",
                "slug": "jammu-and-kashmir"
            }
        ]
    },
    {
        "name": "Ladakh",
        "slug": "ladakh",
        "cities": [
            {
                "name": "Leh",
                "slug": "leh"
            }
        ]
    },
    {
        "name": "Lakshadweep",
        "slug": "lakshadweep",
        "cities": [
            {
                "name": "Kavaratti",
                "slug": "kavaratti"
            }
        ]
    },
    {
        "name": "Puducherry",
        "slug": "puducherry",
        "cities": [
            {
                "name": "Pondicherry",
                "slug": "pondicherry"
            },
            {
                "name": "Karaikal",
                "slug": "karaikal"
            },
            {
                "name": "Mahe",
                "slug": "mahe"
            },
            {
                "name": "Yanam",
                "slug": "yanam"
            }
        ]
    },
    {
        "name": "Andaman and Nicobar Islands",
        "slug": "andaman-nicobar-islands",
        "cities": [
            {
                "name": "Port Blair",
                "slug": "port-blair"
            }
        ]
    }
];
