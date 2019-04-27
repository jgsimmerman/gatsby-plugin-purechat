import React from 'react'

exports.onRenderBody = function({ setPostBodyComponents }, pluginOptions) {
  const { websiteId, enabled } = pluginOptions

  if (!enabled) {
    return null
  }

  return setPostBodyComponents([
    <script
      key="gatsby-plugin-purechat"
      type="text/javascript"
      data-cfasync="false"
      dangerouslySetInnerHTML={{
        __html: `window.purechatApi = { l: [], t: [], on: function () { this.l.push(arguments); } }; (function () { var done = false; var script = document.createElement('script'); script.async = true; script.type = 'text/javascript'; script.src = 'https://app.purechat.com/VisitorWidget/WidgetScript'; document.getElementsByTagName('HEAD').item(0).appendChild(script); script.onreadystatechange = script.onload = function (e) { if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) { var w = new PCWidget({c: '${websiteId}', f: true }); done = true; } }; })();`,
      }}
    />,
  ])
}
