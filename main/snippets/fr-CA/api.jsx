export const AuthenticationApiSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 leading-relaxed">
      {/* Colonne de gauche */}
      <div>
        <p>
          L’Authentication API offre des fonctionnalités d’identité pour Auth0 et les protocoles d’identité pris en charge (y compris
          OpenID Connect, OAuth et SAML).
        </p>
        <p className="mt-3">
          En général, vous devriez utiliser cette API au moyen d’une des trousses de développement logiciel (SDK) Auth0, comme{" "}
          <a href="/docs/libraries/auth0js">Auth0.js</a>, ou d’une bibliothèque comme <a href="/docs/libraries/lock">Lock</a>.
          Toutefois, si vous créez votre interface utilisateur d’authentification manuellement, vous devrez appeler directement
          l’Authentication API.
        </p>
      </div>

      {/* Colonne de droite */}
      <div>
        <p>Voici quelques exemples de tâches&nbsp;:</p>
        <ul className="space-y-2 !mt-0">
          <li>
            Obtenir des <a href="/docs/secure/tokens">jetons</a> durant l’authentification
          </li>
          <li>
            Demander le profil d’un utilisateur à l’aide d’un <a href="/docs/secure/tokens/access-tokens">jeton d’accès (Access Token)</a>
          </li>
          <li>
            Échanger des <a href="/docs/secure/tokens/refresh-tokens">jetons d’actualisation (Refresh Tokens)</a> contre de nouveaux jetons d’accès (Access Tokens)
          </li>
          <li>
            Demander un défi pour{" "}
            <a href="/docs/secure/multi-factor-authentication">l’authentification multifacteur (AMF&nbsp;/&nbsp;MFA)</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export const ManagementApiSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 leading-relaxed">
      {/* Colonne de gauche */}
      <div>
        <p>
          La Management API vous permet de gérer votre compte Auth0 de façon programmatique, afin que vous puissiez automatiser la configuration
          de votre environnement. La plupart des tâches que vous pouvez effectuer dans l’Auth0 Management Dashboard peuvent aussi être exécutées
          de façon programmatique en utilisant cette API.
        </p>
      </div>

      {/* Colonne de droite */}
      <div>
        <p>Voici quelques exemples de tâches&nbsp;:</p>
        <ul className="space-y-2 !mt-0">
          <li>Enregistrer vos applications et API auprès d’Auth0</li>
          <li>
            Configurer des <a href="/docs/connections">connexions</a> au moyen desquelles vos utilisateurs peuvent s’authentifier
          </li>
          <li>
            <a href="/docs/manage-users">Gérer les utilisateurs</a>
          </li>
          <li>
            <a href="/docs/manage-users/user-accounts/user-account-linking/link-user-accounts">Lier des comptes utilisateur</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export const MyAccountApiSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 leading-relaxed">
      {/* Colonne de gauche */}
      <div>
        <p>
          L’Auth0 My Account API fournit un ensemble dédié de points de terminaison permettant aux utilisateurs de gérer les informations
          de leur propre compte. Vous pouvez utiliser ces API pour créer des expériences libre-service dans vos applications ou ajouter
          progressivement des détails à un compte utilisateur.
        </p>
      </div>

      {/* Colonne de droite */}
      <div>
        <p>Voici quelques exemples de tâches&nbsp;:</p>
        <ul className="space-y-2 !mt-0">
          <li>Permettre à l’utilisateur final de gérer ses propres facteurs</li>
          <li>Mettre à jour les détails d’une méthode d’authentification</li>
          <li>Savoir quelles méthodes d’authentification sont disponibles</li>
        </ul>
      </div>
    </div>
  );
};