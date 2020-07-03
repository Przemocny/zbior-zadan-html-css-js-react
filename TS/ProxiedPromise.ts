// napisz klasę ProxiedPromise, która:
// - będzie klasą rozszerzającą działanie Promise
// - będzie mieć metodę nasłuchujacą .beforeThen(callback)

// idea zadania jest taka, aby napisać mechanizm monitorujący dane z resolve, 
// aby przed wykonaniem resolve wykonać callback z beforeThen z danymi z resolve


class ProxiedPromise {
    // ...
}

const proxiedPromise = new ProxiedPromise((resolve, reject)=>{
    // ...
})

proxiedPromise.beforeThen((data)=>{
    console.log('dane z resolve', data)
    // nie trzeba nic zwracać
}).then((data)=>{
    console.log('dane z resolve', data)
    return data
}).catch((error)=>{})






