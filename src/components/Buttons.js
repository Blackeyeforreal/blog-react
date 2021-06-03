const Button = ({color,text}) => {
    return <button  className='bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 rounded-lg'> {text} </button>

}


Button.defaultProps={
    color: 'stealblue'
}


export default Button;