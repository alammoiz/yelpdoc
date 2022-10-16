import { Injectable } from '@nestjs/common';

const cohere = require('cohere-ai');
import { ConfigModule, ConfigService } from '@nestjs/config';

@Injectable()
export class ReviewService {
  constructor(private configService: ConfigService) {
    cohere.init(this.configService.get('COHERE_API'));
  }

  generate(text: string): Promise<any> {
    return cohere.generate({
      model: 'small',
      prompt: text,
      max_tokens: 50,
      temperature: 1,
    });
  }

  classify(text: string): Promise<any> {
    return cohere.classify({
      model: 'small',
      inputs: [text],
      examples: [
        { 'text': 'The doctor is good', 'label': 'Positive Review' },
        { 'text': 'I would recommended to other', 'label': 'Positive Review' },
        { 'text': 'Very experienced', 'label': 'Positive Review' },
        { 'text': 'Look after nicely', 'label': 'Positive Review' },
        { 'text': 'I am satisfied with this doctor', 'label': 'Positive Review' },
        { 'text': 'Doctor is late', 'label': 'Negative Review' },
        { 'text': 'Lack of experience', 'label': 'Negative Review' },
        { 'text': 'I wouldn\'t recommended to other', 'label': 'Negative Review' },
        { 'text': 'Waste of time', 'label': 'Negative Review' },
        { 'text': 'Bad experience', 'label': 'Negative Review' },
      ],
    });
  }
}
