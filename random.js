function pickRandom(array) {

  let index = Math.round(Math.random() * array.length -1);

  if(index < 0){

    return array[0];

  } else{

  return array[index];

  }

}
