const Submit=document.querySelector('button');
const date = document.querySelector('input');
const classtext = document.querySelector(".card");


const zodiacSigns = [
  "Aries: Energetic and confident go-getters. They thrive on challenges and are natural leaders who fearlessly initiate new ventures.",
  "Taurus: Patient and reliable with a practical touch. They value stability and enjoy the finer things in life while being grounded and steady.",
  "Gemini: Curious communicators, quick-witted and adaptable. They have a dual nature, often pursuing diverse interests and engaging in lively conversations.",
  "Cancer: Intuitive nurturers who value emotional connections. They are deeply empathetic, placing high importance on family bonds and emotional well-being.",
  "Leo: Confident, warm-hearted leaders drawn to the spotlight. They have a magnetic personality and generously share their creative energy with others.",
  "Virgo: Detail-oriented analysts with a practical mindset. They excel in organization and problem-solving, focusing on precision and efficiency.",
  "Libra: Charming diplomats who seek harmony and balance. They are social butterflies with a strong sense of justice and a desire for peaceful relationships.",
  "Scorpio: Intense and mysterious, driven by determination. They possess deep emotional insight and are drawn to uncovering hidden truths.",
  "Sagittarius: Optimistic adventurers with a philosophical side. They love exploring new horizons, both physically and intellectually, driven by a quest for meaning.",
  "Capricorn: Ambitious and disciplined traditionalists. They are hardworking and strive for success, often valuing traditions and long-term achievements.",
  "Aquarius: Original and independent humanitarians. They are forward-thinkers who prioritize making a positive impact on society and embracing their uniqueness.",
  "Pisces: Empathetic and creative with a strong intuition. They are dreamers with a profound connection to their emotions and the spiritual realm.",
];
const rashi = [
  "मेष: ऊर्जाशील र साहसी व्यक्तित्वका प्रतिष्ठान्ता प्रेमीहरू। उनीहरू चुनौतीहरूमा उत्साहित हुन्छन् र नयाँ उद्यमहरू साहसपूर्ण रूपमा प्रारम्भ गर्दछन्।",
  "वृष: धैर्यशील र विश्वसनीय, वास्तविकतामा मूल राख्दछन्। उनीहरूलाई स्थिरता महत्त्वपूर्ण छ र जीवनका आनन्दहरूमा रुचाउँछन्।",
  "मिथुन: जिज्ञासु आदर्शहरू, शीघ्रमा मुद्राशील र अनुकूल छन्। उनीहरूको दुईप्रकृति छ, अक्सर विविध रुचिहरूमा प्रक्रियात्मक छन् र जीवनमा रमाइलो बातचितका लागि कौशल अधिगर्दछन्।",
  "कर्कट: आँशिक मानिसहरूलाई गर्मी ल्याउने, सुगम र पोषणमूलक हुन्छन्। उनीहरूको सहृदयता आघात गर्ने र परिवारिक सम्बन्धको महत्त्व उच्च पूजा गरिएको छ।",
  "सिंह: सुरक्षित र उत्साही नेता, चामलाई आकर्षित गर्दछ। उनीहरूको गर्मित र दयालु मानसिकताले अरुलाई आकर्षित गर्दछ।",
  "कन्या: विवरणमा रहेका विश्लेषणकर्ताहरू, व्यावसायिकता र व्यावसायिक सोचका साथ। उनीहरूको समयको परिश्रम र समस्या समाधानमा उत्तम प्रदर्शन गर्दछ।",
  "तुला: आकर्षक र बिपक्षी रुखका राजदूतहरू, संतुलन राख्नको लागि मूल राख्दछ। उनीहरू सामाजिक मरियादा र न्यायको महत्व दिन्छन्।",
  "वृश्चिक: गहिरो र रहस्यपूर्ण, प्रतिबद्धताबाट चालित हुन्छन्। उनीहरूको आक्रमक मानसिकता छ र गुप्त सत्यहरूको पत्ता लगाउन आकर्षित गरिएको छ।",
  "धनु: आशावादी यात्रीहरू जसले दर्शनिको किसिममा प्रवृत्ति गरेका छन्। उनीहरूको दार्शनिकता र बौद्धिकताले नयाँ क्षेत्रका समावेशीकरण र शिक्षामा रुचाउँछ।",
  "मकर: लक्ष्यदृष्टि र अनुशासनका दृष्टिमा संघटित, परंपरागत मूलहरूमा मूख्यता दिइएका छन्। उनीहरू परंपरा र दीर्घकालिक लक्ष्यको महत्वमा रहन्छन्।",
  "कुम्भ: मूल पनि आदर्शका, स्वतन्त्र मानिसहरू। उनीहरू समाजमा सकारात्मक प्रभाव गर्नका लागि प्रायोजनको लागि उत्कृष्ट प्रयास गर्दछन् र उनीहरूको अनौपचारिकता अवश्यमै आकर्षित गर्दछ।",
  "मीन: सहानुभूतिपूर्ण र सृजनात्मक, मजाकवाटमा गहिरो सम्बन्ध बनाउँछन्। उनीहरू सपनाहरू साथै आत्माको भावनासम्मको गहिरो सम्बन्ध बनाउँछन् " ]

Submit.addEventListener("click", function (e) {
  e.preventDefault();
  if (date.value) {
    let zodiacdate = date.value.split("-");
    let day = parseInt(zodiacdate[2]);
    let month = parseInt(zodiacdate[1]);

    // Calculate the zodiac sign index for the Western zodiac system
    let zodiacIndex = (month - 1) * 3 + (day < 21 ? 0 : day < 21 + 21 ? 1 : 2);
    if (zodiacIndex >= zodiacSigns.length) {
      zodiacIndex = 0; // Wrap around to the first sign
    }
    let zodiacSignDescription = zodiacSigns[zodiacIndex];

    // Calculate the rashi index for the Nepali zodiac system
    let rashiIndex = (month - 1) * 3 + (day < 21 ? 0 : day < 21 + 21 ? 1 : 2);
    if (rashiIndex >= rashi.length) {
      rashiIndex = 0; // Wrap around to the first rashi
    }
    let rashiDescription = rashi[rashiIndex];

    console.log("Zodiac Sign Description (English):", zodiacSignDescription);
    console.log("Zodiac Sign Description (Nepali):", rashiDescription);

    date.value = "";
    classtext.scrollIntoView({ behavior: "smooth" });
  }
});
