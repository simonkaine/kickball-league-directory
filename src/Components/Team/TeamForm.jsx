export default function TeamForm({ name, setName }) {
    return (
        <>
            <form>
                <label htmlFor='name'>Name: </label>
                <input type='text' name='name' placeholder='Enter name'
                id='name' 
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                ></input>
            </form>
        </>
    )
}