# gatsby-plugin-purechat

Easily add PureChat to your Gatsby site.

## Install

`npm install --save @mangoart/gatsby-plugin-purechat`

## How to use

```javascript
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `@mangoart/gatsby-plugin-purechat`,
      options: {
        // include the PureChat js snippet
        enabled: true,
        // your website id, extract from the snippet provided by purechat 
        websiteId: `YOUR_WEBSITE_ID`, 
      },
    },
  ],
}
```
