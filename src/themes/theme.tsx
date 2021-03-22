import React, {useContext, useEffect} from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { ThemeContext } from "../contexts/theme";


const AppStyleProvider: React.FC = ({ children }) => {
  const { viewMode, } = useContext(ThemeContext);

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: viewMode ? 'dark' : 'light',
        },
      }),
    [viewMode],
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppStyleProvider;
