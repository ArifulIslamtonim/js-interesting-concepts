function welComeMessage(name, greetHandler) {
    // console.log(greetHandler);
    greetHandler(name);
}
function gretting(name) {
    console.log('good morning', name);
}
function gretAfterNone(name) {
    console.log('good afternone', name);
}
const names = ['sakib', 'mosfique', 'tamim']
welComeMessage('amar bou',gretting);
welComeMessage('amar jaan',gretAfterNone);