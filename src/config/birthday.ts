import { BirthdayConfig } from "@/types/birthday";

/**
 * ==============================================================================
 * BOYFRIEND'S BIRTHDAY SURPRISE FOR HIS GIRLFRIEND DEEPIKA
 * Birthday: 13th November
 * Soundtrack: Dil Diyan Gallan
 * ==============================================================================
 */

export const birthdayConfig: BirthdayConfig = {
  recipientName: "Deepika",
  // Real boyfriend name
  senderName: "Tulsi Ram Gavde",
  relationshipAgeOrYear: "Always & Forever",

  audio: {
    enabledByDefault: true,
    audioSrc: "/audio/dil-diyan-gallan.mp3",
    trackTitle: "Dil Diyan Gallan",
    artist: "Atif Aslam • Tiger Zinda Hai",
    album: "Dil Diyan Gallan (Acoustic Romantic)",
  },

  opening: {
    line1: "Some guys search their whole lives to find their dream girl...",
    line2: "And I found mine in you. Happy Birthday to my girlfriend, Deepika.",
    nameGlow: "Deepika",
    mainTitle: "Happy Birthday, My Love.",
    subtitle: "A romantic birthday world created with love by your boyfriend, just for your special day.",
    enterButtonText: "Open Your Birthday World ♡",
    musicNotice: "Sound on for Dil Diyan Gallan 🎵",
  },

  navigation: {
    links: [
      { label: "Home", href: "#hero" },
      { label: "My Birthday Wish", href: "#wish" },
      { label: "Birthday Cake", href: "#cake" },
      { label: "Love Letter", href: "#letter" },
      { label: "Our Memories", href: "#gallery" },
      { label: "Why I Love You", href: "#reasons" },
      { label: "Boyfriend's Promise", href: "#surprise" },
    ],
  },

  birthdayWish: {
    tagline: "13th November • Happy Birthday To My Gorgeous Girlfriend",
    openingLine1: "On this thirteenth day of November, the most incredible girl was born...",
    openingLine2: "And I'm the luckiest guy in the world to call you my girlfriend.",
    mainWish: [
      "Happy Birthday, my beautiful Deepika! Every day by your side feels like an adventure and a blessing, but today is extra special because it celebrates the day you came into this world.",
      "Being your boyfriend is the greatest happiness of my life. From your sweet smile to your infectious laugh, the way you look at me, and the gentle warmth you bring to my days—you make everything brighter and sweeter.",
      "My birthday wish for you is simple: I want to see you smile every single day, achieve every dream you hold in your heart, and always know how deeply, genuinely, and unconditionally you are loved by me.",
    ],
    highlightLine: "Happy Birthday, baby. I promise to always hold your hand, make you laugh, and love you more and more every single day.",
    finalRomanticLine: "Forever your boyfriend, your biggest fan, and yours completely. ♡",
  },

  cake: {
    cakeTitle: "Birthday Cake & Wish Ceremony",
    cakeSubtitle: "Handcrafted with velvet cream, blush roses, and candles waiting for your sweet wish, baby.",
    candlesCount: 4,
    cakeFlavor: "Sweet Vanilla & Strawberry Cream",
    wishingPrompt: "Close your eyes, make a wish, baby... and blow out the candles!",
    blowButtonText: "Blow The Candles 🕯️",
    revealedGreetingTitle: "Happy Birthday, My Girl! ♡",
    revealedGreetingMessage: "Your wish has been sent to the stars! I promise to spend every day making all your dreams and wishes come true. I love you, Deepika!",
  },

  loveLetter: {
    tagline: "An Intimate Letter From Your Boyfriend",
    title: "To My Dearest Girlfriend, Deepika",
    date: "13th November • Written With All My Heart",
    salutation: "My Dearest Deepika,",
    paragraphs: [
      "Hey my love... I wanted to write you this letter because sometimes simple words don't quite capture just how much you truly mean to me. Having you as my girlfriend has been the sweetest, most fulfilling chapter of my life.",
      "I love the little things about us: the way your eyes light up when you're excited, the cute face you make when you're laughing, our late-night conversations where hours slip away like minutes, and how just holding your hand makes every worry disappear.",
      "You aren't just my girlfriend, Deepika—you are my favorite person, my best friend, my safe haven, and my dream come true. You inspire me to be a better man, and your happiness will always be my number one priority.",
      "On your birthday this 13th of November, I hope you feel like the queen you are. You deserve the entire world and so much more. Thank you for choosing me, for loving me, and for filling my life with so much color and warmth.",
      "Happy Birthday, baby. I can't wait for all the birthdays, adventures, and beautiful memories we have yet to create together.",
    ],
    closing: "Forever and always yours with all my love,",
    signature: "Tulsi Ram Gavde",
    waxSealText: "D ♡",
  },

  gallery: {
    tagline: "Our Sweet Moments",
    title: "My Favorite Memories With You",
    subtitle: "Real snapshots of our journey, stolen smiles, and feelings that stay forever.",
    photos: [
      {
        id: "memory-2",
        title: "Long Drives & Endless Smiles",
        caption: "No matter where the road takes us, having you right beside me is my favorite part of the journey.",
        date: "Road Trip Memories",
        location: "Drive With You",
        imageSrc: "/images/our-memory-car.jpg",
        aspectRatio: "portrait",
        isFeatured: false,
        category: "Adventures",
      },
      {
        id: "memory-3",
        title: "Right Where You Belong",
        caption: "Resting against me... in that quiet moment, the entire world feels peaceful and right.",
        date: "Cozy Together",
        location: "Our Sweet Warmth",
        imageSrc: "/images/our-memory-cozy.jpg",
        aspectRatio: "portrait",
        isFeatured: false,
        category: "Sweet Moments",
      },
      {
        id: "memory-4",
        title: "Drifting Across the Lake",
        caption: "Out on the calm water with the wind in our hair and the brightest, sweetest smile on your face.",
        date: "Boat Ride Adventure",
        location: "Across the Water",
        imageSrc: "/images/our-memory-boat.jpg",
        aspectRatio: "portrait",
        isFeatured: true,
        category: "Adventures",
      },
      {
        id: "memory-5",
        title: "Under the Green Canopy",
        caption: "Standing close under the quiet trees, holding each other tight and knowing I'm the luckiest guy alive.",
        date: "Sunny Afternoon",
        location: "Shaded Pathways",
        imageSrc: "/images/our-memory-tree.jpg",
        aspectRatio: "portrait",
        isFeatured: false,
        category: "Just Us",
      },
      {
        id: "memory-6",
        title: "Blessed Hand in Hand",
        caption: "Standing together for blessings and holding your hand tightly... every prayer of mine is for your happiness.",
        date: "Sacred Moments",
        location: "Temple Blessings",
        imageSrc: "/images/our-memory-temple.jpg",
        aspectRatio: "portrait",
        isFeatured: false,
        category: "Devotion",
      },
    ],
  },

  reasons: {
    tagline: "From Your Boyfriend's Heart",
    title: "Why I Fall In Love With You Every Day",
    subtitle: "Click each card to reveal a secret note from your boyfriend. ♡",
    items: [
      {
        id: "reason-1",
        title: "Your Cute & Radiant Smile",
        description:
          "The way you smile whenever you see me or when you're laughing at my jokes. It instantly brightens my worst day.",
        iconName: "smile",
        quote: "That smile is my favorite view in the universe.",
      },
      {
        id: "reason-2",
        title: "Your Tight, Comforting Hugs",
        description:
          "How all my stress and exhaustion vanish the second you wrap your arms around me. You feel like coming home.",
        iconName: "heart",
        quote: "In your arms is where I always want to be.",
      },
      {
        id: "reason-3",
        title: "How Sweet & Caring You Are",
        description:
          "The little ways you check up on me, ask if I've eaten, and show so much genuine care for everything in my life.",
        iconName: "sparkles",
        quote: "You have the most tender, thoughtful heart.",
      },
      {
        id: "reason-4",
        title: "Your Cute Silly Moments",
        description:
          "The way you get excited about things you love, your playful teasing, and the adorable inside jokes only we share.",
        iconName: "feather",
        quote: "Being silly with you is the best feeling ever.",
      },
      {
        id: "reason-5",
        title: "Your Ambition & Strength",
        description:
          "Watching you work hard, chase your aspirations, and carry yourself with confidence makes me so incredibly proud to be your boyfriend.",
        iconName: "compass",
        quote: "So proud of who you are and who you're becoming.",
      },
      {
        id: "reason-6",
        title: "My Girlfriend & Best Friend",
        description:
          "I can tell you anything without fear. You understand me like no one else does. Loving you is the easiest, happiest thing in my life.",
        iconName: "sun",
        quote: "My partner in crime, my favorite human, my girl.",
      },
    ],
  },

  // Kept in type for compatibility, but omitted from main flow per user request
  timeline: {
    tagline: "Our Journey",
    title: "Milestones Leading to 13th November",
    subtitle: "Every memory, quiet conversation, and turning point that led to celebrating you today.",
    items: [],
  },

  secretSurprise: {
    tagline: "For My Girlfriend Only",
    title: "A Birthday Promise",
    subtitle: "An envelope sealed with a heart, holding my promise to you.",
    envelopeLabel: "To My Girl Deepika • 13th November",
    sealText: "UNSEAL WITH A KISS",
    letterTitle: "My Forever Promise To You",
    personalMessage: [
      "Deepika, if you're reading this secret note, here is my promise to you on your 13th November birthday:",
      "I promise to always be in your corner, cheering for your biggest dreams, celebrating your wins, and holding your hand through life's hard days.",
      "I promise to keep making you laugh until your stomach hurts, to listen whenever you need to vent, and to never let you forget how stunning, valued, and special you are.",
      "Thank you for being the sweetest, most loving girlfriend any guy could ever ask for. Happy Birthday, baby. I love you with all my heart.",
    ],
    closingWords: "Forever your boyfriend, with all my love,",
    photoSrc: "/images/our-memory-cafe.jpg",
    photoCaption: "My gorgeous girl Deepika — my favorite view in the world.",
    replayButtonText: "Seal Back Envelope",
  },

  finalScene: {
    title: "Happy Birthday, My Girl.",
    line1: "May this 13th of November and the entire year ahead be filled with as much happiness as you give me every day.",
    quote: "“You're my favorite person, today and for all the birthdays to come.” ♡",
    madeWithLove: "Made with all my love",
    signature: "Tulsi Ram Gavde",
    replayButtonText: "Relive Our Birthday Story ↺",
  },
};
