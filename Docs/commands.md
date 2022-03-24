# The Command Line

## Usage and Commands

The searchbar also acts as your command line. The input field has two modes, the search mode and the terminal mode. It is possible to switch between the two modes with the command `tm` or `terminal-mode`.

By default, the decorator in search mode will be `>` and the placeholder text will read `Enter command or search term, "au:help" for help.` In terminal mode the decorator will be `$` and the placeholder text will read `Enter command...`

While in search mode all special commands must be preceeded immediately by the prefix `au:`. For example, to switch from search mode to terminal mode the below shown command must be entered.

    au:tm

While in terminal mode all commands must be input without any prefixes. For example, to switch back to search mode from terminal mode the below shown command must be entered.

    tm

In this document it will be assumed that all commands will be inputted in terminal mode, as such no prefixes will be shown on the examples. 

Another point of note is that all commands have long-form and short-form alternatives. For example, to switch between input modes, instead of;

    tm

The below show command can be used as well:

    terminal-mode

While both forms of the commands will be shown in the document, the usage/examples will use the short-form versions of the commands. For more complex commands, examples will be shown as well.

----
----

# Index

* [Utility Commands](#-utility-commands)

* [Widget & Top Bar](#widgets--top-bar)

* [Theming](#theming)

* [Link List Commands](#link-list-commands)

* [Settings](#settings)

----
----

# Utility Commands

### `terminal-mode || tm`

Switches between search and terminal modes.

Usage:

    tm

### `message-clear || mc`

Clears error and help messages.

Usage:

    mc

### `help || h`

Displays a help message that links to this document.

Usage:

    h

### `search-engine || se`

Changes the search engine of the searchbar to the inputted service. Currently the supported engines are `duckduckgo`, `google` and `wikipedia`.

Usage:

    se <search engine>

### One Time Search

One time search is a special function, it can only be used in search mode and allows the user to use a specific search engine for one time without changing their settings. Unlike other commands, it doesn't need to be prefixed with `au:` to be used in search mode. For the engine argument, `w` can be used for Wikipedia, `g` for Google and `d` for DuckDuckGo.

Usage:

    !<engine> <search query>

### Go-to link

Go-to link is another special function, it can only be used in search mode and allows the user to go to a specific link with a command instead of clicking on it. Like one time search, it doesn't need to be prefixed with `au:` to be used in search mode.

Usage:

    !l <link index>

# Widgets & Top Bar

Widgets are the text display on top of your image. They can be turned on or off, and some allow certain parts of themselves to be turned on or off individually and offer certain settings. The area where your widgets can be seen is called the top bar and it allows the arrangement of widgets within it.

## Top Bar Commands

The top bar automatically distributes the visible widgets on the area it has available, it also displays dividers as needed.

### `topbar-arrange || ta`

Arranges the widget order in the top bar. For the widget arguments, the accepted values are `clock`, `quote` and `weather`.

Usage:

    ta clock weather widget

## Calender Commands

### `clock-mode || cm`

Toggles between the 24-hour and 12-hour modes of the time display.

Usage:

    cm

### `date-form || df`

Toggles between long-form and short-form modes for the calendar day display.

Usage:

    df

### `clock-display || cd`

Toggles date and clock visibilities in the calendar. For the component argument, use `c` for the clock, `d` for the date and `a` for both. For the visibility argument, use `true` for visible and `false` for hidden.

Usage:

    cd <component> <visibility>

Example:

    #This command will hide the clock while keeping the date at the current setting.
    cd c false

    #This command will show both components.
    cd a true

## Quote Commands

The quote widget is a widget that displays a static string in your top bar. 

### `quote-set || qs`

Sets the quote text to the inputted string.

Usage:

    qs <quote text>

### `quote-display || qd`

Toggles the visibility of the quote widget.

Usage:

    qd

## Weather Commands

The weather widget displays the weather status and the temperature in a given city. It's powered by [OpenWeatherMap](https://openweathermap.org/). To set it up, you need to sign up to OpenWeatherMap and get an API key. The free keys are good enough for this purpose as aura only makes API calls when the page is first loaded or when certain weather widget settings are changed.

### `weather-setup || ws`

Sets up the weather widget with the given city and API key. 

Usage:

    ws <city name> <API key>

### `weather-display || wd`

Toggles temperature and status visibilities in the widget. For the component argument, use `t` for temperature, `s` for the status and `a` for both. For the visibility argument, use `true` for visible and `false` for hidden.

Usage:

    wd <component> <visibility>

Example:

    #This command will hide the temperature while keeping the status.
    wd t false

    #This command will show both components.
    wd a true

### `weather-unit || wu`

Toggles between Celcius(°C) and Fahrenheit(°F) temperature.

Usage:

    wu

# Theming

## Color Commands

These commands deal with changing various colors around the startpage. They all accept CSS colors as their parameters. For example, to change a color to black, `#000`, `rgb(0,0,0)` and `black` are all valid arguments.

### `color-background || cb`

Changes the dark mode or light mode background color to a given CSS color, depending on the mode you're currently on.

Usage:

    cb <CSS color>

### `color-foreground || cf`

Changes the dark mode or light foreground / text color to a given CSS color, depending on the mode you're currently on.

Usage:

    cf <CSS color>

### `color-accent || ca`

Changes the dark or light mode accent color used in the image border, searchbar border and searchbar decoration to a given CSS color, depending on the mode you're currently on.

Usage:

    ca <CSS color>

### `darkmode || dm`

Changes the theming to dark mode.

Usage:

    dm

### `lightmode || lm`

Changes the theming to light mode.

Usage:

    lm

### `lightmode-auto || lma`

Sets auto-lightmode on or off within the provided hours. For the state argument, the values `true` and `false` are accepted. Only providing the state argument will turn the auto-lightmode on with the current hour values (default are between 6 AM and 6 PM). If provided, the hour values must be in 24 hour format.

Usage:

    lma <state> <lightmode begin hour> <lightmode end hour>

Example:

    #This command will turn the auto-lightmode on between 6 AM and 6 PM.
    lma true 0600 1800

    #This command will turn the auto-lightmode off.
    lma false

## Image Commands

These commands deal with the image on display at the center of the screen. For custom images, the recommended ratio is 4:1 to avoid any cutoffs.

### `image-set || is`

Changes the display image of dark or light mode to an image from the given URL, depending on the mode you're currently on.

Usage:

    is <image URL>

### `image-clear || ic`

Sets the display image for both dark and light modes back to the default image.

Usage:

    ic

## Other Theming Commands

This section contains commands that deal with various theming options that do not fit

### `search-placeholder || sp`

Changes the placeholder text of the searchbar to the given string in search mode.

Usage:

    sp <placeholder text>

### `theme-export || ext`

Exports only the theme settings such as color and image. Exported themes can be imported with the `settings-import || ims` command without affecting the other settings.

Usage:

    ext

# Link List Commands

These commands deal with the links on display under the display image. For all commands that require a link index parameter, the input must be an integer. The index is counted in a top-left to bottom-right fashion starting from 1.

For commands that require a link name, this name can be composed of multiple words seperated by spaces.

### `link-add || la`

Adds a link to the end of the link list.

Usage:

    la <link name> <link URL>

Example:

    #This command will add a link to myawesomewebsite.com at the end of the link list with the name "My Awesome Website".
    la My Awesome Website https://myawesomewebsite.com

### `link-remove || lr`

Removes a link with the given index in the list. A link index of `-1` can be used to remove all links.

Usage:

    lr <link index>

### `link-set || ls`

Changes the link at the given index' content at the given index. Accepted link components are `a` for both name and URL, `n` for just the name and `u` for just the URL. If both components are to be changed, the link URL must be supplied after the name.

Usage:

    ls <link index> <link component> <link name, link URL or both>

Example:

    #This command will set the first link on the link list's name to "My Awesome Website" while keeping the current URL.
    ls 1 n My Awesome Website

    #This command will set the first link on the link list's name and URL to "My Awesome Website" and "https://myawesomewebsite.com" respectively.
    ls 1 a My Awesome Website https://myawesomewebsite.com

### `link-swap || lw`

Swaps the positions of the links at given indexes.

Usage:

    lw <link index> <link index>

### `link-insert || li`

Takes a link at the given index and inserts it at another index.

Usage:

    li <link index> <index insert>

Example:

    #This command will take the 5th link on the link list, insert it as the 2nd list and push the previously 2nd link and all other links that follow 1 number up.
    li 5 2 

### `links-display-index || ldi`

Toggles between showing and hiding the link index at the start of each link in the link list.

Usage:

    ldi

### `links-export || exl`

Brings up a pop-up window that displays a string which can be stored by the user in order to save their link list.

Usage:

    exl

### `links-import || iml`

Brings up a pop-up window that can be used to import previously exported link lists.

Usage:

    iml

# Settings

### `settings-save || ss`

Saves all changes made using the above shown commands. No changes are final until saved.

Usage:

    ss

### `settings-load || sl`

Loads the last saved settings and links, reverts all unsaved changes.

Usage:

    sl

### `settings-reset || sr`

Resets all settings and links to defaults. This command does NOT need saving and cannot be reverted unless the user has back-ups of their settings and links exported.

Usage:

    sr

### `settings-export || exs`

Brings up a pop-up window that displays a string which can be stored by the user in order to save their settings, not including their link list.

Usage:

    exs

### `settings-import || ims`

Brings up a pop-up window that can be used to import previously exported settings, not including link lists.

Usage:

    ims