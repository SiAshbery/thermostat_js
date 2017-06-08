
describe("Thermostat", function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });
  it("Can read the temperature", function(){
    expect(thermostat.temperature).toEqual(20);
  });
  it("Increasing the temperature heats things up", function(){
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });
  it("Decreasing the temperature cools things down", function(){
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });
  it("Can't decrease the temperature below 10.C", function(){
    for(i = 0; i < 11; i ++){ thermostat.down() };
    expect(thermostat.temperature).toEqual(10);
  });
  it("Has a power saving mode that is on by default", function(){
    expect(thermostat.powerSavingMode).toEqual(1);
  });
  it("Can toggle the powerSavingMode to off", function(){
    thermostat.togglePowerSavingMode()
    expect(thermostat.powerSavingMode).toEqual(0);
  });
  it("Can toggle the powerSavingMode back to on", function(){
    for(i = 0; i < 2; i++) { thermostat.togglePowerSavingMode() };
    expect(thermostat.powerSavingMode).toEqual(1);
  });
  it("Has a maximum tempterature which is at 25 by default", function(){
    expect(thermostat.maximumTemp).toEqual(25);
  });
  it("Has a maximum tempterature which is at 32 when powerSavingMode is off", function(){
    thermostat.togglePowerSavingMode();
    expect(thermostat.maximumTemp).toEqual(32);
  });
  it("Returns it's current tempt to 20 when reset", function(){
    thermostat.up();
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });
});
