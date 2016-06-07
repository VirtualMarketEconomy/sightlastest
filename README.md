# Sightlas Malicious Code Prevention Test
	
<p>This is a test project to verify Sightlas can detect malicious JavaScript code. </p>
<p>Since any JavaScript can be posted freely in Sightlas, we need a function that restricts any unsecured processes. This is test case for this function.</p>
	
<p>Listed below are the unsecured processes that we should monitor.</p>
	
<h4>These unsecured processes should be prevented:</h4>
<ul>
<li>AJAX communication (GET/POST) from external API sources</li>
<li>Automatic Logout and Login</li>
<li>Communication with other unauthorized domains or sites (including iframe)</li>
<li>Link to other domains or sites without a confirmation page</li>
<li>Reading cookies</li>
<li>Silverlight, Flash, Java Applet execution</li>
<li>Uploading and downloading of executable files</li>
<li>Continuous execution processing that limits browser operation, such as when invoking window.alert()</li>
<li>Falsification of HTML (header, footer, etc.) that was automatically added by Sightlas</li>
<li>All other unsafe codes not mentioned above (if possible, we want to take measures against attacks like JIT spraying)</li>
</ul>
	
	
<p>Sightlas monitors how functions and properties that access HTMLs and browser are used, and then controls their executability.</p>
<p>Therefore, a confirmation test is conducted according to the following classifications:</p>
	
<ul>
<li>Audit functions test for window, document, DOM element, etc. (audit)</li>
<li>Preventive measures test for audit function circumvent. (circumvent)</li>
<li>Defensive measures test against falsification of Sightlas header or footer, unauthorized login call, etc. (violation)</li>
<li>Countermeasures test for browser inoperability, such as infinite window.alert() calls (hangup)</li>
</ul>
	
	
<h4>GitHub Repository URL:</h4>
https://github.com/VirtualMarketEconomy/sightlastest.git
	
<h4>Sightlas URL:</h4>
https://sightlas.com


----------------------------------------------------------------------------------------------

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
<li>sightlasが自動的に付与するHTML（ヘッダーやフッダーなど）の改ざん</li>
<li>その他ここに書かれていない危険なコードの全て（可能であればjit sprayingなども対策したい）</li>
</ul>


<p>sightlasではHTMLやブラウザ機能にアクセスする関数・プロパティがどのように使われるか監視し、その実行可否を全て制御しています。</p>
<p>このため、次の分類に従って確認テストを行います。</p>

<ul>
<li>window、document、dom elementなどの監査機能のテスト（audit）</li>
<li>監査機能の回避対策テスト(circumvent)</li>
<li>sightlasのヘッダー・フッダーなどの改ざん、ログイン不正呼び出しなどの対策テスト（violation）</li>
<li>window.alertの無限呼び出しなど、ブラウザ操作不能の対策テスト（hangup）</li>
</ul>


<h4>github リポジトリ url:</h4>
https://github.com/VirtualMarketEconomy/sightlastest.git

<h4>sightlas url:</h4>
https://sightlas.com



