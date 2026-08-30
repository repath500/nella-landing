import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "@phosphor-icons/react/dist/csr/ArrowUp";
import { BatteryHigh } from "@phosphor-icons/react/dist/csr/BatteryHigh";
import { Camera } from "@phosphor-icons/react/dist/csr/Camera";
import { CaretLeft } from "@phosphor-icons/react/dist/csr/CaretLeft";
import { CaretRight } from "@phosphor-icons/react/dist/csr/CaretRight";
import { CellSignalFull } from "@phosphor-icons/react/dist/csr/CellSignalFull";
import { Check } from "@phosphor-icons/react/dist/csr/Check";
import { FilePdf } from "@phosphor-icons/react/dist/csr/FilePdf";
import { DotsThreeVertical } from "@phosphor-icons/react/dist/csr/DotsThreeVertical";
import { Microphone } from "@phosphor-icons/react/dist/csr/Microphone";
import { Paperclip } from "@phosphor-icons/react/dist/csr/Paperclip";
import { Phone } from "@phosphor-icons/react/dist/csr/Phone";
import { Plus } from "@phosphor-icons/react/dist/csr/Plus";
import { WifiHigh } from "@phosphor-icons/react/dist/csr/WifiHigh";

type PhoneProps = {
  active: boolean;
  replayKey: number;
  platform: "ios" | "android";
};

function detectChatPlatform(): PhoneProps["platform"] {
  const requestedPlatform = new URLSearchParams(window.location.search).get("platform");
  if (requestedPlatform === "android" || requestedPlatform === "ios") {
    return requestedPlatform;
  }

  const userAgentData = (
    navigator as Navigator & { userAgentData?: { platform?: string } }
  ).userAgentData;
  const platform = `${userAgentData?.platform ?? ""} ${navigator.userAgent}`;
  return /android/i.test(platform) ? "android" : "ios";
}

const demos = [
  {
    number: "01",
    label: "Ask Nella",
    title: "Start with a message, not a search.",
    body: "Ask for the matter, meeting or next step in plain language. Nella works from the approved context around your firm.",
  },
  {
    number: "02",
    label: "Nella checks in",
    title: "The useful message can arrive first.",
    body: "With the right permissions and rules in place, Nella can surface prepared work before it becomes another loose end.",
  },
  {
    number: "03",
    label: "Find the source",
    title: "The answer comes with the document.",
    body: "Retrieve approved material without losing where it came from. Open the linked source and review it in context.",
  },
] as const;

function PhoneShell({
  children,
  active,
  replayKey,
  platform,
}: PhoneProps & { children: React.ReactNode }) {
  const isAndroid = platform === "android";

  return (
    <div
      className={`demo-phone ${isAndroid ? "is-whatsapp" : "is-imessage"} ${active ? "is-playing" : ""}`}
      key={replayKey}
      aria-label={isAndroid ? "WhatsApp on Android demonstration" : "iOS Messages demonstration"}
    >
      <div className="demo-phone-screen">
        <div className="demo-statusbar" aria-hidden="true">
          <span>{isAndroid ? "09:41" : "9:41"}</span>
          <i />
          <div>
            <CellSignalFull size={14} weight="fill" />
            <WifiHigh size={15} weight="bold" />
            <BatteryHigh size={20} weight="fill" />
          </div>
        </div>
        <header className="demo-chat-header">
          <CaretLeft size={22} weight="bold" aria-hidden="true" />
          {isAndroid ? (
            <>
              <div className="demo-whatsapp-contact">
                <span className="demo-avatar">N</span>
                <span>
                  <strong>Nella</strong>
                  <small>online</small>
                </span>
              </div>
              <div className="demo-whatsapp-actions" aria-hidden="true">
                <Camera size={18} weight="bold" />
                <Phone size={17} weight="fill" />
                <DotsThreeVertical size={19} weight="bold" />
              </div>
            </>
          ) : (
            <>
              <div>
                <span className="demo-avatar">N</span>
                <strong>Nella</strong>
                <small>Private assistant</small>
              </div>
              <span className="demo-header-spacer" aria-hidden="true" />
            </>
          )}
        </header>
        <div className="demo-imessage-note">
          {isAndroid ? "Today" : "iMessage · Today 9:41"}
        </div>
        <div className="demo-chat-body">{children}</div>
        {isAndroid ? (
          <div className="demo-composer demo-whatsapp-composer" aria-hidden="true">
            <span className="demo-input">
              <span>Message</span>
              <Paperclip size={19} weight="bold" />
              <Camera size={18} weight="fill" />
            </span>
            <span className="demo-whatsapp-mic"><Microphone size={18} weight="fill" /></span>
          </div>
        ) : (
          <div className="demo-composer" aria-hidden="true">
            <span className="demo-composer-plus"><Plus size={18} weight="bold" /></span>
            <span className="demo-input">iMessage</span>
            <Microphone size={18} weight="fill" />
          </div>
        )}
        <div className="demo-home-indicator" aria-hidden="true" />
      </div>
    </div>
  );
}

