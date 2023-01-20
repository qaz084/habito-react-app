import {BaseButton,ButtonSpinner,GoogleSignInButton,InvertedButton,PaymentButton} from './button.styles';


export const BUTTON_TYPE_CLASSES={
    base:'base',
    google:'google-sign-in',
    inverted:'inverted',
    payment:'payment',

}

const getButton=(buttonType=BUTTON_TYPE_CLASSES.base)=>({

  [BUTTON_TYPE_CLASSES.base]:BaseButton,
  [BUTTON_TYPE_CLASSES.google]:GoogleSignInButton,
  [BUTTON_TYPE_CLASSES.inverted]:InvertedButton,
  [BUTTON_TYPE_CLASSES.payment]:PaymentButton,

}[buttonType]
)

export const Button = ({children,buttonType,isLoading,...otherButtonProps})=> {
  const CustomButton=getButton(buttonType);
  return ( 
    <CustomButton disabled={isLoading} {...otherButtonProps}>
        {
        isLoading?
        <ButtonSpinner/>: children
         }
    </CustomButton>
  )
}
