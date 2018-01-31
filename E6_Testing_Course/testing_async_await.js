/*	eslint-disable func-names */
/*	Function: breathe
	Purpose: Testing returning a promise.
*/
function breathe(amount) {
	return new Promise((resolve, reject) => {
		if (amount < 500) {
			reject(Error('That is too small of a value'));
		}
		setTimeout(() => resolve(`Done for ${amount} ms`), amount);
	});
}

/*	Function: catchErrors
	Purpose: catches the errors that might arise from the function.
*/
function catchErrors(fn) {
	// Returning a function. (if the function has arguments. The spread operator will take care of it)
	return function (...args) {
		//	Returns the function. And if there is an error the .catch will catch it.
		//	As well the spread operator will handle the arguments that might be passed through
		return fn(...args).catch((err) => {
			console.error('Ohhh nooo!!!!');
			console.error(err);
		});
	};
}

/*	Function: go
	Purpose: Processes the promises request
*/
async function go() {
	console.log('start');
	const res = await breathe(1000);
	console.log(res);
	const res2 = await breathe(300);
	console.log(res2);
	const res3 = await breathe(750);
	console.log(res3);
	const res4 = await breathe(900);
	console.log(res4);
	console.log('end');
}

async function go(name) {
	console.log(`starting for ${name}`);
	const res = await breathe(1000);
	console.log(res);
	const res2 = await breathe(300);
	console.log(res2);
	const res3 = await breathe(750);
	console.log(res3);
	const res4 = await breathe(900);
	console.log(res4);
	console.log('end');
}

// const wrappedFunction = catchErrors(go);

const wrappedFunctionWArgs = catchErrors(go);
wrappedFunctionWArgs('Wiber');

