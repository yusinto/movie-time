// import {expect} from 'chai';
// import {getUnsettledList, getSettledSummary, getCustomerBetHistory} from '../../../common/logic/betLogic';
//
// describe('Bet Logic Tests', () => {
//
//     it('getCustomerBetHistory should return correct customer history', () => {
//         // arrange
//
//         // act
//         const promise = getCustomerBetHistory(1);
//
//         // assert
//         return promise.should.be.fulfilled.then(result => {
//             expect(result.length).to.equal(10);
//             expect(result[0].eventId).to.equal(1);
//             expect(result[0].stake).to.equal(50);
//             expect(result[0].win).to.equal(250);
//             expect(result[9].eventId).to.equal(9);
//             expect(result[9].stake).to.equal(50);
//             expect(result[9].win).to.equal(0);
//         });
//         expect(customerBetHistory.length).to.equal(10);
//     });
//
//     it('getSettledSummary should return correct summary', () => {
//         // arrange
//
//         // act
//         const promise = getSettledSummary();
//
//         // assert
//         return promise.should.be.fulfilled.then(result => {
//             expect(result.length).to.equal(6);
//             expect(result[0].customerId).to.equal(1);
//             expect(result[0].winPercentage).to.equal(70);
//             expect(result[0].exceedsWinPercentage).to.be.true;
//             expect(result[5].customerId).to.equal(6);
//             expect(result[5].winPercentage).to.equal(60);
//             expect(result[5].exceedsWinPercentage).to.be.false;
//         });
//     });
//
//     it('getUnsettledList should return correct unsettled list', () => {
//         // arrange
//
//         // act
//         const promise = getUnsettledList();
//
//         // assert
//         return promise.should.be.fulfilled.then(result => {
//             expect(result.length).to.equal(22);
//             expect(result[0].customerId).to.equal(1);
//             expect(result[0].eventId).to.equal(11);
//             expect(result[0].participantId).to.equal(4);
//             expect(result[0].stake).to.equal(50);
//             expect(result[0].toWin).to.equal(500);
//             expect(result[0].risks).to.eql([{
//                 riskCode: 10,
//                 riskDetails: `This customer has won 70% of bets historically.`
//             }]);
//             expect(result[1].risks).to.eql([{
//                     riskCode: 10,
//                     riskDetails: `This customer has won 70% of bets historically.`
//                 },
//                 {
//                     riskCode: 20,
//                     riskDetails: `This stake ${result[1].stake} is 10x higher than average 49`
//                 },
//                 {
//                     riskCode: 40,
//                     riskDetails: `Amount to win is ${result[1].toWin} which is higher than or equal to the limit of ${Constants.HIGH_BET_TOLERANCE}`
//                 }]);
//             expect(result[21].customerId).to.equal(6);
//             expect(result[21].eventId).to.equal(14);
//             expect(result[21].participantId).to.equal(6);
//             expect(result[21].stake).to.equal(50);
//             expect(result[21].toWin).to.equal(400);
//             expect(result[21].risks).to.be.empty;
//         });
//         expect(customerBetHistory.length).to.equal(10);
//     });
// });
