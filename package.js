Package.describe({
	summary: "Upload files to S3. Allows use of Knox Server-Side and get files urls on client-side."
});

Npm.depends({
	knox: "0.8.5"
});

Package.on_use(function (api) {
	//Need service-configuration to use Meteor.method
	api.use(["underscore", "ejson","service-configuration"], ["client", "server"]);
	api.use(["handlebars", "ui"], "client");
	api.add_files("s3client.js", "client");
	api.add_files("s3server.js", "server");

	//Allows user access to Knox
	api.export && api.export("Knox","server");
});
