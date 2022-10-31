import  {useState, useEffect} from "react"
import Formulario from "./Components/Formulario"
import Header from "./Components/Headet"
import ListadosPaciente from "./Components/ListadosPaciente"

function App() {

  const [pacientes, setpacientes] = useState([]);
  const [paciente, setpaciente] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setpacientes(pacientesLS)
    }
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));
  }, [pacientes])

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);
    setpacientes(pacientesActualizados)
  }
  
  
  
  
  
  return (
    <div className="container mx-auto mt-20">
    <Header/>
    
    <div className="mt-12 md:flex">
    <Formulario
    pacientes={pacientes}
    setpacientes={setpacientes}
    paciente={paciente}
    setpaciente={setpaciente}
    />
    <ListadosPaciente
      pacientes={pacientes}
      setpaciente={setpaciente}
      eliminarPaciente={eliminarPaciente}
    />




    </div>
    
    </div>
    
    
  )
}
export default App