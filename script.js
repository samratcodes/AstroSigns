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

    // Loop through the zodiacDates array 
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
const AllSection =document.querySelectorAll('#section','#zsection');


const revealSection=function(entries,observer){
  const [entry] = entries;
if(!entry.isIntersecting) return;
  entry.target.classList.remove('hidden')
}

const SectionObserver= new IntersectionObserver(revealSection,{
  root:null,
  threshold:0.15,
})
console.log(AllSection)
AllSection.forEach(function(section){
  SectionObserver.observe(section);
});
