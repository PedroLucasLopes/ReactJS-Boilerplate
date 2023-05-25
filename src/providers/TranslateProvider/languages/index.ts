import pt from './packages/pt.json';
import en from './packages/en.json';
import es from './packages/es.json';

// https://chatgpt-i18n.vercel.app/ for translating JSONs

interface IPackage {
  [key: string]: string;
}

type TLanguages = {
  [key in TLocale]: IPackage;
};

const languages: TLanguages = { pt, en, es };

export default languages;
