function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('MyHomeStudio Web App')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL); // 👈 これで外部iframe埋め込み許可！
}