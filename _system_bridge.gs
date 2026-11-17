/**
 * 🤖 PROJECT AISYNC - Autonomous System Bridge
 * スクリプトプロパティ (ScriptProperties) 操作用専用APIブリッジ
 * ※ IDE Studio より自動生成されました
 */
function apiGetScriptProperties() {
  var props = PropertiesService.getScriptProperties().getProperties();
  Logger.log('🔑 apiGetScriptProperties 実行: ' + Object.keys(props || {}).length + ' 件取得');
  return props || {};
}

function apiSaveScriptProperties(newProps) {
  var sp = PropertiesService.getScriptProperties();
  var propsToSet = newProps;
  if (typeof newProps === 'string') {
    try {
      propsToSet = JSON.parse(newProps);
    } catch(e) {
      propsToSet = {};
    }
  }
  // 既存プロパティをクリーンにしてから全上書き保存
  sp.deleteAllProperties();
  if (propsToSet && typeof propsToSet === 'object' && Object.keys(propsToSet).length > 0) {
    sp.setProperties(propsToSet);
  }
  Logger.log('💾 apiSaveScriptProperties 実行完了: ' + Object.keys(propsToSet || {}).length + ' 件保存');
  return {
    success: true,
    count: Object.keys(propsToSet || {}).length,
    timestamp: new Date().toISOString()
  };
}
