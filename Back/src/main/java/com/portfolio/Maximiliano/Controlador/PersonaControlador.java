package com.portfolio.Maximiliano.Controlador;
import com.portfolio.Maximiliano.Entidad.Persona;
import com.portfolio.Maximiliano.Interface.IPersonaServicio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PersonaControlador {
    @Autowired IPersonaServicio ipersonaServicio;
   
    @GetMapping("/personas/traer")
    public List<Persona> getPersona(){
        return ipersonaServicio.getPersona();
    }
    
    @PostMapping("personas/crear")
    public String createPersona(@RequestBody Persona persona){
        ipersonaServicio.savePersona(persona);
        return "la persona fue creada correctamente";
    }
    
    @DeleteMapping("/personas/borrar/{id}")
    public String deletePersona(@PathVariable Long id){
        ipersonaServicio.deletePersona(id);
        return "La persona fue borrada exitosamente";
    }
    
    @PutMapping("/personas/editar/{id}")
    public Persona editPersona(@PathVariable Long id,
                               @RequestParam("nombre") String nuevonombre,
                               @RequestParam("Apellido") String nuevoapellido,
                               @RequestParam("img") String nuevoimg){
        Persona persona =ipersonaServicio.findPersona(id);
        
        persona.setNombre(nuevonombre);
        persona.setNombre(nuevoapellido);
        persona.setNombre(nuevoimg);
        
        ipersonaServicio.savePersona(persona);
        return persona;
        
    }
}
