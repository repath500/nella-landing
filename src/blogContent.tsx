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
};
