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

## 🔄 自己増殖 BPMS アーキテクチャ（全体構成図）

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



# MyHomeStudio
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
