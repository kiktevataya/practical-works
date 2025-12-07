import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question',
  standalone: false,
  templateUrl: './question.html',
  styleUrls: ['./question.css']
})
export class Question {

  @Input() question: any;

  @Output() answerSelected = new EventEmitter<string>();

  highlightedAnswer: string = '';

  selectAnswer(answer: string) {
    this.answerSelected.emit(answer);
  }

  showAnswer() {
    this.highlightedAnswer = this.question.correct;
  }
}
