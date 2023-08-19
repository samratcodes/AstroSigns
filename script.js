const Submit=document.querySelector('button');
const date = document.querySelector('input');
const classtext = document.querySelector(".card");

const ZodiacDescription = document.querySelector("#Zodiacidescription");
const Rashidescription = document.querySelector('#Rashidescription');

const zdtext= document.querySelector('#zd');
const rstext =document.querySelector('#rs');


const zodiacSigns = [
  "Aries: Energetic and confident go-getters, Aries individuals thrive on challenges and are natural leaders who fearlessly initiate new ventures. They possess an unyielding enthusiasm for life and are often the first to take action. Their dynamic energy and assertiveness make them well-suited for competitive environments. Aries people are not afraid to blaze their own trail and are driven by a desire for achievement and success.",

  "Taurus: Patient and reliable with a practical touch, Taurus individuals value stability and enjoy the finer things in life while remaining grounded and steady. They have an innate appreciation for life's sensual pleasures and often possess a strong work ethic. Taureans are known for their loyalty and dependability, making them trustworthy friends and partners. However, they can also be stubborn and resistant to change.",

  "Gemini: Curious communicators, quick-witted and adaptable, Gemini individuals have a dual nature that is both intriguing and versatile. They are inquisitive by nature and thrive on mental stimulation. Geminis are skilled at engaging in lively conversations and are often witty conversationalists. Their adaptable personalities allow them to pursue diverse interests and connect with a wide range of people. However, their dual nature can sometimes lead to indecision.",

  "Cancer: Intuitive nurturers who value emotional connections, Cancer individuals are deeply empathetic and place high importance on family bonds and emotional well-being. They have a natural ability to create a warm and loving home environment. Cancerians are protective of their loved ones and often wear their hearts on their sleeves. Their intuitive nature allows them to connect with others on a profound emotional level, but it can also make them sensitive to criticism.",

  "Leo: Confident, warm-hearted leaders drawn to the spotlight, Leo individuals have a magnetic personality that attracts attention wherever they go. They generously share their creative energy with others and often take on leadership roles with grace and charisma. Leos have a strong desire for recognition and respect, which can sometimes border on arrogance. However, they are fiercely loyal to their friends and loved ones.",

  "Virgo: Detail-oriented analysts with a practical mindset, Virgo individuals excel in organization and problem-solving. They have a meticulous approach to life and pay attention to the smallest of details. Virgos are often seen as the problem solvers in their social circles and are known for their precision and efficiency. However, their pursuit of perfection can sometimes lead to overcritical tendencies.",

  "Libra: Charming diplomats who seek harmony and balance, Libra individuals are social butterflies with a strong sense of justice. They have a natural talent for mediation and are often seen as advocates for equality. Libras possess an innate sense of aesthetics and appreciate beauty in all its forms. They value peaceful relationships and prioritize maintaining balance in their lives, which can sometimes lead to indecisiveness.",

  "Scorpio: Intense and mysterious, driven by determination, Scorpio individuals possess deep emotional insight and are drawn to uncovering hidden truths. They are known for their unwavering focus and determination when pursuing their goals. Scorpios have a magnetic presence that can be both alluring and intimidating. Their intensity and passion are evident in all aspects of their lives, and they are fiercely loyal to those they trust.",

  "Sagittarius: Optimistic adventurers with a philosophical side, Sagittarius individuals love exploring new horizons, both physically and intellectually. They are driven by a quest for meaning and have a strong desire for freedom. Sagittarians are open-minded and embrace diversity in all its forms. They have an innate sense of optimism that can be infectious, but their love for adventure can sometimes make them restless.",

  "Capricorn: Ambitious and disciplined traditionalists, Capricorn individuals are hardworking and strive for success. They often value tradition and long-term achievements, approaching life with a strong sense of responsibility and pragmatism. Capricorns have a practical mindset and are skilled at planning for the future. However, their focus on achievement can sometimes make them seem aloof or distant.",

  "Aquarius: Original and independent humanitarians, Aquarius individuals are forward-thinkers who prioritize making a positive impact on society and embracing their uniqueness. They have a deep sense of individuality and are unafraid to challenge the status quo. Aquarians are open to new ideas and thrive on intellectual stimulation. However, their independence can sometimes make them seem detached or aloof. They are fiercely loyal to their friends and are always willing to champion a cause they believe in.",

  "Pisces: Empathetic and creative with a strong intuition, Pisces individuals are dreamers with a profound connection to their emotions and the spiritual realm. They have a vivid imagination and often express themselves through art and other forms of self-expression. Pisceans are deeply empathetic and can easily pick up on the emotions of those around them. While their sensitivity is a strength, it can also make them susceptible to escapism and mood swings.",
];

