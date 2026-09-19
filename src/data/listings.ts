export interface Listing {
  id: string;
  name: string;
  age: number;
  city: string;
  description: string;
  emoji: string;
  image?: string;
  images?: string[];              // Multiple photos for gallery slider
  tier: 'diamond' | 'gold' | 'silver' | 'online';
  rating?: number;
  reviewCount?: number;
  verified?: boolean;
  hasVideo?: boolean;
  isNew?: boolean;
  membersOnly?: boolean;
  isOnline?: boolean;
  isVip?: boolean;
  // Profile stats
  totalViews?: number;
  favoriteCount?: number;
  registered?: string;            // e.g. "3 months ago"
  lastSeen?: string;              // e.g. "2 hours ago"
  // Physical attributes
  slogan?: string;
  nationality?: string;
  sex?: string;
  hairColor?: string;
  hairLength?: string;
  eyeColor?: string;
  height?: number;                // cm
  weight?: number;                // kg
  bodyType?: string;
  tattoos?: string;
  piercings?: string;
  pubicHair?: string;
  smoking?: string;
  alcohol?: string;
  sexual?: string;
  ethnicity?: string;
  forWhom?: string[];             // ["Men","Women","Couples","Trans"]
  clothingSize?: string;
  languages?: { lang: string; level: number }[];
  // Availability & contact
  profileType?: string;           // "Alone" | "Agency"
  outcall?: string;
  contactPhone?: string;
  contactWhatsapp?: string;
  contactEmail?: string;
  contactSms?: string;
  available?: string;             // "WhatsApp" | "Phone" | "SMS"
  sexShowOnCam?: boolean;
  // Pricing
  pricing?: {
    "30min"?: number;
    "1hour"?: number;
    "2hours"?: number;
    "dinner"?: number;
    "night"?: number;
    currency?: string;
  };
  // Services offered
  services?: string[];
  // Opening hours per day
  hours?: {
    monday?: string;
    tuesday?: string;
    wednesday?: string;
    thursday?: string;
    friday?: string;
    saturday?: string;
    sunday?: string;
  };
  // Location
  places?: string[];              // ["Base city: Paris", "Outcall: Hotel and home visits"]
}


export const cities = [
  // Tier-1 Metros
  { name: "Mumbai", count: 3241 },
  { name: "Delhi / NCR", count: 2987 },
  { name: "Bengaluru", count: 2103 },
  { name: "Kolkata", count: 1456 },
  { name: "Hyderabad", count: 1289 },
  { name: "Chennai", count: 1105 },
  // Tier-2 (Growing)
  { name: "Pune", count: 876 },
  { name: "Goa", count: 754 },
  { name: "Ahmedabad", count: 612 },
  { name: "Jaipur", count: 589 },
  { name: "Chandigarh", count: 431 },
  { name: "Nagpur", count: 387 },
  // Tourist / Party
  { name: "Manali", count: 298 },
  { name: "Shimla", count: 243 },
  { name: "Udaipur", count: 312 },
  // More metros
  { name: "Lucknow", count: 345 },
  { name: "Surat", count: 289 },
  { name: "Bhopal", count: 201 },
  { name: "Indore", count: 234 },
  { name: "Patna", count: 178 },
  { name: "Bhubaneswar", count: 156 },
  { name: "Coimbatore", count: 198 },
  { name: "Kochi", count: 267 },
  { name: "Visakhapatnam", count: 187 },
  { name: "Amritsar", count: 142 },
  { name: "Varanasi", count: 163 },
  { name: "Meerut", count: 121 },
  { name: "Agra", count: 189 },
];


const indianModelPhotos = [
  "/models/202512-09-182608_KZ-0.webp",
  "/models/Goa-Call-Girls - Copy.webp",
  "/models/imageye___-_imgi_10_kho-63890990859307-2103213618.webp",
  "/models/imageye___-_imgi_10_kho-63895522050652-2103213618.webp",
  "/models/imageye___-_imgi_11_kho-63887663558331-2103213618.webp",
  "/models/imageye___-_imgi_11_kho-63893140292902-2103213618.webp",
  "/models/imageye___-_imgi_11_kho-63895522016613-2103213618.webp",
  "/models/imageye___-_imgi_11_kho-63900032726581-2103213618.webp",
  "/models/imageye___-_imgi_12_kho-63883631619394-2103213618.webp",
  "/models/imageye___-_imgi_12_kho-63887302132768-2103213618.webp",
  "/models/imageye___-_imgi_13_jiya-patel-kolkata-kolkata-myself-jiya-pc-1764491434-1.webp",
  "/models/imageye___-_imgi_13_kho-63890682968191-2103213618.webp",
  "/models/imageye___-_imgi_13_kho-63892748872658-2103213618.webp",
  "/models/imageye___-_imgi_13_kho-63895514152488-2103213618.webp",
  "/models/imageye___-_imgi_14_kho-63883612435209-2103213618.webp",
  "/models/imageye___-_imgi_14_kho-63887126712213-2103213618.webp",
  "/models/imageye___-_imgi_14_kho-63890674611730-2103213618.webp",
  "/models/imageye___-_imgi_14_kho-63892697861066-2103213618.webp",
  "/models/imageye___-_imgi_14_kho-63895277278591-2103213618.webp",
  "/models/imageye___-_imgi_14_monika-want-to-meeting-pc-1755835927-1.webp",
  "/models/imageye___-_imgi_14_riya-call-girl-service-independent-my-self-pc-1764416913-1.webp",
  "/models/imageye___-_imgi_15_kajal-roy-hii-call-me-pc-1764520779-1.webp",
  "/models/imageye___-_imgi_15_kho-63887046177734-2103213618.webp",
  "/models/imageye___-_imgi_15_kho-63892594338143-2103213618.webp",
  "/models/imageye___-_imgi_15_kho-63895126356241-2103213618.webp",
  "/models/imageye___-_imgi_15_riya-kolkata-call-pc-1758475721-1.webp",
  "/models/imageye___-_imgi_15_sweta-singh-low-price-only-pc-1755777285-1.webp",
  "/models/imageye___-_imgi_16_kho-63883538397143-2103213618.webp",
  "/models/imageye___-_imgi_16_kho-63886796000826-2103213618.webp",
  "/models/imageye___-_imgi_16_kho-63890350410835-2103213618.webp",
  "/models/imageye___-_imgi_16_kho-63892428821262-2103213618.webp",
  "/models/imageye___-_imgi_16_kho-63894243736199-2103213618.webp",
  "/models/imageye___-_imgi_16_monika-want-to-meeting-pc-1754795290-1.webp",
  "/models/imageye___-_imgi_16_neha-kumari-kolkata-call-girl-pc-1757904380-1.webp",
  "/models/imageye___-_imgi_17_kho-63883360870433-2103213618.webp",
  "/models/imageye___-_imgi_17_kho-63886712570219-2103213618.webp",
  "/models/imageye___-_imgi_17_kho-63892414349779-2103213618.webp",
  "/models/imageye___-_imgi_17_kho-63893916760080-2103213618.webp",
  "/models/imageye___-_imgi_17_kolkata-low-price-9065298724vip-pc-1758222592-1.webp",
  "/models/imageye___-_imgi_17_sonali-independent-no-online-payment-pc-1763838625-1.webp",
  "/models/imageye___-_imgi_18_kho-63883276216331-2103213618.webp",
  "/models/imageye___-_imgi_18_kho-63886696907602-2103213618.webp",
  "/models/imageye___-_imgi_18_kho-63889980333588-2103213618.webp",
  "/models/imageye___-_imgi_18_kho-63892149671738-2103213618.webp",
  "/models/imageye___-_imgi_18_shamya-kolkata-call-girl-pc-1758569548-1.webp",
  "/models/imageye___-_imgi_18_suman-post-date-23-pc-1753517670-1.webp",
  "/models/imageye___-_imgi_18_udaipur-available-now-trusted-pc-1763800178-1.webp",
  "/models/imageye___-_imgi_19_kajal-kumari-udaipur-2hr-pc-1763719782-1.webp",
  "/models/imageye___-_imgi_19_kho-63883240432830-2103213618.webp",
  "/models/imageye___-_imgi_19_kho-63886374368408-2103213618.webp",
  "/models/imageye___-_imgi_19_kho-63892085442835-2103213618.webp",
  "/models/imageye___-_imgi_20_anjali-kumari-only-sil-pack-pc-1752648457-1.webp",
  "/models/imageye___-_imgi_20_anu-kumari-full-cash-pc-1763019110-1.webp",
  "/models/imageye___-_imgi_20_kho-63886004491372-2103213618.webp",
  "/models/imageye___-_imgi_20_kho-63889514060909-2103213618.webp",
  "/models/imageye___-_imgi_20_kho-63892084039545-2103213618.webp",
  "/models/imageye___-_imgi_20_kho-63895536292352-2103213618.webp",
  "/models/imageye___-_imgi_20_puja-kolkata-vip-escort-pc-1765189004-1.webp",
  "/models/imageye___-_imgi_21_kho-63882767052155-2103213618.webp",
  "/models/imageye___-_imgi_21_kho-63885797875406-2103213618.webp",
  "/models/imageye___-_imgi_21_kho-63889499807447-2103213618.webp",
  "/models/imageye___-_imgi_21_kho-63892067881573-2103213618.webp",
  "/models/imageye___-_imgi_21_kho-63896819981354-2103213618.webp",
  "/models/imageye___-_imgi_21_muskan-8340641975-call-girl-pc-1762688157-1.webp",
  "/models/imageye___-_imgi_22_jyoti-full-cash-payment-pc-1762330899-1.webp",
  "/models/imageye___-_imgi_22_kajal-please-whatsapp-reply-pc-1751447230-1.webp",
  "/models/imageye___-_imgi_22_kho-63882727861519-2103213618.webp",
  "/models/imageye___-_imgi_22_kho-63885770551460-2103213618.webp",
  "/models/imageye___-_imgi_22_kho-63889475386727-2103213618.webp",
  "/models/imageye___-_imgi_22_kho-63891912145089-2103213618.webp",
  "/models/imageye___-_imgi_22_kho-63895533571372-2103213618.webp",
  "/models/imageye___-_imgi_23_gmfp2zmbqnb6pcyloiad-pc.webp",
  "/models/imageye___-_imgi_23_kho-63882431496633-2103213618.webp",
  "/models/imageye___-_imgi_23_kho-63895532478024-2103213618.webp",
  "/models/imageye___-_imgi_24_kho-63898577302557-2103213618 (1).webp",
  "/models/imageye___-_imgi_24_kho-63898577302557-2103213618.webp",
  "/models/imageye___-_imgi_25_kho-63895531163820-2103213618.webp",
  "/models/imageye___-_imgi_26_kho-63895528959336-2103213618.webp",
  "/models/imageye___-_imgi_27_kho-63896940011652-2103213618.webp",
  "/models/imageye___-_imgi_29_kho-63898613298939-2103213618.webp",
  "/models/imageye___-_imgi_3_5b79ec_615d488dbf7346f88878ce303da38776~mv2.webp",
  "/models/imageye___-_imgi_3_celebrity-escorts-india-919120202066-bollywood-film-pc-1761989018-1.webp",
  "/models/imageye___-_imgi_3_juli-call-julie-pc-1763533452-1.webp",
  "/models/imageye___-_imgi_3_kho-63885144310882-2103213618.webp",
  "/models/imageye___-_imgi_3_kho-63893801930197-2103213618.webp",
  "/models/imageye___-_imgi_3_kho-63900206264721-2103213618.webp",
  "/models/imageye___-_imgi_3_priya-sharma-udaipur-cash-payment-pc-1761125084-1.webp",
  "/models/imageye___-_imgi_4_aHR0cHM6Ly93cml0ZXVwY2FmZS5jb20vZGF0YS9wb3N0LzE1MDU1MjAvYmQ3ZDY2OTdjNDYxNDg0NDA1MGYxNzNmZGNmNDA2NDYuanBnLndlYnA.webp",
  "/models/imageye___-_imgi_5_udaipur-call-7870550302-cash-pc-1765146604-1.webp",
  "/models/imageye___-_imgi_6_kho-63891469849807-2103213618.webp",
  "/models/imageye___-_imgi_6_kho-63893574024229-2103213618.webp",
  "/models/imageye___-_imgi_6_kho-63895524008129-2103213618.webp",
  "/models/imageye___-_imgi_6_nisha-highprofile-girls-pc-1761743509-1.webp",
  "/models/imageye___-_imgi_6_riya-patel-7487850699-high-quality-pc-1764008249-1.webp",
  "/models/imageye___-_imgi_7_kho-63884666037841-2103213618.webp",
  "/models/imageye___-_imgi_7_kho-63888075872418-2103213618.webp",
  "/models/imageye___-_imgi_7_kho-63891114859036-2103213618.webp",
  "/models/imageye___-_imgi_7_kho-63893525961722-2103213618.webp",
  "/models/imageye___-_imgi_7_kho-63895523965330-2103213618.webp",
  "/models/imageye___-_imgi_7_kho-63900194962452-2103213618.webp",
  "/models/imageye___-_imgi_8_kho-63888006675675-2103213618.webp",
  "/models/imageye___-_imgi_8_kho-63891114577414-2103213618.webp",
  "/models/imageye___-_imgi_8_kho-63893217581087-2103213618.webp",
  "/models/imageye___-_imgi_8_kho-63895537454076-2103213618.webp",
  "/models/imageye___-_imgi_8_mifqe5wdccmt9mj0sqmu-pc.webp",
  "/models/imageye___-_imgi_8_puja-call-girl-pc-1765125057-1.webp",
  "/models/imageye___-_imgi_9_kho-63884383717948-2103213618.webp",
  "/models/imageye___-_imgi_9_kho-63887748329281-2103213618.webp",
  "/models/imageye___-_imgi_9_kho-63891011281775-2103213618.webp",
  "/models/imageye___-_imgi_9_kho-63895523683590-2103213618.webp",
  "/models/imageye___-_imgi_9_kho-63895952144485-2103213618.webp",
  "/models/imageye___-_imgi_9_udaipur-cash-payment-only-pc-1763368416-1.webp",
  "/models/imgi_11_soniya.webp",
  "/models/imgi_12_5898716838927984280.webp",
  "/models/imgi_13_4249016833091538924.webp",
  "/models/imgi_190_bvvTSlRcOtnLAwN7RvdRknFpQLZaaQj2oz7Bkd2o.webp",
  "/models/imgi_2_Jaipur-Escort-Service-8.webp",
  "/models/imgi_36_PHOTO-2024-09-30-13-07-46.webp",
  "/models/imgi_3_Jaipur-Escort-Service-2.webp",
  "/models/model5_imgi100391_baa953e1.webp",
  "/models/model5_imgi101392_dfee831b.webp",
  "/models/model5_imgi102393_92cb02e2.webp",
  "/models/model5_imgi103394_787864e8.webp",
  "/models/model5_imgi104395_a512d42a.webp",
  "/models/model5_imgi105396_95410c5f.webp",
  "/models/model5_imgi106397_b5eb9c45.webp",
  "/models/model5_imgi107398_4d84f582.webp",
  "/models/model5_imgi108399_c1a6c376.webp",
  "/models/model5_imgi109400_71941f88.webp",
  "/models/model5_imgi110401_b41f5deb.webp",
  "/models/model5_imgi111402_94030d31.webp",
  "/models/model5_imgi112403_a8aa8b3f.webp",
  "/models/model5_imgi11302_24ea4d73.webp",
  "/models/model5_imgi113404_1b2b6ace.webp",
  "/models/model5_imgi114405_a02aa3db.webp",
  "/models/model5_imgi115406_c2fe1459.webp",
  "/models/model5_imgi116407_ff6a6149.webp",
  "/models/model5_imgi117408_1a109672.webp",
  "/models/model5_imgi120411_d17e44e7.webp",
  "/models/model5_imgi121412_982c2db6.webp",
  "/models/model5_imgi122413_f96a27c4.webp",
  "/models/model5_imgi123414_788b93b1.webp",
  "/models/model5_imgi124415_aa64fd6d.webp",
  "/models/model5_imgi125416_12ae5a2a.webp",
  "/models/model5_imgi126nimage16_1abe2090.webp",
  "/models/model5_imgi127nimage19_b34fd7d0.webp",
  "/models/model5_imgi131g6_e86c5018.webp",
  "/models/model5_imgi132g7_b7c88ac1.webp",
  "/models/model5_imgi13304_75bed713.webp",
  "/models/model5_imgi133g8_edcec7cb.webp",
  "/models/model5_imgi134417_d44daa22.webp",
  "/models/model5_imgi135418_09dfd0fe.webp",
  "/models/model5_imgi136419_c5b2933a.webp",
  "/models/model5_imgi137420_8a86e7ab.webp",
  "/models/model5_imgi138421_123d31c7.webp",
  "/models/model5_imgi139422_a263c1ba.webp",
  "/models/model5_imgi140423_77343724.webp",
  "/models/model5_imgi141424_431cce42.webp",
  "/models/model5_imgi142425_f8baae8e.webp",
  "/models/model5_imgi14305_63235ff3.webp",
  "/models/model5_imgi145428_435fc5e6.webp",
  "/models/model5_imgi146429_626d4553.webp",
  "/models/model5_imgi147430_2e7d2545.webp",
  "/models/model5_imgi148431_02fe4f8d.webp",
  "/models/model5_imgi149432_9bcc9060.webp",
  "/models/model5_imgi150433_0bffd7a6.webp",
  "/models/model5_imgi151434_2d71a0cd.webp",
  "/models/model5_imgi152435_bc131997.webp",
  "/models/model5_imgi15306_3f0dff95.webp",
  "/models/model5_imgi153436_9933a031.webp",
  "/models/model5_imgi154437_223632d9.webp",
  "/models/model5_imgi155438_b9c5e0c2.webp",
  "/models/model5_imgi156439_3eca4195.webp",
  "/models/model5_imgi157440_782c4b59.webp",
  "/models/model5_imgi158441_d7e81f6c.webp",
  "/models/model5_imgi159442_0cbd25f2.webp",
  "/models/model5_imgi160443_0f951de1.webp",
  "/models/model5_imgi161444_a7603438.webp",
  "/models/model5_imgi162445_247df857.webp",
  "/models/model5_imgi16307_5af699d5.webp",
  "/models/model5_imgi163446_3d97787d.webp",
  "/models/model5_imgi164447_e003a98b.webp",
  "/models/model5_imgi165448_6697e77c.webp",
  "/models/model5_imgi166449_6bc35fba.webp",
  "/models/model5_imgi167450_ce9eab29.webp",
  "/models/model5_imgi17308_c4b47770.webp",
  "/models/model5_imgi18309_b5027a42.webp",
  "/models/model5_imgi19310_047dd40f.webp",
  "/models/model5_imgi20311_9b20495c.webp",
  "/models/model5_imgi21312_5c2dd283.webp",
  "/models/model5_imgi22313_f3b4014f.webp",
  "/models/model5_imgi23314_90a25df6.webp",
  "/models/model5_imgi24315_12251c88.webp",
  "/models/model5_imgi25316_39570d2f.webp",
  "/models/model5_imgi26317_3d1dbcd9.webp",
  "/models/model5_imgi27318_0db5a987.webp",
  "/models/model5_imgi28319_66036930.webp",
  "/models/model5_imgi29320_f877bad6.webp",
  "/models/model5_imgi30321_429d5851.webp",
  "/models/model5_imgi31322_7bf9bf29.webp",
  "/models/model5_imgi32323_2ce03505.webp",
  "/models/model5_imgi33324_59201e8a.webp",
  "/models/model5_imgi34325_f916c4dd.webp",
  "/models/model5_imgi35326_c74e27cb.webp",
  "/models/model5_imgi36327_abe5c810.webp",
  "/models/model5_imgi37328_0d877382.webp",
  "/models/model5_imgi38329_c505471a.webp",
  "/models/model5_imgi39330_75af2c98.webp",
  "/models/model5_imgi40331_0d4e786b.webp",
  "/models/model5_imgi41332_e5ee7421.webp",
  "/models/model5_imgi42333_73208a8f.webp",
  "/models/model5_imgi43334_f401d17e.webp",
  "/models/model5_imgi44335_dc2b515f.webp",
  "/models/model5_imgi45336_17aa3b2f.webp",
  "/models/model5_imgi46337_f23b4f9e.webp",
  "/models/model5_imgi47338_a1288398.webp",
  "/models/model5_imgi48339_3b6cc6c7.webp",
  "/models/model5_imgi49340_9581ce53.webp",
  "/models/model5_imgi50341_925423bd.webp",
  "/models/model5_imgi51342_f340acfd.webp",
  "/models/model5_imgi53344_646352b8.webp",
  "/models/model5_imgi54345_a9f033c1.webp",
  "/models/model5_imgi55346_b2e51105.webp",
  "/models/model5_imgi56347_96d9d6f0.webp",
  "/models/model5_imgi57348_6f88526a.webp",
  "/models/model5_imgi58349_83e9cf35.webp",
  "/models/model5_imgi62353_097d507d.webp",
  "/models/model5_imgi65356_f562a4d2.webp",
  "/models/model5_imgi66357_93d81c8e.webp",
  "/models/model5_imgi67358_6a850fdd.webp",
  "/models/model5_imgi68359_5415a83b.webp",
  "/models/model5_imgi69360_17febe8c.webp",
  "/models/model5_imgi70361_6d1b5f6f.webp",
  "/models/model5_imgi71362_01492427.webp",
  "/models/model5_imgi72363_d356264f.webp",
  "/models/model5_imgi73364_f822e2d9.webp",
  "/models/model5_imgi74365_5913cd78.webp",
  "/models/model5_imgi75366_45afe73e.webp",
  "/models/model5_imgi77368_bb38a211.webp",
  "/models/model5_imgi78369_ae4e9183.webp",
  "/models/model5_imgi79370_14eded45.webp",
  "/models/model5_imgi80371_acf9437f.webp",
  "/models/model5_imgi81372_c949c357.webp",
  "/models/model5_imgi83374_00d1bc90.webp",
  "/models/model5_imgi84375_4eab4ad7.webp",
  "/models/model5_imgi85376_ff7beb67.webp",
  "/models/model5_imgi86377_cbe0df5d.webp",
  "/models/model5_imgi87378_4206fe86.webp",
  "/models/model5_imgi89380_9f6eb4ef.webp",
  "/models/model5_imgi90381_88880037.webp",
  "/models/model5_imgi91382_a32b5d3e.webp",
  "/models/model5_imgi92383_c0bf0d51.webp",
  "/models/model5_imgi93384_3efdb741.webp",
  "/models/model5_imgi94385_299358d7.webp",
  "/models/model5_imgi95386_fb38e971.webp",
  "/models/model5_imgi96387_f0acdb3d.webp",
  "/models/model5_imgi98389_343a6f63.webp"
];



