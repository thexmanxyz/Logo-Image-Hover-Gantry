# Logo | Image | Hover - Particle for Gantry
This project contains a Gantry Particle and adds a very powerful image render and animation component to the Gantry templating framework. **Logo | Image | Hover** is an advanced version of the standard *Logo / Image Particle*. However, it is much more flexible and encapsulates the parameterization of many fancy CSS3 rollover, hover and transition effects within. Furthermore, it provides an easy, user friendly and GUI assisted configuration and integration. In the current revision the following CMSs are supported:
* Joomla
* Wordpress
* Grav

## Prerequisites
* CMS (Joomla, Wordpress, Grav)
* Gantry Templating Framework and Theme

## Download
Choose the correct download for your target platform. Joomla Plugin System supported for all Gantry themes globally and locally for Helium or Hydrogen. The latest Particle version is **v1.1.1**.
___
**Default Particle:**
[English](https://github.com/thexmanxyz/Logo-Image-Hover-Gantry/releases/download/v1.1.1/lih.particle.only.EN.v1.1.1.zip) / [German](https://github.com/thexmanxyz/Logo-Image-Hover-Gantry/releases/download/v1.1.1/lih.particle.only.DE.v1.1.1.zip)

**Legacy Particle - Gantry <5.3.2:**
[English](https://github.com/thexmanxyz/Logo-Image-Hover-Gantry/releases/download/v1.1.1/lih.particle.only.legacy.EN.v1.1.1.zip) / [German](https://github.com/thexmanxyz/Logo-Image-Hover-Gantry/releases/download/v1.1.1/lih.particle.only.legacy.DE.v1.1.1.zip)

**Joomla Plugin - All Templates (Global):**
[English](https://github.com/thexmanxyz/Logo-Image-Hover-Gantry/releases/download/v1.1.1/lih.j3.global.EN.v1.1.1.zip) / [German](https://github.com/thexmanxyz/Logo-Image-Hover-Gantry/releases/download/v1.1.1/lih.j3.global.DE.v1.1.1.zip)

**Joomla Plugin - Hydrogen:**
[English](https://github.com/thexmanxyz/Logo-Image-Hover-Gantry/releases/download/v1.1.1/lih.j3.hydrogen.EN.v1.1.1.zip) / [German](https://github.com/thexmanxyz/Logo-Image-Hover-Gantry/releases/download/v1.1.1/lih.j3.hydrogen.DE.v1.1.1.zip)

**Joomla Plugin - Helium:**
[English](https://github.com/thexmanxyz/Logo-Image-Hover-Gantry/releases/download/v1.1.1/lih.j3.helium.EN.v1.1.1.zip) / [German](https://github.com/thexmanxyz/Logo-Image-Hover-Gantry/releases/download/v1.1.1/lih.j3.helium.DE.v1.1.1.zip)
___

## Automatic Installation (Joomla only)
1. Download the Plugin of the *Logo | Image | Hover Particle* for **Hydrogen or Helium**.
2. Install it over the Joomla Plugin System.
3. Modify the `custom.scss` file located under `/[GANTRY_THEME]/custom/scss` and add the following line `@import "logo-image-hover";` at the end. Please check the list below to determine where the template folder for your CMS is located.

*If you install the plugin globally be aware that the resource location changes to `/media/gantry5/engines/nucleus`*

## Manual Installation
1. Download the **Default or Legacy Package** of the *Logo | Image | Hover Particle*. If you are using Gantry **<5.3.2** please use the **Legacy Package** for compatibility reasons.
2. Extract the files.
3. Copy the `.html.twig` and the `.yaml` file to your particle folder `/[GANTRY_THEME]/custom/particles`. Please check the list below to determine where the template folder for your CMS is located.
4. Copy the `.js` file to the folder `/[GANTRY_THEME]/custom/js`. Create it if it does not exist.
5. Copy the `.scss` file to the folder `/[GANTRY_THEME]/custom/scss`.
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
 
## Supported Parameters and Particle Options
* Container Attributes
* Custom CSS Classes
  * for Container and Image Text
* Output Rendering 
  * Prioritized, Image only, Text only or Both
* URL Configuration for the Image and Text
  * Enable, Target and Title
* Text Position and Custom Styling
* Image Configuration
  * two Images with Overlay supported for Fancy Transition, Timer and Rollover Effects
  * `alt` and `title` Attribute configurable for both Images
* many different CSS3 effects included (**over 150 variations**)
  * e.g. Zoom-In, Zoom-Out, Slide, Rotate, Blur, Unblur, Sepia, Gray, Pulse, ...
  * predefined Effect Slots for custom adaptions available 
* JS Priority and Placement (head or footer)
* JS Loading
  * Remote, Local and Default
* JS Execution
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
* more languages
* more CSS3 effects

## Known Issues
None

## Dependencies
[Gantry Framework](http://gantry.org/)

## Credits
Thanks to the Gantry team for providing a modern templating framework.

Thanks to Naoya of [NxWorld](https://www.nxworld.net/tips/css-image-hover-effects.html) and [Rich Bradshaw](http://css3.bradshawenterprises.com/cfimg/) for the inspiration in terms of the the used CSS3 effects.

## by [thex](https://github.com/thexmanxyz)
Copyright (c) 2018, free to use in personal and commercial software as per the [license](/LICENSE.md).
