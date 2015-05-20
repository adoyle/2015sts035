# Projector drivers for STS.035 rings

## Overview
There are 3 projectors, one each for the top, left, and right sides of the ring. Each projector is meant to show an image so that together the ring has a particular year's design projected on it.

The projectors thus have to show the correct image at the right time. They load the images via a simple web page with javascript to control the timing.

The web page and images are loaded onto the /var/www directory in the Pi, which is running an Apache web server. A chromium browser is launched when the Pi account desktop loads. That browser is in kiosk mode, full screen.

## Pi Setup
The following things are loaded onto the Pi

* apache2
* emacs
* python-requests
* chromium
* 