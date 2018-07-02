const caseInfo = require('./CaseInfo');
const case7Stuff = caseInfo.caseId7Information;
const caseSampStuff = caseInfo.caseIdSampleInfo
const componentList = caseInfo.componentTypesList;


//Jon unit tests
// test('case7Stuff is an object', function () {
    // console.log(caseInfo);
    // expect(caseInfo.case7Stuff).toBe(true);
// })

test('Jest is working', function (){
    // Dummy function
    const data = { one: 1 };
    expect(data).toEqual({ one: 1 });
})

test('case7Stuff is an object', () => {
    let varType = typeof case7Stuff;
    expect(varType).toEqual('object');
})

test('case7Stuff one equals right value', () => {
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

test('caseSampelestuff is an object', () => {
    let varType = typeof caseSampStuff;
    expect(varType).toEqual('object');
})

test('caseSampleStuff one eqauls right value', () => {
    const firstObj = {
        componentType: 'OneHalfImage',
        numberOfMedia: 1,
        numberOfCaptions: 0,
        mediaId: [111],
        captionsId: []
    }
    expect(caseSampStuff[0]).toEqual(firstObj);
})

test('caseSampleStuff length is correct', () => {
    expect(caseSampStuff.length).toEqual(2);    
})

test('caseSampleStuff number of two-thirds image components is 3', () => {
    let filteredResult = caseSampStuff.filter(el => el.componentType === 'TwoThirdsIPad')
    // console.log('How many elements', filteredResult.length)
    expect(filteredResult.length).toBe(0);
})

test('caseSampleStuff number of color picker components is 1', () => {
    let filteredToPicker = caseSampStuff.filter( (el) => el.componentType === 'ColorPicker')
    expect(filteredToPicker.length).toBe(0);
})
//Karli unit tests

test('case7Stuff one equals right value', () => {
    const fifthObj = {
        componentType: 'OneThirdCapt',
        numberOfMedia: 0,
        numberOfCaptions: 1,
        mediaId: [],
        captionsId: [46]
    }
    expect(case7Stuff[5]).toEqual(fifthObj);
})

test('case7Stuff to have TwoThirdsIPad', () => {
    const TwoThirds = {
        componentType: 'TwoThirdsIPad',
        numberOfMedia: 1,
        numberOfCaptions: 0,
        mediaId: [102],
        captionsId: []
    }
    expect(case7Stuff).toContainEqual(TwoThirds);
  });

test('only one item in case7stuff with greater than 5 numberOfMedia', ()=>{
      const checkNumMedia = case7Stuff.filter((e)=>e.numberOfMedia >=5)
      expect(checkNumMedia.length).toBe(1)
  })

test('Full Grid does not have captions', ()=>{
    expect(case7Stuff[7].mediaId).toBeTruthy()
})

test('TwoThirdsIpad is a string', ()=>{
    let varType = typeof case7Stuff[0].componentType;
    expect(varType).toEqual('string')
})

//Holly unit tests
test('two component types with 3 or more mediaIds', ()=>{
    const filterToMedia = case7Stuff.filter(e=>e.mediaId.length>=3)
    const newArray = [ {
        componentType: 'OneFullFontGrid',
        numberOfMedia: 3,
        numberOfCaptions: 3,
        mediaId: [98, 99, 100],
        captionsId: [42, 43, 44]
    }, 
    {
        componentType: 'FullGrid6PicsInIcons',
        numberOfMedia: 6,
        numberOfCaptions: 0,
        mediaId: [103, 104, 105, 106, 107, 108],
        captionsId: []
    }]
    expect(filterToMedia).toEqual(newArray)
})

test('FullGridPics should contain correct media ids', ()=>{
    const mediaArray = [103, 104, 105, 106, 107, 108]
    expect(case7Stuff[7].mediaId).toEqual(mediaArray)
})

test('captions for One Full Font Grid should be greater than 2', ()=>{
    const value = case7Stuff[2].captionsId.length
    expect(value).toBeGreaterThan(2);
})

test('number of captions describes a number',()=>{
    let varType = typeof case7Stuff[0].numberOfCaptions;
    expect(varType).toEqual('number')
})

test('expects Component Types list to be defined', ()=>{
    expect(componentList).toBeDefined();
})