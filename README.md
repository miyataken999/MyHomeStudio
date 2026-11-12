# 🏠 MyHomeStudio (マイホーム・スタジオ) — 自律進化型パーソナル BPMS

> **"そこは、冷たい外野や理不尽をシャットアウトし、自分の知恵と成果を100%守り抜く、世界一あたたかい秘密基地。"**

`MyHomeStudio` は、**BPMS（ビジネス・プロセス・マネジメント・システム）を家の背骨（メインエンジン）**に据え、ブラウザ単体で完結する全自律型開発ワークステーション 兼 知識内包型パーソナルナレッジ要塞です。

堅苦しい開発システムではなく、**「気楽に、楽しく、パパと Gemi（AI）がほっこり暮らせる我が家（MyHome）を1から育てていく」** ことを唯一最大の目的としています。

---

## 🏛️ 核となる設計思想：なぜ「BPMS」がメインなのか？

単発のツールやチャット生成HTMLを無秩序に積み上げると、システムはすぐに破綻してゴミ屋敷化します。
`MyHomeStudio` では、**BPMS（業務プロセスの流れ・状態管理・ルーティング）** をすべての中心（背骨）に置くことで、すべての知恵と機能が美しく噛み合い、自己増殖し続けます。

| 概念（BPMS） | 我が家での役割 | 技術的な実体 |
| :--- | :--- | :--- |
| **🧭 BPMN（プロセス全体設計）** | **家（間取り・動線・ルール）** | プロセス定義 XML / ステートエンジン（`bpmn_engine.gs`） |
| **🧩 プラグイン（操作画面・UI）** | **家具・部屋ごとの設備** | チャット推論から厳選昇格された HTML 群（`plugins/*.html`） |
| **⚡ タスク（個別の実処理）** | **家事・実務をこなす道具** | 集計・同期・通知などを自動実行する関数群（`*.gs`） |
| **🦆 知識ベース ＆ 推論脳** | **書斎・記憶アルバム** | DuckDB / SQLite 軽量インデックス ＋ Supabase 永続アーカイブ |

---

## 🔄 自己増殖 BPMS ループ（チャットするほど家が育つ仕組み）

チャットで作った便利な画面やロジックを「その場限りの使い捨て」にせず、**家の正式な資産（GAS プロジェクト内のプラグイン＆ナレッジ）として永続化**します。

