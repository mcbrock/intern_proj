'use strict'
const axios = require('axios');


const start = (say, sendButton) => {
	sendButton("Let's start off by picking a subject!", [{ title: "Yes! Let's go! 😄", payload: '1' }]);
};

const state = (payload, say, sendButton) => {
	//Variables
	var input_ary, topic, subtopic, vidtype, results

	if (payload === '1') {
		const str = 'Welcome Back! Let\'s get ready to work!📝';
		say(str).then(() => {
			sendButton('What subject would you like study now?', [{ title: 'Precalculus🤩', payload: 'precalc-N' }, { title: 'Calculus😎', payload: 'calc-N' }, { title: 'Trigonometry😋', payload: 'trig-N' }]);

		});

	}

	input_ary = payload.split('-');
	topic = input_ary[0];
	if (payload === topic + '-N') {
		if (topic === 'precalc') {
			const str = 'Great! Precalculus it is!🥳';
			say(str).then(() => {
				sendButton('So many topics to choose! Which one do you want to study?🤔', [{ title: 'Graphs', payload: 'precalc-graphs-N' }, { title: 'Lines & Rates of Change', payload: 'precalc-lines-N' }, { title: 'Polynomials', payload: 'precalc-polynomials-N' }]);

			});
        }
        
        if (topic === 'trig'){
            const str = 'Awesome! Let\'s learn Trigonometry!🥳';  
            say(str).then(() => {
                sendButton('So many topics to choose! Which one do you want to study?🤔', [{ title: 'Trigonometric Functions', payload: 'trig-funcs-N' }, { title: 'Identities', payload: 'trig-identity-N' }]);
                
			});
        }
    }
    

	input_ary = payload.split('-');
	topic = input_ary[0];
	subtopic = input_ary[1];

	if (payload === topic + '-' + subtopic + '-N') {
		sendButton('What kind of video are you looking for?📺', [{ title: 'Short Video', payload: topic + '-' + subtopic + '-short-N' }, { title: 'Long Video', payload: topic + '-' + subtopic + '-long-N' }]);
	}
	input_ary = payload.split('-');
	topic = input_ary[0];
	subtopic = input_ary[1];
    vidtype = input_ary[2];
	if (payload === topic + '-' + subtopic + '-' + vidtype + '-N') {
		// if (topic === 'precalc') {
        //     //code
		// 	}
        // }
        
        // if (topic === 'trig'){
        //     //code
        //     }
        // }
	}

};

module.exports = {
	filename: 'mathvideosearch',
	title: 'Math Helper!',
	introduction: [
		'Learn or improve your Math skills!',
		'When the game starts, you can choose the topic and video you would like to watch!'
	],
	start: start,
	state: state
};






// 'use strict';

// const links = {};
// links['precalc-graphs-short-N'] = ''


// const precalclinks = (subtopic,vidtype) => {
//     var graph_func = {
//         short: [{description: 'Parent Functions: This video shows the graph of parent functions along with their domains, ranges, and some transformations', url: 'https://www.youtube.com/watch?v=8howrlJVyxw'},
//                     {description: 'Domain and Range Visually: This video teaches you how to determine the domain and range of a function by its graph', url: 'https://www.youtube.com/watch?v=sjIvUz7T0zY'}
//                     ], 
//         medium: [{description: 'Function definition: This video answers the question what is a function through definitions, graphs, and several examples', url: 'https://www.youtube.com/watch?v=GY6Q2f2kvY0'},
//                     {description: 'Domain and Range Overview: This video answers the question what exactly is a domain and range and gives the viewer the tools of thinking to find them', url: 'https://www.youtube.com/watch?v=1c7eILT2ELY' }
//                     ],
//         long:   [{description: 'Graphing Linear, Quadratic, Cubic, Radical, & Rational Functions: This video teaches you how to graph several different functions through multiple examples', url: 'https://www.youtube.com/watch?v=tfF_-Db8iSA'},
//                     {description: 'Overview of Pre-Calculus: This hour long video gives you a brief look at several different pre-calculus graphing topics such as graphing parent functions, transformations, and domain and range', url: 'https://www.youtube.com/watch?v=JrWJnwCMlP0'}, 
//                     {description: 'Transformations: This video teaches you how to do various transformations with different types of graphs', url: 'https://www.youtube.com/watch?v=Zw6UQPdjCtQ'}
//                     ]
//     };
   
    
//     var poly = {
//         short: [{description: 'Finding the zeros: This video explains how to find all of the zeros of a polynomial function by using the rational zero theorem', url: 'https://www.youtube.com/watch?v=Iaq7z7reznM'},
//                     {description: 'Descartes Rule of Signs: This video explains Descartes Rule of Signs and how it helps determine the number of positive real roots', url: 'https://www.youtube.com/watch?v=5YAmwfT3Esc'},
//                     {description: 'Graph to Equation: This video gives some tips on how to convert a graph of a polynomial into an equation', url: 'https://www.youtube.com/watch?v=Mp55wMhgHtM'}
//                     ], 
//         medium: [{description: 'Graphing polynomials: This video shows you how to graph polynomials by using x intercepts, zeros, end behavior, and multiplicity. It also briefly explains how to factor a cubic function', url: 'https://www.youtube.com/watch?v=q6vgQEZuNKk'},
//                     {description: 'Factoring polynomials: This video shows you how to solve a polynomial equation by factoring. It also introduces various theorems to help the process', url: 'https://www.youtube.com/watch?v=iFyu4ahVxQg'}
//                     ],
//         long:   [{description: 'Synthetic Division: This video shows how to solve polynomial equations by synthetic division and factoring', url: 'https://www.youtube.com/watch?v=0oF09ATZyvE'},
//                 {description: 'Factoring polynomials: This video introduces several methods of factoring polynomials including GCF, AC Method, Grouping, Substitution, and Sum and Difference of Cubes', url: 'https://www.youtube.com/watch?v=mXvt9OumKH8'} 
//                     ]
//     };

