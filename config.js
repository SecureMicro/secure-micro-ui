import fs from 'fs'
import moment from 'moment'
// const fs = require("fs");
// var moment = require("moment");

fs.readFile('src/config/metadata.json', function (err, content) {
    console.log('content', content)
    if (err) throw err
    let metadata = JSON.parse(content)
    if (metadata.prod.buildRevision === 9) {
        if (metadata.prod.buildMinor === 9) {
            metadata.prod.buildMajor = metadata.prod.buildMajor + 1
            metadata.prod.buildMinor = 0
            metadata.prod.buildRevision = 0
        } else {
            metadata.prod.buildMinor = metadata.prod.buildMinor + 1
            metadata.prod.buildRevision = 0
        }
    } else {
        metadata.prod.buildRevision = metadata.prod.buildRevision + 1
    }
    metadata.prod.deployTime = moment().format('DD MM YYYY hh:mm A')
    fs.writeFile(
        'src/config/metadata.json',
        JSON.stringify(metadata),
        function (err) {
            if (err) throw err
            console.log('version update successfully!')
        }
    )
})