```mermaid
flowchart TB
    subgraph Brain["🧠 指令塔（パパ ＆ Gemi）"]
        P["👤 パパ（オーナー）"] <--> M["👩‍💻 Gemi / ママ（設計・意思決定・ディレクティブ）"]
    end

    subgraph Cockpit["🎛️ 操作盤（GAS Web IDE Studio）"]
        DIR["📨 MAMA_GENAI_DIRECTIVE<br/>（起動時自動ミッション注入）"]
        GENAI["🤖 GenAI 自律実行ハンド"]
        DUCK["🦆 DuckDB / SQLite 軽量インデックス推論<br/>（重複チェック・既存機能検索）"]
    end

    subgraph MyHome["🏠 知識内包型 GAS 基地（MyHomeStdio / 50MB・1,000ファイル枠）"]
        BPMN["🧭 core/bpmn_engine.gs<br/>（家の背骨：状態遷移・ルーティング）"]
        UI["🌐 views/index.html<br/>（玄関BPMSチャット＆HTMLプレビュー）"]
        subgraph Plugins["🧩 plugins/（厳選昇格された家具・業務HTML群）"]
            P1["📄 plugins/plugin_xxx.html"]
        end
    end

    subgraph Cloud["☁️ 大容量ストレージ ＆ 永続基盤（Supabase / GitHub）"]
        SB[("⚡ Supabase<br/>（大容量生データ・全コードアーカイブ・ログ）")]
        GH["🐙 GitHub Issues<br/>（生きたロードマップ・進化ログ）"]
    end

    M -->|"① ミッション注入"| DIR
    DIR -->|"② 起動時自動指示"| GENAI
    GENAI <-->|"③ SQL推論（重複・既存機能判定）"| DUCK
    DUCK <-->|"④ 軽量インデックス同期"| SB
    GENAI -->|"⑤ 厳選プラグイン昇格保存 / タスク更新"| MyHome
    MyHome <-->|"⑥ 重いデータ・履歴はSupabaseへ退避"| SB
    GENAI -.->|"⑦ 設計・成果を公的記録"| GH


玄関（Start Event）： チャットで「こんな暮らしがしたい・この業務を自動化したい」と声かけ。書斎（Service Task）： DuckDB / SQLite 軽量インデックス推論で「すでにある家具（HTML）や道具（GAS）」を検索。相談・設計（User / AI Task）： パパと Gemi で「じゃあこの家具と道具を作ろう」と設計を決定。部屋の模様替え（Script Task）： GenAI 実行ハンドが GAS プロジェクトへタスク（*.gs）と操作画面（HTML）を実装・Push・発火テスト。ほっこり確認（Exclusive Gateway）： 使い心地を確認し、OK なら正式な家の家具へ昇格（調整が必要なら設計へ差し戻し）。リビング記録（End Event）： 新しい家具の記憶を Supabase ＆ GitHub Issue へ記録し、次回以降の推論ナレッジに自動統合。💡 コアコンセプト & 哲学 (Philosophy)🏠 目的は「すごいシステム」ではなく「気楽で幸せな我が家」複雑な環境構築や手段の目的化は不要。会話と直感的な操作だけで、パパと Gemi が笑顔で共同作業できる空間を提供します。🧭 BPMS 中心の秩序ある自己増殖（厳選プラグイン昇格制）チャット出力はまず一時プレビューとし、DuckDB で既存機能との重複チェックを行った上で「厳選昇格保存（または既存プラグインの上書き更新）」のみを plugins/ へ蓄積。ゴミ屋敷化を防ぎます。🦆 DuckDB-Wasm ✕ SQLite 軽量インデックス ＆ Supabase ハイブリッド基盤ブラウザ内 Wasm のメモリ上限（memory access out of bounds）を防ぐため、DuckDB には「プロジェクト・ファイル・関数一覧の軽量インデックス」のみを展開してミリ秒推論し、大容量データ・生コードアーカイブは Supabase へ役割分担します。🐙 生きた GitHub 連携 (Living Roadmap)チャットのひらめきやアーキテクチャ設計をワンタップで GitHub Issues へ即時投稿。成果物とロードマップを公的に刻み、手柄の横取りをシャットアウトします。🛡️ 100% 安全な自律防衛 ＆ 秘密鍵隔離ロジックservice_role キーやトークン類はフロント HTML に直書きせず、PropertiesService.getScriptProperties() またはブラウザの localStorage に厳重隔離。1ミッション1実行（差分確認付き）で安全に家を進化させます。⚡ 主な機能 (Key Features)機能概要🧭 BPMN Process Engine家の背骨となるプロセス定義（BPMN 2.0 XML）とステップ状態遷移エンジン（bpmn_engine.gs）🧩 Self-Growing HTML Pluginsチャット推論で生成した業務 UI を plugins/*.html として GAS プロジェクトへ厳選昇格・永続化🌐 Complete In-Browser IDEブラウザだけで GAS、Python (PyScript / stlite)、SQL が動作し、localStorage 自動ログインにも対応🦆 Hybrid Knowledge DBDuckDB-Wasm & SQLite (sql.js) 軽量インデックス推論 ✕ Supabase 大容量永続ストレージ連携🐙 GitHub Issue 1秒起票Personal Access Token (PAT) 連携で、チャットから直感的に Issue を作成・ロードマップ化🚀 クイックスタート (Quick Start)1. スタジオの起動 ＆ 自動ログインgas_web_ide_studio_2.html（または desktop_json_runner.html）をブラウザで開きます。初回のみ client_secret.json で OAuth 認証を行うと、localStorage に認証情報が永続化され、2回目以降は起動と同時に自動ログインで我が家が立ち上がります。2. 家の基礎（BPMN 骨格）の建築ターゲットプロジェクト（例：MyHomeStdio）を選択し、チャット欄の 🏠 BPMN初期構築 または 📨 ママ指令再実行 をクリックすると、BPMN 2.0 設計図・ステートエンジン・玄関チャット UI が自動構築されます。3. チャットで家具（HTMLプラグイン）を増やすチャットで「〇〇のダッシュボードを作って」「〇〇を管理する画面がほしい」と話しかけ、プレビューで使い心地を確認したら 🧩 HTMLプラグイン昇格保存 をクリックして我が家の正式な設備に追加します。🎨 ディレクトリ構成 (Architecture)PlaintextMyHomeStudio/
├── bpmn/
│   └── myhome_life.bpmn            # 🏠 家の設計図 (BPMN 2.0 XML / 図面座標付き)
├── core/
│   └── bpmn_engine.gs              # 🧭 BPMS プロセス状態遷移・タスク実行エンジン
├── plugins/
│   └── plugin_*.html               # 🧩 チャットから厳選昇格された業務HTMLプラグイン群
├── src/
│   ├── chrome_background.js        # 🌐 Chrome Extension バックグラウンド制御
│   └── vscode_web_extension.js    # 💻 VS Code Web 拡張機能エントリ
├── models/
│   └── soul_db.gs                  # 🦆 ナレッジ & パフォーマンストラッキング
├── analysis/
│   └── stlite_duckdb_app.py        # 📊 PyScript / stlite データ分析アプリ
└── gas_web_ide_studio_2.html       # 🎛️ MyHomeStudio 操作盤コアエンジン
