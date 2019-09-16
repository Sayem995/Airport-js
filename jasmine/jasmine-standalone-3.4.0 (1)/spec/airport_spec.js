describe('Airport', function() {
  var plane = new Plane();

  it("expects plane to land at an airport", function() {
    plane.land
    expect(landed).toBe(true);
  });
  });