export const diamondListings: Listing[] = [
  {
    id: "dyn_v3_0", name: "Saloni Joshi", age: 18, city: "Pune", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[0],
    images: [indianModelPhotos[0]],
    rating: 5, reviewCount: 33, isNew: false, verified: true,
    pricing: { "1hour": 4000, currency: "₹" },
    description: "Available in Pune. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_1", name: "Tanya Kumari", age: 19, city: "Agra", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[1],
    images: [indianModelPhotos[1]],
    rating: 5, reviewCount: 54, isNew: false, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Agra. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_2", name: "Neha Bhatia", age: 20, city: "Amritsar", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[2],
    images: [indianModelPhotos[2]],
    rating: 5, reviewCount: 18, isNew: false, verified: true,
    pricing: { "1hour": 4500, currency: "₹" },
    description: "Available in Amritsar. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_3", name: "Manasi Mishra", age: 21, city: "Agra", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[3],
    images: [indianModelPhotos[3]],
    rating: 5, reviewCount: 33, isNew: false, verified: true,
    pricing: { "1hour": 7000, currency: "₹" },
    description: "Available in Agra. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_4", name: "Vidya Tiwari", age: 22, city: "Udaipur", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[4],
    images: [indianModelPhotos[4]],
    rating: 5, reviewCount: 45, isNew: false, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Udaipur. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_5", name: "Meher Pandey", age: 23, city: "Mumbai", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[5],
    images: [indianModelPhotos[5]],
    rating: 5, reviewCount: 27, isNew: true, verified: true,
    pricing: { "1hour": 6000, currency: "₹" },
    description: "Available in Mumbai. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_6", name: "Sushma Reddy", age: 24, city: "Meerut", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[6],
    images: [indianModelPhotos[6]],
    rating: 5, reviewCount: 48, isNew: false, verified: true,
    pricing: { "1hour": 6000, currency: "₹" },
    description: "Available in Meerut. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_7", name: "Avani Das", age: 25, city: "Goa", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[7],
    images: [indianModelPhotos[7]],
    rating: 5, reviewCount: 17, isNew: false, verified: true,
    pricing: { "1hour": 4500, currency: "₹" },
    description: "Available in Goa. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_8", name: "Zoya Reddy", age: 26, city: "Delhi / NCR", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[8],
    images: [indianModelPhotos[8]],
    rating: 5, reviewCount: 41, isNew: false, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Delhi / NCR. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_9", name: "Shikha Kumari", age: 27, city: "Visakhapatnam", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[9],
    images: [indianModelPhotos[9]],
    rating: 5, reviewCount: 27, isNew: false, verified: true,
    pricing: { "1hour": 4000, currency: "₹" },
    description: "Available in Visakhapatnam. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_10", name: "Anjali Bhatia", age: 18, city: "Patna", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[10],
    images: [indianModelPhotos[10]],
    rating: 5, reviewCount: 45, isNew: false, verified: true,
    pricing: { "1hour": 5500, currency: "₹" },
    description: "Available in Patna. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_11", name: "Saloni Mishra", age: 19, city: "Hyderabad", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[11],
    images: [indianModelPhotos[11]],
    rating: 5, reviewCount: 49, isNew: false, verified: true,
    pricing: { "1hour": 7000, currency: "₹" },
    description: "Available in Hyderabad. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_12", name: "Monika Verma", age: 20, city: "Bengaluru", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[12],
    images: [indianModelPhotos[12]],
    rating: 5, reviewCount: 46, isNew: true, verified: true,
    pricing: { "1hour": 4000, currency: "₹" },
    description: "Available in Bengaluru. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_13", name: "Sneha Verma", age: 21, city: "Udaipur", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[13],
    images: [indianModelPhotos[13]],
    rating: 5, reviewCount: 32, isNew: true, verified: true,
    pricing: { "1hour": 7500, currency: "₹" },
    description: "Available in Udaipur. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_14", name: "Kavya Das", age: 22, city: "Mumbai", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[14],
    images: [indianModelPhotos[14]],
    rating: 5, reviewCount: 30, isNew: false, verified: true,
    pricing: { "1hour": 5500, currency: "₹" },
    description: "Available in Mumbai. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_15", name: "Tanisha Jain", age: 23, city: "Bhubaneswar", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[15],
    images: [indianModelPhotos[15]],
    rating: 5, reviewCount: 42, isNew: false, verified: true,
    pricing: { "1hour": 6500, currency: "₹" },
    description: "Available in Bhubaneswar. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_16", name: "Sonal Das", age: 24, city: "Mumbai", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[16],
    images: [indianModelPhotos[16]],
    rating: 5, reviewCount: 49, isNew: false, verified: true,
    pricing: { "1hour": 5000, currency: "₹" },
    description: "Available in Mumbai. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_17", name: "Kavya Yadav", age: 25, city: "Bhopal", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[17],
    images: [indianModelPhotos[17]],
    rating: 5, reviewCount: 44, isNew: false, verified: true,
    pricing: { "1hour": 5000, currency: "₹" },
    description: "Available in Bhopal. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_18", name: "Riya Singh", age: 26, city: "Indore", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[18],
    images: [indianModelPhotos[18]],
    rating: 5, reviewCount: 16, isNew: true, verified: true,
    pricing: { "1hour": 5000, currency: "₹" },
    description: "Available in Indore. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_19", name: "Chahat Reddy", age: 27, city: "Chandigarh", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[19],
    images: [indianModelPhotos[19]],
    rating: 5, reviewCount: 36, isNew: false, verified: true,
    pricing: { "1hour": 4000, currency: "₹" },
    description: "Available in Chandigarh. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_20", name: "Palak Kapoor", age: 18, city: "Coimbatore", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[20],
    images: [indianModelPhotos[20]],
    rating: 5, reviewCount: 54, isNew: false, verified: true,
    pricing: { "1hour": 5000, currency: "₹" },
    description: "Available in Coimbatore. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_21", name: "Meera Iyer", age: 19, city: "Meerut", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[21],
    images: [indianModelPhotos[21]],
    rating: 5, reviewCount: 34, isNew: true, verified: true,
    pricing: { "1hour": 5500, currency: "₹" },
    description: "Available in Meerut. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_22", name: "Priya Patil", age: 20, city: "Surat", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[22],
    images: [indianModelPhotos[22]],
    rating: 5, reviewCount: 45, isNew: false, verified: true,
    pricing: { "1hour": 4500, currency: "₹" },
    description: "Available in Surat. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_23", name: "Myra Kumari", age: 21, city: "Mumbai", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[23],
    images: [indianModelPhotos[23]],
    rating: 5, reviewCount: 20, isNew: false, verified: true,
    pricing: { "1hour": 7500, currency: "₹" },
    description: "Available in Mumbai. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_24", name: "Sonali Mishra", age: 22, city: "Chennai", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[24],
    images: [indianModelPhotos[24]],
    rating: 5, reviewCount: 24, isNew: false, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Chennai. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_25", name: "Deepa Joshi", age: 23, city: "Meerut", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[25],
    images: [indianModelPhotos[25]],
    rating: 5, reviewCount: 52, isNew: false, verified: true,
    pricing: { "1hour": 6000, currency: "₹" },
    description: "Available in Meerut. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_26", name: "Trisha Verma", age: 24, city: "Amritsar", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[26],
    images: [indianModelPhotos[26]],
    rating: 5, reviewCount: 22, isNew: false, verified: true,
    pricing: { "1hour": 7000, currency: "₹" },
    description: "Available in Amritsar. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_27", name: "Meera Yadav", age: 25, city: "Visakhapatnam", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[27],
    images: [indianModelPhotos[27]],
    rating: 5, reviewCount: 44, isNew: false, verified: true,
    pricing: { "1hour": 7500, currency: "₹" },
    description: "Available in Visakhapatnam. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_28", name: "Lata Tiwari", age: 26, city: "Mumbai", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[28],
    images: [indianModelPhotos[28]],
    rating: 5, reviewCount: 52, isNew: false, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Mumbai. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_29", name: "Jahnvi Bhatia", age: 27, city: "Lucknow", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[29],
    images: [indianModelPhotos[29]],
    rating: 5, reviewCount: 42, isNew: false, verified: true,
    pricing: { "1hour": 6000, currency: "₹" },
    description: "Available in Lucknow. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_30", name: "Malini Mishra", age: 18, city: "Indore", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[30],
    images: [indianModelPhotos[30]],
    rating: 5, reviewCount: 47, isNew: false, verified: true,
    pricing: { "1hour": 3500, currency: "₹" },
    description: "Available in Indore. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_31", name: "Seema Kapoor", age: 19, city: "Bhubaneswar", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[31],
    images: [indianModelPhotos[31]],
    rating: 5, reviewCount: 19, isNew: true, verified: true,
    pricing: { "1hour": 7000, currency: "₹" },
    description: "Available in Bhubaneswar. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_32", name: "Bhumika Kaur", age: 20, city: "Surat", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[32],
    images: [indianModelPhotos[32]],
    rating: 5, reviewCount: 30, isNew: false, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Surat. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_33", name: "Ishita Iyer", age: 21, city: "Agra", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[33],
    images: [indianModelPhotos[33]],
    rating: 5, reviewCount: 23, isNew: false, verified: true,
    pricing: { "1hour": 3500, currency: "₹" },
    description: "Available in Agra. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_34", name: "Sakshi Bhatia", age: 22, city: "Bengaluru", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[34],
    images: [indianModelPhotos[34]],
    rating: 5, reviewCount: 20, isNew: false, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Bengaluru. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_35", name: "Bhavya Bhatia", age: 23, city: "Indore", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[35],
    images: [indianModelPhotos[35]],
    rating: 5, reviewCount: 37, isNew: false, verified: true,
    pricing: { "1hour": 3500, currency: "₹" },
    description: "Available in Indore. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_36", name: "Swati Rao", age: 24, city: "Visakhapatnam", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[36],
    images: [indianModelPhotos[36]],
    rating: 5, reviewCount: 35, isNew: false, verified: true,
    pricing: { "1hour": 6000, currency: "₹" },
    description: "Available in Visakhapatnam. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_37", name: "Shraddha Kumari", age: 25, city: "Amritsar", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[37],
    images: [indianModelPhotos[37]],
    rating: 5, reviewCount: 34, isNew: false, verified: true,
    pricing: { "1hour": 7500, currency: "₹" },
    description: "Available in Amritsar. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_38", name: "Kareena Reddy", age: 26, city: "Shimla", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[38],
    images: [indianModelPhotos[38]],
    rating: 5, reviewCount: 30, isNew: false, verified: true,
    pricing: { "1hour": 4500, currency: "₹" },
    description: "Available in Shimla. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_39", name: "Kirti Khan", age: 27, city: "Pune", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[39],
    images: [indianModelPhotos[39]],
    rating: 5, reviewCount: 45, isNew: false, verified: true,
    pricing: { "1hour": 7500, currency: "₹" },
    description: "Available in Pune. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_40", name: "Raveena Malik", age: 18, city: "Nagpur", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[40],
    images: [indianModelPhotos[40]],
    rating: 5, reviewCount: 22, isNew: false, verified: true,
    pricing: { "1hour": 6000, currency: "₹" },
    description: "Available in Nagpur. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_41", name: "Smriti Tiwari", age: 19, city: "Indore", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[41],
    images: [indianModelPhotos[41]],
    rating: 5, reviewCount: 54, isNew: false, verified: true,
    pricing: { "1hour": 7500, currency: "₹" },
    description: "Available in Indore. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_42", name: "Poonam Rao", age: 20, city: "Hyderabad", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[42],
    images: [indianModelPhotos[42]],
    rating: 5, reviewCount: 42, isNew: false, verified: true,
    pricing: { "1hour": 4500, currency: "₹" },
    description: "Available in Hyderabad. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_43", name: "Vidya Sharma", age: 21, city: "Coimbatore", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[43],
    images: [indianModelPhotos[43]],
    rating: 5, reviewCount: 52, isNew: false, verified: true,
    pricing: { "1hour": 7500, currency: "₹" },
    description: "Available in Coimbatore. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_44", name: "Jahnvi Mehta", age: 22, city: "Chandigarh", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[44],
    images: [indianModelPhotos[44]],
    rating: 5, reviewCount: 37, isNew: false, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Chandigarh. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_45", name: "Aditi Pandey", age: 23, city: "Manali", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[45],
    images: [indianModelPhotos[45]],
    rating: 5, reviewCount: 44, isNew: true, verified: true,
    pricing: { "1hour": 4000, currency: "₹" },
    description: "Available in Manali. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_46", name: "Sonali Bhatia", age: 24, city: "Goa", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[46],
    images: [indianModelPhotos[46]],
    rating: 5, reviewCount: 47, isNew: false, verified: true,
    pricing: { "1hour": 7500, currency: "₹" },
    description: "Available in Goa. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_47", name: "Pooja Kaur", age: 25, city: "Coimbatore", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[47],
    images: [indianModelPhotos[47]],
    rating: 5, reviewCount: 50, isNew: false, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Coimbatore. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_48", name: "Rashmi Gowda", age: 26, city: "Bengaluru", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[48],
    images: [indianModelPhotos[48]],
    rating: 5, reviewCount: 37, isNew: true, verified: true,
    pricing: { "1hour": 4500, currency: "₹" },
    description: "Available in Bengaluru. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_49", name: "Lakshmi Soni", age: 27, city: "Manali", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[49],
    images: [indianModelPhotos[49]],
    rating: 5, reviewCount: 25, isNew: false, verified: true,
    pricing: { "1hour": 4500, currency: "₹" },
    description: "Available in Manali. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_50", name: "Divya Rajput", age: 18, city: "Shimla", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[50],
    images: [indianModelPhotos[50]],
    rating: 5, reviewCount: 54, isNew: false, verified: true,
    pricing: { "1hour": 7500, currency: "₹" },
    description: "Available in Shimla. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_51", name: "Raveena Rajput", age: 19, city: "Chennai", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[51],
    images: [indianModelPhotos[51]],
    rating: 5, reviewCount: 48, isNew: false, verified: true,
    pricing: { "1hour": 6000, currency: "₹" },
    description: "Available in Chennai. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_52", name: "Neha Rao", age: 20, city: "Patna", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[52],
    images: [indianModelPhotos[52]],
    rating: 5, reviewCount: 31, isNew: false, verified: true,
    pricing: { "1hour": 7000, currency: "₹" },
    description: "Available in Patna. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_53", name: "Shalini Reddy", age: 21, city: "Mumbai", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[53],
    images: [indianModelPhotos[53]],
    rating: 5, reviewCount: 39, isNew: false, verified: true,
    pricing: { "1hour": 7000, currency: "₹" },
    description: "Available in Mumbai. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_54", name: "Sakshi Yadav", age: 22, city: "Shimla", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[54],
    images: [indianModelPhotos[54]],
    rating: 5, reviewCount: 27, isNew: true, verified: true,
    pricing: { "1hour": 7000, currency: "₹" },
    description: "Available in Shimla. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_55", name: "Meera Khan", age: 23, city: "Udaipur", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[55],
    images: [indianModelPhotos[55]],
    rating: 5, reviewCount: 49, isNew: false, verified: true,
    pricing: { "1hour": 6000, currency: "₹" },
    description: "Available in Udaipur. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_56", name: "Vaishnavi Das", age: 24, city: "Surat", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[56],
    images: [indianModelPhotos[56]],
    rating: 5, reviewCount: 51, isNew: false, verified: true,
    pricing: { "1hour": 3500, currency: "₹" },
    description: "Available in Surat. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_57", name: "Kareena Chauhan", age: 25, city: "Goa", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[57],
    images: [indianModelPhotos[57]],
    rating: 5, reviewCount: 33, isNew: true, verified: true,
    pricing: { "1hour": 5500, currency: "₹" },
    description: "Available in Goa. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_58", name: "Nisha Kumari", age: 26, city: "Indore", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[58],
    images: [indianModelPhotos[58]],
    rating: 5, reviewCount: 28, isNew: true, verified: true,
    pricing: { "1hour": 5000, currency: "₹" },
    description: "Available in Indore. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_59", name: "Gauri Iyer", age: 27, city: "Manali", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[59],
    images: [indianModelPhotos[59]],
    rating: 5, reviewCount: 33, isNew: false, verified: true,
    pricing: { "1hour": 4000, currency: "₹" },
    description: "Available in Manali. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_60", name: "Riya Kapoor", age: 18, city: "Nagpur", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[60],
    images: [indianModelPhotos[60]],
    rating: 5, reviewCount: 38, isNew: false, verified: true,
    pricing: { "1hour": 7500, currency: "₹" },
    description: "Available in Nagpur. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_61", name: "Suman Joshi", age: 19, city: "Shimla", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[61],
    images: [indianModelPhotos[61]],
    rating: 5, reviewCount: 32, isNew: false, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Shimla. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_62", name: "Smriti Pandey", age: 20, city: "Jaipur", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[62],
    images: [indianModelPhotos[62]],
    rating: 5, reviewCount: 33, isNew: false, verified: true,
    pricing: { "1hour": 5500, currency: "₹" },
    description: "Available in Jaipur. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_63", name: "Niharika Nair", age: 21, city: "Lucknow", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[63],
    images: [indianModelPhotos[63]],
    rating: 5, reviewCount: 50, isNew: false, verified: true,
    pricing: { "1hour": 3500, currency: "₹" },
    description: "Available in Lucknow. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_64", name: "Nisha Dubey", age: 22, city: "Meerut", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[64],
    images: [indianModelPhotos[64]],
    rating: 5, reviewCount: 39, isNew: false, verified: true,
    pricing: { "1hour": 7500, currency: "₹" },
    description: "Available in Meerut. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_65", name: "Pallavi Chauhan", age: 23, city: "Bhopal", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[65],
    images: [indianModelPhotos[65]],
    rating: 5, reviewCount: 15, isNew: false, verified: true,
    pricing: { "1hour": 5000, currency: "₹" },
    description: "Available in Bhopal. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_66", name: "Roshni Kaur", age: 24, city: "Manali", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[66],
    images: [indianModelPhotos[66]],
    rating: 5, reviewCount: 18, isNew: false, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Manali. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_67", name: "Alia Das", age: 25, city: "Amritsar", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[67],
    images: [indianModelPhotos[67]],
    rating: 5, reviewCount: 46, isNew: false, verified: true,
    pricing: { "1hour": 3500, currency: "₹" },
    description: "Available in Amritsar. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_68", name: "Sakshi Gowda", age: 26, city: "Bengaluru", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[68],
    images: [indianModelPhotos[68]],
    rating: 5, reviewCount: 25, isNew: false, verified: true,
    pricing: { "1hour": 5500, currency: "₹" },
    description: "Available in Bengaluru. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_69", name: "Avani Jain", age: 27, city: "Meerut", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[69],
    images: [indianModelPhotos[69]],
    rating: 5, reviewCount: 38, isNew: false, verified: true,
    pricing: { "1hour": 4000, currency: "₹" },
    description: "Available in Meerut. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_70", name: "Rakhi Malik", age: 18, city: "Meerut", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[70],
    images: [indianModelPhotos[70]],
    rating: 5, reviewCount: 28, isNew: false, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Meerut. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_71", name: "Tara Khan", age: 19, city: "Hyderabad", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[71],
    images: [indianModelPhotos[71]],
    rating: 5, reviewCount: 32, isNew: true, verified: true,
    pricing: { "1hour": 7000, currency: "₹" },
    description: "Available in Hyderabad. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_72", name: "Divya Dubey", age: 20, city: "Kolkata", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[72],
    images: [indianModelPhotos[72]],
    rating: 5, reviewCount: 17, isNew: false, verified: true,
    pricing: { "1hour": 3500, currency: "₹" },
    description: "Available in Kolkata. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_73", name: "Niharika Bhatia", age: 21, city: "Ahmedabad", tier: "diamond",
    emoji: "👩", image: indianModelPhotos[73],
    images: [indianModelPhotos[73]],
    rating: 5, reviewCount: 41, isNew: false, verified: true,
    pricing: { "1hour": 7500, currency: "₹" },
    description: "Available in Ahmedabad. 100% genuine and verified. Message for details."
  },

];

