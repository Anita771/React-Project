export default function Button () {
    function handleClick(){
        alert('You are chatting to a Robot')
    }
    return (
        <div className="Button">
    <button onClick= {handleClick}>
    Send
    </button>
    </div>
    );
}