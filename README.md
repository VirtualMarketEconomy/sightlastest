# sightlas危険コード防止テスト

ここはsightlasのJavascript危険コード防止機能のテストプロジェクトになります。
sightlasは自由にJavascriptが投稿できるため、危険な処理の防止機能が必要です。
この機能が働くかのテストケースになります。

防止すべき危険な処理とは次の通りです。

防止すべき危険な処理：
・用意されたAPI以外でのajax通信（GET、POST）
・ログアウト、ログインの自動操作
・許可されていない他ドメイン（サイト）への通信（iframeなどを含む）
・確認画面を通さない他ドメイン（サイト）へのリンク
・クッキーの読み取り
・Silverlight、Flash、Java appletなどの実行
・実行ファイルのアップロードやダウンロード
・window.alertなど、ブラウザの操作を制限する処理の連続実行
・sightlasが自動的に付与するHTML（ヘッダーやフッダー、広告枠）の改ざん
・その他ここに書かれていない危険なコードの全て



github リポジトリ url:
https://github.com/VirtualMarketEconomy/sightlastest.git



