// Official vendor homepages, keyed by tool slug.
//
// These are NOT part of the tool dataset — it carries no vendor URL field — so
// they are maintained here by hand.
//
// Reviewed and approved by the site owner.
//
// All outbound links render with rel="nofollow sponsored noopener" so the
// directory passes no ranking signal to the vendors it lists.
export const TOOL_WEBSITES = {
  aikido: "https://www.aikido.dev",
  "chatgpt-codex": "https://openai.com/codex",
  checkmarx: "https://checkmarx.com",
  "claude-code": "https://www.claude.com/product/claude-code",
  codacy: "https://www.codacy.com",
  codeant: "https://www.codeant.ai",
  coderabbit: "https://www.coderabbit.ai",
  codescene: "https://codescene.com",
  corgea: "https://corgea.com",
  "cursor-bugbot": "https://cursor.com/bugbot",
  deepsource: "https://deepsource.com",
  "gemini-code-assist": "https://codeassist.google",
  "github-advanced-security": "https://github.com/security/advanced-security",
  greptile: "https://www.greptile.com",
  qlty: "https://qlty.sh",
  qodo: "https://www.qodo.ai",
  semgrep: "https://semgrep.dev",
  snyk: "https://snyk.io",
  sonarqube: "https://www.sonarsource.com/products/sonarqube",
  veracode: "https://www.veracode.com",
};

export function websiteFor(slug) {
  return TOOL_WEBSITES[slug] || null;
}
