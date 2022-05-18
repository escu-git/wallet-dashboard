import React from 'react'
import { InputSwitch } from 'primereact/inputswitch';
import { Typography } from '@mui/material';

const CurrencySwitch = ({setCurrency, currency}) => {
  const dollar = 'Dollar';
  const euro = 'Euro'

  const switchHandler = (e) =>{
      setCurrency(e.value)
  }
  return (
      <div>
          <div className="card">
              <Typography>{currency}</Typography>
              <InputSwitch checked={currency}  trueValue={dollar} falseValue={euro} name='Currency' tooltip={`Change currency`} onChange={(e) => switchHandler(e)} />
          </div>
      </div>
  );
}


export default CurrencySwitch;