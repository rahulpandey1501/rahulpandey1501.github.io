import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "logo": {
        "width": 20
    },
    "heading-font": {
        "fontFamily": "'Catamaran', 'Helvetica', 'Arial', 'sans-serif'",
        "fontWeight": "200",
        "letterSpacing": 1
    },
    "body-font": {
        "fontFamily": "'Muli', 'Helvetica', 'Arial', 'sans-serif'"
    },
    "alt-font": {
        "fontFamily": "'Lato', 'Helvetica', 'Arial', 'sans-serif'",
        "textTransform": "uppercase",
        "letterSpacing": 2
    },
    "html": {
        "height": "100%",
        "width": "100%"
    },
    "body": {
        "height": "100%",
        "width": "100%",
        "fontFamily": "'Muli', 'Helvetica', 'Arial', 'sans-serif'",
        "webkitTapHighlightColor": "#222222"
    },
    "a": {
        "WebkitTransition": "all 0.35s",
        "MozTransition": "all 0.35s",
        "transition": "all 0.35s",
        "color": "#fdcc52"
    },
    "a:hover": {
        "color": "#fcbd20"
    },
    "a:focus": {
        "color": "#fcbd20"
    },
    "hr": {
        "maxWidth": 100,
        "marginTop": 25,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "borderWidth": 1,
        "borderColor": "rgba(34, 34, 34, 0.1)"
    },
    "hrlight": {
        "borderColor": "white"
    },
    "h1": {
        "fontFamily": "'Catamaran', 'Helvetica', 'Arial', 'sans-serif'",
        "fontWeight": "200",
        "letterSpacing": 1
    },
    "h2": {
        "fontFamily": "'Catamaran', 'Helvetica', 'Arial', 'sans-serif'",
        "fontWeight": "200",
        "letterSpacing": 1
    },
    "h3": {
        "fontFamily": "'Catamaran', 'Helvetica', 'Arial', 'sans-serif'",
        "fontWeight": "200",
        "letterSpacing": 1
    },
    "h4": {
        "fontFamily": "'Catamaran', 'Helvetica', 'Arial', 'sans-serif'",
        "fontWeight": "200",
        "letterSpacing": 1
    },
    "h5": {
        "fontFamily": "'Catamaran', 'Helvetica', 'Arial', 'sans-serif'",
        "fontWeight": "200",
        "letterSpacing": 1
    },
    "h6": {
        "fontFamily": "'Catamaran', 'Helvetica', 'Arial', 'sans-serif'",
        "fontWeight": "200",
        "letterSpacing": 1
    },
    "p": {
        "fontSize": 18,
        "lineHeight": 1.5,
        "marginBottom": 20
    },
    "navbar-default": {
        "backgroundColor": "white",
        "borderColor": "rgba(34, 34, 34, 0.05)",
        "WebkitTransition": "all 0.35s",
        "MozTransition": "all 0.35s",
        "transition": "all 0.35s",
        "fontFamily": "'Catamaran', 'Helvetica', 'Arial', 'sans-serif'",
        "fontWeight": "200",
        "letterSpacing": 1
    },
    "navbar-default navbar-header navbar-brand": {
        "fontFamily": "'Catamaran', 'Helvetica', 'Arial', 'sans-serif'",
        "fontWeight": "200",
        "letterSpacing": 1,
        "color": "#fdcc52"
    },
    "navbar-default navbar-header navbar-brand:hover": {
        "color": "#fcbd20"
    },
    "navbar-default navbar-header navbar-brand:focus": {
        "color": "#fcbd20"
    },
    "navbar-default navbar-header navbar-toggle": {
        "fontSize": 12,
        "color": "#222222",
        "paddingTop": 8,
        "paddingRight": 10,
        "paddingBottom": 8,
        "paddingLeft": 10
    },
    "navbar-default nav > li > a": {
        "fontFamily": "'Lato', 'Helvetica', 'Arial', 'sans-serif'",
        "textTransform": "uppercase",
        "letterSpacing": 2,
        "fontSize": 11,
        "color": "#222222"
    },
    "navbar-default nav > li > a:focus": {
        "color": "#222222"
    },
    "navbar-default nav > li > a:hover": {
        "color": "#fdcc52"
    },
    "navbar-default nav > li > a:focus:hover": {
        "color": "#fdcc52"
    },
    "navbar-default nav > liactive > a": {
        "color": "#fdcc52 !important",
        "backgroundColor": "transparent"
    },
    "navbar-default nav > liactive > a:focus": {
        "color": "#fdcc52 !important",
        "backgroundColor": "transparent"
    },
    "navbar-default nav > liactive > a:hover": {
        "backgroundColor": "transparent"
    },
    "navbar-default nav > liactive > a:focus:hover": {
        "backgroundColor": "transparent"
    },
    "header": {
        "position": "relative",
        "width": "100%",
        "minHeight": "auto",
        "overflowY": "hidden",
        "background": "url(\"../img/bg-pattern.png\"), linear-gradient(to left, #7b4397, #dc2430)",
        "color": "white"
    },
    "header header-content": {
        "textAlign": "center",
        "paddingTop": 150,
        "paddingRight": 0,
        "paddingBottom": 50,
        "paddingLeft": 0,
        "position": "relative"
    },
    "header header-content header-content-inner": {
        "position": "relative",
        "maxWidth": 500,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "header header-content header-content-inner h1": {
        "marginTop": 0,
        "marginBottom": 30,
        "fontSize": 30
    },
    "header header-content header-content-inner list-badges": {
        "marginBottom": 25
    },
    "header header-content header-content-inner list-badges img": {
        "height": 50,
        "marginBottom": 25
    },
    "header device-container": {
        "maxWidth": 300,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 100,
        "marginLeft": "auto"
    },
    "header device-container screen img": {
        "borderRadius": 3
    },
    "section": {
        "paddingTop": 100,
        "paddingRight": 0,
        "paddingBottom": 100,
        "paddingLeft": 0
    },
    "section h2": {
        "fontSize": 50
    },
    "sectiondownload": {
        "paddingTop": 150,
        "paddingRight": 0,
        "paddingBottom": 150,
        "paddingLeft": 0,
        "position": "relative"
    },
    "sectiondownload h2": {
        "marginTop": 0,
        "fontSize": 50
    },
    "sectiondownload badges badge-link": {
        "display": "block",
        "marginBottom": 25
    },
    "sectiondownload badges badge-link:last-child": {
        "marginBottom": 0
    },
    "sectiondownload badges badge-link img": {
        "height": 60
    },
    "sectionfeatures section-heading": {
        "marginBottom": 100
    },
    "sectionfeatures section-heading h2": {
        "marginTop": 0
    },
    "sectionfeatures section-heading p": {
        "marginBottom": 0
    },
    "sectionfeatures device-container": {
        "maxWidth": 300,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 100,
        "marginLeft": "auto"
    },
    "sectionfeatures feature-item": {
        "maxWidth": 300,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 100,
        "marginLeft": "auto",
        "textAlign": "center"
    },
    "sectionfeatures feature-item h3": {
        "fontSize": 30
    },
    "sectionfeatures feature-item i": {
        "fontSize": 80,
        "background": "linear-gradient(to left, #7b4397, #dc2430)",
        "WebkitBackgroundClip": "text",
        "WebkitTextFillColor": "transparent"
    },
    "sectioncta": {
        "position": "relative",
        "WebkitBackgroundSize": "cover",
        "MozBackgroundSize": "cover",
        "backgroundSize": "cover",
        "OBackgroundSize": "cover",
        "backgroundPosition": "center",
        "backgroundImage": "url('../img/bg-cta.jpg')",
        "paddingTop": 250,
        "paddingRight": 0,
        "paddingBottom": 250,
        "paddingLeft": 0
    },
    "sectioncta cta-content": {
        "position": "relative",
        "zIndex": 1
    },
    "sectioncta cta-content h2": {
        "marginTop": 0,
        "marginBottom": 25,
        "color": "white",
        "maxWidth": 450,
        "fontSize": 50
    },
    "sectioncta overlay": {
        "height": "100%",
        "width": "100%",
        "backgroundColor": "rgba(0, 0, 0, 0.5)",
        "position": "absolute",
        "top": 0,
        "left": 0
    },
    "sectioncontact": {
        "textAlign": "center"
    },
    "sectioncontact h2": {
        "marginTop": 0,
        "marginBottom": 25
    },
    "sectioncontact h2 i": {
        "color": "#dd4b39"
    },
    "sectioncontact ullist-social": {
        "marginBottom": 0
    },
    "sectioncontact ullist-social li a": {
        "display": "block",
        "height": 80,
        "width": 80,
        "lineHeight": 80,
        "fontSize": 40,
        "borderRadius": "100%",
        "color": "white"
    },
    "sectioncontact ullist-social lisocial-twitter a": {
        "backgroundColor": "#1da1f2"
    },
    "sectioncontact ullist-social lisocial-twitter a:hover": {
        "backgroundColor": "#0d95e8"
    },
    "sectioncontact ullist-social lisocial-facebook a": {
        "backgroundColor": "#3b5998"
    },
    "sectioncontact ullist-social lisocial-facebook a:hover": {
        "backgroundColor": "#344e86"
    },
    "sectioncontact ullist-social lisocial-google-plus a": {
        "backgroundColor": "#dd4b39"
    },
    "sectioncontact ullist-social lisocial-google-plus a:hover": {
        "backgroundColor": "#d73925"
    },
    "footer": {
        "backgroundColor": "#222222",
        "paddingTop": 25,
        "paddingRight": 0,
        "paddingBottom": 25,
        "paddingLeft": 0,
        "color": "rgba(255, 255, 255, 0.3)",
        "textAlign": "center"
    },
    "footer p": {
        "fontSize": 12,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "footer ul": {
        "marginBottom": 0
    },
    "footer ul li a": {
        "fontSize": 12,
        "color": "rgba(255, 255, 255, 0.3)"
    },
    "footer ul li a:hover": {
        "textDecoration": "none"
    },
    "footer ul li a:focus": {
        "textDecoration": "none"
    },
    "footer ul li a:active": {
        "textDecoration": "none"
    },
    "footer ul li aactive": {
        "textDecoration": "none"
    },
    "bg-primary": {
        "background": "linear-gradient(#fdcc52, #fdc539)"
    },
    "text-primary": {
        "color": "#fdcc52"
    },
    "no-gutter > [class*='col-']": {
        "paddingRight": 0,
        "paddingLeft": 0
    },
    "btn-outline": {
        "color": "white",
        "borderColor": "white",
        "border": "1px solid"
    },
    "btn-outline:hover": {
        "color": "white",
        "backgroundColor": "#fdcc52",
        "borderColor": "#fdcc52"
    },
    "btn-outline:focus": {
        "color": "white",
        "backgroundColor": "#fdcc52",
        "borderColor": "#fdcc52"
    },
    "btn-outline:active": {
        "color": "white",
        "backgroundColor": "#fdcc52",
        "borderColor": "#fdcc52"
    },
    "btn-outlineactive": {
        "color": "white",
        "backgroundColor": "#fdcc52",
        "borderColor": "#fdcc52"
    },
    "btn": {
        "fontFamily": "'Lato', 'Helvetica', 'Arial', 'sans-serif'",
        "textTransform": "uppercase",
        "letterSpacing": 2,
        "borderRadius": 300
    },
    "btn-xl": {
        "paddingTop": 15,
        "paddingRight": 45,
        "paddingBottom": 15,
        "paddingLeft": 45,
        "fontSize": 11
    },
    "::-moz-selection": {
        "color": "white",
        "textShadow": "none",
        "background": "#222222"
    },
    "::selection": {
        "color": "white",
        "textShadow": "none",
        "background": "#222222"
    },
    "img::selection": {
        "color": "white",
        "background": "transparent"
    },
    "img::-moz-selection": {
        "color": "white",
        "background": "transparent"
    }
});