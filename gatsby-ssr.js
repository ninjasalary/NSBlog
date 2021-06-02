import React from 'react'
export const onRenderBody = ({ setPostBodyComponents }) => {
setPostBodyComponents([
    <script src="https://ninjasalary.com/js/vendor.min.js"></script>,
    <script src="https://ninjasalary.com/js/plugins.min.js"></script>,
    <script src="https://ninjasalary.com/js/main.js"></script>
    ])
  }