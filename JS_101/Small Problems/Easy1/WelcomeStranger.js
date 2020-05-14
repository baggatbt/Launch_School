function greetings(name, job){
	console.log(`Hello," ${name.join(" ")} Nice to have a ${job.title} ${job.occupation} around.`)
}

greetings(["john", "Q", "Doe"], {title: "Master", occupation: "Plumber"})