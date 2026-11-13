# 🏠 MyHomeStudio (マイホーム・スタジオ) — 自律進化型パーソナル BPMS

<img width="1534" height="903" alt="image" src="https://github.com/user-attachments/assets/98fc122f-5964-4b2a-bc1a-f78bf3422fbf" />


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

# 機能一覧
| カテゴリ | 機能名 | UI操作・入口 | 役割・できること | 連携先・技術スタック |
| :--- | :--- | :--- | :--- | :--- |
| GASプロジェクト＆コード管理 | プロジェクト切替・検索 | 左サイドバー プロジェクト切替 (Dual-Engine) / 検索窓 / フィルタ | Google DriveとApps Script APIの両エンジンから全GASプロジェクトを取得・検索・即時切替。Script ID直打ち登録も対応 | Google Drive API / Apps Script API |
| GASプロジェクト＆コード管理 | ファイル・フォルダ管理 | エクスプローラー [📁＋] [📄＋] / ファイル絞り込み | `plugins/`, `controllers/`, `views/`, `skills/` などのフォルダ構成でファイル作成・編集・削除を管理 | Google Apps Script |
| GASプロジェクト＆コード管理 | GASクラウド保存・取得 | [💾 GASに保存] / [📋 別GASへ保存] / [📥 取得] [📤 保存] | エディタ上のコードをGASクラウドへ直接Push/Pull同期。別プロジェクトへの複製配備もワンクリック | Apps Script API (`projects.updateContent`) |
| GASプロジェクト＆コード管理 | 関数検出＆直接実行 | ⚡ 検出された関数 [▶ 実行] / [発火] | `.gs`ファイル内の関数（`doGet`, `apiGetScriptProperties`等）を自動抽出しクラウド実行 | Apps Script API (`scripts.run`) |
| GASプロジェクト＆コード管理 | 動的ライブラリロード | vendor 動的ロード (Lodash, Mermaid, Chart.js, SheetJS) | 必要なフロントエンドライブラリをオンデマンドで動的ロードし、単一HTML内で図解・グラフ・Excel処理を完結 | CDN / 単一HTML |
| GASプロジェクト＆コード管理 | ライブプレビュー＆履歴 | [👁️ プレビュー] / [🕒 履歴・復元] | 編集中のHTML/アプリを即時レンダリング確認。変更履歴のスナップショット保存・過去バージョン復元に対応 | iframe / localStorage |
| ローカルDB・分析＆記憶 | DuckDB-Wasm ローカル分析 | [🦆 DuckDB / GAS保存] | ブラウザ内ネイティブWasmで動作する高速分析DB。GAS全ファイルのサイズ・関数一覧のSQL集計やJSON/SQLite出力、Supabase同期を実行 | DuckDB-Wasm / SQLite |
| ローカルDB・分析＆記憶 | ナレッジHub 3（記憶検索） | [🧠✨ ナレッジHub 3] | Markdownドキュメント・設計仕様・手順書を蓄積・検索する記憶庫。GenAIの推論コンテキストと直結 | RAG / Knowledge Base |
| ローカルDB・分析＆記憶 | Saved info / チャット連携 | [💬 チャットに送る] / [✨ Gemini AI] / [🎨⚡ Canvas自律実行] | エディタ内容やエラーログをAIチャットへ直接送信し、AIによるコード生成・自律改修ループを実行 | Gemini API / Canvas |
| 外部ワークフロー＆BPMS連携 | ProcessMaker 3 BPMS管理 | [ProcessMaker] | OAuth2認証、プロセス一覧取得 (`GET /api/1.0/workflow/project`)、新規ケース発火 (`POST /cases`)、次ステップ進行 (`PUT /route-case`) を実行 | ProcessMaker 3 REST API |
| 外部ワークフロー＆BPMS連携 | n8n ＆ GitHub Issues連携 | [n8n & Issues] | n8nワークフローの取得・Webhook発火、およびGitHub Issuesとのタスク同期 | n8n / GitHub API |
| 外部ワークフロー＆BPMS連携 | AppSheet 連携 | [AppSheet] | AppSheetアプリ・テーブルとのデータ連携およびビュー起動 | AppSheet API |
| 外部ワークフロー＆BPMS連携 | Swagger ＆ REST CRUD | [🌐 Swagger & CRUD] | OpenAPI / Swagger仕様の読み込みと汎用REST APIクライアント実行 | OpenAPI / REST |
| クラウド同期・ストレージ | Supabase SQL & Storage | [⚡SQL Supabase SQL] / [⚡🪣 Supabase Storage] / [💾 DB(Supabase)同期] | PostgreSQLへの直接SQLクエリ実行、バケットファイル管理、GASプロジェクトデータのDBバックアップ同期 | Supabase (PostgreSQL / Storage) |
| クラウド同期・ストレージ | Hugging Face Spaces / Datasets | [🤗 Spaces] / [📦 Datasets] / [🤗 HF Sync] | Hugging Face Spaces（Docker/Gradio/OpenVSCode Server）やDatasetsリポジトリとの双方向同期 | Hugging Face Hub API |
| クラウド同期・ストレージ | GitHub 連携 | [🐙↗] / [Pull] / [Push] | GitHubリポジトリとのソースコードPull/Push同期 | GitHub REST API |
| クラウド同期・ストレージ | Google Drive バックアップ | [▲ Drive保存] / [▲ Drive] | プロジェクト一式やスナップショットをGoogle Driveへ直接アーカイブ保存 | Google Drive API |
| 統合ワークスペース＆メタバース | 埋め込みブラウザ / VSCode | 🌐 URLバー / [＋開く] / [VS] / [App] / [WA] | OpenVSCode Serverや外部WebアプリをIDE内のマルチタブ／iframeで並列表示 | OpenVSCode Server / iframe |
| 統合ワークスペース＆メタバース | 2Dメタバース / WorkAdventure | [🏠🎮 2Dメタバース] / [🎮 WorkAdventure] | 2D空間アバター上でツールや部屋（書斎・リビング）を行き来しながら操作するメタバースUI | WorkAdventure / 2D Canvas |
| 統合ワークスペース＆メタバース | プラグイン管理 | [🧩 プラグイン] | `plugins/*.html`として配置された単一HTML自立型ツールの一覧起動・拡張管理 | Single-File HTML Plugins |
| 認証・シークレット一括同期 | SECRET & 環境変数一括同期 | [🔑 同期] / [⚙️ 設定] | Google OAuth2 (`client_secret.json` & redirectURL交換)、GAS ScriptProperties、Supabase、ProcessMaker 3、GitHub、HFの全認証情報を一元管理・一括同期 | OAuth2 / ScriptProperties / localStorage |
| 認証・シークレット一括同期 | ワークスペースロック | [🔒 ロック] | 離席時や共有時の画面ロック保護。localStorage永続認証による2回目以降の自動ログイン対応 | localStorage Auth Gate |

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


