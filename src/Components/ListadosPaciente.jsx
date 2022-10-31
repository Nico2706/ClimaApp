
import Paciente from "./Paciente";

const ListadosPaciente = ({pacientes, setpaciente, eliminarPaciente}) => {
    return(
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            {pacientes && pacientes.length ? (
        <>
        <h3 className="font-black text-3xl text-center">Pacientes
        <p className="text-xl mt-5 mb-10 text-center">
        Administra tus
        <span className="text-indigo-600 font-bold"> Pacientes </span>
        </p>
        </h3 >
        {pacientes.map((paciente  => ( 
            (
                <Paciente
                    key={paciente.id}
                    paciente={paciente}
                    setpaciente={setpaciente}
                    eliminarPaciente={eliminarPaciente}
                />
            ))
        
        
        ))}
        </>
        ) : (<h3 className="font-black text-3xl text-center">Pacientes
        <p className="text-xl mt-5 mb-10 text-center">
        Todavia no tienes
        <span className="text-indigo-600 font-bold"> Pacientes </span>
        </p>
        </h3 >)}
        
        </div>
    )
}
export default ListadosPaciente;
