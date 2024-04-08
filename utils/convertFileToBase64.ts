export default function convertFileToBase64(file: File): Promise<string> {
	let handlePromise = new Promise<string>((resolve) => {
		let reader = new FileReader();
		reader.onloadend = function () {
			if (typeof reader.result == 'string') resolve(reader.result);
		};
		reader.readAsDataURL(file);
	});
	return handlePromise;
}
