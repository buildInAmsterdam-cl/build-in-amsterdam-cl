// I used similar naming from earlier, but did it to match the what the components will probably we named as well using component naming conventions. If they are not descriptive enough or could improve we can decide to update it.

//To import to a file, imoprt it like you would a redux function by destructuring from the file.
//      Ex: import { caseId7Information, componentTypesList } from './{...filePath}/getCaptions'

//After building this I found that the info could possibly be measured and extracted without using the numberOfMedia or numberOfCaptions, but you could definitely use them, since the logic for extraction could, be greater than 0, then get the mediaId or caseId number for extraction from the database.

//If we need to edit any of these lists meaning inserting information into the database, then I will need to update the Id numbers in the arrays for callbacks. That's okay just let me know.


//NOTE: This is an optional array I made for helping in mapping through this during callback. If it is not used, I will live, just there as reference to the naming conventions being used right now.
const componentTypesList = [
    'OneThirdCaptPic', 
    'OneThirdCapt',
    'FullImage',
    'OneHalfImage',
    'TwoThirdsImage',
    'ColorPicker',
    'OneFullFontGrid',
    'TwoThirdsIPad',
    'FullGrid6PicsInIcons'
]




// For future builds if we want to do more. If I feel ambitious I may build the other arrays to correspond with IDs if things go well with the constructors.

// export const caseId1 = ['two-third', 'one-third']





const caseId7Information = [
    {
        componentType: 'OneThirdCaptPic',
        numberOfMedia: 1,
        numberOfCaptions: 1,
        mediaId: [96],
        captionsId: [41]
    },
    {
        componentType: 'TwoThirdsImage',
        numberOfMedia: 1,
        numberOfCaptions: 0,
        mediaId: [97],
        captionsId: []
    },
    {
        componentType: 'OneFullFontGrid',
        numberOfMedia: 3,
        numberOfCaptions: 3,
        mediaId: [98, 99, 100],
        captionsId: [42, 43, 44]
    },
    {
        componentType: 'ColorPicker',
        numberOfMedia: 0,
        numberOfCaptions: 1,
        mediaId: [],
        captionsId: [45]
    },
    {
        componentType: 'FullImage',
        numberOfMedia: 1,
        numberOfCaptions: 0,
        mediaId: [101],
        captionsId: []
    },
    {
        componentType: 'OneThirdCapt',
        numberOfMedia: 0,
        numberOfCaptions: 1,
        mediaId: [],
        captionsId: [46]
    },
    {
        componentType: 'TwoThirdsIPad',
        numberOfMedia: 1,
        numberOfCaptions: 0,
        mediaId: [102],
        captionsId: []
    },
    {
        componentType: 'FullGrid6PicsInIcons',
        numberOfMedia: 6,
        numberOfCaptions: 0,
        mediaId: [103, 104, 105, 106, 107, 108],
        captionsId: []
    },
    {
        componentType: 'OneThirdCapt',
        numberOfMedia: 0,
        numberOfCaptions: 1,
        mediaId: [],
        captionsId: [47]
    },
    {
        componentType: 'TwoThirdsIPad',
        numberOfMedia: 1,
        numberOfCaptions: 0,
        mediaId: [109],
        captionsId: []
    },
    {
        componentType: 'OneHalfImage',
        numberOfMedia: 1,
        numberOfCaptions: 0,
        mediaId: [110],
        captionsId: []
    },
    {
        componentType: 'OneHalfImage',
        numberOfMedia: 1,
        numberOfCaptions: 0,
        mediaId: [111],
        captionsId: []
    },
    {
        componentType: 'FullImage',
        numberOfMedia: 1,
        numberOfCaptions: 0,
        mediaId: [112],
        captionsId: []
    },
    {
        componentType: 'OneThirdCapt',
        numberOfMedia: 0,
        numberOfCaptions: 1,
        mediaId: [],
        captionsId: [48]
    },
    {
        componentType: 'TwoThirdsImage',
        numberOfMedia: 1,
        numberOfCaptions: 0,
        mediaId: [113],
        captionsId: []
    },
    {   //NOTE: The next two components could be combined into one component containing a video carasael within the iPad. We did not scrape the two other videos though. So not crucial.
        componentType: 'OneThirdCapt',
        numberOfMedia: 0,
        numberOfCaptions: 1,
        mediaId: [],
        captionsId: [49]
    },
    {   
        componentType: 'TwoThirdsIPad',
        numberOfMedia: 1,
        numberOfCaptions: 0,
        mediaId: [114],
        captionsId: []
    },

    {
        componentType: 'OneThirdCaptPic',
        numberOfMedia: 1,
        numberOfCaptions: 1,
        mediaId: [115],
        captionsId: [50]
    },
    {
        componentType: 'TwoThirdsImage',
        numberOfMedia: 1,
        numberOfCaptions: 0,
        mediaId: [116],
        captionsId: []
    }
]