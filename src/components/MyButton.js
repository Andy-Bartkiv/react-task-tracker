const MyButton = ({ color, text }) => {
    return (
        <button 
            style = {{ backgroundColor: color }}
            className='btn'
        >
            { text }
        </button>
    )
}

MyButton.defaultProps = {
    color: 'whitesmoke',
    text: '???'
}

export default MyButton
