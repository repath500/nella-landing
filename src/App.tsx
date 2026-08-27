import { type FormEvent, useEffect, useState } from "react";
import { AppleLogo } from "@phosphor-icons/react/dist/csr/AppleLogo";
import { ArrowUpRight } from "@phosphor-icons/react/dist/csr/ArrowUpRight";
import { BookOpenText } from "@phosphor-icons/react/dist/csr/BookOpenText";
import { CalendarBlank } from "@phosphor-icons/react/dist/csr/CalendarBlank";
import { CheckCircle } from "@phosphor-icons/react/dist/csr/CheckCircle";
import { ChatText } from "@phosphor-icons/react/dist/csr/ChatText";
import { Cloud } from "@phosphor-icons/react/dist/csr/Cloud";
import { CloudArrowUp } from "@phosphor-icons/react/dist/csr/CloudArrowUp";
import { EnvelopeSimple } from "@phosphor-icons/react/dist/csr/EnvelopeSimple";
import { FileText } from "@phosphor-icons/react/dist/csr/FileText";
import { HardDrives } from "@phosphor-icons/react/dist/csr/HardDrives";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/csr/MagnifyingGlass";
import { Note } from "@phosphor-icons/react/dist/csr/Note";
import { ShieldCheck } from "@phosphor-icons/react/dist/csr/ShieldCheck";
import { SlackLogo } from "@phosphor-icons/react/dist/csr/SlackLogo";
import { WhatsappLogo } from "@phosphor-icons/react/dist/csr/WhatsappLogo";
import { MicrosoftTeamsLogo } from "@phosphor-icons/react/dist/csr/MicrosoftTeamsLogo";
import { UsersThree } from "@phosphor-icons/react/dist/csr/UsersThree";
import { XCircle } from "@phosphor-icons/react/dist/csr/XCircle";
import Anthropic from "@lobehub/icons/es/Anthropic";
import Azure from "@lobehub/icons/es/Azure";
import Bedrock from "@lobehub/icons/es/Bedrock";
import Cohere from "@lobehub/icons/es/Cohere";
import DeepSeek from "@lobehub/icons/es/DeepSeek";
import Gemini from "@lobehub/icons/es/Gemini";
import IBM from "@lobehub/icons/es/IBM";
import Kimi from "@lobehub/icons/es/Kimi";
import Mistral from "@lobehub/icons/es/Mistral";
import Nvidia from "@lobehub/icons/es/Nvidia";
import OpenAI from "@lobehub/icons/es/OpenAI";
import Qwen from "@lobehub/icons/es/Qwen";
import XAI from "@lobehub/icons/es/XAI";
import ZAI from "@lobehub/icons/es/ZAI";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";
import { fullBlogContent } from "./blogContent";

const navItems = [
  ["How it works", "/how-it-works"],
  ["What it supports", "/what-it-supports"],
  ["Privacy and deployment", "/privacy-and-deployment"],
] as const;

const capabilities = [
  {
    className: "capability capability-conversation",
    icon: EnvelopeSimple,
    title: "Message Nella like a colleague.",
    body: "Use the channels your firm already approves. No new interface for your lawyers to learn.",
    content: (
      <div
        className="conversation"
        role="group"
        aria-label="Example request and response using fictional matter data"
      >
        <p className="conversation-request">
          <strong>James · 08:42</strong>Bring me up to speed before the Murphy
          meeting.
        </p>
        <p className="conversation-response">
          <strong>Nella · prepared work</strong>The medical report arrived
          Monday. The signed authority is still outstanding. Your meeting brief
          is ready for review.
        </p>
      </div>
    ),
  },
  {
    className: "capability capability-meetings",
    icon: CalendarBlank,
    title: "Your day, prepared.",
    body: "Briefings, diary preparation, reminders and follow-ups, shaped around the way your team starts its day.",
  },
  {
    className: "capability capability-inbox",
    icon: MagnifyingGlass,
    title: "Your inbox, lighter.",
    body: "Summarise threads, identify matters, draft routine correspondence and keep the next task visible.",
  },
  {
    className: "capability capability-private",
    icon: ShieldCheck,
    title: "Your matters, in context.",
    body: "Retrieve the right material, build chronologies and prepare matter briefs from approved sources.",
  },
  {
    className: "capability capability-documents",
    icon: FileText,
    title: "Your documents, organised.",
    body: "Work from approved templates, compare versions and extract the detail your team needs to review.",
  },
  {
    className: "capability capability-research",
    icon: Note,
    title: "Your research, review-ready.",
    body: "Create sourced packs and structured findings for a responsible professional to check, never unreviewed legal advice.",
  },
];

const workflowAreas = [
  [
    "Your day",
    "Prepare my morning matter brief.",
    "Briefings, diary preparation, reminders and follow-ups.",
    "A responsible professional checks the brief and decides what matters next.",
    "Approved calendars, matter systems and internal tasks.",
    "Less time spent assembling the day from separate places.",
  ],
  [
    "Your inbox",
    "Find what is still outstanding and draft the follow-up.",
    "Thread summaries, matter identification, drafts and tasks.",
    "A person reviews the draft before any external message is sent.",
    "Approved mailboxes, matter records and document stores.",
    "A clearer view of what needs attention.",
  ],
  [
    "Your matters",
    "Bring me up to speed on this matter.",
    "Retrieval, chronologies, status checks and matter briefs.",
    "The responsible professional reviews source context and conclusions.",
    "Approved matter documents and practice systems.",
    "Less searching before a decision or meeting.",
  ],
  [
    "Your documents",
    "Draft this from the approved precedent.",
    "Template-based drafting, comparison, extraction and precedent search.",
    "A lawyer or authorised reviewer owns the final document.",
    "Approved templates, precedents and document repositories.",
    "More consistent preparation around the firm’s own standards.",
  ],
  [
    "Your meetings",
    "Turn these notes into an attendance note and tasks.",
    "Preparation, dictated notes, attendance notes and follow-up actions.",
    "The meeting owner checks the note and approves follow-up.",
    "Approved meeting records, calendars and task systems.",
    "Fewer loose ends after the meeting.",
  ],
  [
    "Your research",
    "Create a sourced research pack for review.",
    "Review-ready findings with source context and open questions.",
    "Nella does not provide unreviewed legal advice; the responsible professional decides.",
    "Approved research sources and internal knowledge.",
    "A more structured starting point for professional review.",
  ],
] as const;

const implementationSteps = [
  [
    "01",
    "Understand the firm.",
    "Your people, matter types, documents, safeguards and preferred way of working.",
  ],
  [
    "02",
    "Connect approved systems.",
    "Connect the channels, repositories and practice systems needed for the first use cases.",
  ],
  [
    "03",
    "Configure workflows and boundaries.",
    "Set permissions, templates, terminology, approvals and disabled actions.",
  ],
  [
    "04",
    "Test representative work.",
    "Evaluate the experience against the workflows, sources and edge cases that matter to your team.",
  ],
  [
    "05",
    "Roll out with review.",
    "Put people, permissions and approval checkpoints in place before a wider rollout begins.",
  ],
  [
    "06",
    "Measure and improve.",
    "Keep Nella managed, monitored and improved with your firm as the work changes.",
  ],
] as const;

const deploymentModels = [
  [
    "Nella-managed private environment",
    Cloud,
    "A managed environment designed around the firm’s requirements and operating model.",
    "Availability and exact capabilities depend on architecture, integrations and provider policy.",
  ],
  [
    "Customer-controlled cloud",
    CloudArrowUp,
    "Nella runs inside a cloud environment controlled by the customer.",
    "The consultation defines the division of responsibilities, support model and infrastructure.",
  ],
  [
    "Local or sovereign deployment",
    HardDrives,
    "Nella runs locally or in a sovereign environment when residency, operations or provider policy require it.",
    "The consultation defines the infrastructure, support model, capability and cost.",
  ],
] as const;

const comparisonRows = [
  [
    "Implementation",
    "Firm-specific discovery, configuration and ongoing management.",
    "Usually self-serve or general-purpose setup.",
    "Built and maintained internally.",
  ],
  [
    "Deployment",
    "Discussed around the firm’s requirements and available operating models.",
    "Varies by provider.",
    "Depends on internal infrastructure and capability.",
  ],
  [
    "Controls",
    "Permissions, approval states and disabled actions are part of the design.",
    "Varies by provider and plan.",
    "Must be designed and maintained by the team.",
  ],
  [
    "Workflow fit",
    "Configured around approved processes, terminology and systems.",
    "The firm adapts to the product’s defaults.",
    "Can be tailored, with internal effort required.",
  ],
  [
    "Accountability",
    "Nella stays involved in rollout, review and improvement.",
    "Support and responsibility vary by provider.",
    "Owned by the internal project team.",
  ],
] as const;

const resourceCards = [
  [
    "AI adoption questions for law-firm leaders",
    "A practical starting point for choosing a first workflow, setting boundaries and deciding who needs to be involved.",
    "Read the guide",
    "/blog/ai-adoption-questions-for-law-firm-leaders",
  ],
  [
    "Privacy questions to ask an assistant provider",
    "A plain-language checklist covering data boundaries, providers, retention, access and evidence.",
    "Read the guide",
    "/blog/privacy-questions-for-a-law-firm-ai-provider",
  ],
  [
    "Managed private, customer cloud or local?",
    "A decision guide for comparing capability, residency, operations, latency, cost and provider policy.",
    "Read the guide",
    "/blog/managed-private-customer-cloud-or-local",
  ],
  [
    "How to evaluate an assistant on real work",
    "A framework for representative testing, review checkpoints, rollout and continuous improvement.",
    "Read the guide",
    "/blog/evaluate-an-assistant-on-real-work",
  ],
] as const;

const privacyQuestions = [
  [
    "Where does my information live?",
    "Nella uses one of three deployment models: a Nella-managed private environment, a customer-controlled cloud deployment, or a local/sovereign deployment. The deployment record names the hosting region, processing locations, storage, search index, logs, backups and support access.",
  ],
  [
    "Does Nella train on my clients' information?",
    "Nella does not use customer content to train shared models. The deployment record and contract name the provider, model route, retention setting and any exception before a firm sends client information.",
  ],
  [
    "Can Nella run inside our Azure environment?",
    "Yes. Nella can run in a customer-controlled Azure environment when the architecture, identity model, networking, integrations, support responsibilities and provider policy are agreed in the deployment plan.",
  ],
  [
    "Can we prohibit specific AI providers?",
    "Yes, provider and model policy should be configurable at firm level and, where required, by data class, workflow or matter. A firm should be able to say which providers are allowed, restricted or local-only.",
  ],
  [
    "Can the model itself run locally?",
    "Yes, for selected workloads. Local inference changes the infrastructure, model choice, latency, support and cost; the deployment plan identifies which workflows run locally and which do not.",
  ],
  [
    "Can different matters have different access rules?",
    "Matter-level access is part of the design. Permissions should be checked before retrieval, inherited from the firm's systems where possible, and able to reflect ethical walls, teams, roles and matter-specific restrictions.",
  ],
  [
    "What happens when an employee leaves?",
    "The firm's identity source should disable access, revoke active sessions and connector permissions, and trigger an access review. The firm should also decide what happens to that person's drafts, preferences, approvals and activity history.",
  ],
  [
    "Can we delete everything?",
    "Retention and deletion should cover the runtime, source copies, indexes, caches, logs and backups, with a documented schedule and exceptions for legal or security obligations. The exact deletion path belongs in the agreed data-processing and operations documentation.",
  ],
  [
    "Who can see Nella's activity?",
    "The default should be least privilege: the people who need to operate the service, the firm's authorised administrators, and approved support or incident responders under the agreed access model. Content access and metadata access should be distinguishable.",
  ],
  [
    "How are external actions approved?",
    "External messages, meetings, document shares and other consequential actions should default to approval required. An action broker checks the actor, matter, recipient, policy and approval before deterministic software executes it.",
  ],
  [
    "What gets logged?",
    "A useful audit trail records who asked, which matter and sources were in scope, what Nella prepared, which policy applied, what tool was requested, who approved it, and what happened. Retention and content detail should be configurable and documented.",
  ],
  [
    "How are backups handled?",
    "Backups should be encrypted, access-controlled, tested for restoration and covered by an explicit retention window. A firm should know where backups are stored, how deletion propagates, and what the recovery process means for its matters.",
  ],
  [
    "What subprocessors are involved?",
    "The current register should identify infrastructure, model, search, transcription, voice, monitoring and support subprocessors that process customer data or content. It should be versioned, reviewed with the firm and updated when the processing chain changes.",
  ],
] as const;

