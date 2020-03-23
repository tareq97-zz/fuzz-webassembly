let decrypted = [];

function getDecrypted() {
    alert(String.fromCharCode(...decrypted));
}

Wasabi.analysis = {
    store: function(location, op, addr, value) {
        console.log(arguments);
	console.log("this is printed")
        decrypted.push(value);
    },
};
