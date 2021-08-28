
// module.exports = {
//   devServer: {
//     proxy: {
//       '/api': {
//         target: 'https://39.97.33.178',
//         // ws: true,
//         changeOrigin: true
//       }
//     }
//   }
// }


module.exports = {
  devServer: {
    proxy: {
      '/ajax': {
        target: 'https://m.maoyan.com',
        ws: true,
        changeOrigin: true,
      }
    }
  }
}
