@echo off
REM #######################################################
REM #                                                     #
REM #   Logo | Image | Hover - Particle for Gantry        #
REM #                                                     #
REM #   Purpose: This project adds a powerful image /     #
REM #            logo presentation particle to the        #
REM #            Gantry templating framework. The         #
REM #            component supports rollover and many     #
REM #            CSS3 hover and transition effects.       #
REM #                                                     #
REM #   Author: Andreas Kar (thex) <andreas.kar@gmx.at>   #
REM #                                                     #
REM #######################################################

REM --- Script Variables ---
set remove_folders=1
set log_files=0
set title_hr=-----------------------------------

REM --- Packaging Variables ---
set langs_upper=EN, DE
set default_lang=EN

set prj_id=lih
set prj_rev=v1.0.7
set prj_name=logo-image-hover
set prj_fullname=Logo / Image / Hover - Particle

set pkg_part_only=particle.only
set pkg_def_enable=1
set pkg_leg_enable=1
set pkg_helium_enable=1
set pkg_hydro_enable=1

REM --- File Variables ---
set comp_files=
set part_def_files=LICENSE, README.md
set plugin_def_files=LICENSE.pdf
set file_ext=yaml, html.twig
set lang_ext=yaml

"base-build.bat"