const rashi = [
  "मेष: ऊर्जाको अद्वितीय र साहसी व्यक्तिहरू। उनीहरू चुनौतीमा उत्सुक छन् र बाटोको प्रमुख गर्दै नयाँ प्रयासहरू साहसिक रुपमा सुरु गर्छन्। उनीहरूको गतिविद्या, साहसपूर्ण व्यक्तित्व छ जुन मनोबल पर्दछ। तपाईंको उत्साह र साहस पर्वाही छ र अक्सम्य बन्दा छन्।",

  "वृष: सबर र विश्वासनी संग एक व्यावासिक स्पर्श छ। उनीहरू दृढता मूलक छन् र गर्दा रूखिएको र स्थिर राजा चास्छ। उनीहरूले जीवनको जण्डै सुन्दर विचार गर्दछन् र सफलताको दिशमा यात्रा गर्दछन् जबकि उनीहरू दृढ र लागि दिशानिर्देश दिन्छन्। यसले अन्याय सँग लड्ने मामिलामा मद्दत गर्दछ। तर, उनीहरू सौँगा हुने छन् र परिवर्तनलाई प्रतिरोधी पनि हुन सक्दैन।",

  "मिथुन: जानकारीको लागि रूचाउँदा सुन्दर गर्दै च्युरो गर्दछ, गेमिनी व्यक्तिहरूको दोह्रो स्वभाब छ जुन चास्पिङका छन्। उनीहरू जिज्ञासु छन् र बुद्धिमत्ता सन्देशमा छन्। तिनीहरू बिविध प्रतिष्ठानमा हेरफेर गर्दछन् र सजिलो भन्दा सजिलो रूपमा जुड्छन्। तिनीहरू सजिलो मिलनको लागि कृत्यरत छन् र व्यक्तिहरूको विश्वास पार्टनरको रूपमा देखिएका छन्। तर, तिनीहरू दोह्रो स्वभावको कारण असम्मिलनको बारेमा समस्यामा पर्छन्।",

  "कर्कट: भावनात्मक जडानकर्ता जस्तै भन्दा बुझ्दैछ। उनीहरू दृढ अरूसँगको जडानमा महत्त्वपूर्ण छन् र परिवारको जडान र भावनात्मक सुखमा महत्त्वपूर्ण छन्। उनीहरू दृढ अरूसँगको जडानमा महत्त्वपूर्ण छन् र परिवारको जडान र भावनात्मक सुखमा महत्त्वपूर्ण छन्। उनीहरूले तपाईंको पर्वाह गर्दैछन् र तिनीहरू समस्या हुन सक्दैनन् भन्दै तिनीहरूले संवादगर्दछन्। तर, तिनीहरूको भावनात्मक संवाद चुनौतीकारी बना सक्दैन।",

  "सिंह: आत्म-विश्वासी, उष्मा वाणीमा गर्मी पार्दछ। उनीहरूको अद्वितीय प्रतिष्ठान छ जुनको परिचालनमा सँगै सरकारी गर्दैछ। सिंह व्यक्तिहरूले प्राप्ति र इच्छाशक्तिमा अत्यधिक दृढताको दृष्टिकोण पार्दछन्। उनीहरूको रजतको इच्छा र सम्मानको इच्छा छ जसले कदममा उनीहरूलाई सान्चो पार्टीको रुपमा आउँदछ। तर, प्रतिस्पर्धामा सहभागी हुनको बारेमा तिनीहरूको इच्छा किसिमको अभिमानमा पर्दछ र उनीहरूलाई आफ्नै मित्र र प्रियजनहरूको प्रति घमण्ड छ।",

  "कन्या: विवरणबद्ध विश्लेषकहरू सँग एक व्यावासिक मनोबल छ। तपाईंको रूपमा विचारिकता र समस्या परिहार गर्नको लागि विशेषज्ञ छन्। तपाईंको रूपमा विचारिकता र समस्या परिहार गर्नको लागि विशेषज्ञ छन्। तपाईंको रूपमा समाजका पर्वाहक छन् र शान्ति र संरचनामा समर्थन गर्दैछन्। तिनीहरूले संरचनात्मक छन् र समस्या परिहार गर्दैछन्, परिपूर्णतामा र दक्षतामा फोकस गर्दैछन्। तर, परिपूर्णताको पातको पर्वाह गर्ने कारण परिपूर्णता जस्तै वर्णन गर्दैछ र तिनीहरूले आफ्नो जीवनमा अरुको साथमा समृद्धि गर्नको लागि आफ्नो शक्तिलाई पर्याप्त गर्दैनन्।",

  "तुला: शान्तिमा साक्षर लोगहरू, तापाईंको रूपमा विशेषज्ञच्छन् जसले समर्थनको लागि बाटो गर्दैछन्। तपाईंको रूपमा संवादको योग्यता छ जसले जीवनको बिचको तर्फ हट्टिक गर्दैछ। उनीहरू शान्तिका लागि आफ्नो सबै प्रकारको सुन्दरतामा मूल प्राधानता दिन्छन् र सुन्दर भन्दा सुन्दर चीजहरूको आनंद लिन्छन् जबकि उनीहरू शान्ति परिवाहक छन् र उनीहरूले आफ्नो जीवनमा संरचनामा समर्थन गर्दैछन्, जसले चुनौतीको संगै बाटोमा पर्खेको छ। तर, तपाईंको रूपमा संरचनामा समर्थन गर्दैछन्, जसले असम्मिलनको बारेमा जीवनको सवाल गर्दैछ, जसको परिणामस्वरूप आफ्नो जीवनमा असम्मिलनको प्रति धेरै चिन्तित हुन्छ।",

  "वृश्चिक: गहिरो र रहस्यमय, दृढ निर्धारणको साथ प्रेरित, वृश्चिक व्यक्तिहरूको भावनात्मक अनुसन्धानमा गहिरो अनुसन्धान छ र लुकाइएका सत्यको पत्ता लगाउनको लागि आकर्षित हुन्छन्। उनीहरूले लक्ष्य प्राप्त गर्नका लागि राज़न समर्थन गर्छन् र अपनो लोगहरूको साथमा काम गर्दछन्। तिनीहरूको गहिरो अनुभव छ जुन सबै प्रासंगिक बिचको सहमति गर्दछ र तिनीहरूले विश्वासमा गहिरो छन्।",

  "धनु: दृढ विचार गर्दा साथै दार्शनिक पक्षमा आकर्षित गर्दछ, धनु व्यक्तिहरू यात्रामा नयाँ क्षितिजहरू पर्दछन्, भौतिक र बौद्धिक दुवैमा परियाप्त भन्दै दृढ यात्रा गर्दछन्। उनीहरूको यात्रा प्राप्ति गर्नका लागि ब्यक्तिगत इच्छा छ र मत्स्यकर्मको खोजीमा तन्दैछ। धनु व्यक्तिहरू विविधतामा प्रविष्ट गर्दछन् र पर्याप्त भन्दै समृद्धि गर्दछन्। तर, उनीहरूको यात्रा प्राप्ति गर्दैछन्, जुन उनीहरूलाई बेपनाह बनाउँछ तर उनीहरूको यात्रा प्राप्ति गर्दछ, जुन उनीहरूलाई बेपनाह बनाउँछ तर उनीहरूको प्राणी हुने छ।",

  "मकर: उमेदवार र अनुशासित परम्परागतवादी, मकर व्यक्तिहरू पर्याप्त कठिन काम गर्दछन् र सफलताका लागि प्रयास गर्दछन्। उनीहरू परम्परामा मूलत: महत्त्वपूर्ण छन् र दृढ उद्देश्यका लागि जीवनमा आउँछन्। मकर व्यक्तिहरू जीवनको योजनामा नैयाँ स्थितिमा हुन्छन् र लोम्गोका लागि प्रयास गर्दछन्। तर, उनीहरूको प्राप्ति परम्परामा मूलत: महत्त्वपूर्ण छ जुन मनोबलमा समस्या पर्दछ वा दूर रहेको देखाइएको छ।",

  "कुम्भ: मूल र आपत्तिमुक्त लोगजस्तो, कुम्भ व्यक्तिहरू समाजमा सकारात्मक प्रभाव गर्न र आफ्नो विशेषता प्रिय गर्दछन्। उनीहरूको आफ्नै व्यक्तिगतता छ र सामाजिक स्थितिको खिलौना रूपमा प्रिय छ। कुम्भ व्यक्तिहरूले नयाँ विचारहरूको लागि खोली छन् र बौद्धिक स्तिमुलेसनमा तयार छन्। तर, उनीहरूको स्वतन्त्रता गर्दछ जसले उनीहरूलाई उदास वा दूर बनाउँछ। उनीहरू आफ्नो मित्रहरूमा खिलौनापन छ र सँगै जस्तै उनीहरूले बिशेष कारणलाई जित्न सक्दैन।",

  "मीन: अनुभवात्मक र कल्पनात्मक सुगतिका साथ, मीन व्यक्तिहरूलाई आफ्नो भावनामा गहिरो जडान छ र आध्यात्मिक धर्ममा गहिरो जडान छ। उनीहरूले जीवनको सुन्दरतामा र अन्य प्रतिस्थानमा आफ्नो आवाज प्रकट गर्दछन् र अन्य प्रतिस्थानमा आफ्नो आवाज प्रकट गर्दछन्। मीन व्यक्तिहरू अन्यहरूको भावनाहरूमा आसानीसँग प्रविष्ट गर्दछन् र उनीहरूले तपाईंको चारमा पर्ख्यो छन्। तपाईंको रूपमा सहयोग पर्दछ, तर यसले पनि तपाईंको रुखावट पर्दछ र मनोदशा पर्दछ।"
];

