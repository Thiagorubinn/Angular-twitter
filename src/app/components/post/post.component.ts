import { Component } from '@angular/core';
import { MessagesService } from 'src/app/service/messages.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
	tweetMessage:string = ""
	tweetMaxLenght: number = 240
	tweetRemain:number = this.tweetMaxLenght

	constructor(private service: MessagesService){

	}

	sendTweet(){
		this.service.addMessage(this.tweetMessage)
		this.tweetMessage = ""
		this.tweetRemain = this.tweetMaxLenght

	}

	changeTweet(){
		this.tweetRemain = this.tweetMaxLenght - this.tweetMessage.length
	}
}
