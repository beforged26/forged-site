// The FORGED Huddle — one post per week, Wednesdays, starting June 17, 2026.
// A post goes live on the site when it has a `body`. Set `publishDate` to the day it goes live (one per week).
// To publish: add paragraphs to `body` (an array of strings; "## " prefix = subheading).

import { bodies, substackDates, substackTitles } from "./journalBodies";

export type JournalPost = {
  issue: number;
  slug: string;
  title: string;
  pillar: string;
  date: string; // ISO yyyy-mm-dd — the day it goes live on the site
  summary: string;
  body?: string[];
};


const START = Date.UTC(2026, 5, 17); // June 17, 2026 (a Wednesday)
const dateFor = (issue: number) =>
  new Date(START + (issue - 1) * 7 * 86400000).toISOString().slice(0, 10);

const raw: (Omit<JournalPost, "date" | "slug"> & { publishDate?: string })[] = [
  { issue: 1, title: "Why I Built FORGED (And Who It's Really For)", pillar: "Access & Opportunity", summary: "The origin story: the gap I saw in athlete development and the problem FORGED exists to solve." },
  { issue: 2, title: "Signs You've Hit the Ceiling of Where You Are", pillar: "Performance", summary: "Hitting the ceiling is normal. Here is what it looks like, and what elite athletes do about it." },
  { issue: 3, title: "What Most Coaches Get Wrong About Development", pillar: "Performance", summary: "Common coaching mistakes that stall athlete growth." },
  { issue: 4, title: "The Wellness Conversation No One Is Having With Athletes", pillar: "Wellness", summary: "Body image, athlete identity and burnout: the things most camps never address." },
  { issue: 5, title: "The Recruiting Game Is Broken. Here's What Actually Works.", pillar: "Access & Opportunity", summary: "An honest take on recruiting: what coaches want versus what athletes think they want." },
  { issue: 6, title: "Mental Performance Isn't a Bonus. It's the Foundation.", pillar: "Mental", summary: "Why the mental side should be trained like the physical side." },
  { issue: 7, title: "What I've Learned Watching Elite Athletes Up Close", pillar: "Performance", summary: "Personal observations from years inside the elite athlete world." },
  { issue: 8, title: "Iron Sharpens Iron: Why the Room You're In Matters", pillar: "Access & Opportunity", summary: "The peer effect: how your environment shapes your ceiling." },
  { issue: 9, title: "Coach Feature: What Most Coaches Won't Teach", pillar: "Performance", summary: "The first FORGED coach spotlight." },
  { issue: 10, title: "The Pressure Problem: Why Athletes Crumble and How to Fix It", pillar: "Mental", summary: "A practical breakdown of pressure training." },
  { issue: 11, title: "Nutrition Myths That Are Holding Athletes Back", pillar: "Wellness", summary: "Common athlete nutrition myths, debunked." },
  { issue: 12, title: "Athlete Feature: What She Gave Up to Get Here", pillar: "Access & Opportunity", summary: "An athlete story about sacrifice, grit and access." },
  { issue: 13, title: "Registration Is Open. Here's What to Expect at FORGED.", pillar: "Access & Opportunity", summary: "A full breakdown of the four days in Mesa." },
  { issue: 14, title: "Coach Feature: The Session I've Never Seen Anyone Else Run", pillar: "Performance", summary: "The second FORGED coach spotlight." },
  { issue: 15, title: "Why We Built a Scholarship Program (And How to Apply)", pillar: "Access & Opportunity", summary: "The access mission behind FORGED, and how to apply for a scholarship." },
  { issue: 16, title: "The Difference Between a Good Athlete and a Great One", pillar: "Performance", summary: "Beyond talent: habits, coachability and mindset." },
  { issue: 17, title: "What Sports Psychology Actually Looks Like in Practice", pillar: "Mental", summary: "Concrete tools, not theory." },
  { issue: 18, title: "Coach Feature: Why I Said Yes to FORGED", pillar: "Access & Opportunity", summary: "The third FORGED coach spotlight." },
  { issue: 19, title: "The Athlete Identity Crisis No One Talks About", pillar: "Wellness", summary: "What happens when sport becomes your whole identity, and what healthy looks like." },
  { issue: 20, title: "4 Weeks Out: What to Know Before You Arrive in Mesa", pillar: "Access & Opportunity", summary: "What to bring, what to expect and how to prepare mentally." },
  { issue: 21, title: "The One Thing Every Great Coach Has in Common", pillar: "Performance", summary: "A synthesis of everything we've written about coaching." },
  { issue: 22, title: "Why Mesa. Why November. Why Now.", pillar: "Access & Opportunity", summary: "The vision for why this moment matters for athlete and coach development." },
  { issue: 23, title: "We Start in 8 Days. Here's What's Coming.", pillar: "Access & Opportunity", summary: "Session previews and speaker teasers before the summit begins." },
  { issue: 24, title: "Day 1 at FORGED: It Begins.", pillar: "Event Week", summary: "Live from Mesa." },
  { issue: 25, title: "What FORGED Week Taught Me (And What's Next)", pillar: "Event Week", summary: "A recap of the inaugural class and a look at what's next." },
];

const slugify = (s: string) =>
  s.toLowerCase().replace(/['’]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const posts: JournalPost[] = raw.map(({ publishDate, ...p }) => {
  const title = substackTitles[p.issue] ?? p.title;
  return {
    ...p,
    title,
    body: bodies[p.issue] ?? p.body,
    slug: `${p.issue}-${slugify(title)}`.slice(0, 70).replace(/-$/, ""),
    date: substackDates[p.issue] ?? publishDate ?? dateFor(p.issue),
  };
});

// Only written posts show on the site. Unwritten ones stay hidden until they have a body.
export const isVisible = (p: JournalPost) => isLive(p);

export const isLive = (p: JournalPost) => !!p.body?.length;

export const formatDate = (iso: string) =>
  new Date(iso + "T12:00:00Z").toLocaleDateString("en-US", {
    month: "long", day: "numeric", year: "numeric", timeZone: "UTC",
  });
