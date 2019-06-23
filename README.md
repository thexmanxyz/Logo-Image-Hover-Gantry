# Logo | Image | Hover - Particle for Gantry
This project contains a Gantry Particle and adds a very powerful image render and animation component to the Gantry templating framework. **Logo | Image | Hover** is an advanced version of the standard *Logo / Image Particle*. However, it is much more flexible and encapsulates the parameterization of many fancy CSS3 rollover, hover and transition effects within. Furthermore, it provides an easy, user friendly and GUI assisted configuration and integration. In the current revision the following CMSs are supported:
* Joomla
* Wordpress
* Grav

## Prerequisites
* CMS (Joomla, Wordpress, Grav)
* Gantry Templating Framework and Theme

## Download
Choose the correct download for your target platform. The Joomla Plugin System is supported for all Gantry themes globally or locally for the templates Helium and Hydrogen. The latest Particle version is **v1.1.6**.
___
**Default Particle:**
[English](https://github.com/thexmanxyz/Logo-Image-Hover-Gantry/releases/download/v1.1.6/lih.particle.only.EN.v1.1.6.zip) / [German](https://github.com/thexmanxyz/Logo-Image-Hover-Gantry/releases/download/v1.1.6/lih.particle.only.DE.v1.1.6.zip)

**Legacy Particle - Gantry <5.3.2:**
[English](https://github.com/thexmanxyz/Logo-Image-Hover-Gantry/releases/download/v1.1.6/lih.particle.only.legacy.EN.v1.1.6.zip) / [German](https://github.com/thexmanxyz/Logo-Image-Hover-Gantry/releases/download/v1.1.6/lih.particle.only.legacy.DE.v1.1.6.zip)

**Joomla Plugin - All Templates (Global):**
[English](https://github.com/thexmanxyz/Logo-Image-Hover-Gantry/releases/download/v1.1.6/lih.j3.global.EN.v1.1.6.zip) / [German](https://github.com/thexmanxyz/Logo-Image-Hover-Gantry/releases/download/v1.1.6/lih.j3.global.DE.v1.1.6.zip)

**Joomla Plugin - Hydrogen:**
[English](https://github.com/thexmanxyz/Logo-Image-Hover-Gantry/releases/download/v1.1.6/lih.j3.hydrogen.EN.v1.1.6.zip) / [German](https://github.com/thexmanxyz/Logo-Image-Hover-Gantry/releases/download/v1.1.6/lih.j3.hydrogen.DE.v1.1.6.zip)

**Joomla Plugin - Helium:**
[English](https://github.com/thexmanxyz/Logo-Image-Hover-Gantry/releases/download/v1.1.6/lih.j3.helium.EN.v1.1.6.zip) / [German](https://github.com/thexmanxyz/Logo-Image-Hover-Gantry/releases/download/v1.1.6/lih.j3.helium.DE.v1.1.6.zip)
___

## Automatic Installation (Joomla only)
1. Download the Plugin of the *Logo | Image | Hover Particle* for **Hydrogen, Helium or Global** installation.
2. Install it over the Joomla Plugin System.
3. Modify the `custom.scss` file located under `/[GANTRY_THEME]/custom/scss` and add the following line `@import "logo-image-hover";` at the end. Please check the list below to determine where the template folder for your CMS is located.

*If you install the plugin globally be aware that the resource location changes to `/media/gantry5/engines/nucleus`*

## Manual Installation
1. Download the **Default or Legacy Package** of the *Logo | Image | Hover Particle*. If you are using Gantry **<5.3.2** please use the **Legacy Package** for compatibility reasons.
2. Extract the files.
3. Copy the `.html.twig` and the `.yaml` file to your particle folder `/[GANTRY_THEME]/custom/particles`. Please check the [listing](https://github.com/thexmanxyz/Logo-Image-Hover-Gantry#cms-template-folder) below to determine where the template folder for your CMS is located.
4. Copy the `.js` file to the folder `/[GANTRY_THEME]/custom/js`. Create the folder if it does not exist.
5. Copy the `.scss` file to the folder `/[GANTRY_THEME]/custom/scss`. Create the folder if it does not exist.
6. Modify the `custom.scss` file located under `/[GANTRY_THEME]/custom/scss` and add the following line `@import "logo-image-hover";` at the end.

## CMS Template Folder
Please be aware that the template folder path varies in dependence of the used CMS. Here is a list of the folders for the different platforms:

### Wordpress
`/wp-content/themes/[GANTRY_THEME]`

### Joomla
`/templates/[GANTRY_THEME]`

### Grav
`/user/data/gantry5/themes/[GANTRY_THEME]`
   
## Configuration
1. Go to your Gantry templating backend (e.g. Extensions/Templates).
2. Switch to **Layout** and add the new appearing Particle called **Logo | Image | Hover** either globally to your site (**base outline**), to a specific template or page by dragging it to the designated section.
3. Configure the appearance according to your favor.
4. [Optional] The download package contains the JS file of the project. You can embed it over the backend configuration if you do not want to use the default CDN. If you chose automatic installation the file is already there.
 
## Supported Parameters and Particle Options
* Container attributes
* Custom CSS classes
  * For container and image text
* Output rendering 
  * Prioritized, image only, text only or both
* URL configuration for the image and text
  * Enable, target and title
* Text position and custom styling
* Image configuration
  * Two Images with overlay supported for fancy transition, timer and rollover effects
  * `alt` and `title` attribute configurable for both Images
* many different CSS3 effects included (**over 150 variations**)
  * E.g. Zoom-In, Zoom-Out, Slide, Rotate, Blur, Unblur, Sepia, Gray, Pulse, ...
  * Predefined effect slots for custom adaptions available 
* Lazy load of images supported (requires 3rd party library)
* JS priority and placement (head or footer)
* JS loading
  * Remote, Local and Default
* JS execution
  * Asynchronous
  * Deferred

## Showroom
Insight of the *Logo | Image | Hover - Gantry Particle* configuration:

**Backend (1)** - *[General](/screenshots/backend_general.png)*

![1](/screenshots/backend_general.png)

**Backend (2)** - *[Text](/screenshots/backend_text.png)*

![2](/screenshots/backend_text.png)

**Backend (3)** - *[Image](/screenshots/backend_image.png)*

![3](/screenshots/backend_image.png)

**Backend (4)** - *[Effect](/screenshots/backend_effect.png)*

![4](/screenshots/backend_effect.png)

**Backend (5)** - *[JS](/screenshots/backend_js.png)*

![5](/screenshots/backend_js.png)

Example for a basic image effect:

**Frontend (1)** - *[Fade](/screenshots/frontend_fade.gif)*

![6](/screenshots/frontend_fade.gif)

## Future Tasks
- [ ] add more CSS3 effects
- [ ] add more languages

## Known Issues
None

## Dependencies
[Gantry Framework](http://gantry.org/)

## Credits
Thanks to the [Gantry](https://github.com/gantry) team for providing a modern templating framework.

Thanks to Naoya of [NxWorld](https://www.nxworld.net/tips/css-image-hover-effects.html) and [Rich Bradshaw](http://css3.bradshawenterprises.com/cfimg/) for the inspiration in terms of the the used CSS3 effects.

## by [thex](https://github.com/thexmanxyz) | [gantryprojects](https://gantryprojects.com)
Copyright (c) 2018, free to use in personal and commercial software as per the [license](/LICENSE.md).
