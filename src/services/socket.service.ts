import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import * as bcrypt from 'bcryptjs';


@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket!: Socket;
  constructor() {
  }





async initSocket() {
  const data = `LiveApp-1550572009310292-${Date.now()}`;
  const key = 'saMm6fLqm68JErmj';
  const saltOrRounds = 10;
  const hash = await bcrypt.hash(data + '-' + key, saltOrRounds);

  // this.socket = io(`http://localhost:5002/authen`, {
  //   transports: ['websocket'], // Sủ dụng khi socketserver không dùng sticky session
  //   auth: {
  //     token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IkM4RkFBMTA2OERFNjA4OEE1Mjk3OEQ1OUJBQUZGRjMzIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NjU2MzI1MTQsImV4cCI6MTY5NzE2ODUxNCwiaXNzIjoiaHR0cHM6Ly9hY2NvdW50LmxpdmUucmtlLmRldi50bXRjby5vcmciLCJhdWQiOlsiQWNjb3VudEFwcCIsIkxpdmVBcHAiLCJURGVza0FwcCIsIlRTaG9wQXBwIl0sImNsaWVudF9pZCI6IkxpdmVVc2VyQ2xpZW50IiwiYXBwIjoiTGl2ZUFwcCIsInRlbmFudGlkIjoiMTU1MDU3MjAwOTMxMDI5MiIsInJvbGUiOiJhZG1pbiIsInN1YiI6IjY2MzEzMDA5Mjk1OTM3MDkiLCJhdXRoX3RpbWUiOjE2NjU2MzI1MTQsImlkcCI6ImxvY2FsIiwiZW1haWwiOiJ0aW5obnRAdG10Y28uYXNpYSIsInBob25lX251bWJlciI6Iis4NDM3Njg0NjI5NSIsInBob25lX251bWJlcl92ZXJpZmllZCI6IlRydWUiLCJpYXQiOjE2NjU2MzI1MTQsInNjb3BlIjpbIkFjY291bnRBcHAiLCJMaXZlQXBwIiwib3BlbmlkIiwiVERlc2tBcHAiLCJUU2hvcEFwcCIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJwd2QiXX0.agYuhfAX_GtClKvF0T4797ipLDvwDKada7sCjC91UrNLWWwjZOZdBEYRZ7DFdqI2bXtJCD4ItWQtrqO9Bjt77QzTDNbNRXbEoaVQbkJFfCW61A8U1X4nWDEc5Cwp5_xOG1FA4Hfymzt8P7XdXO6jyYtHHhGNOOX_4072yc6RKi69fh-VKyNoZCLuPeJKeEqgBZAn57pblTpW8-_X7RrxRaqQPQhDdeDgwSQmtpnFDt6R9JaizxqX38WNijGcu2chH20GmfkU5PLiLdxRPzQdemdyNarIVZEJZAsK4WBAYvmeNb-Q-LeWsnSzCTkowiQVLnshYSdpxznJWjtqlKOulg'
  //     // data: data,
  //     // hash: hash,
  //   },
  //
  // })


  this.socket = io(`https://app.live.dev.tmtco.org/unauthen`, {
      transports: ['websocket'], // Sủ dụng khi socketserver không dùng sticky session
      auth: {
        data: data,
        hash: hash,
      },
      path: "/socket-notification/socket.io"

    })
  //
  // }
  // this.socket = io(`https://app.live.dev.tmtco.org/authen`, {
  //     transports: ['websocket'], // Sủ dụng khi socketserver không dùng sticky session
  //     auth: {
  //       token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IkM4RkFBMTA2OERFNjA4OEE1Mjk3OEQ1OUJBQUZGRjMzIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NjU2MzI1MTQsImV4cCI6MTY5NzE2ODUxNCwiaXNzIjoiaHR0cHM6Ly9hY2NvdW50LmxpdmUucmtlLmRldi50bXRjby5vcmciLCJhdWQiOlsiQWNjb3VudEFwcCIsIkxpdmVBcHAiLCJURGVza0FwcCIsIlRTaG9wQXBwIl0sImNsaWVudF9pZCI6IkxpdmVVc2VyQ2xpZW50IiwiYXBwIjoiTGl2ZUFwcCIsInRlbmFudGlkIjoiMTU1MDU3MjAwOTMxMDI5MiIsInJvbGUiOiJhZG1pbiIsInN1YiI6IjY2MzEzMDA5Mjk1OTM3MDkiLCJhdXRoX3RpbWUiOjE2NjU2MzI1MTQsImlkcCI6ImxvY2FsIiwiZW1haWwiOiJ0aW5obnRAdG10Y28uYXNpYSIsInBob25lX251bWJlciI6Iis4NDM3Njg0NjI5NSIsInBob25lX251bWJlcl92ZXJpZmllZCI6IlRydWUiLCJpYXQiOjE2NjU2MzI1MTQsInNjb3BlIjpbIkFjY291bnRBcHAiLCJMaXZlQXBwIiwib3BlbmlkIiwiVERlc2tBcHAiLCJUU2hvcEFwcCIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJwd2QiXX0.agYuhfAX_GtClKvF0T4797ipLDvwDKada7sCjC91UrNLWWwjZOZdBEYRZ7DFdqI2bXtJCD4ItWQtrqO9Bjt77QzTDNbNRXbEoaVQbkJFfCW61A8U1X4nWDEc5Cwp5_xOG1FA4Hfymzt8P7XdXO6jyYtHHhGNOOX_4072yc6RKi69fh-VKyNoZCLuPeJKeEqgBZAn57pblTpW8-_X7RrxRaqQPQhDdeDgwSQmtpnFDt6R9JaizxqX38WNijGcu2chH20GmfkU5PLiLdxRPzQdemdyNarIVZEJZAsK4WBAYvmeNb-Q-LeWsnSzCTkowiQVLnshYSdpxznJWjtqlKOulg'
  //     },
  //     path: "/socket-notification/socket.io"
  //
  //   })
  //
  // }
}
  getSocketId = () => this.socket.id;


  listenEvent(eventName: any): Observable<any> {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data: any) => {
        subscriber.next(data);
      });
    });
  }

  emitEvent(eventName: any, data: any): void {
    this.socket.emit(eventName, data);
  }
}
