import React, { Fragment } from 'react'
import { InputSwitch } from 'primereact/inputswitch';
import { Grid, Typography } from '@mui/material';
import { useCurrency } from '../../Context/UseCurrency';
import { useMediaQuery, useTheme } from '@mui/material';

const CurrencySwitch = ({}) => {
    const currencyContext = useCurrency()
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down('md'));

    const dollar = 'Dollar';
    const euro = 'Euro'

    const switchHandler = (e) =>{
        currencyContext.setCurrency(e.value)
    }
    
  return (
      <Grid  style={{
          position:'absolute', top:smallScreen?-40:50, right:smallScreen?'1em':'3em'}}>
          <Fragment>
              <Typography>{currencyContext.currency}</Typography>
              <InputSwitch
              checked={currencyContext.currency}  
              trueValue={dollar} 
              falseValue={euro}
              style={{}}
              name='Currency'
              onChange={(e) => switchHandler(e)} />
          </Fragment>
      </Grid>
  );
}


export default CurrencySwitch;