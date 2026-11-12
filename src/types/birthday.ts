export interface PhotoItem {
  id: string;
  title: string;
  caption: string;
  date?: string;
  location?: string;
  imageSrc: string;
  aspectRatio?: "portrait" | "landscape" | "square" | "tall";
  isFeatured?: boolean;
  category?: string;
}

export interface ReasonItem {
  id: string;
  title: string;
  description: string;
  iconName: "heart" | "sparkles" | "sun" | "feather" | "compass" | "smile" | "star" | "gem";
  quote?: string;
  gemstoneColor?: string;
}

export interface TimelineItem {
  id: string;
  dateLabel: string;
  title: string;
  description: string;
  location?: string;
  imageSrc?: string;
}

export interface SongLyric {
  original: string;
  romanized: string;
  translation: string;
}

export interface BirthdayCakeConfig {
  cakeTitle: string;
  cakeSubtitle: string;
  candlesCount: number;
  cakeFlavor: string;
  wishingPrompt: string;
  blowButtonText: string;
  cutButtonText?: string;
  revealedGreetingTitle: string;
  revealedGreetingMessage: string;
}

export interface BirthdayConfig {
  recipientName: string;
  senderName: string;
  relationshipAgeOrYear?: string;
  
  audio: {
    enabledByDefault: boolean;
    audioSrc: string; // Path in /public
    trackTitle: string;
    artist: string;
    album?: string;
    lyrics?: SongLyric[];
  };

  opening: {
    line1: string;
    line2: string;
    nameGlow: string;
    mainTitle: string;
    subtitle: string;
    enterButtonText: string;
    musicNotice: string;
  };

  navigation: {
    links: Array<{
      label: string;
      href: string;
    }>;
  };

  loveLetter: {
    tagline: string;
    title: string;
    date: string;
    salutation: string;
    paragraphs: string[];
    closing: string;
    signature: string;
    waxSealText: string;
  };

  gallery: {
    tagline: string;
    title: string;
    subtitle: string;
    photos: PhotoItem[];
  };

  reasons: {
    tagline: string;
    title: string;
    subtitle: string;
    items: ReasonItem[];
  };

  timeline: {
    tagline: string;
    title: string;
    subtitle: string;
    items: TimelineItem[];
  };

  cake?: BirthdayCakeConfig;

  birthdayWish: {
    tagline: string;
    openingLine1: string;
    openingLine2: string;
    mainWish: string[];
    highlightLine: string;
    finalRomanticLine: string;
  };

  skyLanternWish?: {
    tagline: string;
    title: string;
    subtitle: string;
    promptText: string;
    actionButtonText: string;
    revealedWishTitle: string;
    revealedWishMessage: string[];
    blessingQuote: string;
  };

  secretSurprise: {
    tagline: string;
    title: string;
    subtitle: string;
    envelopeLabel: string;
    sealText: string;
    letterTitle: string;
    personalMessage: string[];
    closingWords: string;
    photoSrc?: string;
    photoCaption?: string;
    replayButtonText: string;
  };

  finalScene: {
    title: string;
    line1: string;
    quote: string;
    madeWithLove: string;
    signature: string;
    replayButtonText: string;
  };
}
