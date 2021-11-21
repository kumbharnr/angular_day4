import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log (msg:any)
  {
    let messageTOconsole=new Date() +" "+msg;
    console.log(messageTOconsole);
  }
}
