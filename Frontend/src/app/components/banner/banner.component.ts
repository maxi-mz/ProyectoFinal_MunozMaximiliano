
import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/Entidades/About';
import { AboutService } from 'src/app/servicios/about.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

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