export const goldListings: Listing[] = [
  {
    id: "dyn_v3_74", name: "Tamanna Rao", age: 22, city: "Varanasi", tier: "gold",
    emoji: "👩", image: indianModelPhotos[74],
    images: [indianModelPhotos[74]],
    rating: 5, reviewCount: 32, isNew: false, verified: true,
    pricing: { "1hour": 6500, currency: "₹" },
    description: "Available in Varanasi. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_75", name: "Lakshmi Reddy", age: 23, city: "Ahmedabad", tier: "gold",
    emoji: "👩", image: indianModelPhotos[75],
    images: [indianModelPhotos[75]],
    rating: 5, reviewCount: 44, isNew: false, verified: true,
    pricing: { "1hour": 5500, currency: "₹" },
    description: "Available in Ahmedabad. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_76", name: "Sunita Desai", age: 24, city: "Patna", tier: "gold",
    emoji: "👩", image: indianModelPhotos[76],
    images: [indianModelPhotos[76]],
    rating: 5, reviewCount: 45, isNew: false, verified: true,
    pricing: { "1hour": 5500, currency: "₹" },
    description: "Available in Patna. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_77", name: "Urvashi Jain", age: 25, city: "Mumbai", tier: "gold",
    emoji: "👩", image: indianModelPhotos[77],
    images: [indianModelPhotos[77]],
    rating: 5, reviewCount: 16, isNew: true, verified: true,
    pricing: { "1hour": 4500, currency: "₹" },
    description: "Available in Mumbai. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_78", name: "Sonal Singh", age: 26, city: "Bengaluru", tier: "gold",
    emoji: "👩", image: indianModelPhotos[78],
    images: [indianModelPhotos[78]],
    rating: 5, reviewCount: 43, isNew: false, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Bengaluru. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_79", name: "Aarti Nair", age: 27, city: "Coimbatore", tier: "gold",
    emoji: "👩", image: indianModelPhotos[79],
    images: [indianModelPhotos[79]],
    rating: 5, reviewCount: 48, isNew: false, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Coimbatore. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_80", name: "Vanshika Joshi", age: 18, city: "Goa", tier: "gold",
    emoji: "👩", image: indianModelPhotos[80],
    images: [indianModelPhotos[80]],
    rating: 5, reviewCount: 23, isNew: false, verified: true,
    pricing: { "1hour": 6500, currency: "₹" },
    description: "Available in Goa. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_81", name: "Kareena Rao", age: 19, city: "Amritsar", tier: "gold",
    emoji: "👩", image: indianModelPhotos[81],
    images: [indianModelPhotos[81]],
    rating: 5, reviewCount: 36, isNew: false, verified: true,
    pricing: { "1hour": 7500, currency: "₹" },
    description: "Available in Amritsar. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_82", name: "Disha Jain", age: 20, city: "Chennai", tier: "gold",
    emoji: "👩", image: indianModelPhotos[82],
    images: [indianModelPhotos[82]],
    rating: 5, reviewCount: 51, isNew: false, verified: true,
    pricing: { "1hour": 4500, currency: "₹" },
    description: "Available in Chennai. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_83", name: "Jyoti Yadav", age: 21, city: "Ahmedabad", tier: "gold",
    emoji: "👩", image: indianModelPhotos[83],
    images: [indianModelPhotos[83]],
    rating: 5, reviewCount: 18, isNew: true, verified: true,
    pricing: { "1hour": 5000, currency: "₹" },
    description: "Available in Ahmedabad. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_84", name: "Chahat Rao", age: 22, city: "Ahmedabad", tier: "gold",
    emoji: "👩", image: indianModelPhotos[84],
    images: [indianModelPhotos[84]],
    rating: 5, reviewCount: 28, isNew: false, verified: true,
    pricing: { "1hour": 4000, currency: "₹" },
    description: "Available in Ahmedabad. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_85", name: "Rashmi Singh", age: 23, city: "Indore", tier: "gold",
    emoji: "👩", image: indianModelPhotos[85],
    images: [indianModelPhotos[85]],
    rating: 5, reviewCount: 45, isNew: false, verified: true,
    pricing: { "1hour": 3500, currency: "₹" },
    description: "Available in Indore. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_86", name: "Tanya Bhatia", age: 24, city: "Kochi", tier: "gold",
    emoji: "👩", image: indianModelPhotos[86],
    images: [indianModelPhotos[86]],
    rating: 5, reviewCount: 28, isNew: true, verified: true,
    pricing: { "1hour": 5000, currency: "₹" },
    description: "Available in Kochi. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_87", name: "Gargi Mehta", age: 25, city: "Bengaluru", tier: "gold",
    emoji: "👩", image: indianModelPhotos[87],
    images: [indianModelPhotos[87]],
    rating: 5, reviewCount: 35, isNew: true, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Bengaluru. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_88", name: "Avani Rao", age: 26, city: "Hyderabad", tier: "gold",
    emoji: "👩", image: indianModelPhotos[88],
    images: [indianModelPhotos[88]],
    rating: 5, reviewCount: 29, isNew: false, verified: true,
    pricing: { "1hour": 6500, currency: "₹" },
    description: "Available in Hyderabad. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_89", name: "Kavya Khan", age: 27, city: "Agra", tier: "gold",
    emoji: "👩", image: indianModelPhotos[89],
    images: [indianModelPhotos[89]],
    rating: 5, reviewCount: 44, isNew: false, verified: true,
    pricing: { "1hour": 7000, currency: "₹" },
    description: "Available in Agra. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_90", name: "Prachi Kumari", age: 18, city: "Coimbatore", tier: "gold",
    emoji: "👩", image: indianModelPhotos[90],
    images: [indianModelPhotos[90]],
    rating: 5, reviewCount: 46, isNew: true, verified: true,
    pricing: { "1hour": 4500, currency: "₹" },
    description: "Available in Coimbatore. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_91", name: "Saloni Desai", age: 19, city: "Jaipur", tier: "gold",
    emoji: "👩", image: indianModelPhotos[91],
    images: [indianModelPhotos[91]],
    rating: 5, reviewCount: 38, isNew: false, verified: true,
    pricing: { "1hour": 7500, currency: "₹" },
    description: "Available in Jaipur. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_92", name: "Payal Das", age: 20, city: "Bengaluru", tier: "gold",
    emoji: "👩", image: indianModelPhotos[92],
    images: [indianModelPhotos[92]],
    rating: 5, reviewCount: 44, isNew: false, verified: true,
    pricing: { "1hour": 4500, currency: "₹" },
    description: "Available in Bengaluru. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_93", name: "Alia Bhatia", age: 21, city: "Ahmedabad", tier: "gold",
    emoji: "👩", image: indianModelPhotos[93],
    images: [indianModelPhotos[93]],
    rating: 5, reviewCount: 31, isNew: false, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Ahmedabad. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_94", name: "Rashmi Soni", age: 22, city: "Varanasi", tier: "gold",
    emoji: "👩", image: indianModelPhotos[94],
    images: [indianModelPhotos[94]],
    rating: 5, reviewCount: 28, isNew: false, verified: true,
    pricing: { "1hour": 6500, currency: "₹" },
    description: "Available in Varanasi. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_95", name: "Tara Dubey", age: 23, city: "Kolkata", tier: "gold",
    emoji: "👩", image: indianModelPhotos[95],
    images: [indianModelPhotos[95]],
    rating: 5, reviewCount: 47, isNew: false, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Kolkata. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_96", name: "Sonali Pandey", age: 24, city: "Shimla", tier: "gold",
    emoji: "👩", image: indianModelPhotos[96],
    images: [indianModelPhotos[96]],
    rating: 5, reviewCount: 34, isNew: false, verified: true,
    pricing: { "1hour": 5500, currency: "₹" },
    description: "Available in Shimla. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_97", name: "Preeti Gowda", age: 25, city: "Indore", tier: "gold",
    emoji: "👩", image: indianModelPhotos[97],
    images: [indianModelPhotos[97]],
    rating: 5, reviewCount: 47, isNew: true, verified: true,
    pricing: { "1hour": 5500, currency: "₹" },
    description: "Available in Indore. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_98", name: "Sana Kapoor", age: 26, city: "Coimbatore", tier: "gold",
    emoji: "👩", image: indianModelPhotos[98],
    images: [indianModelPhotos[98]],
    rating: 5, reviewCount: 18, isNew: false, verified: true,
    pricing: { "1hour": 3500, currency: "₹" },
    description: "Available in Coimbatore. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_99", name: "Ruchi Yadav", age: 27, city: "Surat", tier: "gold",
    emoji: "👩", image: indianModelPhotos[99],
    images: [indianModelPhotos[99]],
    rating: 5, reviewCount: 46, isNew: false, verified: true,
    pricing: { "1hour": 6000, currency: "₹" },
    description: "Available in Surat. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_100", name: "Sapna Soni", age: 18, city: "Lucknow", tier: "gold",
    emoji: "👩", image: indianModelPhotos[100],
    images: [indianModelPhotos[100]],
    rating: 5, reviewCount: 43, isNew: false, verified: true,
    pricing: { "1hour": 5500, currency: "₹" },
    description: "Available in Lucknow. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_101", name: "Tanisha Joshi", age: 19, city: "Delhi / NCR", tier: "gold",
    emoji: "👩", image: indianModelPhotos[101],
    images: [indianModelPhotos[101]],
    rating: 5, reviewCount: 48, isNew: false, verified: true,
    pricing: { "1hour": 6000, currency: "₹" },
    description: "Available in Delhi / NCR. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_102", name: "Trisha Patil", age: 20, city: "Visakhapatnam", tier: "gold",
    emoji: "👩", image: indianModelPhotos[102],
    images: [indianModelPhotos[102]],
    rating: 5, reviewCount: 28, isNew: true, verified: true,
    pricing: { "1hour": 6000, currency: "₹" },
    description: "Available in Visakhapatnam. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_103", name: "Lakshmi Patil", age: 21, city: "Nagpur", tier: "gold",
    emoji: "👩", image: indianModelPhotos[103],
    images: [indianModelPhotos[103]],
    rating: 5, reviewCount: 37, isNew: false, verified: true,
    pricing: { "1hour": 7500, currency: "₹" },
    description: "Available in Nagpur. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_104", name: "Sonali Iyer", age: 22, city: "Amritsar", tier: "gold",
    emoji: "👩", image: indianModelPhotos[104],
    images: [indianModelPhotos[104]],
    rating: 5, reviewCount: 26, isNew: true, verified: true,
    pricing: { "1hour": 4000, currency: "₹" },
    description: "Available in Amritsar. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_105", name: "Komal Kumari", age: 23, city: "Nagpur", tier: "gold",
    emoji: "👩", image: indianModelPhotos[105],
    images: [indianModelPhotos[105]],
    rating: 5, reviewCount: 19, isNew: false, verified: true,
    pricing: { "1hour": 4500, currency: "₹" },
    description: "Available in Nagpur. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_106", name: "Jyoti Mishra", age: 24, city: "Mumbai", tier: "gold",
    emoji: "👩", image: indianModelPhotos[106],
    images: [indianModelPhotos[106]],
    rating: 5, reviewCount: 40, isNew: false, verified: true,
    pricing: { "1hour": 3500, currency: "₹" },
    description: "Available in Mumbai. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_107", name: "Vandana Soni", age: 25, city: "Lucknow", tier: "gold",
    emoji: "👩", image: indianModelPhotos[107],
    images: [indianModelPhotos[107]],
    rating: 5, reviewCount: 20, isNew: false, verified: true,
    pricing: { "1hour": 6000, currency: "₹" },
    description: "Available in Lucknow. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_108", name: "Katrina Iyer", age: 26, city: "Chennai", tier: "gold",
    emoji: "👩", image: indianModelPhotos[108],
    images: [indianModelPhotos[108]],
    rating: 5, reviewCount: 39, isNew: false, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Chennai. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_109", name: "Jahnvi Jain", age: 27, city: "Pune", tier: "gold",
    emoji: "👩", image: indianModelPhotos[109],
    images: [indianModelPhotos[109]],
    rating: 5, reviewCount: 43, isNew: false, verified: true,
    pricing: { "1hour": 7500, currency: "₹" },
    description: "Available in Pune. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_110", name: "Tanisha Chauhan", age: 18, city: "Pune", tier: "gold",
    emoji: "👩", image: indianModelPhotos[110],
    images: [indianModelPhotos[110]],
    rating: 5, reviewCount: 43, isNew: false, verified: true,
    pricing: { "1hour": 4000, currency: "₹" },
    description: "Available in Pune. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_111", name: "Katrina Rao", age: 19, city: "Kochi", tier: "gold",
    emoji: "👩", image: indianModelPhotos[111],
    images: [indianModelPhotos[111]],
    rating: 5, reviewCount: 37, isNew: false, verified: true,
    pricing: { "1hour": 5000, currency: "₹" },
    description: "Available in Kochi. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_112", name: "Katrina Pandey", age: 20, city: "Coimbatore", tier: "gold",
    emoji: "👩", image: indianModelPhotos[112],
    images: [indianModelPhotos[112]],
    rating: 5, reviewCount: 49, isNew: false, verified: true,
    pricing: { "1hour": 7500, currency: "₹" },
    description: "Available in Coimbatore. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_113", name: "Sunita Nair", age: 21, city: "Bengaluru", tier: "gold",
    emoji: "👩", image: indianModelPhotos[113],
    images: [indianModelPhotos[113]],
    rating: 5, reviewCount: 49, isNew: false, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Bengaluru. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_114", name: "Sneha Dubey", age: 22, city: "Pune", tier: "gold",
    emoji: "👩", image: indianModelPhotos[114],
    images: [indianModelPhotos[114]],
    rating: 5, reviewCount: 38, isNew: false, verified: true,
    pricing: { "1hour": 4000, currency: "₹" },
    description: "Available in Pune. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_115", name: "Tamanna Singh", age: 23, city: "Patna", tier: "gold",
    emoji: "👩", image: indianModelPhotos[115],
    images: [indianModelPhotos[115]],
    rating: 5, reviewCount: 36, isNew: false, verified: true,
    pricing: { "1hour": 4000, currency: "₹" },
    description: "Available in Patna. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_116", name: "Srishti Gowda", age: 24, city: "Nagpur", tier: "gold",
    emoji: "👩", image: indianModelPhotos[116],
    images: [indianModelPhotos[116]],
    rating: 5, reviewCount: 44, isNew: true, verified: true,
    pricing: { "1hour": 7000, currency: "₹" },
    description: "Available in Nagpur. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_117", name: "Priyanka Rajput", age: 25, city: "Agra", tier: "gold",
    emoji: "👩", image: indianModelPhotos[117],
    images: [indianModelPhotos[117]],
    rating: 5, reviewCount: 29, isNew: false, verified: true,
    pricing: { "1hour": 4000, currency: "₹" },
    description: "Available in Agra. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_118", name: "Shivani Verma", age: 26, city: "Amritsar", tier: "gold",
    emoji: "👩", image: indianModelPhotos[118],
    images: [indianModelPhotos[118]],
    rating: 5, reviewCount: 44, isNew: false, verified: true,
    pricing: { "1hour": 5000, currency: "₹" },
    description: "Available in Amritsar. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_119", name: "Chahat Malik", age: 27, city: "Meerut", tier: "gold",
    emoji: "👩", image: indianModelPhotos[119],
    images: [indianModelPhotos[119]],
    rating: 5, reviewCount: 36, isNew: true, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Meerut. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_120", name: "Kareena Kaur", age: 18, city: "Kochi", tier: "gold",
    emoji: "👩", image: indianModelPhotos[120],
    images: [indianModelPhotos[120]],
    rating: 5, reviewCount: 51, isNew: false, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Kochi. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_121", name: "Trisha Yadav", age: 19, city: "Patna", tier: "gold",
    emoji: "👩", image: indianModelPhotos[121],
    images: [indianModelPhotos[121]],
    rating: 5, reviewCount: 42, isNew: false, verified: true,
    pricing: { "1hour": 5500, currency: "₹" },
    description: "Available in Patna. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_122", name: "Geeta Rajput", age: 20, city: "Kolkata", tier: "gold",
    emoji: "👩", image: indianModelPhotos[122],
    images: [indianModelPhotos[122]],
    rating: 5, reviewCount: 49, isNew: false, verified: true,
    pricing: { "1hour": 5000, currency: "₹" },
    description: "Available in Kolkata. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_123", name: "Raveena Khan", age: 21, city: "Coimbatore", tier: "gold",
    emoji: "👩", image: indianModelPhotos[123],
    images: [indianModelPhotos[123]],
    rating: 5, reviewCount: 52, isNew: false, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Coimbatore. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_124", name: "Shruti Kaur", age: 22, city: "Manali", tier: "gold",
    emoji: "👩", image: indianModelPhotos[124],
    images: [indianModelPhotos[124]],
    rating: 5, reviewCount: 37, isNew: false, verified: true,
    pricing: { "1hour": 5000, currency: "₹" },
    description: "Available in Manali. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_125", name: "Palak Jain", age: 23, city: "Kolkata", tier: "gold",
    emoji: "👩", image: indianModelPhotos[125],
    images: [indianModelPhotos[125]],
    rating: 5, reviewCount: 43, isNew: false, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Kolkata. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_126", name: "Tamanna Bhatia", age: 24, city: "Udaipur", tier: "gold",
    emoji: "👩", image: indianModelPhotos[126],
    images: [indianModelPhotos[126]],
    rating: 5, reviewCount: 16, isNew: false, verified: true,
    pricing: { "1hour": 7500, currency: "₹" },
    description: "Available in Udaipur. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_127", name: "Sakshi Kaur", age: 25, city: "Indore", tier: "gold",
    emoji: "👩", image: indianModelPhotos[127],
    images: [indianModelPhotos[127]],
    rating: 5, reviewCount: 22, isNew: false, verified: true,
    pricing: { "1hour": 7000, currency: "₹" },
    description: "Available in Indore. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_128", name: "Sushma Rao", age: 26, city: "Amritsar", tier: "gold",
    emoji: "👩", image: indianModelPhotos[128],
    images: [indianModelPhotos[128]],
    rating: 5, reviewCount: 22, isNew: false, verified: true,
    pricing: { "1hour": 3500, currency: "₹" },
    description: "Available in Amritsar. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_129", name: "Radhika Kumari", age: 27, city: "Nagpur", tier: "gold",
    emoji: "👩", image: indianModelPhotos[129],
    images: [indianModelPhotos[129]],
    rating: 5, reviewCount: 17, isNew: true, verified: true,
    pricing: { "1hour": 3500, currency: "₹" },
    description: "Available in Nagpur. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_130", name: "Bhavya Sharma", age: 18, city: "Agra", tier: "gold",
    emoji: "👩", image: indianModelPhotos[130],
    images: [indianModelPhotos[130]],
    rating: 5, reviewCount: 43, isNew: false, verified: true,
    pricing: { "1hour": 7500, currency: "₹" },
    description: "Available in Agra. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_131", name: "Sonal Desai", age: 19, city: "Goa", tier: "gold",
    emoji: "👩", image: indianModelPhotos[131],
    images: [indianModelPhotos[131]],
    rating: 5, reviewCount: 47, isNew: false, verified: true,
    pricing: { "1hour": 6000, currency: "₹" },
    description: "Available in Goa. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_132", name: "Shikha Desai", age: 20, city: "Visakhapatnam", tier: "gold",
    emoji: "👩", image: indianModelPhotos[132],
    images: [indianModelPhotos[132]],
    rating: 5, reviewCount: 31, isNew: false, verified: true,
    pricing: { "1hour": 6500, currency: "₹" },
    description: "Available in Visakhapatnam. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_133", name: "Shikha Kapoor", age: 21, city: "Bengaluru", tier: "gold",
    emoji: "👩", image: indianModelPhotos[133],
    images: [indianModelPhotos[133]],
    rating: 5, reviewCount: 16, isNew: false, verified: true,
    pricing: { "1hour": 6500, currency: "₹" },
    description: "Available in Bengaluru. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_134", name: "Nikita Kapoor", age: 22, city: "Mumbai", tier: "gold",
    emoji: "👩", image: indianModelPhotos[134],
    images: [indianModelPhotos[134]],
    rating: 5, reviewCount: 51, isNew: true, verified: true,
    pricing: { "1hour": 5000, currency: "₹" },
    description: "Available in Mumbai. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_135", name: "Raveena Kapoor", age: 23, city: "Hyderabad", tier: "gold",
    emoji: "👩", image: indianModelPhotos[135],
    images: [indianModelPhotos[135]],
    rating: 5, reviewCount: 15, isNew: false, verified: true,
    pricing: { "1hour": 4000, currency: "₹" },
    description: "Available in Hyderabad. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_136", name: "Lakshmi Singh", age: 24, city: "Lucknow", tier: "gold",
    emoji: "👩", image: indianModelPhotos[136],
    images: [indianModelPhotos[136]],
    rating: 5, reviewCount: 30, isNew: false, verified: true,
    pricing: { "1hour": 5500, currency: "₹" },
    description: "Available in Lucknow. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_137", name: "Sakshi Nair", age: 25, city: "Lucknow", tier: "gold",
    emoji: "👩", image: indianModelPhotos[137],
    images: [indianModelPhotos[137]],
    rating: 5, reviewCount: 34, isNew: true, verified: true,
    pricing: { "1hour": 4500, currency: "₹" },
    description: "Available in Lucknow. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_138", name: "Vandana Malik", age: 26, city: "Surat", tier: "gold",
    emoji: "👩", image: indianModelPhotos[138],
    images: [indianModelPhotos[138]],
    rating: 5, reviewCount: 36, isNew: false, verified: true,
    pricing: { "1hour": 6000, currency: "₹" },
    description: "Available in Surat. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_139", name: "Monika Singh", age: 27, city: "Bhubaneswar", tier: "gold",
    emoji: "👩", image: indianModelPhotos[139],
    images: [indianModelPhotos[139]],
    rating: 5, reviewCount: 22, isNew: false, verified: true,
    pricing: { "1hour": 7500, currency: "₹" },
    description: "Available in Bhubaneswar. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_140", name: "Swati Mehta", age: 18, city: "Chandigarh", tier: "gold",
    emoji: "👩", image: indianModelPhotos[140],
    images: [indianModelPhotos[140]],
    rating: 5, reviewCount: 35, isNew: false, verified: true,
    pricing: { "1hour": 6000, currency: "₹" },
    description: "Available in Chandigarh. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_141", name: "Shruti Gupta", age: 19, city: "Kolkata", tier: "gold",
    emoji: "👩", image: indianModelPhotos[141],
    images: [indianModelPhotos[141]],
    rating: 5, reviewCount: 39, isNew: false, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Kolkata. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_142", name: "Aayushi Nair", age: 20, city: "Bhopal", tier: "gold",
    emoji: "👩", image: indianModelPhotos[142],
    images: [indianModelPhotos[142]],
    rating: 5, reviewCount: 33, isNew: false, verified: true,
    pricing: { "1hour": 4500, currency: "₹" },
    description: "Available in Bhopal. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_143", name: "Tamanna Mishra", age: 21, city: "Pune", tier: "gold",
    emoji: "👩", image: indianModelPhotos[143],
    images: [indianModelPhotos[143]],
    rating: 5, reviewCount: 53, isNew: false, verified: true,
    pricing: { "1hour": 6000, currency: "₹" },
    description: "Available in Pune. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_144", name: "Sana Soni", age: 22, city: "Kolkata", tier: "gold",
    emoji: "👩", image: indianModelPhotos[144],
    images: [indianModelPhotos[144]],
    rating: 5, reviewCount: 17, isNew: false, verified: true,
    pricing: { "1hour": 4500, currency: "₹" },
    description: "Available in Kolkata. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_145", name: "Rashmi Gupta", age: 23, city: "Jaipur", tier: "gold",
    emoji: "👩", image: indianModelPhotos[145],
    images: [indianModelPhotos[145]],
    rating: 5, reviewCount: 48, isNew: false, verified: true,
    pricing: { "1hour": 5000, currency: "₹" },
    description: "Available in Jaipur. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_146", name: "Kritika Mehta", age: 24, city: "Visakhapatnam", tier: "gold",
    emoji: "👩", image: indianModelPhotos[146],
    images: [indianModelPhotos[146]],
    rating: 5, reviewCount: 35, isNew: false, verified: true,
    pricing: { "1hour": 7500, currency: "₹" },
    description: "Available in Visakhapatnam. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_147", name: "Katrina Mehta", age: 25, city: "Delhi / NCR", tier: "gold",
    emoji: "👩", image: indianModelPhotos[147],
    images: [indianModelPhotos[147]],
    rating: 5, reviewCount: 39, isNew: false, verified: true,
    pricing: { "1hour": 3500, currency: "₹" },
    description: "Available in Delhi / NCR. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_148", name: "Srishti Jain", age: 26, city: "Bhubaneswar", tier: "gold",
    emoji: "👩", image: indianModelPhotos[148],
    images: [indianModelPhotos[148]],
    rating: 5, reviewCount: 36, isNew: false, verified: true,
    pricing: { "1hour": 4500, currency: "₹" },
    description: "Available in Bhubaneswar. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_149", name: "Aditi Mishra", age: 27, city: "Pune", tier: "gold",
    emoji: "👩", image: indianModelPhotos[149],
    images: [indianModelPhotos[149]],
    rating: 5, reviewCount: 49, isNew: false, verified: true,
    pricing: { "1hour": 3500, currency: "₹" },
    description: "Available in Pune. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_150", name: "Poonam Malik", age: 18, city: "Hyderabad", tier: "gold",
    emoji: "👩", image: indianModelPhotos[150],
    images: [indianModelPhotos[150]],
    rating: 5, reviewCount: 19, isNew: false, verified: true,
    pricing: { "1hour": 7500, currency: "₹" },
    description: "Available in Hyderabad. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_151", name: "Monika Bhatia", age: 19, city: "Delhi / NCR", tier: "gold",
    emoji: "👩", image: indianModelPhotos[151],
    images: [indianModelPhotos[151]],
    rating: 5, reviewCount: 28, isNew: false, verified: true,
    pricing: { "1hour": 5000, currency: "₹" },
    description: "Available in Delhi / NCR. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_152", name: "Malini Patil", age: 20, city: "Bengaluru", tier: "gold",
    emoji: "👩", image: indianModelPhotos[152],
    images: [indianModelPhotos[152]],
    rating: 5, reviewCount: 42, isNew: false, verified: true,
    pricing: { "1hour": 6500, currency: "₹" },
    description: "Available in Bengaluru. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_153", name: "Saloni Bhatia", age: 21, city: "Shimla", tier: "gold",
    emoji: "👩", image: indianModelPhotos[153],
    images: [indianModelPhotos[153]],
    rating: 5, reviewCount: 22, isNew: true, verified: true,
    pricing: { "1hour": 5500, currency: "₹" },
    description: "Available in Shimla. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_154", name: "Sanika Mishra", age: 22, city: "Goa", tier: "gold",
    emoji: "👩", image: indianModelPhotos[154],
    images: [indianModelPhotos[154]],
    rating: 5, reviewCount: 31, isNew: true, verified: true,
    pricing: { "1hour": 3500, currency: "₹" },
    description: "Available in Goa. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_155", name: "Sanika Verma", age: 23, city: "Udaipur", tier: "gold",
    emoji: "👩", image: indianModelPhotos[155],
    images: [indianModelPhotos[155]],
    rating: 5, reviewCount: 51, isNew: false, verified: true,
    pricing: { "1hour": 7000, currency: "₹" },
    description: "Available in Udaipur. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_156", name: "Sanjana Reddy", age: 24, city: "Coimbatore", tier: "gold",
    emoji: "👩", image: indianModelPhotos[156],
    images: [indianModelPhotos[156]],
    rating: 5, reviewCount: 39, isNew: false, verified: true,
    pricing: { "1hour": 7500, currency: "₹" },
    description: "Available in Coimbatore. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_157", name: "Kritika Rao", age: 25, city: "Bhubaneswar", tier: "gold",
    emoji: "👩", image: indianModelPhotos[157],
    images: [indianModelPhotos[157]],
    rating: 5, reviewCount: 25, isNew: false, verified: true,
    pricing: { "1hour": 6000, currency: "₹" },
    description: "Available in Bhubaneswar. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_158", name: "Shruti Singh", age: 26, city: "Bhopal", tier: "gold",
    emoji: "👩", image: indianModelPhotos[158],
    images: [indianModelPhotos[158]],
    rating: 5, reviewCount: 41, isNew: false, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Bhopal. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_159", name: "Rashmi Rajput", age: 27, city: "Delhi / NCR", tier: "gold",
    emoji: "👩", image: indianModelPhotos[159],
    images: [indianModelPhotos[159]],
    rating: 5, reviewCount: 15, isNew: false, verified: true,
    pricing: { "1hour": 5500, currency: "₹" },
    description: "Available in Delhi / NCR. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_160", name: "Kritika Bhatia", age: 18, city: "Bhubaneswar", tier: "gold",
    emoji: "👩", image: indianModelPhotos[160],
    images: [indianModelPhotos[160]],
    rating: 5, reviewCount: 25, isNew: false, verified: true,
    pricing: { "1hour": 6000, currency: "₹" },
    description: "Available in Bhubaneswar. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_161", name: "Gauri Khan", age: 19, city: "Shimla", tier: "gold",
    emoji: "👩", image: indianModelPhotos[161],
    images: [indianModelPhotos[161]],
    rating: 5, reviewCount: 43, isNew: true, verified: true,
    pricing: { "1hour": 6000, currency: "₹" },
    description: "Available in Shimla. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_162", name: "Khushi Pandey", age: 20, city: "Udaipur", tier: "gold",
    emoji: "👩", image: indianModelPhotos[162],
    images: [indianModelPhotos[162]],
    rating: 5, reviewCount: 46, isNew: true, verified: true,
    pricing: { "1hour": 4500, currency: "₹" },
    description: "Available in Udaipur. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_163", name: "Kareena Mehta", age: 21, city: "Mumbai", tier: "gold",
    emoji: "👩", image: indianModelPhotos[163],
    images: [indianModelPhotos[163]],
    rating: 5, reviewCount: 15, isNew: false, verified: true,
    pricing: { "1hour": 3500, currency: "₹" },
    description: "Available in Mumbai. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_164", name: "Gauri Soni", age: 22, city: "Mumbai", tier: "gold",
    emoji: "👩", image: indianModelPhotos[164],
    images: [indianModelPhotos[164]],
    rating: 5, reviewCount: 49, isNew: true, verified: true,
    pricing: { "1hour": 6000, currency: "₹" },
    description: "Available in Mumbai. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_165", name: "Nidhi Singh", age: 23, city: "Indore", tier: "gold",
    emoji: "👩", image: indianModelPhotos[165],
    images: [indianModelPhotos[165]],
    rating: 5, reviewCount: 54, isNew: false, verified: true,
    pricing: { "1hour": 5000, currency: "₹" },
    description: "Available in Indore. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_166", name: "Gargi Kapoor", age: 24, city: "Patna", tier: "gold",
    emoji: "👩", image: indianModelPhotos[166],
    images: [indianModelPhotos[166]],
    rating: 5, reviewCount: 17, isNew: false, verified: true,
    pricing: { "1hour": 7000, currency: "₹" },
    description: "Available in Patna. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_167", name: "Katrina Das", age: 25, city: "Meerut", tier: "gold",
    emoji: "👩", image: indianModelPhotos[167],
    images: [indianModelPhotos[167]],
    rating: 5, reviewCount: 34, isNew: true, verified: true,
    pricing: { "1hour": 5000, currency: "₹" },
    description: "Available in Meerut. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_168", name: "Sneha Gowda", age: 26, city: "Shimla", tier: "gold",
    emoji: "👩", image: indianModelPhotos[168],
    images: [indianModelPhotos[168]],
    rating: 5, reviewCount: 44, isNew: true, verified: true,
    pricing: { "1hour": 4500, currency: "₹" },
    description: "Available in Shimla. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_169", name: "Geeta Pandey", age: 27, city: "Meerut", tier: "gold",
    emoji: "👩", image: indianModelPhotos[169],
    images: [indianModelPhotos[169]],
    rating: 5, reviewCount: 29, isNew: false, verified: true,
    pricing: { "1hour": 6500, currency: "₹" },
    description: "Available in Meerut. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_170", name: "Pallavi Tiwari", age: 18, city: "Surat", tier: "gold",
    emoji: "👩", image: indianModelPhotos[170],
    images: [indianModelPhotos[170]],
    rating: 5, reviewCount: 34, isNew: false, verified: true,
    pricing: { "1hour": 5500, currency: "₹" },
    description: "Available in Surat. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_171", name: "Rupal Rajput", age: 19, city: "Delhi / NCR", tier: "gold",
    emoji: "👩", image: indianModelPhotos[171],
    images: [indianModelPhotos[171]],
    rating: 5, reviewCount: 19, isNew: false, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Delhi / NCR. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_172", name: "Shivani Desai", age: 20, city: "Bhubaneswar", tier: "gold",
    emoji: "👩", image: indianModelPhotos[172],
    images: [indianModelPhotos[172]],
    rating: 5, reviewCount: 29, isNew: false, verified: true,
    pricing: { "1hour": 5000, currency: "₹" },
    description: "Available in Bhubaneswar. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_173", name: "Seema Sharma", age: 21, city: "Surat", tier: "gold",
    emoji: "👩", image: indianModelPhotos[173],
    images: [indianModelPhotos[173]],
    rating: 5, reviewCount: 31, isNew: true, verified: true,
    pricing: { "1hour": 6000, currency: "₹" },
    description: "Available in Surat. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_174", name: "Ishita Gowda", age: 22, city: "Visakhapatnam", tier: "gold",
    emoji: "👩", image: indianModelPhotos[174],
    images: [indianModelPhotos[174]],
    rating: 5, reviewCount: 49, isNew: false, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Visakhapatnam. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_175", name: "Disha Kumari", age: 23, city: "Patna", tier: "gold",
    emoji: "👩", image: indianModelPhotos[175],
    images: [indianModelPhotos[175]],
    rating: 5, reviewCount: 27, isNew: false, verified: true,
    pricing: { "1hour": 6000, currency: "₹" },
    description: "Available in Patna. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_176", name: "Roshni Malik", age: 24, city: "Hyderabad", tier: "gold",
    emoji: "👩", image: indianModelPhotos[176],
    images: [indianModelPhotos[176]],
    rating: 5, reviewCount: 42, isNew: false, verified: true,
    pricing: { "1hour": 4000, currency: "₹" },
    description: "Available in Hyderabad. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_177", name: "Lakshmi Kaur", age: 25, city: "Chennai", tier: "gold",
    emoji: "👩", image: indianModelPhotos[177],
    images: [indianModelPhotos[177]],
    rating: 5, reviewCount: 44, isNew: true, verified: true,
    pricing: { "1hour": 4500, currency: "₹" },
    description: "Available in Chennai. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_178", name: "Manasi Gupta", age: 26, city: "Jaipur", tier: "gold",
    emoji: "👩", image: indianModelPhotos[178],
    images: [indianModelPhotos[178]],
    rating: 5, reviewCount: 20, isNew: false, verified: true,
    pricing: { "1hour": 3500, currency: "₹" },
    description: "Available in Jaipur. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_179", name: "Shruti Nair", age: 27, city: "Chandigarh", tier: "gold",
    emoji: "👩", image: indianModelPhotos[179],
    images: [indianModelPhotos[179]],
    rating: 5, reviewCount: 21, isNew: true, verified: true,
    pricing: { "1hour": 4500, currency: "₹" },
    description: "Available in Chandigarh. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_180", name: "Jahnvi Reddy", age: 18, city: "Chennai", tier: "gold",
    emoji: "👩", image: indianModelPhotos[180],
    images: [indianModelPhotos[180]],
    rating: 5, reviewCount: 29, isNew: false, verified: true,
    pricing: { "1hour": 6000, currency: "₹" },
    description: "Available in Chennai. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_181", name: "Nandini Mehta", age: 19, city: "Varanasi", tier: "gold",
    emoji: "👩", image: indianModelPhotos[181],
    images: [indianModelPhotos[181]],
    rating: 5, reviewCount: 54, isNew: false, verified: true,
    pricing: { "1hour": 4500, currency: "₹" },
    description: "Available in Varanasi. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_182", name: "Srishti Verma", age: 20, city: "Amritsar", tier: "gold",
    emoji: "👩", image: indianModelPhotos[182],
    images: [indianModelPhotos[182]],
    rating: 5, reviewCount: 26, isNew: false, verified: true,
    pricing: { "1hour": 5000, currency: "₹" },
    description: "Available in Amritsar. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_183", name: "Gargi Joshi", age: 21, city: "Amritsar", tier: "gold",
    emoji: "👩", image: indianModelPhotos[183],
    images: [indianModelPhotos[183]],
    rating: 5, reviewCount: 49, isNew: false, verified: true,
    pricing: { "1hour": 6000, currency: "₹" },
    description: "Available in Amritsar. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_184", name: "Rashmi Desai", age: 22, city: "Nagpur", tier: "gold",
    emoji: "👩", image: indianModelPhotos[184],
    images: [indianModelPhotos[184]],
    rating: 5, reviewCount: 28, isNew: false, verified: true,
    pricing: { "1hour": 6500, currency: "₹" },
    description: "Available in Nagpur. 100% genuine and verified. Message for details."
  },

];