Submit.addEventListener("click", function (e) {
  e.preventDefault();
  if (date.value) {
    let zodiacdate = date.value.split("-");
    let month = Number(zodiacdate[1]);
    let day = Number(zodiacdate[2]);

    // Define the start day and end day for each zodiac sign
    const zodiacDates = [
      {
        sign: "Capricorn",
        startMonth: 1,
        startDay: 1,
        endMonth: 1,
        endDay: 19,
        index:9
      },
      {
        sign: "Aquarius",
        startMonth: 1,
        startDay: 20,
        endMonth: 2,
        endDay: 18,
        index:10
      },
      { sign: "Pisces", startMonth: 2, startDay: 19, endMonth: 3, endDay: 20, index:11 },
      { sign: "Aries", startMonth: 3, startDay: 21, endMonth: 4, endDay: 19 , index:0 },
      { sign: "Taurus", startMonth: 4, startDay: 20, endMonth: 5, endDay: 20, index:1 },
      { sign: "Gemini", startMonth: 5, startDay: 21, endMonth: 6, endDay: 20, index:2 },
      { sign: "Cancer", startMonth: 6, startDay: 21, endMonth: 7, endDay: 22, index:3 },
      { sign: "Leo", startMonth: 7, startDay: 23, endMonth: 8, endDay: 22 , index:4},
      { sign: "Virgo", startMonth: 8, startDay: 23, endMonth: 9, endDay: 22 , index:5 },
      { sign: "Libra", startMonth: 9, startDay: 23, endMonth: 10, endDay: 22 , index:6},
      {
        sign: "Scorpio",
        startMonth: 10,
        startDay: 23,
        endMonth: 11,
        endDay: 21,
         index:7
      },
      {
        sign: "Sagittarius",
        startMonth: 11,
        startDay: 22,
        endMonth: 12,
        endDay: 21,
         index:8
      },
      {
        sign: "Capricorn",
        startMonth: 12,
        startDay: 22,
        endMonth: 12,
        endDay: 31
        , index:9
      },
    ];

    let zodiacSign = "";

    // Loop through the zodiacDates array to find the corresponding zodiac sign
    for (let i = 0; i < zodiacDates.length; i++) {
      const zodiac = zodiacDates[i];
      if (
        (month === zodiac.startMonth && day >= zodiac.startDay) ||
        (month === zodiac.endMonth && day <= zodiac.endDay)
      ) {
        zodiacSign = zodiac.sign;
        zodiacIndex = zodiac.index;
        break;
      }
    }
    console.log(zodiacIndex)
console.log(zodiacSign)
    if (zodiacSign) {
 zdtext.textContent=zodiacSign
      if (zodiacIndex !== -1) {
        // Display the zodiac sign description
        ZodiacDescription.textContent = zodiacSigns[zodiacIndex];
        Rashidescription.textContent = rashi[zodiacIndex];
      }
    }

    date.value = "";
    classtext.scrollIntoView({ behavior: "smooth" });
  }
});

