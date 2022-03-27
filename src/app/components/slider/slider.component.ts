import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
})
export class SliderComponent implements OnInit {

  event_list = [
    {
      event:' Event 1',
      eventLocation:'Bangalore',
      eventDescription:'In bangalore, first event is going to happen. Please be careful about it',
      img: 'https://images.unsplash.com/photo-1584118624012-df056829fbd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y292aWR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      eventStartDate: new Date('2019/05/20'),
      eventEndingDate: new Date('2019/05/24')
    },
     {
      event:' Event 2',
      eventLocation:'Dubai',
      eventDescription:'Dubai is another place to host so,e, first event is going to happen. Please be careful about it',
      img: 'https://images.unsplash.com/photo-1584931423298-c576fda54bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNvdmlkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      eventStartDate: new Date('2019/07/28'),
      eventEndingDate: new Date('2019/07/30')
    },
     {
      event:' Event 3',
      eventLocation:'New York',
      eventDescription:'NewYork sits on top of event hosting',
      img: 'https://images.unsplash.com/photo-1605289982774-9a6fef564df8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y292aWR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      eventStartDate: new Date('2020/05/20'),
      eventEndingDate: new Date('2020/05/24')
    },
     {
      event:' Event 4',
      eventLocation:'Singapore',
      eventDescription:'Singapore is another great hosting city',
      img: 'https://images.unsplash.com/photo-1579208575657-c595a05383b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhlbHB8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      eventStartDate: new Date('2018/05/20'),
      eventEndingDate: new Date('2018/05/24')
    }
  ];
  constructor() {
  }

  ngOnInit() {
  }

}