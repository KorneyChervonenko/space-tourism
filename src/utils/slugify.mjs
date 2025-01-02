export default function slugify(str) {
	let url = str.trim(); // trim leading/trailing white space
	url = url.toLowerCase(); // convert string to lowercase
	url = url
		.replace(/[^a-z0-9 -]/g, '') // remove any non-alphanumeric characters
		.replace(/\s+/g, '-') // replace spaces with hyphens
		.replace(/-+/g, '-'); // remove consecutive hyphens
	return url;
}

// const name1 = "Count d'Artagnan";
// const name2 = 'Quentin Jerome Tarantino';
// const name3 = 'Osama bin Laden';
// const name4 = 'Johann Wolfgang von Goethe';

// const names = ['Douglas Hurley', 'Mark Shuttleworth', 'Victor Glover', 'Anousheh Ansari'];
// names.forEach((name) => console.log(slugify(name)));

// console.log(slugify(name1));
// console.log(slugify(name2));
// console.log(slugify(name3));
// console.log(slugify(name4));
