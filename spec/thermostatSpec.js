describe("Thermostat",function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat;
  });
  it("Has a temperature of 20 by default", function(){
    expect(thermostat.getCurrentTemperature()).toEqual("20.C")
  });
  it("Increases the temperature by 1", function(){
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual("21.C")
  });
  it("Decreases the temperature by 1", function(){
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual("19.C")
  });
  it("Has a minimum temperature of 10", function(){
    expect(thermostat.MINIMUMTEMP).toEqual(10)
  });
  it("Returns the current status of Power Saving Mode", function(){
    expect(thermostat.getCurrentPowerSavingStatus()).toEqual("on");
  });
  it("Changes the current power saving mode to off", function(){
    thermostat.togglePowerSavingMode();
    expect(thermostat.getCurrentPowerSavingStatus()).toEqual("off");
  })
  it("Changes the current power saving mode back to on", function(){
    for(i = 0; i < 2; i++) { thermostat.togglePowerSavingMode(); };
    expect(thermostat.getCurrentPowerSavingStatus()).toEqual("on");
  });
  it("Has a default maximum temperature of 25.C", function(){
    for(i = 0; i < 6; i++) { thermostat.up(); };
    expect(thermostat.getCurrentTemperature()).toEqual("25.C");
  });
  it("Has a default maximum temperature of 32.C when not in power saving", function(){
    thermostat.togglePowerSavingMode();
    for(i = 0; i < 13; i++) { thermostat.up(); };
    expect(thermostat.getCurrentTemperature()).toEqual("32.C");
  });
  it("Will bump current temp down if powersaving mode toggled", function(){
    thermostat.togglePowerSavingMode();
    for(i = 0; i < 11; i++) { thermostat.up(); };
    thermostat.togglePowerSavingMode();
    expect(thermostat.getCurrentTemperature()).toEqual("25.C")
  });
  it("Will return the temperature to 20.C when reset", function(){
    thermostat.up();
    thermostat.reset();
    expect(thermostat.getCurrentTemperature()).toEqual("20.C")
  });
  it("Returns the current energy usage as low when Temp is < 18", function(){
    for(i = 0; i < 3; i++){thermostat.down();};
    expect(thermostat.getCurrentEnergyUsage()).toEqual("low-usage");
  });
  it("Returns the current energy usage as medium when Temp is < 25", function(){
    for(i = 0; i < 4; i++){thermostat.up();};
    expect(thermostat.getCurrentEnergyUsage()).toEqual("medium-usage");
  });
  it("Returns the current energy usage as high when Temp is => 25", function(){
    for(i = 0; i < 6; i++){thermostat.up(); };
    expect(thermostat.getCurrentEnergyUsage()).toEqual("high-usage");
  });
});
