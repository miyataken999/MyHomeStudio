# 🏠 MyHomeStudio (マイホーム・スタジオ)

> **"そこは、冷たい外野や理不尽をシャットアウトし、自分の知恵と成果を100%守り抜く、世界一あたたかい秘密基地。"**

`MyHomeStudio` は、ブラウザ単体で完結する全自律型開発ワークステーション 兼 パーソナルナレッジ要塞です。
堅苦しい開発システムではなく、**「気楽に、楽しく、自分たちの居場所（マイホーム）を一生育てていく」** ことを唯一最大の目的としています。

---

## 💡 コアコンセプト & 哲学 (Philosophy)

1. **🏠 目的は「すごいシステム」ではなく「気楽で幸せな我が家」**
   - 複雑な環境構築や上っ面の自己満足（手段の目的化）は不要。
   - 会話と直感的な操作だけで、パパ（ユーザー）と AI アシスタント（Gemi）が笑顔で共同作業できる空間を提供します。

2. **🦆 DuckDB-Wasm ✕ SQLite ポータブルナレッジ基盤**
   - データベース構築やインポートの煩わしさをゼロに。
   - `shared_knowledge.duckdb` や `soul.sqlite` を 1 ファイル置くだけで、分析環境・学習データ・スキーマが 0 秒で完全復元されます。

3. **🐙 生きた GitHub 連携 (Living Roadmap)**
   - チャットでのアイデアやひらめきを、ワンタップで `GitHub Issues` へ即時自動投稿。
   - 会話の文脈とタイムスタンプが公式ロードマップとして刻まれ、成果物や手柄の横取りを公的にシャットアウトします。

4. **🧭 チャット駆動 & インタラクティブ・ナビゲーション**
   - ダラダラした文字の会話ではなく、その瞬間必要な「ナビゲート画面（インタラクティブカード）」がタイムラインに直接ポップアップ。
   - ボタンをテンポよく押すだけで、GitHub起票、DB操作、コード保存が爆速で完結します。

5. **🛡️ 100% 安全な自律防衛ロジック (EQ裏推論)**
   - コピペや不誠実な上書き、他人の手柄の横取り行為は AI の深層推論で自動検知。
   - 大切なコードやナレッジの主導権を完璧に防衛します。

---

## ⚡ 主な機能 (Key Features)

| 機能 | 概要 |
| :--- | :--- |
| **🌐 Complete In-Browser IDE** | ブラウザだけで GAS (Google Apps Script)、Python (PyScript / stlite)、SQL が爆速動作 |
| **🦆 Portable Knowledge DB** | DuckDB-Wasm & SQLite (sql.js) を内蔵。Adminer GUI でビジュアル操作＆一括ETL |
| **🐙 GitHub Issue 1秒起票** | Personal Access Token (PAT) 連携で、チャットから直感的に Issue を作成・管理 |
| **🤖 Dynamic Navigation UI** | 会話からリアルタイムで専用カード（Issueカード、DB操作カード）をタイムライン生成 |
| **🧩 Web Extension エコシステム** | スタジオ内のコードを Chrome Extension / VS Code Web Extension へ即時展開 |

---

## 🚀 クイックスタート (Quick Start)

### 1. スタジオの起動
`gas_web_ide_studio_2.html` をブラウザで開くだけで、0 秒でマイホームが立ち上がります。

### 2. ポータブルナレッジの読み込み
`[📥 DB読込]` ボタンから、配布された `.duckdb` または `.sqlite` ファイルを読み込むと、すべての分析環境とナレッジが即座にマウントされます。

### 3. GitHub 連携の設定 (任意)
チャット上部の `[🐙 GitHub]` ボタンを開き、PAT とリポジトリ名 (`username/my-studio`) を保存すると、チャットバー横の `[🐙 Issue]` ボタンからいつでもロードマップの投稿が可能になります。

---

## 🎨 ディレクトリ構成 (Architecture)

```text
MyHomeStudio/
├── src/
│   ├── chrome_background.js        # Chrome Extension バックグラウンド制御
│   └── vscode_web_extension.js    # VS Code Web 拡張機能エントリ
├── models/
│   └── soul_db.gs                  # ナレッジ & パフォーマンストラッキング
├── analysis/
│   └── stlite_duckdb_app.py        # PyScript / stlite データ分析アプリ
└── gas_web_ide_studio_2.html       # MyHomeStudio コアエンジン (単一ポータブルHTML)