//     if (subtopic === 'graphs') {
// 		return graph_func[vidtype];
//     }

//     if (subptopic === 'polynomials'){
//         return poly[vidtype];
//     }
// };

// const triglinks = (subtopic,vidtype) => {
//     var func = {
//         short: [{description: 'Triangle ratios: This video shows you how to find the sides of a right triangle using the SOH CAH TOA method and walking through a few examples', url: 'https://www.youtube.com/watch?v=q5JMy_NAP1c'},
//                     {description: 'Memorize Trigonometric ratios: This short video shows a fast way to memorize the five trigonometric ratios, using just one hand!', url: 'https://www.youtube.com/watch?v=jI81WXyFrL0'},
//                     {description: 'Reference Angle with Trigonometric Functions: This video explains how to use reference angles when evaluating trigonometric functions', url: 'https://www.youtube.com/watch?v=V8LEHEzdU2U'}
//                     ], 
//         medium: [{description: 'Unit Circle: This video goes through all of the angles/radians of the unit circle. It also shows the uniqueness of these angles as well as going from positive to negative angles', url: 'https://www.youtube.com/watch?v=RS6qmQXP8fc'},
//                     {description: 'Inverse Trigonometric Functions: This video gives a basic introduction to what inverse trigonometric functions are and how to evaluate them. It goes through many different examples regarding inverse sine, cosine, and tangent', url: 'https://www.youtube.com/watch?v=aRVWs1tDarI'}
//                     ],
//         long:   [{description: 'Sin, cosine, and tangent: This video gives several examples of how to use sin, cosine, and tangent to solve right triangles by using the SOH CAH TOA method', url: 'https://www.youtube.com/watch?v=HAole1-hadc'},
//                 {description: 'Unit Circle: This video gives an in depth look into the unit circle, showing how triangles and circles are related. It also explains some functions, such as sine, cosine, and tangent', url: 'https://www.youtube.com/watch?v=593w799sBms'},
//                 {description: 'Graphing cos, sin, and tan: This video shows how to graph the sine, cosine, and tangent functions and how their graphs relate to the unit circle', url: 'https://www.youtube.com/watch?v=z9mqGopdUQk'}
//                     ]

//     };

//     var iden = {

//     };

//     if (subtopic === 'funcs') {
// 		return func[vidtype];
//     }

//     if (subptopic === 'identity'){
//         return iden[vidtype];
//     }
// };




