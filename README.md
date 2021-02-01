# OpenWeatherMap widget for HABPanel (OpenHAB)

If you like my work, please consider a donation: [![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QARL4KXHHZSK8)

## Upgrading
If you are upgrading, please download and import the new **[Local Weather - OpenWeatherMap.widget.json](https://github.com/BasvanH/habpanel-widget-openweathermap/blob/master/Local%20Weather%20-%20OpenWeatherMap.widget.json)** and update your items file with the new items **[owm-widget.items](https://github.com/BasvanH/habpanel-widget-openweathermap/blob/master/owm-widget.items)**.

## Description
OpenWeatherMap widget for HABPanel (OpenHAB). It's build for use with the free API key, no paid subscription is nescacary.
Daily forecast based on next day @ 12:00

## Updates
2020-05-02 Fork by @karstenatgit:
Added more detailed 3-hourly and 6-hourly forecast views. You can enable them in the configuration.

## Download
- The widget json file, javascript file and the images folder: **[Local Weather - OpenWeatherMap.widget.json](https://github.com/BasvanH/habpanel-widget-openweathermap)**
- Weather Underground icons: **[weather-icons](https://erikflowers.github.io/weather-icons/)**

## Installation
* Get a [free API key](https://openweathermap.org/api) from OpenWeatherMap.
* Install the [OpenWeatherMap](https://www.openhab.org/addons/bindings/openweathermap/) binding via PaperUI.
* Configure the Thing: **OpenWeatherMap Account** set your API key and set preferred settings.
* Configure the Thing: **Local weather and forecast** set Hours to 96 and days to 1 (to get forecast with free API key)
* If you havent done already, change your locality of Openhab in Paperui / Configuration / System / Regional Settings and restart Openhab and clear your browsers cache. This way the Widget will follow te locallity with transforming the dates and units.
* Create a folder within '/conf/html/' folder, name it 'openweathermap'.
* Extract the 'weather-icons-master.zip' and place the 'weather-icons-master' folder in the '/conf/html/openweathermap/' folder.
* Place the 'images' folder in the '/conf/html/openweathermap/' folder.
* Place the 'owm.controller.js' file in the '/conf/html/openweathermap/' folder.
* Add the items to [an items file](https://www.openhab.org/docs/configuration/items.html). Change the id in the channel to your 'Local weather and forecast' thing id.
* Import the downloaded **[Local Weather - OpenWeatherMap.widget.json](https://github.com/BasvanH/habpanel-widget-openweathermap/blob/master/Local%20Weather%20-%20OpenWeatherMap.widget.json)** widget to your HABpanel.
* Add the widget to a dashboard, open the settings.
  * Customize the look and feel with the colors and sizes.
  * Save the widget en size it to your likings.
  * Enjoy en drop me a like here on the [Openhab community forum](https://community.openhab.org/t/openweathermap-widget-for-habpanel/65027).

The complete structure would look like this:

- /conf/html
  - /openweathermap
    - owm.controller.js
    - /weather-icons-master
    - /images
      - feel.png
      - humidity.png
      - wind.png

## Help
If you need any help, use this [topic](https://community.openhab.org/t/openweathermap-widget-for-habpanel/65027) on the Openhab community forum.

For issues and feature requests, please use the [Issues module](https://github.com/BasvanH/habpanel-widget-openweathermap/issues) on Github.
