


export default function(data) {
    const feeds = data.feeds;
    let finalObj = { 
        cards:[
            {
                name: "Ambient Temperature",
                value: "33C",
                xDataKey: "time",
                yDataKey: "temperature",
                // 20 to 35
                yUnit: "C",
                data: []
            },
            {
                name: "Ambient Humidity",
                value: "64%",
                xDataKey: "time",
                yDataKey: "humidity",
                // 50 to 80
                yUnit: "%",
                data: []
            }
        ], 
        miniCards:[
            {
                name: "Soil Humidity",
                value: "10%",
                yUnit: "%",
            },
            {
                name: "Leaf Wetness",
                // 50
                value: "Yes",
                yUnit: ""
            },
            {
                name: "Soil Temperature",
                value: "30 C",
                yUnit: "C"
            },
            
        ]
    };
    // entry["created_at"]
    feeds.map((entry, idx) => {
        finalObj.cards[0].data.push({time: entry["created_at"], temperature: entry["field1"] == "nan" ? 0 : parseFloat(entry["field1"])})
        finalObj.cards[1].data.push({time: entry["created_at"], humidity: entry["field2"] == "nan" ? 0 : parseFloat(entry["field2"])})
    })

    const latestFeed = feeds[feeds.length - 1]
    finalObj.cards.map((ele, index) => ele.value = `${parseFloat(latestFeed["field" + (index+1)]).toFixed(2)} ${ele.yUnit}`)
    finalObj.miniCards.map((ele, index) => ele.value = `${parseFloat(latestFeed["field" + (index+3)]).toFixed(2)} ${ele.yUnit}`)
    finalObj.miniCards[1].value = latestFeed["field4"] == 0 ? "Yes" : "No"; 
    return finalObj
}