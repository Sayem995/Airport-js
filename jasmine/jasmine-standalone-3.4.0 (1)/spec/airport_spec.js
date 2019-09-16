describe('Airport', function() {
      
   var plane = new Plane();

  it("expects plane to land at an airport", function() {
    Plane.land();
    expect(Plane.landed()).toBe(true);
  });
});
