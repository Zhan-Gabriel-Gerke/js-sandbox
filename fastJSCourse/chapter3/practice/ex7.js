const object = {
        'rupert': {
            hobies : ['gym', 'math']
        }
    }

function makeFullCopy(obj) {
    const newObject = {}

    let object_keys = Object.keys(obj)

    for (let i = 0; i < Object.keys(obj).length; i++) {
        let current_key = object_keys[i]
        newObject[current_key] = obj[current_key]
    }

    console.log(newObject)
}

makeFullCopy(object)