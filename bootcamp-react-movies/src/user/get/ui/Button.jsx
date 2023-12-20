import thisStyles from './Button.module.css';

function MyFirstButton (props) {

    //console.log(props);

    return (
        <>
            <button 
                className={thisStyles.showButton}
                onClick={props.click}
                >
                {props.text}
            </button>
        </>
    )
}

export default MyFirstButton;