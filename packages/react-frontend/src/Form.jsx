import React, {useState} from "react";

export default function Form(props){
    const [person, setPerson] = useState({
        name: "",
        job: ""
    });

    function handleChange(event){
        const { name, value } = event.target;
        if (name === "job") setPerson({ name: person["name"], job: value});
        else setPerson({name: value, job: person["job"]});
    }

    function submitForm() {
        props.handleSubmit(person);
        setPerson({ name: "", job: "" });
    }

    return (
        <form>
            <label htmlFor="name">Name</label>
            <input
                type= "text"
                value= {person.name}
                name="name"
                id="name"
                onChange={handleChange}
            />
            <label htmlFor="job"> Job</label>
            <input
                type="text"
                value ={person.job}
                name = "job"
                id= "job"
                onChange={handleChange}
            />
            <input type="button" value="Submit" onClick={submitForm} />
        </form> 
    );
}

