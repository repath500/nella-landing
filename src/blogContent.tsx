import type { ReactNode } from "react";

export const fullBlogContent: Record<string, ReactNode> = {
  "private-ai-law-firms": <>
    <p>Private AI for law firms is an AI system designed around one firm’s information, permissions, workflows and governance controls. It is not simply a chatbot with a legal interface, and it does not automatically mean that the system runs on the firm’s own servers.</p>
    <p>The useful question is not only which model a provider uses. It is: who can access the firm’s information, where is it processed, what is retained, what is recorded, and what control does the firm have over its use?</p>
    <p>That distinction matters for firms anywhere in the world. A solicitor in Dublin, a partner in London, an in-house counsel team in Singapore and a US litigation practice may face different professional rules, but each needs a clear answer about confidentiality, access, accuracy and accountability.</p>

    <h2>What does “private AI” mean?</h2>
    <p>Private AI describes an operating model for a defined organisation or group of authorised users. A private AI system may include:</p>
    <ul>
      <li>firm-controlled identity, roles and permissions;</li>
      <li>connections to approved internal information;</li>
      <li>separation between matters, teams or clients;</li>
      <li>defined retention, deletion and export rules;</li>
      <li>controls over which models and providers may receive data;</li>
      <li>monitoring, evaluation and incident processes; and</li>
      <li>human approval before important outputs are relied upon or sent.</li>
    </ul>
    <p>“Private” therefore describes the control environment, not one particular hosting arrangement. An assistant can be hosted by a specialist provider, deployed in a customer-controlled cloud, or operated on local infrastructure. Those choices affect security, capability, cost and maintenance, but they are not interchangeable.</p>

    <h2>How is private AI different from a generic chat tool?</h2>
    <p>A generic chat tool is built for a broad user base and a wide range of questions. That can be useful for public information, drafting practice and other low-risk work. It normally leaves the firm to decide what context is safe to provide and how the result fits into its process.</p>
    <p>A private AI assistant is configured around a defined firm context. That does not make every answer correct or every use appropriate. It does make it possible to specify which information is in scope, which users may retrieve it, which actions are disabled, and where a person must review the result.</p>
    <div className="article-table-wrap"><table><thead><tr><th>Approach</th><th>Typical context</th><th>Main question</th></tr></thead><tbody>
      <tr><td>Generic chat tool</td><td>Broad public or workplace questions</td><td>What information is safe to enter?</td></tr>
      <tr><td>Private cloud</td><td>Dedicated or logically isolated environment</td><td>Who operates it and controls access?</td></tr>
      <tr><td>On-premise AI</td><td>Infrastructure operated by the firm</td><td>Can the firm maintain the whole stack?</td></tr>
      <tr><td>Legal AI SaaS</td><td>Product designed for legal tasks</td><td>What data, permissions and terms apply?</td></tr>
      <tr><td>Private AI assistant</td><td>Firm-specific people, sources and workflows</td><td>Can context, access, retention and review be governed?</td></tr>
    </tbody></table></div>

    <h2>Is private cloud the same as private AI?</h2>
    <p>No. Private cloud describes an infrastructure arrangement. Private AI describes how the system is controlled and used.</p>
    <p>A private cloud may provide dedicated infrastructure, but the firm still needs to understand authentication, matter permissions, customer separation, prompt and output retention, model-improvement policy, subprocessors, support access, incident response and deletion. Conversely, a shared cloud environment may still provide strong logical separation and contractual protections when it is designed and operated well.</p>
    <p>Evaluate the complete system rather than relying on labels such as “private”, “enterprise” or “secure”. Those words are useful starting points, not evidence.</p>

    <h2>Is on-premise AI automatically more secure?</h2>
    <p>No. Local deployment can give a firm more direct control over infrastructure and network access. It can also create more responsibility for patching, monitoring, backups, physical security, model updates, resilience and incident response.</p>
    <p>A poorly maintained local system may be less resilient than a well-managed hosted service. The right question is which operating model the firm can govern consistently for the specific workload. A hybrid approach may be appropriate: restricted or local processing for selected sensitive tasks, approved cloud models for other work, and a separate route for public research.</p>

    <h2>How is private AI different from legal AI SaaS?</h2>
    <p>Legal AI SaaS usually means software designed for legal tasks such as document review, research, drafting, due diligence or matter analysis. That specialisation can be valuable, but “legal” describes the use case. It does not, by itself, answer questions about hosting, retention, model training, auditability, cross-border processing or integration with the firm’s systems.</p>
    <p>The two categories can overlap. A legal AI SaaS product may be part of a private AI strategy if its controls, contract and workflow fit the firm. Nella’s focus is narrower: a firm-specific private assistant and operating layer configured around approved information, users, systems and review boundaries.</p>
    <p>Exact integrations, hosting arrangements, retention periods and permissions should be confirmed directly. A product description is not a substitute for the deployment record or contract.</p>

    <h2>What should a law firm ask before adopting private AI?</h2>
    <p>Use this as a first-pass diligence checklist. The answers should be specific to the selected service and the firm’s actual configuration:</p>
    <ul>
      <li>What information can the system access, and can access be limited by user, role, team, matter or client?</li>
      <li>Where is information processed, stored, indexed, cached, backed up and supported?</li>
      <li>Are prompts, uploads, outputs or logs retained? For how long?</li>
      <li>Is customer information used to train or improve a shared model?</li>
      <li>Which providers, subprocessors, connected applications and support personnel are involved?</li>
      <li>What happens when a user changes role or leaves the firm?</li>
      <li>Can the firm see sources, approvals, failures and consequential actions?</li>
      <li>Can the firm export and delete its information, including indexes and backups?</li>
      <li>What happens when the system is uncertain, unavailable or wrong?</li>
      <li>What human review is required before an output is used or sent?</li>
    </ul>
    <p>The NIST AI Risk Management Framework offers a voluntary structure built around governing, mapping, measuring and managing risk. It is not specific to legal practice, but it can help a firm organise the conversation. Professional guidance remains jurisdiction-specific: the ABA’s Formal Opinion 512, the EU AI Act and national regulator guidance should be read in context rather than treated as one global rulebook.</p>

    <h2>What private AI cannot guarantee</h2>
    <p>Private AI does not guarantee accurate answers, confidentiality in every circumstance, regulatory compliance or the absence of security risk. It also does not remove the need for professional review. A system can omit a relevant document, misunderstand an instruction or produce a confident but incorrect result.</p>
    <p>The safest first step is usually a bounded workflow with clear inputs, authorised users, visible source context, a reviewable output and no autonomous external action. That is a more useful test than giving an assistant unrestricted access to every firm record.</p>

    <h2>Frequently asked questions</h2>
    <h3>Is private AI the same as a private ChatGPT account?</h3>
    <p>No. A private account may offer additional business controls, but private AI includes data access, permissions, retention, governance and workflow design.</p>
    <h3>Can private AI be used with client information?</h3>
    <p>That depends on the system, contract, configuration, applicable professional rules and the firm’s own risk assessment. Do not assume that any “enterprise” or “secure” label is sufficient.</p>
    <h3>Does private AI replace lawyers or professional judgement?</h3>
    <p>No. It can assist with defined tasks, but responsibility for decisions, advice, review and client communication remains with the relevant professionals.</p>
    <h3>Is on-premise always the best option?</h3>
    <p>No. On-premise may suit particular infrastructure or residency requirements, but it brings substantial operational responsibilities.</p>
    <h3>Where should a firm start?</h3>
    <p>Start with one bounded workflow. Define the information involved, permitted users, review process, retention requirements and success criteria before expanding.</p>

    <p>Nella helps firms explore what a firm-specific private AI operating layer could look like in practice. <a href="/privacy-and-deployment">Review the deployment options</a> or <a href="/consultation">book a private consultation</a> to discuss the systems, boundaries and working methods that matter to your firm.</p>
  </>,

  "can-law-firms-use-chatgpt-with-client-information": <>
    <p>The short answer is: sometimes, but not by default. A law firm should not treat “ChatGPT” as one uniform product or assume that a paid plan automatically makes client information safe to upload.</p>
    <p>The right decision depends on the specific service, account type, configuration, contract, data path, retention settings, access controls, matter permissions and professional rules that apply to the firm.</p>
    <p>The practical question is not simply “Is ChatGPT secure?” It is: can this specific deployment process this specific information for this specific purpose under controls the firm understands and can supervise?</p>

    <h2>Start with the data path</h2>
    <p>Before discussing model quality, map what happens when someone enters a prompt or uploads a document:</p>
    <ol>
      <li>Who sends the information, from which device and account?</li>
      <li>Which workspace, endpoint or connected application receives it?</li>
      <li>Which provider systems and subprocessors process it?</li>
      <li>Is it stored in chat history, files, memory, logs, search indexes or backups?</li>
      <li>Who can access it, including workspace administrators and support personnel?</li>
      <li>Where is it processed and stored?</li>
      <li>How does deletion work, and what remains in backups or operational records?</li>
    </ol>
    <p>The answer may differ between a personal account, a managed business workspace and an application built using an API. It may also differ by feature or endpoint. A firm should document the route it has actually approved instead of referring to a provider name as if it described every product and setting.</p>

    <h2>Does the model train on the firm’s information?</h2>
    <p>Training is important, but it is only one part of the risk. A firm should separately ask whether prompts and files are used to improve or evaluate models, retained for abuse monitoring, stored as application state, made available to administrators, sent to connected tools, included in logs or covered by a deletion and backup policy.</p>
    <p>For example, a provider may say that business data is not used to train shared models by default, while offering separate retention controls for eligible customers. A consumer service may provide a model-improvement setting or a temporary-chat mode with different retention behaviour. Those statements do not mean that nothing is retained or that information never leaves the firm.</p>
    <p>A useful procurement rule is simple:</p>
    <blockquote><p>Never accept “we do not train on your data” as the whole answer. Ask what is stored, for how long, by whom, where and for what operational purpose.</p></blockquote>

    <h2>Who can access the information?</h2>
    <p>Confidentiality risk can arise from access even when model training is switched off. Identify individual users and groups, workspace administrators, support and incident-response personnel, connected applications, API keys, service accounts, mobile devices, shared links, exported files, logs and monitoring systems.</p>
    <p>Administrator access may be appropriate for a managed workspace, but it should be deliberate. People should know whether their use is monitored, what is recorded, who can review it and how the firm handles confidential material in those records. The firm should distinguish content access from metadata access: a person who can see that a matter exists may not be authorised to read its documents.</p>

    <h2>Can ChatGPT respect matter permissions?</h2>
    <p>A general chat interface is not automatically a matter-management system. Before connecting AI to matter information, verify whether the system can enforce the firm’s actual permission model.</p>
    <ul>
      <li>Can a user access only matters they are authorised to work on?</li>
      <li>Are prospective-client and former-client restrictions considered?</li>
      <li>Can ethical walls or restricted matters be enforced?</li>
      <li>Are document permissions preserved in search and retrieval?</li>
      <li>Can the system distinguish content access from metadata access?</li>
      <li>Are outputs labelled with their source material?</li>
      <li>Can access be revoked promptly?</li>
    </ul>
    <p>A system that can search a firm’s documents without reliably preserving matter boundaries may increase risk rather than reduce it.</p>
    <div className="article-table-wrap"><table><thead><tr><th>Starting point</th><th>Suitable boundary to consider</th><th>Still verify</th></tr></thead><tbody>
      <tr><td>Personal account</td><td>Public information and non-confidential experimentation.</td><td>Consumer terms, retention, account ownership and accidental disclosure.</td></tr>
      <tr><td>Managed business workspace</td><td>Approved lower-risk internal work after configuration.</td><td>Contract, administrator access, retention, connected apps and regional processing.</td></tr>
      <tr><td>Firm-specific private assistant</td><td>Matter-aware workflows where permissions and approvals are designed in.</td><td>Architecture, integrations, audit trail, support access and testing evidence.</td></tr>
    </tbody></table></div>

    <h2>What professional duties and jurisdictional rules apply?</h2>
    <p>Professional obligations differ by jurisdiction, regulator, court, client mandate and type of practice. The recurring themes are more stable: protect confidential information, act competently, supervise people and systems, maintain independent judgement, check accuracy and completeness, manage conflicts, meet disclosure obligations and use vendors responsibly.</p>
    <p>The ABA’s Formal Opinion 512 is one example of guidance that discusses competence, confidentiality, communication, supervision, candour toward tribunals and fees. GDPR may be relevant to firms processing personal data in its scope, including principles such as purpose limitation, data minimisation, security, processor arrangements and international transfers. Neither is a universal answer for every firm. Where the position is uncertain, obtain advice from the relevant professional, privacy or regulatory authority.</p>

    <h2>How should a firm approve AI use?</h2>
    <p>Approval should be based on the task and information involved, not on enthusiasm for the tool. A simple internal classification might be:</p>
    <ul>
      <li><strong>Low risk:</strong> public information, formatting or generic drafting without client details.</li>
      <li><strong>Moderate risk:</strong> internal firm information, anonymised examples or approved templates.</li>
      <li><strong>High risk:</strong> client-identifying information, privileged material, sensitive personal data, active disputes, regulated records or information subject to a contractual restriction.</li>
    </ul>
    <p>For each approved use case, record its purpose, data categories, users, provider, deployment, retention and deletion, access model, human review, prohibited uses, incident process and review date. The policy should also address “shadow AI”: staff using personal accounts or unapproved tools because the firm has not supplied a workable alternative.</p>

    <h2>What does a safer pilot look like?</h2>
    <p>A safer pilot is narrow, reversible and measurable. Start with one workflow such as preparing an internal meeting brief from approved documents, organising public research or creating a first-pass task list. Use synthetic, public or carefully redacted material first. Keep a responsible professional in the loop. Prevent external sending, filing, advice or other consequential action without explicit approval.</p>
    <p>Measure more than speed. Test factual accuracy, source coverage, missed information, confidentiality boundaries, permission failures, consistency, user understanding, escalation behaviour and auditability. Give the pilot a stop condition. If the system cannot show what it used, who could access it, what was retained or where it failed, it is not ready for higher-risk work.</p>

    <h2>Frequently asked questions</h2>
    <h3>Is ChatGPT automatically unsafe for lawyers?</h3>
    <p>No. But no product label removes the need to assess data handling, access, retention, permissions and professional duties.</p>
    <h3>Is a business plan enough for confidential client information?</h3>
    <p>Not by itself. Verify the applicable contract, configuration, feature-level behaviour, retention and access model.</p>
    <h3>Does “no training” mean the information is deleted immediately?</h3>
    <p>No. Training, operational retention, chat history, logs, backups and application state are separate questions.</p>
    <h3>What is the safest first use case?</h3>
    <p>Usually a bounded workflow using public, synthetic, redacted or already-approved information, with no autonomous external action and a clear human review step.</p>

    <p>The goal is not to ban useful tools or upload everything. It is to make the boundary visible, approved and reviewable. <a href="/privacy-and-deployment">See how Nella approaches privacy and deployment</a> or <a href="/consultation">book a private consultation</a> to map a first workflow.</p>
  </>,

  "microsoft-copilot-for-law-firms": <>
    <p>For many firms, Microsoft 365 Copilot is a sensible productivity starting point. It can help people work with documents, email, meetings and other Microsoft 365 content inside applications they already use.</p>
    <p>But it may not be enough if the goal is broader than individual productivity. Microsoft Copilot is primarily a general-purpose assistant within the Microsoft 365 environment. A firm-specific private assistant is intended to operate around the firm’s own knowledge, policies, templates, service standards, workflows and governance.</p>
    <p>The balanced answer is often “possibly both”. The right choice depends on the problem the firm is trying to solve.</p>

    <h2>What does Microsoft 365 Copilot do well?</h2>
    <p>Depending on the product, plan, licence and tenant configuration, Microsoft 365 Copilot can help users draft and revise documents, summarise email threads, recap meetings, analyse information and create presentations. That makes it useful for everyday tasks such as:</p>
    <ul>
      <li>preparing a first draft from instructions;</li>
      <li>summarising a long email exchange;</li>
      <li>identifying actions from a meeting;</li>
      <li>improving the clarity or structure of a document;</li>
      <li>finding information a user is already authorised to access; and</li>
      <li>turning existing content into a different format.</li>
    </ul>
    <p>Microsoft describes Copilot as using Microsoft Graph and the user’s existing permissions to ground responses in organisational content. It does not automatically grant access to material that the user could not already view.</p>
    <p>That is a useful control, but it is not a permissions clean-up project. Copilot can follow permissions while still exposing the consequences of over-shared SharePoint sites, poorly organised Teams spaces or inconsistent information governance. Before deployment, a firm should understand what information is accessible, who can access it and how sensitive content is governed.</p>

    <h2>Where can Microsoft Copilot fall short for a law firm?</h2>
    <p>The limitation is not necessarily that Copilot is incapable. It is that a general workplace assistant may not reflect how a particular firm operates.</p>
    <p>A lawyer may still need to identify the authoritative source, choose the right firm template or precedent, check an answer against current internal policy, move information between systems, repeat instructions for recurring work, validate the result against matter context and decide whether the task is suitable for AI assistance.</p>
    <p>Copilot can support some of these activities. It does not automatically turn the firm’s accumulated knowledge into a consistent operating model. There is a difference between helping one user complete a task and helping a firm run a repeatable workflow with defined inputs, sources, permissions, review points and escalation paths.</p>

    <h2>Microsoft Copilot versus a firm-specific private assistant</h2>
    <div className="article-table-wrap"><table><thead><tr><th>Question</th><th>Microsoft 365 Copilot</th><th>Firm-specific private assistant</th></tr></thead><tbody>
      <tr><td>Primary purpose</td><td>General productivity across Microsoft 365.</td><td>Firm-defined work and knowledge workflows.</td></tr>
      <tr><td>Main context</td><td>Microsoft apps, Graph data and available connectors.</td><td>Selected knowledge, processes and operating rules.</td></tr>
      <tr><td>User experience</td><td>Embedded in familiar Microsoft applications.</td><td>Designed around the firm’s chosen workflows and interfaces.</td></tr>
      <tr><td>Configuration</td><td>Microsoft and tenant settings, licences and agents.</td><td>Firm-specific configuration, controls and implementation choices.</td></tr>
      <tr><td>Best fit</td><td>Drafting, summarising, meeting and productivity support.</td><td>Repeatable practice operations and governed assistance.</td></tr>
      <tr><td>Main diligence question</td><td>What can users access and which features are licensed?</td><td>What data, workflows, controls and responsibilities are in scope?</td></tr>
    </tbody></table></div>
    <p>A private assistant should not be treated as automatically safer because it is described as private. The firm must still review hosting, access controls, supplier terms, retention, auditability, subprocessors, data locations and incident arrangements.</p>

    <h2>When is Microsoft Copilot probably enough?</h2>
    <p>Copilot may be sufficient when the firm wants a controlled productivity layer for drafting, summarising, meeting support and work with existing Microsoft 365 content. It may also be the pragmatic first step when:</p>
    <ul>
      <li>Microsoft 365 is the main work environment;</li>
      <li>the firm already has strong identity and information governance;</li>
      <li>the use cases are low to moderate risk;</li>
      <li>users are trained and outputs remain subject to review;</li>
      <li>deeper workflow customisation is not yet needed; and</li>
      <li>the firm wants to test value before adopting a broader system.</li>
    </ul>
    <p>Define success in practical terms: which tasks should improve, what review remains mandatory, how much source context is needed, and how will the firm know whether the tool is being used appropriately?</p>

    <h2>When should a firm consider a private operating layer?</h2>
    <p>Assess a firm-specific private assistant when the central requirement is consistency across the practice rather than isolated personal productivity. That may include a need to:</p>
    <ul>
      <li>make approved internal knowledge easier to use;</li>
      <li>standardise recurring operational processes;</li>
      <li>provide different guidance to different teams or roles;</li>
      <li>connect assistance to firm-defined instructions and review points;</li>
      <li>reduce repeated searching across several internal sources; or</li>
      <li>create a clearer governance model for AI-assisted work.</li>
    </ul>
    <p>Begin with the workflow, not the product label. Map what enters the process, which sources are authoritative, who can see the information, what the assistant may prepare, what it may change, and where a qualified person must review or approve the result.</p>

    <h2>Can a firm use Copilot and a private assistant together?</h2>
    <p>Potentially, yes. They may serve different purposes. Copilot can support everyday work within the Microsoft environment while a private operating layer handles selected firm processes, matter-aware retrieval, internal knowledge or approval-driven work.</p>
    <p>The risk is creating multiple uncontrolled routes for sensitive data. The firm should define which tool is approved for which information and workflow, how users recognise the boundary, and what happens when a task moves between systems. A clear policy matters as much as the software.</p>

    <h2>A practical buying checklist</h2>
    <p>Before selecting Copilot, a private assistant or both, ask:</p>
    <ol>
      <li>What specific work are we trying to improve?</li>
      <li>Is the information accurate, current and permissioned?</li>
      <li>Which Microsoft 365 licence and features do we actually have?</li>
      <li>Will the proposed system access matter, client or privileged information?</li>
      <li>Where are prompts, outputs and source materials stored?</li>
      <li>Can the firm audit or retain relevant interactions?</li>
      <li>What happens when the system is uncertain or wrong?</li>
      <li>Which outputs require human verification?</li>
      <li>How will users be trained and supervised?</li>
      <li>Do local professional, privacy, court or client requirements impose additional conditions?</li>
    </ol>
    <p>Professional duties do not disappear when software is involved. Guidance from the ABA, SRA, Law Society and other professional bodies illustrates recurring concerns around competence, confidentiality, supervision, accuracy and judgement. Those are examples, not a universal global rulebook. Requirements differ between jurisdictions, regulators, courts, client mandates and practice areas.</p>

    <h2>The balanced answer</h2>
    <p>Microsoft Copilot may be enough for Microsoft 365 productivity. It is less likely to be enough on its own if the firm wants a private, firm-specific operating layer that reflects its own knowledge, workflows and governance.</p>
    <p>Many firms may use both: Copilot for everyday work inside Microsoft 365, alongside a deliberately configured private assistant for selected firm processes. The sensible test is not whether one tool sounds more advanced. It is whether the chosen setup gives the firm a clear, reviewable and proportionate way to improve work without weakening confidentiality, accountability or professional judgement.</p>

    <h2>Frequently asked questions</h2>
    <h3>Is Microsoft Copilot safe for law firms?</h3>
    <p>It can provide enterprise protections and follow Microsoft 365 permissions, but safety depends on the actual plan, tenant configuration, permissions, policies and use case. It does not remove the need for governance, training or human review.</p>
    <h3>Does Microsoft Copilot provide legal advice?</h3>
    <p>No. Copilot can generate or summarise content, but legal work must be assessed and verified by appropriately responsible professionals.</p>
    <h3>Is a private AI assistant automatically better than Copilot?</h3>
    <p>No. Its value depends on scope, controls, data handling, integrations, implementation and governance. “Private” is not a guarantee by itself.</p>
    <h3>What should a law firm assess first?</h3>
    <p>Start with a small number of real workflows. Define the desired outcome, information sources, user permissions, review requirements, retention needs and measures of success before choosing a product.</p>

    <p><a href="/compare">Compare the operating models</a> or <a href="/consultation">book a private consultation</a> to discuss where Microsoft 365 already serves your firm and where a firm-specific assistant could add value.</p>
  </>,

  "best-ai-agents-for-law-firms": <>
    <p>The best AI agent for a law firm in 2026 is not necessarily the newest model or the most autonomous product. It is the system that fits a defined piece of work, can access only the information it should, prepares something a professional can review, and has a clear boundary around what it may change or send.</p>
    <p>That means there is no universal ranking. “Best” depends on the firm’s workflow, jurisdiction, information, deployment preference, integrations and governance. A Microsoft-centred firm may choose differently from a litigation practice with a large legal research subscription, an international firm with residency requirements or a smaller practice looking for a manageable first pilot.</p>

    <h2>What is an AI agent in a law-firm context?</h2>
    <p>An AI agent is a system that receives a goal and directs some of its own process and tool use to pursue it. It may retrieve approved documents, compare versions, prepare a chronology, create a task list or draft a message for review.</p>
    <p>The key question is the boundary. An agent might read a defined matter folder and prepare a brief, while requiring approval before updating a case-management record, sharing a document, contacting a client or filing anything. Anthropic’s guidance describes permission choices such as always allow, require approval or block. Ask every vendor: what can it read, do and change, and where must it stop?</p>

    <h2>Which category of AI agent suits a law firm?</h2>
    <p>Start with categories rather than brand lists; compare the selected plan, contract, connector, region and configuration.</p>
    <div className="article-table-wrap"><table><thead><tr><th>Category</th><th>May suit a firm that needs</th><th>Questions to verify</th></tr></thead><tbody>
      <tr><td>General enterprise assistants</td><td>Broad drafting, research, summarisation or custom workflows using a general model.</td><td>Which plan and endpoint are in scope? What is retained, logged, connected and administered?</td></tr>
      <tr><td>Legal AI platforms</td><td>Legal research, drafting or document analysis grounded in a specialist legal-content ecosystem.</td><td>Which jurisdictions, sources and citations are covered? How does the workflow behave when sources conflict or are missing?</td></tr>
      <tr><td>Microsoft 365 assistants</td><td>Productivity work centred on Word, Outlook, Teams, SharePoint and other Microsoft services.</td><td>Are tenant permissions clean? Which agents, connectors and actions are allowed? What interaction data is stored?</td></tr>
      <tr><td>Firm-specific private assistants</td><td>Cross-system work shaped around the firm’s matters, permissions, processes and approval states.</td><td>Is the architecture, implementation, support model and exit plan specific enough to review?</td></tr>
      <tr><td>Internal builds</td><td>Maximum control or unusual workflows where the firm has a long-term engineering and operations capability.</td><td>Who owns security, evaluation, model changes, integrations, incidents, maintenance and user support?</td></tr>
    </tbody></table></div>

    <h2>What do the main product categories actually offer?</h2>
    <p>Microsoft 365 Copilot fits firms whose work already lives in Microsoft 365. Microsoft says it can use Microsoft Graph content the user may view, including documents, emails, chats, meetings and contacts, and that prompts, responses and Graph data are not used to train foundation models. It does not repair over-shared permissions, and interaction data is stored within Microsoft 365, so tenant hygiene, retention and administration still need review. <a href="https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy" target="_blank" rel="noreferrer">Read Microsoft’s privacy documentation</a>.</p>
    <p>General enterprise assistants such as ChatGPT Business or Enterprise, the OpenAI API, Claude for Work and the Anthropic API are broader building blocks. OpenAI says business data is not used to train models by default. Anthropic says Claude for Work customers control submitted data, Anthropic acts as processor, and commercial data is not used to train its models unless the customer opts in. Verify the exact contract, feature, connector and regional path. <a href="https://openai.com/business-data/" target="_blank" rel="noreferrer">OpenAI’s terms</a> and <a href="https://support.claude.com/en/articles/9267385-does-anthropic-act-as-a-data-processor-or-controller" target="_blank" rel="noreferrer">Anthropic’s explanation</a> are starting points.</p>
    <p>Legal AI platforms make a different promise. Thomson Reuters describes CoCounsel Legal as integrated with Westlaw and Practical Law for legal research, drafting and end-to-end workflows. That may fit firms centred on those sources, but leaves questions about firm documents, matter permissions, jurisdictional coverage and review. Treat product descriptions as claims to test.</p>
    <p>A firm-specific private assistant is aimed at approved knowledge, matter boundaries, recurring processes, review points and the systems people already use. Nella belongs in this category. That does not make it automatically better; it makes the implementation conversation more specific. Ask for evidence about deployment, access, support, evaluation and exit.</p>

    <h2>How should a firm evaluate an AI agent?</h2>
    <p>Bring the same representative workflow to every provider. “Prepare a meeting brief from this matter’s approved documents, identify open tasks and draft a follow-up for review” is more useful than a generic demo.</p>
    <div className="article-table-wrap"><table><thead><tr><th>Evaluation area</th><th>What good evidence looks like</th></tr></thead><tbody>
      <tr><td>Workflow fit</td><td>Clear input, useful output, owner and reason the task matters.</td></tr>
      <tr><td>Information boundary</td><td>Documented sources, user and matter permissions, and content/metadata separation.</td></tr>
      <tr><td>Action boundary</td><td>Actions the agent may prepare, change, send or never perform.</td></tr>
      <tr><td>Grounding and review</td><td>Visible sources, uncertainty and a reviewer who can correct the result.</td></tr>
      <tr><td>Data and contract</td><td>Processing locations, retention, logs, subprocessors, deletion, export and model policy.</td></tr>
      <tr><td>Operations</td><td>An owner for access reviews, incidents, support and ongoing evaluation.</td></tr>
    </tbody></table></div>
    <p>Ask what happens when a user lacks permission, documents conflict, a source is unavailable or an action is outside scope. The failure path is part of the product.</p>

    <h2>What are the red flags?</h2>
    <ul>
      <li><strong>Autonomy without an action matrix.</strong> If a vendor cannot say what the system may read, prepare, change or send, the word “agent” is doing too much work.</li>
      <li><strong>“No training” as the complete privacy answer.</strong> Retention, abuse monitoring, application state, backups, support access and connected tools are separate questions.</li>
      <li><strong>Permissions treated as a checkbox.</strong> A firm needs matter, team, client, ethical-wall and departing-user scenarios tested in the actual workflow.</li>
      <li><strong>Demo evidence only.</strong> Ask for a controlled evaluation using representative, synthetic, redacted or approved material and record the misses, not just the successes.</li>
      <li><strong>No operating owner.</strong> Integrations, prompts, models and policies change. A firm needs a plan for monitoring, re-testing, incident response and rollback.</li>
      <li><strong>Unverifiable confidence.</strong> A fluent answer, citation or case summary is not reliable merely because it sounds professional.</li>
    </ul>

    <h2>How can a firm run a responsible first pilot?</h2>
    <p>Use a narrow, reversible workflow. Start with public, synthetic, carefully redacted or already-approved information. Keep external sending, filing, advice and other consequential actions disabled or approval-gated. Define success in advance: source coverage, accuracy, omissions, permission behaviour, reviewer effort, escalation and auditability.</p>
    <p>NIST’s AI Risk Management Framework is voluntary, but its structure is useful: <strong>Govern</strong> roles and policy, <strong>Map</strong> the workflow and risks, <strong>Measure</strong> performance and failure modes, then <strong>Manage</strong> the remaining risks over time. It is not a legal compliance certificate or a replacement for local professional guidance. <a href="https://www.nist.gov/itl/ai-risk-management-framework" target="_blank" rel="noreferrer">See the NIST AI Risk Management Framework</a>.</p>
    <p>Set a stop condition. If the pilot cannot show what was in scope, what the system used, who could access it, what it retained or where it failed, do not expand it yet.</p>

    <h2>What changes for firms operating across jurisdictions?</h2>
    <p>Professional conduct rules, privacy law, data-transfer requirements, client mandates, court procedures and records obligations differ across jurisdictions. A global firm may need one baseline governance model plus local decisions about residency, providers, confidentiality, supervision and disclosure. Availability in a country is not evidence that a product is appropriate for every matter there.</p>
    <p>Ask who owns the decision in each jurisdiction, which information can cross a border, and whether a client or regulator imposes stricter conditions. This is a procurement guide, not legal advice.</p>

    <h2>So, which AI agent is best?</h2>
    <p>Choose the category that matches the first workflow: Microsoft 365 Copilot for Microsoft-centred productivity; a legal AI platform for specialist research and drafting; a general enterprise assistant for broad, lower-risk work or custom development; a firm-specific private assistant for cross-system, approval-driven work; or an internal build if the firm is ready to own the technical burden.</p>
    <p>The strongest shortlist is not a leaderboard. It is a set of plausible fits tested against the same work, information boundary and review standard. To compare that first workflow with Nella’s firm-specific private operating model, <a href="/consultation">book a private consultation</a>.</p>

    <h2>Frequently asked questions</h2>
    <h3>Are AI agents safe for law firms?</h3>
    <p>They can support defined work responsibly, but safety depends on deployment, information, permissions, provider terms, workflow and human oversight.</p>
    <h3>Is the most autonomous agent the best one?</h3>
    <p>No. More autonomy can increase usefulness and the consequences of a mistake. Choose the level the firm can observe, review and govern.</p>
    <h3>Should a firm use one AI product for everything?</h3>
    <p>Not necessarily. Define which tool is approved for which information and workflow, and how work moves between them.</p>
    <h3>What should a small firm do first?</h3>
    <p>Choose one recurring workflow, use low-risk or approved information, require review, document the data path and measure failures before expanding.</p>
  </>,

  "best-ai-tools-for-small-law-firms": <>
    <p>The best AI tool for a small law firm is usually the one that fits the systems the firm already uses, solves one defined workflow problem and does not create a second administrative job.</p>
    <p>That means there is no universal ranking. A Microsoft-centred firm may choose differently from a firm built around Google Workspace, Clio or MyCase. The right choice depends on the firm’s information, practice area, risk appetite, budget, training capacity and ability to review the output.</p>

    <h2>What are the best AI tools for small law firms?</h2>
    <p>A practical shortlist includes suite-native assistants, flexible enterprise AI workspaces, legal-practice tools embedded in a matter system and a firm-specific managed operating layer. Treat this as a set of categories to evaluate, not a leaderboard:</p>
    <ol>
      <li><strong>Microsoft 365 Copilot</strong> for firms working mainly in Word, Outlook, Teams and SharePoint.</li>
      <li><strong>Gemini for Google Workspace</strong> for firms built around Gmail, Drive, Docs and Meet.</li>
      <li><strong>ChatGPT Business or Enterprise</strong> for flexible internal drafting, analysis and research preparation.</li>
      <li><strong>Clio AI or Clio Work</strong> for firms already using Clio as their operational centre.</li>
      <li><strong>MyCase 8am IQ</strong> for firms already using MyCase and wanting assistance close to the case record.</li>
      <li><strong>A firm-specific private AI operating layer</strong> when the need extends across systems, permissions and repeatable workflows.</li>
    </ol>
    <p>Product availability, licensing, features, data processing and regional terms change. Verify the current position for the plan and country you would actually buy.</p>

    <h2>Which tool fits the firm’s existing work environment?</h2>
    <p>Suite-native AI is often the easiest place to begin because users already know the applications and administrators already manage the accounts. Microsoft says Microsoft 365 Copilot uses Microsoft Graph and only surfaces organisational information a user has permission to access. Google’s Workspace guidance likewise describes administrator and content-owner controls for what Gemini can access.</p>
    <p>Those permissions are important, but neither assistant cleans up an over-shared SharePoint site, a badly organised Drive or an unclear retention policy. Existing information governance becomes part of the AI decision.</p>
    <div className="article-table-wrap"><table><thead><tr><th>Starting point</th><th>Good fit for</th><th>Watch closely</th></tr></thead><tbody>
      <tr><td>Microsoft 365 Copilot</td><td>Drafting, summaries and meeting support inside Microsoft apps.</td><td>Tenant permissions, agents, connectors, licensing and stored interactions.</td></tr>
      <tr><td>Gemini for Workspace</td><td>Firms centred on Gmail, Drive, Docs and Meet.</td><td>Workspace access rules, connected apps and regional product terms.</td></tr>
      <tr><td>ChatGPT Business or Enterprise</td><td>Flexible internal drafting and structured analysis.</td><td>Workspace policy, retention, account ownership and matter boundaries.</td></tr>
      <tr><td>Legal-practice AI</td><td>Assistance close to the firm’s case or matter system.</td><td>Plan scope, permissions, source quality, auditability and platform dependency.</td></tr>
      <tr><td>Private operating layer</td><td>Cross-system workflows and firm-specific governance.</td><td>Discovery, configuration, support, evaluation and exit responsibilities.</td></tr>
    </tbody></table></div>

    <h2>What should a small firm use AI for first?</h2>
    <p>Choose a recurring task with a clear input, a visible source set, a reviewable output and a named owner. Good first candidates include an internal meeting brief, a summary of a long email thread, a first-pass task list, public research organisation or a draft based on an approved template.</p>
    <p>Be careful with tasks where a missed detail immediately changes a client position, court deadline, filing, payment or external communication. Those may still be assisted, but the system needs stronger source grounding, review and approval controls.</p>

    <h2>How much operating burden does each option create?</h2>
    <p>The subscription is only one part of the cost. A small firm should also consider administrator time, data clean-up, integration work, staff training, prompt and template maintenance, vendor reviews, output checking, support, offboarding and access reviews.</p>
    <p>A tool becomes expensive in practice when it adds extra logins, duplicate filing, manual copying between systems, a new approval process and a dashboard someone must remember to check. The right product should make the next action clearer, not merely produce another answer that someone must process.</p>

    <h2>What privacy questions should a small firm ask?</h2>
    <p>Privacy should be assessed against the actual deployment, not the product name. Before using client or matter information, ask:</p>
    <ul>
      <li>What information can the tool access?</li>
      <li>Can access be limited by user, role, team, matter or client?</li>
      <li>Where is information processed, stored, indexed and backed up?</li>
      <li>Are prompts, files, outputs, logs or indexes retained?</li>
      <li>Is firm data used to train or improve a shared model?</li>
      <li>Which subprocessors and connected applications are involved?</li>
      <li>Can the firm export and delete its information?</li>
      <li>What happens when a user leaves or an incident occurs?</li>
      <li>What human approval is required before anything is sent, filed or changed?</li>
    </ul>
    <p>The ABA’s Formal Opinion 512 is a useful example of professional guidance addressing competence, confidentiality, supervision, communication, candour to tribunals and fees. It is US guidance, not a global rulebook. Consider the relevant professional body, privacy regime, court rules, client mandates and practice-area requirements for the firm’s own jurisdictions.</p>

    <h2>How can a small firm avoid buying another dashboard?</h2>
    <p>Start with the work, not the tool. Write down what starts the process, which systems are involved, who is allowed to see the information, what the AI may prepare, what must remain human-approved, where the finished result should live and how you will know the process is working.</p>
    <p>If the answer requires people to move constantly between several systems, the firm may be buying another dashboard rather than improving its operating model. A useful assistant should fit into approved channels such as email, documents, calendars, practice-management software and team messaging where possible.</p>

    <h2>What should a 30-day pilot look like?</h2>
    <div className="article-table-wrap"><table><thead><tr><th>Period</th><th>Work</th></tr></thead><tbody>
      <tr><td>Days 1–5</td><td>Choose one workflow; define permitted and prohibited data, users, review points and success criteria.</td></tr>
      <tr><td>Days 6–10</td><td>Configure accounts, permissions, retention settings, templates and approved instructions.</td></tr>
      <tr><td>Days 11–20</td><td>Test realistic but controlled examples for accuracy, omissions, sources, permissions and reviewer effort.</td></tr>
      <tr><td>Days 21–30</td><td>Record what improved and failed; decide whether to stop, adjust, expand or assess another category.</td></tr>
    </tbody></table></div>
    <p>NIST’s voluntary AI Risk Management Framework gives small teams a useful structure: govern roles and policy, map the workflow and risks, measure performance and failure modes, then manage the remaining risks over time.</p>

    <h2>When should a small firm consider Nella?</h2>
    <p>A firm-specific private operating layer becomes worth considering when the question is no longer “Which chatbot should we use?” but “How should support work across our firm?” That may include approved internal knowledge, matter-aware permissions, repeatable workflows, several systems and handoffs, human approval points, source requirements and ongoing monitoring.</p>
    <p>Nella is designed for that gap: a private, managed support system built around a firm’s people, documents, systems and way of working. <a href="/consultation">Book a private consultation</a> to map one workflow and decide whether a firm-specific approach is justified.</p>

    <h2>Frequently asked questions</h2>
    <h3>Do small firms need a dedicated AI platform?</h3><p>Not always. A suite-native assistant may be enough for drafting, summarising and meeting support. A dedicated platform becomes more relevant when the firm needs matter-aware workflows, internal knowledge retrieval or cross-system coordination.</p>
    <h3>Should a small firm choose legal-specific AI?</h3><p>Legal-specific tools may provide better workflow context, but they still require due diligence on permissions, data processing, retention, auditability, accuracy and regional availability.</p>
    <h3>Does a small firm need an IT department?</h3><p>No, but someone must own the decisions. A partner, operations lead or trusted technology adviser should be responsible for approved use cases, access, training, review and vendor management.</p>
    <h3>What is the safest first purchase?</h3><p>Usually the tool that fits the firm’s existing environment and supports one bounded workflow without requiring a large transformation programme. Start small, document the boundary and expand only when the evidence supports it.</p>
  </>,

  "ai-agents-vs-ai-assistants-for-law-firms": <>
    <p>An AI assistant usually responds to a person’s request. An AI agent can pursue a defined objective through several steps, using approved tools and making bounded decisions along the way.</p>
    <p>That does not mean an agent is an autonomous lawyer. It means the system has more responsibility for managing a workflow. The terms are not used consistently across the technology industry, so assess what the system can read, decide, change and send rather than trusting the label.</p>

    <h2>What is an AI assistant?</h2>
    <p>An AI assistant is a user-led system that helps with a task when someone asks it to do so. It may answer questions, summarise documents, draft emails, search approved information or suggest next steps. The person generally supplies the context and decides what happens next.</p>
    <p>Typical assistant tasks include summarising an email thread, turning meeting notes into an action list, comparing contract versions, finding passages in approved documents, drafting a client update for review and preparing questions for a matter meeting.</p>

    <h2>What is an AI agent?</h2>
    <p>An AI agent manages a defined objective through multiple steps. OpenAI’s agent guidance describes systems that manage workflow execution, make decisions, recognise when work is complete or unsuccessful, and interact with external systems through tools.</p>
    <p>An agent might interpret an objective, decide which steps are needed, retrieve information, use approved tools, assess the result and continue, stop or escalate. For example, it could prepare a weekly matter-status pack from a selected matter system and document set, then put the result in a review queue.</p>
    <p>“Agent” does not mean unlimited autonomy. An agent can be restricted by user permissions, matter boundaries, tool access, approval gates, time limits, spending limits and mandatory escalation.</p>

    <h2>What is the practical difference?</h2>
    <div className="article-table-wrap"><table><thead><tr><th>Dimension</th><th>AI assistant</th><th>AI agent</th></tr></thead><tbody>
      <tr><td>Initiation</td><td>Usually prompted directly by a user.</td><td>User-triggered, scheduled or event-triggered.</td></tr>
      <tr><td>Autonomy</td><td>Produces a response, draft or recommendation.</td><td>Plans and sequences steps toward an objective.</td></tr>
      <tr><td>Tools</td><td>May retrieve information or prepare an action.</td><td>May retrieve, update, create or send through approved tools.</td></tr>
      <tr><td>Review</td><td>Human reviews the response or draft.</td><td>Human may review plans, checkpoints, exceptions or final action.</td></tr>
      <tr><td>Failure modes</td><td>Incorrect, incomplete or poorly grounded output.</td><td>Those risks plus wrong tool choice, excessive action, looping or permission misuse.</td></tr>
      <tr><td>Best fit</td><td>One-off or user-directed work.</td><td>Repeatable multi-step workflows with clear boundaries.</td></tr>
    </tbody></table></div>
    <p>The boundary is a spectrum. A well-designed assistant may have agent-like behaviour. A tightly controlled agent may feel like an assistant for most tasks.</p>

    <h2>Why do permissions matter more than the label?</h2>
    <p>An AI system cannot retrieve a matter file, send an email or update a practice-management record unless it has a way to do so. A tool that retrieves a document creates a different risk from one that can send external mail, delete records or change a client-facing system.</p>
    <p>Assess each tool separately:</p>
    <ul><li>Is it read-only or write-enabled?</li><li>Does it operate at firm, team, matter or user level?</li><li>Can it access privileged or restricted information?</li><li>Is the action reversible?</li><li>Does it require a second approval?</li><li>Is the action recorded in an audit trail?</li><li>Can the permission be withdrawn quickly?</li></ul>
    <p>The same assistant can be low-risk in one configuration and high-risk in another. Drafting an email is different from sending it. Searching a public knowledge base is different from searching every matter folder.</p>

    <h2>How might they work across legal tasks?</h2>
    <h3>Inbox and email</h3><p>An assistant can summarise a thread and draft a response. An agent could classify incoming messages, retrieve relevant matter information, draft a response and route it for approval. A sensible boundary is: assistant summarises and drafts; agent classifies, gathers and prepares; human approves, amends and sends.</p>
    <h3>Meetings</h3><p>An assistant can summarise a transcript and list decisions. An agent could prepare a meeting brief from approved calendars, previous minutes and selected matter documents, then draft follow-up tasks. The firm should define who can see the transcript and whether sensitive discussions are excluded.</p>
    <h3>Documents</h3><p>An assistant can explain a document or compare clauses. An agent could receive documents through controlled intake, identify missing information, select an approved template and prepare a draft. It should not decide that the document is legally sufficient or file it as final.</p>
    <h3>External actions</h3><p>Sending email, filing a form, changing a deadline, updating a client record or contacting a court or regulator requires the strongest controls. Technical capability is not approval. Use human gates for client-facing, irreversible, financially significant or legally consequential actions.</p>

    <h2>When is an assistant the better choice?</h2>
    <p>An assistant is often the better starting point when work is one-off, easy to review, based on a small amount of context, low-risk if delayed, primarily drafting or summarising, and not dependent on several integrations. It lets a firm learn which use cases are valuable before granting broad permissions.</p>

    <h2>When should a firm consider an agent?</h2>
    <p>An agent may be appropriate when a workflow is repeated regularly, structured enough to define success, dependent on several approved systems, time-based or event-triggered, slowed by routine handoffs and suitable for clear approval and escalation rules.</p>
    <p>Before building one, document its inputs, sources, allowed tools, prohibited actions, stopping conditions, review points and failure response. NIST’s voluntary AI Risk Management Framework is useful for structuring those responsibilities, even though it is not legal advice or a compliance certificate.</p>

    <h2>How does Nella fit?</h2>
    <p>Nella is best understood as governed, firm-specific assistance: a private operating layer shaped around approved information, permissions, workflows, review points and provider policies. Some workflows may include agentic steps, such as gathering information or preparing a recurring work package. That does not require unlimited autonomy.</p>
    <p>The useful design question is what Nella may read, prepare, change, send or never do—and where a professional must remain involved. <a href="/consultation">Book a private consultation</a> to map one real workflow and define a proportionate first deployment.</p>

    <h2>Frequently asked questions</h2>
    <h3>Are AI agents safe for law firms?</h3><p>They can be designed for controlled use, but safety depends on the data, permissions, tools, workflow, review process and operating environment. No label guarantees safety or compliance.</p>
    <h3>Is the most autonomous agent the best one?</h3><p>No. More autonomy can increase usefulness and the consequences of a mistake. The right level is the one the firm can observe, review and govern.</p>
    <h3>Should an agent be allowed to send emails?</h3><p>Only where the firm has assessed the use case, approved the permission and defined suitable controls. Client-facing or consequential messages should generally include human review.</p>
    <h3>Can an assistant or agent replace a lawyer?</h3><p>No. These systems can support defined work, but the responsible professional remains accountable for decisions, advice, accuracy, review and communication.</p>
  </>,

  "europa-legal-commons-ai-and-law-firms": <>
    <p>Europa Legal Commons started from a simple premise: legal AI should not begin with a blank chat window and a confident tone. It should begin with a defined corpus, visible scope, source material, versioning and a clear account of what the system does not know.</p>
    <p>The project is a public, versioned corpus of starting documents for EU/EEA B2B software companies. It is designed to help a founder orient a draft, help counsel review a clause, and help product or operations teams understand what needs to be agreed. It is not a substitute for legal advice and it does not pretend that a template can remove context.</p>

    <h2>What is Europa Legal Commons?</h2>
    <p>Europa Legal Commons packages practical legal starting points for European software teams. The project currently presents 21 packages in Markdown and DOCX, with no signup and a CC0 1.0 licence. The visible template set includes a Mutual NDA, Data Processing Agreement, B2B SaaS Agreement, Order Form, Privacy Notice and Acceptable Use Policy.</p>
    <p>That format matters. A document is easier to inspect when its scope, version and intended use are visible. A Markdown source is also easier to search, compare, adapt and pass into a controlled toolchain than an opaque document that only appears after a form submission.</p>

    <h2>Why make the corpus useful to agents?</h2>
    <p>People are not the only users of legal material anymore. A model may need to find a clause, identify the governing scope, compare a package version or explain what information is missing before it can help someone responsibly.</p>
    <p>Europa Legal Commons treats the corpus as something that should be useful to people and to the tools they use. Its project interface describes machine-readable metadata, clause maps, package scopes, primary-source identifiers and an agent guide that explains what not to invent. It also exposes a lightweight agent and MCP direction rather than hiding the material inside a black-box chat experience.</p>
    <p>The lesson is not that metadata makes legal work automatic. The lesson is that structure makes review possible. When a model can see which document it is using, what the package covers and which assumptions remain open, a professional has a better starting point for correction.</p>

    <h2>What does “source-traceable” mean in practice?</h2>
    <p>Source-traceable does not mean that every clause is universally correct. It means the person reviewing the draft can follow the material back to a package, version, source identifier or stated scope. That is a modest but important standard.</p>
    <div className="article-table-wrap"><table><thead><tr><th>Without structure</th><th>With a structured corpus</th></tr></thead><tbody>
      <tr><td>“Draft a GDPR-compliant DPA.”</td><td>“Start from this DPA package, read its scope, identify the parties, processing details and open choices, then produce a marked-up draft.”</td></tr>
      <tr><td>“Make this clause market standard.”</td><td>“Show the clause, the package version, the source note and the assumptions that still need a commercial decision.”</td></tr>
      <tr><td>“Use the law for Europe.”</td><td>“Identify the relevant EU/EEA context, the governing country, the service model and the local review needed.”</td></tr>
    </tbody></table></div>
    <p>This pattern is useful well beyond startup contracts. A law firm building a private assistant needs the same properties around its own precedents, matter guidance, policies and approved knowledge: defined sources, version control, access boundaries and a way to show the basis for a result.</p>

    <h2>What did the project teach us about legal AI?</h2>
    <h3>Scope beats confidence</h3><p>The first job of a legal system is to say what a package is for. A Mutual NDA, a DPA and an Acceptable Use Policy answer different questions. A general answer that blends them may sound helpful while creating more work for the reviewer.</p>
    <h3>Versioning is part of trust</h3><p>A document that changes without a visible version is difficult to review and difficult to discuss with a client or colleague. Keeping the version beside an adapted draft gives the team a simple reference point when a clause changes.</p>
    <h3>Agents need boundaries too</h3><p>The project’s agent-facing materials make an important distinction: retrieval, inspection and adaptation are different from invention. A tool should be able to say that a source is missing, a jurisdiction is unclear or a professional must decide.</p>
    <h3>Accessible source files widen the review circle</h3><p>Markdown and DOCX let founders, operators, counsel and technical teams inspect the same starting material in the tools they already use. That does not replace legal review; it makes the handoff into legal review clearer.</p>

    <h2>How is this relevant to Nella?</h2>
    <p>Europa Legal Commons is not proof that Nella has already run a large law-firm deployment. It is legal-domain experience: a hands-on exploration of European legal context, structured material, source grounding and the limits of automated drafting.</p>
    <p>Nella takes the same discipline into a different setting. A law firm’s private assistant should be shaped around the firm’s approved documents, matter permissions, internal terminology, systems, review points and provider policy. It should help a professional find and prepare work without pretending that a general model has become the responsible lawyer.</p>
    <p>That is why Nella’s first question should be practical: what recurring piece of work needs better preparation, and what evidence would let the firm review the result? <a href="/about">Read more about the experience behind Nella</a> or <a href="/consultation">book a private consultation</a> to map one workflow.</p>

    <h2>What Europa Legal Commons is not</h2>
    <ul><li>It is not a global legal advice service.</li><li>It is not a guarantee that a template fits a particular company or transaction.</li><li>It is not a replacement for qualified professional review.</li><li>It is not evidence that an AI system can act without supervision.</li><li>It is not an excuse to hide uncertainty behind a polished interface.</li></ul>

    <h2>Frequently asked questions</h2>
    <h3>Who is Europa Legal Commons for?</h3><p>It is aimed at EU/EEA B2B software founders, in-house counsel, startup lawyers, product teams and operations teams that need a clearer starting point for common commercial documents.</p>
    <h3>Can I sign one of the documents as-is?</h3><p>No. The project presents starting documents. Read the scope, adapt the material to the actual facts and have a qualified professional review anything you plan to sign.</p>
    <h3>Why does this matter for law-firm AI?</h3><p>Because a firm-specific assistant also needs structured sources, versioning, access boundaries, reviewable outputs and an explicit way to handle missing or conflicting information.</p>
    <h3>Is Europa Legal Commons the same product as Nella?</h3><p>No. Europa Legal Commons is a public legal corpus for software teams. Nella is a private, firm-specific support system for law firms. The connection is the discipline around sources, boundaries and review.</p>

    <p><strong>Author/review note:</strong> This article is based on the Europa Legal Commons project in the Nella workspace and was written on 27 August 2026. It describes the project’s stated purpose and visible materials; packages and counts may change. It is general technology information, not legal advice.</p>
  </>,

  "introducing-nella": <>
    <p>Nella is a private support system for law firms. It is not a generic AI subscription, a chatbot dressed up as a lawyer, or a single model that every firm is expected to use in the same way.</p>
    <p>Nella starts with a shared foundation: the core operating patterns, controls and implementation discipline needed to support work around lawyers. That foundation is then configured for each firm’s people, systems, permissions, terminology, documents, workflows and appetite for automation.</p>
    <p>The result is a system that can feel familiar to the people using it while remaining explicit about what it may read, prepare, change, send or never do. Nella’s team stays involved in the deployment and provides human support seven days a week, because a serious system needs somewhere to take a question when the workflow, the evidence or the boundary is unclear.</p>

    <h2>What is Nella, exactly?</h2>
    <p>Nella is the company and operating partner behind a firm-specific private assistant system. The assistant is the experience people encounter in the channels the firm already approves. The system is the larger thing: identity, access, retrieval, workflow logic, model policy, integrations, approvals, logs, evaluation, support and the processes used to improve it.</p>
    <p>That distinction matters. A polished conversation is only one surface. The useful work happens when the system can bring together the right context, respect permissions, prepare something reviewable and leave a trace of what happened.</p>

    <h2>A shared base, customised per firm</h2>
    <p>Every firm has its own way of working. Matter types, precedent language, intake habits, naming conventions, document systems, calendars, approval chains and client expectations are not interchangeable. Nella therefore uses a common base without treating the base as the finished product.</p>
    <div className="article-table-wrap"><table><thead><tr><th>Shared foundation</th><th>Firm-specific configuration</th></tr></thead><tbody>
      <tr><td>Private support-system architecture</td><td>Deployment environment, region and operational responsibilities</td></tr>
      <tr><td>Permission and approval patterns</td><td>Roles, matter boundaries, ethical walls and allowed actions</td></tr>
      <tr><td>Workflow and evaluation methods</td><td>The firm’s first use cases, success measures and review examples</td></tr>
      <tr><td>Provider and model policy controls</td><td>Approved routes for each data class, workflow or matter</td></tr>
      <tr><td>Human operating support</td><td>Named people, escalation paths and the cadence of improvement</td></tr>
    </tbody></table></div>

    <h2>Where can Nella help?</h2>
    <p>Nella is designed around the work that surrounds professional judgement. Depending on the agreed scope and integrations, that can include:</p>
    <ul>
      <li><strong>Your day:</strong> preparing briefings, diary context, reminders and follow-ups.</li>
      <li><strong>Your inbox:</strong> summarising threads, identifying matters, drafting routine correspondence and surfacing next tasks.</li>
      <li><strong>Your matters:</strong> retrieving approved material, assembling chronologies, checking status and preparing matter briefs.</li>
      <li><strong>Your documents:</strong> working from approved templates, comparing versions, extracting detail and preparing drafts for review.</li>
      <li><strong>Your meetings:</strong> preparing context, turning dictated notes into attendance notes and organising follow-up actions.</li>
      <li><strong>Your research:</strong> assembling sourced packs and structured findings for a responsible professional to assess.</li>
    </ul>
    <p>These are workflow shapes, not a promise that every integration or feature is live for every firm. The first deployment should identify one useful, representative workflow and make its boundaries testable.</p>

    <h2>What does the first deployment look like?</h2>
    <ol>
      <li><strong>Understand the firm.</strong> We map the people, matter types, systems, documents, safeguards and friction points that shape the work.</li>
      <li><strong>Connect approved systems.</strong> We connect only the channels, repositories and practice systems needed for the first use case.</li>
      <li><strong>Configure the boundaries.</strong> We define permissions, terminology, templates, provider policy, approvals and disabled actions.</li>
      <li><strong>Test representative work.</strong> We test the experience against realistic examples, edge cases, missing information and permission boundaries.</li>
      <li><strong>Roll out with review.</strong> People learn where Nella helps, where it pauses and how to correct or escalate a result.</li>
      <li><strong>Measure and improve.</strong> The system is monitored, evaluated and adjusted as the firm’s work changes.</li>
    </ol>
    <p>This is a managed implementation rather than a self-serve sign-up. The firm remains involved in deciding what is appropriate; Nella remains involved in making the system work in practice.</p>

    <h2>How much autonomy does Nella have?</h2>
    <p>Autonomy is configured per action, not granted as a personality trait. Finding an authorised document and preparing a meeting brief may be automatic. Creating an internal task may be configurable. Drafting an external email may be reviewable. Sending an external message requires an authorised person’s approval. Filing, transferring funds or taking other consequential actions stay outside the boundary.</p>
    <p>Nella supports the work around professional judgement. It does not provide unreviewed legal advice, replace the responsible professional or turn a model response into a decision.</p>

    <h2>Why human support seven days a week?</h2>
    <p>AI systems do not fail only in dramatic ways. More often, a document is missing, a permission is surprising, a workflow has changed, a user is unsure whether a result is safe to rely on, or the firm has a new requirement that was not part of the original configuration.</p>
    <p>Human support gives the firm a practical route through those moments. It can help distinguish a user question from a system issue, capture an edge case for evaluation, clarify an approval path, and decide whether a workflow should be changed, paused or escalated. Seven-day support is part of the service model Nella is presenting; response times, coverage and escalation terms should be set out in the firm’s written scope.</p>

    <h2>Where does Nella run?</h2>
    <p>Nella can be discussed through three deployment patterns: a Nella-managed private environment, a customer-controlled cloud deployment, or a local or sovereign deployment where the infrastructure and support model make sense. The choice is not a badge. It changes capability, residency, latency, cost, provider policy, maintenance and who is responsible for operations.</p>
    <p>The deployment record should name the environment, processing locations, storage, search index, logs, backups, support access, model routes and retention settings. If the answer varies by workflow or data class, that variation should be visible.</p>

    <h2>What Nella is not</h2>
    <ul>
      <li>Not an AI lawyer or a provider of legal advice.</li>
      <li>Not a promise that every firm can use every model, integration or deployment pattern.</li>
      <li>Not a replacement for the firm’s professional responsibility, supervision or information governance.</li>
      <li>Not a black box that should be trusted because the interface sounds confident.</li>
      <li>Not a reason to give an agent unrestricted access to every matter.</li>
    </ul>

    <h2>Where should a firm start?</h2>
    <p>Bring one recurring workflow where the input is clear, the source set is knowable, the output can be reviewed and the result would matter to the team. Nella can then help you work through the evidence, deployment, model policy, approvals and support model before a wider rollout.</p>
    <p><a href="/how-it-works">See the implementation approach</a>, explore <a href="/privacy-and-deployment">privacy and deployment</a>, or <a href="/consultation">book a private consultation</a> to introduce Nella to your firm’s actual context.</p>

    <p><strong>Author/review note:</strong> Written for Nella on 27 August 2026 from the current product and website planning documents. “Seven days a week” describes the intended service model; coverage, response times and exclusions should be confirmed contractually.</p>
  </>,

  "how-nella-works-under-the-hood": <>
    <p>A private AI assistant for a law firm is not just a model behind a chat box. It is a chain of decisions: authenticate the person, establish the matter and policy context, retrieve only authorised information, select an appropriate model route, prepare an output, apply checks, request approval where needed, record the trace and make the result available to the team.</p>
    <p>This article explains the architecture Nella is designed around. It is a product and engineering model, not a claim that every component is already deployed in every firm. The deployment record should be the source of truth for a particular environment.</p>

    <h2>The system boundary</h2>
    <p>At the edge, Nella can meet a user in an approved channel such as email, Microsoft Teams, a practice system or a small administration workspace. The user’s message is not sent directly to a model. It enters an orchestration layer that identifies the user, tenant, matter, workflow and requested action.</p>
    <p>That orchestration layer is where policy becomes executable. It can decide whether the request is in scope, which sources may be searched, which tools are available, which provider route is allowed, what must be logged and whether a human approval is required before anything consequential happens.</p>
    <div className="article-table-wrap"><table><thead><tr><th>Layer</th><th>Responsibility</th><th>Failure to prevent</th></tr></thead><tbody>
      <tr><td>Identity and tenant</td><td>Establish who is asking and which firm environment applies.</td><td>Cross-firm or unauthorised access.</td></tr>
      <tr><td>Matter and policy context</td><td>Apply role, matter, team, ethical-wall and data-class rules.</td><td>Retrieving information the user should not see.</td></tr>
      <tr><td>Retrieval</td><td>Find relevant, permitted source material and preserve provenance.</td><td>Confident work built on the wrong or incomplete context.</td></tr>
      <tr><td>Model gateway</td><td>Choose an approved model/provider route for the task and data.</td><td>Sending sensitive content through an unapproved route.</td></tr>
      <tr><td>Action broker</td><td>Separate preparation from changing or sending something.</td><td>Unreviewed external or irreversible action.</td></tr>
      <tr><td>Audit and operations</td><td>Record the trace, monitor quality and support correction.</td><td>Failures that cannot be explained or improved.</td></tr>
    </tbody></table></div>

    <h2>Memory is not one thing</h2>
    <p>When people ask whether Nella has memory, they may be asking about several different mechanisms. Treating them as one feature makes both the product and the privacy conversation blurry.</p>
    <ul>
      <li><strong>Conversation state:</strong> the turns, files and tool results needed to continue one interaction.</li>
      <li><strong>Working context:</strong> the matter, user, task and approved source set needed for the current workflow.</li>
      <li><strong>Firm knowledge:</strong> approved templates, terminology, policies, precedents and process guidance that should be versioned and permissioned.</li>
      <li><strong>Operational state:</strong> tasks, approvals, workflow status, connector cursors, evaluation results and change records.</li>
      <li><strong>User or team preferences:</strong> small, deliberate settings such as a preferred briefing format—not a hidden archive of everything a person has ever said.</li>
    </ul>
    <p>Each category deserves a different retention period, access rule, deletion path and explanation. A conversation transcript may be useful for a short time; a firm template needs version control; an approval record may need to be retained under the firm’s policy; a preference should be easy to inspect and change.</p>

    <h2>Persistence: what survives the request?</h2>
    <p>Persistence means deciding what state is written to durable storage after a request completes. A robust design makes that write explicit. It does not quietly treat the model’s context window as a database.</p>
    <p>A useful persistence record can include the request identifier, user and matter scope, source identifiers, policy version, model route, tool calls, approval events, output location, evaluation result and deletion class. The actual content retained should be minimised to what the firm needs to operate, review or evidence the workflow.</p>
    <p>Search indexes and caches are part of this conversation. If a document is removed or a user loses access, the design needs a path for the source copy, extracted text, embeddings, index entries, cached results, logs and backups to follow the firm’s retention and deletion rules. “Deleted from the document folder” is not automatically the same as “deleted everywhere the system may have processed it.”</p>

    <h2>Retrieval before reasoning</h2>
    <p>For firm-specific work, the model should usually receive a small, relevant and authorised context rather than an entire document library. Retrieval first filters by tenant, user, role, matter and policy, then ranks the remaining material for the workflow.</p>
    <p>Every retrieved item should carry enough provenance for the reviewer to understand the basis of the output: document name, version or date, source location and the relevant excerpt where appropriate. If the source set is incomplete or conflicting, the system should say so and ask for clarification or escalate.</p>
    <p>This is also where persistence and memory meet. The system can remember that an approval is pending without remembering every private sentence in the conversation. It can retrieve an approved precedent by version without making the whole precedent library available to every user.</p>

    <h2>Model routing: use a gateway, not a guess</h2>
    <p>Model routing is the policy-controlled decision about which model or provider handles a task. The gateway should consider data class, matter restrictions, workflow risk, tool access, region, latency, quality requirements, cost and provider terms.</p>
    <p>A simple routing policy might look like this:</p>
    <div className="article-table-wrap"><table><thead><tr><th>Workload</th><th>Possible route</th><th>Control</th></tr></thead><tbody>
      <tr><td>Public or low-risk classification</td><td>Fast, lower-cost approved model</td><td>Strict output schema and no client data.</td></tr>
      <tr><td>Internal summarisation</td><td>Approved enterprise route</td><td>Tenant permissions, retention and source checks.</td></tr>
      <tr><td>Matter-aware preparation</td><td>Higher-capability approved route or selected local model</td><td>Restricted context, provenance and human review.</td></tr>
      <tr><td>External action</td><td>Model prepares; deterministic action broker executes</td><td>Explicit approval, recipient check and audit event.</td></tr>
      <tr><td>Unsupported or ambiguous request</td><td>No model call, or human escalation</td><td>Fail closed and explain what is missing.</td></tr>
    </tbody></table></div>
    <p>Routing is not only about finding the cheapest model. A cheaper route that produces more rework, misses sources or requires repeated retries may cost more in total. The gateway should measure quality and operational cost together.</p>

    <h2>Cost mitigation without lowering the bar</h2>
    <p>Cost control starts before model selection. First define the workflow outcome, then remove unnecessary work from the path.</p>
    <ol>
      <li><strong>Retrieve narrowly.</strong> Send the relevant authorised passages rather than an entire repository or unbounded conversation history.</li>
      <li><strong>Use deterministic software where it is better.</strong> Permissions, routing, schemas, redaction, deduplication, validation and approval state should not be delegated to a model when ordinary code can make the decision.</li>
      <li><strong>Match model capability to task risk.</strong> Use a fast route for classification or formatting and reserve more capable reasoning for work that benefits from it.</li>
      <li><strong>Keep outputs bounded.</strong> Clear formats, stop conditions and maximum lengths reduce cost and make review easier.</li>
      <li><strong>Cache stable prefixes carefully.</strong> Reusable instructions, tool definitions and firm policy context can reduce repeated processing when the provider supports prompt caching. The cache policy must still be considered part of data retention and provider review.</li>
      <li><strong>Batch non-urgent work.</strong> Scheduled summaries, index refreshes and evaluation runs may be cheaper or easier to smooth when they are not on the interactive path.</li>
      <li><strong>Set budgets and stop conditions.</strong> Put limits on retries, tool calls, tokens, concurrency and spend by tenant or workflow.</li>
      <li><strong>Measure rework.</strong> Track correction time, failed retrievals, escalations and repeated requests alongside token and infrastructure spend.</li>
    </ol>
    <p>Cost mitigation is successful only when the firm still gets a useful, reviewable result. A low invoice is not a saving if the team spends the difference checking bad drafts or repairing an uncontrolled workflow.</p>

    <h2>Guardrails, approvals and the action boundary</h2>
    <p>Guardrails should be layered. Authentication and authorisation come first. Then the system can apply scope checks, prompt-injection detection, sensitive-data controls, structured output validation, tool risk ratings and approval rules.</p>
    <p>The most important design distinction is between preparing and acting. Nella may prepare a meeting brief, draft an external email or suggest an internal task. A person should approve consequential external actions. The action broker should verify the actor, matter, recipient, policy and approval before deterministic software sends or changes anything.</p>
    <p>Some actions should be disabled rather than merely gated: filing a court document, transferring funds or any action the firm decides Nella must never take. A clear “never” boundary is easier to test and explain than a vague promise to be careful.</p>

    <h2>Observability is part of correctness</h2>
    <p>Logs should help answer what happened without becoming an uncontrolled copy of all client content. At minimum, the operating view should make it possible to inspect request and workflow identifiers, user and matter scope, source references, model route, tool calls, policy version, approval events, latency, cost, failure type and final status.</p>
    <p>Quality needs its own telemetry. Keep a representative evaluation set covering retrieval, grounding, permissions, output usefulness, refusal behaviour, tool choice and approval boundaries. When a connector, model, prompt, policy or index changes, rerun the relevant tests and record the result.</p>
    <p>NIST’s AI Risk Management Framework organises risk work around Govern, Map, Measure and Manage. That is a useful operational rhythm for a system like Nella: decide the rules, understand the context, test the behaviour and act on what the evidence shows.</p>

    <h2>Human support closes the loop</h2>
    <p>Support is not separate from architecture. A human support path provides a controlled place for uncertainty, incidents, workflow changes and user feedback. It also gives the team signals about where the system is confusing, over-reaching or missing important context.</p>
    <p>Nella’s model includes human support seven days a week. The technical implementation should connect that support to the same operational trace as the workflow: what the user asked, what the system saw, what was prepared, what was blocked, what the human changed and whether the case should become a new evaluation or configuration rule.</p>

    <h2>The architecture in one sentence</h2>
    <p>Nella is designed as a policy-controlled workflow system around approved firm context, with models inside the system rather than the model being the system.</p>
    <p>That gives a firm useful choices: managed private, customer-controlled cloud or local/sovereign deployment; different model routes for different workloads; durable records where the firm needs them; and human review where the consequences require it. The choices still need to be implemented, tested and documented for the particular firm.</p>
    <p><a href="/privacy-and-deployment">Review the deployment questions</a> or <a href="/consultation">book a private consultation</a> to discuss a first workflow, data boundary, model policy and cost envelope with Nella.</p>

    <p><strong>Author/review note:</strong> Written for Nella on 27 August 2026. Architecture patterns are based on the Nella planning documents and the primary sources listed below. Provider behaviour, prices, retention terms and model capabilities change; verify them for the selected deployment.</p>
  </>,
};
