import { v4 as uuidv4 } from 'uuid';


const data = {
    dentist: [
        { 
            id: uuidv4(),
            name: "Pieter",
        surname: "Meijer",
        gender: "male",
        tel: "+31614357895",
        email:"p.meijer@tandartspraktijkbvt.nl"
        },
        { 
            id: uuidv4(),
            name: "Sander van",
        surname: "Wijk",
        gender: "male",
        tel: "+31646872398",
        email:"sv.wijk@tandartspraktijkbvt.nl"
        },
        { 
            id: uuidv4(),
            name: "Lisa",
        surname: "Kok",
        gender: "female",
        tel: "+31648973462",
        email:"l.kok@tandartspraktijkbvt.nl"
        },
        { 
            id: uuidv4(),
            name: "Carlijn",
        surname: "Bos",
        gender: "male",
        tel: "+31618954725",
        email:"c.bos@tandartspraktijkbvt.nl"
    },
    ],
    assistants: [
        { 
            id: uuidv4(),
            name: "Heleen van",
        surname: "Loon",
        gender: "female",
        tel: "+31615586547",
        email:"h.loon@tandartspraktijkbvt.nl"
        },
        { 
            id: uuidv4(),
            name: "Maartje",
        surname: "Schouten",
        gender: "female",
        tel: "+31652137948",
        email:"m.schouten@tandartspraktijkbvt.nl"
        },
    ]
}


export default data