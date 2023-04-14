import { Component, OnInit} from '@angular/core';
import { MessagesService } from '../../service/messages.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	tweets: string[] = ['Olá Neymar' , 'Olá Dr Fran', 'Elon better with JS']

	constructor(private service: MessagesService){

	}
	ngOnInit(): void {
		this.tweets = this.service.getMessages()
	}

}
