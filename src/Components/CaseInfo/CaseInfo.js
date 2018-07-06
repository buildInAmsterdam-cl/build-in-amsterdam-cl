// I used similar naming from earlier, but did it to match the what the components will probably we named as well using component naming conventions. If they are not descriptive enough or could improve we can decide to update it.

//To import to a file, imoprt it like you would a redux function by destructuring from the file.
//      Ex: import { caseId7Information, componentTypesList } from './{...filePath}/getCaptions'

//After building this I found that the info could possibly be measured and extracted without using the numberOfMedia or numberOfCaptions, but you could definitely use them, since the logic for extraction could, be greater than 0, then get the mediaId or caseId number for extraction from the database.

//If we need to edit any of these lists meaning inserting information into the database, then I will need to update the Id numbers in the arrays for callbacks. That's okay just let me know.

//NOTE: This is an optional array I made for helping in mapping through this during callback. If it is not used, I will live, just there as reference to the naming conventions being used right now.
module.exports = {
    componentTypesList: [
        'OneThirdCaptPic',
        'OneThirdCapt',
        'FullImage',
        'OneHalfImage',
        'TwoThirdsImage',
        'ColorPicker',
        'OneFullFontGrid',
        'TwoThirdsIPad',
        'TwoThirdsIPadWithImage',  //This is a new component that would need to be built if we wanted to emulate one tile on the shoe cases page.
        'FullGrid6PicsInIcons'
    ],
    
    caseId1Information: [
        {
            componentType: 'OneThirdCaptPic',
            numberOfMedia: 1,
            numberOfCaptions: 1,
            mediaId: [1],
            captionsId: [1]
        },
        {
            componentType: 'TwoThirdsImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [2],
            captionsId: []
        },
        {
            componentType: 'OneThirdCapt',
            numberOfMedia: 0,
            numberOfCaptions: 1,
            mediaId: [],
            captionsId: [2]
        },
        {
            componentType: 'TwoThirdsImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [3],
            captionsId: []
        },
        {
            componentType: 'OneThirdCaptPic',
            numberOfMedia: 1,
            numberOfCaptions: 1,
            mediaId: [4],
            captionsId: [3]
        },
        {
            componentType: 'TwoThirdsImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [5],
            captionsId: []
        },
        {
            componentType: 'OneThirdCapt',
            numberOfMedia: 0,
            numberOfCaptions: 1,
            mediaId: [],
            captionsId: [4]
        },
        {
            componentType: 'TwoThirdsIPad',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [6],
            captionsId: []
        },
        {
            componentType: 'FullImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [7],
            captionsId: []
        },
        {
            componentType: 'OneThirdCapt',
            numberOfMedia: 0,
            numberOfCaptions: 1,
            mediaId: [],
            captionsId: [5]
        },
        {
            componentType: 'TwoThirdsIPad',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [8],
            captionsId: []
        },
        {
            componentType: 'OneHalfImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [9],
            captionsId: []
        },
        {
            componentType: 'OneHalfImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [10],
            captionsId: []
        },
        {
            componentType: 'OneThirdCapt',
            numberOfMedia: 0,
            numberOfCaptions: 1,
            mediaId: [],
            captionsId: [6]
        },
        {
            componentType: 'TwoThirdsImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [11],
            captionsId: []
        },
        {
            componentType: 'FullImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [12],
            captionsId: []
        },
        {
            componentType: 'OneThirdCapt',
            numberOfMedia: 0,
            numberOfCaptions: 1,
            mediaId: [],
            captionsId: [7]
        },
        {
            componentType: 'TwoThirdsIPad',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [13],
            captionsId: []
        }
    ],

    caseId2Information: [
        {
            componentType: 'OneThirdCaptPic',
            numberOfMedia: 1,
            numberOfCaptions: 1,
            mediaId: [14],
            captionsId: [8]
        },
        {
            componentType: 'TwoThirdsImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [15],
            captionsId: []
        },
        {
            componentType: 'FullImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [16],
            captionsId: []
        },
        {
            componentType: 'OneThirdCapt',
            numberOfMedia: 0,
            numberOfCaptions: 1,
            mediaId: [],
            captionsId: [9]
        },
        {
            componentType: 'TwoThirdsIPad',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [17],
            captionsId: []
        },
        {
            componentType: 'OneHalfImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [18],
            captionsId: []
        },
        {
            componentType: 'OneHalfImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [19],
            captionsId: []
        },
        {
            componentType: 'TwoThirdsIPad',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [20],
            captionsId: []
        },
        {
            componentType: 'OneThirdCapt',
            numberOfMedia: 0,
            numberOfCaptions: 1,
            mediaId: [],
            captionsId: [10]
        },
        {
            componentType: 'FullImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [21],
            captionsId: []
        },
        {
            componentType: 'OneThirdCapt',
            numberOfMedia: 0,
            numberOfCaptions: 1,
            mediaId: [],
            captionsId: [11]
        },
        {
            componentType: 'TwoThirdsIPad',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [22],
            captionsId: []
        },
        {
            componentType: 'OneThirdCaptPic',
            numberOfMedia: 1,
            numberOfCaptions: 1,
            mediaId: [23],
            captionsId: [12]
        },
        {
            componentType: 'TwoThirdsImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [24],
            captionsId: []
        },
        {
            componentType: 'FullImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [25],
            captionsId: []
        },
        {
            componentType: 'FullGrid6PicsInIcons',
            numberOfMedia: 6,
            numberOfCaptions: 0,
            mediaId: [26, 27, 28, 29, 30, 31],
            captionsId: []
        },
        {
            componentType: 'ColorPicker',
            numberOfMedia: 0,
            numberOfCaptions: 1,
            mediaId: [],
            captionsId: [13]
        },
        {
            componentType: 'OneFullFontGrid',
            numberOfMedia: 3,
            numberOfCaptions: 3,
            mediaId: [32, 33, 34],
            captionsId: [14, 15, 16]
        },
        {
            componentType: 'FullImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [35],
            captionsId: []
        },

    ],

    caseId3Information: [
        {
            componentType: 'OneThirdCaptPic',
            numberOfMedia: 1,
            numberOfCaptions: 1,
            mediaId: [36],
            captionsId: [17]
        },
        {
            componentType: 'TwoThirdsImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [37],
            captionsId: []
        },
        {
            componentType: 'FullImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [38],
            captionsId: []
        },
        {
            componentType: 'FullImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [39],
            captionsId: []
        },
        {
            componentType: 'TwoThirdsIPad',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [40],
            captionsId: []
        },
        {
            componentType: 'OneThirdCapt',
            numberOfMedia: 0,
            numberOfCaptions: 1,
            mediaId: [],
            captionsId: [18]
        },
        {
            componentType: 'FullImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [41],
            captionsId: []
        },
        {
            componentType: 'TwoThirdsIPad',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [42],
            captionsId: []
        },
        {
            componentType: 'OneThirdCapt',
            numberOfMedia: 0,
            numberOfCaptions: 1,
            mediaId: [],
            captionsId: [19]
        },
        {
            componentType: 'OneHalfImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [43],
            captionsId: []
        },
        {
            componentType: 'OneHalfImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [44],
            captionsId: []
        },
        {
            componentType: 'FullImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [45],
            captionsId: []
        },
        {
            componentType: 'OneThirdCapt',
            numberOfMedia: 0,
            numberOfCaptions: 1,
            mediaId: [],
            captionsId: [20]
        },
        {
            componentType: 'TwoThirdsIPad',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [46],
            captionsId: []
        },
        {
            componentType: 'FullImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [47],
            captionsId: []
        },
        {
            // componentType: 'TwoThirdsIPadWithImage',
            componentType: 'TwoThirdsImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [48],
            captionsId: []
        },
        {
            componentType: 'OneThirdCapt',
            numberOfMedia: 0,
            numberOfCaptions: 1,
            mediaId: [],
            captionsId: [21]
        },
        {
            componentType: 'OneThirdCaptPic',
            numberOfMedia: 1,
            numberOfCaptions: 1,
            mediaId: [49],
            captionsId: [22]
        },
        {
            componentType: 'TwoThirdsImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [50],
            captionsId: []
        },
        {
            componentType: 'OneFullFontGrid',
            numberOfMedia: 3,
            numberOfCaptions: 3,
            mediaId: [51, 52, 53],
            captionsId: [23, 24, 25]
        },
        {
            componentType: 'ColorPicker',
            numberOfMedia: 0,
            numberOfCaptions: 1,
            mediaId: [],
            captionsId: [26]
        },
        {
            componentType: 'OneThirdCaptPic',
            numberOfMedia: 1,
            numberOfCaptions: 1,
            mediaId: [54],
            captionsId: [27]
        },
        {
            componentType: 'TwoThirdsImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [55],
            captionsId: []
        },
        {
            componentType: 'FullImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [56],
            captionsId: []
        }

    ],

    caseId4Information: [
        {
            componentType: 'FullImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [57],
            captionsId: []
        },
        {
            componentType: 'OneThirdCaptPic',
            numberOfMedia: 1,
            numberOfCaptions: 1,
            mediaId: [58],
            captionsId: [28]
        },
        {
            componentType: 'TwoThirdsImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [59],
            captionsId: []
        },
        {
            componentType: 'FullImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [60],
            captionsId: []
        },
        {
            componentType: 'OneThirdCaptPic',
            numberOfMedia: 1,
            numberOfCaptions: 1,
            mediaId: [61],
            captionsId: [29]
        },
        {
            componentType: 'TwoThirdsImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [62],
            captionsId: []
        },
        {
            componentType: 'FullImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [63],
            captionsId: []
        },
        {
            componentType: 'OneThirdCapt',
            numberOfMedia: 0,
            numberOfCaptions: 1,
            mediaId: [],
            captionsId: [30]
        },
        {
            componentType: 'TwoThirdsImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [64],
            captionsId: []
        },
        {
            componentType: 'FullImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [65],
            captionsId: []
        },
        {
            componentType: 'OneHalfImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [66],
            captionsId: []
        },
        {
            componentType: 'OneHalfImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [67],
            captionsId: []
        },
        {
            componentType: 'OneThirdCapt',
            numberOfMedia: 0,
            numberOfCaptions: 1,
            mediaId: [],
            captionsId: [31]
        },
        {
            componentType: 'TwoThirdsIPad',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [68],
            captionsId: []
        },
        {
            componentType: 'OneHalfImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [69],
            captionsId: []
        },
        {
            componentType: 'OneHalfImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [70],
            captionsId: []
        },
        {
            componentType: 'FullImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [71],
            captionsId: []
        },
        {
            componentType: 'FullImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [72],
            captionsId: []
        },
        {
            componentType: 'OneThirdCaptPic',
            numberOfMedia: 1,
            numberOfCaptions: 1,
            mediaId: [73],
            captionsId: [32]
        },
        {
            componentType: 'TwoThirdsImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [74],
            captionsId: []
        },
        {
            componentType: 'FullImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [75],
            captionsId: []
        },
        {
            componentType: 'OneHalfImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [76],
            captionsId: []
        },
        {
            componentType: 'OneHalfImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [77],
            captionsId: []
        }
    ],

    caseId5Information: [
        {
            componentType: 'OneThirdCaptPic',
            numberOfMedia: 1,
            numberOfCaptions: 1,
            mediaId: [78],
            captionsId: [33]
        },
        {
            componentType: 'TwoThirdsImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [79],
            captionsId: []
        },
        {
            componentType: 'FullImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [80],
            captionsId: []
        },
        {
            componentType: 'OneThirdCapt',
            numberOfMedia: 0,
            numberOfCaptions: 1,
            mediaId: [],
            captionsId: [34]
        },
        {
            componentType: 'TwoThirdsIPad',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [81],
            captionsId: []
        },
        {
            componentType: 'OneHalfImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [82],
            captionsId: []
        },
        {
            componentType: 'OneHalfImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [83],
            captionsId: []
        },
        {
            componentType: 'FullImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [84],
            captionsId: []
        },
        {
            componentType: 'OneThirdCapt',
            numberOfMedia: 0,
            numberOfCaptions: 1,
            mediaId: [],
            captionsId: [35]
        },
        {
            componentType: 'TwoThirdsImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [85],
            captionsId: []
        },
        {
            componentType: 'FullImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [86],
            captionsId: []
        },
        {
            componentType: 'FullImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [87],
            captionsId: []
        },
        {
            componentType: 'OneThirdCapt', // These last two components I'm deviating from design here, because, it is a full image with a one third caption in the corner but the full image is taking all the space except the bottom left of the page. I haven't seen this anywhere else on the site yet.
            numberOfMedia: 0,
            numberOfCaptions: 1,
            mediaId: [],
            captionsId: [36]
        },
        {
            componentType: 'TwoThirdsImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [88],
            captionsId: []
        },
    ],

    caseId6Information: [
        {
            componentType: 'OneThirdCapt',
            numberOfMedia: 0,
            numberOfCaptions: 1,
            mediaId: [],
            captionsId: [37]
        },
        {
            componentType: 'TwoThirdsImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [89],
            captionsId: []
        },
        {
            componentType: 'OneFullFontGrid',
            numberOfMedia: 3,
            numberOfCaptions: 3,
            mediaId: [90, 91, 92],
            captionsId: [38, 39, 40]
        },
        {
            componentType: 'ColorPicker',
            numberOfMedia: 0,
            numberOfCaptions: 1,
            mediaId: [],
            captionsId: [41]
        },
        {
            componentType: 'OneThirdCaptPic',
            numberOfMedia: 1,
            numberOfCaptions: 1,
            mediaId: [93],
            captionsId: [42]
        },
        {
            componentType: 'TwoThirdsImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [94],
            captionsId: []
        },
        {
            componentType: 'FullImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [95],
            captionsId: []
        },
        {
            componentType: 'OneThirdCapt',
            numberOfMedia: 0,
            numberOfCaptions: 1,
            mediaId: [],
            captionsId: [43]
        },
        {
            componentType: 'TwoThirdsImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [96],
            captionsId: []
        },
        {
            componentType: 'FullImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [97],
            captionsId: []
        },
        {
            componentType: 'OneThirdCapt',
            numberOfMedia: 0,
            numberOfCaptions: 1,
            mediaId: [],
            captionsId: [44]
        },
        {
            componentType: 'TwoThirdsImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [98],
            captionsId: []
        },
        {
            componentType: 'FullImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [99],
            captionsId: []
        },
        {
            componentType: 'OneThirdCapt',
            numberOfMedia: 0,
            numberOfCaptions: 1,
            mediaId: [],
            captionsId: [45]
        },
        {
            componentType: 'TwoThirdsImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [100],
            captionsId: []
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
            componentType: 'OneHalfImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [103],
            captionsId: []
        },
        {
            componentType: 'OneHalfImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [104],
            captionsId: []
        },
    ],

    caseId7Information: [
        {
            componentType: 'OneThirdCaptPic',
            numberOfMedia: 1,
            numberOfCaptions: 1,
            mediaId: [105],
            captionsId: [47]
        },
        {
            componentType: 'TwoThirdsImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [106],
            captionsId: []
        },
        {
            componentType: 'OneFullFontGrid',
            numberOfMedia: 3,
            numberOfCaptions: 3,
            mediaId: [107, 108, 109],
            captionsId: [48, 49, 50]
        },
        {
            componentType: 'ColorPicker',
            numberOfMedia: 0,
            numberOfCaptions: 1,
            mediaId: [],
            captionsId: [51]
        },
        {
            componentType: 'FullImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [110],
            captionsId: []
        },
        {
            componentType: 'OneThirdCapt',
            numberOfMedia: 0,
            numberOfCaptions: 1,
            mediaId: [],
            captionsId: [52]
        },
        {
            componentType: 'TwoThirdsIPad',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [111],
            captionsId: []
        },
        {
            componentType: 'FullGrid6PicsInIcons',
            numberOfMedia: 6,
            numberOfCaptions: 0,
            mediaId: [112, 113, 114, 115, 116, 117],
            captionsId: []
        },
        {
            componentType: 'OneThirdCapt',
            numberOfMedia: 0,
            numberOfCaptions: 1,
            mediaId: [],
            captionsId: [53]
        },
        {
            componentType: 'TwoThirdsIPad',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [118],
            captionsId: []
        },
        {
            componentType: 'OneHalfImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [119],
            captionsId: []
        },
        {
            componentType: 'OneHalfImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [120],
            captionsId: []
        },
        {
            componentType: 'FullImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [121],
            captionsId: []
        },
        {
            componentType: 'OneThirdCapt',
            numberOfMedia: 0,
            numberOfCaptions: 1,
            mediaId: [],
            captionsId: [54]
        },
        {
            componentType: 'TwoThirdsImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [122],
            captionsId: []
        },
        {   //NOTE: The next two components could be combined into one component containing a video carasael within the iPad. We did not scrape the two other videos though. So not crucial.
            componentType: 'OneThirdCapt',
            numberOfMedia: 0,
            numberOfCaptions: 1,
            mediaId: [],
            captionsId: [55]
        },
        {
            componentType: 'TwoThirdsIPad',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [123],
            captionsId: []
        },

        {
            componentType: 'OneThirdCaptPic',
            numberOfMedia: 1,
            numberOfCaptions: 1,
            mediaId: [124],
            captionsId: [56]
        },
        {
            componentType: 'TwoThirdsImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [125],
            captionsId: []
        }
    ],

    caseIdSampleInfo: [
        {
            componentType: 'OneHalfImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [118],
            captionsId: []
        },
        {
            componentType: 'FullImage',
            numberOfMedia: 1,
            numberOfCaptions: 0,
            mediaId: [119],
            captionsId: []
        }
    ]
}