export const silverListings: Listing[] = [
  {
    id: "dyn_v3_185", name: "Priya Joshi", age: 23, city: "Delhi / NCR", tier: "silver",
    emoji: "👩", image: indianModelPhotos[185],
    images: [indianModelPhotos[185]],
    rating: 5, reviewCount: 39, isNew: false, verified: true,
    pricing: { "1hour": 7000, currency: "₹" },
    description: "Available in Delhi / NCR. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_186", name: "Vaishnavi Jain", age: 24, city: "Chennai", tier: "silver",
    emoji: "👩", image: indianModelPhotos[186],
    images: [indianModelPhotos[186]],
    rating: 5, reviewCount: 18, isNew: false, verified: true,
    pricing: { "1hour": 4500, currency: "₹" },
    description: "Available in Chennai. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_187", name: "Aditi Singh", age: 25, city: "Goa", tier: "silver",
    emoji: "👩", image: indianModelPhotos[187],
    images: [indianModelPhotos[187]],
    rating: 5, reviewCount: 29, isNew: false, verified: true,
    pricing: { "1hour": 5000, currency: "₹" },
    description: "Available in Goa. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_188", name: "Vidya Rajput", age: 26, city: "Kochi", tier: "silver",
    emoji: "👩", image: indianModelPhotos[188],
    images: [indianModelPhotos[188]],
    rating: 5, reviewCount: 50, isNew: true, verified: true,
    pricing: { "1hour": 6500, currency: "₹" },
    description: "Available in Kochi. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_189", name: "Chahat Gowda", age: 27, city: "Bengaluru", tier: "silver",
    emoji: "👩", image: indianModelPhotos[189],
    images: [indianModelPhotos[189]],
    rating: 5, reviewCount: 22, isNew: false, verified: true,
    pricing: { "1hour": 5500, currency: "₹" },
    description: "Available in Bengaluru. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_190", name: "Niharika Soni", age: 18, city: "Bengaluru", tier: "silver",
    emoji: "👩", image: indianModelPhotos[190],
    images: [indianModelPhotos[190]],
    rating: 5, reviewCount: 54, isNew: false, verified: true,
    pricing: { "1hour": 5500, currency: "₹" },
    description: "Available in Bengaluru. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_191", name: "Sunita Tiwari", age: 19, city: "Hyderabad", tier: "silver",
    emoji: "👩", image: indianModelPhotos[191],
    images: [indianModelPhotos[191]],
    rating: 5, reviewCount: 32, isNew: false, verified: true,
    pricing: { "1hour": 5500, currency: "₹" },
    description: "Available in Hyderabad. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_192", name: "Pallavi Verma", age: 20, city: "Chandigarh", tier: "silver",
    emoji: "👩", image: indianModelPhotos[192],
    images: [indianModelPhotos[192]],
    rating: 5, reviewCount: 22, isNew: false, verified: true,
    pricing: { "1hour": 6000, currency: "₹" },
    description: "Available in Chandigarh. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_193", name: "Megha Desai", age: 21, city: "Hyderabad", tier: "silver",
    emoji: "👩", image: indianModelPhotos[193],
    images: [indianModelPhotos[193]],
    rating: 5, reviewCount: 28, isNew: false, verified: true,
    pricing: { "1hour": 7000, currency: "₹" },
    description: "Available in Hyderabad. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_194", name: "Komal Joshi", age: 22, city: "Patna", tier: "silver",
    emoji: "👩", image: indianModelPhotos[194],
    images: [indianModelPhotos[194]],
    rating: 5, reviewCount: 46, isNew: false, verified: true,
    pricing: { "1hour": 7000, currency: "₹" },
    description: "Available in Patna. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_195", name: "Ishita Rao", age: 23, city: "Agra", tier: "silver",
    emoji: "👩", image: indianModelPhotos[195],
    images: [indianModelPhotos[195]],
    rating: 5, reviewCount: 46, isNew: false, verified: true,
    pricing: { "1hour": 4500, currency: "₹" },
    description: "Available in Agra. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_196", name: "Heena Malik", age: 24, city: "Pune", tier: "silver",
    emoji: "👩", image: indianModelPhotos[196],
    images: [indianModelPhotos[196]],
    rating: 5, reviewCount: 43, isNew: false, verified: true,
    pricing: { "1hour": 6500, currency: "₹" },
    description: "Available in Pune. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_197", name: "Shalini Sharma", age: 25, city: "Ahmedabad", tier: "silver",
    emoji: "👩", image: indianModelPhotos[197],
    images: [indianModelPhotos[197]],
    rating: 5, reviewCount: 31, isNew: false, verified: true,
    pricing: { "1hour": 3500, currency: "₹" },
    description: "Available in Ahmedabad. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_198", name: "Sapna Pandey", age: 26, city: "Bhubaneswar", tier: "silver",
    emoji: "👩", image: indianModelPhotos[198],
    images: [indianModelPhotos[198]],
    rating: 5, reviewCount: 20, isNew: false, verified: true,
    pricing: { "1hour": 7500, currency: "₹" },
    description: "Available in Bhubaneswar. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_199", name: "Smriti Chauhan", age: 27, city: "Amritsar", tier: "silver",
    emoji: "👩", image: indianModelPhotos[199],
    images: [indianModelPhotos[199]],
    rating: 5, reviewCount: 37, isNew: false, verified: true,
    pricing: { "1hour": 5000, currency: "₹" },
    description: "Available in Amritsar. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_200", name: "Sapna Sharma", age: 18, city: "Udaipur", tier: "silver",
    emoji: "👩", image: indianModelPhotos[200],
    images: [indianModelPhotos[200]],
    rating: 5, reviewCount: 27, isNew: false, verified: true,
    pricing: { "1hour": 5000, currency: "₹" },
    description: "Available in Udaipur. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_201", name: "Ruchi Khan", age: 19, city: "Kolkata", tier: "silver",
    emoji: "👩", image: indianModelPhotos[201],
    images: [indianModelPhotos[201]],
    rating: 5, reviewCount: 47, isNew: false, verified: true,
    pricing: { "1hour": 5500, currency: "₹" },
    description: "Available in Kolkata. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_202", name: "Vandana Nair", age: 20, city: "Patna", tier: "silver",
    emoji: "👩", image: indianModelPhotos[202],
    images: [indianModelPhotos[202]],
    rating: 5, reviewCount: 21, isNew: true, verified: true,
    pricing: { "1hour": 7000, currency: "₹" },
    description: "Available in Patna. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_203", name: "Prachi Desai", age: 21, city: "Hyderabad", tier: "silver",
    emoji: "👩", image: indianModelPhotos[203],
    images: [indianModelPhotos[203]],
    rating: 5, reviewCount: 42, isNew: false, verified: true,
    pricing: { "1hour": 7000, currency: "₹" },
    description: "Available in Hyderabad. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_204", name: "Rupal Mishra", age: 22, city: "Ahmedabad", tier: "silver",
    emoji: "👩", image: indianModelPhotos[204],
    images: [indianModelPhotos[204]],
    rating: 5, reviewCount: 34, isNew: false, verified: true,
    pricing: { "1hour": 4500, currency: "₹" },
    description: "Available in Ahmedabad. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_205", name: "Priya Malik", age: 23, city: "Shimla", tier: "silver",
    emoji: "👩", image: indianModelPhotos[205],
    images: [indianModelPhotos[205]],
    rating: 5, reviewCount: 35, isNew: true, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Shimla. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_206", name: "Nikita Dubey", age: 24, city: "Visakhapatnam", tier: "silver",
    emoji: "👩", image: indianModelPhotos[206],
    images: [indianModelPhotos[206]],
    rating: 5, reviewCount: 17, isNew: true, verified: true,
    pricing: { "1hour": 6500, currency: "₹" },
    description: "Available in Visakhapatnam. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_207", name: "Tejaswini Gupta", age: 25, city: "Surat", tier: "silver",
    emoji: "👩", image: indianModelPhotos[207],
    images: [indianModelPhotos[207]],
    rating: 5, reviewCount: 37, isNew: true, verified: true,
    pricing: { "1hour": 5000, currency: "₹" },
    description: "Available in Surat. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_208", name: "Aarohi Das", age: 26, city: "Goa", tier: "silver",
    emoji: "👩", image: indianModelPhotos[208],
    images: [indianModelPhotos[208]],
    rating: 5, reviewCount: 54, isNew: true, verified: true,
    pricing: { "1hour": 3500, currency: "₹" },
    description: "Available in Goa. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_209", name: "Geeta Bhatia", age: 27, city: "Bengaluru", tier: "silver",
    emoji: "👩", image: indianModelPhotos[209],
    images: [indianModelPhotos[209]],
    rating: 5, reviewCount: 15, isNew: false, verified: true,
    pricing: { "1hour": 7000, currency: "₹" },
    description: "Available in Bengaluru. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_210", name: "Vaishnavi Bhatia", age: 18, city: "Bhopal", tier: "silver",
    emoji: "👩", image: indianModelPhotos[210],
    images: [indianModelPhotos[210]],
    rating: 5, reviewCount: 29, isNew: false, verified: true,
    pricing: { "1hour": 6000, currency: "₹" },
    description: "Available in Bhopal. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_211", name: "Soniya Verma", age: 19, city: "Hyderabad", tier: "silver",
    emoji: "👩", image: indianModelPhotos[211],
    images: [indianModelPhotos[211]],
    rating: 5, reviewCount: 42, isNew: true, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Hyderabad. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_212", name: "Srishti Nair", age: 20, city: "Bhubaneswar", tier: "silver",
    emoji: "👩", image: indianModelPhotos[212],
    images: [indianModelPhotos[212]],
    rating: 5, reviewCount: 22, isNew: false, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Bhubaneswar. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_213", name: "Ruchi Mehta", age: 21, city: "Amritsar", tier: "silver",
    emoji: "👩", image: indianModelPhotos[213],
    images: [indianModelPhotos[213]],
    rating: 5, reviewCount: 40, isNew: false, verified: true,
    pricing: { "1hour": 5000, currency: "₹" },
    description: "Available in Amritsar. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_214", name: "Jyoti Reddy", age: 22, city: "Goa", tier: "silver",
    emoji: "👩", image: indianModelPhotos[214],
    images: [indianModelPhotos[214]],
    rating: 5, reviewCount: 37, isNew: false, verified: true,
    pricing: { "1hour": 7000, currency: "₹" },
    description: "Available in Goa. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_215", name: "Kiara Singh", age: 23, city: "Udaipur", tier: "silver",
    emoji: "👩", image: indianModelPhotos[215],
    images: [indianModelPhotos[215]],
    rating: 5, reviewCount: 51, isNew: false, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Udaipur. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_216", name: "Divya Rao", age: 24, city: "Chandigarh", tier: "silver",
    emoji: "👩", image: indianModelPhotos[216],
    images: [indianModelPhotos[216]],
    rating: 5, reviewCount: 39, isNew: true, verified: true,
    pricing: { "1hour": 6500, currency: "₹" },
    description: "Available in Chandigarh. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_217", name: "Sana Bhatia", age: 25, city: "Amritsar", tier: "silver",
    emoji: "👩", image: indianModelPhotos[217],
    images: [indianModelPhotos[217]],
    rating: 5, reviewCount: 47, isNew: true, verified: true,
    pricing: { "1hour": 3500, currency: "₹" },
    description: "Available in Amritsar. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_218", name: "Soniya Soni", age: 26, city: "Chennai", tier: "silver",
    emoji: "👩", image: indianModelPhotos[218],
    images: [indianModelPhotos[218]],
    rating: 5, reviewCount: 21, isNew: false, verified: true,
    pricing: { "1hour": 6000, currency: "₹" },
    description: "Available in Chennai. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_219", name: "Pallavi Desai", age: 27, city: "Bengaluru", tier: "silver",
    emoji: "👩", image: indianModelPhotos[219],
    images: [indianModelPhotos[219]],
    rating: 5, reviewCount: 19, isNew: false, verified: true,
    pricing: { "1hour": 6000, currency: "₹" },
    description: "Available in Bengaluru. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_220", name: "Radhika Dubey", age: 18, city: "Meerut", tier: "silver",
    emoji: "👩", image: indianModelPhotos[220],
    images: [indianModelPhotos[220]],
    rating: 5, reviewCount: 49, isNew: false, verified: true,
    pricing: { "1hour": 3500, currency: "₹" },
    description: "Available in Meerut. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_221", name: "Priyanka Yadav", age: 19, city: "Patna", tier: "silver",
    emoji: "👩", image: indianModelPhotos[221],
    images: [indianModelPhotos[221]],
    rating: 5, reviewCount: 50, isNew: false, verified: true,
    pricing: { "1hour": 4500, currency: "₹" },
    description: "Available in Patna. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_222", name: "Radhika Bhatia", age: 20, city: "Meerut", tier: "silver",
    emoji: "👩", image: indianModelPhotos[222],
    images: [indianModelPhotos[222]],
    rating: 5, reviewCount: 19, isNew: true, verified: true,
    pricing: { "1hour": 7000, currency: "₹" },
    description: "Available in Meerut. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_223", name: "Ishita Dubey", age: 21, city: "Nagpur", tier: "silver",
    emoji: "👩", image: indianModelPhotos[223],
    images: [indianModelPhotos[223]],
    rating: 5, reviewCount: 29, isNew: true, verified: true,
    pricing: { "1hour": 7000, currency: "₹" },
    description: "Available in Nagpur. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_224", name: "Ridhi Singh", age: 22, city: "Chandigarh", tier: "silver",
    emoji: "👩", image: indianModelPhotos[224],
    images: [indianModelPhotos[224]],
    rating: 5, reviewCount: 46, isNew: false, verified: true,
    pricing: { "1hour": 4000, currency: "₹" },
    description: "Available in Chandigarh. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_225", name: "Pallavi Gowda", age: 23, city: "Agra", tier: "silver",
    emoji: "👩", image: indianModelPhotos[225],
    images: [indianModelPhotos[225]],
    rating: 5, reviewCount: 26, isNew: false, verified: true,
    pricing: { "1hour": 4500, currency: "₹" },
    description: "Available in Agra. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_226", name: "Monika Tiwari", age: 24, city: "Mumbai", tier: "silver",
    emoji: "👩", image: indianModelPhotos[226],
    images: [indianModelPhotos[226]],
    rating: 5, reviewCount: 48, isNew: false, verified: true,
    pricing: { "1hour": 5000, currency: "₹" },
    description: "Available in Mumbai. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_227", name: "Jahnvi Gupta", age: 25, city: "Shimla", tier: "silver",
    emoji: "👩", image: indianModelPhotos[227],
    images: [indianModelPhotos[227]],
    rating: 5, reviewCount: 45, isNew: false, verified: true,
    pricing: { "1hour": 4500, currency: "₹" },
    description: "Available in Shimla. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_228", name: "Palak Dubey", age: 26, city: "Amritsar", tier: "silver",
    emoji: "👩", image: indianModelPhotos[228],
    images: [indianModelPhotos[228]],
    rating: 5, reviewCount: 37, isNew: false, verified: true,
    pricing: { "1hour": 4000, currency: "₹" },
    description: "Available in Amritsar. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_229", name: "Avani Soni", age: 27, city: "Varanasi", tier: "silver",
    emoji: "👩", image: indianModelPhotos[229],
    images: [indianModelPhotos[229]],
    rating: 5, reviewCount: 37, isNew: true, verified: true,
    pricing: { "1hour": 5500, currency: "₹" },
    description: "Available in Varanasi. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_230", name: "Sana Malik", age: 18, city: "Udaipur", tier: "silver",
    emoji: "👩", image: indianModelPhotos[230],
    images: [indianModelPhotos[230]],
    rating: 5, reviewCount: 35, isNew: false, verified: true,
    pricing: { "1hour": 5000, currency: "₹" },
    description: "Available in Udaipur. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_231", name: "Simran Yadav", age: 19, city: "Chandigarh", tier: "silver",
    emoji: "👩", image: indianModelPhotos[231],
    images: [indianModelPhotos[231]],
    rating: 5, reviewCount: 31, isNew: false, verified: true,
    pricing: { "1hour": 7000, currency: "₹" },
    description: "Available in Chandigarh. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_232", name: "Sonal Tiwari", age: 20, city: "Meerut", tier: "silver",
    emoji: "👩", image: indianModelPhotos[232],
    images: [indianModelPhotos[232]],
    rating: 5, reviewCount: 32, isNew: true, verified: true,
    pricing: { "1hour": 7000, currency: "₹" },
    description: "Available in Meerut. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_233", name: "Malini Yadav", age: 21, city: "Bengaluru", tier: "silver",
    emoji: "👩", image: indianModelPhotos[233],
    images: [indianModelPhotos[233]],
    rating: 5, reviewCount: 25, isNew: true, verified: true,
    pricing: { "1hour": 6000, currency: "₹" },
    description: "Available in Bengaluru. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_234", name: "Shivani Kaur", age: 22, city: "Delhi / NCR", tier: "silver",
    emoji: "👩", image: indianModelPhotos[234],
    images: [indianModelPhotos[234]],
    rating: 5, reviewCount: 28, isNew: false, verified: true,
    pricing: { "1hour": 4000, currency: "₹" },
    description: "Available in Delhi / NCR. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_235", name: "Ridhi Pandey", age: 23, city: "Goa", tier: "silver",
    emoji: "👩", image: indianModelPhotos[235],
    images: [indianModelPhotos[235]],
    rating: 5, reviewCount: 35, isNew: false, verified: true,
    pricing: { "1hour": 7500, currency: "₹" },
    description: "Available in Goa. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_236", name: "Tanya Patil", age: 24, city: "Mumbai", tier: "silver",
    emoji: "👩", image: indianModelPhotos[236],
    images: [indianModelPhotos[236]],
    rating: 5, reviewCount: 36, isNew: false, verified: true,
    pricing: { "1hour": 5000, currency: "₹" },
    description: "Available in Mumbai. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_237", name: "Shalini Khan", age: 25, city: "Hyderabad", tier: "silver",
    emoji: "👩", image: indianModelPhotos[237],
    images: [indianModelPhotos[237]],
    rating: 5, reviewCount: 49, isNew: false, verified: true,
    pricing: { "1hour": 5000, currency: "₹" },
    description: "Available in Hyderabad. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_238", name: "Katrina Malik", age: 26, city: "Nagpur", tier: "silver",
    emoji: "👩", image: indianModelPhotos[238],
    images: [indianModelPhotos[238]],
    rating: 5, reviewCount: 20, isNew: true, verified: true,
    pricing: { "1hour": 4000, currency: "₹" },
    description: "Available in Nagpur. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_239", name: "Sneha Pandey", age: 27, city: "Goa", tier: "silver",
    emoji: "👩", image: indianModelPhotos[239],
    images: [indianModelPhotos[239]],
    rating: 5, reviewCount: 29, isNew: false, verified: true,
    pricing: { "1hour": 6000, currency: "₹" },
    description: "Available in Goa. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_240", name: "Raveena Jain", age: 18, city: "Kolkata", tier: "silver",
    emoji: "👩", image: indianModelPhotos[240],
    images: [indianModelPhotos[240]],
    rating: 5, reviewCount: 26, isNew: false, verified: true,
    pricing: { "1hour": 7000, currency: "₹" },
    description: "Available in Kolkata. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_241", name: "Seema Jain", age: 19, city: "Surat", tier: "silver",
    emoji: "👩", image: indianModelPhotos[241],
    images: [indianModelPhotos[241]],
    rating: 5, reviewCount: 53, isNew: false, verified: true,
    pricing: { "1hour": 7500, currency: "₹" },
    description: "Available in Surat. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_242", name: "Prachi Gowda", age: 20, city: "Varanasi", tier: "silver",
    emoji: "👩", image: indianModelPhotos[242],
    images: [indianModelPhotos[242]],
    rating: 5, reviewCount: 27, isNew: false, verified: true,
    pricing: { "1hour": 7500, currency: "₹" },
    description: "Available in Varanasi. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_243", name: "Ishita Kaur", age: 21, city: "Hyderabad", tier: "silver",
    emoji: "👩", image: indianModelPhotos[243],
    images: [indianModelPhotos[243]],
    rating: 5, reviewCount: 26, isNew: false, verified: true,
    pricing: { "1hour": 5000, currency: "₹" },
    description: "Available in Hyderabad. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_244", name: "Palak Pandey", age: 22, city: "Manali", tier: "silver",
    emoji: "👩", image: indianModelPhotos[244],
    images: [indianModelPhotos[244]],
    rating: 5, reviewCount: 16, isNew: true, verified: true,
    pricing: { "1hour": 7500, currency: "₹" },
    description: "Available in Manali. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_245", name: "Zoya Patil", age: 23, city: "Goa", tier: "silver",
    emoji: "👩", image: indianModelPhotos[245],
    images: [indianModelPhotos[245]],
    rating: 5, reviewCount: 21, isNew: false, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Goa. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_246", name: "Nikita Das", age: 24, city: "Bengaluru", tier: "silver",
    emoji: "👩", image: indianModelPhotos[246],
    images: [indianModelPhotos[246]],
    rating: 5, reviewCount: 30, isNew: false, verified: true,
    pricing: { "1hour": 5000, currency: "₹" },
    description: "Available in Bengaluru. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_247", name: "Lakshmi Kapoor", age: 25, city: "Udaipur", tier: "silver",
    emoji: "👩", image: indianModelPhotos[247],
    images: [indianModelPhotos[247]],
    rating: 5, reviewCount: 34, isNew: false, verified: true,
    pricing: { "1hour": 6500, currency: "₹" },
    description: "Available in Udaipur. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_248", name: "Suman Kaur", age: 26, city: "Bhubaneswar", tier: "silver",
    emoji: "👩", image: indianModelPhotos[248],
    images: [indianModelPhotos[248]],
    rating: 5, reviewCount: 43, isNew: true, verified: true,
    pricing: { "1hour": 5500, currency: "₹" },
    description: "Available in Bhubaneswar. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_249", name: "Komal Sharma", age: 27, city: "Pune", tier: "silver",
    emoji: "👩", image: indianModelPhotos[249],
    images: [indianModelPhotos[249]],
    rating: 5, reviewCount: 16, isNew: false, verified: true,
    pricing: { "1hour": 5500, currency: "₹" },
    description: "Available in Pune. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_250", name: "Ruchi Dubey", age: 18, city: "Amritsar", tier: "silver",
    emoji: "👩", image: indianModelPhotos[250],
    images: [indianModelPhotos[250]],
    rating: 5, reviewCount: 34, isNew: false, verified: true,
    pricing: { "1hour": 5000, currency: "₹" },
    description: "Available in Amritsar. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_251", name: "Kiara Gowda", age: 19, city: "Amritsar", tier: "silver",
    emoji: "👩", image: indianModelPhotos[251],
    images: [indianModelPhotos[251]],
    rating: 5, reviewCount: 54, isNew: false, verified: true,
    pricing: { "1hour": 7500, currency: "₹" },
    description: "Available in Amritsar. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_252", name: "Preeti Desai", age: 20, city: "Amritsar", tier: "silver",
    emoji: "👩", image: indianModelPhotos[252],
    images: [indianModelPhotos[252]],
    rating: 5, reviewCount: 49, isNew: false, verified: true,
    pricing: { "1hour": 3500, currency: "₹" },
    description: "Available in Amritsar. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_253", name: "Sneha Mehta", age: 21, city: "Nagpur", tier: "silver",
    emoji: "👩", image: indianModelPhotos[253],
    images: [indianModelPhotos[253]],
    rating: 5, reviewCount: 18, isNew: false, verified: true,
    pricing: { "1hour": 3500, currency: "₹" },
    description: "Available in Nagpur. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_254", name: "Neha Gowda", age: 22, city: "Udaipur", tier: "silver",
    emoji: "👩", image: indianModelPhotos[254],
    images: [indianModelPhotos[254]],
    rating: 5, reviewCount: 35, isNew: false, verified: true,
    pricing: { "1hour": 4500, currency: "₹" },
    description: "Available in Udaipur. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_255", name: "Bhumika Mishra", age: 23, city: "Bhubaneswar", tier: "silver",
    emoji: "👩", image: indianModelPhotos[255],
    images: [indianModelPhotos[255]],
    rating: 5, reviewCount: 49, isNew: false, verified: true,
    pricing: { "1hour": 5000, currency: "₹" },
    description: "Available in Bhubaneswar. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_256", name: "Trisha Kaur", age: 24, city: "Varanasi", tier: "silver",
    emoji: "👩", image: indianModelPhotos[256],
    images: [indianModelPhotos[256]],
    rating: 5, reviewCount: 22, isNew: false, verified: true,
    pricing: { "1hour": 4000, currency: "₹" },
    description: "Available in Varanasi. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_257", name: "Chahat Patil", age: 25, city: "Surat", tier: "silver",
    emoji: "👩", image: indianModelPhotos[257],
    images: [indianModelPhotos[257]],
    rating: 5, reviewCount: 36, isNew: false, verified: true,
    pricing: { "1hour": 4000, currency: "₹" },
    description: "Available in Surat. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_258", name: "Suman Reddy", age: 26, city: "Kochi", tier: "silver",
    emoji: "👩", image: indianModelPhotos[258],
    images: [indianModelPhotos[258]],
    rating: 5, reviewCount: 41, isNew: false, verified: true,
    pricing: { "1hour": 7000, currency: "₹" },
    description: "Available in Kochi. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_259", name: "Aarohi Tiwari", age: 27, city: "Udaipur", tier: "silver",
    emoji: "👩", image: indianModelPhotos[259],
    images: [indianModelPhotos[259]],
    rating: 5, reviewCount: 48, isNew: true, verified: true,
    pricing: { "1hour": 7500, currency: "₹" },
    description: "Available in Udaipur. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_260", name: "Jaya Patil", age: 18, city: "Patna", tier: "silver",
    emoji: "👩", image: indianModelPhotos[260],
    images: [indianModelPhotos[260]],
    rating: 5, reviewCount: 41, isNew: false, verified: true,
    pricing: { "1hour": 6500, currency: "₹" },
    description: "Available in Patna. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_261", name: "Divya Pandey", age: 19, city: "Chennai", tier: "silver",
    emoji: "👩", image: indianModelPhotos[261],
    images: [indianModelPhotos[261]],
    rating: 5, reviewCount: 26, isNew: false, verified: true,
    pricing: { "1hour": 5500, currency: "₹" },
    description: "Available in Chennai. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_262", name: "Chahat Sharma", age: 20, city: "Udaipur", tier: "silver",
    emoji: "👩", image: indianModelPhotos[262],
    images: [indianModelPhotos[262]],
    rating: 5, reviewCount: 24, isNew: false, verified: true,
    pricing: { "1hour": 4000, currency: "₹" },
    description: "Available in Udaipur. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_263", name: "Megha Reddy", age: 21, city: "Pune", tier: "silver",
    emoji: "👩", image: indianModelPhotos[263],
    images: [indianModelPhotos[263]],
    rating: 5, reviewCount: 54, isNew: true, verified: true,
    pricing: { "1hour": 7000, currency: "₹" },
    description: "Available in Pune. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_264", name: "Kajal Jain", age: 22, city: "Udaipur", tier: "silver",
    emoji: "👩", image: indianModelPhotos[264],
    images: [indianModelPhotos[264]],
    rating: 5, reviewCount: 22, isNew: false, verified: true,
    pricing: { "1hour": 5500, currency: "₹" },
    description: "Available in Udaipur. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_265", name: "Heena Jain", age: 23, city: "Shimla", tier: "silver",
    emoji: "👩", image: indianModelPhotos[265],
    images: [indianModelPhotos[265]],
    rating: 5, reviewCount: 24, isNew: false, verified: true,
    pricing: { "1hour": 5000, currency: "₹" },
    description: "Available in Shimla. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_266", name: "Shruti Tiwari", age: 24, city: "Delhi / NCR", tier: "silver",
    emoji: "👩", image: indianModelPhotos[266],
    images: [indianModelPhotos[266]],
    rating: 5, reviewCount: 15, isNew: false, verified: true,
    pricing: { "1hour": 6500, currency: "₹" },
    description: "Available in Delhi / NCR. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_267", name: "Nikita Mishra", age: 25, city: "Udaipur", tier: "silver",
    emoji: "👩", image: indianModelPhotos[267],
    images: [indianModelPhotos[267]],
    rating: 5, reviewCount: 22, isNew: false, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Udaipur. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_268", name: "Monika Kaur", age: 26, city: "Varanasi", tier: "silver",
    emoji: "👩", image: indianModelPhotos[268],
    images: [indianModelPhotos[268]],
    rating: 5, reviewCount: 31, isNew: true, verified: true,
    pricing: { "1hour": 5500, currency: "₹" },
    description: "Available in Varanasi. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_269", name: "Lata Verma", age: 27, city: "Bhopal", tier: "silver",
    emoji: "👩", image: indianModelPhotos[269],
    images: [indianModelPhotos[269]],
    rating: 5, reviewCount: 41, isNew: false, verified: true,
    pricing: { "1hour": 3500, currency: "₹" },
    description: "Available in Bhopal. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_270", name: "Palak Tiwari", age: 18, city: "Kolkata", tier: "silver",
    emoji: "👩", image: indianModelPhotos[270],
    images: [indianModelPhotos[270]],
    rating: 5, reviewCount: 34, isNew: false, verified: true,
    pricing: { "1hour": 6000, currency: "₹" },
    description: "Available in Kolkata. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_271", name: "Sanjana Kaur", age: 19, city: "Visakhapatnam", tier: "silver",
    emoji: "👩", image: indianModelPhotos[271],
    images: [indianModelPhotos[271]],
    rating: 5, reviewCount: 50, isNew: false, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Visakhapatnam. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_272", name: "Malini Das", age: 20, city: "Goa", tier: "silver",
    emoji: "👩", image: indianModelPhotos[272],
    images: [indianModelPhotos[272]],
    rating: 5, reviewCount: 17, isNew: false, verified: true,
    pricing: { "1hour": 5500, currency: "₹" },
    description: "Available in Goa. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_273", name: "Kavya Desai", age: 21, city: "Kochi", tier: "silver",
    emoji: "👩", image: indianModelPhotos[273],
    images: [indianModelPhotos[273]],
    rating: 5, reviewCount: 33, isNew: false, verified: true,
    pricing: { "1hour": 5500, currency: "₹" },
    description: "Available in Kochi. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_274", name: "Vaishnavi Joshi", age: 22, city: "Delhi / NCR", tier: "silver",
    emoji: "👩", image: indianModelPhotos[274],
    images: [indianModelPhotos[274]],
    rating: 5, reviewCount: 37, isNew: false, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Delhi / NCR. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_275", name: "Bhumika Sharma", age: 23, city: "Kochi", tier: "silver",
    emoji: "👩", image: indianModelPhotos[275],
    images: [indianModelPhotos[275]],
    rating: 5, reviewCount: 47, isNew: false, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Kochi. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_276", name: "Mahi Tiwari", age: 24, city: "Lucknow", tier: "silver",
    emoji: "👩", image: indianModelPhotos[276],
    images: [indianModelPhotos[276]],
    rating: 5, reviewCount: 53, isNew: false, verified: true,
    pricing: { "1hour": 6000, currency: "₹" },
    description: "Available in Lucknow. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_277", name: "Sonali Nair", age: 25, city: "Indore", tier: "silver",
    emoji: "👩", image: indianModelPhotos[277],
    images: [indianModelPhotos[277]],
    rating: 5, reviewCount: 40, isNew: false, verified: true,
    pricing: { "1hour": 4000, currency: "₹" },
    description: "Available in Indore. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_278", name: "Roshni Chauhan", age: 26, city: "Bhubaneswar", tier: "silver",
    emoji: "👩", image: indianModelPhotos[278],
    images: [indianModelPhotos[278]],
    rating: 5, reviewCount: 30, isNew: true, verified: true,
    pricing: { "1hour": 7500, currency: "₹" },
    description: "Available in Bhubaneswar. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_279", name: "Ruchi Mishra", age: 27, city: "Pune", tier: "silver",
    emoji: "👩", image: indianModelPhotos[279],
    images: [indianModelPhotos[279]],
    rating: 5, reviewCount: 39, isNew: false, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Pune. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_280", name: "Jyoti Rajput", age: 18, city: "Goa", tier: "silver",
    emoji: "👩", image: indianModelPhotos[280],
    images: [indianModelPhotos[280]],
    rating: 5, reviewCount: 52, isNew: false, verified: true,
    pricing: { "1hour": 4500, currency: "₹" },
    description: "Available in Goa. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_281", name: "Esha Iyer", age: 19, city: "Amritsar", tier: "silver",
    emoji: "👩", image: indianModelPhotos[281],
    images: [indianModelPhotos[281]],
    rating: 5, reviewCount: 33, isNew: false, verified: true,
    pricing: { "1hour": 7000, currency: "₹" },
    description: "Available in Amritsar. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_282", name: "Myra Reddy", age: 20, city: "Jaipur", tier: "silver",
    emoji: "👩", image: indianModelPhotos[282],
    images: [indianModelPhotos[282]],
    rating: 5, reviewCount: 15, isNew: false, verified: true,
    pricing: { "1hour": 4500, currency: "₹" },
    description: "Available in Jaipur. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_283", name: "Ruhi Rao", age: 21, city: "Amritsar", tier: "silver",
    emoji: "👩", image: indianModelPhotos[283],
    images: [indianModelPhotos[283]],
    rating: 5, reviewCount: 23, isNew: true, verified: true,
    pricing: { "1hour": 7500, currency: "₹" },
    description: "Available in Amritsar. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_284", name: "Ruhi Chauhan", age: 22, city: "Hyderabad", tier: "silver",
    emoji: "👩", image: indianModelPhotos[284],
    images: [indianModelPhotos[284]],
    rating: 5, reviewCount: 31, isNew: true, verified: true,
    pricing: { "1hour": 5500, currency: "₹" },
    description: "Available in Hyderabad. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_285", name: "Disha Tiwari", age: 23, city: "Meerut", tier: "silver",
    emoji: "👩", image: indianModelPhotos[285],
    images: [indianModelPhotos[285]],
    rating: 5, reviewCount: 49, isNew: false, verified: true,
    pricing: { "1hour": 4500, currency: "₹" },
    description: "Available in Meerut. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_286", name: "Katrina Kumari", age: 24, city: "Delhi / NCR", tier: "silver",
    emoji: "👩", image: indianModelPhotos[286],
    images: [indianModelPhotos[286]],
    rating: 5, reviewCount: 52, isNew: false, verified: true,
    pricing: { "1hour": 5500, currency: "₹" },
    description: "Available in Delhi / NCR. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_287", name: "Vaishnavi Patil", age: 25, city: "Shimla", tier: "silver",
    emoji: "👩", image: indianModelPhotos[287],
    images: [indianModelPhotos[287]],
    rating: 5, reviewCount: 15, isNew: false, verified: true,
    pricing: { "1hour": 7000, currency: "₹" },
    description: "Available in Shimla. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_288", name: "Megha Sharma", age: 26, city: "Coimbatore", tier: "silver",
    emoji: "👩", image: indianModelPhotos[288],
    images: [indianModelPhotos[288]],
    rating: 5, reviewCount: 27, isNew: true, verified: true,
    pricing: { "1hour": 5000, currency: "₹" },
    description: "Available in Coimbatore. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_289", name: "Anjali Singh", age: 27, city: "Ahmedabad", tier: "silver",
    emoji: "👩", image: indianModelPhotos[289],
    images: [indianModelPhotos[289]],
    rating: 5, reviewCount: 29, isNew: false, verified: true,
    pricing: { "1hour": 5000, currency: "₹" },
    description: "Available in Ahmedabad. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_290", name: "Gauri Malik", age: 18, city: "Manali", tier: "silver",
    emoji: "👩", image: indianModelPhotos[290],
    images: [indianModelPhotos[290]],
    rating: 5, reviewCount: 53, isNew: false, verified: true,
    pricing: { "1hour": 7500, currency: "₹" },
    description: "Available in Manali. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_291", name: "Alia Gupta", age: 19, city: "Delhi / NCR", tier: "silver",
    emoji: "👩", image: indianModelPhotos[291],
    images: [indianModelPhotos[291]],
    rating: 5, reviewCount: 21, isNew: false, verified: true,
    pricing: { "1hour": 6500, currency: "₹" },
    description: "Available in Delhi / NCR. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_292", name: "Rupal Sharma", age: 20, city: "Delhi / NCR", tier: "silver",
    emoji: "👩", image: indianModelPhotos[292],
    images: [indianModelPhotos[292]],
    rating: 5, reviewCount: 43, isNew: true, verified: true,
    pricing: { "1hour": 5000, currency: "₹" },
    description: "Available in Delhi / NCR. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_293", name: "Madhu Sharma", age: 21, city: "Pune", tier: "silver",
    emoji: "👩", image: indianModelPhotos[293],
    images: [indianModelPhotos[293]],
    rating: 5, reviewCount: 17, isNew: false, verified: true,
    pricing: { "1hour": 6500, currency: "₹" },
    description: "Available in Pune. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_294", name: "Nisha Bhatia", age: 22, city: "Mumbai", tier: "silver",
    emoji: "👩", image: indianModelPhotos[294],
    images: [indianModelPhotos[294]],
    rating: 5, reviewCount: 22, isNew: false, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Mumbai. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_295", name: "Jaya Mishra", age: 23, city: "Coimbatore", tier: "silver",
    emoji: "👩", image: indianModelPhotos[295],
    images: [indianModelPhotos[295]],
    rating: 5, reviewCount: 30, isNew: false, verified: true,
    pricing: { "1hour": 7000, currency: "₹" },
    description: "Available in Coimbatore. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_296", name: "Aarohi Gowda", age: 24, city: "Patna", tier: "silver",
    emoji: "👩", image: indianModelPhotos[296],
    images: [indianModelPhotos[296]],
    rating: 5, reviewCount: 32, isNew: false, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Patna. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_297", name: "Nidhi Nair", age: 25, city: "Hyderabad", tier: "silver",
    emoji: "👩", image: indianModelPhotos[297],
    images: [indianModelPhotos[297]],
    rating: 5, reviewCount: 37, isNew: false, verified: true,
    pricing: { "1hour": 6500, currency: "₹" },
    description: "Available in Hyderabad. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_298", name: "Isha Malik", age: 26, city: "Varanasi", tier: "silver",
    emoji: "👩", image: indianModelPhotos[298],
    images: [indianModelPhotos[298]],
    rating: 5, reviewCount: 29, isNew: false, verified: true,
    pricing: { "1hour": 6000, currency: "₹" },
    description: "Available in Varanasi. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_299", name: "Lata Kapoor", age: 27, city: "Delhi / NCR", tier: "silver",
    emoji: "👩", image: indianModelPhotos[299],
    images: [indianModelPhotos[299]],
    rating: 5, reviewCount: 21, isNew: false, verified: true,
    pricing: { "1hour": 5000, currency: "₹" },
    description: "Available in Delhi / NCR. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_300", name: "Jahnvi Rajput", age: 18, city: "Kochi", tier: "silver",
    emoji: "👩", image: indianModelPhotos[300],
    images: [indianModelPhotos[300]],
    rating: 5, reviewCount: 54, isNew: true, verified: true,
    pricing: { "1hour": 7500, currency: "₹" },
    description: "Available in Kochi. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_301", name: "Ridhi Kapoor", age: 19, city: "Manali", tier: "silver",
    emoji: "👩", image: indianModelPhotos[301],
    images: [indianModelPhotos[301]],
    rating: 5, reviewCount: 23, isNew: false, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Manali. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_302", name: "Sonali Reddy", age: 20, city: "Pune", tier: "silver",
    emoji: "👩", image: indianModelPhotos[302],
    images: [indianModelPhotos[302]],
    rating: 5, reviewCount: 18, isNew: false, verified: true,
    pricing: { "1hour": 7500, currency: "₹" },
    description: "Available in Pune. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_303", name: "Mahi Kapoor", age: 21, city: "Jaipur", tier: "silver",
    emoji: "👩", image: indianModelPhotos[303],
    images: [indianModelPhotos[303]],
    rating: 5, reviewCount: 47, isNew: false, verified: true,
    pricing: { "1hour": 7500, currency: "₹" },
    description: "Available in Jaipur. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_304", name: "Urvashi Dubey", age: 22, city: "Bhubaneswar", tier: "silver",
    emoji: "👩", image: indianModelPhotos[304],
    images: [indianModelPhotos[304]],
    rating: 5, reviewCount: 28, isNew: false, verified: true,
    pricing: { "1hour": 6000, currency: "₹" },
    description: "Available in Bhubaneswar. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_305", name: "Ishita Kapoor", age: 23, city: "Shimla", tier: "silver",
    emoji: "👩", image: indianModelPhotos[305],
    images: [indianModelPhotos[305]],
    rating: 5, reviewCount: 41, isNew: false, verified: true,
    pricing: { "1hour": 5500, currency: "₹" },
    description: "Available in Shimla. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_306", name: "Alia Sharma", age: 24, city: "Manali", tier: "silver",
    emoji: "👩", image: indianModelPhotos[306],
    images: [indianModelPhotos[306]],
    rating: 5, reviewCount: 37, isNew: false, verified: true,
    pricing: { "1hour": 6500, currency: "₹" },
    description: "Available in Manali. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_307", name: "Srishti Pandey", age: 25, city: "Udaipur", tier: "silver",
    emoji: "👩", image: indianModelPhotos[307],
    images: [indianModelPhotos[307]],
    rating: 5, reviewCount: 30, isNew: true, verified: true,
    pricing: { "1hour": 3500, currency: "₹" },
    description: "Available in Udaipur. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_308", name: "Avani Bhatia", age: 26, city: "Bhopal", tier: "silver",
    emoji: "👩", image: indianModelPhotos[308],
    images: [indianModelPhotos[308]],
    rating: 5, reviewCount: 43, isNew: true, verified: true,
    pricing: { "1hour": 7000, currency: "₹" },
    description: "Available in Bhopal. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_309", name: "Sanjana Jain", age: 27, city: "Agra", tier: "silver",
    emoji: "👩", image: indianModelPhotos[309],
    images: [indianModelPhotos[309]],
    rating: 5, reviewCount: 50, isNew: false, verified: true,
    pricing: { "1hour": 5500, currency: "₹" },
    description: "Available in Agra. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_310", name: "Anushka Patil", age: 18, city: "Meerut", tier: "silver",
    emoji: "👩", image: indianModelPhotos[310],
    images: [indianModelPhotos[310]],
    rating: 5, reviewCount: 28, isNew: false, verified: true,
    pricing: { "1hour": 5500, currency: "₹" },
    description: "Available in Meerut. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_311", name: "Nandini Rao", age: 19, city: "Ahmedabad", tier: "silver",
    emoji: "👩", image: indianModelPhotos[311],
    images: [indianModelPhotos[311]],
    rating: 5, reviewCount: 34, isNew: false, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Ahmedabad. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_312", name: "Pooja Soni", age: 20, city: "Udaipur", tier: "silver",
    emoji: "👩", image: indianModelPhotos[312],
    images: [indianModelPhotos[312]],
    rating: 5, reviewCount: 31, isNew: false, verified: true,
    pricing: { "1hour": 6500, currency: "₹" },
    description: "Available in Udaipur. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_313", name: "Vandana Kapoor", age: 21, city: "Indore", tier: "silver",
    emoji: "👩", image: indianModelPhotos[313],
    images: [indianModelPhotos[313]],
    rating: 5, reviewCount: 34, isNew: false, verified: true,
    pricing: { "1hour": 7500, currency: "₹" },
    description: "Available in Indore. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_314", name: "Anjali Iyer", age: 22, city: "Pune", tier: "silver",
    emoji: "👩", image: indianModelPhotos[314],
    images: [indianModelPhotos[314]],
    rating: 5, reviewCount: 27, isNew: false, verified: true,
    pricing: { "1hour": 6000, currency: "₹" },
    description: "Available in Pune. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_315", name: "Deepika Kumari", age: 23, city: "Indore", tier: "silver",
    emoji: "👩", image: indianModelPhotos[315],
    images: [indianModelPhotos[315]],
    rating: 5, reviewCount: 46, isNew: false, verified: true,
    pricing: { "1hour": 7500, currency: "₹" },
    description: "Available in Indore. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_316", name: "Saloni Sharma", age: 24, city: "Bengaluru", tier: "silver",
    emoji: "👩", image: indianModelPhotos[316],
    images: [indianModelPhotos[316]],
    rating: 5, reviewCount: 33, isNew: false, verified: true,
    pricing: { "1hour": 4000, currency: "₹" },
    description: "Available in Bengaluru. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_317", name: "Shilpa Iyer", age: 25, city: "Udaipur", tier: "silver",
    emoji: "👩", image: indianModelPhotos[317],
    images: [indianModelPhotos[317]],
    rating: 5, reviewCount: 43, isNew: false, verified: true,
    pricing: { "1hour": 7500, currency: "₹" },
    description: "Available in Udaipur. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_318", name: "Sonali Desai", age: 26, city: "Udaipur", tier: "silver",
    emoji: "👩", image: indianModelPhotos[318],
    images: [indianModelPhotos[318]],
    rating: 5, reviewCount: 35, isNew: false, verified: true,
    pricing: { "1hour": 7500, currency: "₹" },
    description: "Available in Udaipur. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_319", name: "Sanika Yadav", age: 27, city: "Jaipur", tier: "silver",
    emoji: "👩", image: indianModelPhotos[319],
    images: [indianModelPhotos[319]],
    rating: 5, reviewCount: 27, isNew: false, verified: true,
    pricing: { "1hour": 5500, currency: "₹" },
    description: "Available in Jaipur. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_320", name: "Aayushi Mehta", age: 18, city: "Udaipur", tier: "silver",
    emoji: "👩", image: indianModelPhotos[320],
    images: [indianModelPhotos[320]],
    rating: 5, reviewCount: 29, isNew: false, verified: true,
    pricing: { "1hour": 6000, currency: "₹" },
    description: "Available in Udaipur. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_321", name: "Sushma Gowda", age: 19, city: "Bengaluru", tier: "silver",
    emoji: "👩", image: indianModelPhotos[321],
    images: [indianModelPhotos[321]],
    rating: 5, reviewCount: 45, isNew: false, verified: true,
    pricing: { "1hour": 3500, currency: "₹" },
    description: "Available in Bengaluru. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_322", name: "Shikha Pandey", age: 20, city: "Varanasi", tier: "silver",
    emoji: "👩", image: indianModelPhotos[322],
    images: [indianModelPhotos[322]],
    rating: 5, reviewCount: 21, isNew: false, verified: true,
    pricing: { "1hour": 4000, currency: "₹" },
    description: "Available in Varanasi. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_323", name: "Tanisha Tiwari", age: 21, city: "Jaipur", tier: "silver",
    emoji: "👩", image: indianModelPhotos[323],
    images: [indianModelPhotos[323]],
    rating: 5, reviewCount: 22, isNew: false, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Jaipur. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_324", name: "Sakshi Patil", age: 22, city: "Chennai", tier: "silver",
    emoji: "👩", image: indianModelPhotos[324],
    images: [indianModelPhotos[324]],
    rating: 5, reviewCount: 27, isNew: true, verified: true,
    pricing: { "1hour": 7500, currency: "₹" },
    description: "Available in Chennai. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_325", name: "Srishti Yadav", age: 23, city: "Amritsar", tier: "silver",
    emoji: "👩", image: indianModelPhotos[325],
    images: [indianModelPhotos[325]],
    rating: 5, reviewCount: 51, isNew: false, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Amritsar. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_326", name: "Vidya Singh", age: 24, city: "Kochi", tier: "silver",
    emoji: "👩", image: indianModelPhotos[326],
    images: [indianModelPhotos[326]],
    rating: 5, reviewCount: 41, isNew: false, verified: true,
    pricing: { "1hour": 5000, currency: "₹" },
    description: "Available in Kochi. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_327", name: "Shreya Dubey", age: 25, city: "Ahmedabad", tier: "silver",
    emoji: "👩", image: indianModelPhotos[327],
    images: [indianModelPhotos[327]],
    rating: 5, reviewCount: 38, isNew: false, verified: true,
    pricing: { "1hour": 4000, currency: "₹" },
    description: "Available in Ahmedabad. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_328", name: "Kiara Desai", age: 26, city: "Surat", tier: "silver",
    emoji: "👩", image: indianModelPhotos[328],
    images: [indianModelPhotos[328]],
    rating: 5, reviewCount: 46, isNew: false, verified: true,
    pricing: { "1hour": 3500, currency: "₹" },
    description: "Available in Surat. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_329", name: "Sakshi Iyer", age: 27, city: "Delhi / NCR", tier: "silver",
    emoji: "👩", image: indianModelPhotos[329],
    images: [indianModelPhotos[329]],
    rating: 5, reviewCount: 34, isNew: false, verified: true,
    pricing: { "1hour": 4500, currency: "₹" },
    description: "Available in Delhi / NCR. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_330", name: "Shivani Gowda", age: 18, city: "Goa", tier: "silver",
    emoji: "👩", image: indianModelPhotos[330],
    images: [indianModelPhotos[330]],
    rating: 5, reviewCount: 43, isNew: false, verified: true,
    pricing: { "1hour": 6000, currency: "₹" },
    description: "Available in Goa. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_331", name: "Rakhi Gowda", age: 19, city: "Chandigarh", tier: "silver",
    emoji: "👩", image: indianModelPhotos[331],
    images: [indianModelPhotos[331]],
    rating: 5, reviewCount: 30, isNew: false, verified: true,
    pricing: { "1hour": 6500, currency: "₹" },
    description: "Available in Chandigarh. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_332", name: "Jyoti Joshi", age: 20, city: "Coimbatore", tier: "silver",
    emoji: "👩", image: indianModelPhotos[332],
    images: [indianModelPhotos[332]],
    rating: 5, reviewCount: 26, isNew: false, verified: true,
    pricing: { "1hour": 5000, currency: "₹" },
    description: "Available in Coimbatore. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_333", name: "Radhika Yadav", age: 21, city: "Varanasi", tier: "silver",
    emoji: "👩", image: indianModelPhotos[333],
    images: [indianModelPhotos[333]],
    rating: 5, reviewCount: 48, isNew: true, verified: true,
    pricing: { "1hour": 7000, currency: "₹" },
    description: "Available in Varanasi. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_334", name: "Gauri Chauhan", age: 22, city: "Pune", tier: "silver",
    emoji: "👩", image: indianModelPhotos[334],
    images: [indianModelPhotos[334]],
    rating: 5, reviewCount: 42, isNew: false, verified: true,
    pricing: { "1hour": 6000, currency: "₹" },
    description: "Available in Pune. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_335", name: "Jaya Nair", age: 23, city: "Surat", tier: "silver",
    emoji: "👩", image: indianModelPhotos[335],
    images: [indianModelPhotos[335]],
    rating: 5, reviewCount: 24, isNew: false, verified: true,
    pricing: { "1hour": 5500, currency: "₹" },
    description: "Available in Surat. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_336", name: "Aarohi Sharma", age: 24, city: "Kolkata", tier: "silver",
    emoji: "👩", image: indianModelPhotos[336],
    images: [indianModelPhotos[336]],
    rating: 5, reviewCount: 34, isNew: false, verified: true,
    pricing: { "1hour": 7000, currency: "₹" },
    description: "Available in Kolkata. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_337", name: "Gargi Nair", age: 25, city: "Surat", tier: "silver",
    emoji: "👩", image: indianModelPhotos[337],
    images: [indianModelPhotos[337]],
    rating: 5, reviewCount: 17, isNew: false, verified: true,
    pricing: { "1hour": 5000, currency: "₹" },
    description: "Available in Surat. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_338", name: "Jahnvi Joshi", age: 26, city: "Chandigarh", tier: "silver",
    emoji: "👩", image: indianModelPhotos[338],
    images: [indianModelPhotos[338]],
    rating: 5, reviewCount: 42, isNew: true, verified: true,
    pricing: { "1hour": 7000, currency: "₹" },
    description: "Available in Chandigarh. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_339", name: "Suman Kapoor", age: 27, city: "Visakhapatnam", tier: "silver",
    emoji: "👩", image: indianModelPhotos[339],
    images: [indianModelPhotos[339]],
    rating: 5, reviewCount: 48, isNew: false, verified: true,
    pricing: { "1hour": 4500, currency: "₹" },
    description: "Available in Visakhapatnam. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_340", name: "Priya Iyer", age: 18, city: "Patna", tier: "silver",
    emoji: "👩", image: indianModelPhotos[340],
    images: [indianModelPhotos[340]],
    rating: 5, reviewCount: 39, isNew: false, verified: true,
    pricing: { "1hour": 5000, currency: "₹" },
    description: "Available in Patna. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_341", name: "Rashmi Iyer", age: 19, city: "Kochi", tier: "silver",
    emoji: "👩", image: indianModelPhotos[341],
    images: [indianModelPhotos[341]],
    rating: 5, reviewCount: 45, isNew: false, verified: true,
    pricing: { "1hour": 5000, currency: "₹" },
    description: "Available in Kochi. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_342", name: "Kiara Soni", age: 20, city: "Meerut", tier: "silver",
    emoji: "👩", image: indianModelPhotos[342],
    images: [indianModelPhotos[342]],
    rating: 5, reviewCount: 43, isNew: false, verified: true,
    pricing: { "1hour": 3500, currency: "₹" },
    description: "Available in Meerut. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_343", name: "Soniya Gowda", age: 21, city: "Udaipur", tier: "silver",
    emoji: "👩", image: indianModelPhotos[343],
    images: [indianModelPhotos[343]],
    rating: 5, reviewCount: 18, isNew: false, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Udaipur. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_344", name: "Geeta Mishra", age: 22, city: "Kolkata", tier: "silver",
    emoji: "👩", image: indianModelPhotos[344],
    images: [indianModelPhotos[344]],
    rating: 5, reviewCount: 50, isNew: true, verified: true,
    pricing: { "1hour": 4500, currency: "₹" },
    description: "Available in Kolkata. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_345", name: "Nisha Yadav", age: 23, city: "Chandigarh", tier: "silver",
    emoji: "👩", image: indianModelPhotos[345],
    images: [indianModelPhotos[345]],
    rating: 5, reviewCount: 43, isNew: false, verified: true,
    pricing: { "1hour": 4500, currency: "₹" },
    description: "Available in Chandigarh. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_346", name: "Malini Reddy", age: 24, city: "Delhi / NCR", tier: "silver",
    emoji: "👩", image: indianModelPhotos[346],
    images: [indianModelPhotos[346]],
    rating: 5, reviewCount: 46, isNew: false, verified: true,
    pricing: { "1hour": 7500, currency: "₹" },
    description: "Available in Delhi / NCR. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_347", name: "Nikita Iyer", age: 25, city: "Pune", tier: "silver",
    emoji: "👩", image: indianModelPhotos[347],
    images: [indianModelPhotos[347]],
    rating: 5, reviewCount: 45, isNew: false, verified: true,
    pricing: { "1hour": 3500, currency: "₹" },
    description: "Available in Pune. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_348", name: "Monika Mehta", age: 26, city: "Udaipur", tier: "silver",
    emoji: "👩", image: indianModelPhotos[348],
    images: [indianModelPhotos[348]],
    rating: 5, reviewCount: 49, isNew: false, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Udaipur. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_349", name: "Aayushi Rao", age: 27, city: "Chennai", tier: "silver",
    emoji: "👩", image: indianModelPhotos[349],
    images: [indianModelPhotos[349]],
    rating: 5, reviewCount: 38, isNew: false, verified: true,
    pricing: { "1hour": 3500, currency: "₹" },
    description: "Available in Chennai. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_350", name: "Roshni Sharma", age: 18, city: "Pune", tier: "silver",
    emoji: "👩", image: indianModelPhotos[350],
    images: [indianModelPhotos[350]],
    rating: 5, reviewCount: 39, isNew: true, verified: true,
    pricing: { "1hour": 4500, currency: "₹" },
    description: "Available in Pune. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_351", name: "Deepa Kumari", age: 19, city: "Kolkata", tier: "silver",
    emoji: "👩", image: indianModelPhotos[351],
    images: [indianModelPhotos[351]],
    rating: 5, reviewCount: 46, isNew: false, verified: true,
    pricing: { "1hour": 4500, currency: "₹" },
    description: "Available in Kolkata. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_352", name: "Ridhi Gupta", age: 20, city: "Ahmedabad", tier: "silver",
    emoji: "👩", image: indianModelPhotos[352],
    images: [indianModelPhotos[352]],
    rating: 5, reviewCount: 36, isNew: true, verified: true,
    pricing: { "1hour": 4500, currency: "₹" },
    description: "Available in Ahmedabad. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_353", name: "Shraddha Jain", age: 21, city: "Chennai", tier: "silver",
    emoji: "👩", image: indianModelPhotos[353],
    images: [indianModelPhotos[353]],
    rating: 5, reviewCount: 27, isNew: false, verified: true,
    pricing: { "1hour": 3500, currency: "₹" },
    description: "Available in Chennai. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_354", name: "Kiara Das", age: 22, city: "Chennai", tier: "silver",
    emoji: "👩", image: indianModelPhotos[354],
    images: [indianModelPhotos[354]],
    rating: 5, reviewCount: 50, isNew: true, verified: true,
    pricing: { "1hour": 7500, currency: "₹" },
    description: "Available in Chennai. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_355", name: "Manasi Singh", age: 23, city: "Ahmedabad", tier: "silver",
    emoji: "👩", image: indianModelPhotos[355],
    images: [indianModelPhotos[355]],
    rating: 5, reviewCount: 43, isNew: false, verified: true,
    pricing: { "1hour": 5500, currency: "₹" },
    description: "Available in Ahmedabad. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_356", name: "Raveena Gowda", age: 24, city: "Manali", tier: "silver",
    emoji: "👩", image: indianModelPhotos[356],
    images: [indianModelPhotos[356]],
    rating: 5, reviewCount: 24, isNew: false, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Manali. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_357", name: "Mahi Pandey", age: 25, city: "Shimla", tier: "silver",
    emoji: "👩", image: indianModelPhotos[357],
    images: [indianModelPhotos[357]],
    rating: 5, reviewCount: 35, isNew: false, verified: true,
    pricing: { "1hour": 4000, currency: "₹" },
    description: "Available in Shimla. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_358", name: "Payal Desai", age: 26, city: "Ahmedabad", tier: "silver",
    emoji: "👩", image: indianModelPhotos[358],
    images: [indianModelPhotos[358]],
    rating: 5, reviewCount: 34, isNew: true, verified: true,
    pricing: { "1hour": 7000, currency: "₹" },
    description: "Available in Ahmedabad. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_359", name: "Shivani Khan", age: 27, city: "Bhopal", tier: "silver",
    emoji: "👩", image: indianModelPhotos[359],
    images: [indianModelPhotos[359]],
    rating: 5, reviewCount: 34, isNew: true, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Bhopal. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_360", name: "Lata Das", age: 18, city: "Goa", tier: "silver",
    emoji: "👩", image: indianModelPhotos[360],
    images: [indianModelPhotos[360]],
    rating: 5, reviewCount: 41, isNew: false, verified: true,
    pricing: { "1hour": 5000, currency: "₹" },
    description: "Available in Goa. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_361", name: "Shalini Dubey", age: 19, city: "Udaipur", tier: "silver",
    emoji: "👩", image: indianModelPhotos[361],
    images: [indianModelPhotos[361]],
    rating: 5, reviewCount: 51, isNew: false, verified: true,
    pricing: { "1hour": 5000, currency: "₹" },
    description: "Available in Udaipur. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_362", name: "Suman Gowda", age: 20, city: "Patna", tier: "silver",
    emoji: "👩", image: indianModelPhotos[362],
    images: [indianModelPhotos[362]],
    rating: 5, reviewCount: 51, isNew: false, verified: true,
    pricing: { "1hour": 4000, currency: "₹" },
    description: "Available in Patna. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_363", name: "Smriti Kapoor", age: 21, city: "Delhi / NCR", tier: "silver",
    emoji: "👩", image: indianModelPhotos[363],
    images: [indianModelPhotos[363]],
    rating: 5, reviewCount: 23, isNew: false, verified: true,
    pricing: { "1hour": 6500, currency: "₹" },
    description: "Available in Delhi / NCR. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_364", name: "Kirti Sharma", age: 22, city: "Jaipur", tier: "silver",
    emoji: "👩", image: indianModelPhotos[364],
    images: [indianModelPhotos[364]],
    rating: 5, reviewCount: 46, isNew: false, verified: true,
    pricing: { "1hour": 6000, currency: "₹" },
    description: "Available in Jaipur. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_365", name: "Riya Jain", age: 23, city: "Bhopal", tier: "silver",
    emoji: "👩", image: indianModelPhotos[365],
    images: [indianModelPhotos[365]],
    rating: 5, reviewCount: 42, isNew: true, verified: true,
    pricing: { "1hour": 7000, currency: "₹" },
    description: "Available in Bhopal. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_366", name: "Nisha Kaur", age: 24, city: "Surat", tier: "silver",
    emoji: "👩", image: indianModelPhotos[366],
    images: [indianModelPhotos[366]],
    rating: 5, reviewCount: 52, isNew: false, verified: true,
    pricing: { "1hour": 7500, currency: "₹" },
    description: "Available in Surat. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_367", name: "Chahat Joshi", age: 25, city: "Chennai", tier: "silver",
    emoji: "👩", image: indianModelPhotos[367],
    images: [indianModelPhotos[367]],
    rating: 5, reviewCount: 37, isNew: false, verified: true,
    pricing: { "1hour": 5500, currency: "₹" },
    description: "Available in Chennai. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_368", name: "Priya Bhatia", age: 26, city: "Visakhapatnam", tier: "silver",
    emoji: "👩", image: indianModelPhotos[368],
    images: [indianModelPhotos[368]],
    rating: 5, reviewCount: 23, isNew: false, verified: true,
    pricing: { "1hour": 3000, currency: "₹" },
    description: "Available in Visakhapatnam. 100% genuine and verified. Message for details."
  },
  {
    id: "dyn_v3_369", name: "Preeti Rao", age: 27, city: "Amritsar", tier: "silver",
    emoji: "👩", image: indianModelPhotos[369],
    images: [indianModelPhotos[369]],
    rating: 5, reviewCount: 22, isNew: false, verified: true,
    pricing: { "1hour": 5500, currency: "₹" },
    description: "Available in Amritsar. 100% genuine and verified. Message for details."
  },

];

export const onlineListings: Listing[] = [
  { id: "o1", name: "Meera", age: 22, city: "Online", description: "Cam show aur video call available. Sachi chats.", emoji: "⚡", image: indianModelPhotos[23], tier: "online", isOnline: true, pricing: { "1hour": 1500, currency: "₹" } },
];
