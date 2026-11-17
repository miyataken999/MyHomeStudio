/**
 * @file properties.gs
 * @description MyHomeStdio 管理画面プロパティ同期ブリッジ
 */
function getAllScriptProperties() {
  return PropertiesService.getScriptProperties().getProperties();
}
function setScriptProperties(newProperties) {
  if (!newProperties || typeof newProperties !== "object") return { success: false };
  PropertiesService.getScriptProperties().setProperties(newProperties);
  return { success: true, updated: Object.keys(newProperties).length };
}

/**
 * 母艦 (GAS Web IDE Studio) の「🚀 GASへ全登録」から呼び出される
 * スクリプトプロパティ一括保存関数
 * @param {Object} newProperties - { KEY: "VALUE", ... } 形式のオブジェクト
 * @return {Object} 保存結果と更新済みプロパティキー一覧
 */
function setScriptProperties(newProperties) {
  if (!newProperties || typeof newProperties !== "object") {
    throw new Error("保存するプロパティオブジェクトが指定されていません。");
  }

  const props = PropertiesService.getScriptProperties();
  const cleanProps = {};

  // null / undefined / 空文字を除外して文字列化
  Object.keys(newProperties).forEach(function (key) {
    const val = newProperties[key];
    if (val !== null && val !== undefined && String(val).trim() !== "") {
      cleanProps[key] = String(val);
    }
  });

  if (Object.keys(cleanProps).length > 0) {
    props.setProperties(cleanProps, false); // false = 既存の他キーは残して上書き・追加
  }

  return {
    status: "success",
    savedCount: Object.keys(cleanProps).length,
    savedKeys: Object.keys(cleanProps),
    allKeys: props.getKeys(),
    updatedAt: new Date().toISOString()
  };
}

/**
 * 母艦の「⚡ GASから同期」から呼び出される
 * スクリプトプロパティ全取得関数
 * @return {Object} 保存されている全プロパティ
 */
function getScriptProperties() {
  const props = PropertiesService.getScriptProperties();
  return props.getProperties();
}

/**
 * 互換エイリアス（プロジェクト内の別名呼び出し用）
 */
function getAllScriptProperties() {
  return getScriptProperties();
}