
const commentList = document.querySelector('.comment-list');
const userComment = document.querySelector('.user-comment');
const form = document.querySelector('.form');
const formName = document.querySelector('.form-name');
const formComment = document.querySelector('.form-comment');

let today = function () {
	var date = new Date();
	function getZero(num){
		if (num > 0 && num < 10) { 
			return '0' + num;
		} else {
			return num;
		}
	}

	return date.getHours() + ':' + date.getMinutes() + ' ' + 
		getZero(date.getDate()) + '.' + getZero(date.getMonth() + 1) + 
		'.' + date.getFullYear();
};

form.onsubmit = function(evt) {
	evt.preventDefault();
	
	let newComment = document.createElement('li');
	newComment.classList.add('user-comment');

	let name = document.createElement('p');
	name.textContent = formName.value;
	formName.value = '';
	let date = document.createElement('span');
	date.textContent = today();
	name.append(date);
	newComment.append(name);

	let comment = document.createElement('p');
	comment.textContent = formComment.value;
	formComment.value = '';
	newComment.append(comment);

	commentList.append(newComment);
};