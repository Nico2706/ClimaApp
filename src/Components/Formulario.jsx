import {useState, useEffect}from 'react';
import Error from './Error';

function Formulario({pacientes, setpacientes, setpaciente ,paciente}){
    const [nombre, setnombre] = useState('');
    const [propietario, setpropietario] = useState('');
    const [email, setemail] = useState('');
    const [fecha, setfecha] = useState('');
    const [sintomas, setsintomas] = useState('');
    const [error, seterror] = useState(false);


    useEffect(()=>{
        if(Object.keys(paciente).length > 0){
            setnombre(paciente.nombre)
            setpropietario(paciente.propietario)
            setemail(paciente.email)
            setfecha(paciente.fecha)
            setsintomas(paciente.sintomas)
        }
    },[paciente])


    const generarId = () =>{
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36)

        return random + fecha

    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if([nombre, propietario, email, fecha, sintomas].includes('')){
            console.log('elemento vacio')
            seterror(true)
            return;
        }
        seterror(false)   

        const objetoPaciente={
            nombre,
            propietario,
            email,
            fecha,
            sintomas,
            
        }
        if(paciente.id){
            objetoPaciente.id = paciente.id
            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
            setpacientes(pacientesActualizados)
            setpaciente({})
        }else{
            objetoPaciente.id = generarId();
            setpacientes([...pacientes, objetoPaciente]);
        } 

        setnombre('')
        setpropietario('')
        setemail('')
        setfecha('')
        setsintomas('')
    }
    


    return(
        <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Seguimietno Pacientes</h2>
        <p className="text-lg mt-5 text-center mb-10">
             Añade pacientes y
            <span className="text-indigo-600 font-bold "> Administrarlos</span>
        </p>

        <form 
            onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-r-lg py-10 px-5 mb-5">

            {error &&  (
                <Error
                mensaje='todos los campos son obligatorios'
                />
            ) }
            <div className="mb-5">
                <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
                <input 
                type="text"
                placeholder="Nombre de la Mascota"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-r-md"
                id="mascota"
                value={nombre}
                onChange={(e) => setnombre(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
                <input 
                type="text"
                placeholder="Nombre del Propietario"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-r-md"
                id="propietario"
                value={propietario}
                onChange={(e) => setpropietario(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
                <input 
                type="email"
                placeholder="Email de contacto"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-r-md"
                id="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label htmlFor="fecha" className="block text-gray-700 uppercase font-bold">Alta</label>
                <input 
                type="date"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-r-md"
                id="fecha"
                value={fecha}
                onChange={(e) => setfecha(e.target.value)}
                />
            </div>


            <div>
                <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
                <textarea 
                id="sistomas"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-r-md"
                placeholder="Describa los sintomas"
                value={sintomas}
                onChange={(e) => setsintomas(e.target.value)}
                />
            </div>

            <input
            type="submit"
            className="bg-indigo-600 w-full p-3 rounded-md font-bold text-white uppercase hover:bg-indigo-900 cursor-pointer transition-all"
            value={paciente.id ? "Editar paciente" : "Agregar paciente"}
            />
        </form>

        </div>
    )



}

export default Formulario