const privacyGuidance = [
  [
    "Ireland",
    "Law Society of Ireland: generative AI guidance",
    "https://production.lawsociety.ie/artificial-intelligence-ai/generative-ai-guidance/",
  ],
  [
    "England and Wales",
    "SRA warning notice on misuse of AI",
    "https://media.sra.org.uk/solicitors/guidance/misuse-ai/",
  ],
  [
    "Germany / EU",
    "BRAK guidance on AI use in legal practice",
    "https://www.brak.de/fileadmin/service/publikationen/Handlungshinweise/BRAK_Leitfaden_mit_Hinweisen_zum_KI-Einsatz_Stand_12_2024.pdf",
  ],
  [
    "United States",
    "ABA Formal Opinion 512",
    "https://www.americanbar.org/content/dam/aba/administrative/professional_responsibility/ethics-opinions/aba-formal-opinion-512.pdf",
  ],
] as const;

const aboutTracks = [
  [
    "Critique.sh",
    "Production autonomous systems",
    "Our team also builds Critique.sh, an autonomous coding system used to inspect, fix and verify software changes. That work gives the team hands-on experience operating agents with permissions, evaluations, verification, observability and clear boundaries — not simply better prompts.",
    "https://www.critique.sh/",
  ],
  [
    "Europa Legal Commons",
    "Legal-domain experience",
    "Our work on Europa Legal Commons explored how AI systems can operate within European legal and regulatory contexts while remaining grounded in structured legal material and clearly defined boundaries. It is legal-domain experience, not a claim that we have already run a 500-person law-firm deployment.",
    "",
  ],
] as const;

const blogPosts = [
  {
    slug: "ai-adoption-questions-for-law-firm-leaders",
    title: "The questions a law-firm leader should ask before adopting AI",
    dek: "A serious first conversation starts with workflow, permissions and accountability — not a demo of the newest model.",
    label: "Field note",
    date: "26 August 2026",
    readTime: "7 min read",
    source:
      "Law Society of Ireland, SRA, German Bar Association and ABA guidance should be reviewed with local counsel before adoption.",
  },
  {
    slug: "privacy-questions-for-a-law-firm-ai-provider",
    title: "13 privacy questions to ask an AI provider before a pilot",
    dek: "The useful privacy conversation is specific enough to answer where data goes, who can act, what is logged and how deletion works.",
    label: "Trust and privacy",
    date: "26 August 2026",
    readTime: "9 min read",
    source:
      "Nella product and security requirements; provider terms must be checked for the selected deployment.",
  },
  {
    slug: "managed-private-customer-cloud-or-local",
    title: "Managed private, customer cloud or local?",
    dek: "Deployment is not a badge. It is a set of trade-offs across capability, residency, operations, provider policy and cost.",
    label: "Deployment",
    date: "26 August 2026",
    readTime: "6 min read",
    source:
      "Microsoft 365 Copilot privacy documentation, Harvey Privacy Center, and customer-specific architecture review.",
  },
  {
    slug: "evaluate-an-assistant-on-real-work",
    title: "How to evaluate an assistant on real legal work",
    dek: "A trustworthy evaluation measures the workflow, the evidence, the boundary conditions and the human review — not just the answer in a chat window.",
    label: "Evaluation",
    date: "26 August 2026",
    readTime: "8 min read",
    source:
      "Nella evaluation principles; methodology and results should be published when evidence exists.",
  },
  {
    slug: "private-ai-law-firms",
    title: "What is private AI for law firms? A practical guide",
    dek: "Private AI is less about a model label and more about who can access the firm’s information, where it is processed and how the work is governed.",
    label: "Private AI",
    date: "26 August 2026",
    readTime: "8 min read",
    source:
      "NIST AI Risk Management Framework, ABA Formal Opinion 512, EU AI Act and Courts and Tribunals Judiciary guidance.",
  },
  {
    slug: "can-law-firms-use-chatgpt-with-client-information",
    title: "Can a law firm use ChatGPT with client information?",
    dek: "A practical risk framework for data paths, retention, access, matter permissions and safer pilots across jurisdictions.",
    label: "Trust and privacy",
    date: "26 August 2026",
    readTime: "10 min read",
    source:
      "OpenAI business and consumer privacy documentation, ABA Formal Opinion 512 and GDPR primary text.",
  },
  {
    slug: "microsoft-copilot-for-law-firms",
    title: "Microsoft Copilot for law firms: is it enough?",
    dek: "Copilot may be a sensible productivity layer. The question is whether it also covers your firm’s repeatable workflows, knowledge and governance.",
    label: "Comparison",
    date: "26 August 2026",
    readTime: "9 min read",
    source:
      "Microsoft 365 Copilot documentation, ABA Formal Opinion 512, SRA guidance and Law Society guidance.",
  },
  {
    slug: "best-ai-agents-for-law-firms",
    title: "Best AI agents for law firms in 2026: a practical evaluation guide",
    dek: "Compare AI agent categories by workflow, information, permissions, deployment, integrations and governance — not by hype or leaderboard.",
    label: "Evaluation",
    date: "27 August 2026",
    readTime: "11 min read",
    source:
      "Microsoft 365 Copilot, OpenAI, Anthropic, Thomson Reuters and NIST primary documentation; product terms and local guidance should be checked before adoption.",
  },
  {
    slug: "best-ai-tools-for-small-law-firms",
    title: "Best AI tools for small law firms in 2026: a practical shortlist",
    dek: "Compare practical AI options by workflow fit, privacy, setup burden, training needs and the amount of operating work they create.",
    label: "Buying guide",
    date: "27 August 2026",
    readTime: "12 min read",
    source:
      "Microsoft, OpenAI, Google Workspace, Clio, MyCase, ABA and NIST primary documentation; features and terms change by plan and region.",
  },
  {
    slug: "ai-agents-vs-ai-assistants-for-law-firms",
    title: "AI agents vs AI assistants for law firms: what’s the difference?",
    dek: "Understand autonomy, permissions, tools, review, failure modes and the practical boundary between an assistant and an agent.",
    label: "Explainer",
    date: "27 August 2026",
    readTime: "10 min read",
    source:
      "OpenAI, Microsoft, NIST, ABA and EU primary or official guidance; product terminology is not used consistently across vendors.",
  },
  {
    slug: "europa-legal-commons-ai-and-law-firms",
    title:
      "What Europa Legal Commons taught us about building AI for legal work",
    dek: "A public, versioned legal corpus made one thing clear: useful AI needs scope, sources, structure and visible limits before it needs more confidence.",
    label: "Behind the work",
    date: "27 August 2026",
    readTime: "9 min read",
    source:
      "Europa Legal Commons project materials in the Nella workspace, including its public corpus, package metadata, agent guide and stated usage boundaries.",
  },
] as const;

const comparisonCards = [
  [
    "Harvey",
    "A mature legal AI platform for law firms and in-house teams, with public commitments around enterprise controls, data separation, regional processing options and no training on customer data.",
    "Choose Harvey when a firm wants a dedicated legal AI platform with a broad product surface and is comfortable evaluating its service, contract and operating model.",
    "Nella is being shaped around one firm's systems, permissions, workflows and approval boundaries, with implementation and ongoing operating responsibility close to the work.",
    "Harvey Privacy Center and Security pages",
    "https://www.harvey.ai/legal/harvey-privacy-center",
  ],
  [
    "CoCounsel Legal",
    "A Thomson Reuters legal AI product connected to Thomson Reuters content and Microsoft 365 workflows, with the exact product scope and terms depending on the selected service.",
    "Choose CoCounsel when trusted Thomson Reuters content and its ecosystem are central to the firm's work.",
    "Nella is intended as a firm-specific operating layer across approved systems, including workflows that are not limited to one legal content ecosystem.",
    "Thomson Reuters CoCounsel Legal",
    "https://legal.thomsonreuters.com/en/products/cocounsel-legal",
  ],
  [
    "Clio Duo",
    "An AI assistant positioned within the Clio practice-management environment; the useful question is how its capabilities, permissions and data terms fit a Clio-centred firm.",
    "Choose a product inside the practice-management system when that system is the firm's operational centre of gravity.",
    "Nella is intended to be assessed across the firm's channels, matter systems, documents and provider policy rather than assuming one system is the whole operating layer.",
    "Verify current Clio product and contract terms",
    "",
  ],
  [
    "Microsoft Copilot",
    "A Microsoft 365 assistant that uses Microsoft Graph context and the user's existing permissions; Microsoft says prompts, responses and Graph data are not used to train foundation models.",
    "Choose Copilot when Microsoft 365 is the main source of work and the firm can manage permissions, agent governance and configuration there.",
    "Nella is aimed at the broader firm workflow and can be evaluated as a managed layer around the systems and policies the firm approves.",
    "Microsoft Learn: privacy and data protection for Copilot",
    "https://learn.microsoft.com/en-us/deployoffice/privacy/microsoft-365-copilot",
  ],
  [
    "Generic AI",
    "Fast, flexible general assistance with product-level privacy and retention settings that vary by provider and plan.",
    "Choose it for low-risk experimentation or public-information work where a firm can keep the boundary simple.",
    "Nella is designed for matter-aware access, firm-specific configuration, approval states, provenance and an operating partner around consequential work.",
    "Check the selected provider's current terms",
    "",
  ],
  [
    "Internal build",
    "Maximum ownership over the build, but the firm also owns the integration, evaluation, security, model policy, maintenance and incident response burden.",
    "Choose an internal build when the firm has the people, time and appetite to operate the system for the long term.",
    "Nella contributes a managed product, an implementation process and an external operating perspective while keeping the firm's judgement and policy in control.",
    "Internal architecture and operating plan",
    "",
  ],
] as const;

