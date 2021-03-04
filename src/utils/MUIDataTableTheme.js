import { createMuiTheme } from '@material-ui/core/styles'

const defaultTheme = createMuiTheme()
const getMuiTheme = () => createMuiTheme({
  palette: {
    primary: {
      main: '#ff9800',
      light: '#13D595',
    },
    secondary: {
      main: '#ff9800',
    },
    grey: {
      main: '#888888',
      light: '#FEFDFF',
      dark: '#757575',
    },
    white: '#FFFFFF',
  },
  typography: {
    fontFamily: "'Noto Sans TC', 'Roboto', sans-serif",
    h1: {
      fontFamily: 'Noto Sans TC',
      fontWeight: 500,
    },
    h2: {
      fontFamily: 'Noto Sans TC',
      fontWeight: 500,
    },
    h3: {
      fontFamily: 'Noto Sans TC',
    },
    h4: {
      fontFamily: 'Noto Sans TC',
    },
    h5: {
      fontFamily: 'Noto Sans TC',
    },
    h6: {
      fontFamily: 'Noto Sans TC',
    },
    subtitle1: {
      fontFamily: 'Noto Sans TC',
      fontWeight: 500,
    },
    subtitle2: {
      fontFamily: 'Noto Sans TC',
    },
    body1: {
      fontFamily: 'Noto Sans TC',
    },
    body2: {
      fontFamily: 'Noto Sans TC',
    },
    button: {
      fontFamily: 'Noto Sans TC',
      fontWeight: 300,
    }
  },
  overrides: {
    MUIDataTableToolbar: {
      root: {
        padding: '0 15px',
      },
      titleText: {
        color: '#555555',
      },
    },
    MUIDataTableHeadCell: {
      data: {
        color: '#ff9800',
        fontWeight: 400,
      },
    },
    MUIDataTableBodyCell: {
      root: {
        wordWrap: 'break-word',
      },
      stackedCommon: {
        color: '#555555',

        '&:nth-last-child(2)': {
          [defaultTheme.breakpoints.down('xs')]: {
            width: 'calc(30%)',
          }
        },
        '&:last-child': {
          [defaultTheme.breakpoints.down('xs')]: {
            width: 'calc(70%)',
          }
        },
      }
      
    },
  }
})

export default getMuiTheme
