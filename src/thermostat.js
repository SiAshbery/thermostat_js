function Thermostat(){

  this.temperature = 20;
  this.MINIMUMTEMP = 10;
  this.powerSavingMode = 1;
  this.maximumTemp = 25;

  Thermostat.prototype.getCurrentTemperature = function(){
    return this.temperature + ".C";
  };

  Thermostat.prototype.up = function(){
    this.temperature += 1;
    if(this.temperature > this.maximumTemp) {
      this.temperature = this.maximumTemp;
    };
  };

  Thermostat.prototype.down = function(){
    this.temperature -= 1;
    if(this.temperature < this.MINIMUMTEMP){
      this.temperature = this.MINIMUMTEMP;
    };
  };

  Thermostat.prototype.getCurrentPowerSavingStatus = function(){
    if (this.powerSavingMode === 1) {
      return "on";
    } else {
      return "off";
    }
  };

  Thermostat.prototype.togglePowerSavingMode = function(){
    if (this.powerSavingMode === 0) {
      this.powerSavingMode = 1;
      this.maximumTemp = 25;
      if (this.temperature > this.maximumTemp){
        this.temperature = this.maximumTemp;
      };
    } else {
      this.powerSavingMode = 0;
      this.maximumTemp = 32;
    }
  };

  Thermostat.prototype.reset = function(){
    this.temperature = 20;
  };

  Thermostat.prototype.getCurrentEnergyUsage = function() {
  if (this.temperature < 18) {
    return 'low-usage';
  }
  if (this.temperature >= 18 && this.temperature < 25) {
    return 'medium-usage';
  }
  return 'high-usage';
}

};
