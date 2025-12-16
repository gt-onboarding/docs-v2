export const AuthenticationApiSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 leading-relaxed">
      {/* Left column */}
      <div>
        <p>
          Authentication API は、Auth0 およびサポートされているアイデンティティプロトコル（OpenID Connect、OAuth、SAML など）向けのアイデンティティ機能を提供します。
        </p>
        <p className="mt-3">
          通常、この API は{" "}
          <a href="/docs/libraries/auth0js">Auth0.js</a> のような Auth0 のソフトウェア開発キット (SDK) や、<a href="/docs/libraries/lock">Lock</a> のようなライブラリを通じて利用します。
          ただし、認証 UI を独自に構築している場合は、Authentication API を直接呼び出す必要があります。
        </p>
      </div>

      {/* Right column */}
      <div>
        <p>タスクの例としては次のようなものがあります。</p>
        <ul className="space-y-2 !mt-0">
          <li>
            認証時に <a href="/docs/secure/tokens">トークン</a> を取得する
          </li>
          <li>
            <a href="/docs/secure/tokens/access-tokens">アクセストークン</a> を使用してユーザーのプロファイルを取得する
          </li>
          <li>
            <a href="/docs/secure/tokens/refresh-tokens">リフレッシュトークン</a> を新しいアクセストークンと交換する
          </li>
          <li>
            <a href="/docs/secure/multi-factor-authentication">多要素認証 (MFA)</a> のチャレンジを要求する
          </li>
        </ul>
      </div>
    </div>
  );
};
export const ManagementApiSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 leading-relaxed">
      {/* Left column */}
      <div>
        <p>
          Management API を使用すると、Auth0 アカウントをプログラムから管理できるため、環境の設定を自動化できます。
          Auth0 Management Dashboard で実行できるタスクのほとんどは、この API を使用してプログラムからも実行できます。
        </p>
      </div>

      {/* Right column */}
      <div>
        <p>タスクの例としては次のようなものがあります。</p>
        <ul className="space-y-2 !mt-0">
          <li>Auth0 にアプリケーションおよび API を登録する</li>
          <li>
            ユーザーが認証に使用できる <a href="/docs/connections">接続</a> を設定する
          </li>
          <li>
            <a href="/docs/manage-users">ユーザーを管理する</a>
          </li>
          <li>
            <a href="/docs/manage-users/user-accounts/user-account-linking/link-user-accounts">ユーザーアカウントをリンクする</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export const MyAccountApiSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 leading-relaxed">
      {/* Left column */}
      <div>
        <p>
          Auth0 My Account API は、ユーザーが自分のアカウント情報を管理するための専用エンドポイント群を提供します。
          これらの API を使用して、アプリケーション内にセルフサービスの仕組みを構築したり、ユーザーアカウントに関する詳細情報を段階的に追加したりできます。
        </p>
      </div>

      {/* Right column */}
      <div>
        <p>タスクの例としては次のようなものがあります。</p>
        <ul className="space-y-2 !mt-0">
          <li>エンドユーザーが自分の認証要素（ファクター）を管理できるようにする</li>
          <li>認証方法の詳細を更新する</li>
          <li>利用可能な認証方法を把握する</li>
        </ul>
      </div>
    </div>
  );
};