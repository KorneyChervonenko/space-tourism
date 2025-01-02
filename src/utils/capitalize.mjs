String.prototype.toCapitalize = function () {
	return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};

export function capitalize(textline) {
	let capitalized = textline.split(' ');
	capitalized = capitalized.filter((word) => word.length > 0);
	capitalized = capitalized.map((word) => word.toCapitalize());
	capitalized = capitalized.join(' ');
	return capitalized;
}

console.log(capitalize('ffff gggg'));
console.log(capitalize('ffffgggg'));
