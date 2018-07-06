const { caseId1Information, caseId2Information, caseId3Information, caseId4Information, caseId5Information, caseId6Information, caseId7Information } = require('./CaseInfo');

export function CaseChooser(caseNumber) {

    switch (caseNumber) {
        case 1:
            return caseId1Information;
        case 2:
            return caseId2Information;
        case 3:
            return caseId3Information;
        case 4:
            return caseId4Information;
        case 5: 
            return caseId5Information;
        case 6:
            return caseId6Information;
        case 7:
            return caseId7Information;

        default:
            return 'Please enter a real case number';
    }
}