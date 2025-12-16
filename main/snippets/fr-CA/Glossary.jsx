export const GlossaryPage = () => {
  const GLOSSARY = [
    {
      term: "Jeton d'accès",
      description:
        "Justificatif d'identité qu'une application peut utiliser pour accéder à une API. Il informe l'API que le porteur du jeton a été autorisé à accéder à l'API et à effectuer des actions spécifiques définies par la portée qui a été accordée. Un jeton d'accès peut être dans n'importe quel format, mais deux options populaires incluent les chaînes opaques et les jetons Web JSON (JWT). Ils doivent être transmis à l'API en tant que justificatif d'identité Bearer dans un en-tête HTTP Authorization."
    },
    {
      term: "Liaison de comptes",
      description:
        "Connexion de comptes utilisateur sur plusieurs plateformes pour permettre aux utilisateurs d'accéder à plus d'une ressource ou application en fournissant leurs justificatifs d'identité une seule fois."
    },
    {
      term: "Actions",
      description:
        "Fonctions sécurisées, spécifiques au tenant et versionnées, écrites en Node.js, qui s'exécutent à certains moments pendant l'exécution d'Auth0. Les Actions sont utilisées pour personnaliser et étendre les capacités d'Auth0 avec une logique personnalisée."
    },
    {
      term: "Authentification multifacteur adaptative",
      description:
        "Authentification multifacteur (AMF) qui n'est déclenchée pour les utilisateurs que lorsqu'une tentative de connexion est déterminée comme étant une connexion à faible confiance. Avec l'AMF adaptative, Auth0 déclenche l'AMF uniquement lorsque nécessaire pour ajouter des frictions pour les acteurs malveillants tout en maintenant l'expérience de connexion inchangée pour les acteurs légitimes."
    },
    {
      term: "Application",
      description:
        "Votre logiciel qui s'appuie sur Auth0 pour l'authentification et la gestion des identités. Auth0 prend en charge les applications monopage, Web standard, natives et machine à machine."
    },
    {
      term: "Protection contre les attaques",
      description:
        "Fonctionnalités qu'Auth0 fournit pour détecter et atténuer les attaques, notamment la protection contre les attaques par force brute, la limitation des adresses IP suspectes, la détection de mots de passe compromis, la détection de robots et l'authentification multifacteur adaptative."
    },
    {
      term: "Audience",
      description:
        "Identifiant unique de l'audience pour un jeton émis, identifié dans un jeton Web JSON comme la revendication aud. La valeur d'audience est soit l'application (ID client) pour un jeton ID, soit l'API qui est appelée (identifiant d'API) pour un jeton d'accès. Chez Auth0, la valeur Audience envoyée dans une demande de jeton d'accès détermine si ce jeton est retourné dans un format opaque ou JWT."
    },
    {
      term: "Auth0 Dashboard",
      description:
        "Interface d'administration principale d'Auth0 dans laquelle vous pouvez enregistrer votre application ou API, vous connecter à un magasin d'utilisateurs ou à un autre fournisseur d'identité, et configurer vos services Auth0."
    },
    {
      term: "Appareil d'authentification",
      description:
        "L'appareil sur lequel l'utilisateur s'authentifiera et accordera son consentement dans le flux d'authentification par canal arrière initié par le client."
    },
    {
      term: "Serveur d'authentification",
      description:
        "Serveur qui confirme ou nie l'identité d'un utilisateur. Un serveur d'authentification ne limite pas les actions ou les ressources disponibles pour l'utilisateur (bien qu'il puisse fournir un contexte à cette fin)."
    },
    {
      term: "Code d'autorisation",
      description:
        "Chaîne aléatoire générée par le serveur d'autorisation et retournée à l'application dans le cadre de la réponse d'autorisation. Le code d'autorisation a une durée de vie relativement courte et est échangé contre un jeton d'accès au point de terminaison de jeton lors de l'utilisation du flux de code d'autorisation (avec ou sans clé de preuve pour l'échange de code (PKCE))."
    },
    {
      term: "Flux d'autorisation",
      description:
        "Autre nom pour les octrois d'autorisation décrits dans OAuth 2.0. Les flux d'autorisation sont les flux de travail qu'une ressource (une application ou une API) utilise pour accorder l'accès aux demandeurs. En fonction du type de technologie et du type de demandeur, les propriétaires de ressources peuvent utiliser le flux de code d'autorisation, PKCE, ROPG, implicite ou justificatif d'identité client."
    },
    {
      term: "Serveur d'autorisation",
      description:
        "Serveur centralisé qui contribue à définir les limites de l'accès d'un utilisateur. Par exemple, votre serveur d'autorisation peut contrôler les données, les tâches et les fonctionnalités disponibles pour un utilisateur. Un serveur d'autorisation n'authentifie pas les utilisateurs. C'est le rôle du serveur d'authentification de vérifier l'identité d'un utilisateur."
    },
    {
      term: "Acteurs malveillants",
      description:
        "Également connus sous le nom d'acteurs de menace. Entité (une personne ou un groupe) qui représente une menace pour l'entreprise ou l'environnement avec l'intention de causer des dommages. Les dommages peuvent constituer des dommages physiques ou cybernétiques, allant de l'intrusion dans un centre de données au piratage de systèmes avec des justificatifs d'identité volés."
    },
    {
      term: "Bêta",
      description:
        "Étape de publication de produit au cours de laquelle la fonctionnalité ou le comportement référencé est fourni aux abonnés pour leur donner le temps d'explorer et d'adopter de nouvelles capacités de produit tout en fournissant des commentaires finaux avant une version GA. La fonctionnalité est complète au niveau du code, stable, utile dans divers scénarios et censée répondre ou presque répondre aux attentes de qualité pour une version GA. Les versions bêta peuvent être privées ou publiques."
    },
    {
      term: "Bloquer/débloquer des utilisateurs",
      description:
        "Suppression ou restauration de l'accès d'un demandeur à une ressource. Fait référence aux fonctionnalités de la suite de protection contre les attaques d'Auth0. Chaque service évalue les tendances de connexion/inscription et bloque les adresses IP associées à une activité suspecte."
    },
    {
      term: "Détection de robots",
      description:
        "Forme de protection contre les attaques dans laquelle Auth0 bloque le trafic de robots suspects en activant un captcha pendant le processus de connexion."
    },
    {
      term: "Détection de mots de passe compromis",
      description:
        "Forme de protection contre les attaques dans laquelle Auth0 avertit vos utilisateurs s'ils utilisent une combinaison nom d'utilisateur/mot de passe qui a été compromise lors d'une fuite de données sur un site Web ou une application tierce."
    },
    {
      term: "Changement incompatible",
      description:
        "Modification de la plateforme Auth0 qui, à la connaissance d'Auth0, causera des défaillances dans l'interopérabilité de la plateforme Auth0 et des applications clientes."
    },
    {
      term: "Protection contre les attaques par force brute",
      description:
        "Forme de protection contre les attaques qui protège contre les attaques par force brute qui proviennent d'une seule adresse IP et ciblent un seul compte utilisateur."
    },
    {
      term: "Rappel",
      description:
        "URL à laquelle Auth0 envoie sa réponse après l'authentification. Il s'agit souvent de la même URL vers laquelle un utilisateur est redirigé après l'authentification."
    },
    {
      term: "Revendication",
      description:
        "Attribut empaqueté dans un jeton de sécurité qui représente une revendication que le fournisseur du jeton fait à propos d'une entité."
    },
    {
      term: "ID client",
      description:
        "Valeur d'identification attribuée à votre application après l'enregistrement. Cette valeur est utilisée conjointement avec d'autres services tiers et peut être trouvée dans Auth0 Dashboard > Paramètres de l'application."
    },
    {
      term: "Secret client",
      description:
        "Secret utilisé par un client (application) pour s'authentifier auprès du serveur d'autorisation ; il ne doit être connu que du client et du serveur d'autorisation et doit être suffisamment aléatoire pour ne pas être devinable."
    },
    {
      term: "Client confidentiel",
      description:
        "Selon le protocole OAuth 2.0, les clients (applications) peuvent être classés comme confidentiels ou publics. Les clients confidentiels peuvent conserver les justificatifs d'identité en toute sécurité et nécessitent un serveur dorsal de confiance pour ce faire. Ils peuvent utiliser des types d'octroi qui nécessitent une authentification en spécifiant leur ID client et leur secret lors de l'appel du point de terminaison de jeton."
    },
    {
      term: "Député confus",
      description:
        "Situation dans laquelle un attaquant trompe un client ou un service pour qu'il effectue une action en son nom."
    },
    {
      term: "Connexion",
      description:
        "Relation entre Auth0 et les sources d'utilisateurs pour vos applications. Les exemples incluent les fournisseurs d'identité, les méthodes d'authentification sans mot de passe ou les bases de données d'utilisateurs."
    },
    {
      term: "Appareil de consommation",
      description:
        "L'appareil qui aide l'utilisateur à consommer un service dans le flux d'authentification par canal arrière initié par le client."
    },
    {
      term: "Domaine personnalisé",
      description:
        "Domaine tiers avec un nom spécialisé ou personnalisé. Également connu sous le nom de CNAME."
    },
    {
      term: "Dépréciation",
      description:
        "Étape de publication de produit indiquant que la fonctionnalité ou le comportement référencé n'est pas pris en charge pour les nouveaux abonnés, n'est pas activement amélioré et n'est maintenu que de manière minimale."
    },
    {
      term: "Identité numérique",
      description:
        "Ensemble d'attributs qui définissent un utilisateur particulier dans le contexte d'une fonction fournie par une application particulière."
    },
    {
      term: "Signature numérique",
      description:
        "Chaîne chiffrée qui protège les bits d'un jeton contre la falsification. Si les bits sont modifiés ou falsifiés, la signature ne pourra plus être vérifiée et sera rejetée."
    },
    {
      term: "Répertoire",
      description:
        "Référentiel centralisé d'utilisateurs (le plus connu étant Active Directory) qui centralise les justificatifs d'identité et les attributs et rend inutile pour chaque application d'avoir sa propre configuration d'identité locale."
    },
    {
      term: "Accès anticipé",
      description:
        "Étape de publication de produit au cours de laquelle la fonctionnalité ou le comportement référencé est fourni à un nombre limité d'abonnés ou de partenaires de développement clients (CDP) pour tester et fournir des commentaires."
    },
    {
      term: "End of Life",
      description:
        "Product release stage indicating that the referenced feature or behavior is removed from the platform. Continued use will likely result in errors."
    },
    {
      term: "End of Life Date",
      description:
        "Date when access to a feature or behavior is removed from the platform. End Of Life Dates can vary between different plan types."
    },
    {
      term: "Fine-grained Authorization (FGA)",
      description:
        "Auth0’s SaaS product that gives individual users access to specific objects or resources within your application."
    },
    {
      term: "Flow",
      description:
        "Processes that can be extended using Actions. Each Flow is made up of one or more Triggers and represents the logical pipeline through which information moves during a single point in the Auth0 journey."
    },
    {
      term: "General Availability",
      description:
        "Product release stage during which the referenced feature or behavior is fully functional and available to all subscribers for production use."
    },
    {
      term: "Group",
      description:
        "Set of one or more users. In the Auth0 Authorization Extension, use groups to grant access to many users at a time."
    },
    {
      term: "ID Token",
      description:
        "Credential meant for the client itself, rather than for accessing a resource. It has a fixed format that clients can parse and validate."
    },
    {
      term: "Identity Provider (IdP)",
      description:
        "Service that stores and manages digital identities. Auth0 supports trusted social, enterprise, and legal identity providers."
    },
    {
      term: "JSON Web Token (JWT)",
      description:
        "Open, industry standard RFC 7519 method for representing claims securely between two parties. At Auth0, ID Tokens are always returned in JWT format, and Access Tokens are often in JWT format."
    },
    {
      term: "Localization",
      description:
        "Ability to render the New Universal Login experience into a supported language."
    },
    {
      term: "Lock",
      description:
        "Auth0's UI widget for authenticating users. It is ready to go as-is and is the default face of the Classic Universal Login experience."
    },
    {
      term: "Management API",
      description:
        "Auth0's API to manage Auth0 services and perform administrative tasks programatically."
    },
    {
      term: "Metadata",
      description:
        "Information users can update, such as preferences or profile settings. Metadata is added to ID tokens and can be stored in user profiles."
    },
    {
      term: "Migration",
      description:
        "Process by which a customer moves away from a particular feature or behavior. Migrations should occur during the Deprecation stage."
    },
    {
      term: "Multi-factor authentication (MFA)",
      description:
        "Authentication process that considers multiple factors. Typically the first factor is username/password, and the second is a code or link via email/SMS, or OTP via an app."
    },
    {
      term: "Nonce",
      description:
        "Arbitrary (often random or pseudo-random) number issued in an authentication protocol that can be used to help detect and mitigate replay attacks."
    },
    {
      term: "OAuth 2.0",
      description:
        "Authorization framework that defines authorization protocols and workflows. OAuth 2.0 defines roles, authorization grants, authorization requests and responses, and token handling."
    },
    {
      term: "OpenID",
      description:
        "Open standard for authentication that allows applications to verify users are who they say they are without needing to collect or store login information."
    },
    {
      term: "Organizations",
      description:
        "Auth0 product that allows B2B customers to categorize end-users and define specific roles, login experience, and access to resources."
    },
    {
      term: "Passwordless",
      description:
        "Form of authentication where the first factor is not a password. Instead, it could be a one-time password received by email or SMS, a push notification, or a biometric sensor."
    },
    {
      term: "Perimeter",
      description:
        "Set of boundaries that encompass a directory, all of its users, and all of the applications which use the directory."
    },
    {
      term: "Product Release Stages",
      description:
        "Phases that describe how Auth0 stages, releases, and retires product functionality."
    },
    {
      term: "Public Client",
      description:
        "Selon le protocole OAuth 2.0, les clients peuvent être confidentiels ou publics. Les clients publics ne peuvent pas conserver les justificatifs de manière sécurisée, ils ne doivent donc utiliser que des types d'octroi qui ne nécessitent pas l'utilisation de leur secret client."
    },
    {
      term: "Raw Credential",
      description:
        "Shared secret or set of information that is agreed upon between the user and the resource that allow the resource to verify the identity of a user."
    },
    {
      term: "Refresh Token",
      description:
        "Special kind of token that can be used to obtain a renewed Access Token. It is useful for renewing expiring Access Tokens without forcing the user to log in again."
    },
    {
      term: "Refresh Token Rotation",
      description:
        "Strategy of frequently replacing refresh tokens to minimize vulnerability. Each exchange also returns a new refresh token."
    },
    {
      term: "Relying Party",
      description:
        "Entity (such as a service or application) that depends on a third-party identity provider to authenticate a user."
    },
    {
      term: "Resource Owner",
      description:
        "Entity (such as a user or application) capable of granting access to a protected resource."
    },
    {
      term: "Resource Server",
      description:
        "Server hosting protected resources. Resource servers accept and respond to protected resource requests."
    },
    {
      term: "Role",
      description:
        "Aspect of a user’s identity assigned to the user to indicate the level of access they should have to the system."
    },
    {
      term: "Scope",
      description:
        "Mechanism that defines the specific actions applications can be allowed to do or information they can request on a user’s behalf."
    },
    {
      term: "Security Assertion Markup Language (SAML)",
      description:
        "XML-based standardized protocol by which two parties can exchange authentication information without the use of a password."
    },
    {
      term: "Security Token",
      description:
        "Digitally-signed artifact used to prove that the user was successfully authenticated."
    },
    {
      term: "Session Cookie",
      description:
        "Entity emitted by middleware after it establishes that the token it is receiving is signed, valid, and comes from a trusted source."
    },
    {
      term: "Shadow Account",
      description:
        "Difficult-to-sustain practice of manually provisioning a user from a local directory separately in a remote directory when they need access to remote applications."
    },
    {
      term: "Signing Algorithm",
      description:
        "Hashing algorithm used to digitally sign tokens to ensure the token has not been tampered with."
    },
    {
      term: "Single Sign-On (SSO)",
      description:
        "Service that, after a user logs into one application, automatically logs them into other applications as well. Single Logout works similarly in reverse."
    },
    {
      term: "Subscription",
      description:
        "Agreement that defines the features and quotas available for each of your tenants."
    },
    {
      term: "Suspicious IP Throttling",
      description:
        "Form of attack protection that protects your tenant against suspicious logins targeting too many accounts from a single IP address."
    },
    {
      term: "Tenant",
      description:
        "A logically-isolated group of users who share common access with specific privileges to a single software instance."
    },
    {
      term: "Token Endpoint",
      description:
        "Endpoint on the Authorization Server that is used to programmatically request tokens."
    },
    {
      term: "Trigger",
      description:
        "Event that automatically invokes an Action when a specific operation, such as a user logging in, occurs at runtime."
    },
    {
      term: "Trust",
      description:
        "A resource trusts an identity provider or authority when that resource is willing to believe what the authority says about its users."
    },
    {
      term: "Universal Login",
      description:
        "Auth0’s implementation of the authentication flow, which is the key feature of an Authorization Server."
    },
    {
      term: "Web Service Federation (WS-Fed)",
      description:
        "Protocole de gestion des identités utilisateur entre systèmes, domaines et fournisseurs d'identité avec relation de confiance établie à l'aide de WS-Trust. Principalement utilisé pour les produits Microsoft."
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
            placeholder='Rechercher par nom'
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
              aria-label={`Aller à ${letter}`}
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
            Aucun résultat pour « {term} ». Essayez un autre terme.
          </p>
        )}
      </section>
    </div>
  )
}

