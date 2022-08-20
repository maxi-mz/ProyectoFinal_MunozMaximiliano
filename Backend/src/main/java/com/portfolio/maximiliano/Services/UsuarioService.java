package com.portfolio.maximiliano.Services;

import com.portfolio.maximiliano.Entity.Usuario;
import com.portfolio.maximiliano.Exception.UsuarioNoEncontradoException;
import com.portfolio.maximiliano.Repository.UsuarioRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class UsuarioService {

    private final UsuarioRepo usuarioRepo;

    @Autowired
    public UsuarioService(UsuarioRepo usuarioRepo) {
        this.usuarioRepo = usuarioRepo;
    }

    public Usuario agregarUsuario(Usuario usuario){
        return usuarioRepo.save(usuario);
    }

    public List<Usuario> buscarUsuario(){
        return usuarioRepo.findAll();
    }

    public Usuario editarUsuario(Usuario usuario){
        return usuarioRepo.save(usuario);
    }

    public void borrarUsuario(Long id){
        usuarioRepo.deleteById(id);
    }

    public Usuario buscarUsuarioPorId(Long id){
        return usuarioRepo.findById(id).orElseThrow(()-> new UsuarioNoEncontradoException("Usuario no encontrado"));
    }


}
