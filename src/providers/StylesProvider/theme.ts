import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: {
      900: '#0D2E59',
      500: '#0B5DA7',
      300: '#0A6AA5',
    },
    secondary: {
      900: '#9a9da7',
      500: '#C1C6D9',
      300: '#F2F2F2',
    },
    pricemetred: {
      900: '#DB3D3D',
      500: '#F64545',
      300: '#FF5C5C',
    },
    pricemetorange: {
      900: '#E58200',
      500: '#FF9000',
      300: '#FFA633',
    },
    pricemetgreen: {
      900: '#209E53',
      500: '#25B860',
      300: '#2AD16D',
    },
    pricemetgray: {
      900: '#4B4852',
      500: '#67656B',
      400: '#838285',
      100: '#C6C6C6',
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: '4px',
      },
    },
    Card: {
      baseStyle: {
        borderRadius: '4px',
      },
    },
  },
});

export default theme;
