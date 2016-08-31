var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  recipes = object
  recipes[key] = value
  return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  var space = [...object]
  var spaceKeys = Object.keys(space)
  for(var spaceKeys in space){
    if (spaceKeys == key){
      delete space[key]
    }
  }
  debugger;
  return space  
}

function destructivelyDeleteFromObjectByKey(object, key){
  var objectKeys = Object.keys(object)
  for(var objectKeys in object){
    if (objectKeys == key){
      delete object[key]
    }
  }
  return object
}