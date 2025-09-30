import { v4 as uuidv4 } from "uuid";

function chillHop() {
    return [
        {
            name: "Interstellar",
            cover:
                "https://cms.chillhop.com/media/4927/squarel35db1aabb21682edacf2b924c17a1fdfc455cdcb.jpg",
            artist: "drkmnd, Arbour",
            audio: "https://stream.chillhop.com/mp3/8005",
            color: ["#CBB088", "#13221C"],
            id: uuidv4(),
            active: true,
        },
        {
            name: "Never Ending",
            cover:
                "https://cms.chillhop.com/media/9880/squarel63d2d2cdabbc5df023603b5f47b2fb97963cb537.jpg",
            artist: "Sitting Duck, squeeda",
            audio: "https://stream.chillhop.com/mp3/9652",
            color: ["#8DD0BD", "#3C201A"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Dry Leaves",
            cover:
                "https://cms.chillhop.com/media/82948/squarel318635c311fa2552ff63dd2661fc295aee425c66.jpg",
            artist: "Sweeps, luv pug, Strehlow",
            audio: "https://stream.chillhop.com/mp3/82325",
            color: ["#F2D1AA", "#769DAE"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Shoegaze",
            cover:
                "https://cms.chillhop.com/media/85261/squarelc90d2d78083df96dfc03d6a2b1694399ac6abbd1.jpg",
            artist: "J.Folk",
            audio: "https://stream.chillhop.com/mp3/85273",
            color: ["#B4C3CE", "#C6AF9F"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Black M5",
            cover:
                "https://cms.chillhop.com/media/85410/squarelca50603a1f14e471b71598379644f7179892c700.jpg",
            artist: "Kreatev",
            audio: "https://stream.chillhop.com/mp3/85298",
            color: ["#2A2B29", "#514143"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Fairy Tales",
            cover:
                "https://cms.chillhop.com/media/84244/squarel9a53810a6412a5bbef29bc2506fdd480aafbe63c.jpg",
            artist: "DESH, delaney",
            audio: "https://stream.chillhop.com/mp3/83926",
            color: ["#D9C6B7", "#DE8E35"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Dumbar",
            cover: "https://cms.chillhop.com/media/85570/squarel1703fcb7df2c193064d104555139ddc8237f7fb0.jpg",
            artist: "Parkbench Epiphany",
            id: uuidv4(),
            active: false,
            color: ["#96ABBE", "#765209"],
            audio: "https://stream.chillhop.com/mp3/86056"
        }
    ];  
}

export default chillHop;