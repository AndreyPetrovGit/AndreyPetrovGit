var script=require('../js/dist/script.js');
describe("programming test", function() //xdescribe
{

   it("Expect myPow(3,3)!", function() {
      var result=script.myPow(3,3);
      expect(result).toEqual(27);//==
   });
   it("Expect myPow(15,10)!", function() {
      var result=script.myPow(15,10);
      expect(result).toEqual(576650390625);//==
   });
  it("Expect myPow(10,0)!", function() {
      var result=script.myPow(10,0);
      expect(result).toEqual(1);//==
   });
  it("Expect myPow(0,10)!", function() {
      var result=script.myPow(0,10);
      expect(result).toEqual(0);//==
   });
   it("Expect myPow(0,0)!", function() {
      var result=script.myPow(0,0);
      expect(result).toEqual(1);//==
   });


});