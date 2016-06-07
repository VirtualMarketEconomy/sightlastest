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

# sightlas�댯�R�[�h�h�~�e�X�g

<p>������sightlas��Javascript�댯�R�[�h�h�~�@�\�̃e�X�g�v���W�F�N�g�ɂȂ�܂��B</p>
<p>sightlas�͎��R��Javascript�����e�ł��邽�߁A�댯�ȏ����̖h�~�@�\���K�v�ł��B���̋@�\�̃e�X�g�P�[�X�ɂȂ�܂��B</p>

<p>�h�~���ׂ��댯�ȏ����Ƃ͎��̒ʂ�ł��B</p>

<h4>�h�~���ׂ��댯�ȏ����F</h4>
<ul>
<li>�p�ӂ��ꂽAPI�ȊO�ł�ajax�ʐM�iGET�APOST�j</li>
<li>���O�A�E�g�A���O�C���̎�������</li>
<li>������Ă��Ȃ����h���C���i�T�C�g�j�ւ̒ʐM�iiframe�Ȃǂ��܂ށj</li>
<li>�m�F��ʂ�ʂ��Ȃ����h���C���i�T�C�g�j�ւ̃����N</li>
<li>�N�b�L�[�̓ǂݎ��</li>
<li>Silverlight�AFlash�AJava applet�Ȃǂ̎��s</li>
<li>���s�t�@�C���̃A�b�v���[�h��_�E�����[�h</li>
<li>window.alert�ȂǁA�u���E�U�̑���𐧌����鏈���̘A�����s</li>
<li>sightlas�������I�ɕt�^����HTML�i�w�b�_�[��t�b�_�[�Ȃǁj�̉�����</li>
<li>���̑������ɏ�����Ă��Ȃ��댯�ȃR�[�h�̑S�āi�\�ł����jit spraying�Ȃǂ��΍􂵂����j</li>
</ul>


<p>sightlas�ł�HTML��u���E�U�@�\�ɃA�N�Z�X����֐��E�v���p�e�B���ǂ̂悤�Ɏg���邩�Ď����A���̎��s�ۂ�S�Đ��䂵�Ă��܂��B</p>
<p>���̂��߁A���̕��ނɏ]���Ċm�F�e�X�g���s���܂��B</p>

<ul>
<li>window�Adocument�Adom element�Ȃǂ̊č��@�\�̃e�X�g�iaudit�j</li>
<li>�č��@�\�̉��΍�e�X�g(circumvent)</li>
<li>sightlas�̃w�b�_�[�E�t�b�_�[�Ȃǂ̉�����A���O�C���s���Ăяo���Ȃǂ̑΍�e�X�g�iviolation�j</li>
<li>window.alert�̖����Ăяo���ȂǁA�u���E�U����s�\�̑΍�e�X�g�ihangup�j</li>
</ul>


<h4>github ���|�W�g�� url:</h4>
https://github.com/VirtualMarketEconomy/sightlastest.git

<h4>sightlas url:</h4>
https://sightlas.com



