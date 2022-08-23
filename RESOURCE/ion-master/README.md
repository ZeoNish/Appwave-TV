# Ion 

A lightweight CSS framework that brings MacOS styled elements to Electron.

### About

Ion was developed with the aim of bringing native MacOS elements and components, such as buttons, sidebars, search inputs, tabs, tables, icons, and toolbars, to HTML and CSS. 

Ion is designed to be used specifically within an [Electron](https://github.com/electron/electron) application.

### Getting Started

```
git clone https://github.com/lukakerr/ion.git
```

### Folder Structure

```
ion/
├── README.md
├── index.html
├── dist/
│   ├── ion.min.css
│   └── fonts/
│   └── img/
├── src/
│   ├── ion.css
│   └── fonts/
│   └── img/
```

### Demo

<div style="text-align:center">
  <img src="https://i.imgur.com/xfCOLmH.gif" alt="ion">
</div>

# Documentation

### Title Bar

A title bar can either be `normal`, `tall`, `inset`, or all three combined. The title bar is used to drag the application.

Inside the `bar` div, there are 3 other main elements:

- The `buttons` div which is the traffic light buttons in every application
- The `title` div, which is the title of your application shown in the title bar
- The `search` element, which is the search input

```html
<div class="bar tall inset">
  <div class="buttons">
    <button></button>
    <button></button>
    <button></button>
  </div>
  <div class="title">ion</div>
  <input class="search" placeholder="Search">
</div>
```

### Buttons

Buttons are commonly used in the `bar tall` div. Each button is located within a div with the class `bar-buttons`.

The `bar-buttons` div, lets you add as many buttons as you want to the title bar. These buttons must have the `btn` class, as well as another class to show an icon. Note: the `left-open-big` and `right-open-big` icons go next to each other, as back and forward buttons.

The `bar-buttons` div also has `active` and `disabled` classes which make a button active or disabled.

To have a space between buttons, simply add the `space` class to a button.

To have a dropdown icon, add the `dropdown` class to a button.

```html
<div class="bar-buttons">
  <button class="btn left-open-big"></button>
  <button class="btn right-open-big"></button>
  <button class="btn cog"></button>
  <button class="btn folder disabled"></button>
  <button class="btn info space"></button>
  <button class="btn reply active"></button>
  <button class="btn download"></button>
  <button class="btn login"></button>
  <button class="btn home"></button>
</div>
```

You can also group buttons together, by putting them in a `btn-group` class, which goes inside the `bar-buttons` class. 

```html
<div class="btn-group">
  <button class="btn download"></button>
  <button class="btn login"></button>
  <button class="btn cog"></button>
  <button class="btn folder disabled"></button>
</div>
```

### Tabs

To get a tab interface, place the following `<div>` inside the `bar` class. To add more tabs, simply add another `<div>` with the class `tab` inside the `tabs` class.

```html
<div class="tabs">
  <div class="tab active">
    <span class="close"></span>
    Documents
  </div>
  <div class="tab">
    <span class="close"></span>
    Ion
  </div>
  <div class="tab">
    <span class="close"></span>
    School
  </div>
  <div class="tab">
    <span class="close"></span>
    Work
  </div>
  <div class="add">
  </div>
</div>
```

### Sidebar

The `sidebar` div gets shown on the left side of the window. This is used to display a list of elements, similar to the Finder

A `heading` div will put a heading above a bunch of items

Each `item` div inside the `items` div, must have the class `item`, as well as another class that determines what icon is shown next to it. Below are all the possible items you can use (this includes coloured tags)

```html
<div class="sidebar">
  <div class="heading">
    Favourites
  </div>
  <div class="items">
    <div class="item allmyfiles">
      All My Files
    </div>
    <div class="item icloud">
      iCloud Drive
    </div>
    <div class="item airdrop">
      AirDrop
    </div>
    <div class="item applications">
      Applications
    </div>
    <div class="item desktop">
      Desktop
    </div>
    <div class="item documents">
      Documents
    </div>
    <div class="item downloads">
      Downloads
    </div>
    <div class="item movies">
      Movies
    </div>
    <div class="item music">
      Music
    </div>
    <div class="item pictures">
      Pictures
    </div>
    <div class="item home">
      Luka
    </div>
    <div class="item laptop">
      Luka
    </div>
  </div>
  
  <div class="heading">
    Files
  </div>
  <div class="items">
    <div class="item folder">
      Folder
    </div>
    <div class="item file">
      File
    </div>
  </div>

  <div class="heading">
    Tags
  </div>
  <div class="items">
    <div class="item red">
      Red
    </div>
    <div class="item orange">
      Orange
    </div>
    <div class="item yellow">
      Yellow
    </div>
    <div class="item green">
      Green
    </div>
    <div class="item blue">
      Blue
    </div>
    <div class="item purple">
      Purple
    </div>
    <div class="item gray">
      Gray
    </div>
  </div>
</div>
```

### Table

A table can be displayed by using the HTML `table` element with the class `table`. If you want each row to have alternating background colours, add the `alt` class as shown below.

You can also have `disabled` rows, and `active` rows as shown below

```html
<table class="table alt">
  <tr>
    <th>Name</th>
    <th>Date Modified</th>
    <th>Size</th>
    <th>Kind</th>
  </tr>
  <tr>
    <td>ion.css</td>
    <td>Today 3:33 pm</td>
    <td>100 KB</td>
    <td>CSS</td>
  </tr>
  <tr class="disabled">
    <td>Controllers</td>
    <td>8 April 2017, 8:45 am</td>
    <td>--</td>
    <td>Folder</td>
  </tr>
  <tr class="active">
    <td>Holiday.png</td>
    <td>23 June 2017, 6:50 pm</td>
    <td>2 GB</td>
    <td>PNG Image</td>
  </tr>
  <tr>
    <td>user.rb</td>
    <td>Today 1:44 pm</td>
    <td>5.1 MB</td>
    <td>Ruby Source</td>
  </tr>
</table>
```

### Path

To get a breadcrumb style path at the bottom of the window, use a `<div>` with the class of `path`. This is shown below

```html
<div class="path">
  <span class="item laptop">Macintosh HD</span>
  <span class="item folder">Users</span>
  <span class="item home">Luka</span>
  <span class="item documents">Documents</span>
</div>
```

### Full Page Example

```html
<!DOCTYPE html>
<html>
<head>

  <title>Ion</title>
  <link href="dist/ion.min.css" rel="stylesheet">

</head>
<body>

  <div class="bar tall">
    <div class="buttons">
      <button></button>
      <button></button>
      <button></button>
    </div>
    <div class="title">Ion</div>

    <div class="bar-buttons">
      <button class="btn left-open-big"></button>
      <button class="btn right-open-big"></button>

      <div class="btn-group">
        <button class="btn layout"></button>
        <button class="btn menu active"></button>
        <button class="btn window"></button>
        <button class="btn list"></button>
      </div>

      <button class="btn list-add space dropdown"></button>
      <button class="btn dot-3 dropdown"></button>
      <button class="btn cog dropdown"></button>
      <button class="btn download space"></button>
      <button class="btn tag"></button>
    </div>

    <div class="tabs">
      <div class="tab active">
        <span class="close"></span>
        Documents
      </div>
      <div class="tab">
        <span class="close"></span>
        Ion
      </div>
      <div class="tab">
        <span class="close"></span>
        School
      </div>
      <div class="tab">
        <span class="close"></span>
        Work
      </div>
      <div class="add">
      </div>
    </div>

    <input class="search" placeholder="Search">
  </div>

  <div class="sidebar">
    <div class="heading">
      Favourites
    </div>
    <div class="items">
      <div class="item allmyfiles">
        All My Files
      </div>
      <div class="item icloud">
        iCloud Drive
      </div>
      <div class="item airdrop">
        AirDrop
      </div>
      <div class="item applications">
        Applications
      </div>
      <div class="item desktop">
        Desktop
      </div>
      <div class="item documents active">
        Documents
      </div>
      <div class="item downloads">
        Downloads
      </div>
      <div class="item movies">
        Movies
      </div>
      <div class="item music">
        Music
      </div>
      <div class="item pictures">
        Pictures
      </div>
      <div class="item home">
        Luka
      </div>
      <div class="item laptop">
        Luka
      </div>
    </div>
    
    <div class="heading">
      Files
    </div>
    <div class="items">
      <div class="item folder">
        Folder
      </div>
      <div class="item file">
        File
      </div>
    </div>

    <div class="heading">
      Tags
    </div>
    <div class="items">
      <div class="item red">
        Red
      </div>
      <div class="item orange">
        Orange
      </div>
      <div class="item yellow">
        Yellow
      </div>
      <div class="item green">
        Green
      </div>
      <div class="item blue">
        Blue
      </div>
      <div class="item purple">
        Purple
      </div>
      <div class="item gray">
        Gray
      </div>
    </div>
  </div>

  <table class="table alt">
    <tr>
      <th>Name</th>
      <th>Date Modified</th>
      <th>Size</th>
      <th>Kind</th>
    </tr>
    <tr>
      <td>ion.min.css</td>
      <td>Today 3:33 pm</td>
      <td>100 KB</td>
      <td>CSS</td>
    </tr>
    <tr class="disabled">
      <td>Controllers</td>
      <td>8 April 2017, 8:45 am</td>
      <td>--</td>
      <td>Folder</td>
    </tr>
    <tr class="active">
      <td>Holiday.png</td>
      <td>23 June 2017, 6:50 pm</td>
      <td>2 GB</td>
      <td>PNG Image</td>
    </tr>
    <tr>
      <td>user.rb</td>
      <td>Today 1:44 pm</td>
      <td>5.1 MB</td>
      <td>Ruby Source</td>
    </tr>
  </table>

  <div class="path">
    <span class="item laptop">Macintosh HD</span>
    <span class="item folder">Users</span>
    <span class="item home">Luka</span>
    <span class="item documents">Documents</span>
  </div>

</body>
</html>
```
