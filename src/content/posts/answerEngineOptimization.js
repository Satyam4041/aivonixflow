/**
 * Article: Answer Engine Optimization.
 *
 * Body is structured data rather than JSX so scripts/seo-build.mjs can render
 * the complete text into static HTML and llms.txt. See src/content/inline.js
 * for the inline markup rules.
 */

export const answerEngineOptimization = {
  slug: "answer-engine-optimization-aeo-guide",
  title:
    "Answer Engine Optimization (AEO): How to Get Cited by ChatGPT, Claude and Perplexity",
  description:
    "What AEO is, how it differs from SEO, how answer engines choose their sources, and the writing and technical changes that make a page quotable inside AI-generated answers.",
  datePublished: "2026-09-23",
  dateModified: "2026-09-23",
  author: "AivonixFlow Team",
  readingTime: 12,
  tags: ["AEO", "SEO", "AI Search"],
  hero: {
    src: "/blog/seo-vs-aeo.svg",
    alt: "Comparison diagram: on the left a traditional search results page with ten ranked links where the prize is a click on position one; on the right an AI-generated answer synthesised from several sources, naming two of them, where the prize is being cited inside the answer.",
    width: 1200,
    height: 630,
  },

  body: [
    {
      type: "p",
      text: "A growing share of questions now get answered without anyone visiting a website. Someone asks ChatGPT, Perplexity or Google's AI Overview, reads the answer, and stops. If your page was one of the sources behind that answer, you were named. If it was not, you were not in the conversation at all — and no amount of ranking well on page one changes that.",
    },
    {
      type: "p",
      text: "That is the gap Answer Engine Optimization addresses. It is not a replacement for SEO, and most of the technical hygiene overlaps. But the thing you are competing for is different, and so are some of the tactics.",
    },

    {
      type: "h2",
      text: "What is Answer Engine Optimization?",
    },
    {
      type: "p",
      text: "**Answer Engine Optimization (AEO) is the practice of structuring content so that AI answer engines can quote it accurately and attribute it to you.** It depends on four things: question-led structure, answers that make sense in isolation, machine-readable markup, and crawler access for the bots that build these indexes.",
    },
    {
      type: "p",
      text: "The shift in mindset is from *ranking* to *being quoted*. A search engine hands a visitor a list and lets them choose. An answer engine reads several sources, writes one answer, and names a few of them. You are not trying to beat nine other links to a position. You are trying to be the passage that is clear enough to lift out and reliable enough to credit.",
    },

    {
      type: "figure",
      src: "/blog/seo-vs-aeo.svg",
      alt: "Two panels on the same query. The left panel shows a classic search results page with ranked links where position one is the prize and the reward is a click. The right panel shows a single synthesised AI answer citing two named sources, where the reward is being named as the authority.",
      caption:
        "Same question, two different competitions. One rewards position; the other rewards clarity.",
      width: 1200,
      height: 630,
    },

    {
      type: "h2",
      text: "How is AEO different from SEO?",
    },
    {
      type: "p",
      text: "They share a foundation — crawlable pages, fast loading, sensible information architecture, genuine expertise. Where they diverge:",
    },
    {
      type: "table",
      headers: ["", "Traditional SEO", "AEO"],
      rows: [
        ["What you compete for", "A ranked position", "A citation inside an answer"],
        ["The reward", "A click", "Being named as the source"],
        ["Winning content", "Comprehensive pages", "Self-contained passages"],
        ["Keyword behaviour", "Phrase matching matters", "Meaning matters more than phrasing"],
        ["Structure that helps", "Headings and internal links", "Questions with direct answers"],
        ["Measurement", "Rankings and traffic", "Citations and brand mentions"],
      ],
    },
    {
      type: "p",
      text: "The most important row is the third. SEO rewards a long page that covers everything, because dwell time and comprehensiveness help. AEO rewards a page made of passages that each survive being removed from their context — because that is exactly what happens to them.",
    },
    {
      type: "p",
      text: "These are not in conflict. A well-structured long page made of self-contained sections does both. But if you have ever written a paragraph that opens with \"As mentioned above, this approach…\", you have written something an answer engine cannot use.",
    },

    {
      type: "h2",
      text: "How do answer engines choose their sources?",
    },
    {
      type: "p",
      text: "No model publishes its selection criteria, and anyone claiming exact weightings is guessing. But the observable pattern across systems is consistent enough to act on. Sources tend to be favoured when they are:",
    },
    {
      type: "ul",
      items: [
        "**Retrievable** — the crawler can fetch the page and read the content without executing JavaScript.",
        "**Unambiguous** — the passage states a claim directly rather than implying it.",
        "**Specific** — numbers, named systems and concrete conditions, not adjectives.",
        "**Attributable** — the page says who wrote it and when, so the model can weigh freshness and accountability.",
        "**Corroborated** — the claim is consistent with what other reliable sources say. A passage that contradicts the consensus is quoted less, whether or not it is right.",
        "**Structurally clear** — headings that pose questions and content that answers them, so the relevant chunk is easy to isolate.",
      ],
    },
    {
      type: "p",
      text: "That fifth point has an uncomfortable implication worth naming: answer engines are conservative. Genuinely novel claims get cited less than well-established ones. If your differentiator is a contrarian position, expect AEO to reward the surrounding explanatory content long before it rewards the contrarian part.",
    },

    {
      type: "h2",
      text: "What makes a passage quotable?",
    },
    {
      type: "p",
      text: "The single most useful test: **cut the paragraph out of the page, show it to someone with no context, and see whether it still answers the question.** If it does not, no model can use it either.",
    },
    {
      type: "figure",
      src: "/blog/aeo-quotable-passage.svg",
      alt: "Two versions of the same paragraph compared. The uncited version opens with vague marketing language, uses pronouns that depend on earlier sentences, and contains no specifics. The cited version defines the term in its first sentence, avoids pronouns pointing outside the passage, and names the three things it depends on. Below, four technical requirements: crawler access, structured data, server-rendered HTML, and a stated date and author.",
      caption:
        "Both paragraphs contain the same facts. Only one survives being lifted out.",
      width: 1200,
      height: 700,
    },
    {
      type: "p",
      text: "Concretely, that means:",
    },
    {
      type: "ol",
      items: [
        "**Answer in the first sentence.** Put the definition or conclusion first, then elaborate. Do not build up to it.",
        "**Repeat the subject instead of using pronouns.** \"AEO relies on…\" travels; \"It relies on…\" does not.",
        "**Use question-shaped headings.** A heading that matches how someone actually asks makes the matching chunk obvious.",
        "**Include specifics.** \"Three to six months\" is quotable. \"Varies depending on your needs\" is not.",
        "**State conditions explicitly.** \"For sites under 50 pages\" gives a model the boundary it needs to quote you responsibly.",
        "**Say who and when.** A visible author and date lets the model judge freshness.",
      ],
    },
    {
      type: "callout",
      title: "What not to do",
      text: "Keyword stuffing, hidden text, FAQ markup describing content a visitor cannot see, and pages built to match questions without answering them are all spam under Google's policies — and they do not work on answer engines either, which evaluate the passage rather than the density of a phrase. The tactics that work here are indistinguishable from writing clearly.",
    },

    {
      type: "h2",
      text: "The technical layer",
    },
    {
      type: "p",
      text: "Good writing that a crawler cannot read scores zero. Four technical requirements carry most of the weight.",
    },
    {
      type: "h3",
      text: "1. Let the AI crawlers in",
    },
    {
      type: "p",
      text: "Answer engines use their own crawlers — GPTBot and OAI-SearchBot for ChatGPT, ClaudeBot for Claude, PerplexityBot for Perplexity, and Google-Extended for Google's AI products. Many sites block these by default or through a copied robots.txt. **Being cited in an AI answer requires being readable by the crawler that builds that index**, so if you want the visibility, allow them explicitly.",
    },
    {
      type: "h3",
      text: "2. Serve HTML, not a JavaScript shell",
    },
    {
      type: "p",
      text: "This is the one that silently disqualifies the most sites. Googlebot renders JavaScript, so a single-page React or Vue app can rank perfectly well. **Most AI crawlers do not execute JavaScript at all** — they fetch the HTML and read what is there. On a client-rendered site that is an empty container and one generic title, no matter how good the content is once the page boots.",
    },
    {
      type: "p",
      text: "The fix is prerendering or server-side rendering, so each URL returns real HTML with its own title, description, structured data and body text. Static site generation, a framework with SSR, or a build step that writes one HTML file per route all solve it.",
    },
    {
      type: "h3",
      text: "3. Add structured data that describes visible content",
    },
    {
      type: "p",
      text: "JSON-LD gives machines an unambiguous version of what the page says. `FAQPage` for question-and-answer sections, `Article` or `BlogPosting` for posts, `Organization` to establish who you are, and `BreadcrumbList` for hierarchy. The rule that matters: the markup must describe content a visitor can actually see. Schema for hidden content is a spam violation and risks manual action.",
    },
    {
      type: "h3",
      text: "4. Publish an llms.txt",
    },
    {
      type: "p",
      text: "An emerging convention: a plain-text file at your root that gives language models a curated map of your site — what you do, which pages matter, and the key questions you answer. It is not yet a formal standard and no engine guarantees it is read, but it costs almost nothing and removes ambiguity about what your site is for.",
    },

    {
      type: "h2",
      text: "How do you measure AEO?",
    },
    {
      type: "p",
      text: "Awkwardly, and less precisely than SEO. There is no Search Console for citations. What works in practice:",
    },
    {
      type: "ul",
      items: [
        "**Ask the engines directly.** Query ChatGPT, Claude, Perplexity and Google AI Overviews with the questions you want to own, and log who gets cited. Repeat monthly. Crude, but it is the ground truth.",
        "**Watch referral traffic from AI domains.** Perplexity and ChatGPT pass referrers on links inside answers. Small numbers, but the trend is real.",
        "**Track branded search volume.** Being named in answers drives people to search your name later, which shows up in Search Console even when the citation does not.",
        "**Check your server logs for AI crawlers.** If GPTBot and ClaudeBot are not fetching your pages, nothing downstream can happen. This is the first thing to verify and the easiest to check.",
      ],
    },
    {
      type: "p",
      text: "That last one is worth doing before anything else. Sites frequently discover the whole problem is that their robots.txt has been quietly blocking the crawlers all along.",
    },

    {
      type: "h2",
      text: "How long does AEO take?",
    },
    {
      type: "p",
      text: "Two different clocks. **Technical changes — crawler access, prerendering, structured data — register within days to a few weeks**, because they change what the crawler receives on its next visit. **Citation in AI answers typically takes three to six months**, because answer engines need repeated, consistent signals before treating a source as reliable, and models are refreshed on their own schedule rather than yours.",
    },
    {
      type: "p",
      text: "Anyone promising AI citations in a fortnight is describing something they cannot control.",
    },

    {
      type: "h2",
      text: "Where to start",
    },
    {
      type: "p",
      text: "In order, because the sequence matters:",
    },
    {
      type: "ol",
      items: [
        "Check whether AI crawlers can reach your site at all, and unblock them if not.",
        "Check whether your pages serve real HTML or a JavaScript shell. Disable JavaScript in your browser and reload — what remains is roughly what an AI crawler sees.",
        "Add structured data for content that is already visible.",
        "Rewrite your most important pages so each section answers one question in its opening sentence.",
        "Log which sources the engines currently cite for your key questions, so you have a baseline.",
      ],
    },
    {
      type: "p",
      text: "Steps one and two are where most sites find their actual problem, and both can be checked this afternoon. The writing work in step four is the part that compounds.",
    },
    {
      type: "p",
      text: "AivonixFlow does this work as a service — see [Digital Marketing & AI Growth](/services/digital-marketing) for AEO and GEO engagements, or request a [free audit](/free-audit) if you would rather start by finding out where your site currently stands.",
    },
  ],

  faq: [
    {
      q: "What is Answer Engine Optimization (AEO)?",
      a: "Answer Engine Optimization is the practice of structuring content so AI answer engines such as ChatGPT, Claude, Perplexity and Google's AI Overviews can quote it accurately and attribute it to you. It depends on question-led structure, answers that make sense when removed from their surrounding context, machine-readable structured data, and allowing the AI crawlers that build these indexes to access your pages.",
    },
    {
      q: "How is AEO different from SEO?",
      a: "Traditional SEO competes for a ranked position on a results page, where the reward is a click. AEO competes to be the source an AI model cites inside its answer, where the reward is being named as the authority. The technical foundations overlap heavily, but AEO puts far more weight on unambiguous phrasing, self-contained passages and structured data, because the model extracts a chunk rather than sending a visitor to the whole page.",
    },
    {
      q: "Do AI crawlers like GPTBot and ClaudeBot execute JavaScript?",
      a: "Generally no. Unlike Googlebot, which renders JavaScript before indexing, the crawlers behind most answer engines fetch a page's HTML and read what is already there. On a client-rendered single-page application that means they receive an empty container and one generic title regardless of how good the content is once the page loads, which is why prerendering or server-side rendering is a prerequisite for AEO on JavaScript-heavy sites.",
    },
    {
      q: "Should I allow GPTBot and other AI crawlers in robots.txt?",
      a: "If you want to appear in AI-generated answers, yes — being cited requires being readable by the crawler that builds that index. Blocking them protects your content from being used for training and answers, but it also guarantees you cannot be cited. It is a genuine trade-off between control and visibility, and the right answer depends on whether your content is the product or the marketing for the product.",
    },
    {
      q: "What is llms.txt and do I need one?",
      a: "An llms.txt is a plain-text file at your site root that gives language models a curated map of your site: what you do, which pages matter, and the key questions you answer. It is an emerging convention rather than a formal standard, and no engine guarantees it is read. It costs very little to publish and removes ambiguity about your site's purpose, which makes it worth adding even though its impact is not yet proven.",
    },
    {
      q: "How long does AEO take to show results?",
      a: "Technical changes such as crawler access, prerendering and structured data register within days to a few weeks, because they change what the crawler receives on its next visit. Being cited in AI answers typically takes three to six months, since answer engines need repeated, consistent signals before treating a source as reliable, and models are refreshed on their own schedule. Anyone promising AI citations within a fortnight is describing something outside their control.",
    },
    {
      q: "How do you measure whether AEO is working?",
      a: "There is no equivalent of Search Console for AI citations, so measurement combines several imperfect signals: querying ChatGPT, Claude, Perplexity and Google AI Overviews monthly with your target questions and logging who gets cited; watching referral traffic from AI domains, which pass referrers on links inside answers; tracking branded search volume, which rises when people are shown your name in an answer; and checking server logs to confirm AI crawlers are fetching your pages at all. The last one should be verified first, since nothing downstream can happen without it.",
    },
  ],
};
