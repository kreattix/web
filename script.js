import { configureTheme } from './src'

configureTheme({
  bodyStyles: {
    backgroundColor: 'black',
    color: 'white',
  },
  component: {
    text: {
      color: 'red',
      fontSize: 24,
    },
  },
  palette: {
    danger: {
      main: '#ff0000',
    },
  },
  rootStyles: {
    alignItems: 'center',
    display: 'flex',
    fontSize: 18,
    height: '100vh',
    justifyContent: 'center',
  },
})
