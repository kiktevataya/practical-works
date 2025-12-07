import { Component, ViewChild } from '@angular/core';
import { Question } from '../question/question';

@Component({
  selector: 'app-quiz',
  standalone: false,
  templateUrl: './quiz.html',
  styleUrls: ['./quiz.css']
})
export class Quiz {

  @ViewChild(Question) questionComponent!: Question;

  question = {
    text: "Столиця Франції?",
    options: ["Київ", "Париж", "Рим", "Берлін"],
    correct: "Париж"
  };

  selectedAnswer: string | null = null;

  onAnswerSelected(answer: string) {
    this.selectedAnswer = answer;
  }

  reveal() {
    this.questionComponent.showAnswer();
  }
}
