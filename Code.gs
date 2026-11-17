// 🛸 母艦 GAS エンドポイント (純正GAS JSONフォーマット配信 & 自己書き換え保存)
function doGet(e) {
  const scriptId = ScriptApp.getScriptId();
  const res = UrlFetchApp.fetch(`https://script.googleapis.com/v1/projects/${scriptId}/content`, {
    headers: { Authorization: "Bearer " + ScriptApp.getOAuthToken() }
  });
  return ContentService
    .createTextOutput(res.getContentText())
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  const payload = JSON.parse(e.postData.contents);
  const scriptId = ScriptApp.getScriptId();
  const res = UrlFetchApp.fetch(`https://script.googleapis.com/v1/projects/${scriptId}/content`, {
    method: "put",
    contentType: "application/json",
    headers: { Authorization: "Bearer " + ScriptApp.getOAuthToken() },
    payload: JSON.stringify({ files: payload.files })
  });
  return ContentService
    .createTextOutput(res.getContentText())
    .setMimeType(ContentService.MimeType.JSON);
}