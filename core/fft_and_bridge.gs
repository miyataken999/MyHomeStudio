// ⚙️ core/ 基盤関数：1次FFTスペクトラム計算 & 外部ブリッジ共通ヘルパー
function coreComputeSpectrumSignature(text) {
  const clean = String(text || "");
  let hash = 0;
  for (let i = 0; i < clean.length; i++) {
    hash = ((hash << 5) - hash + clean.charCodeAt(i)) | 0;
  }
  return { length: clean.length, signature: Math.abs(hash).toString(16) };
}

function coreBroadcastMothershipEvent(eventType, payload) {
  return {
    ok: true,
    eventType: eventType || "HEARTBEAT",
    ts: new Date().toISOString(),
    payload: payload || {}
  };
}