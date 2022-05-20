import React, { Fragment } from 'react'
import { InputSwitch } from 'primereact/inputswitch';
import { Grid, Typography } from '@mui/material';
import { useCurrency } from '../../Context/UseCurrency';

const CurrencySwitch = ({}) => {
    const currencyContext = useCurrency()
    const dollar = 'Dollar';
    const euro = 'Euro'

    const switchHandler = (e) =>{
        currencyContext.setCurrency(e.value)
    }
    
  return (
      <Grid style={{position:'absolute', top:25, right:"10em"}}>
          <Fragment>
              <Typography>{currencyContext.currency}</Typography>
              <InputSwitch style={{}} checked={currencyContext.currency}  trueValue={dollar} falseValue={euro} name='Currency' tooltip={`Change currency`} onChange={(e) => switchHandler(e)} />
          </Fragment>
      </Grid>
  );
}


export default CurrencySwitch;