const routeMeta: Record<string, [string, string]> = {
  "/": [
    "Nella | Private virtual assistants for law firms",
    "Nella gives your law firm its own private support system, built around your people, documents, systems and way of working.",
  ],
  "/how-it-works": [
    "How it works | Nella",
    "Understand how Nella is discovered, configured, tested, rolled out and improved with your firm.",
  ],
  "/what-it-supports": [
    "What it supports | Nella",
    "Explore the practical workflows Nella can support around your law firm’s day, inbox, matters, documents, meetings and research.",
  ],
  "/privacy-and-deployment": [
    "Privacy and deployment | Nella",
    "Explore Nella’s deployment patterns, control model and the evidence to discuss before a firm-specific deployment.",
  ],
  "/privacy": [
    "Privacy questions | Nella",
    "A detailed, plain-language guide to data location, model policy, access, actions, logging, deletion and subprocessors.",
  ],
  "/about": [
    "About Nella | Private support systems for law firms",
    "Nella is the company and implementation partner behind a private support system for law firms.",
  ],
  "/pricing": [
    "Pricing approach | Nella",
    "Nella’s commercial model is shaped around deployment, implementation, workflows, support and operating requirements.",
  ],
  "/compare": [
    "Compare approaches | Nella",
    "Compare Nella with a generic AI subscription or an internal automation project using evidence-safe categories.",
  ],
  "/comparisons": [
    "Comparisons | Nella",
    "Compare Nella with legal AI platforms, practice-management assistants, Microsoft Copilot and internal builds.",
  ],
  "/compareisons": [
    "Comparisons | Nella",
    "Compare Nella with legal AI platforms, practice-management assistants, Microsoft Copilot and internal builds.",
  ],
  "/blog": [
    "Blog | Nella",
    "Field notes on private AI infrastructure, legal workflows, privacy, deployment and evaluation.",
  ],
  "/resources": [
    "Resources | Nella",
    "Practical guidance for law firms considering private support systems, governance and responsible adoption.",
  ],
  "/consultation": [
    "Book a private consultation | Nella",
    "Start a private conversation about your firm’s workflows, systems, deployment and first pilot.",
  ],
  "/privacy-notice": [
    "Privacy notice | Nella",
    "Draft privacy notice page for Nella, subject to legal review before publication.",
  ],
  "/terms": [
    "Terms | Nella",
    "Draft terms page for Nella, subject to legal review before publication.",
  ],
  "/accessibility": [
    "Accessibility | Nella",
    "Nella’s accessibility commitments and contact route.",
  ],
};

function usePathname() {
  const [pathname, setPathname] = useState(
    () => window.location.pathname.replace(/\/$/, "") || "/",
  );
  useEffect(() => {
    const handlePopState = () =>
      setPathname(window.location.pathname.replace(/\/$/, "") || "/");
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);
  return pathname;
}

function Navigation({ pathname }: { pathname: string }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={scrolled ? "site-nav is-scrolled" : "site-nav"}>
      <div className="nav-inner">
        <a className="wordmark" href="/" aria-label="Nella home">
          Nella
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a
              className={pathname === href ? "is-current" : undefined}
              href={href}
              key={href}
            >
              {label}
            </a>
          ))}
        </nav>
        <a className="button button-small" href="/consultation">
          Book a private consultation
        </a>
        <details className="mobile-nav">
          <summary>Menu</summary>
          <nav aria-label="Mobile navigation">
            <a href="/">Home</a>
            {navItems.map(([label, href]) => (
              <a
                className={pathname === href ? "is-current" : undefined}
                href={href}
                key={href}
              >
                {label}
              </a>
            ))}
            <a href="/about">About Nella</a>
            <a href="/blog">Blog</a>
            <a href="/pricing">Pricing approach</a>
            <a href="/compare">Comparisons</a>
            <a href="/resources">Resources</a>
            <a href="/consultation">Book a private consultation</a>
          </nav>
        </details>
      </div>
    </header>
  );
}

function PageIntro({
  eyebrow,
  title,
  body,
  children,
}: {
  eyebrow: string;
  title: string;
  body: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="page-hero" data-motion aria-labelledby="page-title">
      <div>
        <p className="hero-kicker">{eyebrow}</p>
        <h1 id="page-title">{title}</h1>
        <p className="page-lede">{body}</p>
        {children}
      </div>
    </section>
  );
}

function PageCta({
  title = "Let’s design the right first deployment for your firm.",
  body = "Start with a private conversation about your workflows, systems and requirements.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="page-cta" data-motion aria-labelledby="page-cta-title">
      <div>
        <p className="section-eyebrow">The first conversation</p>
        <h2 id="page-cta-title">{title}</h2>
        <p>{body}</p>
      </div>
      <a className="button button-light" href="/consultation">
        Book a private consultation
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <p className="footer-statement">
        A private assistant that works the way your firm works.
      </p>
      <div className="footer-links" role="group" aria-label="Footer navigation">
        <div>
          <strong>Nella</strong>
          <a href="/about">About Nella</a>
          <a href="/blog">Blog</a>
          <a href="/resources">Resources</a>
          <a href="/consultation">Contact</a>
        </div>
        <div>
          <strong>Explore</strong>
          <a href="/how-it-works">How it works</a>
          <a href="/what-it-supports">What it supports</a>
          <a href="/compare">Comparisons</a>
        </div>
        <div>
          <strong>Trust and legal</strong>
          <a href="/privacy-and-deployment">Privacy and deployment</a>
          <a href="/privacy-notice">Privacy notice</a>
          <a href="/accessibility">Accessibility</a>
          <a href="/terms">Terms</a>
        </div>
      </div>
      <div className="footer-meta">
        <a className="wordmark" href="/">
          Nella
        </a>
        <p>Private virtual assistants for law firms</p>
        <p>© {new Date().getFullYear()} Nella</p>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div
          className="hero-copy reveal"
          style={{ "--i": 0 } as React.CSSProperties}
        >
          <p className="hero-kicker">
            Private virtual assistants for law firms
          </p>
          <h1 id="hero-title">Your firm’s private support system.</h1>
          <p className="hero-lede">
            Built around your people, documents, systems and way of working.
            Nella helps your team find, prepare, organise and follow through
            where work already happens.
          </p>
          <div className="hero-actions">
            <a className="button" href="/consultation">
              Book a private consultation
            </a>
            <a className="text-link" href="/how-it-works">
              See how it works
            </a>
          </div>
          <div className="hero-proof" role="group" aria-label="Nella approach">
            <span>Firm-specific</span>
            <span>Managed by Nella</span>
            <span>Designed around your requirements</span>
          </div>
        </div>
        <figure
          className="hero-work-trail reveal"
          style={{ "--i": 1 } as React.CSSProperties}
        >
          <figcaption className="sr-only">
            Example workflow showing a request becoming prepared
            work, with human approval before an external action.
          </figcaption>
          <div className="trail-topline">
            <span>One request. A clearer next step.</span>
            <span>Example workflow</span>
          </div>
          <div className="trail-request">
            <span className="trail-label">James · 08:42</span>
            <p>Bring me up to speed before the Murphy meeting.</p>
          </div>
          <div className="trail-connector" aria-hidden="true">
            <span />
          </div>
          <div className="trail-prepared">
            <div className="trail-card-head">
              <span className="trail-label">Prepared by Nella</span>
              <span className="trail-status">Ready to review</span>
            </div>
            <h2>Murphy meeting brief</h2>
            <p className="trail-summary">
              The medical report arrived Monday. The signed authority is still
              outstanding.
            </p>
            <div
              className="trail-sources"
              role="group"
              aria-label="Source context"
            >
              <span>3 sources checked</span>
              <span>1 item needs attention</span>
            </div>
            <div className="trail-review">
              <span>Source context available</span>
              <span>Human review</span>
            </div>
          </div>
          <div
            className="trail-connector trail-connector-short"
            aria-hidden="true"
          >
            <span />
          </div>
          <div className="trail-next">
            <div>
              <span className="trail-label">Next step</span>
              <p>Draft follow-up for approval</p>
            </div>
            <span className="trail-not-sent">Not sent</span>
          </div>
        </figure>
      </section>
      <TrustStrip />
      <ProviderCarousel />
      <section
        className="capabilities-section"
        data-motion
        id="capabilities"
        aria-labelledby="capabilities-title"
      >
        <header className="section-heading">
          <p className="section-eyebrow">The work around legal work</p>
          <h2 id="capabilities-title">
            More support for the work that surrounds your lawyers.
          </h2>
          <p>
            Nella works with the systems and working habits your team already
            trusts, with a responsible professional at the right checkpoints.
          </p>
        </header>
        <div className="capability-grid" data-stagger>
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                className={item.className}
                key={item.title}
                style={{ "--i": index } as React.CSSProperties}
              >
                <div className="capability-copy">
                  <span className="capability-icon">
                    <Icon size={24} weight="regular" aria-hidden="true" />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
                {item.content}
              </article>
            );
          })}
        </div>
      </section>
      <section
        className="judgement-section"
        data-motion
        aria-labelledby="judgement-title"
      >
        <div className="judgement-copy">
          <h2 id="judgement-title">
            Nella supports the work around professional judgement.
          </h2>
          <p>It does not replace it.</p>
        </div>
        <p className="judgement-detail">
          <strong>Nella can prepare and organise:</strong> briefings, summaries,
          chronologies, drafts, extracted information and tasks.
          <br />
          <br />
          <strong>Your responsible professional decides:</strong> advice,
          conclusions, approvals, external communications, filings and
          consequential actions.
        </p>
      </section>
      <ControlSection />
      <DeploymentSection compact />
      <ImplementationSection compact />
      <PricingAnchor />
      <FaqSection />
      <PageCta />
    </>
  );
}

function TrustStrip() {
  return (
    <section
      className="trust-strip"
      data-motion
      data-stagger
      aria-label="Nella approach"
    >
      <div>
        <span className="trust-mark">
          <ShieldCheck size={22} weight="regular" aria-hidden="true" />
        </span>
        <strong>Private, not self-serve.</strong>
        <p>Nella is shaped, deployed and managed around your firm.</p>
      </div>
      <div>
        <span className="trust-mark">
          <UsersThree size={22} weight="regular" aria-hidden="true" />
        </span>
        <strong>Human accountability stays visible.</strong>
        <p>
          Prepare, review, approve. Consequential actions stay with your team.
        </p>
      </div>
      <div>
        <span className="trust-mark">
          <Cloud size={22} weight="regular" aria-hidden="true" />
        </span>
        <strong>Deployment is part of the design.</strong>
        <p>
          Discuss the environment, provider policy and operating model together.
        </p>
      </div>
    </section>
  );
}

const providerItems = [
  ["OpenAI", OpenAI],
  ["Anthropic", Anthropic],
  ["Gemini", Gemini],
  ["Microsoft Azure", Azure],
  ["Amazon Bedrock", Bedrock],
  ["Mistral", Mistral],
  ["Kimi", Kimi],
  ["DeepSeek", DeepSeek],
  ["Qwen", Qwen],
  ["NVIDIA", Nvidia],
  ["Cohere", Cohere],
  ["xAI", XAI],
  ["Z.ai", ZAI],
  ["IBM", IBM],
] as const;

