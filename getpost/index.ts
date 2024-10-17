import axios, { AxiosError, AxiosResponse } from 'axios';

import * as triv from './iTrivia';

async function GetTrivaToken(): Promise<any> {
	return new Promise<any>((resolve, reject) => {

		const response = axios
			.get('https://opentdb.com/api_token.php?command=request') //https://restcountries.com/v3.1/name/' + country.toLowerCase())
			.then(function ({ data }: any) {
				resolve(data.token);
			})
			.catch(function (error: any) {
				reject(error);
			});
	});
}

async function GetTriviaData(apiToken: string, numberOfQuestions: number): Promise<any> {
	return new Promise<any>((resolve, reject) => {

		const response = axios
			.get(
				'https://opentdb.com/api.php?amount=' +
				numberOfQuestions.toString() +
				'&category=11' +
				'&token=' + apiToken
			)
			.then(function ({ data }: any) {
				// artificial delay
				setTimeout(() => { 
					resolve(data);
				}, 5000);
			})
			.catch(function (error: any) {
				reject(error);
			});
	});

		// const response: any = await axios
		// 	.get(
		// 		'https://opentdb.com/api.php?amount=' +
		// 		numberOfQuestions.toString() +
		// 		'&category=11' +
		// 		'&token=' + apiToken
		// 	)
		// 	return response.data;

}

async function GetTrivia(numberOfQuestions: number) {
	const apiToken: string = await GetTrivaToken();
	console.log('Token: ' + apiToken);

	const trivy: triv.ITrivia = await GetTriviaData(apiToken, numberOfQuestions);

	trivy.results.forEach(t => {
		console.log('  -  ' + t.question)
		console.log('     -  (' + t.correct_answer + ') ' + t.incorrect_answers);
	});

}


GetTrivia(5);
