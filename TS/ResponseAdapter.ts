// stwórz klasę, która tłumaczy 
// z interfejsu WeirdResponse 
// na interfejs NormalResponse 
// wykorzystując wzorzec obiektowy Adapter

interface WeirdResponse {
    status: number,
    data: {
        data: [Array<any> | Object],
        parameters: {
            status: number,
            msg: string
        }
    }
}


interface NormalResponse {
    status: number,
    data: Array<any> | Object,
    msg: string
}


class ResponseAdapter implements NormalResponse {
    constructor(weirdResponse:WeirdResponse){
        // 
    }
}


// Aby działało to w taki sposób:
// const weirdResponse: WeirdResponse = { ... }
// const normalResponse: NormalResponse = new ResponseAdapter(weirdResponse)