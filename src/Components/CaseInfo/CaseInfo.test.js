const caseInfo = require('./CaseInfo');
const case7Stuff = caseInfo.caseId7Information;



test('Jest is working', function (){
    // Dummy function
    const data = { one: 1 };
    expect(data).toEqual({ one: 1 });
})

test('case7Stuff is an object', () => {
    let varType = typeof case7Stuff;
    expect(varType).toEqual('object');
})

test('case7Stuff one eqauls right value', () => {
    const firstObj = {
        componentType: 'OneThirdCaptPic',
        numberOfMedia: 1,
        numberOfCaptions: 1,
        mediaId: [96],
        captionsId: [41]
    }
    expect(case7Stuff[0]).toEqual(firstObj);
})

test('case7Stuff length is correct', () => {
    expect(case7Stuff.length).toEqual(19);    
})

test('case7Stuff number of two-thirds image components is 3', () => {
    let filteredResult = case7Stuff.filter(el => el.componentType === 'TwoThirdsIPad')
    // console.log('How many elements', filteredResult.length)
    expect(filteredResult.length).toBe(3);
})

test('case7Stuff number of color picker components is 1', () => {
    let filteredToPicker = case7Stuff.filter( (el) => el.componentType === 'ColorPicker')
    expect(filteredToPicker.length).toBe(1);
})

//Jon unit tests
// test('case7Stuff is an object', function () {
    // console.log(caseInfo);
    // expect(caseInfo.case7Stuff).toBe(true);
// })
