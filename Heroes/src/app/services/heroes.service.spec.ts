import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { HeroesService } from './heroes.service';

describe('HeroesService', () => {

  let service: HeroesService;
  let mockId = 1;
  let returnMockNameOk = {name:"aquaman"};
  
  beforeEach(() =>{ TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule    
      ],
    });
   
   
  });
  
  it('Obtención Heroe (nombre) con id: 1', (done:DoneFn) => {
    
    let httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    httpClientSpy.get.and.returnValue(of(returnMockNameOk)); 
    
    service = new HeroesService(httpClientSpy as any);
    
    service.getHeroe(mockId).subscribe((resultado:any)=>{
      expect(resultado.name).toEqual(returnMockNameOk.name);
      done();
    })
    
  });


});
