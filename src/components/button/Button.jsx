import './button.styles.scss';


const BUTTON_TYPE_CLASSES={
    google:'google-sign-in',
    inverted:'inverted',

}

export const Button = ({children,buttonType,...otherButtonProps}) => {
  return (
    <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherButtonProps}>

        {children}

    </button>
  )
}
