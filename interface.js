$(document).ready(function() {
var thermostat = new Thermostat;
  updatecityInformation();

  function updatecityInformation() {
    $.get('http://api.openweathermap.org/data/2.5/weather?q='+$("#city-list").val()+'&appid=097ab6f93a50d80748fac6323f9a984d&units=metric', function(data) {
      $("#current-temperature").text(data.main.temp);
      $("#current-location").text(data.name);
    });
  };

  function updateTemperature() {
    $('#temperature').text(thermostat.getCurrentTemperature());
      if (thermostat.getCurrentEnergyUsage() === "low-usage"){
        $("body").css("background-image","url(images/low_usage.jpg)");
      } else if (thermostat.getCurrentEnergyUsage() === "medium-usage"){
        $("body").css("background-image","url(images/medium-usage.jpg)");
      } else {
        $("body").css("background-image","url(images/high_usage.jpg)");
    };
  };

  updateTemperature();

  $("#temperature-up").click(function() {
    thermostat.up();
    updateTemperature();
  });
  $("#temperature-down").click(function() {
    thermostat.down();
    updateTemperature();
  });
  $("#temperature-reset").click(function() {
    thermostat.reset();
    updateTemperature();
  });
  $("#powersaving-toggle").click(function() {
    thermostat.togglePowerSavingMode();
    $("#powersaving-status").text(thermostat.getCurrentPowerSavingStatus());
    $("#powersaving-toggle").text("PSM " + thermostat.getCurrentPowerSavingStatus());
    $("#temperature").text(thermostat.getCurrentTemperature());
  });
  $("#city-list").change(function(){
    updatecityInformation();
  });

});
