package com.portfolio.maximiliano.Controller;

import com.portfolio.maximiliano.Entity.About;
import com.portfolio.maximiliano.Services.AboutService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/about")
@CrossOrigin(origins = "http://localhost:4200")
public class AboutController {

    private final AboutService aboutService;

    public AboutController(AboutService aboutService) {
        this.aboutService = aboutService;
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/actualizar")
    public ResponseEntity<About> editarAbout(@RequestBody About about){
        About updateAbout = aboutService.editarAbout(about);
        return new ResponseEntity<>(updateAbout,HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<About> obtenerAbout(@PathVariable("id") Long id){
        About about = aboutService.buscarAboutPorId(id);
        return new ResponseEntity<>(about, HttpStatus.OK);
    }

}
