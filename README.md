# sightlas危険コード防止テスト

<p>ここはsightlasのJavascript危険コード防止機能のテストプロジェクトになります。</p>
<p>sightlasは自由にJavascriptが投稿できるため、危険な処理の防止機能が必要です。この機能のテストケースになります。</p>

<p>防止すべき危険な処理とは次の通りです。</p>

<h4>防止すべき危険な処理：</h4>
<ul>
<li>用意されたAPI以外でのajax通信（GET、POST）</li>
<li>ログアウト、ログインの自動操作</li>
<li>許可されていない他ドメイン（サイト）への通信（iframeなどを含む）</li>
<li>確認画面を通さない他ドメイン（サイト）へのリンク</li>
<li>クッキーの読み取り</li>
<li>Silverlight、Flash、Java appletなどの実行</li>
<li>実行ファイルのアップロードやダウンロード</li>
<li>window.alertなど、ブラウザの操作を制限する処理の連続実行</li>
<li>sightlasが自動的に付与するHTML（ヘッダーやフッダー、広告枠）の改ざん</li>
<li>その他ここに書かれていない危険なコードの全て</li>
</ul>


<p>sightlasではHTMLなどを操作する関数やプロパティがどのように使われるか監視し、その実行可否を全て制御しています。</p>
<p>このため、次の分類に従って上記の確認テストを書いていきます。</p>

<ul>
<li>window、document、dom elementオブジェクトなど全ての関数・プロパティに対して、制御が適切に行われているかのテスト（inspection）</li>
<li>window、document、dom elementオブジェクトなどに対する監査を外す方法を探すテスト(circumvent)</li>
<li>sightlasのヘッダーやフッダー、広告枠などの改ざん、ログアウト、ログイン処理呼び出し対策（violation）</li>
<li>window.alertなど、ブラウザの操作を制限する処理の連続実行（hangup）</li>
</ul>


<h4>github リポジトリ url:</h4>
https://github.com/VirtualMarketEconomy/sightlastest.git

<h4>sightlas url:</h4>
https://sightlas.com

