// this file i want to house my form for user to create a team 
import { useState } from "react";
import { useHistory } from "react-router";
// import { createTeam } from '../../Services/teams';  

export default function AddTeam() {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const history = useHistory();

    const submitHandler = async (e) => {
        e.preventDefault();

    };

}