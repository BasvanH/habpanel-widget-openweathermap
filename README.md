# habpanel-widget-openweathermap
OPENHab widget for weather statususing the OpenWeatherMap binding.

## Description
OpenWeatherMap widget for HABpanel (Openhab). It's build for use with the free API key, no paid subscription is nescacary.

## Download
**The widget and images**: [openweathermap.widget.json](https://github.com/BasvanH/habpanel-widget-openweathermap)

**Weather Underground icons**: [weather-icons](https://erikflowers.github.io/weather-icons/)

## Installation
- Get a [free API key](https://openweathermap.org/api) from OpenWeatherMap.
- Install the [OpenWeatherMap](https://www.openhab.org/addons/bindings/openweathermap/) binding via PaperUI.
- Configure the Thing: 'OpenWeatherMap Account' set your API key and set preferred settings.
- Configure the Thing: 'Local weather and forecast' set Hours to 96 and days to 1 (to get forecast with free API key)
- If you havent done already, change your locality of Openhab in Paperui / Configuration / System / Regional Settings and restart Openhab and clear your browsers cache. This way the Widget will follow te locallity with transforming the dates and units.
- Import the downloaded 'openweathermap.widget.json' widget to your HABpanel.
- Create  a folder within '/conf/html/' folder, lets assume you named it 'openweathermap'.
- Place the 'weather-icons-master' folder in the '/conf/html/openweathermap/' folder.
- Place the 'images' folder in the '/conf/html/openweathermap/' folder.

- Set the 'ServerPath' variable in the widget to '/static/weather-underground-icons-master/dist' (default).
- Place the three .png images in your '/conf/html/weather-underground-icons/dist/images' folder.

The complete structure would look like this:

- /conf/html
  - /weather-underground-icons
    - /css
    - /js
    - /dist
      - wu-icons-style.css
      - wu-icons-style.min.css
      - /icons <= this is where the different icon theme’s are stored
      - /images
        - feel.png
        - humidity.png
        - wind.png
        
Your ServerPath variable in the widget would look like this:

<div ng-init="ServerPath='/static/weather-underground-icons-master/dist'; IconSet='white'">

You can set the 'IconSet' to one of the following options:
- black
- solid-black
- solid-white
- white

The location of your ‘/conf/html’ folder depends on your Openhab installation.

## Help
If you need any help, use this [topic](https://community.openhab.org/t/weather-underground-widget-with-forecast/40260) on the Openhab community forum.

For issues and feature requests, please use the [Issues module](https://github.com/BasvanH/habpanel-widget-weatherunderground/issues) on Github.
