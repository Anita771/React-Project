export default function Button () {
    function handleClick(){
        alert('You are chatting to a Robot')
    }
    return (
    <button onClick= {handleClick}>
    Send
    </button>
    );
}