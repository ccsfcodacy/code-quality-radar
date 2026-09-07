// Explore articles: editorial/comparison content, distinct from the glossary
// (which defines terms). Each article maps to a real dataset facet so its
// ranked list and counts are derived, never hand-maintained.
//
// Only one article type exists today — "best-of" pages for each git hosting
// platform, intended as SEO/paid-search landing pages matching a specific
// buyer query ("best code review tools for GitHub"). The shape leaves room
// for other editorial types (vs, alternatives, guides) later without a
// restructure, but only best-of is built and should be treated as real.

export const EXPLORE_GROUPS = ["Best of"];

export const EXPLORE_ARTICLES = [
  {
    slug: "best-code-review-tools-for-github",
    type: "best-of",
    group: "Best of",
    provider: "GitHub",
    source: { key: "github_cloud" },
    short: "The code review and security tools that integrate with GitHub Cloud.",
    intro: [
      "GitHub Cloud is the default choice for most teams, which also makes it the platform with the widest selection of review and security tooling. Most tools here integrate as a GitHub App, reading pull requests and posting review comments, status checks and merge-gate decisions directly on the PR.",
      "Because GitHub owns a large share of the market itself — Advanced Security, Copilot code review, and Dependabot are all first-party — the practical decision for a GitHub-hosted team is usually less about whether a tool can reach GitHub at all, and more about whether GitHub's own tooling already covers what you need before paying for a third-party platform on top of it.",
    ],
    lookFor: [
      "Whether the tool installs as a GitHub App (repo-scoped permissions) or asks for a personal access token with broader access",
      "Whether it duplicates a capability GitHub Advanced Security or Copilot already covers on your current plan",
      "GitHub Marketplace listing and pricing, if you'd rather billing go through GitHub directly",
      "Rate-limit behaviour on large monorepos or high pull-request volume",
    ],
  },
  {
    slug: "best-code-review-tools-for-github-enterprise-server",
    type: "best-of",
    group: "Best of",
    provider: "GitHub Enterprise Server",
    source: { key: "github_enterprise_server" },
    short: "Code review and security tools that support a self-hosted GitHub Enterprise Server instance.",
    intro: [
      "GitHub Enterprise Server (GHES) is GitHub's self-hosted edition, run inside an organisation's own network rather than on github.com. That single fact changes which tools are even eligible: a cloud-only scanner cannot reach a GHES instance sitting behind a firewall, regardless of how well it integrates with GitHub Cloud.",
      "The tools that do support GHES generally need one of two things: a self-hosted or on-prem deployment of the scanner itself so it can reach the instance directly, or an outbound connector the GHES instance can call out through. Either way, GHES version compatibility is a real constraint — a tool built against the current GitHub API may not support an org running an older GHES release.",
    ],
    lookFor: [
      "Whether the tool needs inbound network access to GHES, or connects outbound instead",
      "Which GHES versions are certified to work, not just \"GitHub\" generically",
      "Whether the tool itself needs to run on-prem to reach an air-gapped GHES instance",
      "GitHub App support on GHES specifically — some integrations are Cloud-only",
    ],
  },
  {
    slug: "best-code-review-tools-for-gitlab",
    type: "best-of",
    group: "Best of",
    provider: "GitLab",
    source: { key: "gitlab_cloud" },
    short: "Code review and security tools that integrate with GitLab's merge request workflow.",
    intro: [
      "GitLab's review workflow is built around the merge request (MR) rather than the pull request, and its CI/CD pipelines are native to the platform rather than a bolted-on integration. Tools built for GitLab typically post findings as MR discussion threads and can participate directly in pipeline stages, rather than only reacting to a webhook after the fact.",
      "GitLab also ships a broad set of security scanning natively — SAST, dependency scanning, secret detection and more are built into GitLab Ultimate. As with GitHub, that changes the calculation for a third-party tool: the question is often less \"can it reach GitLab\" and more \"does it do something GitLab's own scanning doesn't.\"",
    ],
    lookFor: [
      "Whether findings appear as MR discussion threads or only in a separate dashboard",
      "Whether the tool runs as a pipeline job (full log/artifact access) or purely via API/webhook",
      "Overlap with GitLab Ultimate's built-in SAST, dependency and secret scanning",
      "Support for merge trains and approval rules, if your team uses them",
    ],
  },
  {
    slug: "best-code-review-tools-for-gitlab-self-managed",
    type: "best-of",
    group: "Best of",
    provider: "GitLab Self-Managed",
    source: { key: "gitlab_self_managed" },
    short: "Code review and security tools that support a self-managed GitLab instance.",
    intro: [
      "Self-managed GitLab runs on infrastructure the organisation controls — often chosen for data-residency or air-gap requirements that GitLab.com cannot satisfy. As with any self-hosted git platform, a tool's support for GitLab.com does not automatically mean it supports a self-managed instance behind a private network.",
      "The tools that do tend to fall into two groups: those offering their own self-hosted deployment so the whole pipeline stays inside the same network boundary, and cloud-hosted tools that support an outbound connection from a self-managed instance to the vendor's API.",
    ],
    lookFor: [
      "Whether the tool's own deployment model matches — a cloud-only scanner paired with an air-gapped GitLab instance cannot work",
      "GitLab version compatibility, since self-managed instances are often pinned to a specific release",
      "Whether the integration works through GitLab CI/CD pipeline jobs or needs direct API access to the instance",
      "License cost — GitLab's own scanning features require an Ultimate license, which changes the build-vs-buy math",
    ],
  },
  {
    slug: "best-code-review-tools-for-bitbucket",
    type: "best-of",
    group: "Best of",
    provider: "Bitbucket",
    source: { key: "bitbucket_cloud" },
    short: "Code review and security tools that integrate with Bitbucket Cloud.",
    intro: [
      "Bitbucket Cloud is Atlassian's hosted git platform, most often chosen by teams already standardised on the Atlassian stack — Jira for tracking, Bitbucket Pipelines for CI, Confluence for docs. Review and security tools here typically integrate through the Bitbucket Cloud REST API and post findings as PR comments or build statuses on Pipelines.",
      "The ecosystem of third-party tools supporting Bitbucket is smaller than GitHub's or GitLab's, which narrows the field faster than it does for the bigger platforms. Jira integration is also a bigger differentiator here than on other platforms, since a Bitbucket-hosted team is disproportionately likely to already be running Jira.",
    ],
    lookFor: [
      "Native Bitbucket Pipelines integration versus a generic webhook that happens to work",
      "Jira integration quality, if findings need to become tracked tickets",
      "Whether the tool is listed on the Atlassian Marketplace",
      "Bitbucket-specific rate limits, which are stricter than GitHub's for some API categories",
    ],
  },
  {
    slug: "best-code-review-tools-for-bitbucket-data-center",
    type: "best-of",
    group: "Best of",
    provider: "Bitbucket Data Center",
    source: { key: "bitbucket_data_center" },
    short: "Code review and security tools that support Bitbucket Data Center, Atlassian's self-hosted edition.",
    intro: [
      "Bitbucket Data Center is Atlassian's self-hosted, clustered edition of Bitbucket, aimed at large enterprises with their own infrastructure and often a regulatory reason for keeping source code on-prem. It replaced the now end-of-life Bitbucket Server, and support for one does not imply support for the other — check that a tool names Data Center specifically, not just \"Bitbucket Server\" from older documentation.",
      "Given the buyer profile — regulated industries, large enterprises — the tools that support Data Center well tend to also be the ones with mature self-hosted or air-gapped deployment options of their own, since a cloud-only scanner is rarely a fit for the same organisation that chose Data Center in the first place.",
    ],
    lookFor: [
      "Whether documentation specifically names Data Center, rather than the retired Bitbucket Server",
      "Compatibility with a clustered, high-availability Bitbucket deployment",
      "Whether the scanning tool itself can be self-hosted or air-gapped to match",
      "SSO/SAML alignment with the same identity provider Data Center is configured against",
    ],
  },
  {
    slug: "best-code-review-tools-for-azure-devops",
    type: "best-of",
    group: "Best of",
    provider: "Azure DevOps",
    source: { key: "azure_devops" },
    short: "Code review and security tools that integrate with Azure DevOps Repos and Pipelines.",
    intro: [
      "Azure DevOps bundles source control (Repos), CI/CD (Pipelines), and work tracking (Boards) into one Microsoft-operated product, and is disproportionately common among teams already standardised on the Microsoft/.NET stack. Tools here typically integrate as an Azure DevOps extension from the Visual Studio Marketplace, or via a pipeline task that runs as a build step.",
      "The pool of third-party tools supporting Azure DevOps is the smallest of the platforms tracked here. Several tools list Azure Pipelines as a supported CI system without listing Azure Repos as a supported git provider — the two are separate integration points, and a tool can support one without the other.",
    ],
    lookFor: [
      "Whether Azure Repos (source) is supported, not just Azure Pipelines (CI) — they're listed separately in most vendor docs",
      "Whether the integration is a pipeline task, a service hook, or a full Visual Studio Marketplace extension",
      "Work item linking to Azure Boards, if findings need to become tracked tasks",
      "Support for both Azure DevOps Services (cloud) and Azure DevOps Server (self-hosted), which are different products",
    ],
  },
];

export function getExploreArticle(slug) {
  return EXPLORE_ARTICLES.find((a) => a.slug === slug) || null;
}

/**
 * Tools ranked for a best-of article: full support first (Codacy leading
 * only within that band, per the site-wide rule that partial support never
 * leads a list), then partial support, alphabetically within each band.
 */
export function rankToolsForArticle(article, tools) {
  const key = article.source.key;
  const valueOf = (t) => t.values?.gitProviders?.[key] || "unknown";
  const matching = tools.filter((t) => valueOf(t) === "yes" || valueOf(t) === "partial");
  const byName = (a, b) => a.name.localeCompare(b.name);
  const full = matching.filter((t) => valueOf(t) !== "partial");
  const partial = matching.filter((t) => valueOf(t) === "partial");
  const ranked = [
    ...full.filter((t) => t.slug === "codacy"),
    ...full.filter((t) => t.slug !== "codacy").sort(byName),
    ...partial.sort(byName),
  ];
  return ranked.map((t) => ({ ...t, partial: valueOf(t) === "partial" }));
}
