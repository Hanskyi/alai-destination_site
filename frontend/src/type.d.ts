export interface HomeData {
  heroSection: HeroSection;
  homeArticle: HomeArticle;
  homeTour: HomeTour;
  purposeBlock: PurposeBlock;
  homeClassification: HomeClassification;
  reviewsBlock: ReviewsBlock;
}

export interface HeroSection {
  data: HeroSectionData;
}

export interface HeroSectionData {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  image: Image;
  localizations: Localization[];
}

export interface HomeArticle {
  data: HomeArticleData;
}

export interface HomeArticleData {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  blogs: Blog[];
  localizations: Localization[];
}

export interface Blog {
  id: number;
  author: string;
  title: string;
  previewDescription: string;
  createdAt: string;
  localizations: Localization[];
}

export interface HomeTour {
  data: HomeTourData;
}

export interface HomeTourData {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  tours: Tour[];
  localizations: Localization[];
}

export interface Tour {
  id: number;
  title: string;
  duration: number;
  price: number;
  mainImage: Image;
  classification: Classification;
}

export interface Classification {
  id: number;
  title: string;
}
export interface HomeClassification {
  data: HomeClassificationData;
}

export interface HomeClassificationData {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  classifications: ClassificationMutation[];
  localizations: Localization[];
}

export interface ClassificationMutation {
  id: number;
  title: string;
  image: Image;
}

export interface PurposeBlock {
  data: PurposeBlockData;
}

export interface PurposeBlockData {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  purposeImage: Image;
}

export interface ReviewsBlock {
  data: ReviewsBlockData;
}

export interface ReviewsBlockData {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  title: string;
  review: Review[];
}

export interface Review {
  id: number;
  title: string;
  review: string;
  profileImage: Image;
}

export interface Image {
  id: number;
  name: string;
  url: string;
}

export interface Localization {
  id: number;
  locale: string;
}

export interface IFaq {
  heading: string;
  body: string;
}

export interface ITable {
  heading: string;
  body: string;
}

export interface OneArticle {
  data: OneArticleData;
}

export interface OneArticleData {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  previewDescription: string;
  mainImage: Image;
  localizations: Localization[];
}

export interface IHeaderFooterInfo {
  data: IHeaderFooterData;
}

export interface IHeaderFooterData {
  id: number;
  mainPhoneNumber: string;
  locale: string;
  socialLinks: ISocialLink[];
  logo: ILogo;
}

export interface ISocialLink {
  id: number;
  href: string;
  icon: IIcon;
}

export interface IIcon {
  id: number;
  name: string;
  url: string;
}

export interface ILogo {
  id: number;
  name: string;
  url: string;
}
