import StylesProvider from 'providers/StylesProvider';
import RoutesProvider from 'providers/RoutesProvider';
import TranslateProvider from 'providers/TranslateProvider';

const AppProvider: React.FC = () => {
  return (
    <StylesProvider>
      <TranslateProvider>
        <RoutesProvider />
      </TranslateProvider>
    </StylesProvider>
  );
};

export default AppProvider;
