const JokeService = {
    async get() {
        const options = {
            headers: {
                Accept: "text/plain",
                "User-Agent": "Yrgo test (www.yrgo.se)"
            },
        };
    
        const resp = await fetch("https://icanhazdadjoke.com/", options)
        if (!resp.ok) {
            console.log("uh-oh...")
            return
        }
    
        return resp.text()
    }
}

export { JokeService }
