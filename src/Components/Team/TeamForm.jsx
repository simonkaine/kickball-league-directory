export default function TeamForm({ name, setName, submitHandler, state, setState, city, setCity}) {
    return (
        <>
            <form onSubmit={submitHandler}>
                <label htmlFor='name'>Name: </label>
                <input 
                    type='text' 
                    name='name' 
                    placeholder='Enter name'
                    id='name' 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                ></input>

                <label htmlFor='city'>City: </label>
                <input 
                    type='text' 
                    city='city' 
                    placeholder='Enter city'
                    id='city' 
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                ></input>

                <label htmlFor='state'>State: </label>  
                <input 
                    type='text' 
                    state='state' 
                    placeholder='Enter state'
                    id='state' 
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                ></input>
                <button>Button</button>
            </form>
        </>
    )
}