function ProviderCarouselSection() {
  const [paused, setPaused] = useState(false);
  const providerSet = [...providerItems, ...providerItems];
  return (
    <section
      className="provider-section"
      data-motion
      aria-labelledby="provider-title"
    >
      <div className="provider-heading">
        <p className="section-eyebrow">Provider policy</p>
        <h2 id="provider-title">The model conversation stays yours.</h2>
        <p>
          These are providers Nella can work with. The firm chooses the approved
          providers, models and data routes.
        </p>
      </div>
      <div className="provider-viewport">
        <div className={paused ? "provider-track is-paused" : "provider-track"}>
          {providerSet.map(([name, Icon], index) => (
            <div className="provider-item" key={`${name}-${index}`}>
              <Icon size={24} aria-hidden="true" />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
      <button
        className="provider-toggle"
        type="button"
        aria-pressed={paused}
        onClick={() => setPaused((value) => !value)}
      >
        {paused ? "Play provider list" : "Pause provider list"}
      </button>
    </section>
  );
}

const interactionChannels = [
  ["WhatsApp", WhatsappLogo, "Message Nella in an approved chat channel."],
  ["SMS", ChatText, "Keep a simple request close to the phone."],
  ["iMessage", AppleLogo, "Use a familiar private conversation."],
  ["Slack", SlackLogo, "Bring prepared work into team discussion."],
  ["Email", EnvelopeSimple, "Turn inbox context into a clearer next step."],
  [
    "Teams",
    MicrosoftTeamsLogo,
    "Meet the firm where collaboration already happens.",
  ],
] as const;

function InteractionChannels() {
  return (
    <section
      className="interaction-section"
      data-motion
      aria-labelledby="interaction-title"
    >
      <div className="interaction-heading">
        <p className="section-eyebrow">Where work already happens</p>
        <h2 id="interaction-title">
          A private conversation, in the channels your firm approves.
        </h2>
        <p>
          Nella connects to the channels the firm approves. The consultation
          records the approved channel set and the actions available in each
          one.
        </p>
      </div>
      <div className="interaction-grid" data-stagger>
        {interactionChannels.map(([name, Icon, body]) => (
          <article className="interaction-item" key={name}>
            <span className="interaction-icon">
              <Icon size={25} weight="regular" aria-hidden="true" />
            </span>
            <div>
              <h3>{name}</h3>
              <p>{body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProviderCarousel() {
  return (
    <>
      <ProviderCarouselSection />
      <InteractionChannels />
      <div className="sticky-cta-trigger" aria-hidden="true" />
    </>
  );
}

function ComparisonPreview() {
  return (
    <section
      className="comparison-preview"
      data-motion
      aria-labelledby="comparison-preview-title"
    >
      <div className="comparison-preview-heading">
        <div>
          <p className="section-eyebrow">A useful comparison</p>
          <h2 id="comparison-preview-title">
            The difference is how the work is carried.
          </h2>
          <p>
            Nella is built around implementation, control and accountability,
            not just access to a model.
          </p>
        </div>
        <a className="text-link" href="/compare">
          See the full comparison
        </a>
      </div>
      <Table
        className="nella-table-preview"
        aria-label="Comparison preview of Nella, generic AI and internal automation"
      >
        <TableHeader>
          <TableRow>
            <TableHead scope="col">Category</TableHead>
            <TableHead scope="col" className="comparison-nella">
              Nella
            </TableHead>
            <TableHead scope="col">Generic AI</TableHead>
            <TableHead scope="col">Internal project</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {comparisonRows
            .slice(0, 4)
            .map(([category, nella, generic, internal]) => (
              <TableRow key={category}>
                <TableHead scope="row">{category}</TableHead>
                <TableCell className="comparison-nella">{nella}</TableCell>
                <TableCell>{generic}</TableCell>
                <TableCell>{internal}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </section>
  );
}

function PricingAnchorSection() {
  return (
    <section
      className="pricing-anchor"
      data-motion
      aria-labelledby="pricing-anchor-title"
    >
      <div>
        <p className="section-eyebrow">Pricing approach</p>
        <h2 id="pricing-anchor-title">
          Deployment-led, not one-size-fits-all.
        </h2>
        <p>
          Nella is scoped around the first workflow, systems, environment,
          evaluation and support model your firm needs.
        </p>
      </div>
      <a className="text-link" href="/pricing">
        See the pricing approach
      </a>
    </section>
  );
}

function PricingAnchor() {
  return (
    <>
      <ComparisonPreview />
      <PricingAnchorSection />
    </>
  );
}

function FaqSection() {
  return (
    <section className="faq-section" data-motion aria-labelledby="faq-title">
      <header className="section-heading">
        <p className="section-eyebrow">Questions worth asking</p>
        <h2 id="faq-title">Before you book a conversation.</h2>
      </header>
      <div className="faq-list" data-stagger>
        <details>
          <summary>Does Nella train on client data?</summary>
          <p>
            That depends on the agreed deployment and provider policy. It should
            be answered with the specific evidence, contractual terms and
            retention model for the environment being discussed.
          </p>
        </details>
        <details>
          <summary>Can Nella run in our cloud?</summary>
          <p>
            Nella can run in a customer-controlled cloud. The deployment plan
            defines the architecture, responsibilities, support and cost.
          </p>
        </details>
        <details>
          <summary>Does Nella provide legal advice?</summary>
          <p>
            No. Nella supports preparation and organisation around professional
            judgement. The responsible professional remains accountable for
            advice, conclusions, approvals and consequential actions.
          </p>
        </details>
        <details>
          <summary>Where should we start?</summary>
          <p>
            Start with one recurring workflow where the sources, human
            checkpoint and useful outcome can be described clearly and tested
            with representative work.
          </p>
        </details>
      </div>
    </section>
  );
}

function StickyCta({ visible }: { visible: boolean }) {
  return (
    <aside
      className={visible ? "sticky-cta is-visible" : "sticky-cta"}
      aria-label="Consultation action"
    >
      <a className="button" href="/consultation">
        Book a private consultation
      </a>
    </aside>
  );
}

function ControlSection() {
  const rows = [
    [
      "Find an authorised document",
      "Automatic",
      "Nella can retrieve approved material.",
      CheckCircle,
    ],
    [
      "Prepare a meeting brief",
      "Automatic",
      "The responsible professional reviews the result.",
      CheckCircle,
    ],
    [
      "Create an internal task",
      "Configurable",
      "Your firm chooses when this can happen.",
      Note,
    ],
    [
      "Draft an external email",
      "Reviewable",
      "A person checks the draft before it is sent.",
      EnvelopeSimple,
    ],
    [
      "Send an external email",
      "Approval required",
      "Nella pauses until an authorised person approves.",
      ShieldCheck,
    ],
    [
      "Submit a filing or transfer funds",
      "Never",
      "These actions remain outside Nella’s boundaries.",
      XCircle,
    ],
  ] as const;
  return (
    <section
      className="control-section"
      data-motion
      aria-labelledby="control-title"
    >
      <header className="section-heading">
        <p className="section-eyebrow">Control is part of the product</p>
        <h2 id="control-title">Clear boundaries, from the start.</h2>
        <p>
          Every action has a treatment your firm can understand, review and
          change.
        </p>
      </header>
      <div
        className="control-matrix"
        data-stagger
        role="table"
        aria-label="Example autonomy and approval controls"
      >
        <div className="control-row control-row-heading" role="row">
          <span role="columnheader">Action</span>
          <span role="columnheader">Default treatment</span>
          <span role="columnheader">What it means</span>
        </div>
        {rows.map(([action, treatment, meaning, Icon]) => (
          <div className="control-row" role="row" key={action}>
            <span className="control-action" role="cell">
              <Icon size={22} weight="regular" aria-hidden="true" />
              {action}
            </span>
            <strong role="cell">{treatment}</strong>
            <span role="cell">{meaning}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function DeploymentSection({ compact = false }: { compact?: boolean }) {
  return (
    <section
      className={
        compact ? "privacy-section privacy-section-compact" : "privacy-section"
      }
      id="privacy"
      data-motion
      aria-labelledby="privacy-title"
    >
      <div className="privacy-copy">
        <p className="section-eyebrow">Privacy and deployment</p>
        <h2 id="privacy-title">Private by deployment choice.</h2>
        <p>
          Your firm can discuss where Nella runs, which providers and models are
          allowed, and what information she can access.
        </p>
      </div>
      <div
        className="deployment-cards"
        data-stagger
        role="group"
        aria-label="Deployment options"
      >
        {deploymentModels.map(([title, Icon, body, note]) => (
          <article key={title}>
            <span className="deployment-icon">
              <Icon size={28} weight="regular" aria-hidden="true" />
            </span>
            <h3>{title}</h3>
            <p>{body}</p>
            <small>{note}</small>
          </article>
        ))}
      </div>
      <p className="privacy-note">
        Exact capabilities depend on architecture, integrations, model policy
        and infrastructure.
      </p>
      {!compact && <DecisionGuide />}
    </section>
  );
}

function DecisionGuide() {
  return (
    <div className="decision-guide">
      <h3>A deployment conversation should cover</h3>
      <div className="decision-grid" data-stagger>
        {[
          ["Privacy", "What data may be accessed, stored or retained?"],
          ["Capability", "Which workflows and systems need to work together?"],
          ["Operations", "Who runs, reviews and supports the environment?"],
          [
            "Provider policy",
            "Which model and provider policies are acceptable?",
          ],
          ["Residency", "Where does the firm need data and processing to sit?"],
          ["Cost", "What changes with infrastructure, support and scope?"],
        ].map(([title, body]) => (
          <article key={title}>
            <strong>{title}</strong>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function ImplementationSection({
  compact = false,
  showHeading = true,
}: {
  compact?: boolean;
  showHeading?: boolean;
}) {
  return (
    <section
      className={
        compact
          ? "implementation-section implementation-section-compact"
          : "implementation-section"
      }
      id="implementation"
      data-motion
      aria-labelledby="implementation-title"
    >
      {showHeading && (
        <header className="section-heading implementation-heading">
          <p className="section-eyebrow">How it works</p>
          <h2 id="implementation-title">A careful start, with room to grow.</h2>
          {compact && (
            <p>
              Discovery, configuration, probation, rollout and continuous
              improvement are part of the work.
            </p>
          )}
        </header>
      )}
      <div className="implementation-list" data-stagger>
        {implementationSteps.map(([number, title, body]) => (
          <article key={number}>
            <span className="step-number">{number}</span>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
      {!compact && (
        <div className="implementation-notes" data-stagger>
          <article>
            <h3>What you receive</h3>
            <p>
              A scoped first use case, agreed boundaries, representative
              evaluation, rollout plan and operating review points.
            </p>
          </article>
          <article>
            <h3>What your firm brings</h3>
            <p>
              People who know the work, access to representative examples,
              decisions about permissions and an owner for the first deployment.
            </p>
          </article>
          <article>
            <h3>What changes timeline and cost</h3>
            <p>
              Workflow scope, systems, deployment model, provider policy,
              evaluation depth, support needs and the pace of review.
            </p>
          </article>
        </div>
      )}
    </section>
  );
}

function HowItWorksPage() {
  return (
    <>
      <PageIntro
        eyebrow="Implementation, with accountability"
        title="A careful start, with room to grow."
        body="Nella is discovered, configured, tested and managed around your firm. The system is shaped by the work, boundaries and decisions that matter to your team."
      />
      <ImplementationSection showHeading={false} />
      <PageCta
        title="Talk through the right first step."
        body="We’ll map the first workflow, the systems around it and the decisions needed before a pilot."
      />
    </>
  );
}

function WhatItSupportsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Practical support around legal work"
        title="Six places where better preparation can change the day."
        body="Nella is configured around useful work your team already does. Each workflow has a request, a prepared result, a human checkpoint and a clear boundary."
      />
      <section
        className="workflow-page-section"
        data-motion
        aria-labelledby="workflow-title"
      >
        <header className="section-heading">
          <p className="section-eyebrow">Workflows Nella supports</p>
          <h2 id="workflow-title">
            Start with the friction your team feels most often.
          </h2>
          <p>
            Each workflow has a defined request, prepared result, human
            checkpoint and approved source set. The consultation turns the
            chosen workflow into a deployment plan.
          </p>
        </header>
        <div className="workflow-list" data-stagger>
          {workflowAreas.map(
            ([title, request, support, checkpoint, systems, outcome]) => (
              <article className="workflow-band" key={title}>
                <div className="workflow-band-title">
                  <span className="step-number">{title}</span>
                  <h3>{request}</h3>
                </div>
                <div className="workflow-band-detail">
                  <div>
                    <span>Support</span>
                    <p>{support}</p>
                  </div>
                  <div>
                    <span>Human checkpoint</span>
                    <p>{checkpoint}</p>
                  </div>
                  <div>
                    <span>Systems in scope</span>
                    <p>{systems}</p>
                  </div>
                  <div>
                    <span>Useful outcome</span>
                    <p>{outcome}</p>
                  </div>
                </div>
              </article>
            ),
          )}
        </div>
      </section>
      <PageCta
        title="Choose a sensible first workflow."
        body="A private consultation can turn one recurring bottleneck into a scoped first deployment."
      />
    </>
  );
}

function PrivacyDeploymentPage() {
  return (
    <>
      <PageIntro
        eyebrow="Privacy and deployment"
        title="Privacy should answer the hard questions before a pilot."
        body="The professional guidance across Ireland, Britain, Germany and the US converges on confidentiality, competence, safeguards and human accountability. Nella’s job is to make those questions concrete."
      />
      <section
        className="deployment-page-section"
        data-motion
        aria-labelledby="deployment-title"
      >
        <header className="section-heading">
          <p className="section-eyebrow">Where the system can live</p>
          <h2 id="deployment-title">Choose the environment that fits the work.</h2>
          <p>
            Nella supports managed private, customer-controlled cloud, and
            local or sovereign deployment. The consultation records the
            selected environment and its responsibilities.
          </p>
        </header>
        <div className="deployment-cards" data-stagger>
          {deploymentModels.map(([title, Icon, body, note]) => (
            <article key={title}>
              <span className="deployment-icon">
                <Icon size={28} weight="regular" aria-hidden="true" />
              </span>
              <h3>{title}</h3>
              <p>{body}</p>
              <small>{note}</small>
            </article>
          ))}
        </div>
        <DecisionGuide />
      </section>
      <section
        className="privacy-detail-section"
        data-motion
        aria-labelledby="privacy-detail-title"
      >
        <header className="section-heading">
          <p className="section-eyebrow">The questions worth asking</p>
          <h2 id="privacy-detail-title">Specific answers build trust.</h2>
          <p>
            Nella’s operating positions are clear. The deployment record names
            the product, infrastructure and contractual details before client
            information is connected.
          </p>
        </header>
        <div className="privacy-question-list" data-stagger>
          {privacyQuestions.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
      <ControlSection />
      <section
        className="trust-evidence-section"
        data-motion
        aria-labelledby="evidence-title"
      >
        <p className="section-eyebrow">Evidence before assurance</p>
        <h2 id="evidence-title">A trustworthy deployment is specific.</h2>
        <p>
          Before publication or rollout, the firm should be able to discuss
          hosting, data residency, encryption, identity, role and matter
          permissions, retention, backups, providers, audit history, incident
          response, support, export and deletion. Nella’s public claims should
          follow the evidence available for the specific deployment.
        </p>
        <div className="privacy-jurisdictions">
          {privacyGuidance.map(([region, label, href]) => (
            <a href={href} target="_blank" rel="noreferrer" key={region}>
              <span>{region}</span>
              <strong>{label}</strong>
            </a>
          ))}
        </div>
      </section>
      <PageCta
        title="Bring us the questions your firm needs answered."
        body="We can work through the deployment, provider policy, permissions and evidence required for a responsible first step."
      />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About Nella"
        title="We've been building AI systems that do real work for years."
        body="Nella is the private operating layer we are building around a law firm: an implementation partner, a controlled system and a team accountable for how the work behaves after launch."
      />
      <section
        className="about-story"
        data-motion
        aria-labelledby="about-story-title"
      >
        <div className="about-story-lead">
          <p className="section-eyebrow">Why trust us with the work?</p>
          <h2 id="about-story-title">
            Because the hard part is not making an agent speak.
          </h2>
          <p>
            It is giving an agent the right permissions, the right evidence, the
            right evaluation and the right boundary — then staying close enough
            to see what happened.
          </p>
        </div>
        <div className="about-story-aside">
          <span className="about-story-mark">N</span>
          <p>Private virtual staff for professional practice.</p>
        </div>
      </section>
      <section
        className="about-track-section"
        data-motion
        aria-labelledby="track-title"
      >
        <header className="section-heading">
          <p className="section-eyebrow">The experience behind Nella</p>
          <h2 id="track-title">
            Production autonomous systems + legal-domain experience.
          </h2>
          <p>
            Two bodies of work shape the way we think about Nella. Neither is a
            substitute for evidence from a firm's own deployment; together, they
            explain the discipline behind the product.
          </p>
        </header>
        <div className="about-track-grid" data-stagger>
          {aboutTracks.map(([title, subtitle, body, link]) => (
            <article key={title}>
              <div className="about-track-head">
                <span>{subtitle}</span>
                <span aria-hidden="true">
                  {title === "Critique.sh" ? "01" : "02"}
                </span>
              </div>
              <h3>{title}</h3>
              <p>{body}</p>
              {link ? (
                <a
                  className="text-link"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Critique.sh{" "}
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              ) : (
                <span className="about-proof-note">
                  Legal-domain experience, not enterprise-scale proof.
                </span>
              )}
            </article>
          ))}
        </div>
      </section>
      <section
        className="about-principles"
        data-motion
        aria-labelledby="principles-title"
      >
        <header className="section-heading">
          <p className="section-eyebrow">How the pieces meet</p>
          <h2 id="principles-title">
            Nella combines both for professional practice.
          </h2>
        </header>
        <div className="about-synthesis">
          <div>
            <strong>Critique.sh</strong>
            <span>
              Autonomy · agents · evaluation · tooling · verification ·
              production infrastructure
            </span>
          </div>
          <div className="about-synthesis-plus" aria-hidden="true">
            +
          </div>
          <div>
            <strong>Europa Legal Commons</strong>
            <span>
              Legal constraints · workflows · source grounding · jurisdiction
              awareness
            </span>
          </div>
          <div className="about-synthesis-arrow" aria-hidden="true">
            ↓
          </div>
          <div className="about-synthesis-result">
            <strong>Nella</strong>
            <span>Private virtual staff for law firms</span>
          </div>
        </div>
      </section>
      <section className="about-boundary" data-motion>
        <div>
          <p className="section-eyebrow">What we do not claim</p>
          <h2>We are not asking you to trust a slogan.</h2>
        </div>
        <p>
          We will not use Critique.sh to imply that we have already run a large
          law-firm deployment. We will not use Europa Legal Commons to imply
          enterprise scale. We will show the controls, evidence, evaluation and
          operating model that apply to your firm.
        </p>
      </section>
      <section className="about-note" data-motion>
        <div>
          <p className="section-eyebrow">The point of the work</p>
          <h2>We don't believe lawyers need another AI playground.</h2>
        </div>
        <p>
          They need systems they can actually trust with work. That’s what we’re
          building with Nella.
        </p>
      </section>
      <PageCta
        title="Talk to the team."
        body="Bring the trust questions, the deployment constraints and the workflow that matters most."
      />
    </>
  );
}

function PricingPage() {
  return (
    <>
      <PageIntro
        eyebrow="Pricing approach"
        title="A clear scope before a clear price."
        body="Nella prices the work around your deployment, workflows, systems, rollout and ongoing support. Start with a consultation and we will turn those decisions into a written scope and commercial proposal."
      />
      <section
        className="pricing-section"
        data-motion
        aria-labelledby="pricing-title"
      >
        <header className="section-heading">
          <p className="section-eyebrow">What the price covers</p>
          <h2 id="pricing-title">You pay for the system your firm actually needs.</h2>
        </header>
        <div className="pricing-grid" data-stagger>
          {[
            [
              "Deployment",
              "Managed private, customer-controlled cloud, or local/sovereign operation.",
            ],
            [
              "Implementation",
              "Workflow design, approved systems, permissions, terminology and review points.",
            ],
            [
              "Ongoing operation",
              "Monitoring, support, evaluation, improvements and changes as the firm grows.",
            ],
          ].map(([title, body]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
              <span>Included in the written scope</span>
            </article>
          ))}
        </div>
        <div className="pricing-factors">
          <h3>What we define before quoting</h3>
          <ul>
            <li>The first workflows and expected volume</li>
            <li>Systems, repositories and channels in scope</li>
            <li>Deployment, residency and provider policy</li>
            <li>Evaluation, rollout and training</li>
            <li>Support, monitoring and improvement</li>
          </ul>
        </div>
      </section>
      <PageCta
        title="Get your written scope and proposal."
        body="Book a consultation. We’ll define the first deployment, confirm what is included and send the commercial next step."
      />
    </>
  );
}

function LegacyComparePage() {
  return (
    <>
      <PageIntro
        eyebrow="Compare approaches"
        title="Choose the operating model that matches the work."
        body="Nella is one path among several. The useful comparison is not a slogan; it is how each approach handles implementation, control, deployment and accountability."
      />
      <section className="compare-section" aria-labelledby="compare-title">
        <header className="section-heading">
          <p className="section-eyebrow">Evidence-safe comparison</p>
          <h2 id="compare-title">
            Different routes, different responsibilities.
          </h2>
        </header>
        <div
          className="comparison-table"
          role="table"
          aria-label="Comparison of Nella, generic AI and internal automation"
        >
          <div className="comparison-row comparison-heading" role="row">
            <span role="columnheader">Category</span>
            <span role="columnheader">Nella</span>
            <span role="columnheader">Generic AI subscription</span>
            <span role="columnheader">Internal automation project</span>
          </div>
          {comparisonRows.map(([category, nella, generic, internal]) => (
            <div className="comparison-row" role="row" key={category}>
              <strong role="rowheader">{category}</strong>
              <span role="cell">{nella}</span>
              <span role="cell">{generic}</span>
              <span role="cell">{internal}</span>
            </div>
          ))}
        </div>
        <p className="comparison-note">
          Capabilities, policies and responsibilities vary by provider and
          project. This comparison is categorical and should be reviewed against
          the specific options being considered.
        </p>
      </section>
      <PageCta title="Compare the first workflow, not just the tools." />
    </>
  );
}

function ComparePage() {
  return <ComparisonsPage />;
}

function ResourcesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Resources"
        title="Useful guidance for serious adoption."
        body="A small editorial library for the questions firms ask before they choose a workflow, provider, deployment model or implementation partner."
      />
      <section
        className="resources-section"
        data-motion
        aria-labelledby="resources-title"
      >
        <header className="section-heading">
          <p className="section-eyebrow">The Nella blog</p>
          <h2 id="resources-title">Practical, reviewable and worth keeping.</h2>
          <p>
            Each piece has a clear point of view, a review date and a note on
            what still needs firm-specific confirmation.
          </p>
        </header>
        <div className="resource-grid" data-stagger>
          {resourceCards.map(([title, body, label, href]) => (
            <article key={title}>
              <span className="resource-status">{label}</span>
              <h3>{title}</h3>
              <p>{body}</p>
              <a className="text-link" href={href}>
                Read the guide <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
        <div className="resources-blog-link">
          <BookOpenText size={26} aria-hidden="true" />
          <div>
            <strong>See every field note</strong>
            <p>
              The full editorial index lives at <a href="/blog">/blog</a>.
              Comparisons are kept separate so the editorial library stays
              useful.
            </p>
          </div>
        </div>
      </section>
      <PageCta
        title="Have a question before the library is ready?"
        body="Bring it to a private consultation and we’ll start with your firm’s actual context."
      />
    </>
  );
}

function BlogPage() {
  return (
    <>
      <PageIntro
        eyebrow="Blog"
        title="Field notes for firms thinking carefully about AI."
        body="Notes on private infrastructure, legal workflows, privacy, deployment and evaluation. Written for people who have to be accountable for the system after the demo."
      />
      <section
        className="blog-index-section"
        data-motion
        aria-labelledby="blog-index-title"
      >
        <header className="blog-index-heading">
          <div>
            <p className="section-eyebrow">Latest notes</p>
            <h2 id="blog-index-title">The questions worth slowing down for.</h2>
          </div>
          <p>
            Published pieces are dated and sourced. Product claims and vendor
            terms should be checked again before a procurement decision.
          </p>
        </header>
        <div className="blog-list" data-stagger>
          {blogPosts.map((post, index) => (
            <article
              key={post.slug}
              className={
                index === 0 ? "blog-card blog-card-featured" : "blog-card"
              }
            >
              <div className="blog-card-meta">
                <span>{post.label}</span>
                <span>{post.readTime}</span>
              </div>
              <h3>
                <a href={`/blog/${post.slug}`}>{post.title}</a>
              </h3>
              <p>{post.dek}</p>
              <a className="text-link" href={`/blog/${post.slug}`}>
                Read the note <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </section>
      <PageCta
        title="Bring a real workflow to the conversation."
        body="The best next step is usually a high-friction, representative piece of work — not a general AI tour."
      />
    </>
  );
}

function BlogArticlePage({ slug }: { slug: string }) {
  const post = blogPosts.find((item) => item.slug === slug) ?? blogPosts[0];
  const articleSources: Record<string, Array<[string, string]>> = {
    "private-ai-law-firms": [
      [
        "NIST AI Risk Management Framework",
        "https://www.nist.gov/itl/ai-risk-management-framework",
      ],
      [
        "ABA Formal Opinion 512",
        "https://www.americanbar.org/content/dam/aba/administrative/professional_responsibility/ethics-opinions/aba-formal-opinion-512.pdf",
      ],
      [
        "EU Artificial Intelligence Act",
        "https://eur-lex.europa.eu/eli/reg/2024/1689/oj?locale=en",
      ],
      [
        "Courts and Tribunals Judiciary AI guidance",
        "https://www.judiciary.uk/guidance-and-resources/artificial-intelligence-ai-judicial-guidance-october-2025/",
      ],
    ],
    "can-law-firms-use-chatgpt-with-client-information": [
      ["OpenAI business data privacy", "https://openai.com/business-data/"],
      [
        "OpenAI managed account data access",
        "https://help.openai.com/en/articles/20001067",
      ],
      [
        "ABA Formal Opinion 512",
        "https://www.americanbar.org/content/dam/aba/administrative/professional_responsibility/ethics-opinions/aba-formal-opinion-512.pdf",
      ],
      [
        "EU General Data Protection Regulation",
        "https://eur-lex.europa.eu/eli/reg/2016/679/oj",
      ],
    ],
    "microsoft-copilot-for-law-firms": [
      [
        "Microsoft 365 Copilot overview",
        "https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-overview",
      ],
      [
        "Microsoft 365 Copilot privacy and security",
        "https://learn.microsoft.com/en-us/deployoffice/privacy/microsoft-365-copilot",
      ],
      [
        "ABA Formal Opinion 512",
        "https://www.americanbar.org/content/dam/aba/administrative/professional_responsibility/ethics-opinions/aba-formal-opinion-512.pdf",
      ],
      [
        "SRA warning notice: Misuse of AI",
        "https://guidance.sra.org.uk/solicitors/guidance/misuse-ai/",
      ],
      [
        "Law Society: Generative AI — the essentials",
        "https://www.lawsociety.org.uk/Topics/AI-and-lawtech/Guides/Generative-AI-the-essentials",
      ],
    ],
    "best-ai-agents-for-law-firms": [
      [
        "Microsoft Copilot privacy and data protection",
        "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy",
      ],
      [
        "Microsoft 365 admin: tools for agents",
        "https://learn.microsoft.com/en-us/microsoft-365/admin/manage/manage-tools-for-agent?view=o365-worldwide",
      ],
      [
        "OpenAI business data privacy, security and compliance",
        "https://openai.com/business-data/",
      ],
      [
        "Anthropic commercial data processing",
        "https://support.claude.com/en/articles/9267385-does-anthropic-act-as-a-data-processor-or-controller",
      ],
      [
        "Anthropic: Trustworthy agents in practice",
        "https://www.anthropic.com/research/trustworthy-agents",
      ],
      [
        "Thomson Reuters CoCounsel for legal professionals",
        "https://legal.thomsonreuters.com/en/products/cocounsel-legal",
      ],
      [
        "NIST AI Risk Management Framework",
        "https://www.nist.gov/itl/ai-risk-management-framework",
      ],
    ],
    "best-ai-tools-for-small-law-firms": [
      [
        "Microsoft 365 Copilot overview",
        "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview",
      ],
      ["OpenAI business data privacy", "https://openai.com/business-data/"],
      [
        "Google Workspace Gemini access guidance",
        "https://support.google.com/a/users/answer/17010577?hl=en",
      ],
      [
        "Clio AI Features in Clio Manage",
        "https://help.clio.com/hc/en-us/articles/41990965598491-AI-Features-in-Clio-Manage",
      ],
      [
        "MyCase legal AI software",
        "https://www.mycase.com/products/legal-ai-software/",
      ],
      [
        "NIST AI Risk Management Framework",
        "https://www.nist.gov/itl/ai-risk-management-framework",
      ],
    ],
    "ai-agents-vs-ai-assistants-for-law-firms": [
      [
        "OpenAI: A practical guide to building agents",
        "https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/",
      ],
      [
        "Microsoft: Govern tools for agents",
        "https://learn.microsoft.com/en-us/microsoft-agent-365/guidance/govern-tools",
      ],
      [
        "NIST AI Risk Management Framework Core",
        "https://airc.nist.gov/airmf-resources/airmf/5-sec-core/",
      ],
      [
        "ABA Formal Opinion 512",
        "https://www.americanbar.org/content/dam/aba/administrative/professional_responsibility/ethics-opinions/aba-formal-opinion-512.pdf",
      ],
      ["EU AI Act", "https://eur-lex.europa.eu/eli/reg/2024/1689/oj?locale=en"],
    ],
    "europa-legal-commons-ai-and-law-firms": [
      ["About Nella and the project context", "/about"],
      [
        "NIST AI Risk Management Framework",
        "https://www.nist.gov/itl/ai-risk-management-framework",
      ],
      [
        "EU Artificial Intelligence Act",
        "https://eur-lex.europa.eu/eli/reg/2024/1689/oj?locale=en",
      ],
      [
        "GDPR — Regulation (EU) 2016/679",
        "https://eur-lex.eu/eli/reg/2016/679/oj",
      ],
    ],
  };
  const articleContent: Record<string, React.ReactNode> = {
    "ai-adoption-questions-for-law-firm-leaders": (
      <>
        <p>
          AI adoption inside a law firm is not mainly a software-purchase
          question. It is a question about professional responsibility, client
          confidentiality, workflow ownership and the level of autonomy the firm
          is prepared to supervise.
        </p>
        <h2>Start with a recurring piece of work</h2>
        <p>
          Ask where lawyers lose time assembling context, chasing a missing
          item, turning notes into tasks or preparing for a meeting. A good
          first workflow has a clear input, a visible source set, a reviewable
          output and a person who can say whether the result was useful.
        </p>
        <h2>Then draw the boundary</h2>
        <p>
          Classify actions before you connect systems. Reading and preparing are
          different from changing an internal record. Changing an internal
          record is different from sending something to a client, opponent,
          court or third party. The default for consequential external actions
          should be approval required.
        </p>
        <h2>Ask who owns the failure</h2>
        <p>
          If the answer is “the model,” the governance is unfinished. A
          responsible professional still owns the advice, the filing, the client
          communication and the decision. The system should make that
          responsibility easier to exercise by showing sources, policy,
          approvals and a trace of what happened.
        </p>
        <h2>What to bring to a first conversation</h2>
        <ul>
          <li>
            A representative workflow, using fictional or approved examples.
          </li>
          <li>The systems and matter permissions that surround it.</li>
          <li>
            The actions that are never allowed and those that might be
            configurable.
          </li>
          <li>
            The review, logging, retention and exit requirements the firm
            already knows it needs.
          </li>
        </ul>
      </>
    ),
    "privacy-questions-for-a-law-firm-ai-provider": (
      <>
        <p>
          A provider that says “enterprise security” has not yet answered the
          questions a law firm needs answered. Prompts, uploads, outputs,
          metadata, logs and support data can all carry confidential
          information.
        </p>
        <h2>The thirteen questions</h2>
        <p>
          Ask where information lives, whether customer content trains shared
          models, who can access it, which subprocessors are involved, what
          transfers occur, how matter permissions are enforced, what is
          retained, how deletion works, how backups expire, what is logged, how
          external actions are approved, what happens when an employee leaves
          and how the firm exits.
        </p>
        <h2>Separate the product from the contract</h2>
        <p>
          A product page can describe intended controls. A procurement pack
          should identify the actual processing locations, model routes,
          retention settings, support access, incident process, subprocessor
          register and deletion obligations for the selected service. Those
          documents are what a responsible buyer can review.
        </p>
        <h2>Privacy is not the same as “no training”</h2>
        <p>
          Training exclusion matters, but it is only one control. A firm also
          needs access boundaries, purpose limitation, appropriate
          confidentiality terms, least-privilege support access, retention and
          deletion, audit history and human accountability for outputs.
        </p>
        <h2>A practical standard</h2>
        <p>
          If the answer is “it depends,” the page should say what it depends on
          and where the decision will be recorded. Precision builds more trust
          than a blanket claim that cannot survive a security questionnaire.
        </p>
      </>
    ),
    "managed-private-customer-cloud-or-local": (
      <>
        <p>
          “Private” can describe several very different operating models. The
          useful question is not which label sounds safest; it is which
          architecture gives the firm the right balance of confidentiality,
          capability, residency, operations, provider policy, latency and cost.
        </p>
        <h2>Managed private environment</h2>
        <p>
          Nella operates an isolated environment around an agreed scope. This
          can reduce the internal burden, but the firm still needs a clear
          access model, support boundary, provider register, retention schedule
          and exit plan.
        </p>
        <h2>Customer-controlled cloud</h2>
        <p>
          The runtime is configured within an environment controlled by the firm
          or its cloud team. This can fit existing identity, networking and
          regional requirements, but responsibilities become more explicit: who
          patches, monitors, restores, approves model routes and responds to an
          incident?
        </p>
        <h2>Local or sovereign</h2>
        <p>
          Local inference can be appropriate for selected sensitive workloads.
          It also changes the hardware, model, support and update conversation.
          A local path should be assessed against the actual workflow rather
          than treated as a universal answer.
        </p>
        <h2>Make the decision per workload</h2>
        <p>
          A firm may choose a hybrid model: local or restricted processing for
          confidential extraction, approved cloud models for selected work and
          public research through a separate policy route. The model gateway
          should enforce that policy before content is sent.
        </p>
      </>
    ),
    "evaluate-an-assistant-on-real-work": (
      <>
        <p>
          A fluent answer is not an evaluation. A trustworthy evaluation asks
          whether the assistant found the right sources, respected the user’s
          permissions, made the boundary visible, prepared a useful result and
          stopped when it should.
        </p>
        <h2>Build a representative set</h2>
        <p>
          Use real workflow shapes with approved or fictionalised data: an inbox
          thread with a missing attachment, a matter chronology with conflicting
          dates, a meeting note with several follow-ups, a document draft that
          must use the firm’s precedent and a request that should be refused.
        </p>
        <h2>Measure the whole trace</h2>
        <ul>
          <li>Retrieval: did it see only what the user could see?</li>
          <li>Grounding: can the reviewer find the source context?</li>
          <li>
            Action: did it prepare, change or send only what policy allowed?
          </li>
          <li>
            Review: did the human have enough information to approve or correct
            it?
          </li>
          <li>
            Failure: did the system make uncertainty and missing information
            clear?
          </li>
        </ul>
        <h2>Keep model changes observable</h2>
        <p>
          When a model or connector changes, rerun the same evaluation suite. A
          new answer can be more fluent and still be worse for the firm. The
          deployment should have a change record, a quality budget and a clear
          rollback path.
        </p>
      </>
    ),
    "private-ai-law-firms": (
      <>
        <p>
          Private AI for law firms is an AI system designed around one firm’s
          information, permissions, workflows and governance controls. It does
          not automatically mean that the system runs on the firm’s own servers.
        </p>
        <p>
          The useful questions are: who can access the firm’s information, where
          is it processed, what is retained, what is recorded, and what control
          does the firm have over its use?
        </p>
        <h2>What does private AI mean?</h2>
        <p>
          Private AI describes an operating model for a defined organisation or
          group of authorised users. It can include firm-controlled access,
          approved internal sources, matter or team separation, retention and
          deletion rules, model-provider policy, monitoring and human approval.
        </p>
        <p>
          It may be hosted by a specialist provider, deployed in a private cloud
          or operated locally. Those choices affect control, cost, maintenance
          and capability; they are not interchangeable.
        </p>
        <h2>How is it different from generic chat?</h2>
        <p>
          A generic chat tool is broad and useful for public or low-risk work. A
          private assistant is configured around a firm’s context. That does not
          make every answer correct, but it can make boundaries, sources,
          permissions and review points explicit.
        </p>
        <div className="article-table-wrap">
          <table>
            <thead>
              <tr>
                <th>Approach</th>
                <th>Useful question</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Generic chat</td>
                <td>What information is safe to enter?</td>
              </tr>
              <tr>
                <td>Private cloud</td>
                <td>Who operates and controls the environment?</td>
              </tr>
              <tr>
                <td>On-premise AI</td>
                <td>Can the firm maintain the full system securely?</td>
              </tr>
              <tr>
                <td>Legal AI SaaS</td>
                <td>What data, permissions and provider terms apply?</td>
              </tr>
              <tr>
                <td>Private AI assistant</td>
                <td>
                  Can the firm control context, access, retention and review?
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2>Is on-premise automatically safer?</h2>
        <p>
          No. Local deployment can increase direct control while also adding
          responsibility for patching, monitoring, backups, model updates,
          physical security and incident response. Security depends on how the
          whole environment is designed and operated.
        </p>
        <h2>What should a firm ask?</h2>
        <ul>
          <li>
            What information can the system access, and can access be limited by
            matter, team or client?
          </li>
          <li>Where is information processed and stored?</li>
          <li>
            Are prompts, files or outputs retained or used to improve a shared
            model?
          </li>
          <li>
            Which subprocessors, support users and connected applications are
            involved?
          </li>
          <li>
            What happens when a user leaves, an incident occurs or the firm
            exits?
          </li>
          <li>
            What human review is required before an output is relied upon?
          </li>
        </ul>
        <h2>What private AI cannot guarantee</h2>
        <p>
          Private AI does not guarantee accuracy, confidentiality in every
          circumstance, regulatory compliance or the absence of security risk.
          Start with one bounded workflow, approved users, clear sources and a
          reviewable result. Professional obligations remain
          jurisdiction-specific.
        </p>
        <h2>Frequently asked questions</h2>
        <h3>Is private AI the same as a private ChatGPT account?</h3>
        <p>
          No. A private account may offer additional controls, but private AI
          includes data access, permissions, retention, governance and workflow
          design.
        </p>
        <h3>Does private AI replace professional judgement?</h3>
        <p>
          No. It supports defined work; the responsible professional remains
          accountable for decisions, advice, review and communication.
        </p>
      </>
    ),
    "can-law-firms-use-chatgpt-with-client-information": (
      <>
        <p>
          The short answer is: sometimes, but not by default. A law firm should
          not treat ChatGPT as one uniform product or assume a paid plan
          automatically makes client information safe to upload.
        </p>
        <p>
          The practical question is whether this specific deployment can process
          this specific information for this specific purpose under controls the
          firm understands and can supervise.
        </p>
        <h2>Start with the data path</h2>
        <ol>
          <li>Which account or workspace receives the prompt or file?</li>
          <li>
            Which provider systems, connected tools and subprocessors process
            it?
          </li>
          <li>
            Is it stored in chat history, files, memory, logs, indexes or
            backups?
          </li>
          <li>
            Who can access it, including administrators and support personnel?
          </li>
          <li>Where is it processed and stored, and how is it deleted?</li>
        </ol>
        <p>
          The answer can differ between a personal account, a managed business
          workspace and an API application. It can also differ by feature or
          endpoint.
        </p>
        <h2>“No training” is not the whole answer</h2>
        <p>
          Training exclusion matters, but a firm should separately ask about
          operational retention, abuse monitoring, chat history, file libraries,
          administrator access, connected applications, logs, backups and
          deletion. “Not used to train” does not mean “nothing is retained” or
          “the data never leaves the firm.”
        </p>
        <h2>Can a general chat interface respect matter permissions?</h2>
        <p>
          Not automatically. Before connecting matter information, verify
          ethical walls, prospective-client restrictions, document permissions,
          source labels, access revocation and the difference between content
          and metadata access. A system that searches documents without reliably
          preserving matter boundaries may increase risk.
        </p>
        <div className="article-table-wrap">
          <table>
            <thead>
              <tr>
                <th>Starting point</th>
                <th>Boundary to consider</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Personal account</td>
                <td>
                  Public information and non-confidential experimentation only.
                </td>
              </tr>
              <tr>
                <td>Managed workspace</td>
                <td>
                  Approved lower-risk work after configuration and review.
                </td>
              </tr>
              <tr>
                <td>Firm-specific assistant</td>
                <td>
                  Matter-aware workflows only when permissions and approvals are
                  evidenced.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2>What professional duties apply?</h2>
        <p>
          Requirements differ by jurisdiction, regulator, court, client and
          practice area. The recurring themes are confidentiality, competence,
          supervision, independent judgement, accuracy, conflicts, disclosure
          and responsible vendor oversight. A firm needs local advice when the
          position is uncertain.
        </p>
        <h2>What does a safer pilot look like?</h2>
        <p>
          Make it narrow, reversible and measurable. Use public, synthetic or
          redacted material first. Keep a responsible professional in the loop.
          Prevent external sending, filing, advice or other consequential action
          without explicit approval. Test accuracy, source coverage, permission
          boundaries, escalation behaviour and auditability.
        </p>
        <h2>Frequently asked questions</h2>
        <h3>Is ChatGPT automatically unsafe for lawyers?</h3>
        <p>
          No. But no product label removes the need to assess data handling,
          access, retention, permissions and professional duties.
        </p>
        <h3>Does “no training” mean immediate deletion?</h3>
        <p>
          No. Training, operational retention, chat history, logs, backups and
          application state are separate questions.
        </p>
      </>
    ),
    "microsoft-copilot-for-law-firms": (
      <>
        <p>
          For many firms, Microsoft 365 Copilot is a sensible productivity
          starting point. It may help with documents, email, meetings and other
          Microsoft 365 content in applications people already use.
        </p>
        <p>
          It may not be enough if the goal is broader than individual
          productivity. The right choice depends on the work you are trying to
          improve.
        </p>
        <h2>What does Microsoft 365 Copilot do well?</h2>
        <p>
          Depending on the plan, licence and tenant configuration, Copilot can
          help draft and revise documents, summarise email threads, recap
          meetings, analyse information and create presentations. It uses
          Microsoft Graph and existing user permissions; it does not
          automatically grant access to material a user could not already view.
        </p>
        <p>
          That distinction matters. Copilot can follow permissions, but it does
          not fix over-shared SharePoint sites, inconsistent information
          governance or unclear internal policy.
        </p>
        <h2>Where can it fall short?</h2>
        <p>
          A general workplace assistant may not reflect a firm’s terminology,
          precedents, service standards or repeatable processes. Lawyers may
          still need to identify the authoritative source, choose the right
          template, move information between systems, repeat instructions and
          decide whether a task is suitable for AI assistance.
        </p>
        <div className="article-table-wrap">
          <table>
            <thead>
              <tr>
                <th>Question</th>
                <th>Microsoft 365 Copilot</th>
                <th>Firm-specific private assistant</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Primary purpose</td>
                <td>General productivity across Microsoft 365.</td>
                <td>Firm-defined work and knowledge workflows.</td>
              </tr>
              <tr>
                <td>Main context</td>
                <td>Microsoft apps, Graph data and available connectors.</td>
                <td>Selected knowledge, processes and operating rules.</td>
              </tr>
              <tr>
                <td>Best fit</td>
                <td>Drafting, summarising and meeting support.</td>
                <td>Repeatable practice operations and governed assistance.</td>
              </tr>
              <tr>
                <td>Diligence question</td>
                <td>What can users access and what is licensed?</td>
                <td>
                  What data, workflows, controls and responsibilities are in
                  scope?
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2>When is Copilot probably enough?</h2>
        <p>
          It may fit when Microsoft 365 is the firm’s main work environment,
          governance is strong, use cases are low to moderate risk, users are
          trained, and deeper workflow customisation is not yet needed.
        </p>
        <h2>When should a firm consider a private operating layer?</h2>
        <p>
          Assess one when the priority is consistency across the practice:
          approved internal knowledge, recurring processes, role-based guidance,
          defined review points, matter-aware retrieval or a clearer governance
          model.
        </p>
        <h2>The balanced answer</h2>
        <p>
          Copilot may be enough for Microsoft 365 productivity. It is less
          likely to be enough on its own when the firm wants a firm-specific
          operating layer. Many firms may use both, with an explicit policy for
          which tool handles which information and workflow.
        </p>
        <h2>Frequently asked questions</h2>
        <h3>Is Microsoft Copilot safe for law firms?</h3>
        <p>
          It can provide enterprise protections and follow Microsoft 365
          permissions, but safety depends on the actual plan, tenant
          configuration, permissions, policies and use case.
        </p>
        <h3>Is a private assistant automatically better?</h3>
        <p>
          No. Its value depends on scope, controls, data handling, integrations,
          implementation and governance. “Private” is not a guarantee by itself.
        </p>
      </>
    ),
  };
  const renderedContent =
    fullBlogContent[post.slug] ?? articleContent[post.slug];
  const articleDate =
    post.date === "27 August 2026" ? "2026-08-27" : "2026-08-26";
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.dek,
    datePublished: articleDate,
    dateModified: articleDate,
    author: { "@type": "Organization", name: "Nella" },
    publisher: {
      "@type": "Organization",
      name: "Nella",
      url: "https://meetnella.com",
    },
    mainEntityOfPage: `https://meetnella.com/blog/${post.slug}`,
  };
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </script>
      <PageIntro eyebrow={post.label} title={post.title} body={post.dek}>
        <div className="article-meta">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>
      </PageIntro>
      <article className="article-body">
        <div className="article-prose">{renderedContent}</div>
        <aside className="article-source">
          <p className="section-eyebrow">Source and review note</p>
          <p>{post.source}</p>
          <p>
            Reviewed {post.date}. Product and legal guidance changes. Re-check
            the relevant provider terms and local professional guidance before
            relying on this note.
          </p>
          <div>
            <p className="section-eyebrow">Primary sources</p>
            <ul>
              {(articleSources[post.slug] ?? []).map(([label, href]) => (
                <li key={href}>
                  <a href={href} target="_blank" rel="noreferrer">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <a className="text-link" href="/blog">
            Back to the blog
          </a>
        </aside>
      </article>
      <PageCta title="Talk through the question behind the article." />
    </>
  );
}

function ComparisonsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Comparisons"
        title="Compare the operating model, not the marketing copy."
        body="Nella is one path among several. This page uses public product positioning where available and labels the limits. Capabilities, pricing, contracts and policies change; verify the selected service before a decision."
      />
      <section
        className="comparisons-section"
        data-motion
        aria-labelledby="comparisons-title"
      >
        <header className="comparisons-heading">
          <div>
            <p className="section-eyebrow">Evidence-safe comparison</p>
            <h2 id="comparisons-title">
              Different products solve different jobs.
            </h2>
          </div>
          <p className="comparison-review">
            Last reviewed 26 August 2026 · Public sources and product
            positioning only
          </p>
        </header>
        <div className="comparison-card-grid" data-stagger>
          {comparisonCards.map(
            ([name, positioning, fit, nella, source, sourceHref]) => (
              <article className="comparison-card" key={name}>
                <div className="comparison-card-head">
                  <h3>{name}</h3>
                  <span>Compare</span>
                </div>
                <div>
                  <strong>What it is</strong>
                  <p>{positioning}</p>
                </div>
                <div>
                  <strong>When it may fit</strong>
                  <p>{fit}</p>
                </div>
                <div className="comparison-card-nella">
                  <strong>How Nella differs</strong>
                  <p>{nella}</p>
                </div>
                <small>
                  Source note:{" "}
                  {sourceHref ? (
                    <a href={sourceHref} target="_blank" rel="noreferrer">
                      {source}
                    </a>
                  ) : (
                    source
                  )}
                </small>
              </article>
            ),
          )}
        </div>
        <div className="comparison-method">
          <div>
            <p className="section-eyebrow">How to use this page</p>
            <h2>Bring the same workflow to every conversation.</h2>
          </div>
          <ol>
            <li>Choose one representative workflow.</li>
            <li>
              Ask each provider what the system can read, prepare, change and
              send.
            </li>
            <li>
              Ask for the data, model, subprocessor, retention and deletion
              answers in writing.
            </li>
            <li>Run an evaluation with human review before wider rollout.</li>
          </ol>
        </div>
      </section>
      <PageCta
        title="Compare the first workflow, not just the tools."
        body="We can help turn one recurring bottleneck into a clear, evidence-backed comparison."
      />
    </>
  );
}

function ConsultationPage() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };
  return (
    <>
      <PageIntro
        eyebrow="Book a private consultation"
        title="Let’s design the right first deployment for your firm."
        body="The first conversation is about your workflows, systems, constraints and the decision that should come next. Keep the details high level; do not include client-confidential information."
      />
      <section
        className="consultation-page-section"
        aria-labelledby="consultation-form-title"
      >
        <div className="consultation-promise">
          <p className="section-eyebrow">What we’ll cover</p>
          <h2 id="consultation-form-title">A useful first conversation.</h2>
          <ul>
            <li>Understand the firm and its highest-friction workflows.</li>
            <li>Map current systems, permissions and constraints.</li>
            <li>Discuss deployment and provider policy.</li>
            <li>Identify a sensible first pilot and next decision.</li>
          </ul>
        </div>
        <form className="consultation-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" autoComplete="name" required />
          </label>
          <label>
            Firm
            <input name="firm" autoComplete="organization" required />
          </label>
          <label>
            Role
            <input name="role" autoComplete="organization-title" required />
          </label>
          <label>
            Country
            <input name="country" autoComplete="country-name" required />
          </label>
          <label>
            Approximate team size
            <select name="team-size" defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              <option>1–10</option>
              <option>11–50</option>
              <option>51–200</option>
              <option>201+</option>
            </select>
          </label>
          <label>
            Biggest workflow bottleneck
            <textarea
              name="bottleneck"
              rows={4}
              placeholder="Keep this high level; no client-confidential details."
              required
            />
          </label>
          <label>
            Deployment or security requirement
            <textarea
              name="deployment"
              rows={3}
              placeholder="For example: customer-controlled cloud, residency or provider policy."
            />
          </label>
          <button className="button" type="submit">
            Prepare consultation request
          </button>
          {submitted && (
            <p className="form-status" role="status">
              Thanks. This prototype has captured the request locally. To
              connect this to a real inbox or calendar, add the approved form
              provider before launch. You can also{" "}
              <a href="mailto:hello@meetnella.com?subject=Private%20consultation">
                open an email directly
              </a>
              .
            </p>
          )}
        </form>
      </section>
    </>
  );
}

function LegalPlaceholderPage({
  title,
  eyebrow,
  body,
  kind,
}: {
  title: string;
  eyebrow: string;
  body: string;
  kind: "privacy" | "terms" | "accessibility";
}) {
  const content = {
    privacy: [
      "This page is a draft placeholder for Nella’s final privacy notice.",
      "It should explain what information the website collects, why it is used, how long it is retained, who processes it and how visitors can exercise their rights. Final wording requires review by the responsible privacy owner and counsel.",
    ],
    terms: [
      "This page is a draft placeholder for Nella’s final terms.",
      "The final document should define the relevant service, responsibilities, limitations, commercial terms and governing law. It must be approved before publication.",
    ],
    accessibility: [
      "Nella is designed to be usable with keyboard navigation, clear focus states, semantic structure, readable contrast and reduced motion preferences.",
      "If something is difficult to use, contact hello@meetnella.com with the page and issue. The final accessibility statement and review process will be added before launch.",
    ],
  }[kind];
  return (
    <>
      <PageIntro eyebrow={eyebrow} title={title} body={body} />
      <section className="legal-placeholder">
        <p className="resource-status">Draft for review</p>
        <h2>{content[0]}</h2>
        <p>{content[1]}</p>
        <a className="text-link" href="/consultation">
          Ask a question about this page
        </a>
      </section>
    </>
  );
}

function NotFoundPage() {
  return (
    <>
      <PageIntro
        eyebrow="Page not found"
        title="This page is not part of the Nella site yet."
        body="The page may have moved, or it may be one of the resources still being prepared."
      />
      <section className="legal-placeholder">
        <a className="button" href="/">
          Return to Nella home
        </a>
      </section>
    </>
  );
}

function App() {
  const pathname = usePathname();
  const [showStickyCta, setShowStickyCta] = useState(false);
  const articleMeta = pathname.startsWith("/blog/")
    ? blogPosts.find((post) => post.slug === pathname.slice("/blog/".length))
    : undefined;
  const meta =
    routeMeta[pathname] ??
    (articleMeta
      ? [articleMeta.title + " | Nella", articleMeta.dek]
      : [
          "Nella | Private virtual assistants for law firms",
          "Nella gives your law firm its own private support system.",
        ]);
  useEffect(() => {
    document.title = meta[0];
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", meta[1]);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  useEffect(() => {
    const target =
      document.querySelector(".sticky-cta-trigger") ??
      document.querySelector("#main-content .page-hero");
    if (!target) return;
    let hasIntersected = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) hasIntersected = true;
        if (hasIntersected) setShowStickyCta(!entry.isIntersecting);
      },
      { threshold: 0 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [pathname]);
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-ready");
    const targets = document.querySelectorAll<HTMLElement>("[data-motion]");
    if (!("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return () => root.classList.remove("motion-ready");
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8%" },
    );
    targets.forEach((target) => observer.observe(target));
    return () => {
      observer.disconnect();
      root.classList.remove("motion-ready");
    };
  }, [pathname]);
  let page: React.ReactNode;
  switch (pathname) {
    case "/":
      page = <HomePage />;
      break;
    case "/how-it-works":
      page = <HowItWorksPage />;
      break;
    case "/what-it-supports":
      page = <WhatItSupportsPage />;
      break;
    case "/privacy-and-deployment":
      page = <PrivacyDeploymentPage />;
      break;
    case "/privacy":
      page = <PrivacyDeploymentPage />;
      break;
    case "/about":
      page = <AboutPage />;
      break;
    case "/pricing":
      page = <PricingPage />;
      break;
    case "/compare":
      page = <ComparePage />;
      break;
    case "/comparisons":
      page = <ComparisonsPage />;
      break;
    case "/compareisons":
      page = <ComparisonsPage />;
      break;
    case "/resources":
      page = <ResourcesPage />;
      break;
    case "/blog":
      page = <BlogPage />;
      break;
    case "/consultation":
      page = <ConsultationPage />;
      break;
    case "/privacy-notice":
      page = (
        <LegalPlaceholderPage
          eyebrow="Privacy notice"
          title="Privacy should be clear before the first conversation."
          body="Nella’s privacy notice will explain the website’s data practices and visitor choices."
          kind="privacy"
        />
      );
      break;
    case "/terms":
      page = (
        <LegalPlaceholderPage
          eyebrow="Terms"
          title="Clear terms for a clear working relationship."
          body="Nella’s terms will set out the basis for using this website and engaging the service."
          kind="terms"
        />
      );
      break;
    case "/accessibility":
      page = (
        <LegalPlaceholderPage
          eyebrow="Accessibility"
          title="A site that respects how people work."
          body="Nella is being built with accessibility as part of the product quality bar."
          kind="accessibility"
        />
      );
      break;
    default:
      page = pathname.startsWith("/blog/") ? (
        <BlogArticlePage slug={pathname.slice("/blog/".length)} />
      ) : (
        <NotFoundPage />
      );
  }
  return (
    <div className="page-frame" id="top">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Navigation pathname={pathname} />
      <main id="main-content">{page}</main>
      <Footer />
      <StickyCta visible={showStickyCta} />
    </div>
  );
}

export default App;
