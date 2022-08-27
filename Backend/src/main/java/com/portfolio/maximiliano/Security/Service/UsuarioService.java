package com.portfolio.maximiliano.Security.Service;

import com.portfolio.maximiliano.Security.Entity.Usuario;
import com.portfolio.maximiliano.Security.Repository.UsuarioRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
public class UsuarioService {
    @Autowired
    UsuarioRepo usuarioRepo;

    public Optional<Usuario> getByNombreUsuario(String nombreUsuario){
        return usuarioRepo.findByNombreUsuario(nombreUsuario);
    }

    public boolean existsByNombreUsuario(String nombreUsuario){
        return usuarioRepo.existsByNombreUsuario(nombreUsuario);
    }

    public boolean existsByEmail(String email){
        return usuarioRepo.existsByEmail(email);
    }

    public void save(Usuario usuario){
        usuarioRepo.save(usuario);
    }
}