export const GlossaryFR = () => {
  const GLOSSARY = [
    {
      term: "Abonnement",
      description:
        "Entente qui définit les fonctionnalités et les quotas alloués à chacun de vos locataires. Auth0 offre plusieurs niveaux d'abonnement pour répondre aux besoins des différents développeurs et organisations."
    },
    {
      term: "Accès anticipé",
      description:
        "Phase de lancement du produit durant laquelle une fonctionnalité ou un comportement particulier est fourni à un nombre restreint d'abonnés ou de partenaires de développement client (CDP) afin qu'ils puissent l'essayer et nous faire part de leurs commentaires. À ce stade, la fonctionnalité n'est pas encore terminée, mais elle est suffisamment avancée pour être testée."
    },
    {
      term: "Acteurs menaçants",
      description:
        "On appelle aussi ces individus ou groupes des auteurs de cybermenaces. Ce sont des entités qui représentent une menace pour une entreprise ou un environnement, avec l’intention de causer des dommages. Ces dommages peuvent être physiques ou informatiques, allant d’une intrusion dans un centre de données à un piratage de systèmes à l’aide d’identifiants de connexion volés."
    },
    {
      term: "Actions",
      description:
        "Fonctions sécurisées, propres au locataire, versionnées et écrites en Node.js qui s'exécutent à certains moments durant l'exécution d'Auth0. Les Actions sont utilisées pour personnaliser et étendre les capacités d'Auth0 avec une logique personnalisée."
    },
    {
      term: "Algorithme de signature",
      description:
        "Algorithme de hachage utilisé pour signer numériquement les jetons afin de garantir qu'ils n'ont pas été altérés par des acteurs menaçants."
    },
    {
      term: "Appareil d'authentification",
      description:
        "Appareil utilisé pour l'authentification dans le flux d'authentification par canal d'appui initié par le client."
    },
    {
      term: "Appareil de consommation",
      description:
        "L’appareil qui aide l’utilisateur à consommer un service dans le flux d’authentification par canal d’appui initié par le client."
    },
    {
      term: "Application",
      description:
        "Votre logiciel qui s’appuie sur Auth0 pour l’authentification et la gestion des identités. Auth0 prend en charge les applications Web classiques, les applications natives et les applications de communication entre machines."
    },
    {
      term: "Association de comptes",
      description:
        "Association de comptes d’utilisateurs sur plusieurs plateformes pour permettre aux utilisateurs d’accéder à plusieurs ressources ou applications en fournissant des identifiants de connexion une seule fois."
    },
    {
      term: "Audience",
      description:
        "Identifiant unique de l'audience d'un jeton émis, déterminé au sein d'un jeton Web JSON comme la revendication **aud**. La valeur audience est soit l'application (ID client) pour un jeton d'ID, soit l'API appelée (`identifiant de l'API`) pour un jeton d'accès. Au sein d'Auth0, la valeur audience envoyée dans une demande de jeton d'accès dicte si ce jeton est renvoyé dans un format opaque ou JWT."
    },
    {
      term: "Auth0 Dashboard",
      description:
        "L’interface principale d’administration d’Auth0 dans laquelle vous pouvez enregistrer votre application ou API, vous connecter à un magasin d’utilisateurs ou à un autre fournisseur d’identité, et configurer vos services Auth0."
    },
    {
      term: "Authentification multifacteur (AMF)",
      description:
        "Processus d'authentification qui prend en compte plusieurs facteurs. En général, chez Auth0, le premier facteur est l'échange courant du nom d'utilisateur/mot de passe, et le deuxième est un code ou un lien par courriel ou SMS, un mot de passe à usage unique au moyen d'une application comme Authy ou Google Authenticator, ou une notification poussée au moyen d'une application pour téléphone, comme Guardian ou Duo. L'utilisation de plusieurs facteurs permet à votre compte de rester sécurisé même si une personne mal intentionnée obtient l'un ou l'autre des facteurs (par exemple, en volant votre mot de passe ou votre téléphone)."
    },
    {
      term: "Authentification multifacteur (AMF) adaptative",
      description:
        "L'authentification multifacteur (AMF) qui n'est déclenchée pour les utilisateurs que lorsqu'une tentative de connexion est déterminée comme étant une connexion de faible confiance. Avec l'AMF adaptative, Auth0 ne déclenche l'authentification multifacteur (AMF) que lorsque c'est nécessaire pour ajouter de la friction pour les acteurs menaçants tout en gardant l'expérience de connexion inchangée pour les bons acteurs."
    },
    {
      term: "Authentification unique (SSO)",
      description:
        "Service qui, après qu’un utilisateur se soit connecté à une application, le connecte automatiquement à d’autres applications, quels que soient la plateforme, la technologie ou le domaine utilisés par l’utilisateur. L’utilisateur ne se connecte qu’une seule fois (d’où le nom de la fonctionnalité). On parle aussi de déconnexion unique (SLO) lorsqu’un utilisateur, après s’être déconnecté d’une application, est déconnecté de chaque application ou service où il était connecté. La SSO et la SLO sont rendues possibles grâce à l’utilisation de sessions."
    },
    {
      term: "Autorisation à granularité fine (FGA)",
      description:
        "Produit SaaS d’Auth0 qui permet à des utilisateurs individuels d’accéder à des objets ou ressources particulières au sein de votre application."
    },
    {
      term: "Bêta",
      description:
        "Phase de lancement du produit durant laquelle la fonctionnalité ou le comportement référencé est fourni aux abonnés. Cela leur permet d'explorer et d'adopter les nouvelles capacités du produit, tout en nous fournissant une rétroaction finale avant la disponibilité générale (DG). La fonctionnalité est entièrement fonctionnelle, stable, adaptable à divers contextes et considérée comme répondant ou s'approchant des normes de qualité pour une version de disponibilité générale. Les versions bêta peuvent être restreintes à un nombre défini d'abonnés (privées) ou ouvertes à tous les abonnés (publiques)."
    },
    {
      term: "Bloquer/débloquer des utilisateurs",
      description:
        "Suppression ou restauration de l'accès d'un demandeur à une ressource. Fait référence aux fonctionnalités de la suite de protection contre les attaques d'Auth0 : détection de mots de passe compromis, protection contre les attaques par force brute et limitation des adresses IP suspectes. Chaque service évalue les tendances de connexion/inscription et bloque les adresses IP associées à une activité suspecte."
    },
    {
      term: "Changement cassant",
      description:
        "Modification de la plateforme Auth0 qui, à la connaissance d’Auth0, entraînera des défaillances dans l’interopérabilité de la plateforme Auth0 et des applications clients."
    },
    {
      term: "Client confidentiel",
      description:
        "Selon le protocole OAuth 2.0, les clients (applications) peuvent être classés comme confidentiels ou publics selon qu’ils sont capables ou non de détenir des identifiants de connexion (telles qu’un identifiant client et un secret) en toute sécurité. Les clients confidentiels peuvent conserver des identifiants de connexion de manière sécurisée sans les exposer à des parties non autorisées et ont besoin d’un serveur dorsal de confiance pour ce faire. Ils peuvent utiliser des types d’autorisation qui exigent qu’ils s’authentifient en spécifiant leur ID client et leur secret lorsqu’ils appellent le point de terminaison du jeton et peuvent se voir délivrer des jetons signés de manière symétrique ou asymétrique."
    },
    {
      term: "Client public",
      description:
        "Selon le protocole OAuth 2.0, les clients (applications) peuvent être classés comme confidentiels ou publics selon qu’ils sont capables ou non de détenir des identifiants de connexion (telles qu’un ID client et un secret) en toute sécurité. Les clients publics ne peuvent pas détenir d’identifiants de connexion en toute sécurité et ne doivent donc utiliser que des types d’autorisation qui ne requièrent pas l’utilisation de leur secret client. Les jetons d’ID qui leur sont délivrés doivent être signés de manière asymétrique à l’aide d’une clé privée (RS256) et vérifiés à l’aide de la clé publique correspondant à la clé privée utilisée pour signer le jeton."
    },
    {
      term: "Code d’autorisation",
      description:
        "Chaîne aléatoire générée par le serveur d'autorisation et renvoyée à l'application dans le cadre de la réponse d'autorisation. Un code d'autorisation a une durée de vie relativement courte et est échangé contre un jeton d'accès au point de terminaison du jeton lors de l'utilisation du flux de code d'autorisation, avec ou sans Proof Key for Code Exchange (PKCE)."
    },
    {
      term: "Compte fantôme",
      description:
        "Cette pratique difficile à maintenir consiste à provisionner manuellement un utilisateur à partir d'un répertoire local séparément dans un répertoire distant (essentiellement en créant une copie, ou un compte fantôme, du compte d'origine) lorsqu'il a besoin d'accéder à des applications distantes."
    },
    {
      term: "Confiance",
      description:
        "Une ressource fait confiance à un fournisseur d'identité ou à une autorité lorsqu'elle est prête à croire ce que l'autorité dit au sujet de ses utilisateurs."
    },
    {
      term: "Connexion",
      description:
        "Relation entre Auth0 et les sources d’utilisateurs pour vos applications. Il peut s’agir par exemple de fournisseurs d’identité (tels que Google ou Active Directory), de méthodes d’authentification sans mot de passe ou de bases de données d’utilisateurs."
    },
    {
      term: "Connexion universelle",
      description:
        "Auth0 met en œuvre le flux d’authentification, qui constitue la fonctionnalité principale d’un serveur d’autorisation. Chaque fois qu’un utilisateur doit prouver son identité, vos applications effectuent une redirection vers la connexion universelle. Auth0 prend ensuite les mesures nécessaires pour confirmer l’identité de l’utilisateur"
    },
    {
      term: "Date de fin de vie",
      description:
        "Date à laquelle l'accès à une fonctionnalité ou à un comportement est supprimé de la plateforme. Les dates de fin de vie peuvent varier selon le type de plan."
    },
    {
      term: "Déclencheur",
      description:
        "Événement qui invoque automatiquement une action lorsqu'une opération particulière, telle que la connexion d'un utilisateur, se produit au moment de l'exécution. Certains déclencheurs sont exécutés de manière synchrone, bloquant le flux dans lequel ils sont impliqués, et d'autres sont exécutés de manière asynchrone."
    },
    {
      term: "Demande",
      description:
        "Attribut inclus dans un jeton de sécurité qui représente une affirmation que le fournisseur du jeton fait au sujet d'une entité."
    },
    {
      term: "Détection de mot de passe compromis",
      description:
        "Forme de protection contre les attaques par laquelle Auth0 notifie vos utilisateurs s’ils utilisent une combinaison nom d’utilisateur/mot de passe qui a été compromise lors d’une fuite de données sur un site Web ou une application tierce."
    },
    {
      term: "Détection de robots",
      description:
        "Forme de protection contre les attaques par laquelle Auth0 bloque le trafic suspecté d'être généré par des robots en activant un CAPTCHA pendant le processus de connexion."
    },
    {
      term: "Disponibilité générale",
      description:
        "Phase de lancement du produit au cours de laquelle la fonctionnalité ou le comportement référencé est pleinement fonctionnel et accessible à tous les abonnés (selon le niveau de tarification) pour une utilisation en production. Lorsqu'une fonctionnalité existante est remplacée par une nouvelle version, Auth0 garantit une période de rétrocompatibilité conformément à notre politique de dépréciation, et nous informons les clients pour leur permettre de s'adapter à la nouvelle version dans les délais impartis."
    },
    {
      term: "Domaine personnalisé",
      description:
        "Domaine tiers avec un nom spécialisé ou reflétant votre marque. Appelé également CNAME."
    },
    {
      term: "Données d’identification brutes",
      description:
        "Partage d’informations secrètes ou ensemble d’informations convenues entre l’utilisateur et la ressource servant à vérifier l’identité de l’utilisateur."
    },
    {
      term: "Fin de vie",
      description:
        "Étape de la phase de lancement du produit indiquant que la fonctionnalité ou le comportement référencé a été retiré de la plateforme. La poursuite de l’utilisation de la fonctionnalité ou du comportement entraînera probablement des erreurs. Le nouveau comportement sera automatiquement activé pour les locataires qui n’ont pas opté pour cette option pendant la fenêtre de migration."
    },
    {
      term: "Flux",
      description:
        "Processus qui peuvent être étendus par des actions. Chaque flux est composé d’un ou de plusieurs déclencheurs et représente le pipeline logique dans lequel l’information se déplace à un moment donné du parcours d’Auth0."
    },
    {
      term: "Flux d’autorisation",
      description:
        "Un autre nom pour les octrois d'autorisations décrits dans OAuth 2.0. Les flux d'autorisation sont les flux de production qu'une ressource (application ou API) utilise pour accorder l'accès aux demandeurs. En fonction du type de technologie (p. ex., si une application peut stocker un secret client) et du type de demandeur, les propriétaires de ressources peuvent utiliser un flux de code d'autorisation, une preuve d'échange de code clé (PKCE), l'octroi de mot de passe du propriétaire des ressources (ROPC), un octroi implicite ou un octroi d'identifiants client."
    },
    {
      term: "Fournisseur d’identité (IdP)",
      description:
        "Service de stockage et de gestion des identités numériques. Auth0 prend en charge les fournisseurs d’identité des réseaux sociaux, des entreprises et des organismes légaux de confiance. Auth0 peut également fonctionner comme un fournisseur d’identité pour vos applications."
    },
    {
      term: "Groupe",
      description:
        "Ensemble d’un ou plusieurs utilisateurs. Dans Auth0 Authorization Extension, utilisez les groupes pour accorder l’accès à plusieurs utilisateurs à la fois."
    },
    {
      term: "ID client",
      description:
        "Valeur d’identification attribuée à votre application après l’enregistrement. Cette valeur est utilisée en conjonction avec d’autres services tiers et figure dans **Auth0 Dashboard** > **Paramètres de l’application**."
    },
    {
      term: "Identité numérique",
      description:
        "Ensemble d’attributs qui définissent un utilisateur particulier dans le contexte d’une fonction assurée par une application particulière."
    },
    {
      term: "Jeton d’accès",
      description:
        "Identifiant qui peut être utilisé par une application pour accéder à une API. Il informe l'API que le porteur du jeton a été autorisé à accéder à l'API et à effectuer des actions particulières définies par les permissions qui lui ont été accordées. Un jeton d'accès peut se présenter sous n'importe quel format, mais les chaînes opaques et les jetons Web JSON (JWT) constituent deux options populaires. Ils doivent être transmis à l'API en tant qu'identifiant porteur dans un en-tête d'autorisation HTTP."
    },
    {
      term: "Jeton d’actualisation",
      description:
        "Type particulier de jeton qui peut être utilisé pour obtenir un jeton d'accès renouvelé. Il est utile pour renouveler les jetons d'accès arrivant à expiration sans obliger l'utilisateur à se connecter à nouveau. Le jeton d'actualisation permet de demander un nouveau jeton d'accès à tout moment jusqu'à ce que le jeton d'actualisation soit révoqué."
    },
    {
      term: "Jeton d’ID",
      description:
        "Identifiant conçu pour le client lui-même, et non pour l’accès à une ressource. Il a un format fixe que les clients peuvent analyser et valider."
    },
    {
      term: "Jeton de sécurité",
      description:
        "Artéfact signé numériquement utilisé pour prouver que l’utilisateur a été authentifié avec succès."
    },
    {
      term: "Jeton Web JSON (JWT)",
      description:
        "Méthode ouverte, conforme à la norme industrielle RFC 7519, qui permet de représenter en toute sécurité les demandes entre deux parties. Chez Auth0, les jetons d’ID sont toujours renvoyés au format JWT, tandis que les jetons d’accès sont généralement au même format. Il est possible de décoder et d’afficher les demandes contenues dans un JWT bien formé sur le site JWT.io."
    },
    {
      term: "Limitation des adresses IP suspectes",
      description:
        "Cette mesure de sécurité protège votre locataire contre les connexions suspectes provenant d’une seule adresse IP qui ciblent un grand nombre de comptes."
    },
    {
      term: "Localisation",
      description:
        "Possibilité de présenter l’interface de la nouvelle connexion universelle dans une des langues prises en charge."
    },
    {
      term: "Locataire",
      description:
        "Au sein d’Auth0, un groupe d’utilisateurs logiquement isolés qui partagent un accès commun à une instance logicielle unique et qui possèdent des privilèges particuliers. Chaque locataire est isolé, empêchant tout autre locataire d’accéder à ses données, même si plusieurs locataires peuvent fonctionner sur la même machine. Le terme « locataire », en général, est emprunté à l’architecture logicielle multilocataire."
    },
    {
      term: "Lock",
      description:
        "Composant d'interface utilisateur pour l'authentification des utilisateurs par Auth0. Il est prêt à l'emploi et représente l'expérience de connexion universelle standard. Lock vous permet de personnaliser légèrement le comportement et l'apparence, mais son objectif principal est la simplicité d'utilisation."
    },
    {
      term: "Management API",
      description:
        "API d’Auth0 permettant de gérer les services Auth0 et d’effectuer des tâches administratives de façon programmatique."
    },
    {
      term: "Métadonnées",
      description:
        "Informations que les utilisateurs peuvent mettre à jour, telles que les préférences ou les paramètres de profil. Les métadonnées sont ajoutées aux jetons d’ID et peuvent être stockées dans les profils utilisateurs."
    },
    {
      term: "Migration",
      description:
        "Processus par lequel un client abandonne une fonctionnalité ou un comportement particulier. Les migrations devraient avoir lieu au cours de la phase de lancement du produit où celui-ci est déconseillé."
    },
    {
      term: "Nombre aléatoire",
      description:
        "Nombre arbitraire (souvent aléatoire ou pseudo-aléatoire) émis dans un protocole d'authentification qui peut être utilisé pour aider à détecter et atténuer les attaques par rejeu utilisant d'anciennes communications. En d'autres termes, le nombre aléatoire n'est émis qu'une seule fois, de sorte que si un attaquant tente de rejouer une transaction avec un nombre aléatoire différent, sa fausse transaction peut être détectée plus facilement."
    },
    {
      term: "OAuth 2.0",
      description:
        "Cadre d'autorisation qui définit les protocoles d'autorisation et les flux. OAuth 2.0 définit les rôles, les octrois d'autorisation (ou flux), les demandes d'autorisation et les réponses, ainsi que la gestion des jetons. Les protocoles OpenID Connect (OIDC) pour vérifier l'identité de l'utilisateur étendent OAuth 2.0."
    },
    {
      term: "Obsolescence",
      description:
        "Phase de diffusion d’un produit indiquant que la fonctionnalité ou le comportement référencé n’est plus pris en charge pour les nouveaux abonnés, qu’il ne fait pas l’objet d’améliorations actives et qu’il ne fait l’objet que d’un entretien minimal. Les locataires utilisant la fonctionnalité ou le comportement au moment de l’obsolescence continueront d’y avoir accès."
    },
    {
      term: "OpenID",
      description:
        "Norme ouverte d'authentification qui permet aux applications de vérifier que les utilisateurs sont bien ceux qu'ils prétendent être sans avoir à collecter, stocker et donc être responsables des informations de connexion de l'utilisateur."
    },
    {
      term: "Organizations",
      description:
        "Produit Auth0 qui permet aux clients de commerce électronique interentreprises (B2B) de catégoriser les utilisateurs finaux et de définir des rôles particuliers, l'expérience de connexion et l'accès aux ressources."
    },
    {
      term: "Partie de confiance",
      description:
        "Entité (telle qu’un service ou une application) qui dépend d’un fournisseur d’identité tiers pour authentifier un utilisateur."
    },
    {
      term: "Périmètre",
      description:
        "Ensemble des limites qui englobent un répertoire, tous ses utilisateurs et toutes les applications qui utilisent le répertoire. Dans certaines mises en œuvre, ce périmètre est un emplacement physique; dans d’autres, il s’agit d’un ensemble de réseaux ou d’appareils connectés par VPN."
    },
    {
      term: "Permission",
      description:
        "Mécanisme qui définit les actions que les applications peuvent être autorisées à effectuer ou les informations qu’elles peuvent demander au nom d’un utilisateur. Souvent, les applications voudront utiliser les informations qui ont déjà été créées dans une ressource en ligne. Dans ce cas, l’application devra demander l’autorisation d’accéder à ces informations au nom de l’utilisateur. Lorsqu’une application demande l’autorisation d’accéder à une ressource par l’intermédiaire d’un serveur d’autorisations, elle utilise le paramètre Permissions pour préciser l’accès dont elle a besoin, et le serveur d’autorisations utilise ce même paramètre pour répondre avec l’accès qui a été effectivement accordé."
    },
    {
      term: "Phases de lancement du produit",
      description:
        "Phases qui décrivent comment Auth0 implémente, diffuse et retire des fonctionnalités du produit. Les fonctionnalités du produit peuvent ne pas passer par toutes les phases de lancement, et la durée de chaque phase varie en fonction de la permission et de la portée de la fonctionnalité."
    },
    {
      term: "Point de terminaison de jeton",
      description:
        "Point de terminaison sur le serveur d’autorisations utilisé pour demander des jetons de manière programmatique."
    },
    {
      term: "Propriétaire de ressources",
      description:
        "Entité (telle qu’un utilisateur ou une application) capable d’accorder l’accès à une ressource protégée."
    },
    {
      term: "Protection contre les attaques",
      description:
        "Fonctionnalités offertes par Auth0 pour détecter et atténuer les attaques, notamment la protection contre les attaques par force brute, la limitation des IP suspectes, la détection des mots de passe frauduleux, la détection des robots et l'authentification multifacteur (AMF) adaptative."
    },
    {
      term: "Protection contre les attaques par force brute",
      description:
        "Forme de protection contre les attaques par force brute provenant d’une seule adresse IP et qui ciblent un seul compte d’utilisateur."
    },
    {
      term: "Rappel",
      description:
        "URL vers laquelle Auth0 envoie sa réponse après l’authentification. Il s’agit souvent de la même URL vers laquelle un utilisateur est redirigé après l’authentification."
    },
    {
      term: "Répertoire",
      description:
        "Référentiel centralisé d’utilisateurs (dont le plus connu est Active Directory) qui centralise les identifiants et les attributs et rend inutile pour chaque application d’avoir sa propre configuration d’identité locale et son propre groupe d’utilisateurs. Permet l’authentification unique pour toutes les applications utilisant le même répertoire d’utilisateurs."
    },
    {
      term: "Rôle",
      description:
        "Aspect de l’identité d’un utilisateur qui lui est attribué pour indiquer le niveau d’accès qu’il doit avoir au système. Les rôles sont essentiellement des collections d’autorisations."
    },
    {
      term: "Rotation des jetons d’actualisation",
      description:
        "Stratégie consistant à remplacer fréquemment les jetons d’actualisation pour minimiser la vulnérabilité. Avec la rotation des jetons d’actualisation, chaque fois que votre application échange un jeton d’actualisation pour obtenir un nouveau jeton d’accès, Auth0 renvoie également un nouveau jeton d’actualisation."
    },
    {
      term: "Sans mot de passe",
      description:
        "Forme d'authentification où le premier facteur n'est pas un mot de passe. Il peut s'agir d'un mot de passe à usage unique reçu par courriel ou SMS, d'une notification poussée ou d'un capteur biométrique. L'authentification sans mot de passe utilise des mots de passe à usage unique, de sorte que les utilisateurs sont moins exposés aux attaques typiques par mot de passe (p. ex., attaque par dictionnaire ou par bourrage d'identifiants) qu'avec les connexions traditionnelles par nom d'utilisateur/mot de passe."
    },
    {
      term: "Secret client",
      description:
        "Secret utilisé par un client (application) pour s’authentifier auprès du serveur d’autorisation; il ne doit être connu que du client et du serveur d’autorisation et doit être suffisamment aléatoire pour ne pas être deviné."
    },
    {
      term: "Security Assertion Markup Language (SAML)",
      description:
        "Protocole normalisé basé sur XML permettant à deux parties d’échanger des informations d’authentification sans utiliser de mot de passe."
    },
    {
      term: "Serveur d’authentification",
      description:
        "Serveur qui confirme ou rejette l'identité d'un utilisateur. Un serveur d'authentification ne limite pas les actions ou les ressources disponibles pour l'utilisateur (bien qu'il puisse fournir un contexte à cette fin)."
    },
    {
      term: "Serveur d'autorisation :",
      description:
        "Serveur centralisé qui contribue à définir les limites de l'accès d'un utilisateur. Par exemple, votre serveur d'autorisation peut contrôler les données, les tâches et les fonctionnalités accessibles à un utilisateur. Un serveur d'autorisation ne sert pas à authentifier les utilisateurs. Cette tâche incombe au serveur d'authentification, qui est chargé de vérifier l'identité d'un utilisateur."
    },
    {
      term: "Serveur de ressources",
      description:
        "Serveur hébergeant des ressources protégées. Les serveurs de ressources traitent les requêtes pour des ressources sécurisées et y répondent."
    },
    {
      term: "Signature numérique",
      description:
        "Chaîne cryptée qui protège les bits d’un jeton contre la falsification. Si les bits sont modifiés ou altérés, la signature ne pourra plus être vérifiée et sera rejetée."
    },
    {
      term: "Témoin de session",
      description:
        "Entité émise par le logiciel médiateur après avoir établi que le jeton qu’il reçoit est signé, valide et provient d’une source de confiance (le fournisseur d’identité). Cette entité représente le fait qu’une authentification réussie a eu lieu avec le fournisseur d’identité. Ce témoin évite de devoir répéter continuellement ce processus avec les jetons, en permettant à l’utilisateur d’être considéré comme authentifié tant que le témoin est présent."
    },
    {
      term: "Tokenset",
      description:
        "Pour chaque connexion autorisée d'un utilisateur, comme Google ou Microsoft, Token Vault crée un conteneur sécurisé appelé tokenset. Un tokenset contient les jetons d'accès et d'actualisation nécessaires pour appeler les API de ce fournisseur externe au nom de l'utilisateur. Un tokenset stocke de manière sécurisée les jetons d'accès et d'actualisation sur le serveur d'autorisation Auth0."
    },
    {
      term: "Usurpation",
      description:
        "Scénario où un assaillant persuade un client ou un service de réaliser une tâche à sa place."
    },
    {
      term: "Web Service Federation (WS-Fed)",
      description:
        "Protocole de gestion des identités des utilisateurs entre les systèmes, les domaines et les fournisseurs d'identité. Ce protocole s'appuie sur WS-Trust pour établir une confiance et est principalement utilisé pour les produits Microsoft. Il définit des politiques sur la manière de partager les métadonnées de fédération. Développeurs * [Centre des développeurs](https://developer.auth0.com/resources) * [Exemples de code et guides](https://developer.auth0.com/resources/code-samples) * [Articles de blogue](https://auth0.com/blog/developers/) * [Vidéos](https://auth0.com/docs/videos) * [Identity Unlocked - Balados](https://identityunlocked.auth0.com/public/49/Identity,-Unlocked.--bed7fada) * [Infolettre Zero Index](https://developer.auth0.com/newsletter) Documentation * [Articles](https://auth0.com/docs/articles) * [Démarrages rapides](https://auth0.com/docs/quickstarts) * [API](https://auth0.com/docs/api) * [Bibliothèques SDK](https://auth0.com/docs/libraries) * [Blogue](https://auth0.com/blog/) * [Rapports](https://auth0.com/resources/ebooks) * [Webinaires](https://auth0.com/resources/webinars) Participez * [Forum](https://community.auth0.com/) * [Événements](https://developer.auth0.com/events) * [Programme d'ambassadeurs](https://auth0.com/ambassador-program) * [Programme de recherche Auth0](https://auth0.com/research-program) Entreprise * [Nos clients](https://auth0.com/customers) * [Conformité - Assurer la confidentialité et la sécurité](https://auth0.com/security) * [Partenaires](https://auth0.com/partners) * [Carrières Nous embauchons!](https://www.okta.com/company/careers/) * [Okta + Auth0](https://www.okta.com/okta-and-auth0/) Centre de soutien * [Communauté](https://community.auth0.com/) * [Soutien](https://support.auth0.com/) * [Aide](https://community.auth0.com/c/help/6) * [FAQ](https://community.auth0.com/c/faq/42) * [Auth0 Marketplace](https://marketplace.auth0.com) Apprentissage * [Apprendre](https://auth0.com/learn) * [Introduction à la gestion des identités et des accès (CIAM)](https://auth0.com/intro-to-iam) * [Blogue](https://auth0.com/blog/) Plateforme * [Gestion des accès](https://auth0.com/platform/access-management) * [Extensibilité](https://auth0.com/platform/extensibility) * [Sécurité](https://auth0.com/platform/login-security) * [Gestion des utilisateurs](https://auth0.com/platform/user-management) * [Authentification](https://auth0.com/platform/authentication) Fonctionnalités * [Universal Login](https://auth0.com/features/universal-login) * [Authentification unique](https://auth0.com/features/single-sign-on) * [Authentification multifacteur](https://auth0.com/features/multifactor-authentication) * [Actions](https://auth0.com/features/actions) * [Machine à machine](https://auth0.com/features/machine-to-machine) * [Authentification sans mot de passe](https://auth0.com/features/passwordless) * [Mots de passe compromis](https://auth0.com/features/breached-passwords) © 2025 Okta, Inc. Tous droits réservés. [État](https://status.auth0.com) • [Mentions légales](https://www.okta.com/agreements/) • [Confidentialité](https://auth0.com/privacy) • [Conditions](https://auth0.com/web-terms) • [Vos choix en matière de confidentialité](https://auth0.com/your-privacy-choices)<Frame>![](https://cdn.auth0.com/website/footer/ccpa.svg)</Frame> [État](https://status.auth0.com) • [Mentions légales](https://www.okta.com/agreements/) • [Confidentialité](https://auth0.com/privacy) • [Conditions](https://auth0.com/web-terms) • [Vos choix en matière de confidentialité](https://auth0.com/your-privacy-choices)<Frame>![](https://cdn.auth0.com/website/footer/ccpa.svg)</Frame>"
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
            placeholder='Rechercher par nom'
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
              aria-label={`Aller à ${letter}`}
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
            Aucun résultat pour « {term} ». Essayez un autre terme.
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
        "ログイン試行が信頼性の低いログインであると判断された場合にのみ、ユーザーに対してトリガーされる多要素認証（MFA）。Auth0はAdaptive MFAを使用して、正当なユーザーのログインエクスペリエンスを変えずに維持しながら、不正者に対してセキュリティを強化する必要がある場合にのみMFAをトリガーします。"
    },
    {
      term: "Auth0 Dashboard",
      description:
        "Auth0のプライマリ管理者インターフェイスで、アプリケーションまたはAPIを登録し、ユーザーストアまたは別のIDプロバイダーに接続して、Auth0サービスを構成できます。"
    },
    {
      term: "Fine-grained Authorization (FGA)",
      description:
        "個々のユーザーがアプリケーション内の特定のオブジェクトまたはリソースにアクセスできるようにするAuth0のSaaS製品。"
    },
    {
      term: "IDトークン",
      description:
        "リソースにアクセスするためのものではなく、クライアント自体を対象とした資格情報。クライアントが解析および検証できる固定形式です。"
    },
    {
      term: "IDプロバイダー (IdP)",
      description:
        "デジタルIDを保存および管理するサービス。Auth0は、信頼できるソーシャルIDプロバイダー、エンタープライズIDプロバイダー、および法的IDプロバイダーをサポートしています。Auth0は、アプリケーションのIDプロバイダーとしても機能します。"
    },
    {
      term: "JSON Web Token (JWT)",
      description:
        "二者間のクレームを安全に表現するための、オープンかつ業界標準のRFC 7519方法。Auth0では、IDトークンは常にJWT形式で返され、アクセストークンも多くの場合、JWT形式で返されます。JWT.ioで整形式のJWTをデコードして、クレームを表示できます。"
    },
    {
      term: "Lock",
      description:
        "ユーザーを認証するためのAuth0のUIウィジェット。これはそのまま使用でき、クラシックユニバーサルログインエクスペリエンスのデフォルトの顔です。Lockを使用すると、細かい動作や外観のオプションをカスタマイズできますが、その主な目的は使いやすさです。"
    },
    {
      term: "Management API",
      description:
        "Auth0サービスを管理し、プログラムに従って管理タスクを実行するためのAuth0のAPI。"
    },
    {
      term: "Nonce",
      description:
        "認証プロトコルで発行される任意の数値（多くの場合、乱数または擬似乱数）で、旧式の通信を使用したリプレイ攻撃の検出と軽減に使用できます。nonceは1回しか発行されないため、攻撃者が別のnonceを使用してトランザクションを再実行しようとすると、その誤ったトランザクションをより簡単に検出できます。"
    },
    {
      term: "OAuth 2.0",
      description:
        "認可プロトコルとワークフローを定義する認可フレームワーク。OAuth 2.0は、ロール、認可付与（またはワークフロー）、認可要求と応答、およびトークン処理を定義します。ユーザーIDを検証するOpenID Connect（OIDC）プロトコルによって、OAuth 2.0を拡張できます。"
    },
    {
      term: "OpenID",
      description:
        "アプリケーションがユーザーのログイン情報を収集および保存することなく（したがって、ユーザーのログイン情報について責任を負わずに）、ユーザーが本人であることを確認できる認証用のオープン標準。"
    },
    {
      term: "Organization",
      description:
        "B2B顧客がエンドユーザーを分類し、特定のロール、ログインエクスペリエンス、およびリソースへのアクセスを定義できるようにするAuth0製品。"
    },
    {
      term: "Security Assertion Markup Language (SAML)",
      description:
        "パスワードを使用せずに二者間で認証情報を交換できるXMLベースの標準化プロトコル。"
    },
    {
      term: "Ensemble de jetons",
      description:
        "Pour chaque connexion autorisée d'un utilisateur, comme Google ou Microsoft, Token Vault crée un conteneur sécurisé appelé ensemble de jetons. Un ensemble de jetons contient les jetons d'accès et d'actualisation nécessaires pour appeler les API de ce fournisseur externe au nom de l'utilisateur. Un ensemble de jetons stocke de façon sécurisée les jetons d'accès et d'actualisation sur le Serveur d'autorisation Auth0."
    },
    {
      term: "Webサービスフェデレーション (WS-Fed)",
      description:
        "WS-Trustを使用して信頼が確立されているシステム、ドメイン、およびIDプロバイダーの間でユーザーIDを管理するためのプロトコル。このプロトコルは主にMicrosoft製品に使用され、フェデレーションメタデータの共有方法に関するポリシーを定義します。"
    },
    {
      term: "アカウントリンク",
      description:
        "資格情報を1回提供するだけで、ユーザーが複数のリソースやアプリケーションにアクセスできるように、複数のプラットフォーム間でユーザーアカウントを接続すること。"
    },
    {
      term: "アクション",
      description:
        "Auth0実行中の特定の時点で実行される、Node.jsで記述された安全な関数。これはテナント固有であり、バージョン管理されています。アクションは、カスタムロジックでAuth0の機能をカスタマイズおよび拡張するために使用されます。"
    },
    {
      term: "アクセストークン",
      description:
        "アプリケーションがAPIにアクセスするために使用できる資格情報。これは、トークンのベアラーがAPIにアクセスし、付与されたスコープで指定された特定のアクションを実行する許可を得ていることをAPIに通知します。アクセストークンは任意の形式にできますが、一般的な2つのオプションとして、不透明な文字列とJSON Webトークン（JWT）があります。これらは、HTTP認可ヘッダー内のBearer資格情報としてAPIに送信される必要があります。"
    },
    {
      term: "アプリケーション",
      description:
        "認証とID管理を行うためにAuth0に依存するソフトウェア。Auth0は、シングルページ、通常のWeb、ネイティブ、およびマシンツーマシンのアプリケーションをサポートしています。"
    },
    {
      term: "オーディエンス",
      description:
        "発行されたトークンに対するオーディエンスを表す一意の識別子で、JSON Webトークン内でaudクレームとして特定されたもの。オーディエンス値は、IDトークンの場合はアプリケーション（Client ID）、アクセストークンの場合は呼び出されるAPI（API Identifier）のいずれかです。Auth0では、アクセストークンの要求で送信されるオーディエンス値によって、トークンが不透明形式で返されるかJWT形式で返されるかが決まります。"
    },
    {
      term: "カスタムドメイン",
      description:
        "特殊な名前、またはバニティ名を持つサードパーティのドメイン。CNAMEとも呼ばれます。"
    },
    {
      term: "クライアントID",
      description:
        "Valeur d'identification attribuée à une application après son enregistrement. Cette valeur est utilisée en combinaison avec d'autres services tiers et peut être consultée dans Auth0 Dashboard > Application Settings."
    },
    {
      term: "Secret client",
      description:
        "Secret utilisé par le client (application) pour s'authentifier auprès du serveur d'autorisation. Il s'agit d'une information connue uniquement du client et du serveur d'autorisation, et qui doit être suffisamment aléatoire pour ne pas pouvoir être devinée."
    },
    {
      term: "Revendication",
      description:
        "Attribut empaqueté dans un jeton de sécurité qui représente une revendication que le fournisseur du jeton fait au sujet d'une entité."
    },
    {
      term: "Groupe",
      description:
        "Ensemble d'un ou plusieurs utilisateurs. Dans l'extension d'autorisation Auth0, les groupes sont utilisés pour accorder l'accès à plusieurs utilisateurs à la fois."
    },
    {
      term: "Rappel",
      description:
        "URL vers laquelle Auth0 envoie une réponse après l'authentification. Il s'agit souvent de la même URL vers laquelle l'utilisateur est redirigé après l'authentification."
    },
    {
      term: "Abonnement",
      description:
        "Contrat qui définit les fonctionnalités et les quotas disponibles pour chaque locataire. Auth0 offre plusieurs niveaux d'abonnement pour répondre aux besoins variés des développeurs et des organisations."
    },
    {
      term: "Fin de prise en charge",
      description:
        "Étape de publication du produit indiquant que la fonctionnalité ou le comportement ciblé sera retiré de la plateforme. L'utilisation continue de cette fonctionnalité ou de ce comportement entraînera probablement des erreurs. Le nouveau comportement sera automatiquement activé pour les locataires qui n'ont pas choisi d'y adhérer pendant la période de migration."
    },
    {
      term: "Date de fin de prise en charge",
      description:
        "Date à laquelle l'accès à une fonctionnalité ou à un comportement sera retiré de la plateforme. La date de fin de prise en charge peut varier selon le type de plan."
    },
    {
      term: "Compte fantôme",
      description:
        "Méthode difficile à maintenir qui consiste à provisionner manuellement et individuellement les utilisateurs devant accéder à une application distante, du répertoire local vers le répertoire distant (créant essentiellement une copie du compte d'origine, c'est-à-dire un fantôme)."
    },
    {
      term: "Authentification unique (SSO)",
      description:
        "Service qui connecte automatiquement un utilisateur à d'autres applications après qu'il se soit connecté à une application, indépendamment de la plateforme, de la technologie ou du domaine utilisé par cet utilisateur. L'utilisateur se connecte une seule fois (d'où le nom de cette fonctionnalité). De même, la déconnexion unique (SLO) se produit lorsqu'un utilisateur se déconnecte d'une application et est ensuite déconnecté de chaque application ou service auquel il était connecté. Le SSO et le SLO sont rendus possibles grâce à l'utilisation de sessions."
    },
    {
      term: "Portée",
      description:
        "Mécanisme qui définit les actions spécifiques qu'une application peut effectuer ou les informations qu'une application peut demander au nom d'un utilisateur. Souvent, une application tente d'exploiter des informations déjà créées dans une ressource en ligne. Pour ce faire, l'application doit demander l'autorisation d'accéder à ces informations au nom de l'utilisateur. Lorsqu'une application demande l'autorisation d'accéder à une ressource via le serveur d'autorisation, elle utilise le paramètre de portée pour spécifier l'accès requis, et le serveur d'autorisation utilise le paramètre de portée pour répondre avec l'accès réellement accordé."
    },
    {
      term: "Jeton de sécurité",
      description:
        "Artefact signé numériquement utilisé pour prouver qu'un utilisateur a été authentifié avec succès."
    },
    {
      term: "Témoin de session",
      description:
        "Entité émise par l'intergiciel après que celui-ci a vérifié que le jeton reçu est signé, valide et provient d'une source fiable (fournisseur d'identité). Cette entité représente le fait que l'authentification par le fournisseur d'identité a réussi. Tant que le témoin existe, l'utilisateur est considéré comme authentifié, ce qui élimine la nécessité de répéter continuellement ce processus avec des jetons."
    },
    {
      term: "Répertoire",
      description:
        "Référentiel central d'utilisateurs (le plus connu étant Active Directory). Il permet une gestion centralisée des informations d'identification et des attributs, éliminant ainsi le besoin pour chaque application d'avoir sa propre configuration d'identité locale ou son propre groupe d'utilisateurs. L'authentification unique est possible pour toutes les applications utilisant le même répertoire d'utilisateurs."
    },
    {
      term: "Identité numérique",
      description:
        "Ensemble d'attributs qui définissent un utilisateur spécifique dans le contexte des fonctionnalités fournies par une application particulière."
    },
    {
      term: "Signature numérique",
      description:
        "Chaîne cryptographique qui protège les informations contenues dans un jeton contre la falsification. Si ces informations sont modifiées ou altérées, la signature ne peut plus être validée et sera rejetée."
    },
    {
      term: "Locataire",
      description:
        "Dans Auth0, il s'agit d'un groupe d'utilisateurs logiquement isolé qui partage un accès avec des privilèges spécifiques à une instance logicielle unique. Même si plusieurs locataires s'exécutent sur la même machine, un locataire ne peut pas accéder aux données d'un autre locataire. En général, le terme locataire est emprunté à l'architecture logicielle multi-locataire."
    },
    {
      term: "Point de terminaison de jeton",
      description:
        "Point de terminaison sur le serveur d'autorisation utilisé pour demander des jetons de manière programmatique."
    },
    {
      term: "Déclencheur",
      description:
        "Événement qui invoque automatiquement une action lorsqu'une opération spécifique se produit lors de l'exécution, comme la connexion d'un utilisateur. Plusieurs déclencheurs peuvent s'exécuter simultanément, certains bloquant le flux concerné, tandis que d'autres ne s'exécutent pas en même temps."
    },
    {
      term: "Sans mot de passe",
      description:
        "Forme d'authentification dont le premier facteur n'est pas un mot de passe. À la place, un mot de passe à usage unique reçu par courriel, SMS, notification push ou capteur biométrique peut être utilisé. Comme l'authentification sans mot de passe utilise des mots de passe à usage unique, les utilisateurs sont moins vulnérables aux attaques courantes basées sur les mots de passe (comme les attaques par dictionnaire ou par bourrage d'identifiants) par rapport à la connexion traditionnelle par nom d'utilisateur et mot de passe."
    },
    {
      term: "Détection de fuite de mot de passe",
      description:
        "Une forme de protection contre les attaques par laquelle Auth0 avertit les utilisateurs lorsqu'ils utilisent une combinaison de nom d'utilisateur et de mot de passe compromise lors d'une violation de données sur un site Web ou une application tierce."
    },
    {
      term: "Client public",
      description:
        "Selon le protocole OAuth 2.0, les clients (applications) peuvent être classés comme confidentiels ou publics selon qu'ils peuvent conserver les informations d'identification (telles que l'ID client et le secret) en toute sécurité. Les clients publics ne peuvent pas conserver les informations d'identification en toute sécurité et doivent donc utiliser uniquement des types d'octroi qui ne nécessitent pas l'utilisation d'un secret client. Les jetons d'identité émis pour les clients publics doivent être signés de manière asymétrique à l'aide d'une clé privée (RS256) et vérifiés à l'aide de la clé publique correspondant à la clé privée utilisée pour signer le jeton."
    },
    {
      term: "Flux",
      description:
        "Un processus qui peut être étendu à l'aide d'Actions. Chaque flux est composé d'un ou plusieurs déclencheurs et représente un pipeline logique dans lequel les informations circulent pendant un point unique d'une procédure Auth0."
    },
    {
      term: "Bêta",
      description:
        "Une étape de publication de produit qui précède la disponibilité générale (GA), au cours de laquelle la fonctionnalité ou le comportement ciblé est mis à la disposition des abonnés, leur donnant le temps d'examiner et d'adopter les nouvelles fonctionnalités du produit tout en fournissant des commentaires finaux. Sur le plan fonctionnel, le code est complet, stable et utile dans divers scénarios. Il est également considéré comme répondant ou presque aux attentes de qualité de la version GA. La version bêta peut être limitée à un groupe restreint d'abonnés sélectionnés (privée) ou mise à la disposition de tous les abonnés (publique)."
    },
    {
      term: "Détection de bots",
      description:
        "Une forme de protection contre les attaques par laquelle Auth0 bloque le trafic suspect de bots en activant le captcha pendant le processus de connexion."
    },
    {
      term: "Métadonnées",
      description:
        "Informations que l'utilisateur peut mettre à jour, telles que les préférences d'environnement et les paramètres de profil. Les métadonnées peuvent être ajoutées aux jetons d'identité et stockées dans le profil utilisateur."
    },
    {
      term: "Blocage/déblocage d'utilisateur",
      description:
        "Supprimer ou restaurer l'accès à la ressource demandée. Fait référence aux fonctionnalités de la suite de protection contre les attaques d'Auth0 (détection de mots de passe compromis, protection contre les attaques par force brute, limitation des adresses IP suspectes). Chaque service évalue les tendances de connexion/inscription et bloque les adresses IP associées à une activité suspecte."
    },
    {
      term: "Connexion universelle",
      description:
        "L'implémentation du flux d'authentification par Auth0, qui est une fonction principale du serveur d'autorisation. Chaque fois qu'une preuve d'identité de l'utilisateur est requise, l'application est redirigée vers la connexion universelle, où Auth0 effectue le traitement nécessaire pour garantir l'identité de l'utilisateur."
    },
    {
      term: "Serveur de ressources",
      description:
        "Un serveur qui héberge des ressources protégées. Le serveur de ressources accepte et répond aux demandes de ressources protégées."
    },
    {
      term: "Propriétaire de ressource",
      description:
        "Une entité (telle qu'un utilisateur ou une application) qui peut accorder l'accès à une ressource protégée."
    },
    {
      term: "Jeton d'actualisation",
      description:
        "Un jeton spécial qui peut être utilisé pour obtenir un jeton d'accès mis à jour. Ceci est utile pour actualiser les jetons d'accès qui expirent sans forcer l'utilisateur à se reconnecter. L'utilisation d'un jeton d'actualisation permet de demander un nouveau jeton d'accès à tout moment jusqu'à ce que le jeton d'actualisation soit inscrit sur la liste de blocage."
    },
    {
      term: "Rotation des jetons d'actualisation",
      description:
        "Une stratégie qui remplace fréquemment les jetons d'actualisation pour minimiser les vulnérabilités. Avec la rotation des jetons d'actualisation, chaque fois qu'une application échange un jeton d'actualisation pour obtenir un nouveau jeton d'accès, Auth0 renvoie également un nouveau jeton d'actualisation."
    },
    {
      term: "Localisation",
      description:
        "Une fonctionnalité qui permet de rendre la nouvelle expérience de connexion universelle dans les langues prises en charge."
    },
    {
      term: "Rôle",
      description:
        "Un aspect de l'identité de l'utilisateur attribué à un utilisateur qui indique le niveau d'accès dont l'utilisateur a besoin au système. Un rôle est essentiellement un ensemble de permissions."
    },
    {
      term: "Disponibilité générale",
      description:
        "Une étape de publication de produit au cours de laquelle la fonctionnalité ou le comportement ciblé est entièrement fonctionnel et disponible pour tous les abonnés (limités par le niveau de tarification) pour une utilisation en production. Lorsqu'une nouvelle version remplace une fonctionnalité existante, Auth0 fournit une période de rétrocompatibilité conformément à notre politique d'obsolescence et informe les clients afin de garantir le temps d'adopter la nouvelle version."
    },
    {
      term: "Limitation des adresses IP suspectes",
      description:
        "Une forme de protection contre les attaques qui protège le locataire contre les connexions suspectes provenant d'une seule adresse IP ciblant un très grand nombre de comptes."
    },
    {
      term: "Acteur malveillant",
      description:
        "Également appelé acteur de menace. Une entité (individu ou groupe) qui constitue une menace pour une entreprise ou un environnement avec l'intention de causer du tort. Les dommages peuvent inclure des dommages physiques et cybernétiques, allant de l'intrusion dans un centre de données au piratage d'un système avec des informations d'identification volées."
    },
    {
      term: "Confiance",
      description:
        "Lorsqu'une ressource croit positivement ce qu'un fournisseur d'identité ou une autorité de certification dit à propos d'un utilisateur, cette ressource fait confiance à ce fournisseur d'identité ou à cette autorité de certification."
    },
    {
      term: "Périmètre",
      description:
        "Un ensemble de limites qui entourent un répertoire, tous ses utilisateurs et toutes les applications qui utilisent ce répertoire. Dans certaines implémentations, ce périmètre fait référence à un emplacement physique. Il peut également faire référence à un ensemble de réseaux ou d'appareils connectés via un VPN."
    },
    {
      term: "Authentification multifacteur (AMF)",
      description:
        "Processus d'authentification qui prend en compte plusieurs facteurs. Habituellement, avec Auth0, le premier facteur est un échange standard nom d'utilisateur/mot de passe, et le deuxième facteur est un code ou un lien par courriel ou SMS, un mot de passe à usage unique via une application comme Authy ou Google Authenticator, ou une notification push via une application mobile comme Guardian ou Duo. L'utilisation de plusieurs facteurs permet de protéger votre compte même si l'un des facteurs est compromis, par exemple si votre mot de passe tombe entre de mauvaises mains ou si votre téléphone cellulaire est volé."
    },
    {
      term: "廃止",
      description:
        "対象の機能または動作が新規サブスクライバーによる使用をサポートしていないことに加え、積極的な強化が行われおらず、かつ最小限のメンテナンスしか行われていないことを示す製品リリース段階。廃止の時点でその機能または動作を使用していたテナントは、引き続きアクセスできます。"
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
      term: "総当たり攻撃防御",
      description:
        "単一のIPアドレスから発生し、単一のユーザーアカウントをターゲットとする総当たり攻撃から保護する攻撃防御の形式。"
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
        "OAuth 2.0で概説されている認可付与の別名。認可フローは、リソース（アプリケーションまたはAPI）が要求元にアクセスを許可するために使用するワークフローです。テクノロジーのタイプ（たとえば、アプリケーションがクライアントシークレットを保存できる場合）と要求元のタイプに基づいて、リソース所有者は認可コードフロー、Proof of Key Code Exchange（PKCE）、Resource Owner Password Credential（ROPG）、暗黙フロー、またはクライアントの資格情報を使用できます。"
    },
    {
      term: "認証サーバー",
      description:
        "ユーザーのアイデンティティを確認または拒否するサーバー。認証サーバーによって、ユーザーが利用できるアクションやリソースが制限されることはありません（ただし、この目的でコンテキストを提供することは可能）。"
    },
    {
      term: "認証デバイス",
      description: "クライアントが開始するバックチャネル認証フロー内。"
    }
  ]

  // Toutes les lettres de A à Z + caractères japonais uniques extraits dynamiquement
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
            placeholder='Rechercher par nom'
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className='w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black pl-10 pr-4 py-3 outline-none focus:border-indigo-500 dark:focus:border-indigo-400 text-gray-900 dark:text-gray-100'
          />
        </div>
      </div>

      {/* Index A à Z */}
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
              aria-label={`Aller à ${letter}`}
            >
              {letter}
            </button>
          )
        })}
      </nav>

      {/* Groupes */}
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
            Aucun résultat pour « {term} ». Essayez un autre terme.
          </p>
        )}
      </section>
    </div>
  )
}