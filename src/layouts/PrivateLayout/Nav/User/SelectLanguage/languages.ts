import brFlagImg from 'assets/flags/br.png';
import enFlagImg from 'assets/flags/en.png';
import esFlagImg from 'assets/flags/es.png';

type Languages = {
  locale: TLocale;
  image: string;
}[];

const languages: Languages = [
  { locale: 'pt', image: brFlagImg },
  { locale: 'es', image: esFlagImg },
  { locale: 'en', image: enFlagImg },
];

export default languages;
