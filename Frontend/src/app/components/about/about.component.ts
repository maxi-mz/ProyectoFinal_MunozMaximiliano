import { About } from '../../Entidades/About';
import { AboutService } from './../../servicios/about.service';
import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public about : About | undefined ;
  isLogged = false;

  constructor(private aboutService: AboutService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getAbout();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged = false;
    }
  }

  public getAbout():void{
    this.aboutService.getAbout().subscribe(dato =>{
      this.about = dato
    })

    

  }

}