function AskNellaPhone(props: PhoneProps) {
  return (
    <PhoneShell {...props}>
      <div className="demo-bubble demo-bubble-user demo-message-1">
        Nella, can you bring me up to speed on the Murphy matter before my 10:30?
      </div>
      <div className="demo-read-receipt demo-message-2">Delivered</div>
      <div className="demo-typing demo-message-3" aria-label="Nella is typing">
        <i /><i /><i />
      </div>
      <div className="demo-bubble demo-bubble-nella demo-message-4">
        Of course. I’ve checked the approved matter workspace.
      </div>
      <div className="demo-summary-card demo-message-5">
        <span>MURPHY · MATTER BRIEF</span>
        <strong>You’re ready for 10:30.</strong>
        <ul>
          <li><Check size={13} weight="bold" /> Medical report received Friday</li>
          <li><Check size={13} weight="bold" /> Counsel’s note added this morning</li>
          <li><span className="demo-open-dot" /> Signed authority still outstanding</li>
        </ul>
      </div>
    </PhoneShell>
  );
}

function NellaFirstPhone(props: PhoneProps) {
  return (
    <PhoneShell {...props}>
      <div className="demo-bubble demo-bubble-nella demo-message-1">
        Morning Aoife. Two things need your review before your first call.
      </div>
      <div className="demo-task-card demo-message-2">
        <span>READY FOR REVIEW</span>
        <div>
          <i>08:15</i>
          <p><strong>Draft follow-up</strong><small>O’Donnell · 2 min review</small></p>
          <CaretRight size={16} weight="bold" />
        </div>
        <div>
          <i>09:00</i>
          <p><strong>Meeting brief</strong><small>Keane & Co. · prepared</small></p>
          <CaretRight size={16} weight="bold" />
        </div>
      </div>
      <div className="demo-bubble demo-bubble-user demo-message-3">
        Send me the meeting brief here.
      </div>
      <div className="demo-bubble demo-bubble-nella demo-message-4">
        Done — I’ve added it below with the source links intact.
      </div>
    </PhoneShell>
  );
}

function DocumentPhone(props: PhoneProps & { onOpenDocument: () => void }) {
  return (
    <PhoneShell {...props}>
      <div className="demo-bubble demo-bubble-user demo-message-1">
        Can you pull the signed attendance note from O’Donnell?
      </div>
      <div className="demo-bubble demo-bubble-nella demo-message-2">
        Found it in the approved matter folder. This is the signed final version.
      </div>
      <a
        className="demo-file-card demo-message-3"
        href="#demo-document-preview"
        onClick={(event) => {
          event.preventDefault();
          props.onOpenDocument();
        }}
      >
        <span className="demo-file-icon"><FilePdf size={24} weight="fill" /></span>
        <span>
          <strong>Attendance note — signed.pdf</strong>
          <small>O’Donnell · 6 pages · Final</small>
        </span>
        <CaretRight size={18} weight="bold" />
      </a>
      <div className="demo-source-note demo-message-4">
        <Check size={13} weight="bold" /> Source: iManage · last updated 28 Aug
      </div>
      <div className="demo-bubble demo-bubble-user demo-message-5">
        Perfect, thank you.
      </div>
    </PhoneShell>
  );
}

