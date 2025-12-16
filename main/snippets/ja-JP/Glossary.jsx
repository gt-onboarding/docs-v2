export const GlossaryPage = () => {
  const GLOSSARY = [
    {
      term: "アクセストークン",
      description:
        "アプリケーションがAPIにアクセスするために使用できる認証情報。トークンの保有者がAPIへのアクセスを許可され、付与されたスコープで指定された特定のアクションを実行できることをAPIに通知します。アクセストークンは任意の形式を取ることができますが、一般的な2つのオプションには不透明な文字列とJSON Web Token（JWT）があります。これらはHTTP AuthorizationヘッダーでBearer認証情報としてAPIに送信する必要があります。"
    },
    {
      term: "アカウントリンク",
      description:
        "複数のプラットフォーム間でユーザーアカウントを接続し、ユーザーが一度認証情報を提供するだけで複数のリソースやアプリケーションにアクセスできるようにすること。"
    },
    {
      term: "Actions",
      description:
        "Auth0ランタイムの特定のポイントで実行される、Node.jsで記述されたセキュアでテナント固有のバージョン管理された関数。Actionsは、カスタムロジックでAuth0の機能をカスタマイズおよび拡張するために使用されます。"
    },
    {
      term: "適応型多要素認証",
      description:
        "ログイン試行が信頼性の低いログインと判断された場合にのみユーザーに対してトリガーされる多要素認証（MFA）。適応型MFAでは、Auth0は必要な場合にのみMFAをトリガーし、悪意のある行為者に対して摩擦を追加する一方で、正当な行為者のログイン体験は変更しません。"
    },
    {
      term: "アプリケーション",
      description:
        "認証とアイデンティティ管理にAuth0を利用するソフトウェア。Auth0は、シングルページ、通常のWeb、ネイティブ、およびマシン間アプリケーションをサポートしています。"
    },
    {
      term: "攻撃保護",
      description:
        "Auth0が提供する攻撃の検出と軽減のための機能。ブルートフォース保護、疑わしいIPスロットリング、漏洩パスワード検出、ボット検出、適応型多要素認証が含まれます。"
    },
    {
      term: "オーディエンス",
      description:
        "発行されたトークンのオーディエンスの一意の識別子で、JSON Web Token内ではaudクレームとして識別されます。オーディエンス値は、IDトークンの場合はアプリケーション（クライアントID）、アクセストークンの場合は呼び出されるAPI（API識別子）のいずれかです。Auth0では、アクセストークンのリクエストで送信されるオーディエンス値によって、そのトークンが不透明形式またはJWT形式で返されるかが決まります。"
    },
    {
      term: "Auth0 Dashboard",
      description:
        "Auth0の主要な管理者インターフェース。アプリケーションやAPIを登録し、ユーザーストアや他のアイデンティティプロバイダーに接続し、Auth0サービスを設定できます。"
    },
    {
      term: "認証デバイス",
      description:
        "クライアント起動バックチャネル認証フローにおいて、ユーザーが認証を行い同意を付与するデバイス。"
    },
    {
      term: "認証サーバー",
      description:
        "ユーザーのアイデンティティを確認または拒否するサーバー。認証サーバーは、ユーザーが利用できるアクションやリソースを制限しません（ただし、この目的のためのコンテキストを提供することはできます）。"
    },
    {
      term: "認可コード",
      description:
        "認可サーバーによって生成され、認可レスポンスの一部としてアプリケーションに返されるランダムな文字列。認可コードは比較的短命で、認可コードフロー（Proof Key for Code Exchange（PKCE）の有無にかかわらず）を使用する際に、トークンエンドポイントでアクセストークンと交換されます。"
    },
    {
      term: "認可フロー",
      description:
        "OAuth 2.0で概説されている認可グラントの別名。認可フローは、リソース（アプリケーションまたはAPI）がリクエスト者にアクセスを付与するために使用するワークフローです。技術のタイプとリクエスト者のタイプに基づいて、リソース所有者は認可コードフロー、PKCE、ROPG、インプリシット、またはクライアントクレデンシャルを使用できます。"
    },
    {
      term: "認可サーバー",
      description:
        "ユーザーのアクセスの境界を定義するのに貢献する集中型サーバー。たとえば、認可サーバーは、ユーザーが利用できるデータ、タスク、機能を制御できます。認可サーバーはユーザーを認証しません。ユーザーのアイデンティティを検証するのは認証サーバーの役割です。"
    },
    {
      term: "悪意のある行為者",
      description:
        "脅威行為者とも呼ばれます。害を与える意図を持ってビジネスや環境に脅威をもたらすエンティティ（個人またはグループ）。害は、データセンターへの侵入から盗まれた認証情報を使用したシステムへのハッキングまで、物理的またはサイバー上の損害を構成する可能性があります。"
    },
    {
      term: "ベータ",
      description:
        "参照される機能または動作がサブスクライバーに提供される製品リリース段階。GAリリース前に最終的なフィードバックを提供しながら、新しい製品機能を探索し採用する時間を与えます。機能はコード完成しており、安定しており、さまざまなシナリオで有用であり、GAリリースの品質期待を満たすか、ほぼ満たすと考えられています。ベータリリースはプライベートまたはパブリックの場合があります。"
    },
    {
      term: "ユーザーのブロック/ブロック解除",
      description:
        "リクエスト者のリソースへのアクセスを削除または復元すること。Auth0の攻撃保護スイートの機能を指します。各サービスはログイン/サインアップの傾向を評価し、疑わしいアクティビティに関連するIPアドレスをブロックします。"
    },
    {
      term: "ボット検出",
      description:
        "Auth0がログインプロセス中にCAPTCHAを有効にすることで、疑わしいボットトラフィックをブロックする攻撃保護の形式。"
    },
    {
      term: "漏洩パスワード検出",
      description:
        "サードパーティのWebサイトやアプリでのデータ漏洩で侵害されたユーザー名/パスワードの組み合わせをユーザーが使用している場合に、Auth0がユーザーに通知する攻撃保護の形式。"
    },
    {
      term: "破壊的変更",
      description:
        "Auth0の知る限り、Auth0プラットフォームと顧客アプリケーションの相互運用に障害を引き起こすAuth0プラットフォームへの変更。"
    },
    {
      term: "ブルートフォース保護",
      description:
        "単一のIPアドレスから発生し、単一のユーザーアカウントを標的とするブルートフォース攻撃から保護する攻撃保護の形式。"
    },
    {
      term: "コールバック",
      description:
        "認証後にAuth0がレスポンスを送信するURL。多くの場合、認証後にユーザーがリダイレクトされるURLと同じです。"
    },
    {
      term: "クレーム",
      description:
        "セキュリティトークンにパッケージ化された属性で、トークンのプロバイダーがエンティティについて行っている主張を表します。"
    },
    {
      term: "クライアントID",
      description:
        "登録後にアプリケーションに割り当てられる識別値。この値は他のサードパーティサービスと組み合わせて使用され、Auth0 Dashboard > アプリケーション設定で確認できます。"
    },
    {
      term: "クライアントシークレット",
      description:
        "クライアント（アプリケーション）が認可サーバーで認証するために使用するシークレット。クライアントと認可サーバーのみが知っている必要があり、推測できないように十分にランダムである必要があります。"
    },
    {
      term: "機密クライアント",
      description:
        "OAuth 2.0プロトコルによると、クライアント（アプリケーション）は機密またはパブリックのいずれかに分類できます。機密クライアントは認証情報を安全に保持でき、そのためには信頼できるバックエンドサーバーが必要です。トークンエンドポイントを呼び出す際にクライアントIDとシークレットを指定することで、認証を必要とするグラントタイプを使用できます。"
    },
    {
      term: "混乱した代理人",
      description:
        "攻撃者がクライアントまたはサービスを騙して、自分の代わりにアクションを実行させる状況。"
    },
    {
      term: "接続",
      description:
        "Auth0とアプリケーションのユーザーソースとの関係。例には、アイデンティティプロバイダー、パスワードレス認証方法、またはユーザーデータベースが含まれます。"
    },
    {
      term: "消費デバイス",
      description:
        "クライアント起動バックチャネル認証フローにおいて、ユーザーがサービスを利用するのを支援するデバイス。"
    },
    {
      term: "カスタムドメイン",
      description:
        "専用またはバニティ名を持つサードパーティドメイン。CNAMEとも呼ばれます。"
    },
    {
      term: "非推奨",
      description:
        "参照される機能または動作が新規サブスクライバーに対してサポートされておらず、積極的に強化されておらず、最小限のメンテナンスのみが行われていることを示す製品リリース段階。"
    },
    {
      term: "デジタルアイデンティティ",
      description:
        "特定のアプリケーションによって提供される機能のコンテキストにおいて、特定のユーザーを定義する属性のセット。"
    },
    {
      term: "デジタル署名",
      description:
        "トークン内のビットを改ざんから保護する暗号化された文字列。ビットが変更または改ざんされた場合、署名は検証できなくなり、拒否されます。"
    },
    {
      term: "ディレクトリ",
      description:
        "ユーザーの集中リポジトリ（最もよく知られているのはActive Directory）。認証情報と属性を集中管理し、各アプリケーションが独自のローカルアイデンティティ設定を持つ必要をなくします。"
    },
    {
      term: "早期アクセス",
      description:
        "参照される機能または動作が、テストとフィードバックの提供のために限られた数のサブスクライバーまたは顧客開発パートナー（CDP）に提供される製品リリース段階。"
    },
    {
      term: "End of Life",
      description:
        "参照される機能または動作がプラットフォームから削除されたことを示す製品リリースステージ。継続して使用するとエラーが発生する可能性があります。"
    },
    {
      term: "End of Life Date",
      description:
        "機能または動作へのアクセスがプラットフォームから削除される日付。End of Life Dateはプランタイプによって異なる場合があります。"
    },
    {
      term: "Fine-grained Authorization (FGA)",
      description:
        "アプリケーション内の特定のオブジェクトまたはリソースへのアクセスを個々のユーザーに付与するAuth0のSaaS製品。"
    },
    {
      term: "Flow",
      description:
        "Actionsを使用して拡張できるプロセス。各Flowは1つ以上のTriggerで構成され、Auth0ジャーニーの単一ポイントにおいて情報が移動する論理パイプラインを表します。"
    },
    {
      term: "General Availability",
      description:
        "参照される機能または動作が完全に機能し、すべてのサブスクライバーが本番環境で使用できる製品リリースステージ。"
    },
    {
      term: "Group",
      description:
        "1人以上のユーザーのセット。Auth0 Authorization Extensionでは、グループを使用して複数のユーザーに一度にアクセスを付与します。"
    },
    {
      term: "ID Token",
      description:
        "リソースへのアクセスではなく、クライアント自体のための認証情報。クライアントが解析および検証できる固定フォーマットを持ちます。"
    },
    {
      term: "Identity Provider (IdP)",
      description:
        "デジタルアイデンティティを保存および管理するサービス。Auth0は信頼されたソーシャル、エンタープライズ、および法的IdP（アイデンティティプロバイダー）をサポートしています。"
    },
    {
      term: "JSON Web Token (JWT)",
      description:
        "2つの当事者間でクレームを安全に表現するためのオープンな業界標準RFC 7519メソッド。Auth0では、IDトークンは常にJWT形式で返され、アクセストークンも多くの場合JWT形式です。"
    },
    {
      term: "Localization",
      description:
        "New Universal Loginエクスペリエンスをサポートされている言語でレンダリングする機能。"
    },
    {
      term: "Lock",
      description:
        "ユーザーを認証するためのAuth0のUIウィジェット。そのまま使用でき、Classic Universal Loginエクスペリエンスのデフォルトの画面となります。"
    },
    {
      term: "Management API",
      description:
        "Auth0サービスを管理し、管理タスクをプログラムで実行するためのAuth0のAPI。"
    },
    {
      term: "Metadata",
      description:
        "設定やプロファイル設定など、ユーザーが更新できる情報。メタデータはIDトークンに追加され、ユーザープロファイルに保存できます。"
    },
    {
      term: "Migration",
      description:
        "顧客が特定の機能または動作から移行するプロセス。移行は非推奨ステージ中に行う必要があります。"
    },
    {
      term: "Multi-factor authentication (MFA)",
      description:
        "複数の要素を考慮する認証プロセス。通常、最初の要素はユーザー名/パスワードで、2番目はメール/SMS経由のコードまたはリンク、またはアプリ経由のOTPです。"
    },
    {
      term: "Nonce",
      description:
        "認証プロトコルで発行される任意の（多くの場合ランダムまたは疑似ランダムな）数値で、リプレイ攻撃の検出と軽減に役立ちます。"
    },
    {
      term: "OAuth 2.0",
      description:
        "認可プロトコルとワークフローを定義する認可フレームワーク。OAuth 2.0は、ロール、認可グラント、認可リクエストとレスポンス、およびトークン処理を定義します。"
    },
    {
      term: "OpenID",
      description:
        "ログイン情報を収集または保存することなく、アプリケーションがユーザーが本人であることを確認できる認証のオープン標準。"
    },
    {
      term: "Organizations",
      description:
        "B2B顧客がエンドユーザーを分類し、特定のロール、ログインエクスペリエンス、およびリソースへのアクセスを定義できるAuth0製品。"
    },
    {
      term: "Passwordless",
      description:
        "最初の要素がパスワードではない認証形式。代わりに、メールまたはSMSで受信するワンタイムパスワード、プッシュ通知、または生体認証センサーを使用できます。"
    },
    {
      term: "Perimeter",
      description:
        "ディレクトリ、そのすべてのユーザー、およびディレクトリを使用するすべてのアプリケーションを包含する境界のセット。"
    },
    {
      term: "Product Release Stages",
      description:
        "Auth0が製品機能をステージング、リリース、および廃止する方法を説明するフェーズ。"
    },
    {
      term: "Public Client",
      description:
        "OAuth 2.0プロトコルによると、クライアントは機密またはパブリックのいずれかです。パブリッククライアントは認証情報を安全に保持できないため、クライアントシークレットの使用を必要としないグラントタイプのみを使用する必要があります。"
    },
    {
      term: "Raw Credential",
      description:
        "ユーザーとリソース間で合意された共有シークレットまたは情報のセットで、リソースがユーザーのアイデンティティを検証できるようにします。"
    },
    {
      term: "Refresh Token",
      description:
        "更新されたアクセストークンを取得するために使用できる特別な種類のトークン。ユーザーに再度ログインを強制することなく、有効期限切れのアクセストークンを更新するのに役立ちます。"
    },
    {
      term: "Refresh Token Rotation",
      description:
        "脆弱性を最小限に抑えるためにリフレッシュトークンを頻繁に置き換える戦略。各交換では新しいリフレッシュトークンも返されます。"
    },
    {
      term: "Relying Party",
      description:
        "ユーザーを認証するためにサードパーティのIdP（アイデンティティプロバイダー）に依存するエンティティ（サービスやアプリケーションなど）。"
    },
    {
      term: "Resource Owner",
      description:
        "保護されたリソースへのアクセスを許可できるエンティティ（ユーザーやアプリケーションなど）。"
    },
    {
      term: "Resource Server",
      description:
        "保護されたリソースをホストするサーバー。リソースサーバーは保護されたリソースリクエストを受け入れ、応答します。"
    },
    {
      term: "Role",
      description:
        "ユーザーに割り当てられるユーザーアイデンティティの側面で、システムへのアクセスレベルを示します。"
    },
    {
      term: "Scope",
      description:
        "アプリケーションが実行を許可される特定のアクション、またはユーザーに代わってリクエストできる情報を定義するメカニズム。"
    },
    {
      term: "Security Assertion Markup Language (SAML)",
      description:
        "2つの当事者がパスワードを使用せずに認証情報を交換できるXMLベースの標準化されたプロトコル。"
    },
    {
      term: "Security Token",
      description:
        "ユーザーが正常に認証されたことを証明するために使用されるデジタル署名されたアーティファクト。"
    },
    {
      term: "Session Cookie",
      description:
        "受信しているトークンが署名され、有効であり、信頼できるソースから来ていることを確認した後にミドルウェアが発行するエンティティ。"
    },
    {
      term: "Shadow Account",
      description:
        "リモートアプリケーションへのアクセスが必要な場合に、ローカルディレクトリからリモートディレクトリに個別にユーザーを手動でプロビジョニングする、維持が困難な慣行。"
    },
    {
      term: "Signing Algorithm",
      description:
        "トークンが改ざんされていないことを確認するためにトークンにデジタル署名するために使用されるハッシュアルゴリズム。"
    },
    {
      term: "Single Sign-On (SSO)",
      description:
        "ユーザーが1つのアプリケーションにログインした後、他のアプリケーションにも自動的にログインするサービス。シングルログアウトは逆に同様に機能します。"
    },
    {
      term: "Subscription",
      description:
        "各テナントで利用可能な機能とクォータを定義する契約。"
    },
    {
      term: "Suspicious IP Throttling",
      description:
        "単一のIPアドレスから多数のアカウントを標的とする疑わしいログインからテナントを保護する攻撃保護の形式。"
    },
    {
      term: "Tenant",
      description:
        "単一のソフトウェアインスタンスへの特定の権限を持つ共通アクセスを共有する、論理的に分離されたユーザーグループ。"
    },
    {
      term: "Token Endpoint",
      description:
        "トークンをプログラムでリクエストするために使用される認可サーバー上のエンドポイント。"
    },
    {
      term: "Trigger",
      description:
        "ユーザーのログインなどの特定の操作が実行時に発生したときに、Actionを自動的に呼び出すイベント。"
    },
    {
      term: "Trust",
      description:
        "リソースがIdP（アイデンティティプロバイダー）または認証局を信頼するのは、そのリソースが認証局がユーザーについて述べることを信じる意思がある場合です。"
    },
    {
      term: "Universal Login",
      description:
        "認可サーバーの主要機能である認証フローのAuth0実装。"
    },
    {
      term: "Web Service Federation (WS-Fed)",
      description:
        "WS-Trustを使用して、システム、ドメイン、およびIdP（アイデンティティプロバイダー）間で確立された信頼関係に基づいてユーザーIDを管理するためのプロトコル。主にMicrosoft製品で使用されます。"
    }
  ]

  const A_TO_Z = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  )
  const norm = (s) => s.normalize("NFKD").toLowerCase().trim()

  const useQueryParamState = (key, initial = "") => {
    const [value, setValue] = useState(() => {
      if (typeof window === "undefined") return initial
      const url = new URL(window.location.href)
      return url.searchParams.get(key) ?? initial
    })

    useEffect(() => {
      if (typeof window === "undefined") return
      const url = new URL(window.location.href)
      if (value) url.searchParams.set(key, value)
      else url.searchParams.delete(key)
      window.history.replaceState({}, "", url.toString())
    }, [key, value])

    return [value, setValue]
  }

  const highlight = (text, query) => {
    if (!query) return text
    const i = norm(text).indexOf(norm(query))
    if (i < 0) return text
    const end = i + query.length
    return (
      <>
        {text.slice(0, i)}
        <mark>{text.slice(i, end)}</mark>
        {text.slice(end)}
      </>
    )
  }

  const [term, setTerm] = useQueryParamState("term", "")
  const groups = useMemo(() => {
    const filtered = term
      ? GLOSSARY.filter((g) => norm(g.term).includes(norm(term)))
      : GLOSSARY

    const map = new Map()
    for (const item of filtered.sort((a, b) => a.term.localeCompare(b.term))) {
      const key = (item.term[0] || "").toUpperCase()
      map.set(key, [...(map.get(key) || []), item])
    }
    return map
  }, [term])

  const letterRefs = useRef({})
  const handleJump = (letter) => {
    const el = letterRefs.current[letter]
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className='mx-auto max-w-5xl py-10 text-gray-900 dark:text-gray-100'>
      {/* Search */}
      <div className='mb-6'>
        <div className='relative'>
          <span className='pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400'>
            <svg
              width='18'
              height='18'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
            >
              <circle cx='11' cy='11' r='8'></circle>
              <line x1='21' y1='21' x2='16.65' y2='16.65'></line>
            </svg>
          </span>
          <input
            id='search-input-control'
            type='text'
            placeholder='名前で検索'
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className='w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black pl-10 pr-4 py-3 outline-none focus:border-indigo-500 dark:focus:border-indigo-400 text-gray-900 dark:text-gray-100'
          />
        </div>
      </div>

      {/* A–Z index */}
      <nav className='mb-8 flex flex-wrap gap-3'>
        {A_TO_Z.map((letter) => {
          const enabled = groups.has(letter)
          return (
            <button
              key={letter}
              onClick={() => enabled && handleJump(letter)}
              disabled={!enabled}
              className={`text-lg ${
                enabled
                  ? "text-indigo-600 dark:text-indigo-300 hover:text-black dark:hover:text-white"
                  : "text-gray-400 dark:text-gray-600 cursor-not-allowed"
              }`}
              aria-label={`${letter}へジャンプ`}
            >
              {letter}
            </button>
          )
        })}
      </nav>

      {/* Groups */}
      <section>
        {A_TO_Z.filter((L) => groups.has(L)).map((letter) => {
          const items = groups.get(letter)
          return (
            <section key={letter} className='mb-10'>
              <div className='flex items-end gap-1'>
                <h2
                  id={letter}
                  ref={(el) => (letterRefs.current[letter] = el)}
                  className='text-3xl font-semibold glossary_h2'
                >
                  {letter}
                </h2>
                <div className='flex-1 border-b-2 border-[#3F59E4]' />
              </div>

              <ul className='mt-6 space-y-6 glossary_list'>
                {items.map((it) => (
                  <li key={it.term} className='scroll-mt-24'>
                    <h3
                      id={norm(it.term)}
                      className='text-xl font-medium text-gray-900 dark:text-gray-100 glossary_h3'
                    >
                      {it.term}
                    </h3>
                    <p className='mt-1 text-gray-700 dark:text-gray-300'>
                      {highlight(it.description, term)}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          )
        })}

        {groups.size === 0 && (
          <p className='text-gray-500 dark:text-gray-400'>
            「{term}」に一致する結果が見つかりませんでした。別の用語をお試しください。
          </p>
        )}
      </section>
    </div>
  )
}

export const GlossaryFR = () => {
  const GLOSSARY = [
    {
      term: "サブスクリプション",
      description:
        "各テナントに割り当てられる機能とクォータを定義する契約。Auth0は、さまざまな開発者や組織のニーズに対応するため、複数のサブスクリプションレベルを提供しています。"
    },
    {
      term: "早期アクセス",
      description:
        "特定の機能や動作が限られた数のサブスクライバーまたはカスタマー開発パートナー（CDP）に提供され、試用とフィードバックの提供が可能になる製品リリースフェーズ。この段階では、機能はまだ完成していませんが、テストを行うのに十分な完成度に達しています。"
    },
    {
      term: "脅威アクター",
      description:
        "サイバー脅威の実行者とも呼ばれる個人またはグループ。企業や環境に対して脅威をもたらし、損害を与える意図を持つエンティティです。この損害は物理的またはデジタルなものであり、データセンターへの侵入から盗まれた認証情報を使用したシステムへの侵害まで多岐にわたります。"
    },
    {
      term: "Actions",
      description:
        "Auth0ランタイムの特定のタイミングで実行される、テナント固有のバージョン管理されたセキュアなNode.js関数。Actionsは、カスタムロジックを使用してAuth0の機能をカスタマイズおよび拡張するために使用されます。"
    },
    {
      term: "署名アルゴリズム",
      description:
        "トークンにデジタル署名を行い、脅威アクターによって改ざんされていないことを保証するために使用されるハッシュアルゴリズム。"
    },
    {
      term: "認証デバイス",
      description:
        "クライアント主導のバックチャネル認証フローにおける認証デバイス。"
    },
    {
      term: "消費デバイス",
      description:
        "クライアント主導のバックチャネル認証フローにおいて、ユーザーがサービスを利用するのを支援するデバイス。"
    },
    {
      term: "アプリケーション",
      description:
        "認証とアイデンティティ管理にAuth0を利用するソフトウェア。Auth0は、従来のWebアプリケーション、ネイティブアプリケーション、マシン間通信アプリケーションをサポートしています。"
    },
    {
      term: "アカウントリンク",
      description:
        "複数のプラットフォームにわたるユーザーアカウントを関連付けることで、ユーザーが一度認証情報を提供するだけで複数のリソースやアプリケーションにアクセスできるようにすること。"
    },
    {
      term: "オーディエンス",
      description:
        "発行されたトークンの対象者を示す一意の識別子で、JSON Web Token内では**aud**クレームとして定義されます。オーディエンス値は、IDトークンの場合はアプリケーション（クライアントID）、アクセストークンの場合は呼び出されるAPI（`API識別子`）です。Auth0では、アクセストークンリクエストで送信されるオーディエンス値によって、そのトークンが不透明形式またはJWT形式で返されるかが決まります。"
    },
    {
      term: "Auth0 Dashboard",
      description:
        "Auth0の主要な管理インターフェースで、アプリケーションやAPIの登録、ユーザーストアや他のアイデンティティプロバイダーへの接続、Auth0サービスの設定を行うことができます。"
    },
    {
      term: "多要素認証（MFA）",
      description:
        "複数の要素を考慮する認証プロセス。通常、Auth0では第1要素はユーザー名とパスワードの交換であり、第2要素はメールまたはSMSによるコードまたはリンク、AuthyやGoogle Authenticatorなどのアプリケーションを使用したワンタイムパスワード、またはGuardianやDuoなどの電話アプリケーションを使用したプッシュ通知です。複数の要素を使用することで、悪意のある者がいずれかの要素（パスワードや電話の盗難など）を入手した場合でも、アカウントのセキュリティを維持できます。"
    },
    {
      term: "アダプティブ多要素認証（MFA）",
      description:
        "ログイン試行が低信頼度のログインと判断された場合にのみユーザーに対してトリガーされる多要素認証（MFA）。アダプティブMFAを使用すると、Auth0は必要な場合にのみ多要素認証をトリガーし、脅威アクターに対して摩擦を追加しながら、正当なユーザーのログイン体験は変更しません。"
    },
    {
      term: "シングルサインオン（SSO）",
      description:
        "ユーザーが1つのアプリケーションにログインした後、使用しているプラットフォーム、テクノロジー、ドメインに関係なく、他のアプリケーションに自動的にログインするサービス。ユーザーは一度だけログインします（この機能名の由来）。また、シングルログアウト（SLO）とは、ユーザーが1つのアプリケーションからログアウトした後、ログインしていたすべてのアプリケーションまたはサービスからログアウトすることを指します。SSOとSLOは、セッションの使用によって実現されます。"
    },
    {
      term: "きめ細かい認可（FGA）",
      description:
        "アプリケーション内の特定のオブジェクトやリソースへの個別ユーザーのアクセスを可能にするAuth0のSaaS製品。"
    },
    {
      term: "ベータ",
      description:
        "参照される機能や動作がサブスクライバーに提供される製品リリースフェーズ。これにより、サブスクライバーは新しい製品機能を探索および採用でき、一般提供（GA）前に最終的なフィードバックを提供できます。機能は完全に動作し、安定しており、さまざまなコンテキストに適応可能で、一般提供バージョンの品質基準を満たしているか、それに近いと見なされます。ベータ版は、定義された数のサブスクライバーに制限される（プライベート）場合と、すべてのサブスクライバーに公開される（パブリック）場合があります。"
    },
    {
      term: "ユーザーのブロック/ブロック解除",
      description:
        "リクエスト元のリソースへのアクセスを削除または復元すること。Auth0の攻撃保護スイートの機能を指します：侵害されたパスワードの検出、ブルートフォース攻撃からの保護、疑わしいIPアドレスの制限。各サービスはログイン/サインアップの傾向を評価し、疑わしいアクティビティに関連するIPアドレスをブロックします。"
    },
    {
      term: "破壊的変更",
      description:
        "Auth0の認識において、Auth0プラットフォームとクライアントアプリケーション間の相互運用性に障害を引き起こすAuth0プラットフォームの変更。"
    },
    {
      term: "コンフィデンシャルクライアント",
      description:
        "OAuth 2.0プロトコルによれば、クライアント（アプリケーション）は、認証情報（クライアント識別子やシークレットなど）を安全に保持できるかどうかに応じて、コンフィデンシャルまたはパブリックに分類されます。コンフィデンシャルクライアントは、認証情報を未承認の第三者に公開することなく安全に保持でき、そのためには信頼できるバックエンドサーバーが必要です。トークンエンドポイントを呼び出す際にクライアントIDとシークレットを指定して認証を行う必要がある認可タイプを使用でき、対称または非対称に署名されたトークンを発行されることができます。"
    },
    {
      term: "パブリッククライアント",
      description:
        "OAuth 2.0プロトコルによれば、クライアント（アプリケーション）は、認証情報（クライアントIDやシークレットなど）を安全に保持できるかどうかに応じて、コンフィデンシャルまたはパブリックに分類されます。パブリッククライアントは認証情報を安全に保持できないため、クライアントシークレットの使用を必要としない認可タイプのみを使用する必要があります。発行されるIDトークンは、秘密鍵（RS256）を使用して非対称に署名され、トークンの署名に使用された秘密鍵に対応する公開鍵を使用して検証される必要があります。"
    },
    {
      term: "認可コード",
      description:
        "認可サーバーによって生成され、認可レスポンスの一部としてアプリケーションに返されるランダムな文字列。認可コードは比較的短い有効期間を持ち、認可コードフローを使用する際に、Proof Key for Code Exchange (PKCE) の有無にかかわらず、トークンエンドポイントでアクセストークンと交換されます。"
    },
    {
      term: "シャドウアカウント",
      description:
        "リモートアプリケーションへのアクセスが必要な場合に、ローカルディレクトリからリモートディレクトリへユーザーを手動でプロビジョニングする（本質的には元のアカウントのコピー、つまりシャドウアカウントを作成する）という、保守が困難な手法。"
    },
    {
      term: "信頼",
      description:
        "リソースがIdP（アイデンティティプロバイダー）または認証局を信頼するとは、その認証局がユーザーについて述べることを信じる準備ができている状態を指します。"
    },
    {
      term: "Connection",
      description:
        "Auth0とアプリケーションのユーザーソース間の関係。例えば、IdP（アイデンティティプロバイダー）（GoogleやActive Directoryなど）、パスワードレス認証方式、またはユーザーデータベースなどが含まれます。"
    },
    {
      term: "Universal Login",
      description:
        "Auth0は認証フローを実装しており、これは認可サーバーの中核機能です。ユーザーが本人確認を行う必要があるたびに、アプリケーションはUniversal Loginにリダイレクトします。その後、Auth0はユーザーの本人確認を行うために必要な手順を実行します"
    },
    {
      term: "サポート終了日",
      description:
        "機能または動作へのアクセスがプラットフォームから削除される日付。サポート終了日はプランタイプによって異なる場合があります。"
    },
    {
      term: "トリガー",
      description:
        "ユーザーのログインなど、特定の操作が実行時に発生したときに自動的にActionを呼び出すイベント。一部のトリガーは同期的に実行され、関連するフローをブロックしますが、他のトリガーは非同期的に実行されます。"
    },
    {
      term: "クレーム",
      description:
        "セキュリティトークンに含まれる属性で、トークン発行者がエンティティについて主張する内容を表します。"
    },
    {
      term: "侵害されたパスワードの検出",
      description:
        "サードパーティのWebサイトやアプリケーションでのデータ漏洩により侵害されたユーザー名とパスワードの組み合わせをユーザーが使用している場合に、Auth0がユーザーに通知する攻撃保護の一形態。"
    },
    {
      term: "ボット検出",
      description:
        "ログインプロセス中にCAPTCHAを有効化することで、ボットによるものと疑われるトラフィックをAuth0がブロックする攻撃保護の一形態。"
    },
    {
      term: "一般提供",
      description:
        "参照される機能または動作が完全に機能し、本番環境での使用のためにすべてのサブスクライバー（価格レベルに応じて）が利用できる製品リリースフェーズ。既存の機能が新しいバージョンに置き換えられる場合、Auth0は非推奨ポリシーに従って後方互換性期間を保証し、お客様が指定された期間内に新しいバージョンに適応できるよう通知します。"
    },
    {
      term: "カスタムドメイン",
      description:
        "専門的な名前またはブランドを反映したサードパーティのドメイン。CNAMEとも呼ばれます。"
    },
    {
      term: "生の認証情報",
      description:
        "ユーザーの本人確認に使用される、ユーザーとリソース間で共有される秘密情報または合意された情報のセット。"
    },
    {
      term: "サポート終了",
      description:
        "参照される機能または動作がプラットフォームから削除されたことを示す製品リリースフェーズのステージ。機能または動作の継続使用はエラーを引き起こす可能性があります。移行期間中にオプトインしなかったテナントに対しては、新しい動作が自動的に有効化されます。"
    },
    {
      term: "フロー",
      description:
        "Actionsによって拡張できるプロセス。各フローは1つ以上のトリガーで構成され、Auth0のジャーニーの特定の時点で情報が移動する論理パイプラインを表します。"
    },
    {
      term: "認可フロー",
      description:
        "OAuth 2.0で説明されている認可グラントの別名。認可フローは、リソース（アプリケーションまたはAPI）がリクエスタにアクセスを許可するために使用する本番フローです。テクノロジーのタイプ（例：アプリケーションがクライアントシークレットを保存できるかどうか）とリクエスタのタイプに応じて、リソースオーナーは認可コードフロー、Proof Key for Code Exchange (PKCE)、リソースオーナーパスワード認証情報 (ROPC)、インプリシット、またはクライアント認証情報を使用できます。"
    },
    {
      term: "IdP（アイデンティティプロバイダー）",
      description:
        "デジタルアイデンティティを保存および管理するサービス。Auth0は、ソーシャル、エンタープライズ、および信頼できる法的機関のIdP（アイデンティティプロバイダー）をサポートしています。Auth0は、アプリケーションのIdP（アイデンティティプロバイダー）としても機能できます。"
    },
    {
      term: "グループ",
      description:
        "1人以上のユーザーの集合。Auth0 Authorization Extensionでは、グループを使用して複数のユーザーに一度にアクセスを許可します。"
    },
    {
      term: "クライアントID",
      description:
        "登録後にアプリケーションに割り当てられる識別値。この値は他のサードパーティサービスと連携して使用され、**Auth0 Dashboard** > **アプリケーション設定**に表示されます。"
    },
    {
      term: "デジタルアイデンティティ",
      description:
        "特定のアプリケーションが提供する機能のコンテキストにおいて、特定のユーザーを定義する属性のセット。"
    },
    {
      term: "アクセストークン",
      description:
        "アプリケーションがAPIにアクセスするために使用できる識別子。トークンの保有者がAPIへのアクセスを許可され、付与された権限によって定義された特定のアクションを実行できることをAPIに通知します。アクセストークンは任意の形式を取ることができますが、不透明な文字列とJSON Web Token (JWT) が2つの一般的なオプションです。HTTP認可ヘッダーでベアラー識別子としてAPIに渡す必要があります。"
    },
    {
      term: "リフレッシュトークン",
      description:
        "更新されたアクセストークンを取得するために使用できる特別なタイプのトークン。ユーザーに再度ログインを要求することなく、期限切れになるアクセストークンを更新するのに役立ちます。リフレッシュトークンを使用すると、リフレッシュトークンがブロックされるまで、いつでも新しいアクセストークンをリクエストできます。"
    },
    {
      term: "IDトークン",
      description:
        "リソースへのアクセスではなく、クライアント自体のために設計された識別子。クライアントが解析および検証できる固定形式を持ちます。"
    },
    {
      term: "セキュリティトークン",
      description:
        "ユーザーが正常に認証されたことを証明するために使用されるデジタル署名されたアーティファクト。"
    },
    {
      term: "JSON Web Token (JWT)",
      description:
        "2つの当事者間でクレームを安全に表現するための、業界標準RFC 7519に準拠したオープンな方式。Auth0では、IDトークンは常にJWT形式で返され、アクセストークンも通常同じ形式です。適切に形成されたJWTに含まれるクレームは、JWT.ioでデコードおよび表示できます。"
    },
    {
      term: "疑わしいIPアドレスの制限",
      description:
        "多数のアカウントを標的とする単一のIPアドレスからの疑わしいログインからテナントを保護するセキュリティ対策。"
    },
    {
      term: "ローカライゼーション",
      description:
        "新しいUniversal Loginのインターフェースをサポートされている言語のいずれかで表示する機能。"
    },
    {
      term: "テナント",
      description:
        "Auth0において、単一のソフトウェアインスタンスへの共通アクセスを共有し、特定の権限を持つ、論理的に分離されたユーザーのグループ。各テナントは分離されており、複数のテナントが同じマシン上で動作している場合でも、他のテナントがそのデータにアクセスすることはできません。「テナント」という用語は、一般的にマルチテナントソフトウェアアーキテクチャから借用されています。"
    },
    {
      term: "Lock",
      description:
        "Auth0によるユーザー認証のためのユーザーインターフェースウィジェット。すぐに使用でき、標準的なUniversal Login体験を提供します。Lockは動作と外観を軽くカスタマイズできますが、主な目的は使いやすさです。"
    },
    {
      term: "Management API",
      description:
        "Auth0サービスを管理し、管理タスクをプログラムで実行するためのAuth0のAPI。"
    },
    {
      term: "メタデータ",
      description:
        "ユーザー設定やプロフィール設定など、ユーザーが更新できる情報。メタデータはIDトークンに追加され、ユーザープロフィールに保存できます。"
    },
    {
      term: "移行",
      description:
        "クライアントが特定の機能や動作を廃止するプロセス。移行は、製品が非推奨となる製品リリースフェーズ中に行われるべきです。"
    },
    {
      term: "ノンス",
      description:
        "認証プロトコルで発行される任意の数値（多くの場合、ランダムまたは疑似ランダム）で、古い通信を使用したリプレイ攻撃の検出と軽減に役立ちます。つまり、ノンスは一度だけ発行されるため、攻撃者が異なるノンスでトランザクションを再生しようとすると、その不正なトランザクションをより簡単に検出できます。"
    },
    {
      term: "OAuth 2.0",
      description:
        "認可プロトコルとフローを定義する認可アプリケーションフレームワーク。OAuth 2.0は、役割、認可グラント（またはフロー）、認可リクエストとレスポンス、およびトークン管理を定義します。ユーザーのアイデンティティを検証するためのOpenID Connect (OIDC)プロトコルは、OAuth 2.0を拡張したものです。"
    },
    {
      term: "非推奨",
      description:
        "参照される機能や動作が新規サブスクライバーに対してサポートされなくなり、積極的な改善が行われず、最小限のメンテナンスのみが行われることを示す製品リリースフェーズ。非推奨時点でその機能や動作を使用しているテナントは、引き続きアクセスできます。"
    },
    {
      term: "OpenID",
      description:
        "アプリケーションがユーザーのログイン情報を収集、保存、管理する責任を負うことなく、ユーザーが本人であることを確認できるオープンな認証標準。"
    },
    {
      term: "Organizations",
      description:
        "企業間電子商取引（B2B）の顧客がエンドユーザーを分類し、特定のロール、ログイン体験、リソースへのアクセスを定義できるようにするAuth0製品。"
    },
    {
      term: "リライングパーティ",
      description:
        "ユーザーを認証するためにサードパーティのIdP（アイデンティティプロバイダー）に依存するエンティティ（サービスやアプリケーションなど）。"
    },
    {
      term: "境界",
      description:
        "ディレクトリ、そのすべてのユーザー、およびそのディレクトリを使用するすべてのアプリケーションを包含する境界のセット。一部の実装では、この境界は物理的な場所です。他の実装では、VPNで接続されたネットワークまたはデバイスのセットです。"
    },
    {
      term: "パーミッション",
      description:
        "アプリケーションが実行を許可されるアクション、またはユーザーに代わってリクエストできる情報を定義するメカニズム。多くの場合、アプリケーションはオンラインリソースにすでに作成されている情報を使用したいと考えます。この場合、アプリケーションはユーザーに代わってその情報へのアクセス許可をリクエストする必要があります。アプリケーションが認可サーバーを通じてリソースへのアクセス許可をリクエストする際、必要なアクセスを指定するためにPermissionsパラメータを使用し、認可サーバーは実際に付与されたアクセスを応答するために同じパラメータを使用します。"
    },
    {
      term: "製品リリースフェーズ",
      description:
        "Auth0が製品機能を実装、リリース、廃止する方法を説明するフェーズ。製品機能はすべてのリリースフェーズを経ない場合があり、各フェーズの期間は機能の許可と範囲によって異なります。"
    },
    {
      term: "トークンエンドポイント",
      description:
        "プログラムでトークンをリクエストするために使用される認可サーバー上のエンドポイント。"
    },
    {
      term: "リソースオーナー",
      description:
        "保護されたリソースへのアクセスを許可できるエンティティ（ユーザーやアプリケーションなど）。"
    },
    {
      term: "攻撃保護",
      description:
        "Auth0が提供する攻撃を検出および軽減する機能。ブルートフォース攻撃保護、疑わしいIPの制限、侵害されたパスワードの検出、ボット検出、アダプティブMFA（多要素認証）などが含まれます。"
    },
    {
      term: "ブルートフォース攻撃保護",
      description:
        "単一のIPアドレスから発生し、単一のユーザーアカウントを標的とするブルートフォース攻撃に対する保護の形態。"
    },
    {
      term: "コールバック",
      description:
        "認証後にAuth0が応答を送信するURL。多くの場合、認証後にユーザーがリダイレクトされる同じURLです。"
    },
    {
      term: "ディレクトリ",
      description:
        "ユーザーの一元化されたリポジトリ（最もよく知られているのはActive Directory）で、認証情報と属性を一元化し、各アプリケーションが独自のローカルアイデンティティ設定とユーザーグループを持つ必要をなくします。同じユーザーディレクトリを使用するすべてのアプリケーションでシングルサインオンを可能にします。"
    },
    {
      term: "ロール",
      description:
        "システムへのアクセスレベルを示すためにユーザーに割り当てられる、ユーザーのアイデンティティの側面。ロールは本質的にパーミッションのコレクションです。"
    },
    {
      term: "リフレッシュトークンローテーション",
      description:
        "脆弱性を最小限に抑えるためにリフレッシュトークンを頻繁に置き換える戦略。リフレッシュトークンローテーションでは、アプリケーションがリフレッシュトークンを交換して新しいアクセストークンを取得するたびに、Auth0は新しいリフレッシュトークンも返します。"
    },
    {
      term: "パスワードレス",
      description:
        "第一要素がパスワードではない認証形式。メールやSMSで受信するワンタイムパスワード、プッシュ通知、または生体認証センサーなどがあります。パスワードレス認証はワンタイムパスワードを使用するため、従来のユーザー名/パスワードログインと比較して、ユーザーは典型的なパスワード攻撃（辞書攻撃やクレデンシャルスタッフィングなど）にさらされにくくなります。"
    },
    {
      term: "クライアントシークレット",
      description:
        "クライアント（アプリケーション）が認可サーバーに対して認証するために使用するシークレット。クライアントと認可サーバーのみが知っている必要があり、推測されないように十分にランダムである必要があります。"
    },
    {
      term: "Security Assertion Markup Language (SAML)",
      description:
        "パスワードを使用せずに2つの当事者が認証情報を交換できるようにする、XMLベースの標準化されたプロトコル。"
    },
    {
      term: "認証サーバー",
      description:
        "ユーザーの身元を確認または拒否するサーバー。認証サーバーは、ユーザーが利用できるアクションやリソースを制限しません（ただし、その目的のためのコンテキストを提供することはあります）。"
    },
    {
      term: "認可サーバー：",
      description:
        "ユーザーのアクセス範囲を定義する集中型サーバー。たとえば、認可サーバーは、ユーザーがアクセスできるデータ、タスク、機能を制御できます。認可サーバーはユーザーを認証するためのものではありません。この役割は、ユーザーの身元を検証する認証サーバーが担います。"
    },
    {
      term: "リソースサーバー",
      description:
        "保護されたリソースをホストするサーバー。リソースサーバーは、保護されたリソースへのリクエストを処理し、応答します。"
    },
    {
      term: "デジタル署名",
      description:
        "トークンのビットを改ざんから保護する暗号化された文字列。ビットが変更または改変された場合、署名は検証できなくなり、拒否されます。"
    },
    {
      term: "セッショントークン",
      description:
        "仲介ソフトウェアが、受信したトークンが署名され、有効であり、信頼できるソース（IdP（アイデンティティプロバイダー））から発行されたことを確認した後に発行されるエンティティ。このエンティティは、IdP（アイデンティティプロバイダー）との認証が成功したことを表します。このトークンにより、トークンを使用したプロセスを繰り返す必要がなくなり、トークンが存在する限り、ユーザーは認証済みとみなされます。"
    },
    {
      term: "トークンセット",
      description:
        "GoogleやMicrosoftなど、ユーザーの認可された接続ごとに、Token Vaultはトークンセットと呼ばれる安全なコンテナを作成します。トークンセットには、ユーザーに代わって外部プロバイダーのAPIを呼び出すために必要なアクセストークンとリフレッシュトークンが含まれます。トークンセットは、Auth0認可サーバー上でアクセストークンとリフレッシュトークンを安全に保存します。"
    },
    {
      term: "なりすまし",
      description:
        "攻撃者がクライアントまたはサービスを説得して、自分の代わりにタスクを実行させるシナリオ。"
    },
    {
      term: "Web Service Federation (WS-Fed)",
      description:
        "システム、ドメイン、IdP（アイデンティティプロバイダー）間でユーザーのアイデンティティを管理するプロトコル。このプロトコルは、信頼を確立するためにWS-Trustに依存しており、主にMicrosoft製品で使用されます。フェデレーションメタデータを共有する方法に関するポリシーを定義します。開発者向け * [Developer Hub](https://developer.auth0.com/resources) * [コードサンプルとガイド](https://developer.auth0.com/resources/code-samples) * [ブログ記事](https://auth0.com/blog/developers/) * [動画](https://auth0.com/docs/videos) * [Identity Unlocked - ポッドキャスト](https://identityunlocked.auth0.com/public/49/Identity,-Unlocked.--bed7fada) * [Zero Indexニュースレター](https://developer.auth0.com/newsletter) ドキュメント * [記事](https://auth0.com/docs/articles) * [クイックスタート](https://auth0.com/docs/quickstarts) * [API](https://auth0.com/docs/api) * [SDKライブラリ](https://auth0.com/docs/libraries) * [ブログ](https://auth0.com/blog/) * [レポート](https://auth0.com/resources/ebooks) * [ウェビナー](https://auth0.com/resources/webinars) 参加する * [フォーラム](https://community.auth0.com/) * [イベント](https://developer.auth0.com/events) * [アンバサダープログラム](https://auth0.com/ambassador-program) * [Auth0リサーチプログラム](https://auth0.com/research-program) 企業情報 * [お客様事例](https://auth0.com/customers) * [コンプライアンス - プライバシーとセキュリティの確保](https://auth0.com/security) * [パートナー](https://auth0.com/partners) * [採用情報 採用中！](https://www.okta.com/company/careers/) * [Okta + Auth0](https://www.okta.com/okta-and-auth0/) サポートセンター * [コミュニティ](https://community.auth0.com/) * [サポート](https://support.auth0.com/) * [ヘルプ](https://community.auth0.com/c/help/6) * [よくある質問](https://community.auth0.com/c/faq/42) * [Auth0 Marketplace](https://marketplace.auth0.com) 学習 * [学ぶ](https://auth0.com/learn) * [IAM入門（CIAM）](https://auth0.com/intro-to-iam) * [ブログ](https://auth0.com/blog/) プラットフォーム * [アクセス管理](https://auth0.com/platform/access-management) * [拡張性](https://auth0.com/platform/extensibility) * [セキュリティ](https://auth0.com/platform/login-security) * [ユーザー管理](https://auth0.com/platform/user-management) * [認証](https://auth0.com/platform/authentication) 機能 * [Universal Login](https://auth0.com/features/universal-login) * [シングルサインオン](https://auth0.com/features/single-sign-on) * [多要素認証](https://auth0.com/features/multifactor-authentication) * [Actions](https://auth0.com/features/actions) * [マシン間通信](https://auth0.com/features/machine-to-machine) * [パスワードレス](https://auth0.com/features/passwordless) * [漏洩パスワード](https://auth0.com/features/breached-passwords) © 2025 Okta, Inc. All Rights Reserved. [ステータス](https://status.auth0.com) • [法的情報](https://www.okta.com/agreements/) • [プライバシー](https://auth0.com/privacy) • [利用規約](https://auth0.com/web-terms) • [プライバシーに関する選択](https://auth0.com/your-privacy-choices)<Frame>![](https://cdn.auth0.com/website/footer/ccpa.svg)</Frame> [ステータス](https://status.auth0.com) • [法的情報](https://www.okta.com/agreements/) • [プライバシー](https://auth0.com/privacy) • [利用規約](https://auth0.com/web-terms) • [プライバシーに関する選択](https://auth0.com/your-privacy-choices)<Frame>![](https://cdn.auth0.com/website/footer/ccpa.svg)</Frame>"
    }
  ]

  const A_TO_Z = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  )
  const norm = (s) => s.normalize("NFKD").toLowerCase().trim()

  const useQueryParamState = (key, initial = "") => {
    const [value, setValue] = useState(() => {
      if (typeof window === "undefined") return initial
      const url = new URL(window.location.href)
      return url.searchParams.get(key) ?? initial
    })

    useEffect(() => {
      if (typeof window === "undefined") return
      const url = new URL(window.location.href)
      if (value) url.searchParams.set(key, value)
      else url.searchParams.delete(key)
      window.history.replaceState({}, "", url.toString())
    }, [key, value])

    return [value, setValue]
  }

  const highlight = (text, query) => {
    if (!query) return text
    const i = norm(text).indexOf(norm(query))
    if (i < 0) return text
    const end = i + query.length
    return (
      <>
        {text.slice(0, i)}
        <mark>{text.slice(i, end)}</mark>
        {text.slice(end)}
      </>
    )
  }

  const [term, setTerm] = useQueryParamState("term", "")
  const groups = useMemo(() => {
    const filtered = term
      ? GLOSSARY.filter((g) => norm(g.term).includes(norm(term)))
      : GLOSSARY

    const map = new Map()
    for (const item of filtered.sort((a, b) => a.term.localeCompare(b.term))) {
      const key = (item.term[0] || "").toUpperCase()
      map.set(key, [...(map.get(key) || []), item])
    }
    return map
  }, [term])

  const letterRefs = useRef({})
  const handleJump = (letter) => {
    const el = letterRefs.current[letter]
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className='mx-auto max-w-5xl py-10 text-gray-900 dark:text-gray-100'>
      {/* Search */}
      <div className='mb-6'>
        <div className='relative'>
          <span className='pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400'>
            <svg
              width='18'
              height='18'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
            >
              <circle cx='11' cy='11' r='8'></circle>
              <line x1='21' y1='21' x2='16.65' y2='16.65'></line>
            </svg>
          </span>
          <input
            id='search-input-control'
            type='text'
            placeholder='名前で検索'
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className='w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black pl-10 pr-4 py-3 outline-none focus:border-indigo-500 dark:focus:border-indigo-400 text-gray-900 dark:text-gray-100'
          />
        </div>
      </div>

      {/* A–Z index */}
      <nav className='mb-8 flex flex-wrap gap-3'>
        {A_TO_Z.map((letter) => {
          const enabled = groups.has(letter)
          return (
            <button
              key={letter}
              onClick={() => enabled && handleJump(letter)}
              disabled={!enabled}
              className={`text-lg ${
                enabled
                  ? "text-indigo-600 dark:text-indigo-300 hover:text-black dark:hover:text-white"
                  : "text-gray-400 dark:text-gray-600 cursor-not-allowed"
              }`}
              aria-label={`${letter}へジャンプ`}
            >
              {letter}
            </button>
          )
        })}
      </nav>

      {/* Groups */}
      <section>
        {A_TO_Z.filter((L) => groups.has(L)).map((letter) => {
          const items = groups.get(letter)
          return (
            <section key={letter} className='mb-10'>
              <div className='flex items-end gap-1'>
                <h2
                  id={letter}
                  ref={(el) => (letterRefs.current[letter] = el)}
                  className='text-3xl font-semibold glossary_h2'
                >
                  {letter}
                </h2>
                <div className='flex-1 border-b-2 border-[#3F59E4]' />
              </div>

              <ul className='mt-6 space-y-6 glossary_list'>
                {items.map((it) => (
                  <li key={it.term} className='scroll-mt-24'>
                    <h3
                      id={norm(it.term)}
                      className='text-xl font-medium text-gray-900 dark:text-gray-100 glossary_h3'
                    >
                      {it.term}
                    </h3>
                    <p className='mt-1 text-gray-700 dark:text-gray-300'>
                      {highlight(it.description, term)}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          )
        })}

        {groups.size === 0 && (
          <p className='text-gray-500 dark:text-gray-400'>
            「{term}」に一致する結果が見つかりませんでした。別の用語で検索してください。
          </p>
        )}
      </section>
    </div>
  )
}

export const GlossaryJA = () => {
  const GLOSSARY = [
    {
      term: "Adaptive Multifactor Authentication",
      description:
        "ログイン試行の信頼性が低いと判断された場合にのみユーザーに対してトリガーされる多要素認証（MFA）。Auth0はAdaptive MFAを使用して、正当なユーザーのログイン体験を損なうことなく、不正アクセスに対してのみセキュリティを強化します。"
    },
    {
      term: "Auth0 Dashboard",
      description:
        "Auth0の主要な管理インターフェイスで、アプリケーションやAPIの登録、ユーザーストアや他のIDプロバイダーへの接続、Auth0サービスの設定を行うことができます。"
    },
    {
      term: "Fine-grained Authorization (FGA)",
      description:
        "個々のユーザーがアプリケーション内の特定のオブジェクトやリソースにアクセスできるようにするAuth0のSaaS製品。"
    },
    {
      term: "IDトークン",
      description:
        "リソースへのアクセスではなく、クライアント自体を対象とした認証情報。クライアントが解析および検証できる固定形式です。"
    },
    {
      term: "IDプロバイダー (IdP)",
      description:
        "デジタルIDを保存および管理するサービス。Auth0は、信頼できるソーシャルIDプロバイダー、エンタープライズIDプロバイダー、および法的IDプロバイダーをサポートしています。Auth0自体もアプリケーションのIDプロバイダーとして機能します。"
    },
    {
      term: "JSON Web Token (JWT)",
      description:
        "二者間でクレームを安全に表現するための、オープンかつ業界標準のRFC 7519方式。Auth0では、IDトークンは常にJWT形式で返され、アクセストークンも多くの場合JWT形式で返されます。JWT.ioで正しい形式のJWTをデコードして、クレームを表示できます。"
    },
    {
      term: "Lock",
      description:
        "ユーザーを認証するためのAuth0のUIウィジェット。そのまま使用でき、クラシックユニバーサルログイン体験のデフォルトUIです。Lockでは細かい動作や外観のオプションをカスタマイズできますが、その主な目的は使いやすさです。"
    },
    {
      term: "Management API",
      description:
        "Auth0サービスを管理し、プログラムによって管理タスクを実行するためのAuth0のAPI。"
    },
    {
      term: "Nonce",
      description:
        "認証プロトコルで発行される任意の数値（多くの場合、乱数または擬似乱数）で、古い通信を使用したリプレイ攻撃の検出と軽減に使用できます。nonceは1回しか使用されないため、攻撃者が別のnonceを使用してトランザクションを再実行しようとした場合、その不正なトランザクションをより簡単に検出できます。"
    },
    {
      term: "OAuth 2.0",
      description:
        "認可プロトコルとワークフローを定義する認可フレームワーク。OAuth 2.0は、ロール、認可グラント（またはワークフロー）、認可リクエストとレスポンス、およびトークン処理を定義します。ユーザーIDを検証するOpenID Connect（OIDC）プロトコルによって、OAuth 2.0を拡張できます。"
    },
    {
      term: "OpenID",
      description:
        "アプリケーションがユーザーのログイン情報を収集および保存することなく（したがって、ユーザーのログイン情報について責任を負わずに）、ユーザーが本人であることを確認できる認証用のオープン標準。"
    },
    {
      term: "Organization",
      description:
        "B2B顧客がエンドユーザーを分類し、特定のロール、ログイン体験、およびリソースへのアクセスを定義できるようにするAuth0製品。"
    },
    {
      term: "Security Assertion Markup Language (SAML)",
      description:
        "パスワードを使用せずに二者間で認証情報を交換できるXMLベースの標準化プロトコル。"
    },
    {
      term: "Tokenset",
      description:
        "GoogleやMicrosoftなどのユーザーの認可された接続ごとに、Token Vaultはトークンセットと呼ばれる安全なコンテナを作成します。トークンセットには、ユーザーに代わってその外部プロバイダーのAPIを呼び出すために必要なアクセストークンとリフレッシュトークンが含まれています。トークンセットは、Auth0認可サーバー上にアクセストークンとリフレッシュトークンを安全に保存します。"
    },
    {
      term: "Webサービスフェデレーション (WS-Fed)",
      description:
        "WS-Trustを使用して信頼が確立されているシステム、ドメイン、およびIDプロバイダーの間でユーザーIDを管理するためのプロトコル。このプロトコルは主にMicrosoft製品に使用され、フェデレーションメタデータの共有方法に関するポリシーを定義します。"
    },
    {
      term: "アカウントリンク",
      description:
        "認証情報を1回提供するだけで、ユーザーが複数のリソースやアプリケーションにアクセスできるように、複数のプラットフォーム間でユーザーアカウントを接続すること。"
    },
    {
      term: "アクション",
      description:
        "Auth0実行中の特定の時点で実行される、Node.jsで記述された安全な関数。これはテナント固有であり、バージョン管理されています。アクションは、カスタムロジックでAuth0の機能をカスタマイズおよび拡張するために使用されます。"
    },
    {
      term: "アクセストークン",
      description:
        "アプリケーションがAPIにアクセスするために使用できる認証情報。これは、トークンのベアラーがAPIにアクセスし、付与されたスコープで指定された特定のアクションを実行する許可を得ていることをAPIに通知します。アクセストークンは任意の形式にできますが、一般的な2つのオプションとして、不透明な文字列とJSON Webトークン（JWT）があります。これらは、HTTP認可ヘッダー内のBearer認証情報としてAPIに送信される必要があります。"
    },
    {
      term: "アプリケーション",
      description:
        "認証とID管理を行うためにAuth0に依存するソフトウェア。Auth0は、シングルページ、通常のWeb、ネイティブ、およびマシンツーマシンのアプリケーションをサポートしています。"
    },
    {
      term: "オーディエンス",
      description:
        "発行されたトークンに対するオーディエンスを表す一意の識別子で、JSON Webトークン内でaudクレームとして特定されたもの。オーディエンス値は、IDトークンの場合はアプリケーション（クライアントID）、アクセストークンの場合は呼び出されるAPI（API識別子）のいずれかです。Auth0では、アクセストークンのリクエストで送信されるオーディエンス値によって、トークンが不透明形式で返されるかJWT形式で返されるかが決まります。"
    },
    {
      term: "カスタムドメイン",
      description:
        "特殊な名前、またはバニティ名を持つサードパーティのドメイン。CNAMEとも呼ばれます。"
    },
    {
      term: "クライアントID",
      description:
        "登録後にアプリケーションに割り当てられる識別値。この値は他のサードパーティーサービスと組み合わせて使用され、Auth0 Dashboard > Application Settingsで確認できます。"
    },
    {
      term: "クライアントシークレット",
      description:
        "クライアント（アプリケーション）が認可サーバーに対して認証を行う際に使用するシークレット。これはクライアントと認可サーバーのみが知る値であり、推測されないよう十分にランダムである必要があります。"
    },
    {
      term: "クレーム",
      description:
        "セキュリティトークンに含まれる属性で、トークンの発行者がエンティティに関して主張する情報を表します。"
    },
    {
      term: "グループ",
      description:
        "1人以上のユーザーの集合。Auth0認可拡張機能では、グループを使用して複数のユーザーに一括でアクセス権を付与します。"
    },
    {
      term: "コールバック",
      description:
        "認証後にAuth0が応答を送信する先のURL。多くの場合、認証後にユーザーがリダイレクトされるURLと同じです。"
    },
    {
      term: "サブスクリプション",
      description:
        "各テナントで利用可能な機能や割り当てを定義する契約。Auth0には、さまざまな開発者や組織のニーズに対応するため、複数のサブスクリプションレベルが用意されています。"
    },
    {
      term: "サポート終了",
      description:
        "対象の機能または動作がプラットフォームから削除されることを示す製品リリース段階。その機能または動作を引き続き使用すると、エラーが発生する可能性があります。新しい動作は、移行期間中にオプトインしなかったテナントに対して自動的に有効化されます。"
    },
    {
      term: "サポート終了日",
      description:
        "機能または動作へのアクセスがプラットフォームから削除される日付。サポート終了日は、プランの種類によって異なる場合があります。"
    },
    {
      term: "シャドーアカウント",
      description:
        "リモートアプリケーションにアクセスする必要があるユーザーを、ローカルディレクトリからリモートディレクトリへ個別に手動でプロビジョニングする（実質的に元のアカウントのコピー、すなわちシャドーを作成する）、維持が困難な手法。"
    },
    {
      term: "シングルサインオン（SSO）",
      description:
        "ユーザーが1つのアプリケーションにログインすると、使用しているプラットフォーム、テクノロジー、ドメインに関係なく、他のアプリケーションにも自動的にログインできるようにするサービス。ユーザーは1回だけサインインします（これがこの機能名の由来です）。同様に、シングルログアウト（SLO）は、ユーザーが1つのアプリケーションからログアウトすると、ログインしていたすべてのアプリケーションまたはサービスからログアウトされる仕組みです。SSOとSLOはセッションを使用することで実現されます。"
    },
    {
      term: "スコープ",
      description:
        "アプリケーションが実行できる特定のアクション、またはユーザーに代わってアプリケーションが要求できる情報を定義するメカニズム。多くの場合、アプリケーションはオンラインリソース上に既に存在する情報を利用しようとします。そのためには、アプリケーションはユーザーに代わってこの情報にアクセスするための認可を求める必要があります。アプリが認可サーバー経由でリソースへのアクセス許可を要求する際、スコープパラメーターを使用して必要なアクセスを指定し、認可サーバーはスコープパラメーターを使用して実際に付与されたアクセスを応答します。"
    },
    {
      term: "セキュリティトークン",
      description:
        "ユーザーが正常に認証されたことを証明するために使用される、デジタル署名された成果物。"
    },
    {
      term: "セッションクッキー",
      description:
        "受信したトークンが署名済みで有効であり、信頼できるソース（IdP（アイデンティティプロバイダー））からのものであることをミドルウェアが確認した後に、ミドルウェアによって発行されるエンティティ。このエンティティは、IdP（アイデンティティプロバイダー）による認証が成功したという事実を表します。クッキーが存在する限りユーザーは認証済みとみなされるため、トークンを使用したこのプロセスを継続的に繰り返す必要がなくなります。"
    },
    {
      term: "ディレクトリ",
      description:
        "ユーザーの中央リポジトリ（最もよく知られているのはActive Directory）。認証情報と属性を一元管理できるため、各アプリケーションがそれぞれ独自のローカルID設定やユーザープールを持つ必要がなくなります。同じユーザーディレクトリを使用するすべてのアプリケーションに対して、シングルサインオンが可能になります。"
    },
    {
      term: "デジタルID",
      description:
        "特定のアプリケーションが提供する機能のコンテキストにおいて、特定のユーザーを定義する属性のセット。"
    },
    {
      term: "デジタル署名",
      description:
        "トークン内の情報を改ざんから保護する暗号化された文字列。これらの情報が変更または改ざんされると、署名は検証に失敗し、拒否されます。"
    },
    {
      term: "テナント",
      description:
        "Auth0では、単一のソフトウェアインスタンスに対して特定の権限を持つアクセスを共有する、論理的に分離されたユーザーのグループを指します。複数のテナントが同じマシン上で実行されている場合でも、あるテナントが別のテナントのデータにアクセスすることはできません。一般に、テナントはソフトウェアマルチテナントアーキテクチャから借用された用語です。"
    },
    {
      term: "トークンエンドポイント",
      description:
        "プログラムによってトークンを要求するために使用される、認可サーバー上のエンドポイント。"
    },
    {
      term: "トリガー",
      description:
        "ユーザーのログインなど特定の操作が実行時に発生したときに、アクションを自動的に呼び出すイベント。複数のトリガーが同時に実行される場合があり、関連するフローをブロックするものもあれば、ブロックしないものもあります。"
    },
    {
      term: "パスワードレス",
      description:
        "最初の要素がパスワードではない認証の形式。代わりに、メールやSMS、プッシュ通知、または生体認証センサーで受信したワンタイムパスワードを使用できます。パスワードレスではワンタイムパスワードが使用されるため、ユーザーは従来のユーザー名/パスワードによるログインと比較して、一般的なパスワードベースの攻撃（辞書攻撃や認証情報スタッフィングなど）の影響を受けにくくなります。"
    },
    {
      term: "パスワード漏洩検知",
      description:
        "サードパーティのWebサイトまたはアプリでのデータ漏洩により侵害されたユーザー名とパスワードの組み合わせをユーザーが使用した場合に、Auth0がユーザーに通知する攻撃防御の形式。"
    },
    {
      term: "パブリッククライアント",
      description:
        "OAuth 2.0プロトコルによると、クライアント（アプリケーション）は、資格情報（クライアントIDやシークレットなど）を安全に保持できるかどうかに応じて、機密またはパブリックに分類できます。パブリッククライアントは資格情報を安全に保持できないため、クライアントシークレットの使用を必要としない付与タイプのみを使用する必要があります。パブリッククライアントに発行されたIDトークンは、秘密鍵（RS256）を使用して非対称に署名され、トークンの署名に使用された秘密鍵に対応する公開鍵を使用して検証される必要があります。"
    },
    {
      term: "フロー",
      description:
        "アクションを使用して拡張できるプロセス。各フローは1つ以上のトリガーで構成され、Auth0処理の単一ポイント内で情報が移動する論理パイプラインを表します。"
    },
    {
      term: "ベータ版",
      description:
        "一般提供（GA）版に先立って、対象の機能または動作がサブスクライバーに提供され、最終的なフィードバックを提供しながら新製品の機能を検証して導入する時間を与える、製品リリース段階。機能面では、完全なコードが使われ、安定しており、さまざまなシナリオで役立ちます。また、GA版における品質の期待に応えている、またはほぼ応えていると考えられます。ベータ版は、選ばれた一部のサブスクライバーに制限することも（プライベート）、すべてのサブスクライバーに提供することもできます（パブリック）。"
    },
    {
      term: "ボット検知",
      description:
        "Auth0がログインプロセス中にCAPTCHAを有効にすることで、疑わしいボットトラフィックをブロックする攻撃防御の形式。"
    },
    {
      term: "メタデータ",
      description:
        "環境設定やプロファイル設定など、ユーザーが更新できる情報。メタデータはIDトークンに追加され、ユーザープロファイルに保存できます。"
    },
    {
      term: "ユーザーのブロック/ブロック解除",
      description:
        "要求元のリソースへのアクセスを削除または復元すること。Auth0の攻撃防御スイートの機能（侵害されたパスワードの検出、ブルートフォース保護、不審なIPのスロットリング）を指します。各サービスはログイン/サインアップの傾向を評価し、疑わしいアクティビティに関連付けられたIPアドレスをブロックします。"
    },
    {
      term: "ユニバーサルログイン",
      description:
        "Auth0による認証フローの実装で、これは認可サーバーの主要な機能です。ユーザーの本人確認が必要になるたびに、アプリケーションはユニバーサルログインにリダイレクトされ、Auth0がユーザーのアイデンティティを保証するために必要な処理を行います。"
    },
    {
      term: "リソースサーバー",
      description:
        "保護されたリソースをホストするサーバー。リソースサーバーは保護されたリソースへのリクエストを受け入れ、応答します。"
    },
    {
      term: "リソース所有者",
      description:
        "保護されたリソースへのアクセスを許可できるエンティティ（ユーザーやアプリケーションなど）。"
    },
    {
      term: "リフレッシュトークン",
      description:
        "更新されたアクセストークンを取得するために使用できる特殊なトークン。これは、ユーザーに再度ログインを強いることなく、有効期限切れになるアクセストークンを更新する場合に便利です。リフレッシュトークンを使用すると、リフレッシュトークンがブロックリストに登録されるまで、いつでも新しいアクセストークンをリクエストできます。"
    },
    {
      term: "リフレッシュトークンのローテーション",
      description:
        "脆弱性を最小限に抑えるためにリフレッシュトークンを頻繁に置き換える戦略。リフレッシュトークンのローテーションを使用すると、アプリケーションがリフレッシュトークンを交換して新しいアクセストークンを取得するたびに、Auth0も新しいリフレッシュトークンを返します。"
    },
    {
      term: "ローカリゼーション",
      description:
        "新しいユニバーサルログインエクスペリエンスをサポートされている言語でレンダリングできる機能。"
    },
    {
      term: "ロール",
      description:
        "ユーザーがシステムに対して必要とするアクセスのレベルを示す、ユーザーに割り当てられるユーザーアイデンティティの側面。ロールは基本的に権限の集合です。"
    },
    {
      term: "一般提供",
      description:
        "対象の機能または動作が完全に機能し、（価格レベルによって制限される）すべてのサブスクライバーが本番環境で使用できる製品リリース段階。新しいリリースが既存の機能を置き換える場合、Auth0は弊社の廃止ポリシーに従って下位互換性の期間を提供し、新しいリリースの導入時間を確保できるよう、お客様に通知します。"
    },
    {
      term: "不審なIPのスロットリング",
      description:
        "非常に多くのアカウントをターゲットにした、単一IPアドレスからの不審なログインからテナントを保護する攻撃防御の形式。"
    },
    {
      term: "不正者",
      description:
        "脅威アクターとも呼ばれます。害を及ぼす意図をもってビジネスまたは環境に脅威を与えるエンティティ（個人またはグループ）。データセンターへの侵入から、盗まれた資格情報によるシステムへのハッキングまで、被害には物理的およびサイバー上の損害が含まれる可能性があります。"
    },
    {
      term: "信頼",
      description:
        "IdP（アイデンティティプロバイダー）や認証局がユーザーについて言及することをリソースが信頼する場合、そのリソースはそのIdP（アイデンティティプロバイダー）または認証局を信頼しています。"
    },
    {
      term: "境界",
      description:
        "ディレクトリ、そのすべてのユーザー、およびそのディレクトリを使用するすべてのアプリケーションを囲む一連の境界。一部の実装では、この境界は物理的な場所を指します。また、VPNを介して接続された一連のネットワークまたはデバイスを指す場合もあります。"
    },
    {
      term: "MFA（多要素認証）",
      description:
        "複数の要素を考慮した認証プロセス。通常、Auth0では、最初の要素は標準のユーザー名/パスワード交換であり、2番目の要素はメールまたはSMS経由のコードまたはリンク、AuthyやGoogle Authenticatorなどのアプリ経由ワンタイムパスワード、あるいはGuardianやDuoなどの電話アプリ経由のプッシュ通知です。複数の要素を使用することで、パスワードが他人の手に渡ったり、携帯電話が盗まれたりするなど、いずれかの要素が誰かに取得された場合でも、アカウントの安全性を保つことができます。"
    },
    {
      term: "廃止",
      description:
        "対象の機能または動作が新規サブスクライバーによる使用をサポートしていないことに加え、積極的な強化が行われておらず、かつ最小限のメンテナンスしか行われていないことを示す製品リリース段階。廃止の時点でその機能または動作を使用していたテナントは、引き続きアクセスできます。"
    },
    {
      term: "接続",
      description:
        "Auth0と、アプリケーションのユーザーのソースとの関係。例として、IDプロバイダー（GoogleやActive Directoryなど）、パスワードレス認証方法、ユーザーデータベースなどがあります。"
    },
    {
      term: "攻撃防御",
      description:
        "ブルートフォース保護、不審なIPのスロットリング、侵害されたパスワードの検出、ボット検知、Adaptive Multi-factor Authenticationなど、攻撃を検出して軽減するためにAuth0が提供する機能。"
    },
    {
      term: "早期アクセス",
      description:
        "対象の機能や動作が限られた数のサブスクライバーまたは顧客開発パートナー（CDP）に提供され、それらのサブスクライバーまたはCDPがテストを行い、今後の機能に関するフィードバックを返すことができる製品リリース段階。この段階では、機能がまだ完成していない可能性がありますが、検証はできます。"
    },
    {
      term: "未加工の資格情報",
      description:
        "リソースがユーザーのアイデンティティを確認できるようにする、ユーザーとリソースの間で合意された共有シークレットまたは一連の情報。"
    },
    {
      term: "機密クライアント",
      description:
        "OAuth 2.0プロトコルによると、クライアント（アプリケーション）は、資格情報（クライアントIDやシークレットなど）を安全に保持できるかどうかに応じて、機密またはパブリックに分類できます。機密クライアントは、資格情報を無許可の当事者に公開することなく安全な方法で保持でき、そのためには信頼できるバックエンドサーバーが必要です。これらのクライアントは、トークンエンドポイントを呼び出すときにクライアントIDとシークレットを指定して認証しなければならない付与タイプを使用でき、対称または非対称に署名されたトークンを発行させることができます。"
    },
    {
      term: "消費デバイス",
      description:
        "クライアントが開始するバックチャネル認証フローで、ユーザーがサービスを利用するのに役立つデバイス。"
    },
    {
      term: "混乱した代理人",
      description:
        "攻撃者がクライアントまたはサービスを騙してアクションを実行させる状況。"
    },
    {
      term: "破壊的変更",
      description:
        "Auth0が知る範囲で、Auth0プラットフォームと顧客アプリケーションの相互運用に障害をきたす、Auth0プラットフォームへの変更。"
    },
    {
      term: "移行",
      description:
        "顧客が特定の機能や動作から離れるプロセス。移行は、製品リリースの廃止段階で行う必要があります。"
    },
    {
      term: "ブルートフォース攻撃防御",
      description:
        "単一のIPアドレスから発生し、単一のユーザーアカウントをターゲットとするブルートフォース攻撃から保護する攻撃防御の形式。"
    },
    {
      term: "署名アルゴリズム",
      description:
        "トークンが不正者によって改ざんされないように、トークンにデジタル署名するためのハッシュアルゴリズム。"
    },
    {
      term: "製品のリリース段階",
      description:
        "Auth0が製品機能をどのように計画、リリース、廃止するかを説明するフェーズ。製品機能はすべてのリリース段階を経て進行するとは限らず、各段階の期間は機能のスコープや影響力によって異なります。"
    },
    {
      term: "証明書利用者",
      description:
        "ユーザーを認証するためにサードパーティーのIDプロバイダーに依存するエンティティ（サービスやアプリケーションなど）。"
    },
    {
      term: "認可コード",
      description:
        "認可サーバーによって生成され、認可応答の一部としてアプリケーションに返されるランダムな文字列。認可コードの有効期間は比較的短く、認可コードフローの使用時に（Proof Key for Code Exchange（PKCE）の有無にかかわらず）トークンエンドポイントでアクセストークンと交換されます。"
    },
    {
      term: "認可サーバー",
      description:
        "ユーザーによるアクセスの限界を定義するために使用される集中管理型サーバー。たとえば、認可サーバーは、ユーザーが利用できるデータ、タスク、機能を制御できます。認可サーバーによってユーザーが認証されることはありません。ユーザーの身元を確認するのは認証サーバーの役割です。"
    },
    {
      term: "認可フロー",
      description:
        "OAuth 2.0で概説されている認可付与の別名。認可フローは、リソース（アプリケーションまたはAPI）が要求元にアクセスを許可するために使用するワークフローです。テクノロジーのタイプ（たとえば、アプリケーションがクライアントシークレットを保存できる場合）と要求元のタイプに基づいて、リソース所有者は認可コードフロー、Proof Key for Code Exchange（PKCE）、Resource Owner Password Credential（ROPC）、暗黙フロー、またはクライアントの資格情報を使用できます。"
    },
    {
      term: "認証サーバー",
      description:
        "ユーザーのアイデンティティを確認または拒否するサーバー。認証サーバーによって、ユーザーが利用できるアクションやリソースが制限されることはありません（ただし、この目的でコンテキストを提供することは可能）。"
    },
    {
      term: "認証デバイス",
      description: "クライアントが開始するバックチャネル認証フローで、ユーザーが認証を行うために使用するデバイス。"
    }
  ]

  // A～Zのすべての文字 + 動的に抽出された固有の日本語文字
  const ENGLISH_LETTERS = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  )
  const uniqueJapaneseChars = [
    ...new Set(
      GLOSSARY.map((item) => item.term[0] || "")
        .filter((char) => !/[A-Z]/i.test(char))
        .map((char) => char.toUpperCase())
    )
  ].sort((a, b) => a.localeCompare(b, "ja"))
  const A_TO_Z = [...ENGLISH_LETTERS, ...uniqueJapaneseChars]

  const norm = (s) => s.normalize("NFKD").toLowerCase().trim()

  const useQueryParamState = (key, initial = "") => {
    const [value, setValue] = useState(() => {
      if (typeof window === "undefined") return initial
      const url = new URL(window.location.href)
      return url.searchParams.get(key) ?? initial
    })

    useEffect(() => {
      if (typeof window === "undefined") return
      const url = new URL(window.location.href)
      if (value) url.searchParams.set(key, value)
      else url.searchParams.delete(key)
      window.history.replaceState({}, "", url.toString())
    }, [key, value])

    return [value, setValue]
  }

  const highlight = (text, query) => {
    if (!query) return text
    const i = norm(text).indexOf(norm(query))
    if (i < 0) return text
    const end = i + query.length
    return (
      <>
        {text.slice(0, i)}
        <mark>{text.slice(i, end)}</mark>
        {text.slice(end)}
      </>
    )
  }

  const [term, setTerm] = useQueryParamState("term", "")
  const groups = useMemo(() => {
    const filtered = term
      ? GLOSSARY.filter((g) => norm(g.term).includes(norm(term)))
      : GLOSSARY

    const map = new Map()
    for (const item of filtered.sort((a, b) => a.term.localeCompare(b.term))) {
      const key = (item.term[0] || "").toUpperCase()
      map.set(key, [...(map.get(key) || []), item])
    }
    return map
  }, [term])

  const letterRefs = useRef({})
  const handleJump = (letter) => {
    const el = letterRefs.current[letter]
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className='mx-auto max-w-5xl py-10 text-gray-900 dark:text-gray-100'>
      {/* 検索 */}
      <div className='mb-6'>
        <div className='relative'>
          <span className='pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400'>
            <svg
              width='18'
              height='18'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
            >
              <circle cx='11' cy='11' r='8'></circle>
              <line x1='21' y1='21' x2='16.65' y2='16.65'></line>
            </svg>
          </span>
          <input
            id='search-input-control'
            type='text'
            placeholder='名前で検索'
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className='w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black pl-10 pr-4 py-3 outline-none focus:border-indigo-500 dark:focus:border-indigo-400 text-gray-900 dark:text-gray-100'
          />
        </div>
      </div>

      {/* A～Z インデックス */}
      <nav className='mb-8 flex flex-wrap gap-3'>
        {A_TO_Z.map((letter) => {
          const enabled = groups.has(letter)
          return (
            <button
              key={letter}
              onClick={() => enabled && handleJump(letter)}
              disabled={!enabled}
              className={`text-lg ${
                enabled
                  ? "text-indigo-600 dark:text-indigo-300 hover:text-black dark:hover:text-white"
                  : "text-gray-400 dark:text-gray-600 cursor-not-allowed"
              }`}
              aria-label={`${letter}へジャンプ`}
            >
              {letter}
            </button>
          )
        })}
      </nav>

      {/* グループ */}
      <section>
        {A_TO_Z.filter((L) => groups.has(L)).map((letter) => {
          const items = groups.get(letter)
          return (
            <section key={letter} className='mb-10'>
              <div className='flex items-end gap-1'>
                <h2
                  id={letter}
                  ref={(el) => (letterRefs.current[letter] = el)}
                  className='text-3xl font-semibold glossary_h2'
                >
                  {letter}
                </h2>
                <div className='flex-1 border-b-2 border-[#3F59E4]' />
              </div>

              <ul className='mt-6 space-y-6 glossary_list'>
                {items.map((it) => (
                  <li key={it.term} className='scroll-mt-24'>
                    <h3
                      id={norm(it.term)}
                      className='text-xl font-medium text-gray-900 dark:text-gray-100 glossary_h3'
                    >
                      {it.term}
                    </h3>
                    <p className='mt-1 text-gray-700 dark:text-gray-300'>
                      {highlight(it.description, term)}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          )
        })}

        {groups.size === 0 && (
          <p className='text-gray-500 dark:text-gray-400'>
            「{term}」の検索結果はありません。別の用語をお試しください。
          </p>
        )}
      </section>
    </div>
  )
}