const MyButton = ({ backgroundColor, color, text, onClick }) => {
    return (
        <button 
            style = {{ backgroundColor: backgroundColor, color: color  }}
            className='btn'
            onClick={ onClick }
        >
            { text }
        </button>
    )
}

MyButton.defaultProps = {
    backgroundColor: 'whitesmoke',
    color: 'black',
    text: '???'
}

export default MyButton