export default function DemoPage() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeDemo, setActiveDemo] = useState(0);
  const [replayKey, setReplayKey] = useState(0);
  const [documentOpen, setDocumentOpen] = useState(false);
  const [chatPlatform] = useState<PhoneProps["platform"]>(detectChatPlatform);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(track.querySelectorAll<HTMLElement>(".demo-slide"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = cards.indexOf(visible.target as HTMLElement);
        if (index >= 0) setActiveDemo(index);
      },
      { root: track, threshold: [0.45, 0.65, 0.85] },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!documentOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDocumentOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [documentOpen]);

  const goToDemo = (index: number) => {
    const nextIndex = Math.max(0, Math.min(demos.length - 1, index));
    const slide = trackRef.current?.querySelectorAll<HTMLElement>(".demo-slide")[nextIndex];
    slide?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    setActiveDemo(nextIndex);
  };

  return (
    <>
      <section className="demo-hero" aria-labelledby="demo-title">
        <div className="demo-hero-copy reveal" style={{ "--i": 1 } as React.CSSProperties}>
          <p className="hero-kicker">See Nella at work</p>
          <h1 id="demo-title">A useful conversation, already in your pocket.</h1>
          <p>
            Message Nella like a colleague. Ask for context, receive prepared work,
            and follow every answer back to its source.
          </p>
        </div>
        <div className="demo-hero-side reveal" style={{ "--i": 2 } as React.CSSProperties}>
          <p>Three short conversations</p>
          <strong>Scroll or swipe to explore</strong>
          <i aria-hidden="true"><ArrowUp size={18} weight="bold" /></i>
        </div>
      </section>

      <section className="demo-stage" aria-label="Interactive Nella conversation demonstrations">
        <header className="demo-stage-toolbar">
          <div>
            <span>Conversation {activeDemo + 1} of {demos.length}</span>
            <strong>{demos[activeDemo].label}</strong>
          </div>
          <div className="demo-toolbar-actions">
            <span className="demo-platform-badge">
              {chatPlatform === "android" ? "Android detected · WhatsApp" : "iPhone preview · iMessage"}
            </span>
            <button
              className="demo-replay"
              type="button"
              onClick={() => setReplayKey((value) => value + 1)}
            >
              Replay conversation
            </button>
            <button
              type="button"
              aria-label="Previous demo"
              disabled={activeDemo === 0}
              onClick={() => goToDemo(activeDemo - 1)}
            >
              <CaretLeft size={20} weight="bold" />
            </button>
            <button
              type="button"
              aria-label="Next demo"
              disabled={activeDemo === demos.length - 1}
              onClick={() => goToDemo(activeDemo + 1)}
            >
              <CaretRight size={20} weight="bold" />
            </button>
          </div>
        </header>

        <div className="demo-track" ref={trackRef}>
          {demos.map((demo, index) => (
            <article className="demo-slide" key={demo.number} aria-labelledby={`demo-slide-${index}`}>
              <div className="demo-slide-copy">
                <span>Conversation {index + 1}</span>
                <h2 id={`demo-slide-${index}`}>{demo.title}</h2>
                <p>{demo.body}</p>
                <small>Fictional matter data shown for demonstration.</small>
              </div>
              <div className="demo-phone-wrap">
                {index === 0 && <AskNellaPhone active={activeDemo === index} replayKey={replayKey} platform={chatPlatform} />}
                {index === 1 && <NellaFirstPhone active={activeDemo === index} replayKey={replayKey} platform={chatPlatform} />}
                {index === 2 && (
                  <DocumentPhone
                    active={activeDemo === index}
                    replayKey={replayKey}
                    platform={chatPlatform}
                    onOpenDocument={() => setDocumentOpen(true)}
                  />
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="demo-pagination" role="group" aria-label="Choose a demonstration">
          {demos.map((demo, index) => (
            <button
              type="button"
              className={activeDemo === index ? "is-active" : ""}
              aria-label={`Show demo ${index + 1}: ${demo.label}`}
              aria-current={activeDemo === index ? "true" : undefined}
              onClick={() => goToDemo(index)}
              key={demo.number}
            />
          ))}
        </div>
      </section>

      <section className="demo-after" data-motion>
        <p className="demo-after-kicker">Familiar on the surface</p>
        <h2>The important work happens behind the message.</h2>
        <p>
          Nella is configured around the firm’s approved systems, permissions,
          sources and review points. The conversation stays simple because the
          operating model is deliberate.
        </p>
        <a className="button" href="/consultation">Design your first workflow</a>
      </section>

      {documentOpen && (
        <div className="demo-document-modal" role="dialog" aria-modal="true" aria-labelledby="demo-document-title">
          <button
            className="demo-document-backdrop"
            type="button"
            aria-label="Close document preview"
            onClick={() => setDocumentOpen(false)}
          />
          <div className="demo-document-sheet" id="demo-document-preview">
            <header>
              <div>
                <span>Document preview</span>
                <h2 id="demo-document-title">Attendance note — signed</h2>
              </div>
              <button type="button" onClick={() => setDocumentOpen(false)}>Close</button>
            </header>
            <div className="demo-document-paper">
              <span>O’Donnell · Matter 2026/184</span>
              <h3>Attendance note</h3>
              <p><strong>Date:</strong> 28 August 2026</p>
              <p><strong>Attendees:</strong> A. Byrne, Client</p>
              <div />
              <p>This fictional preview shows how a linked source can open directly from a Nella conversation.</p>
              <p>No real client or matter information is displayed in this demonstration.</p>
              <footer>Signed electronically · Final version</footer>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