// // const precalclinks = (vidlength) => {
// // 	let shortvids = ['This video shows the graph of parent functions along with their domains, ranges, and some transformations:', 'https://www.youtube.com/watch?v=8howrlJVyxw', 'This video teaches you how to determine the domain and range of a function by its graph:', 'https://www.youtube.com/watch?v=sjIvUz7T0zY'];
// // 	let mediumvids = ['This video answers the question “what is a function” through definitions, graphs, and several examples:'];
// // 	mediumvids.push('https://www.youtube.com/watch?v=GY6Q2f2kvY0')
// // 	mediumvids.push('This video answers the question “what exactly is a domain and range” and gives the viewer the tools of thinking to find them:')
// // 	mediumvids.push('https://www.youtube.com/watch?v=1c7eILT2ELY')
// // 	let longvids = ['This video teaches you how to graph several different functions through multiple examples:'];
// // 	longvids.push('https://www.youtube.com/watch?v=tfF_-Db8iSA')
// // 	longvids.push('This hour long video gives you a brief look at several different pre-calculus graphing topics such as graphing parent functions, transformations, and domain and range:');
// // 	longvids.push('https://www.youtube.com/watch?v=JrWJnwCMlP0')
// // 	longvids.push('This video teaches you how to do various transformations with different types of graphs:')
// // 	longvids.push('https://www.youtube.com/watch?v=Zw6UQPdjCtQ')
// // 	if (vidlength === 'short') {
// // 		return shortvids;
// // 	}
// // 	if (vidlength === 'medium') {
// // 		return mediumvids;
// // 	}
// // 	if (vidlength === 'long') {
// // 		return longvids;
// // 	}
// // 
// // }

// const start = (say, sendButton) => {
// 	sendButton("Let's start off by picking a subject!", [{ title: "Yes! Let's go! 😄", payload: '1' }, { title: 'cheat', payload: 'precalc-graphs-short-N' }]);
// };

// // i think for states we should have two states (either right or wrong), not sure if that’s the correct usage of state though.

// const state = (payload, say, sendButton) => {
// 	//Variables
// 	var input_ary, topic, subtopic, vidtype, results

// 	if (payload === '1') {
// 		const str = 'Welcome Back! Let\'s get ready to work!';
// 		say(str).then(() => {
// 			sendButton('What topic would you like study now?', [{ title: 'Precalculus', payload: 'precalc-N' }, { title: 'Calculus', payload: 'calc-N' }, { title: 'Trigonometry', payload: 'trig-N' }]);

// 		});

// 	}

// 	input_ary = payload.split('-');
// 	topic = input_ary[0];
// 	if (payload === topic + '-N') {
// 		if (topic === 'precalc') {
// 			const str = 'Great! Precalculus it is!';
// 			say(str).then(() => {
// 				sendButton('So many topics to choose! Which one do you want to study?', [{ title: 'Graphs', payload: 'precalc-graphs-N' }, { title: 'Lines & Rates of Change', payload: 'precalc-lines-N' }, { title: 'Polynomials', payload: 'precalc-polynomials-N' }]);

// 			});
//         }
        
//         if (topic === 'trig'){
//             const str = 'Awesome! Let\'s learn Trigonometry!';  
//             say(str).then(() => {
//                 sendButton('So many topics to choose! Which one do you want to study?', [{ title: 'Trigonometric Functions', payload: 'trig-funcs-N' }, { title: 'Identities', payload: 'trig-identity-N' }]);
                
// 			});
//         }
//     }
    

// 	input_ary = payload.split('-');
// 	topic = input_ary[0];
// 	subtopic = input_ary[1];

// 	if (payload === topic + '-' + subtopic + '-N') {
// 		sendButton('What kind of video are you looking for?', [{ title: 'Short Video (<15 Min)', payload: topic + '-' + subtopic + '-short-N' }, { title: 'Medium Video (15-30 min)', payload: topic + '-' + subtopic + '-medium-N' }, { title: 'Long Video (> 30 min)', payload: topic + '-' + subtopic + '-long-N' }]);
// 	}
// 	input_ary = payload.split('-');
// 	topic = input_ary[0];
// 	subtopic = input_ary[1];
//     vidtype = input_ary[2];
// 	if (payload === topic + '-' + subtopic + '-' + vidtype + '-N') {
// 		if (topic === 'precalc') {
//             results = precalclinks(subtopic, vidtype);
// 			for (let i = 0; i < results.length; i++) {
//             say(results[i].description + " " +  results[i].url);
// 			}
//         }
        
//         if (topic === 'trig'){
//             results = triglinks(subtopic,vidtype);
//             for (let i = 0; i < results.length; i++) {
//                 say(results[i].description + " " +  results[i].url);
//             }
//         }
// 	}

// };

// module.exports = {
// 	filename: 'mathvideosearch',
// 	title: 'Math Helper!',
// 	introduction: [
// 		'Learn or improve your Math skills!',
// 		'When the game starts, you can choose the topic and video you would like to watch!'
// 	],
// 	start: start,
// 	state: state
// };