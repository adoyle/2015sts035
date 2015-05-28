# Projector drivers for STS.035 rings


## DRAFT - this is a work in progress...

## Overview
There are 3 projectors, one each for the top, left, and right sides of the ring. Each projector is meant to show an image so that together the ring has a particular year's design projected on it.

The projectors thus have to show the correct image at the right time. They load the images via a simple web page with javascript to control the timing.

The web page and images are loaded onto the /var/www directory in the Pi, which is running an Apache web server. A chromium browser is launched when the Pi account desktop loads. That browser is in kiosk mode, full screen.

## Pi Setup
The following things are loaded onto the Pi

* apache2
* emacs
* python-requests
* python-pip (?)
* python-setuptools (?)
* chromium
* https://github.com/wyrmiyu/ddns-tools/tree/master/dnsmadeeasy

### Files modified

These files are in the `extras` directory in the repository and need to be moved into place.

    /etc/network/interfaces
    /etc/wpa_supplicant/wpa_supplicant.conf
    /home/pi/.config/lxsession/LXDE-pi/autostart
    

    



